'use client';
import { useState } from 'react';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';
import { trackToolUsed, trackFileUploaded, trackFileDownloaded, trackConversion } from '@/lib/ga4';

import { useToast } from '@/hooks/useToast';
import { validateFiles } from '@/lib/file-validation';

const ACCEPT_STR = 'image/png';

export function PngToJpgClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<{ url: string; size: number } | null>(null);
    const { error } = useToast();

    const handleUpload = (files: File[]) => {
        const { valid, rejectedCount } = validateFiles(files, ACCEPT_STR);
        
        if (rejectedCount > 0) {
            error("Invalid File Type", "Please upload a valid PNG image.");
        }

        if (valid.length > 0) {
            const validFile = valid[0];
            setFile(validFile);
            setResult(null);
            trackFileUploaded(validFile.type, validFile.size);
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
                            trackToolUsed('PNG to JPG');
                            trackConversion('PNG to JPG');
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
                            <Button size="lg" onClick={convertImage} disabled={isProcessing} isLoading={isProcessing} className="w-full sm:w-auto">
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

                                <a 
                                    href={result.url} 
                                    download={`${file.name.replace(/\.png$/i, '')}.jpg`} 
                                    className="w-full sm:w-auto"
                                    onClick={() => trackFileDownloaded('PNG to JPG', 'image/jpeg')}
                                >
                                    <Button size="lg" className="shadow-lg shadow-emerald-500/20 w-full hover:scale-[1.02]">
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
