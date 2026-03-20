'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck, Zap, Globe, ArrowRight, Layers, Lock, Sparkles,
  MousePointerClick, Cpu, Download,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const ToolsSection = dynamic(() => import('@/components/ui/ToolsSection'), { ssr: false });
const HeroCardGrid = dynamic(() => import('@/components/ui/HeroCardGrid'), { ssr: false });
const HeroicHowItWorks = dynamic(() => import('@/components/ui/HeroicHowItWorks'), { ssr: false });
const WhyUsSection = dynamic(() => import('@/components/ui/WhyUsSection'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/ui/FAQSection'), { ssr: false });

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
  useEffect(() => {
    // We let the browser handle scroll restoration naturally (bfcache friendly)
  }, []);

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
      className="flex-1 flex flex-col items-center w-full pb-28 relative overflow-x-clip"
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
              Popular Tools
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
              { icon: <Zap size={11} style={{ color: '#34D399' }} />, label: 'WebAssembly fast' },
              { icon: <Globe size={11} style={{ color: '#34D399' }} />, label: 'Works offline' },
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
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />Files never leave your device</span>
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-emerald-500" />WebAssembly-powered</span>
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-emerald-500" />No account required · Always free</span>
        </div>
      </section>

      <HeroicHowItWorks />
      <WhyUsSection />
      <FAQSection />

      {/* FAQ Structured Data for SEO */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is Edita really free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Edita is 100% free. You can compress PDFs, convert images, and use all our browser-based file tools without any subscription or hidden fees. We don't even require a sign-up—just fast, private tools for everyone."
              }
            },
            {
              "@type": "Question",
              "name": "How does Edita ensure my file privacy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Unlike other online file tools, Edita processes everything locally in your browser using WebAssembly. This means your files are never uploaded to any server. Your sensitive data stays on your device, ensuring 100% privacy and security."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to install any software to use these tools?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No software installation is required. Edita is a suite of web-based tools that run directly in any modern web browser. Simply visit our site and start editing your files instantly."
              }
            },
            {
              "@type": "Question",
              "name": "Is there a file size limit for processing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Since your files are processed locally on your machine, there are no traditional 'upload' limits. The performance depends on your computer's resources, but most common file sizes are handled easily."
              }
            },
            {
              "@type": "Question",
              "name": "Which file formats does Edita support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We currently support a wide range of popular formats including PDF, JPG, PNG, WebP, MP4, MP3, and Word (.docx)."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use Edita tools offline?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Once the website and tools are loaded, many of our utilities can work without an active internet connection because the processing logic remains on your device."
              }
            },
            {
              "@type": "Question",
              "name": "Why is Edita faster than other online converters?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Edita is faster because it eliminates the time-consuming steps of uploading your files to a cloud server and downloading the results. Computation happens immediately in your browser."
              }
            },
            {
              "@type": "Question",
              "name": "Are these tools secure for business and legal documents?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Because Edita follows a strict 'no-upload' policy, your private business contracts and legal documents never leave your local environment."
              }
            }
          ]
        })}
      </Script>
    </main>
  );
}
