'use client';
import { X, GripVertical } from 'lucide-react';

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
    <div 
      className="flex items-center p-4 bg-white rounded-[18px] gap-4 group transition-all duration-200"
      style={{
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
      }}
    >
      {isDraggable && (
        <div className="text-gray-400 cursor-grab active:cursor-grabbing hover:text-gray-600 transition-colors shrink-0">
          <GripVertical className="w-4 h-4" />
        </div>
      )}
      
      {/* Minimal file indicator dot */}
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: 32, height: 32,
          borderRadius: 10,
          background: 'rgba(52,211,153,0.1)',
        }}
      >
        <span 
          style={{
            width: 8, height: 8,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #34D399, #059669)',
          }} 
        />
      </div>

      <div className="flex-1 min-w-0">
        <p style={{
          fontSize: 14,
          fontWeight: 700,
          color: '#0C0F17',
          letterSpacing: '-0.01em',
        }} className="truncate">
          {file.name}
        </p>
        <p style={{
          fontSize: 12,
          fontWeight: 500,
          color: '#6B7280',
          marginTop: 2,
        }}>
          {formatBytes(file.size)}
        </p>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all duration-150"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
