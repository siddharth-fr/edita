'use client';
import { useState } from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export function PdfToWordClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<{ url: string; size: number } | null>(null);

    const handleUpload = (files: File[]) => {
        const validFile = files.find((f) => f.type === 'application/pdf');
        if (validFile) {
            setFile(validFile);
            setResult(null);
            setProgress(0);
        }
    };

    const convertPdfToWord = async () => {
        if (!file) return;
        setIsProcessing(true);
        setProgress(0);

        try {
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const numPages = pdf.numPages;

            const paragraphs: Paragraph[] = [];

            for (let i = 1; i <= numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();

                let lastY = -1;
                let currentLine = '';

                for (const item of textContent.items) {
                    if ('str' in item && 'transform' in item) {
                        const y = item.transform[5];

                        if (lastY !== -1 && Math.abs(lastY - y) > 5) {
                            // New Line
                            if (currentLine.trim().length > 0) {
                                paragraphs.push(
                                    new Paragraph({
                                        children: [new TextRun(currentLine)],
                                    })
                                );
                            }
                            currentLine = '';
                        }

                        currentLine += item.str;
                        lastY = y;
                    }
                }

                // Push last line of page
                if (currentLine.trim().length > 0) {
                    paragraphs.push(
                        new Paragraph({
                            children: [new TextRun(currentLine)],
                        })
                    );
                }

                // Page break
                if (i < numPages) {
                    paragraphs.push(new Paragraph({ children: [new TextRun({ text: "", break: 1 })] }));
                }

                setProgress(Math.round((i / numPages) * 100));
            }

            const doc = new Document({
                sections: [{
                    properties: {},
                    children: paragraphs.length > 0 ? paragraphs : [new Paragraph({ children: [new TextRun("No extractable text found in this PDF.")] })],
                }],
            });

            const blob = await Packer.toBlob(doc);

            setResult({
                url: URL.createObjectURL(blob),
                size: blob.size
            });

        } catch (error) {
            console.error('Conversion failed', error);
            alert('Failed to extract text from PDF. Ensure it contains text and is not purely scanned images.');
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

                    <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-6 items-center">

                        {isProcessing && (
                            <div className="w-full max-w-md mx-auto mb-4">
                                <div className="flex justify-between text-sm font-medium mb-2 text-emerald-600">
                                    <span>Reading text structure...</span>
                                    <span>{progress}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-3 overflow-hidden border border-border/50">
                                    <div
                                        className="bg-emerald-500 h-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        )}

                        {!result ? (
                            <Button size="lg" onClick={convertPdfToWord} disabled={isProcessing} isLoading={isProcessing}>
                                {isProcessing ? 'Processing Document...' : 'Convert to Word (.docx)'}
                            </Button>
                        ) : (
                            <div className="flex flex-col items-center gap-6 w-full">
                                <div className="flex items-center gap-8 text-sm font-medium w-full justify-center bg-muted/50 p-4 rounded-xl border border-border/50">
                                    <div className="text-center">
                                        <p className="text-muted-foreground">Original (PDF)</p>
                                        <p className="text-foreground text-lg font-bold">{formatBytes(file.size)}</p>
                                    </div>
                                    <div className="h-8 w-px bg-border"></div>
                                    <div className="text-center">
                                        <p className="text-primary font-bold">Extracted (.docx)</p>
                                        <p className="text-primary text-lg font-bold">{formatBytes(result.size)}</p>
                                    </div>
                                </div>

                                <a href={result.url} download={`${file.name.replace(/\.pdf$/i, '')}.docx`}>
                                    <Button size="lg" className="shadow-lg shadow-primary/20 bg-emerald-600 hover:bg-emerald-700 text-white">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download Word Document
                                    </Button>
                                </a>
                            </div>
                        )}

                        <p className="text-xs text-muted-foreground text-center mt-2 max-w-md">
                            Note: This tool uses basic text extraction. Complex formatting, tables, or scanned images will not be carried over cleanly.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
