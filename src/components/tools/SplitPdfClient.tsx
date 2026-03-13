'use client';
import { useState, useRef, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export function SplitPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [pageCount, setPageCount] = useState<number>(0);
    const [startPage, setStartPage] = useState<number>(1);
    const [endPage, setEndPage] = useState<number>(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const pdfDocRef = useRef<PDFDocument | null>(null);

    useEffect(() => {
        return () => {
            if (result) URL.revokeObjectURL(result);
        };
    }, [result]);

    const handleUpload = async (files: File[]) => {
        const validFile = files.find((f) => f.type === 'application/pdf');
        if (validFile) {
            try {
                const arrayBuffer = await validFile.arrayBuffer();
                const pdfDoc = await PDFDocument.load(arrayBuffer);
                pdfDocRef.current = pdfDoc;
                setPageCount(pdfDoc.getPageCount());
                setEndPage(pdfDoc.getPageCount());
                setFile(validFile);
                setResult(null);
            } catch (err) {
                alert("Failed to read PDF.");
            }
        }
    };

    const splitPdf = async () => {
        if (!file || !pdfDocRef.current) return;
        setIsProcessing(true);
        try {
            const outPdf = await PDFDocument.create();

            const s = Math.max(1, startPage) - 1;
            const e = Math.min(pageCount, endPage) - 1;

            const indices = [];
            for (let i = s; i <= e; i++) {
                indices.push(i);
            }

            if (indices.length === 0) {
                alert("Invalid page range.");
                setIsProcessing(false);
                return;
            }

            const copiedPages = await outPdf.copyPages(pdfDocRef.current, indices);
            copiedPages.forEach((page) => outPdf.addPage(page));

            const pdfBytes = await outPdf.save();
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

            setResult(URL.createObjectURL(blob));
        } catch (error) {
            console.error('Split failed', error);
            alert('Failed to split PDF. Please try again.');
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
                    <FilePreviewCard file={file} onRemove={() => { setFile(null); setResult(null); pdfDocRef.current = null; }} />

                    <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-8">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">Select Page Range</h3>
                            <p className="text-muted-foreground text-sm">This document has {pageCount} total pages.</p>
                        </div>

                        <div className="flex items-center justify-center gap-4 max-w-xs mx-auto w-full">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="startPage" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">From Page</label>
                                <input
                                    id="startPage"
                                    type="number"
                                    min={1}
                                    max={endPage}
                                    value={startPage}
                                    onChange={(e) => setStartPage(Number(e.target.value))}
                                    className="w-full h-12 rounded-xl border border-border bg-background px-4 text-center font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="text-muted-foreground font-bold mt-6">-</div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="endPage" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">To Page</label>
                                <input
                                    id="endPage"
                                    type="number"
                                    min={startPage}
                                    max={pageCount}
                                    value={endPage}
                                    onChange={(e) => setEndPage(Number(e.target.value))}
                                    className="w-full h-12 rounded-xl border border-border bg-background px-4 text-center font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center pt-4 border-t border-border/50">
                            {!result ? (
                                <Button size="lg" onClick={splitPdf} disabled={isProcessing} isLoading={isProcessing} className="w-full sm:w-auto">
                                    {isProcessing ? 'Splitting...' : 'Split PDF'}
                                </Button>
                            ) : (
                                <div className="flex flex-col items-center gap-4 w-full">
                                    <a href={result} download={`Split_Pages_${startPage}-${endPage}_${file.name}`} className="w-full sm:w-auto">
                                        <Button size="lg" className="shadow-lg shadow-emerald-500/20 w-full hover:scale-[1.02] active:scale-[0.98]">
                                            <Download className="w-5 h-5 mr-2" />
                                            Download Extracted Pages
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
