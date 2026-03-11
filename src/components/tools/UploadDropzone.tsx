'use client';
import { useCallback, useState } from 'react';

interface UploadDropzoneProps {
  onUpload: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
}

/* Spring easing for buttery smooth transitions */
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

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
      className="relative flex flex-col items-center justify-center w-full min-h-[300px] text-center cursor-pointer overflow-hidden border-2"
      style={{
        borderRadius: 24,
        background: isDragging ? 'rgba(52, 211, 153, 0.04)' : '#ffffff',
        borderColor: isDragging ? 'rgba(52, 211, 153, 0.4)' : 'rgba(0,0,0,0.06)',
        borderStyle: isDragging ? 'solid' : 'dashed',
        boxShadow: isDragging 
            ? '0 0 0 4px rgba(52,211,153,0.08), 0 20px 40px rgba(52,211,153,0.05)'
            : '0 2px 10px rgba(0,0,0,0.02)',
        transform: isDragging ? 'scale(1.02)' : 'scale(1)',
        transition: `all 0.4s ${SPRING}`,
      }}
    >
      <input
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        title=""
      />

      <div className="flex flex-col items-center pointer-events-none">
        
        {/* Miniature Green Folder/Toolcard */}
        <div 
          style={{ 
            position: 'relative', 
            width: 48, 
            height: 38, 
            marginBottom: 20,
            transform: isDragging ? 'scale(1.1) translateY(-4px)' : 'scale(1)',
            transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
          }}
        >
          {/* Subtle back shadow/card to give depth */}
          <div style={{
            position: 'absolute', top: 3, left: 3, right: -3, bottom: -3,
            background: 'rgba(52,211,153,0.15)', borderRadius: 10, transform: 'rotate(6deg)',
            transition: 'all 0.4s ease'
          }} />
          
          <div style={{
            position: 'absolute', inset: 0,
            background: '#ffffff', borderRadius: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)',
          }}>
             {/* Gradient top area */}
             <div style={{
                 position: 'absolute', inset: 2, borderRadius: 8,
                 background: 'linear-gradient(135deg, #34D399, #059669)',
                 overflow: 'hidden'
             }}>
                 <div style={{
                     position: 'absolute', inset: 0,
                     background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 70%)',
                 }} />
             </div>
             
             {/* White folder body bottom half */}
             <div style={{
                 position: 'absolute', bottom: 2, left: 2, right: 2, height: '56%',
                 background: '#ffffff', borderRadius: '0 0 7px 7px',
             }}>
                 {/* Folder notch tab */}
                 <div style={{
                     position: 'absolute', top: -6, left: 0, width: '45%', height: 6,
                     background: '#ffffff', borderRadius: '4px 4px 0 0',
                 }} />
                 <div style={{
                     position: 'absolute', top: -6, left: '45%', height: 6, width: 6,
                     boxShadow: '-3px 3px 0 0 #ffffff', borderRadius: '0 0 0 4px',
                 }} />
             </div>
          </div>
        </div>

        <h3 
            style={{
                fontFamily: 'var(--font-display), sans-serif',
                fontSize: 24,
                fontWeight: 800,
                color: '#0C0F17',
                letterSpacing: '-0.03em',
                marginBottom: 4,
            }}
        >
          {isDragging ? 'Drop to upload' : 'Select files'}
        </h3>
        
        <p style={{
            fontSize: 13.5,
            fontWeight: 500,
            color: '#8B9CBD',
            letterSpacing: '-0.01em',
            marginBottom: 26,
        }}>
          or drag and drop them here
        </p>

        {/* Minimal CTA pill */}
        <div
          style={{
            padding: '7px 20px',
            borderRadius: 999,
            background: isDragging ? 'rgba(52,211,153,0.15)' : 'rgba(52,211,153,0.08)',
            border: '1px solid rgba(52,211,153,0.25)',
            color: '#065F46',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '-0.01em',
            transition: 'all 0.2s ease',
            boxShadow: isDragging ? '0 2px 8px rgba(52,211,153,0.1)' : 'none',
          }}
        >
          Browse device
        </div>
      </div>
    </div>
  );
}
