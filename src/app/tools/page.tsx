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
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-0">

          {/* Static Floating Cards decorating the Title — Differentiated for Tools */}
          <div className="absolute -left-14 sm:-left-36 lg:-left-64 top-[-30px] sm:top-[-50px] lg:top-[-70px] -rotate-6 opacity-60 sm:opacity-60 lg:opacity-80 scale-[0.55] sm:scale-75 lg:scale-110 origin-center pointer-events-none -z-10" style={{ width: 140, filter: 'blur(0.5px)' }}>
            <CardFace label="Batch PDF" category="TOOLS" gradient="linear-gradient(135deg,#F5F9FF,#E6F0FF)" size={140} />
          </div>
          <div className="absolute -right-14 sm:-right-36 lg:-right-64 top-[50px] sm:top-[80px] lg:top-[120px] rotate-12 opacity-60 sm:opacity-70 lg:opacity-90 scale-[0.6] sm:scale-75 lg:scale-105 origin-center pointer-events-none -z-10" style={{ width: 125, filter: 'blur(0px)' }}>
            <CardFace label="Direct Save" category="EXPORT" gradient="linear-gradient(135deg,#F3FFF7,#E2FBEA)" size={125} />
          </div>
          <div className="absolute -right-10 sm:-right-28 lg:-right-52 top-[-20px] sm:top-[-40px] lg:top-[-60px] -rotate-12 opacity-50 sm:opacity-50 lg:opacity-60 scale-[0.55] sm:scale-65 lg:scale-115 origin-center pointer-events-none -z-10" style={{ width: 100, filter: 'blur(1.5px)' }}>
            <CardFace label="Merge All" category="PDF" gradient="linear-gradient(135deg,#FFF6EC,#FFEAD8)" size={100} />
          </div>
          <div className="absolute -left-10 sm:-left-28 lg:-left-52 top-[120px] sm:top-[160px] lg:top-[200px] rotate-3 opacity-50 sm:opacity-50 lg:opacity-70 scale-[0.55] sm:scale-65 lg:scale-100 origin-center pointer-events-none -z-10" style={{ width: 110, filter: 'blur(1px)' }}>
            <CardFace label="Pro Editor" category="EDIT" gradient="linear-gradient(135deg,#F4FFF9,#E5FBEF)" size={110} />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
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
              Discover our complete collection of fast, secure, and free online file tools. From PDF conversion and compression to robust image editing, Edita has everything you need to manage your files effortlessly right in your browser.
            </p>
          </div>
        </div>

        <div style={{
          background: '#FFFFFF',
          borderRadius: 32,
          padding: '40px 0',
          border: '1px solid rgba(16, 185, 129, 0.08)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.01)',
          position: 'relative',
          marginTop: '24px'
        }}>
          <ToolsSection tools={tools} />

          {/* Trust strip */}
          <div
            className="mt-14 pt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-semibold"
            style={{ 
              borderTop: '1px solid rgba(16, 185, 129, 0.06)', 
              color: '#8b9cbd',
              margin: '0 40px',
              paddingTop: '32px'
            }}
          >
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" />Files never leave your device</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber-500" />WebAssembly-powered</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-emerald-500" />No account required · Always free</span>
          </div>
        </div>
      </section>
    </main>
  );
}
