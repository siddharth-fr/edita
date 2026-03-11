'use client';

import { ShieldCheck, Zap, Globe } from 'lucide-react';
import ToolsSection from '@/components/ui/ToolsSection';
import { CardFace } from '@/components/ui/HeroCardGrid';

const tools = [
  { name: 'Merge PDF', slug: 'merge-pdf', iconKey: 'FileText', theme: 'blue', category: 'PDF' },
  { name: 'Compress PDF', slug: 'compress-pdf', iconKey: 'Minimize2', theme: 'purple', category: 'PDF' },
  { name: 'Split PDF', slug: 'split-pdf', iconKey: 'SplitSquareHorizontal', theme: 'orange', category: 'PDF' },
  { name: 'PDF to Word', slug: 'pdf-to-word', iconKey: 'FileOutput', theme: 'cyan', category: 'Convert' },
  { name: 'Word to PDF', slug: 'word-to-pdf', iconKey: 'FileText', theme: 'indigo', category: 'Convert' },
  { name: 'JPG to PDF', slug: 'jpg-to-pdf', iconKey: 'ImageIcon', theme: 'pink', category: 'Image' },
  { name: 'PDF to JPG', slug: 'pdf-to-jpg', iconKey: 'Maximize2', theme: 'rose', category: 'Image' },
  { name: 'Image Compressor', slug: 'image-compressor', iconKey: 'FileArchive', theme: 'green', category: 'Image' },
  { name: 'PNG to JPG', slug: 'png-to-jpg', iconKey: 'ImageIcon', theme: 'emerald', category: 'Image' },
  { name: 'MP4 to MP3', slug: 'mp4-to-mp3', iconKey: 'Music', theme: 'violet', category: 'Audio' },
];

export default function ToolsPage() {
  return (
    <main
      className="flex flex-col items-center w-full min-h-screen pb-28 pt-28 relative overflow-x-hidden"
      style={{
        background: '#FAFBFF',
      }}
    >
      {/* ── Deep-space ambient background ── */}
      <div className="pointer-events-none select-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% -20%, #F0F4FF 0%, #FAFBFF 100%)',
          }}
        />
        <div
          className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[640px] h-[440px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(186,220,255,0.25) 0%, rgba(199,210,255,0.12) 45%, transparent 72%)',
            filter: 'blur(1px)',
          }}
        />
      </div>

      <section className="w-full max-w-6xl px-4 sm:px-8 mt-12 mb-10">
        <div className="text-center max-w-2xl mx-auto mb-16 relative">

          {/* Static Floating Cards decorating the Title */}
          <div className="absolute -left-3 sm:-left-12 lg:-left-32 top-[-10px] sm:top-2 lg:top-8 -rotate-6 opacity-60 sm:opacity-60 lg:opacity-80 scale-[0.55] sm:scale-75 lg:scale-100 origin-center pointer-events-none" style={{ width: 140, filter: 'blur(0.5px)' }}>
            <CardFace label="PDF to Word" category="CONVERT" gradient="linear-gradient(135deg,#F2FDFF,#DCF8FF)" size={140} />
          </div>
          <div className="absolute -right-3 sm:-right-12 lg:-right-28 top-[-20px] sm:top-[-10px] lg:top-2 rotate-3 opacity-60 sm:opacity-70 lg:opacity-90 scale-[0.6] sm:scale-75 lg:scale-100 origin-center pointer-events-none" style={{ width: 125, filter: 'blur(0px)' }}>
            <CardFace label="JPG to PDF" category="IMAGE" gradient="linear-gradient(135deg,#FFF3F7,#FFE5F0)" size={125} />
          </div>
          <div className="absolute -right-6 sm:-right-20 lg:-right-40 top-[50px] sm:top-[70px] lg:top-36 -rotate-3 opacity-50 sm:opacity-50 lg:opacity-60 scale-[0.55] sm:scale-65 lg:scale-100 origin-center pointer-events-none" style={{ width: 100, filter: 'blur(1.5px)' }}>
            <CardFace label="PNG to JPG" category="IMAGE" gradient="linear-gradient(135deg,#F4FFF9,#E5FBEF)" size={100} />
          </div>
          <div className="absolute -left-6 sm:-left-16 lg:-left-36 top-[60px] sm:top-[80px] lg:top-40 rotate-6 opacity-50 sm:opacity-50 lg:opacity-70 scale-[0.55] sm:scale-65 lg:scale-100 origin-center pointer-events-none" style={{ width: 110, filter: 'blur(1px)' }}>
            <CardFace label="Compress PDF" category="PDF" gradient="linear-gradient(135deg,#F8F4FF,#EDE5FF)" size={110} />
          </div>

          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              padding: '6px 14px',
              borderRadius: 999,
              border: '1px solid rgba(52, 211, 153, 0.25)',
              background: 'rgba(197, 255, 234, 0.08)',
              color: '#065F46',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            <span>All Tools</span>
          </div>

          <h1 style={{
            margin: '0 0 18px',
            fontFamily: 'var(--font-display), sans-serif',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            fontSize: 'clamp(38px, 6vw, 48px)',
            color: '#0C0F17',
          }}>
            Everything You Need <br />
            <span style={{
              background: 'linear-gradient(128deg, #34D399 0%, #059669 65%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>In One Place</span>
          </h1>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#6B7280',
            fontWeight: 400,
          }}>
            Explore our complete collection of lightning-fast utilities. Convert, compress, and edit entirely securely within your browser.
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,0.95) 100%)',
          borderRadius: 32,
          padding: '24px 0 40px'
        }}>
          <ToolsSection tools={tools} />

          {/* Trust strip */}
          <div
            className="mt-14 pt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold"
            style={{ borderTop: '1px solid #e8eef8', color: '#8b9cbd' }}
          >
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />Files never leave your device</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-400" />WebAssembly-powered</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" style={{ color: '#05c6ff' }} />No account required · Always free</span>
          </div>
        </div>
      </section>
    </main>
  );
}
