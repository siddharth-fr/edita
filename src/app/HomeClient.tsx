'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck, Zap, Globe, Layers, Lock, Sparkles,
  MousePointerClick, Cpu, Download,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { trackEvent } from '@/lib/ga4';
import { type AppTheme } from '@/config/themes';

import ToolsSection from '@/components/ui/ToolsSection';
import HeroCardGrid from '@/components/ui/HeroCardGrid';
import HeroicHowItWorks from '@/components/ui/HeroicHowItWorks';
import WhyUsSection from '@/components/ui/WhyUsSection';
import FAQSection from '@/components/ui/FAQSection';

/* ─────────────────────────────────────────────────────────
  Tool catalogue (used in the tools grid below the fold)
───────────────────────────────────────────────────────── */
const tools: { name: string; slug: string; iconKey: string; theme: AppTheme; category: string; }[] = [
  { name: 'Merge PDF', slug: 'merge-pdf', iconKey: 'FileText', theme: 'blue', category: 'PDF' },
  { name: 'Compress PDF', slug: 'compress-pdf', iconKey: 'Minimize2', theme: 'purple', category: 'PDF' },
  { name: 'Split PDF', slug: 'split-pdf', iconKey: 'SplitSquareHorizontal', theme: 'orange', category: 'PDF' },
  { name: 'PDF to Word', slug: 'pdf-to-word', iconKey: 'FileOutput', theme: 'cyan', category: 'Convert' },
  { name: 'Word to PDF', slug: 'word-to-pdf', iconKey: 'FileText', theme: 'indigo', category: 'Convert' },
  { name: 'JPG to PDF', slug: 'jpg-to-pdf', iconKey: 'ImageIcon', theme: 'pink', category: 'Image' },
  { name: 'PDF to JPG', slug: 'pdf-to-jpg', iconKey: 'Maximize2', theme: 'rose', category: 'Image' },
  { name: 'Image Compressor', slug: 'image-compressor', iconKey: 'FileArchive', theme: 'green', category: 'Image' },
  { name: 'PNG to JPG', slug: 'png-to-jpg', iconKey: 'ImageIcon', theme: 'emerald', category: 'Image' },
  { name: 'JPG to PNG', slug: 'jpg-to-png', iconKey: 'ImageIcon', theme: 'pink', category: 'Image' },
  { name: 'PNG to WebP', slug: 'png-to-webp', iconKey: 'ImageIcon', theme: 'emerald', category: 'Image' },
  { name: 'WebP to PNG', slug: 'webp-to-png', iconKey: 'ImageIcon', theme: 'cyan', category: 'Image' },
  { name: 'JPG to WebP', slug: 'jpg-to-webp', iconKey: 'ImageIcon', theme: 'pink', category: 'Image' },
  { name: 'WebP to JPG', slug: 'webp-to-jpg', iconKey: 'ImageIcon', theme: 'cyan', category: 'Image' },
  { name: 'PNG to AVIF', slug: 'png-to-avif', iconKey: 'ImageIcon', theme: 'emerald', category: 'Image' },
  { name: 'JPG to AVIF', slug: 'jpg-to-avif', iconKey: 'ImageIcon', theme: 'pink', category: 'Image' },
  { name: 'AVIF to PNG', slug: 'avif-to-png', iconKey: 'ImageIcon', theme: 'indigo', category: 'Image' },
  { name: 'AVIF to JPG', slug: 'avif-to-jpg', iconKey: 'ImageIcon', theme: 'indigo', category: 'Image' },
  { name: 'SVG to PNG', slug: 'svg-to-png', iconKey: 'ImageIcon', theme: 'orange', category: 'Image' },
  { name: 'SVG to JPG', slug: 'svg-to-jpg', iconKey: 'ImageIcon', theme: 'orange', category: 'Image' },
  { name: 'SVG to WebP', slug: 'svg-to-webp', iconKey: 'ImageIcon', theme: 'orange', category: 'Image' },
  { name: 'MP4 to MP3', slug: 'mp4-to-mp3', iconKey: 'Music', theme: 'violet', category: 'Audio' },
  { name: 'SIP Calculator', slug: 'sip-calculator', iconKey: 'TrendingUp', theme: 'blue', category: 'Finance' },
  { name: 'Compound Interest', slug: 'compound-interest-calculator', iconKey: 'Calculator', theme: 'emerald', category: 'Finance' },
  { name: 'FD Calculator', slug: 'fd-calculator', iconKey: 'Landmark', theme: 'purple', category: 'Finance' },
  { name: 'Mutual Fund', slug: 'mutual-fund-calculator', iconKey: 'BarChart3', theme: 'cyan', category: 'Finance' },
  { name: 'PPF Calculator', slug: 'ppf-calculator', iconKey: 'ShieldCheck', theme: 'indigo', category: 'Finance' },
  { name: 'RD Calculator', slug: 'rd-calculator', iconKey: 'Repeat', theme: 'orange', category: 'Finance' },
  { name: 'Loan Calculator', slug: 'loan-calculator', iconKey: 'Wallet', theme: 'emerald', category: 'Finance' },
  { name: 'Discount Calculator', slug: 'discount-calculator', iconKey: 'Tag', theme: 'rose', category: 'Finance' },
  { name: 'Margin Calculator', slug: 'margin-calculator', iconKey: 'Percent', theme: 'blue', category: 'Finance' },
  { name: 'Sales Tax', slug: 'sales-tax-calculator', iconKey: 'Receipt', theme: 'orange', category: 'Finance' },
  { name: 'Standard Calculator', slug: 'standard-calculator', iconKey: 'Calculator', theme: 'blue', category: 'Math' },
  { name: 'Scientific Calc', slug: 'scientific-calculator', iconKey: 'Divide', theme: 'indigo', category: 'Math' },
  { name: 'Differentiation', slug: 'differentiation-calculator', iconKey: 'Variable', theme: 'purple', category: 'Math' },
  { name: 'Integration Tool', slug: 'integration-calculator', iconKey: 'Sigma', theme: 'emerald', category: 'Math' },
  { name: 'Equation Solver', slug: 'equation-solver', iconKey: 'X', theme: 'rose', category: 'Math' },
  { name: 'Quadratic Solver', slug: 'quadratic-solver', iconKey: 'ChevronRight', theme: 'orange', category: 'Math' },
  { name: 'Matrix Calc', slug: 'matrix-calculator', iconKey: 'Grid', theme: 'cyan', category: 'Math' },
  { name: 'Statistics Calc', slug: 'statistics-calculator', iconKey: 'BarChart3', theme: 'blue', category: 'Math' },
  { name: 'GCD & LCM', slug: 'gcd-lcm-calculator', iconKey: 'Minimize2', theme: 'green', category: 'Math' },
  { name: 'Percentage Calc', slug: 'percentage-calculator', iconKey: 'Percent', theme: 'pink', category: 'Math' },
  { name: 'Fraction Calc', slug: 'fraction-calculator', iconKey: 'Divide', theme: 'orange', category: 'Math' },
  { name: 'Logarithm Tool', slug: 'logarithm-calculator', iconKey: 'Binary', theme: 'orange', category: 'Math' },
  { name: 'Unit Converter', slug: 'unit-converter', iconKey: 'Ruler', theme: 'blue', category: 'Utility' },
  { name: 'BMI Calculator', slug: 'bmi-calculator', iconKey: 'Activity', theme: 'rose', category: 'Utility' },
  { name: 'Age Calculator', slug: 'age-calculator', iconKey: 'Calendar', theme: 'emerald', category: 'Utility' },
  { name: 'Binary Converter', slug: 'binary-converter', iconKey: 'Cpu', theme: 'indigo', category: 'Utility' },
  { name: 'Random Generator', slug: 'random-generator', iconKey: 'Shuffle', theme: 'purple', category: 'Utility' },
  { name: 'Roman Numerals', slug: 'roman-numerals', iconKey: 'Hash', theme: 'orange', category: 'Utility' },
  { name: 'QR Code Generator', slug: 'qr-code-generator', iconKey: 'QrCode', theme: 'emerald', category: 'Utility' },
  { name: 'Color Palette', slug: 'image-color-palette-generator', iconKey: 'Palette', theme: 'emerald', category: 'Utility' },
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
  { label: 'Merge PDF', category: 'PDF', theme: 'blue' as AppTheme, col: 0, row: 0, rotate: '-3deg' },
  { label: 'Compress PDF', category: 'PDF', theme: 'purple' as AppTheme, col: 1, row: 0, rotate: '2deg' },
  { label: 'Image Compressor', category: 'Image', theme: 'green' as AppTheme, col: 2, row: 0, rotate: '-1deg' },
  { label: 'PNG to JPG', category: 'Image', theme: 'emerald' as AppTheme, col: 3, row: 0, rotate: '2.5deg' },
  { label: 'MP4 to MP3', category: 'Audio', theme: 'violet' as AppTheme, col: 4, row: 0, rotate: '-2deg' },

  // row 1 — middle row (skip col 2 — hero text lives there)
  { label: 'PDF to Word', category: 'Convert', theme: 'cyan' as AppTheme, col: 0, row: 1, rotate: '2deg' },
  { label: 'Split PDF', category: 'PDF', theme: 'orange' as AppTheme, col: 1, row: 1, rotate: '-1.5deg' },
  { label: 'Word to PDF', category: 'Convert', theme: 'indigo' as AppTheme, col: 3, row: 1, rotate: '1.5deg' },
  { label: 'JPG to PDF', category: 'Image', theme: 'pink' as AppTheme, col: 4, row: 1, rotate: '-2.5deg' },

  // row 2 - bottom row
  { label: 'SIP Calculator', category: 'Finance', theme: 'blue' as AppTheme, col: 0, row: 2, rotate: '-2deg' },
  { label: 'Scientific Calc', category: 'Math', theme: 'indigo' as AppTheme, col: 1, row: 2, rotate: '1deg' },
  { label: 'QR Generator', category: 'Utility', theme: 'emerald' as AppTheme, col: 2, row: 2, rotate: '-1.5deg' },
  { label: 'Binary Conv', category: 'Utility', theme: 'indigo' as AppTheme, col: 3, row: 2, rotate: '2deg' },
  { label: 'BMI Calc', category: 'Utility', theme: 'rose' as AppTheme, col: 4, row: 2, rotate: '-1deg' },
];

/* Grid geometry constants — now live inside HeroCardGrid.tsx */


/* ─────────────────────────────────────────────────────────
  Page
───────────────────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    // We let the browser handle scroll restoration naturally (bfcache friendly)
  }, []);



  return (
    <main
      className="flex-1 flex flex-col items-center w-full pb-32 relative overflow-x-clip"
      style={{
        background: '#FAFBFF',
      }}
    >

      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative w-full flex items-center justify-center overflow-hidden px-4">

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
        <div className="relative z-10 flex flex-col items-center text-center max-w-[540px] px-4 pt-16 pb-8 sm:pt-20 sm:pb-10">


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
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 45%, transparent 70%)',
            }}
          />



          {/* ── Headline ── */}
          <h1 style={{
            margin: '0 0 24px',
            fontFamily: 'var(--font-display), sans-serif',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            fontSize: 'clamp(42px, 7.5vw, 78px)',
            overflow: 'visible',
          }}>
            <span style={{ display: 'block', color: '#0C0F17' }}>The file tools</span>
            <span style={{
              display: 'block',
              marginTop: 6,
              paddingBottom: '0.15em',
              background: 'linear-gradient(128deg, #10B981 0%, #047857 65%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '0.85em'
            }}>you need.</span>
          </h1>

          {/* ── Subtext ── */}
          <p className="mb-8 sm:mb-9 text-[#526071] text-sm sm:text-[15px] font-medium leading-[1.6] sm:leading-[1.65] tracking-[-0.01em] max-w-[440px]">
            Convert, compress and edit - entirely in your browser.
            <br className="hidden sm:block" /> Nothing ever leaves your device.
          </p>



          {/* ── Feature pills ── */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {[
              { icon: <Globe size={11} style={{ color: '#34D399' }} />, label: 'No signup needed' },
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
        className="scroll-mt-16 w-full max-w-6xl px-4 sm:px-8 pb-12 pt-2 sm:pt-4 -mt-4 sm:-mt-8 relative z-20"
        style={{
          background: 'transparent'
        }}
      >
        <ToolsSection tools={tools} />

        {/* Trust strip */}
        <div
          className="mt-20 pt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs font-semibold"
          style={{ borderTop: '1px solid #e8eef8', color: '#8b9cbd' }}
        >
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />Private & Secure: Files stay on your device</span>
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-emerald-500" />Lightning Fast: Zero server wait times</span>
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-emerald-500" />Always Free: No account required</span>
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
