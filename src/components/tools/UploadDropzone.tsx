'use client';
import { useCallback, useState } from 'react';
import { UploadCloud } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

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
            // reset input
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
                "group relative flex flex-col items-center justify-center w-full min-h-[350px] border-2 border-dashed rounded-3xl p-10 text-center transition-all bg-card shadow-sm overflow-hidden",
                isDragging ? "border-primary bg-primary/5 scale-[1.02] shadow-xl shadow-primary/10" : "border-border hover:border-primary/50 hover:bg-muted/50"
            )}
        >
            {isDragging && (
                <div className="absolute inset-0 bg-primary/5 pointer-events-none animate-pulse" />
            )}
            <input
                type="file"
                multiple={multiple}
                accept={accept}
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                title=""
            />
            <div className={cn(
                "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 pointer-events-none transition-all duration-300",
                isDragging ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/20" : "bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20"
            )}>
                <UploadCloud className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2 pointer-events-none tracking-tight text-foreground">
                {isDragging ? 'Drop files here' : 'Drag & drop your files'}
            </h3>
            <p className="text-muted-foreground font-medium pointer-events-none max-w-sm mb-8 z-10">
                Or click to browse. Files are processed securely in your browser.
            </p>
            <Button
                size="lg"
                className="pointer-events-none"
            >
                Select Files
            </Button>
        </div>
    );
}
