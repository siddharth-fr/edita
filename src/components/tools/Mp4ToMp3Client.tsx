'use client';
import { useState, useRef } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';
import { trackToolUsed, trackFileUploaded, trackFileDownloaded, trackConversion } from '@/lib/ga4';

import { useToast } from '@/hooks/useToast';
import { validateFiles } from '@/lib/file-validation';

const ACCEPT_STR = 'video/mp4';

export function Mp4ToMp3Client() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState<{ url: string; size: number } | null>(null);
    const { error } = useToast();

    const ffmpegRef = useRef<any>(null);

    const loadFFmpeg = async () => {
        if (!ffmpegRef.current) {
            ffmpegRef.current = new FFmpeg();
        }
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
        const ffmpeg = ffmpegRef.current;

        ffmpeg.on('progress', ({ progress, time }: { progress: number; time: number }) => {
            setProgress(Math.round(progress * 100));
        });

        // Attempt loading core files from CDN for Next.js compat
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        setIsLoaded(true);
    };

    const toBlobURL = async (url: string, mimeType: string) => {
        const res = await fetch(url);
        const blob = await res.blob();
        return URL.createObjectURL(new Blob([blob], { type: mimeType }));
    };

    const handleUpload = (files: File[]) => {
        const { valid, rejectedCount } = validateFiles(files, ACCEPT_STR);
        
        if (rejectedCount > 0) {
            error("Invalid File Type", "Please upload a valid MP4 video file.");
        }

        if (valid.length > 0) {
            const validFile = valid[0];
            setFile(validFile);
            setResult(null);
            setProgress(0);
            trackFileUploaded(validFile.type, validFile.size);
        }
    };

    const convertVideo = async () => {
        if (!file) return;
        setIsProcessing(true);
        setProgress(0);

        try {
            if (!isLoaded) {
                await loadFFmpeg();
            }

            const ffmpeg = ffmpegRef.current;
            const inputName = `input_${file.name}`;
            const outputName = `output_${file.name.replace(/\.[^/.]+$/, "")}.mp3`;

            await ffmpeg.writeFile(inputName, await fetchFile(file));

            // Extract audio stream natively
            await ffmpeg.exec(['-i', inputName, '-vn', '-ar', '44100', '-ac', '2', '-b:a', '192k', outputName]);

            const fileData = await ffmpeg.readFile(outputName);
            const data = fileData as Uint8Array;
            const outputBlob = new Blob([data as any], { type: 'audio/mp3' });

            setResult({
                url: URL.createObjectURL(outputBlob),
                size: outputBlob.size
            });

            trackToolUsed('MP4 to MP3');
            trackConversion('MP4 to MP3');

            // Clean up memory
            await ffmpeg.deleteFile(inputName);
            await ffmpeg.deleteFile(outputName);

        } catch (error) {
            console.error('Conversion failed', error);
            alert('Failed to extract audio from video.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            {!file ? (
                <UploadDropzone onUpload={handleUpload} accept="video/mp4" multiple={false} />
            ) : (
                <div className="flex flex-col gap-6 w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <FilePreviewCard file={file} onRemove={() => { setFile(null); setResult(null); }} />

                    <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-6 items-center">

                        {isProcessing && (
                            <div className="w-full max-w-md mx-auto mb-4">
                                <div className="flex justify-between text-sm font-medium mb-2 text-primary">
                                    <span>Isolating Audio Stream...</span>
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

                        {!result ? (
                            <Button size="lg" onClick={convertVideo} disabled={isProcessing} isLoading={isProcessing} className="w-full sm:w-auto">
                                {isProcessing ? 'Processing Audio...' : 'Extract Audio (MP3)'}
                            </Button>
                        ) : (
                            <div className="flex flex-col items-center gap-6 w-full">
                                <div className="flex items-center gap-8 text-sm font-medium w-full justify-center bg-muted/50 p-4 rounded-xl border border-border/50">
                                    <div className="text-center">
                                        <p className="text-muted-foreground">Original (MP4)</p>
                                        <p className="text-foreground text-lg font-bold">{formatBytes(file.size)}</p>
                                    </div>
                                    <div className="h-8 w-px bg-border"></div>
                                    <div className="text-center">
                                        <p className="text-primary font-bold">Extracted (MP3)</p>
                                        <p className="text-primary text-lg font-bold">{formatBytes(result.size)}</p>
                                    </div>
                                </div>

                                <a 
                                    href={result.url} 
                                    download={`${file.name.replace(/\.[^/.]+$/, "")}.mp3`} 
                                    className="w-full sm:w-auto"
                                    onClick={() => trackFileDownloaded('MP4 to MP3', 'audio/mp3')}
                                >
                                    <Button size="lg" className="shadow-lg shadow-emerald-500/20 w-full hover:scale-[1.02]">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download MP3 Audio
                                    </Button>
                                </a>
                            </div>
                        )}

                        <p className="text-xs text-muted-foreground text-center mt-2">
                            Note: This happens entirely in your browser using WebAssembly. Large files may take some time depending on your device.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
