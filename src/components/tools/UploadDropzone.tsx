'use client';
import { useCallback, useState } from 'react';
import { UploadCloud, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadDropzoneProps {
    onUpload: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
}

export function UploadDropzone({ onUpload, accept, multiple = true }: UploadDropzoneProps) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setIsDragging(true);
        } else if (e.type === 'dragleave') {
            setIsDragging(false);
        }
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                onUpload(Array.from(e.dataTransfer.files));
            }
        },
        [onUpload]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onUpload(Array.from(e.target.files));
            e.target.value = '';
        }
    };

    return (
        <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={cn(
                'group relative flex flex-col items-center justify-center w-full min-h-[340px] rounded-3xl p-10 text-center transition-all duration-300 cursor-pointer overflow-hidden',
                isDragging
                    ? 'bg-primary/5 scale-[1.01]'
                    : 'bg-card hover:bg-muted/40'
            )}
            style={{
                border: isDragging
                    ? '2px solid #05c6ff'
                    : '2px dashed var(--border)',
                boxShadow: isDragging
                    ? '0 0 0 4px rgba(5,198,255,0.12), 0 20px 60px rgba(5,198,255,0.08)'
                    : '0 1px 4px rgba(0,0,0,0.04)',
            }}
        >
            {/* Animated ring on drag */}
            {isDragging && (
                <div className="absolute inset-0 rounded-3xl pointer-events-none animate-pulse"
                    style={{ boxShadow: 'inset 0 0 40px rgba(5,198,255,0.08)' }}
                />
            )}

            <input
                type="file"
                multiple={multiple}
                accept={accept}
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                title=""
            />

            {/* Upload icon */}
            <div
                className={cn(
                    'w-20 h-20 rounded-2xl flex items-center justify-center mb-6 pointer-events-none transition-all duration-300',
                    isDragging
                        ? 'scale-110 text-white'
                        : 'text-primary group-hover:scale-105'
                )}
                style={{
                    background: isDragging
                        ? 'linear-gradient(135deg, #05c6ff, #0066ff)'
                        : 'rgba(5,198,255,0.10)',
                    boxShadow: isDragging ? '0 8px 32px rgba(5,198,255,0.35)' : 'none',
                }}
            >
                <UploadCloud className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black tracking-tight text-foreground mb-2 pointer-events-none">
                {isDragging ? 'Release to upload' : 'Drop files here'}
            </h3>
            <p className="text-muted-foreground pointer-events-none max-w-sm mb-8 font-medium leading-relaxed">
                {isDragging ? 'Looking good!' : 'or click anywhere to browse your files'}
            </p>

            {/* CTA button */}
            <div
                className="pointer-events-none inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #05c6ff, #0066ff)' }}
            >
                <UploadCloud className="w-4 h-4" />
                Select Files
            </div>

            {/* Privacy note */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs text-muted-foreground pointer-events-none whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Processed locally · Never uploaded
            </div>
        </div>
    );
}
