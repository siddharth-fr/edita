import Link from 'next/link';
import {
  ShieldCheck, Zap, Globe, ArrowRight, Layers,
} from 'lucide-react';
import ToolCard from '@/components/ui/ToolCard';

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
const ambientCards = [
  // ── Layer 1 — farthest back ──
  { layer: 1, label: 'Resize Image', category: 'Image', gradient: 'linear-gradient(135deg,#F5F9FF,#E6F0FF)', pos: { top: '5%', left: '10%' }, float: 'float-a', rotate: '-4deg' },
  { layer: 1, label: 'Compress PDF', category: 'PDF', gradient: 'linear-gradient(135deg,#F8F4FF,#EDE5FF)', pos: { top: '55%', left: '8%' }, float: 'float-b-rev', rotate: '3deg' },
  { layer: 1, label: 'MP4 to MP3', category: 'Audio', gradient: 'linear-gradient(135deg,#F7F5FF,#EEE9FF)', pos: { top: '6%', right: '10%' }, float: 'float-b', rotate: '4deg' },
  { layer: 1, label: 'Split PDF', category: 'PDF', gradient: 'linear-gradient(135deg,#FFF6EC,#FFEAD8)', pos: { bottom: '8%', right: '8%' }, float: 'float-a-rev', rotate: '-3deg' },

  // ── Layer 2 — middle ──
  { layer: 2, label: 'PDF to Word', category: 'Convert', gradient: 'linear-gradient(135deg,#F2FDFF,#DCF8FF)', pos: { top: '24%', left: '13%' }, float: 'float-c', rotate: '1.5deg' },
  { layer: 2, label: 'Image Compressor', category: 'Image', gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)', pos: { top: '67%', left: '11%' }, float: 'float-d', rotate: '-2deg' },
  { layer: 2, label: 'Merge PDF', category: 'PDF', gradient: 'linear-gradient(135deg,#F5F9FF,#E6F0FF)', pos: { top: '22%', right: '13%' }, float: 'float-a-rev', rotate: '-1.5deg' },
  { layer: 2, label: 'PNG to JPG', category: 'Image', gradient: 'linear-gradient(135deg,#FFF3F7,#FFE5F0)', pos: { top: '70%', right: '11%' }, float: 'float-b', rotate: '2deg' },

  // ── Layer 3 — nearest bg ──
  { layer: 3, label: 'Word to PDF', category: 'Convert', gradient: 'linear-gradient(135deg,#F3F5FF,#E5E9FF)', pos: { top: '40%', left: '17%' }, float: 'float-a', rotate: '0.5deg' },
  { layer: 3, label: 'JPG to PDF', category: 'Image', gradient: 'linear-gradient(135deg,#FFF3F7,#FFE5F0)', pos: { top: '41%', right: '17%' }, float: 'float-c', rotate: '-0.5deg' },
];

/* Layer visual parameters */
const layerStyle: Record<number, {
  opacity: number;
  blur: string;
  scale: number;
  saturate: string;
}> = {
  1: { opacity: 0.42, blur: 'blur(8px)', scale: 1.13, saturate: 'saturate(0.55)' },
  2: { opacity: 0.56, blur: 'blur(4px)', scale: 1.07, saturate: 'saturate(0.70)' },
  3: { opacity: 0.68, blur: 'blur(2px)', scale: 1.02, saturate: 'saturate(0.82)' },
};

/* ─────────────────────────────────────────────────────────
  Page
───────────────────────────────────────────────────────── */
export default function Home() {
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

        {/* ── Ambient depth-layer floating cards (new folder style) ── */}
        <div className="pointer-events-none select-none absolute inset-0 overflow-visible hidden lg:block">
          {ambientCards.map((card) => {
            const lp = layerStyle[card.layer];
            return (
              <div
                key={`${card.label}-${card.layer}`}
                className={`absolute ${card.float}`}
                style={{
                  ...card.pos,
                  opacity: lp.opacity,
                  filter: `${lp.blur} ${lp.saturate}`,
                  transform: `scale(${lp.scale}) rotate(${card.rotate})`,
                  transformOrigin: 'center center',
                  width: 156,
                }}
              >
                {/* New folder-style card — matches the tools grid design */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
                  {/* Card shell */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    background: '#ffffff',
                    borderRadius: 18,
                    padding: 3,
                    overflow: 'hidden',
                    boxShadow: '0 6px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
                  }}>
                    {/* Pastel gradient fill */}
                    <div style={{
                      position: 'absolute',
                      inset: 3,
                      borderRadius: 15,
                      background: card.gradient,
                      overflow: 'hidden',
                    }}>
                      {/* Ambient light */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.5), transparent 70%)',
                      }} />
                    </div>

                    {/* White folder body (bottom 58%) */}
                    <div style={{
                      position: 'absolute',
                      bottom: 3, left: 3, right: 3,
                      height: '58%',
                      background: '#ffffff',
                      borderRadius: '0 0 14px 14px',
                      padding: '10px 12px 10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                    }}>
                      {/* Category notch tab */}
                      <div style={{
                        position: 'absolute',
                        top: -20, left: 0,
                        width: '55%', height: 20,
                        background: '#ffffff',
                        borderRadius: '7px 7px 0 0',
                        padding: '3px 10px 0 12px',
                        fontSize: 8,
                        fontWeight: 600,
                        letterSpacing: '0.07em',
                        color: '#9CA3AF',
                        textTransform: 'uppercase',
                      }}>
                        {card.category}
                      </div>
                      {/* Curve seam */}
                      <div style={{
                        position: 'absolute',
                        top: -20, left: '55%',
                        width: 12, height: 20,
                        background: 'transparent',
                        boxShadow: '-6px 6px 0 0 #ffffff',
                        borderRadius: '0 0 0 7px',
                      }} />
                      {/* Card label */}
                      <p style={{
                        margin: 0, fontSize: 11, fontWeight: 600,
                        color: '#1F2937', letterSpacing: '-0.01em', lineHeight: 1.3,
                      }}>
                        {card.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Hero content — sits above everything ── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-[540px] px-2 py-16 sm:py-20">


          {/* Badge — soft mint pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-wide"
            style={{
              background: 'rgba(167,243,208,0.25)',
              border: '1px solid rgba(52,211,153,0.35)',
              color: '#0D7A4E',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Browser-native · Zero uploads · Always free
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl xl:text-[70px] font-black tracking-[-0.04em] leading-[0.9] mb-5">
            <span className="block" style={{ color: '#1E1B2E' }}>All your file tools.</span>
            <span
              className="block mt-2"
              style={{
                background: 'linear-gradient(130deg, #34D399 0%, #1A9B68 50%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Right here.
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-[15px] sm:text-base leading-relaxed font-medium mb-9 max-w-[340px]"
            style={{ color: '#8892A4' }}
          >
            Convert, compress and edit PDFs, images and audio — entirely in your browser. Nothing is ever sent anywhere.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
              style={{
                background: 'linear-gradient(135deg, #34D399 0%, #059669 100%)',
                boxShadow: '0 10px 30px rgba(5,150,105,0.28), 0 2px 8px rgba(5,150,105,0.15)'
              }}
            >
              Browse all tools
              <ArrowRight className="w-4 h-4" />
            </a>
            <div
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold"
              style={{
                border: '1px solid rgba(52,211,153,0.25)',
                background: 'rgba(255,255,255,0.85)',
                color: '#0D7A4E',
              }}
            >
              <ShieldCheck className="w-4 h-4" style={{ color: '#34D399' }} />
              No account needed
            </div>
          </div>

          {/* Trust row — pill tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { icon: <Zap className="w-3 h-3" style={{ color: '#FBBF24' }} />, label: 'WebAssembly fast' },
              { icon: <Globe className="w-3 h-3" style={{ color: '#60A5FA' }} />, label: 'Works offline' },
              { icon: <ShieldCheck className="w-3 h-3" style={{ color: '#4ADE80' }} />, label: '100% private' },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  color: '#64748B',
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
        {/* Section header */}
        <div className="flex items-end justify-between mb-7 sm:mb-9">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: '#0F172A' }}>
              All tools
            </h2>
            <p className="text-sm mt-1 font-medium" style={{ color: '#94A3B8' }}>
              Pick any tool and get started instantly
            </p>
          </div>
          <div
            className="flex items-center gap-2 text-xs px-3 sm:px-4 py-2 rounded-full font-semibold shadow-sm shrink-0"
            style={{ color: '#94A3B8', background: '#fff', border: '1px solid #dde5f0' }}
          >
            <Layers className="w-3 h-3" style={{ color: '#05c6ff' }} />
            <span className="hidden sm:inline">{tools.length} tools</span>
            <span className="sm:hidden">{tools.length}</span>
          </div>
        </div>

        {/* Tools grid — Apple folder style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-7">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              name={tool.name}
              slug={tool.slug}
              theme={tool.theme as 'blue'}
              category={tool.category}
            />
          ))}
        </div>

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
    </main>
  );
}
