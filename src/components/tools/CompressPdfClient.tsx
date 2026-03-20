'use client';
import { useState, useEffect } from 'react';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download, SlidersHorizontal } from 'lucide-react';
import { trackToolUsed, trackFileUploaded, trackFileDownloaded, trackConversion } from '@/lib/ga4';

import { useToast } from '@/hooks/useToast';
import { validateFiles } from '@/lib/file-validation';

type CompressionLevel = 'low' | 'medium' | 'high';

const ACCEPT_STR = '.pdf,application/pdf';

export function CompressPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [compressionLevel, setCompressionLevel] = useState<CompressionLevel>('medium');
    const [result, setResult] = useState<{ url: string; size: number } | null>(null);
    const { error } = useToast();

    useEffect(() => {
        return () => {
            if (result?.url) URL.revokeObjectURL(result.url);
        };
    }, [result?.url]);

    const handleUpload = (files: File[]) => {
        const { valid, rejectedCount } = validateFiles(files, ACCEPT_STR);
        
        if (rejectedCount > 0) {
            error("Invalid File Type", "Please select a valid PDF file for compression.");
        }

        if (valid.length > 0) {
            const validFile = valid[0];
            setFile(validFile);
            setResult(null);
            setProgress(0);
            trackFileUploaded(validFile.type, validFile.size);
        }
    };

    const compressPdf = async () => {
        if (!file) return;
        setIsProcessing(true);
        setProgress(0);

        try {
            // Import libraries dynamically to avoid SSR issues
            const pdfjsLib = await import('pdfjs-dist');
            const { jsPDF } = await import('jspdf');

            // Set up worker - unpkg is more reliable for specific NPM versions
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const numPages = pdf.numPages;

            // Compression settings based on level
            const settings = {
                low: { scale: 2.0, quality: 0.9 },
                medium: { scale: 1.5, quality: 0.75 },
                high: { scale: 1.0, quality: 0.6 }
            }[compressionLevel];

            const doc = new jsPDF({
                orientation: 'p',
                unit: 'pt',
                compress: true
            });

            for (let i = 1; i <= numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: settings.scale });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (!context) continue;

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({
                    canvasContext: context,
                    viewport: viewport,
                    canvas: canvas
                } as any).promise;

                // Add page to jspdf
                const imgData = canvas.toDataURL('image/jpeg', settings.quality);
                
                // Get page dimensions in points (72 DPI)
                const pageViewport = page.getViewport({ scale: 1.0 });
                const pageWidth = pageViewport.width;
                const pageHeight = pageViewport.height;

                if (i > 1) doc.addPage([pageWidth, pageHeight], pageWidth > pageHeight ? 'l' : 'p');
                else {
                    // Resize first page if needed
                    doc.deletePage(1);
                    doc.addPage([pageWidth, pageHeight], pageWidth > pageHeight ? 'l' : 'p');
                }

                doc.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');
                setProgress(Math.round((i / numPages) * 100));
            }

            const pdfBlob = doc.output('blob');
            
            setResult({
                url: URL.createObjectURL(pdfBlob),
                size: pdfBlob.size,
            });

            trackToolUsed('Compress PDF');
            trackConversion('Compress PDF');
        } catch (error) {
            console.error('Compression failed', error);
            alert('Failed to compress PDF. This complex file might need a dedicated desktop tool.');
        } finally {
            setIsProcessing(false);
        }
    };

    const savings = file && result ? Math.round(((file.size - result.size) / file.size) * 100) : 0;

    return (
        <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            {!file ? (
                <UploadDropzone onUpload={handleUpload} accept=".pdf,application/pdf" multiple={false} />
            ) : (
                <div className="flex flex-col gap-6 w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <FilePreviewCard file={file} onRemove={() => { setFile(null); setResult(null); }} />

                    <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-500/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col gap-8 relative overflow-hidden">
                        {/* Ambient background glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                        
                        {!result && !isProcessing && (
                            <div className="flex flex-col gap-6 relative z-10 items-center">
                                <div className="bg-slate-100/80 p-1.5 rounded-[1.25rem] flex w-full max-w-md border border-slate-200/50 shadow-inner">
                                    {(['low', 'medium', 'high'] as CompressionLevel[]).map((level) => (
                                        <button
                                            key={level}
                                            onClick={() => setCompressionLevel(level)}
                                            className={`flex-1 py-3 px-4 rounded-2xl transition-all duration-300 text-sm font-bold capitalize ${
                                                compressionLevel === level
                                                    ? 'bg-white text-emerald-600 shadow-[0_4px_12px_rgba(16,185,129,0.1)]'
                                                    : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                                            }`}
                                        >
                                            <span className="block">{level}</span>
                                            <span className={`text-[10px] block opacity-60 font-medium ${compressionLevel === level ? 'text-emerald-500' : 'text-slate-400'}`}>
                                                {level === 'high' ? 'Smallest Size' : level === 'low' ? 'Best Quality' : 'Balanced'}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <p className="text-[12px] text-slate-400 font-medium italic text-center max-w-[320px]">
                                    Optimize your PDF while keeping all processing local and private.
                                </p>
                            </div>
                        )}

                        {isProcessing && (
                            <div className="flex flex-col items-center gap-6 py-4">
                                <div className="w-full max-w-md mx-auto">
                                    <div className="flex justify-between text-sm font-bold mb-3 text-emerald-700">
                                        <span>Optimizing Document...</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden p-1 border border-slate-200/50">
                                        <div
                                            className="bg-emerald-500 h-full rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 font-medium animate-pulse">
                                    Stay on this tab while we work our magic...
                                </p>
                            </div>
                        )}

                        <div className="flex justify-center relative z-10">
                            {!result ? (
                                !isProcessing && (
                                    <Button 
                                        size="lg" 
                                        onClick={compressPdf} 
                                        className="w-full sm:w-auto h-14 px-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] text-white font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        style={{
                                            fontFamily: 'var(--font-display), sans-serif'
                                        }}
                                    >
                                        Compress PDF Now
                                    </Button>
                                )
                            ) : (
                                <div className="flex flex-col items-center gap-8 w-full">
                                    <div className="flex items-center gap-4 sm:gap-12 w-full justify-center bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-100">
                                        <div className="text-center">
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Original</p>
                                            <p className="text-slate-600 text-xl font-bold">{formatBytes(file.size)}</p>
                                        </div>
                                        <div className="h-10 w-px bg-emerald-200/50"></div>
                                        <div className="text-center">
                                            <p className="text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">Savings</p>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">-{savings}%</span>
                                                <p className="text-emerald-600 text-2xl font-black">{formatBytes(result.size)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a 
                                        href={result.url} 
                                        download={`Compressed_${file.name.replace(/\.[^/.]+$/, "")}.pdf`} 
                                        className="w-full sm:w-auto"
                                        onClick={() => trackFileDownloaded('Compress PDF', 'application/pdf')}
                                    >
                                        <Button size="lg" className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-200/50 text-base">
                                            <Download className="w-5 h-5 mr-3" />
                                            Download Compressed PDF
                                        </Button>
                                    </a>
                                    <Button variant="outline" onClick={() => { setFile(null); setResult(null); }} className="text-slate-400 border-slate-200">
                                        Compress Another File
                                    </Button>
                                </div>
                            )}
                        </div>
                        
                        {!isProcessing && !result && (
                            <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">
                                Your files stay 100% private. All processing happens locally in your browser.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
