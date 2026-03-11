import Link from 'next/link';
import {
  FileText, Image as ImageIcon, Video, Scissors, FileArchive,
  ShieldCheck, Zap, Globe, ArrowRight, Layers,
  Maximize2, Music, FileOutput, Minimize2, SplitSquareHorizontal,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────
  Tool catalogue (used in the tools grid below the fold)
───────────────────────────────────────────────────────── */
const tools = [
  { name: 'Merge PDF', slug: 'merge-pdf', icon: FileText, desc: 'Combine multiple PDFs into one seamless document.', pastel: 'from-[#e8f4ff] to-[#d6eaff]', iconColor: '#3b82f6', iconBg: '#eff8ff', category: 'PDF' },
  { name: 'Compress PDF', slug: 'compress-pdf', icon: Minimize2, desc: 'Shrink large PDFs without sacrificing quality.', pastel: 'from-[#f3eeff] to-[#e9e0ff]', iconColor: '#8b5cf6', iconBg: '#f5f0ff', category: 'PDF' },
  { name: 'Split PDF', slug: 'split-pdf', icon: SplitSquareHorizontal, desc: 'Extract specific pages from any PDF file.', pastel: 'from-[#fff4e8] to-[#ffe8cc]', iconColor: '#f97316', iconBg: '#fff8f0', category: 'PDF' },
  { name: 'PDF to Word', slug: 'pdf-to-word', icon: FileOutput, desc: 'Convert PDF content into editable Word documents.', pastel: 'from-[#e8f9ff] to-[#ccf3ff]', iconColor: '#0ea5e9', iconBg: '#f0faff', category: 'Convert' },
  { name: 'Word to PDF', slug: 'word-to-pdf', icon: FileText, desc: 'Turn .docx files into polished PDF documents.', pastel: 'from-[#eef0ff] to-[#dde2ff]', iconColor: '#6366f1', iconBg: '#f0f1ff', category: 'Convert' },
  { name: 'JPG to PDF', slug: 'jpg-to-pdf', icon: ImageIcon, desc: 'Pack multiple images into a single PDF file.', pastel: 'from-[#fff0f6] to-[#ffe0ee]', iconColor: '#ec4899', iconBg: '#fff5f9', category: 'Convert' },
  { name: 'PDF to JPG', slug: 'pdf-to-jpg', icon: Maximize2, desc: 'Render each PDF page as a high-quality image.', pastel: 'from-[#fff0f0] to-[#ffe0e0]', iconColor: '#ef4444', iconBg: '#fff5f5', category: 'Convert' },
  { name: 'Image Compressor', slug: 'image-compressor', icon: FileArchive, desc: 'Compress JPG, PNG & WebP without visible loss.', pastel: 'from-[#ecfdf5] to-[#d1fae5]', iconColor: '#10b981', iconBg: '#f0fdf4', category: 'Image' },
  { name: 'PNG to JPG', slug: 'png-to-jpg', icon: ImageIcon, desc: 'Convert transparent PNGs to clean JPG images.', pastel: 'from-[#edfcf2] to-[#d0f5e0]', iconColor: '#059669', iconBg: '#f0fdf6', category: 'Image' },
  { name: 'MP4 to MP3', slug: 'mp4-to-mp3', icon: Music, desc: 'Isolate audio from any video — in seconds.', pastel: 'from-[#fdf4ff] to-[#f3e6ff]', iconColor: '#d946ef', iconBg: '#fef9ff', category: 'Audio' },
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
  // ── Layer 1 — farthest back (strongest blur, lowest opacity) ──
  {
    layer: 1,
    label: 'Resize Image',
    sub: 'Batch resize any photo',
    icon: Maximize2,
    color: '#3b82f6',
    grad: 'from-[#e8f4ff] to-[#c7deff]',
    pos: { top: '4%', left: '1%' },
    float: 'float-a',
    rotate: '-4deg',
  },
  {
    layer: 1,
    label: 'Compress PDF',
    sub: 'Reduce file size',
    icon: Minimize2,
    color: '#8b5cf6',
    grad: 'from-[#f0ebff] to-[#ddd0ff]',
    pos: { top: '52%', left: '0%' },
    float: 'float-b-rev',
    rotate: '3deg',
  },
  {
    layer: 1,
    label: 'MP4 to MP3',
    sub: 'Extract audio tracks',
    icon: Music,
    color: '#d946ef',
    grad: 'from-[#fdf0ff] to-[#f3d8ff]',
    pos: { top: '8%', right: '1%' },
    float: 'float-b',
    rotate: '4deg',
  },
  {
    layer: 1,
    label: 'Split PDF',
    sub: 'Extract any page',
    icon: Scissors,
    color: '#f97316',
    grad: 'from-[#fff3e8] to-[#ffd9b5]',
    pos: { bottom: '8%', right: '0%' },
    float: 'float-a-rev',
    rotate: '-3deg',
  },

  // ── Layer 2 — middle ──
  {
    layer: 2,
    label: 'PDF to Word',
    sub: 'Editable in seconds',
    icon: FileOutput,
    color: '#0ea5e9',
    grad: 'from-[#e8f9ff] to-[#b9eeff]',
    pos: { top: '22%', left: '4%' },
    float: 'float-c',
    rotate: '1.5deg',
  },
  {
    layer: 2,
    label: 'Image Compressor',
    sub: 'Zero quality loss',
    icon: FileArchive,
    color: '#10b981',
    grad: 'from-[#ecfdf5] to-[#bbf7d0]',
    pos: { top: '65%', left: '3%' },
    float: 'float-d',
    rotate: '-2deg',
  },
  {
    layer: 2,
    label: 'Merge PDF',
    sub: 'Combine any PDFs',
    icon: FileText,
    color: '#f97316',
    grad: 'from-[#fff4e8] to-[#fed7aa]',
    pos: { top: '24%', right: '4%' },
    float: 'float-a-rev',
    rotate: '-1.5deg',
  },
  {
    layer: 2,
    label: 'PNG to JPG',
    sub: 'Instant conversion',
    icon: ImageIcon,
    color: '#ec4899',
    grad: 'from-[#fff0f6] to-[#ffc5e1]',
    pos: { top: '68%', right: '3%' },
    float: 'float-b',
    rotate: '2deg',
  },

  // ── Layer 3 — nearest bg (least blur, clearest) ──
  {
    layer: 3,
    label: 'Word to PDF',
    sub: 'Perfect formatting',
    icon: FileText,
    color: '#6366f1',
    grad: 'from-[#eef0ff] to-[#c7cbff]',
    pos: { top: '40%', left: '7%' },
    float: 'float-a',
    rotate: '0.5deg',
  },
  {
    layer: 3,
    label: 'JPG to PDF',
    sub: 'Photos into a PDF',
    icon: ImageIcon,
    color: '#ec4899',
    grad: 'from-[#fff0f6] to-[#fbb6ce]',
    pos: { top: '42%', right: '7%' },
    float: 'float-c',
    rotate: '-0.5deg',
  },
];

/* Layer visual parameters */
const layerStyle: Record<number, {
  opacity: number;
  blur: string;
  scale: number;
  saturate: string;
}> = {
  1: { opacity: 0.22, blur: 'blur(8px)', scale: 1.13, saturate: 'saturate(0.55)' },
  2: { opacity: 0.32, blur: 'blur(4px)', scale: 1.07, saturate: 'saturate(0.70)' },
  3: { opacity: 0.42, blur: 'blur(2px)', scale: 1.02, saturate: 'saturate(0.82)' },
};

/* ─────────────────────────────────────────────────────────
  Page
───────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main
      className="flex-1 flex flex-col items-center w-full pb-28 relative overflow-x-hidden"
      style={{ background: '#f4f7ff' }}
    >

      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[620px] sm:min-h-[680px] flex items-center justify-center overflow-hidden px-4">

        {/* ── Deep-space ambient background ── */}
        <div className="pointer-events-none select-none absolute inset-0 -z-10">

          {/* Very soft radial sky — never pure white, subtly warm blue */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 40%, #e8f0ff 0%, #eef3ff 40%, #f4f7ff 100%)',
            }}
          />

          {/* Faint grid dots — barely visible texture */}
          <div
            className="absolute inset-0 opacity-[0.028]"
            style={{
              backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Primary chromatic glow — top centre */}
          <div
            className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[480px] rounded-full"
            style={{
              background:
                'radial-gradient(ellipse, rgba(5,198,255,0.16) 0%, rgba(0,85,238,0.09) 45%, transparent 75%)',
              filter: 'blur(1px)',
            }}
          />
          {/* Secondary glow — bottom left tint */}
          <div
            className="absolute bottom-[-60px] left-[-80px] w-[420px] h-[340px] rounded-full"
            style={{
              background:
                'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)',
            }}
          />
          {/* Tertiary glow — bottom right tint */}
          <div
            className="absolute bottom-[-40px] right-[-60px] w-[380px] h-[300px] rounded-full"
            style={{
              background:
                'radial-gradient(ellipse, rgba(5,198,255,0.10) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* ── Ambient depth-layer floating cards ── */}
        <div className="pointer-events-none select-none absolute inset-0 overflow-hidden hidden lg:block">
          {ambientCards.map((card) => {
            const lp = layerStyle[card.layer];
            const Icon = card.icon;
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
                  width: 168,
                }}
              >
                {/* Frosted glass card */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.55)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.7)',
                    boxShadow:
                      '0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
                  }}
                >
                  {/* Illustration strip */}
                  <div
                    className={`relative h-20 w-full bg-gradient-to-br ${card.grad} flex items-center justify-center overflow-hidden`}
                  >
                    {/* Ghost icon behind */}
                    <Icon
                      className="absolute -bottom-2 -right-2 opacity-[0.12]"
                      style={{ width: 56, height: 56, color: card.color }}
                    />
                    {/* Icon badge */}
                    <div
                      className="relative rounded-xl flex items-center justify-center"
                      style={{
                        width: 40,
                        height: 40,
                        background: `${card.color}1a`,
                        border: `1px solid ${card.color}22`,
                      }}
                    >
                      <Icon style={{ width: 20, height: 20, color: card.color }} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="px-3 py-2.5">
                    <p
                      className="font-bold text-[11px] leading-tight"
                      style={{ color: '#08101e' }}
                    >
                      {card.label}
                    </p>
                    <p className="text-[9px] mt-0.5" style={{ color: '#647191' }}>
                      {card.sub}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Hero content — sits above everything ── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-[540px] px-2 py-16 sm:py-20">

          {/* Soft vignette behind the text block so it always pops */}
          <div
            className="pointer-events-none absolute inset-[-40px] -z-[1] rounded-[60px]"
            style={{
              background:
                'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(244,247,255,0.96) 30%, rgba(244,247,255,0.70) 65%, transparent 100%)',
            }}
          />

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-7 tracking-wide"
            style={{
              border: '1px solid rgba(5,198,255,0.28)',
              background: 'rgba(5,198,255,0.07)',
              color: '#0055ee',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#05c6ff] animate-pulse" />
            100% Client-Side · Zero Server Uploads
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl xl:text-[72px] font-black tracking-tighter leading-[0.88] mb-6">
            <span className="block text-[#08101e]">Edit files.</span>
            <span
              className="block mt-2"
              style={{
                background: 'linear-gradient(135deg, #05c6ff 0%, #0055ee 52%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Privately.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg leading-relaxed font-medium mb-9 max-w-[360px]" style={{ color: '#647191' }}>
            10 powerful browser-based tools. Convert, compress, and edit — nothing ever leaves your device.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.04] active:scale-[0.97]"
              style={{ background: 'linear-gradient(135deg, #05c6ff, #0055ee)' }}
            >
              Explore all tools
              <ArrowRight className="w-4 h-4" />
            </a>
            <div
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold shadow-sm"
              style={{ border: '1px solid #dde5f0', background: 'rgba(255,255,255,0.85)', color: '#647191' }}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              No sign-up needed
            </div>
          </div>

          {/* Trust micro row */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-semibold" style={{ color: '#8b9cbd' }}>
            <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-amber-400" />WebAssembly-powered</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3 h-3 text-[#05c6ff]" />Works offline</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-emerald-400" />100% private</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TOOLS SECTION
      ════════════════════════════════════════════════════ */}
      <section id="tools" className="scroll-mt-16 w-full max-w-6xl px-4 sm:px-8 pt-6 pb-4">

        {/* Section header */}
        <div className="flex items-end justify-between mb-7 sm:mb-9">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: '#08101e' }}>
              All tools
            </h2>
            <p className="text-sm mt-1 font-medium" style={{ color: '#647191' }}>
              Pick any tool and get started instantly
            </p>
          </div>
          <div
            className="flex items-center gap-2 text-xs px-3 sm:px-4 py-2 rounded-full font-semibold shadow-sm shrink-0"
            style={{ color: '#647191', background: '#fff', border: '1px solid #dde5f0' }}
          >
            <Layers className="w-3 h-3" style={{ color: '#05c6ff' }} />
            <span className="hidden sm:inline">{tools.length} tools</span>
            <span className="sm:hidden">{tools.length}</span>
          </div>
        </div>

        {/* Tools grid — card with illustration strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-250 bg-white border border-[#e8eef8] shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 hover:border-[#b8d0f8]"
              >
                {/* Illustration strip */}
                <div
                  className={`relative h-28 sm:h-32 w-full bg-gradient-to-br ${tool.pastel} flex items-center justify-center overflow-hidden`}
                >
                  <Icon
                    className="absolute -bottom-3 -right-3 opacity-[0.08]"
                    style={{ width: 96, height: 96, color: tool.iconColor }}
                  />
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ background: tool.iconBg }}
                  >
                    <Icon className="w-7 h-7" style={{ color: tool.iconColor }} />
                  </div>
                  <span
                    className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border"
                    style={{
                      color: tool.iconColor,
                      background: tool.iconBg,
                      borderColor: `${tool.iconColor}25`,
                    }}
                  >
                    {tool.category}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 p-4 sm:p-5">
                  <h3
                    className="text-sm sm:text-base font-bold mb-1 tracking-tight"
                    style={{ color: '#08101e' }}
                  >
                    {tool.name}
                  </h3>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: '#647191' }}>
                    {tool.desc}
                  </p>
                  <div
                    className="flex items-center gap-1 mt-3 text-[11px] font-bold opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    style={{ color: tool.iconColor }}
                  >
                    Open tool <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            );
          })}
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
