'use client';
import { useState, useEffect } from 'react';
import { UploadDropzone } from '@/components/tools/UploadDropzone';
import { FilePreviewCard, formatBytes } from '@/components/tools/FilePreviewCard';
import { Button } from '@/components/ui/Button';
import { Download, ChevronRight } from 'lucide-react';
import { trackToolUsed, trackFileUploaded, trackFileDownloaded, trackConversion } from '@/lib/ga4';
import { useToast } from '@/hooks/useToast';
import { validateFiles } from '@/lib/file-validation';

export type ImageFormat = 'png' | 'jpg' | 'webp' | 'avif' | 'svg' | 'heic';
export type OutputFormat = 'png' | 'jpg' | 'webp' | 'avif';

const FORMAT_LABELS: Record<ImageFormat, string> = {
    png: 'PNG',
    jpg: 'JPG',
    webp: 'WebP',
    avif: 'AVIF',
    svg: 'SVG',
    heic: 'HEIC'
};

const MIME_TYPES: Record<string, string> = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/webp': 'webp',
    'image/avif': 'avif',
    'image/svg+xml': 'svg',
    'image/heic': 'heic',
    'image/heif': 'heic'
};

const OUTPUT_MIME_TYPES: Record<OutputFormat, string> = {
    png: 'image/png',
    jpg: 'image/jpeg',
    webp: 'image/webp',
    avif: 'image/avif'
};

interface ImageConverterProps {
    initialInputFormat?: ImageFormat;
    initialOutputFormat?: OutputFormat;
}

const OUTPUT_FORMATS: OutputFormat[] = ['png', 'jpg', 'webp', 'avif'];

export function ImageConverter({ 
    initialInputFormat = 'png', 
    initialOutputFormat = 'jpg' 
}: ImageConverterProps) {
    const [file, setFile] = useState<File | null>(null);
    const [inputFormat, setInputFormat] = useState<ImageFormat>(initialInputFormat);
    const [outputFormat, setOutputFormat] = useState<OutputFormat>(initialOutputFormat);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<{ url: string; size: number; format: OutputFormat } | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { error } = useToast();

    // Reset result if formats change or file changes
    useEffect(() => {
        setResult(null);
    }, [file, outputFormat]);

    const handleUpload = (files: File[]) => {
        const acceptStr = Object.keys(MIME_TYPES).join(',');
        const { valid, rejectedCount } = validateFiles(files, acceptStr);
        
        if (rejectedCount > 0) {
            error("Invalid File Type", "Please upload a supported image format (PNG, JPG, WebP, AVIF, SVG, HEIC).");
        }

        if (valid.length > 0) {
            const validFile = valid[0];
            setFile(validFile);
            setResult(null);
            
            // Auto-detect input format from file type
            const detectedFormat = MIME_TYPES[validFile.type as keyof typeof MIME_TYPES] as ImageFormat;
            if (detectedFormat) {
                setInputFormat(detectedFormat);
            } else {
                // Fallback to initial if type is weird
                setInputFormat(initialInputFormat);
            }
            
            trackFileUploaded(validFile.type, validFile.size);
        }
    };

    const convertImage = async () => {
        if (!file) return;
        setIsProcessing(true);

        try {
            const resultBlob = await processImage(file, outputFormat);
            if (resultBlob) {
                setResult({
                    url: URL.createObjectURL(resultBlob),
                    size: resultBlob.size,
                    format: outputFormat
                });
                const toolName = `${FORMAT_LABELS[inputFormat]} to ${FORMAT_LABELS[outputFormat]}`;
                trackToolUsed(toolName);
                trackConversion(toolName);
            }
        } catch (err) {
            console.error('Conversion failed:', err);
            error("Conversion Error", "Failed to process the image. Please try another file.");
        } finally {
            setIsProcessing(false);
        }
    };

    const processImage = async (file: File, targetFormat: OutputFormat): Promise<Blob | null> => {
        let inputFile = file;
        
        if (file.type === 'image/heic' || file.type === 'image/heif' || file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif')) {
            try {
                const heic2any = (await import('heic2any')).default;
                const convertedBlob = await heic2any({ 
                    blob: file, 
                    toType: "image/jpeg",
                    quality: 0.92
                });
                
                if (targetFormat === 'jpg') {
                    return Array.isArray(convertedBlob) ? convertedBlob[0] as Blob : convertedBlob as Blob;
                }
                
                inputFile = new File(
                    [Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob], 
                    "temp.jpg", 
                    { type: "image/jpeg" }
                );
            } catch (error) {
                console.error("HEIC conversion error:", error);
                throw new Error("Failed to decode HEIC image");
            }
        }

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        reject(new Error('Canvas context not available'));
                        return;
                    }

                    // For JPG and potentially others, fill white background if transparent
                    if (targetFormat === 'jpg') {
                        ctx.fillStyle = "#FFFFFF";
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                    }
                    
                    ctx.drawImage(img, 0, 0);

                    const mimeType = OUTPUT_MIME_TYPES[targetFormat];
                    // PNG doesn't use quality param
                    const quality = targetFormat === 'png' ? undefined : 0.92;
                    
                    canvas.toBlob((blob) => {
                        resolve(blob);
                    }, mimeType, quality);
                };
                img.onerror = () => reject(new Error('Failed to load image'));
                if (typeof e.target?.result === 'string') {
                    img.src = e.target.result;
                }
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsDataURL(inputFile);
        });
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            {!file ? (
                <UploadDropzone 
                    onUpload={handleUpload} 
                    accept={Object.keys(MIME_TYPES).join(',')} 
                    multiple={false} 
                />
            ) : (
                <div className="flex flex-col gap-6 w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <FilePreviewCard file={file} onRemove={() => { setFile(null); setResult(null); }} />

                    <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                            <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Convert From</label>
                                <div className="relative group">
                                    <div className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm font-medium flex items-center justify-between opacity-80 cursor-default">
                                        {FORMAT_LABELS[inputFormat]}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="hidden sm:block mt-6">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <ChevronRight className="w-4 h-4 text-primary" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Convert To</label>
                                <div className="relative dropdown-container">
                                    <button 
                                        type="button"
                                        className="w-full bg-muted hover:bg-muted/80 border border-border rounded-xl px-4 py-3 text-sm font-medium flex items-center justify-between transition-all active:scale-[0.98]"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsDropdownOpen(!isDropdownOpen);
                                        }}
                                    >
                                        <span>{FORMAT_LABELS[outputFormat]}</span>
                                        <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isDropdownOpen ? 'rotate-[-90deg]' : 'rotate-90'}`} />
                                    </button>

                                    {isDropdownOpen && (
                                        <>
                                            {/* Backdrop for click-outside */}
                                            <div 
                                                className="fixed inset-0 z-[60]" 
                                                onClick={() => setIsDropdownOpen(false)} 
                                            />
                                            
                                            {/* Dropdown Menu */}
                                            <div 
                                                className="absolute top-[calc(100%+8px)] left-0 right-0 z-[70] bg-white/95 backdrop-blur-2xl border border-gray-100/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-[20px] p-2 flex flex-col animate-in fade-in zoom-in-95 duration-200"
                                                style={{ transformOrigin: 'top' }}
                                            >
                                                {OUTPUT_FORMATS.map(f => {
                                                    const isActive = outputFormat === f;
                                                    return (
                                                        <button 
                                                            key={f}
                                                            type="button"
                                                            className={`px-4 py-3 rounded-xl font-semibold text-[14px] text-left transition-all ${
                                                                isActive 
                                                                    ? 'bg-emerald-50 text-emerald-700' 
                                                                    : 'text-gray-600 hover:bg-black/[0.03] active:bg-black/[0.05]'
                                                            }`}
                                                            onClick={() => {
                                                                setOutputFormat(f);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                        >
                                                            {FORMAT_LABELS[f]}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {!result ? (
                            <Button size="lg" onClick={convertImage} disabled={isProcessing} isLoading={isProcessing} className="w-full">
                                {isProcessing ? 'Converting...' : `Convert to ${FORMAT_LABELS[outputFormat]}`}
                            </Button>
                        ) : (
                            <div className="flex flex-col items-center gap-6 w-full">
                                <div className="flex items-center gap-8 text-sm font-medium w-full justify-center bg-muted/50 p-4 rounded-xl border border-border/50">
                                    <div className="text-center">
                                        <p className="text-muted-foreground">Original ({FORMAT_LABELS[inputFormat]})</p>
                                        <p className="text-foreground text-lg font-bold">{formatBytes(file.size)}</p>
                                    </div>
                                    <div className="h-8 w-px bg-border"></div>
                                    <div className="text-center">
                                        <p className="text-primary font-bold">Converted ({FORMAT_LABELS[outputFormat]})</p>
                                        <p className="text-primary text-lg font-bold">{formatBytes(result.size)}</p>
                                    </div>
                                </div>

                                <a 
                                    href={result.url} 
                                    download={`${file.name.substring(0, file.name.lastIndexOf('.'))}.${outputFormat}`} 
                                    className="w-full"
                                    onClick={() => trackFileDownloaded(`${FORMAT_LABELS[inputFormat]} to ${FORMAT_LABELS[outputFormat]}`, OUTPUT_MIME_TYPES[outputFormat])}
                                >
                                    <Button size="lg" className="shadow-lg shadow-emerald-500/20 w-full hover:scale-[1.01] active:scale-[0.99] transition-transform">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download {FORMAT_LABELS[outputFormat]} Image
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
