'use client';
import { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download, RefreshCw } from 'lucide-react';
import { trackToolUsed, trackFileUploaded, trackFileDownloaded, trackConversion } from '@/lib/ga4';

export function ImageCompressorClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<{ url: string; size: number } | null>(null);

    const handleUpload = (files: File[]) => {
        const validFile = files.find((f) => f.type.startsWith('image/'));
        if (validFile) {
            setFile(validFile);
            setResult(null);
            trackFileUploaded(validFile.type, validFile.size);
        }
    };

    const compressImage = async () => {
        if (!file) return;
        setIsProcessing(true);
        try {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            };

            const compressedFile = await imageCompression(file, options);
            const url = URL.createObjectURL(compressedFile);

            setResult({
                url,
                size: compressedFile.size,
            });
            trackToolUsed('Image Compressor');
            trackConversion('Image Compressor');
        } catch (error) {
            console.error('Compression failed', error);
            alert('Failed to compress image.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            {!file ? (
                <UploadDropzone onUpload={handleUpload} accept="image/*" multiple={false} />
            ) : (
                <div className="flex flex-col gap-6 w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <FilePreviewCard file={file} onRemove={() => { setFile(null); setResult(null); }} />

                    <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-6">
                        {!result ? (
                            <div className="flex justify-center">
                                <Button size="lg" onClick={compressImage} disabled={isProcessing} isLoading={isProcessing} className="w-full sm:w-auto">
                                    {isProcessing ? 'Compressing...' : 'Compress Image'}
                                </Button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-6 w-full">
                                <div className="flex items-center gap-8 text-sm font-medium w-full justify-center bg-muted/50 p-4 rounded-xl border border-border/50">
                                    <div className="text-center">
                                        <p className="text-muted-foreground">Original</p>
                                        <p className="text-foreground text-xl font-bold">{formatBytes(file.size)}</p>
                                    </div>
                                    <div className="h-10 w-px bg-border"></div>
                                    <div className="text-center">
                                        <p className="text-primary font-bold">Compressed</p>
                                        <p className="text-primary text-xl font-bold">{formatBytes(result.size)}</p>
                                        <p className="text-xs text-green-500 font-bold mt-1">
                                            Reduced by {Math.round(((file.size - result.size) / file.size) * 100)}%
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                    <Button 
                                        variant="outline" 
                                        size="lg" 
                                        onClick={() => { setFile(null); setResult(null); }}
                                        className="w-full sm:w-auto"
                                    >
                                        <RefreshCw className="w-4 h-4 mr-2" />
                                        Compress Another
                                    </Button>
                                    <a 
                                        href={result.url} 
                                        download={`Compressed_${file.name}`} 
                                        className="w-full sm:w-auto"
                                        onClick={() => trackFileDownloaded('Image Compressor', file.type)}
                                    >
                                        <Button size="lg" className="shadow-lg shadow-emerald-500/20 w-full hover:scale-[1.02] active:scale-[0.98]">
                                            <Download className="w-5 h-5 mr-2" />
                                            Download Image
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
