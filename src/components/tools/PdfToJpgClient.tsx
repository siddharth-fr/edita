'use client';
import { useState } from 'react';
import JSZip from 'jszip';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export function PdfToJpgClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [resultZipUrl, setResultZipUrl] = useState<string | null>(null);

    const handleUpload = (files: File[]) => {
        const validFile = files.find((f) => f.type === 'application/pdf');
        if (validFile) {
            setFile(validFile);
            setResultZipUrl(null);
            setProgress(0);
        }
    };

    const convertPdfToJpg = async () => {
        if (!file) return;
        setIsProcessing(true);
        setProgress(0);

        try {
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const numPages = pdf.numPages;

            const zip = new JSZip();

            for (let i = 1; i <= numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 2.0 }); // Higher scale for better quality

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (!context) continue;

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                } as any;

                await page.render(renderContext).promise;

                // Extract as JPEG
                const imgData = canvas.toDataURL('image/jpeg', 0.9);
                const base64Data = imgData.replace(/^data:image\/jpeg;base64,/, "");

                zip.file(`page_${i}.jpg`, base64Data, { base64: true });

                setProgress(Math.round((i / numPages) * 100));
            }

            const zipContent = await zip.generateAsync({ type: 'blob' });
            setResultZipUrl(URL.createObjectURL(zipContent));
        } catch (error) {
            console.error('Conversion failed', error);
            alert('Failed to extract images from PDF.');
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
                    <FilePreviewCard file={file} onRemove={() => { setFile(null); setResultZipUrl(null); }} />

                    <div className="bg-card p-6 rounded-3xl border border-border shadow-sm flex flex-col gap-6 items-center">

                        {isProcessing && (
                            <div className="w-full max-w-md mx-auto">
                                <div className="flex justify-between text-sm font-medium mb-2 text-primary">
                                    <span>Extracting Pages...</span>
                                    <span>{progress}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-3 overflow-hidden border border-border/50">
                                    <div
                                        className="bg-primary h-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        )}

                        {!resultZipUrl ? (
                            <Button size="lg" onClick={convertPdfToJpg} disabled={isProcessing} isLoading={isProcessing}>
                                {isProcessing ? 'Processing...' : 'Convert to JPG Images'}
                            </Button>
                        ) : (
                            <div className="flex flex-col items-center gap-4 w-full">
                                <p className="text-sm font-medium text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                                    Successfully extracted {progress === 100 ? 'all' : ''} pages!
                                </p>
                                <a href={resultZipUrl} download={`${file.name.replace(/\.pdf$/i, '')}_images.zip`}>
                                    <Button size="lg" className="shadow-lg shadow-primary/20">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download ZIP Archive
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
