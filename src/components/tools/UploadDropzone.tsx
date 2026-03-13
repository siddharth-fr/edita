'use client';
import { useCallback, useState } from 'react';
import { CardFace } from '@/components/ui/HeroCardGrid';

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
      if (!isDragging) setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, [isDragging]);

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
      className="relative flex flex-col items-center justify-center w-full min-h-[320px] text-center cursor-pointer overflow-hidden"
      style={{
        borderRadius: 32,
        background: isDragging ? 'rgba(52, 211, 153, 0.03)' : '#ffffff',
        border: '2px dotted',
        borderColor: isDragging ? '#10B981' : 'rgba(16, 185, 129, 0.25)',
        boxShadow: isDragging
          ? '0 20px 40px rgba(52,211,153,0.06)'
          : '0 4px 20px rgba(0,0,0,0.01)',
        transform: isDragging ? 'translateY(-2px)' : 'none',
        transition: `transform 0.4s ${SPRING}, background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease`,
        willChange: 'transform, background, border-color, box-shadow',
      }}
    >
      <input
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label="Upload files"
        title=""
      />

      <div className="flex flex-col items-center pointer-events-none px-8">

        {/* Toolcard Stack — Modern & Clean folder clusters */}
        <div
          style={{
            position: 'relative',
            width: 140,
            marginBottom: 12,
            marginTop: -20,
            transform: `scale(0.58)`,
            transition: `transform 0.6s ${SPRING}`,
            willChange: 'transform',
          }}
        >
          {/* Back Card 2 - Blue Theme */}
          <div style={{
            position: 'absolute',
            inset: 0,
            transform: isDragging ? 'translate(28px, -14px) rotate(14deg)' : 'translate(15px, -6px) rotate(9deg)',
            transition: `transform 0.7s ${SPRING}, opacity 0.7s ease`,
            opacity: 0.5,
            filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.06))',
            willChange: 'transform, opacity',
          }}>
            <CardFace
              label="Secure"
              category="ENCRYPT"
              gradient="linear-gradient(135deg,#F5F9FF,#E6F0FF)"
              size={140}
            />
          </div>

          {/* Back Card 1 - Orange Theme */}
          <div style={{
            position: 'absolute',
            inset: 0,
            transform: isDragging ? 'translate(-24px, -18px) rotate(-12deg)' : 'translate(-12px, -10px) rotate(-7deg)',
            transition: `transform 0.65s ${SPRING}, opacity 0.65s ease`,
            opacity: 0.75,
            filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.08))',
            willChange: 'transform, opacity',
          }}>
            <CardFace
              label="Private"
              category="CLOUD"
              gradient="linear-gradient(135deg,#FFF6EC,#FFEAD8)"
              size={140}
            />
          </div>

          {/* Front Card - Green Theme (Main) */}
          <div
            style={{
              position: 'relative',
              transform: isDragging ? 'translateY(-12px) rotate(3deg)' : 'rotate(1.5deg)',
              transition: `transform 0.6s ${SPRING}`,
              filter: 'drop-shadow(0 16px 45px rgba(0,0,0,0.14))',
              willChange: 'transform',
            }}
          >
            <CardFace
              label="Upload"
              category="SECURE"
              gradient="linear-gradient(135deg,#F3FFF7,#E2FBEA)"
              size={140}
            />
          </div>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display), sans-serif',
            fontSize: 22,
            fontWeight: 800,
            color: '#0C0F17',
            letterSpacing: '-0.025em',
            marginBottom: 10,
          }}
        >
          {isDragging ? 'Drop to start' : 'Select files to begin'}
        </h3>

        <p style={{
          fontSize: 14.5,
          fontWeight: 500,
          color: '#64748B',
          letterSpacing: '-0.01em',
          maxWidth: '260px',
          lineHeight: 1.6
        }}>
          Drag and drop your files here or click anywhere to browse
        </p>
      </div>
    </div>
  );
}
