'use client';
import { useState, useRef } from 'react';
import mammoth from 'mammoth';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download, AlertTriangle } from 'lucide-react';

export function WordToPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<{ url: string; size: number } | null>(null);
    const renderContainerRef = useRef<HTMLDivElement>(null);

    const handleUpload = (files: File[]) => {
        const validFile = files.find((f) =>
            f.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
            f.name.endsWith('.docx')
        );
        if (validFile) {
            setFile(validFile);
            setResult(null);
        } else {
            alert("Please upload a .docx file.");
        }
    };

    const convertWordToPdf = async () => {
        if (!file || !renderContainerRef.current) return;
        setIsProcessing(true);

        try {
            const arrayBuffer = await file.arrayBuffer();

            // Parse .docx to HTML
            const result = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer });
            const html = result.value;

            // Render to hidden div
            const container = renderContainerRef.current;
            container.innerHTML = html;

            // Wait for font/styles to naturally apply (small buffer)
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Take snapshot of HTML
            const canvas = await html2canvas(container, {
                scale: 2, // Better print quality
                useCORS: true,
            });

            const imgData = canvas.toDataURL('image/jpeg', 1.0);

            // Calculate layout A4
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

            // Clean up dom
            container.innerHTML = '';

            const pdfBlob = pdf.output('blob');

            setResult({
                url: URL.createObjectURL(pdfBlob),
                size: pdfBlob.size
            });

        } catch (error) {
            console.error('Conversion failed', error);
            alert('Failed to parse Word Document. Complex formatting may not be supported by the browser engine.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            {/* Hidden container for rendering HTML snapshot */}
            <div
                ref={renderContainerRef}
                style={{ width: '800px', padding: '40px', background: 'white', color: 'black', position: 'absolute', left: '-9999px', top: 0 }}
                className="prose max-w-none"
            />

            {!file ? (
                <UploadDropzone onUpload={handleUpload} accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" multiple={false} />
            ) : (
                <div className="flex flex-col gap-6 w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <FilePreviewCard file={file} onRemove={() => { setFile(null); setResult(null); }} />

                    <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-6 items-center">

                        <div className="flex items-center gap-2 text-amber-700 bg-amber-50 px-4 py-3 rounded-xl border border-amber-200 w-full text-sm">
                            <AlertTriangle className="w-5 h-5 shrink-0" />
                            <p>Browser processing uses basic visual snapshots. Exact native margins & page-breaks from Word will not be perfectly preserved.</p>
                        </div>

                        {!result ? (
                            <Button size="lg" onClick={convertWordToPdf} disabled={isProcessing} isLoading={isProcessing} className="w-full sm:w-auto mt-2">
                                {isProcessing ? 'Rendering visual snapshot...' : 'Convert to PDF'}
                            </Button>
                        ) : (
                            <div className="flex flex-col items-center gap-6 w-full">
                                <div className="flex items-center gap-8 text-sm font-medium w-full justify-center bg-muted/50 p-4 rounded-xl border border-border/50">
                                    <div className="text-center">
                                        <p className="text-muted-foreground">Original (.docx)</p>
                                        <p className="text-foreground text-lg font-bold">{formatBytes(file.size)}</p>
                                    </div>
                                    <div className="h-8 w-px bg-border"></div>
                                    <div className="text-center">
                                        <p className="text-primary font-bold">Snapshot (PDF)</p>
                                        <p className="text-primary text-lg font-bold">{formatBytes(result.size)}</p>
                                    </div>
                                </div>

                                <a href={result.url} download={`${file.name.replace(/\.docx$/i, '')}.pdf`} className="w-full sm:w-auto">
                                    <Button size="lg" className="shadow-lg shadow-emerald-500/20 w-full hover:scale-[1.02] active:scale-[0.98]">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download PDF Snapshot
                                    </Button>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
