'use client';
import { useState } from 'react';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export function PngToJpgClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<{ url: string; size: number } | null>(null);

    const handleUpload = (files: File[]) => {
        const validFile = files.find((f) => f.type === 'image/png');
        if (validFile) {
            setFile(validFile);
            setResult(null);
        } else {
            alert("Please upload a valid PNG file.");
        }
    };

    const convertImage = () => {
        if (!file) return;
        setIsProcessing(true);

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    // Fill white background for transparent parts
                    ctx.fillStyle = "#FFFFFF";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0);

                    canvas.toBlob((blob) => {
                        if (blob) {
                            setResult({
                                url: URL.createObjectURL(blob),
                                size: blob.size
                            });
                        }
                        setIsProcessing(false);
                    }, 'image/jpeg', 0.9);
                }
            };
            if (typeof e.target?.result === 'string') {
                img.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            {!file ? (
                <UploadDropzone onUpload={handleUpload} accept="image/png" multiple={false} />
            ) : (
                <div className="flex flex-col gap-6 w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <FilePreviewCard file={file} onRemove={() => { setFile(null); setResult(null); }} />

                    <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-6 items-center">
                        {!result ? (
                            <Button size="lg" onClick={convertImage} disabled={isProcessing} isLoading={isProcessing}>
                                {isProcessing ? 'Converting...' : 'Convert to JPG'}
                            </Button>
                        ) : (
                            <div className="flex flex-col items-center gap-6 w-full">
                                <div className="flex items-center gap-8 text-sm font-medium w-full justify-center bg-muted/50 p-4 rounded-xl border border-border/50">
                                    <div className="text-center">
                                        <p className="text-muted-foreground">Original (PNG)</p>
                                        <p className="text-foreground text-lg font-bold">{formatBytes(file.size)}</p>
                                    </div>
                                    <div className="h-8 w-px bg-border"></div>
                                    <div className="text-center">
                                        <p className="text-primary font-bold">Converted (JPG)</p>
                                        <p className="text-primary text-lg font-bold">{formatBytes(result.size)}</p>
                                    </div>
                                </div>

                                <a href={result.url} download={`${file.name.replace(/\.png$/i, '')}.jpg`}>
                                    <Button size="lg" className="shadow-lg shadow-primary/20 bg-green-600 hover:bg-green-700 text-white">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download JPG Image
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
