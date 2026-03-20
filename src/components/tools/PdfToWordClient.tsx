'use client';
import { useState, useEffect } from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download, FileText, Sparkles } from 'lucide-react';
import { trackToolUsed, trackFileUploaded, trackFileDownloaded, trackConversion } from '@/lib/ga4';

export function PdfToWordClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<{ url: string; size: number } | null>(null);

    useEffect(() => {
        return () => {
            if (result?.url) URL.revokeObjectURL(result.url);
        };
    }, [result?.url]);

    const handleUpload = (files: File[]) => {
        const validFile = files.find((f) => f.type === 'application/pdf');
        if (validFile) {
            setFile(validFile);
            setResult(null);
            setProgress(0);
            trackFileUploaded(validFile.type, validFile.size);
        }
    };

    const convertPdfToWord = async () => {
        if (!file) return;
        setIsProcessing(true);
        setProgress(0);

        try {
            const pdfjsLib = await import('pdfjs-dist');
            // Use unpkg for more reliable version matching
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

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

                        // Group text into paragraphs based on Y-coordinate shifts
                        if (lastY !== -1 && Math.abs(lastY - y) > 12) { // 12pt approx line height
                            if (currentLine.trim().length > 0) {
                                paragraphs.push(new Paragraph({
                                    children: [new TextRun({ text: currentLine.trim(), size: 24 })],
                                    spacing: { after: 200 }
                                }));
                            }
                            currentLine = '';
                        }

                        currentLine += (currentLine.length > 0 ? ' ' : '') + item.str;
                        lastY = y;
                    }
                }

                if (currentLine.trim().length > 0) {
                    paragraphs.push(new Paragraph({
                        children: [new TextRun({ text: currentLine.trim(), size: 24 })],
                        spacing: { after: 200 }
                    }));
                }

                setProgress(Math.round((i / numPages) * 100));
            }

            const doc = new Document({
                sections: [{
                    properties: {},
                    children: paragraphs.length > 0 ? paragraphs : [
                        new Paragraph({ 
                            children: [new TextRun({ text: "This PDF appears to be a scanned image. No selectable text was found.", italics: true })] 
                        })
                    ],
                }],
            });

            const blob = await Packer.toBlob(doc);

            setResult({
                url: URL.createObjectURL(blob),
                size: blob.size
            });

            trackToolUsed('PDF to Word');
            trackConversion('PDF to Word');
        } catch (error) {
            console.error('Conversion failed', error);
            alert('Failed to extract text from PDF. Please ensure the file is not corrupted.');
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

                    <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-500/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col gap-8 relative overflow-hidden">
                        {/* Decorative glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                        
                        {!result && !isProcessing && (
                            <div className="flex flex-col items-center text-center gap-4 py-4 relative z-10">
                                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-2 shadow-sm border border-emerald-100">
                                    <FileText className="text-emerald-500 w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>
                                    Ready to Extract Text
                                </h3>
                                <p className="text-slate-500 text-sm max-w-[280px]">
                                    We'll convert your PDF into an editable Word document instantly.
                                </p>
                            </div>
                        )}

                        {isProcessing && (
                            <div className="flex flex-col items-center gap-6 py-4">
                                <div className="w-full max-w-md mx-auto">
                                    <div className="flex justify-between text-sm font-bold mb-3 text-emerald-700">
                                        <span>Analyzing document structure...</span>
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
                                    Hang tight, this takes a moment for larger files...
                                </p>
                            </div>
                        )}

                        <div className="flex justify-center relative z-10">
                            {!result ? (
                                !isProcessing && (
                                    <Button 
                                        size="lg" 
                                        onClick={convertPdfToWord} 
                                        className="h-14 px-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-200/50 text-white font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        <Sparkles className="w-5 h-5 mr-3 opacity-80" />
                                        Convert to Word Now
                                    </Button>
                                )
                            ) : (
                                <div className="flex flex-col items-center gap-8 w-full">
                                    <div className="flex items-center gap-4 sm:gap-12 w-full justify-center bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-100">
                                        <div className="text-center">
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Source</p>
                                            <p className="text-slate-600 font-bold">{formatBytes(file.size)}</p>
                                        </div>
                                        <div className="h-10 w-px bg-emerald-200/50"></div>
                                        <div className="text-center">
                                            <p className="text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">Generated</p>
                                            <p className="text-emerald-600 font-black text-xl">{formatBytes(result.size)}</p>
                                        </div>
                                    </div>

                                    <a 
                                        href={result.url} 
                                        download={`${file.name.replace(/\.pdf$/i, '')}.docx`} 
                                        className="w-full sm:w-auto"
                                        onClick={() => trackFileDownloaded('PDF to Word', 'application/docx')}
                                    >
                                        <Button size="lg" className="h-14 px-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-200/40 text-base w-full">
                                            <Download className="w-5 h-5 mr-3" />
                                            Download Editable Word
                                        </Button>
                                    </a>
                                    
                                    <button 
                                        onClick={() => { setFile(null); setResult(null); }}
                                        className="text-slate-400 text-sm font-bold hover:text-emerald-600 transition-colors"
                                    >
                                        Convert another file
                                    </button>
                                </div>
                            )}
                        </div>

                        {!isProcessing && !result && (
                            <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">
                                Editable text is extracted locally. Layout might vary for complex documents.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
