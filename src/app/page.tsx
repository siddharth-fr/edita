'use client';

import Link from 'next/link';
import {
  ShieldCheck, Zap, Globe, ArrowRight, Layers, Lock, Sparkles,
} from 'lucide-react';
import ToolsSection from '@/components/ui/ToolsSection';
import HeroCardGrid, { CardFace } from '@/components/ui/HeroCardGrid';

/* ─────────────────────────────────────────────────────────
  Tool catalogue (used in the tools grid below the fold)
───────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────
  Ambient depth-layer card definitions
  Each card has:
    - position (top/left/right/bottom as %)
    - depth layer 1 | 2 | 3  (1 = farthest, 3 = nearest)
    - float animation class
    - a unique pastel accent
───────────────────────────────────────────────────────── */
/*
  Hero background grid — 5 columns × 3 rows, centre slot (col 2, row 1) is
  behind the hero text so we omit it. Blur and opacity are computed per-card
  from geometry, not hardcoded layers.
*/
const heroGridCards = [
  // row 0 — top row (all 5 columns)
  { label: 'Merge PDF', category: 'PDF', gradient: 'linear-gradient(135deg,#F5F9FF,#E6F0FF)', col: 0, row: 0, rotate: '-3deg' },
  { label: 'Compress PDF', category: 'PDF', gradient: 'linear-gradient(135deg,#F8F4FF,#EDE5FF)', col: 1, row: 0, rotate: '2deg' },
  { label: 'Image Compressor', category: 'Image', gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)', col: 2, row: 0, rotate: '-1deg' },
  { label: 'PNG to JPG', category: 'Image', gradient: 'linear-gradient(135deg,#F4FFF9,#E5FBEF)', col: 3, row: 0, rotate: '2.5deg' },
  { label: 'MP4 to MP3', category: 'Audio', gradient: 'linear-gradient(135deg,#F7F5FF,#EEE9FF)', col: 4, row: 0, rotate: '-2deg' },

  // row 1 — middle row (skip col 2 — hero text lives there)
  { label: 'PDF to Word', category: 'Convert', gradient: 'linear-gradient(135deg,#F2FDFF,#DCF8FF)', col: 0, row: 1, rotate: '2deg' },
  { label: 'Split PDF', category: 'PDF', gradient: 'linear-gradient(135deg,#FFF6EC,#FFEAD8)', col: 1, row: 1, rotate: '-1.5deg' },
  { label: 'Word to PDF', category: 'Convert', gradient: 'linear-gradient(135deg,#F3F5FF,#E5E9FF)', col: 3, row: 1, rotate: '1.5deg' },
  { label: 'JPG to PDF', category: 'Image', gradient: 'linear-gradient(135deg,#FFF3F7,#FFE5F0)', col: 4, row: 1, rotate: '-2.5deg' },

  // row 2 — bottom row (all 5 columns)
  { label: 'PDF to JPG', category: 'Image', gradient: 'linear-gradient(135deg,#FFF4F4,#FFE7E7)', col: 0, row: 2, rotate: '-2deg' },
  { label: 'Resize Image', category: 'Image', gradient: 'linear-gradient(135deg,#F5F9FF,#E6F0FF)', col: 1, row: 2, rotate: '1deg' },
  { label: 'Audio Extract', category: 'Audio', gradient: 'linear-gradient(135deg,#F7F5FF,#EEE9FF)', col: 2, row: 2, rotate: '-1.5deg' },
  { label: 'Merge PDF', category: 'PDF', gradient: 'linear-gradient(135deg,#F8F4FF,#EDE5FF)', col: 3, row: 2, rotate: '2deg' },
  { label: 'Image Crop', category: 'Image', gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)', col: 4, row: 2, rotate: '-1deg' },
];

/* Grid geometry constants — now live inside HeroCardGrid.tsx */


/* ─────────────────────────────────────────────────────────
  Page
───────────────────────────────────────────────────────── */
export default function Home() {
  const handleBrowseTools = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('tools');
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 64; // Adjust for scroll padding
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main
      className="flex-1 flex flex-col items-center w-full pb-28 relative overflow-x-hidden"
      style={{
        background: '#FAFBFF',
      }}
    >

      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[620px] sm:min-h-[680px] flex items-center justify-center overflow-hidden px-4">

        {/* ── Deep-space ambient background ── */}
        <div className="pointer-events-none select-none absolute inset-0 -z-10">

          {/* ── Pastel sky base ── */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 90% 70% at 50% 35%, #F0F4FF 0%, #F7F5FF 35%, #FAFBFF 70%, #FAFBFF 100%)',
            }}
          />

          {/* Pastel glow — top centre, soft blue */}
          <div
            className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[640px] h-[440px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(186,220,255,0.35) 0%, rgba(199,210,255,0.18) 45%, transparent 72%)',
              filter: 'blur(1px)',
            }}
          />
          {/* Pastel glow — lower left, soft violet */}
          <div
            className="absolute bottom-[-40px] left-[-60px] w-[380px] h-[320px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(210,190,255,0.28) 0%, transparent 68%)',
            }}
          />
          {/* Pastel glow — lower right, soft green */}
          <div
            className="absolute bottom-[-20px] right-[-40px] w-[340px] h-[280px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(167,240,198,0.22) 0%, transparent 68%)',
            }}
          />
          {/* Pastel glow — upper right, soft rose */}
          <div
            className="absolute top-[-20px] right-[-20px] w-[280px] h-[240px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(255,200,220,0.18) 0%, transparent 68%)',
            }}
          />
        </div>


        {/* ── Hero background grid (shuffled each load by client component) ── */}
        <HeroCardGrid cards={heroGridCards} />


        {/* ── Hero content — sits above everything ── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-[520px] px-4 py-20 sm:py-24">


          {/* ── Decorative green-white aurora behind the title ── */}
          {/* Outer diffuse green bloom */}
          <div
            className="pointer-events-none absolute -z-[1]"
            style={{
              top: '40%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 480, height: 320,
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.22) 0%, rgba(249, 255, 253, 0.1) 40%, transparent 70%)',
              filter: 'blur(2px)',
            }}
          />
          {/* Inner brighter emerald core */}
          <div
            className="pointer-events-none absolute -z-[1]"
            style={{
              top: '22%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 260, height: 160,
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.28) 0%, transparent 65%)',
              filter: 'blur(1px)',
            }}
          />
          {/* White softener — bleeds the glow into the page bg */}
          <div
            className="pointer-events-none absolute -z-[1]"
            style={{
              top: '22%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 340, height: 200,
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.18) 45%, transparent 70%)',
            }}
          />

          {/* ── Status chip ── */}
          <div
            className="inline-flex items-center gap-2 mb-9"
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

            <span>100% Private & Free</span>
          </div>

          {/* ── Headline ── */}
          <h1 style={{
            margin: '0 0 22px',
            fontFamily: 'var(--font-display), sans-serif',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            fontSize: 'clamp(52px, 7.5vw, 78px)',
            overflow: 'visible',
          }}>
            <span style={{ display: 'block', color: '#0C0F17' }}>The file tools</span>
            <span style={{
              display: 'block',
              marginTop: 6,
              paddingBottom: '0.15em',
              background: 'linear-gradient(128deg, #34D399 0%, #059669 65%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>you need.</span>
          </h1>

          {/* ── Subtext ── */}
          <p style={{
            margin: '0 0 36px',
            fontSize: 15,
            fontWeight: 400,
            lineHeight: 1.65,
            letterSpacing: '-0.01em',
            color: '#6B7280',
            maxWidth: 300,
          }}>
            Convert, compress and edit - entirely in your browser.
            <br />Nothing ever leaves your device.
          </p>

          {/* ── CTAs ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
            <a
              href="#tools"
              onClick={handleBrowseTools}
              className="transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '13px 26px',
                borderRadius: 14,
                background: 'linear-gradient(135deg, #34D399 0%, #059669 100%)',
                boxShadow: '0 8px 26px rgba(5,150,105,0.30)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                textDecoration: 'none',
              }}
            >
              Browse all tools
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '13px 22px',
                borderRadius: 14,
                background: 'rgba(255,255,255,0.78)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                color: '#374151',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              <ShieldCheck size={15} style={{ color: '#34D399' }} />
              No sign-up needed
            </div>
          </div>

          {/* ── Feature pills ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            {[
              { icon: <Zap size={11} style={{ color: '#F59E0B' }} />, label: 'WebAssembly fast' },
              { icon: <Globe size={11} style={{ color: '#60A5FA' }} />, label: 'Works offline' },
              { icon: <ShieldCheck size={11} style={{ color: '#34D399' }} />, label: '100% private' },
            ].map(({ icon, label }) => (
              <span
                key={label}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  padding: '5px 13px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.65)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: '#6B7280',
                  letterSpacing: '-0.015em',
                }}
              >
                {icon}{label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TOOLS SECTION
      ════════════════════════════════════════════════════ */}
      <section
        id="tools"
        className="scroll-mt-16 w-full max-w-6xl px-4 sm:px-8 pt-10 pb-8"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.95) 100%)'
        }}
      >
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
      </section>

      {/* ════════════════════════════════════════════════════
          WHY US / SEO SECTION
      ════════════════════════════════════════════════════ */}
      <section
        className="w-full max-w-7xl px-4 sm:px-8 py-24 my-12 relative flex flex-col items-center"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 mt-10">
          {/* Static Floating Cards decorating the Title */}
          <div className="hidden lg:block absolute -left-32 top-8 -rotate-6 opacity-80" style={{ width: 140, filter: 'blur(0.5px)' }}>
            <CardFace label="Merge PDF" category="PDF" gradient="linear-gradient(135deg,#F5F9FF,#E6F0FF)" size={140} />
          </div>
          <div className="hidden lg:block absolute -right-28 top-2 rotate-3 opacity-90" style={{ width: 125, filter: 'blur(0px)' }}>
            <CardFace label="Image Compressor" category="IMAGE" gradient="linear-gradient(135deg,#F3FFF7,#E2FBEA)" size={125} />
          </div>
          <div className="hidden lg:block absolute -right-40 top-36 -rotate-3 opacity-60" style={{ width: 100, filter: 'blur(1.5px)' }}>
             <CardFace label="Word to PDF" category="CONVERT" gradient="linear-gradient(135deg,#F8F4FF,#EDE5FF)" size={100} />
          </div>
          <div className="hidden lg:block absolute -left-36 top-40 rotate-6 opacity-70" style={{ width: 110, filter: 'blur(1px)' }}>
             <CardFace label="Split PDF" category="PDF" gradient="linear-gradient(135deg,#FFF6EC,#FFEAD8)" size={110} />
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
            <span>Why Choose EDDIT?</span>
          </div>

          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-display), sans-serif',
            fontSize: 'clamp(32px, 5vw, 46px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#0C0F17',
            marginBottom: '20px',
            lineHeight: 1.1,
          }}>
            The Ultimate Selection of <br className="hidden sm:block" />
            <span style={{
              background: 'linear-gradient(128deg, #34D399 0%, #059669 65%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Free Online File Tools</span>
          </h2>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#4B5563',
            fontWeight: 400,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            Whether you need a reliable PDF converter, a high-quality image compressor, or powerful document editing features, EDDIT provides an all-in-one platform built for speed, uncompromised security, and absolute premium quality without the price tag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 w-full max-w-6xl relative z-10 px-2">
          {[
            {
              icon: <Lock size={22} style={{ color: '#059669' }} strokeWidth={2.5} />,
              title: "100% Secure & Private",
              desc: "Files never leave your device. All compression and formatting is executed locally via browser.",
              gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)',
              category: 'PRIVACY'
            },
            {
              icon: <Zap size={22} style={{ color: '#D97706' }} strokeWidth={2.5} />,
              title: "Blazing Fast Speeds",
              desc: "Powered by advanced WebAssembly (WASM), skipping long server uploads for immediate results.",
              gradient: 'linear-gradient(135deg,#FFF6EC,#FFEAD8)',
              category: 'PERFORMANCE'
            },
            {
              icon: <Globe size={22} style={{ color: '#2563EB' }} strokeWidth={2.5} />,
              title: "Free With No Limits",
              desc: "Access premium PDF and image tools with zero paywalls, and absolutely no account required.",
              gradient: 'linear-gradient(135deg,#F5F9FF,#E6F0FF)',
              category: 'ACCESS'
            },
            {
              icon: <Layers size={22} style={{ color: '#7C3AED' }} strokeWidth={2.5} />,
              title: "Studio-Grade Precision",
              desc: "Intelligent algorithms preserve your original layout and formatting for lossless quality.",
              gradient: 'linear-gradient(135deg,#F8F4FF,#EDE5FF)',
              category: 'QUALITY'
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative w-full bg-white p-1 transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              style={{
                borderRadius: '22px',
                minHeight: '260px',
              }}
            >
              {/* PASTEL BACKGROUND */}
              <div
                className="absolute overflow-hidden transition-all duration-300 group-hover:saturate-[1.08] group-hover:brightness-[1.02]"
                style={{
                  inset: '4px',
                  borderRadius: '18px',
                  background: feature.gradient,
                }}
              >
                {/* AMBIENT LIGHT */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.35), transparent 70%)',
                  }}
                />
                {/* AMBIENT LIGHT HOVER */}
                <div
                  className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.55), transparent 65%)',
                  }}
                />

                {/* Icon */}
                <div className="absolute top-5 right-5 w-10 h-10 bg-white/70 backdrop-blur-md rounded-[12px] flex items-center justify-center shadow-sm border border-white/60 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
              </div>

              {/* FOLDER BODY */}
              <div
                className="absolute bg-white flex flex-col justify-start"
                style={{
                  bottom: '4px',
                  left: '4px',
                  right: '4px',
                  height: '62%',
                  borderRadius: '0 0 18px 18px',
                  padding: '24px 20px 20px',
                }}
              >
                {/* CATEGORY NOTCH */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-24px',
                    left: 0,
                    width: '52%',
                    height: '24px',
                    background: '#ffffff',
                    borderRadius: '9px 9px 0 0',
                    padding: '4px 14px 0 16px',
                    fontSize: '10.5px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: '#6B7280',
                    textTransform: 'uppercase'
                  }}
                >
                  {feature.category}
                </div>

                {/* CURVE SEAM */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-24px',
                    left: '52%',
                    width: '16px',
                    height: '24px',
                    background: 'transparent',
                    boxShadow: '-8px 8px 0 0 #ffffff',
                    borderRadius: '0 0 0 9px'
                  }}
                />

                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#1F2937',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.35,
                    marginBottom: '8px'
                  }}
                >
                  {feature.title}
                </div>
                <div
                  style={{
                    fontSize: '13.5px',
                    color: '#6B7280',
                    lineHeight: 1.55,
                    fontWeight: 400,
                  }}
                >
                  {feature.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
