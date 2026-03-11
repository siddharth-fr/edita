'use client';
import { FileText, X, GripVertical } from 'lucide-react';

interface FilePreviewCardProps {
    file: File;
    onRemove: () => void;
    isDraggable?: boolean;
}

export function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function FilePreviewCard({ file, onRemove, isDraggable = false }: FilePreviewCardProps) {
    return (
        <div className="flex items-center p-4 bg-card border border-border rounded-2xl gap-4 group hover:border-primary/30 hover:shadow-md transition-all duration-200">
            {isDraggable && (
                <div className="text-muted-foreground cursor-grab active:cursor-grabbing hover:text-primary transition-colors shrink-0">
                    <GripVertical className="w-5 h-5" />
                </div>
            )}
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(5,198,255,0.15), rgba(0,102,255,0.1))' }}
            >
                <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate text-foreground">{file.name}</p>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">{formatBytes(file.size)}</p>
            </div>
            <button
                type="button"
                onClick={onRemove}
                className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-all duration-150"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
