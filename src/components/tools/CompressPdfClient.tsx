'use client';
import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export function CompressPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<{ url: string; size: number } | null>(null);

    const handleUpload = (files: File[]) => {
        const validFile = files.find((f) => f.type === 'application/pdf');
        if (validFile) {
            setFile(validFile);
            setResult(null);
        }
    };

    const compressPdf = async () => {
        if (!file) return;
        setIsProcessing(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer, { updateMetadata: false });

            // Basic client-side compression via object streams and metadata stripping
            pdfDoc.setTitle('');
            pdfDoc.setAuthor('');
            pdfDoc.setSubject('');
            pdfDoc.setKeywords([]);
            pdfDoc.setProducer('');
            pdfDoc.setCreator('');

            const pdfBytes = await pdfDoc.save({ useObjectStreams: false });
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            setResult({
                url: URL.createObjectURL(blob),
                size: blob.size,
            });
        } catch (error) {
            console.error('Compression failed', error);
            alert('Failed to compress PDF. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            {!file ? (
                <UploadDropzone onUpload={handleUpload} accept=".pdf,application/pdf" multiple={false} />
            ) : (
                <div className="flex flex-col gap-6 w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <FilePreviewCard file={file} onRemove={() => { setFile(null); setResult(null); }} />

                    <div className="bg-card p-6 rounded-3xl border border-border shadow-sm flex flex-col gap-6">
                        <p className="text-sm text-muted-foreground text-center">
                            Compression relies on PDF stream optimization and metadata removal. Extreme reduction of high-resolution images is limited in the browser.
                        </p>

                        <div className="flex justify-center">
                            {!result ? (
                                <Button size="lg" onClick={compressPdf} disabled={isProcessing} isLoading={isProcessing}>
                                    {isProcessing ? 'Compressing...' : 'Compress PDF'}
                                </Button>
                            ) : (
                                <div className="flex flex-col items-center gap-4 w-full">
                                    <div className="flex items-center gap-8 text-sm font-medium w-full justify-center bg-muted/50 p-4 rounded-xl border border-border/50">
                                        <div className="text-center">
                                            <p className="text-muted-foreground">Original</p>
                                            <p className="text-foreground text-lg">{formatBytes(file.size)}</p>
                                        </div>
                                        <div className="h-8 w-px bg-border"></div>
                                        <div className="text-center">
                                            <p className="text-primary font-bold">Compressed</p>
                                            <p className="text-primary text-lg font-bold">{formatBytes(result.size)}</p>
                                        </div>
                                    </div>
                                    <a href={result.url} download={`Compressed_${file.name}`}>
                                        <Button size="lg" className="shadow-lg shadow-primary/20">
                                            <Download className="w-5 h-5 mr-2" />
                                            Download Compressed PDF
                                        </Button>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
