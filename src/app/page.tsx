import Link from 'next/link';
import {
  FileText, Image as ImageIcon, Video, Scissors, FileArchive,
  ShieldCheck, Zap, Globe, ArrowRight, Layers
} from 'lucide-react';

const tools = [
  {
    name: 'Merge PDF',
    slug: 'merge-pdf',
    icon: FileText,
    desc: 'Combine multiple PDFs into one seamless document.',
    color: 'from-blue-500/15 via-cyan-400/10 to-transparent',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    dotColor: 'bg-blue-400',
    category: 'PDF',
  },
  {
    name: 'Compress PDF',
    slug: 'compress-pdf',
    icon: FileArchive,
    desc: 'Shrink large PDFs without sacrificing quality.',
    color: 'from-violet-500/15 via-purple-400/10 to-transparent',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-500/10',
    dotColor: 'bg-violet-400',
    category: 'PDF',
  },
  {
    name: 'Split PDF',
    slug: 'split-pdf',
    icon: Scissors,
    desc: 'Extract specific pages from any PDF file.',
    color: 'from-orange-500/15 via-amber-400/10 to-transparent',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    dotColor: 'bg-orange-400',
    category: 'PDF',
  },
  {
    name: 'PDF to Word',
    slug: 'pdf-to-word',
    icon: FileText,
    desc: 'Convert PDF content into editable Word documents.',
    color: 'from-sky-500/15 via-blue-400/10 to-transparent',
    iconColor: 'text-sky-500',
    iconBg: 'bg-sky-500/10',
    dotColor: 'bg-sky-400',
    category: 'Convert',
  },
  {
    name: 'Word to PDF',
    slug: 'word-to-pdf',
    icon: FileText,
    desc: 'Turn .docx files into polished PDF documents.',
    color: 'from-indigo-500/15 via-blue-400/10 to-transparent',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-500/10',
    dotColor: 'bg-indigo-400',
    category: 'Convert',
  },
  {
    name: 'JPG to PDF',
    slug: 'jpg-to-pdf',
    icon: ImageIcon,
    desc: 'Pack multiple images into a single PDF file.',
    color: 'from-pink-500/15 via-rose-400/10 to-transparent',
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-500/10',
    dotColor: 'bg-pink-400',
    category: 'Convert',
  },
  {
    name: 'PDF to JPG',
    slug: 'pdf-to-jpg',
    icon: ImageIcon,
    desc: 'Render each PDF page as a high-quality image.',
    color: 'from-rose-500/15 via-red-400/10 to-transparent',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
    dotColor: 'bg-rose-400',
    category: 'Convert',
  },
  {
    name: 'Image Compressor',
    slug: 'image-compressor',
    icon: FileArchive,
    desc: 'Compress JPG, PNG, and WebP without visible loss.',
    color: 'from-teal-500/15 via-emerald-400/10 to-transparent',
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-500/10',
    dotColor: 'bg-teal-400',
    category: 'Image',
  },
  {
    name: 'PNG to JPG',
    slug: 'png-to-jpg',
    icon: ImageIcon,
    desc: 'Convert transparent PNGs to clean JPG images.',
    color: 'from-emerald-500/15 via-green-400/10 to-transparent',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    dotColor: 'bg-emerald-400',
    category: 'Image',
  },
  {
    name: 'MP4 to MP3',
    slug: 'mp4-to-mp3',
    icon: Video,
    desc: 'Isolate audio from any video file — in seconds.',
    color: 'from-fuchsia-500/15 via-purple-400/10 to-transparent',
    iconColor: 'text-fuchsia-500',
    iconBg: 'bg-fuchsia-500/10',
    dotColor: 'bg-fuchsia-400',
    category: 'Audio',
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: 'Zero uploads',
    desc: 'Your files never leave your device. All processing happens locally in your browser.',
    gradient: 'from-emerald-500/10 to-teal-400/5',
    iconGradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Instant results',
    desc: 'No waiting for server queues. Files are processed immediately using WebAssembly.',
    gradient: 'from-amber-500/10 to-orange-400/5',
    iconGradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Always free',
    desc: 'No account required. No watermarks. No file size limits. 100% free forever.',
    gradient: 'from-primary/10 to-blue-400/5',
    iconGradient: 'from-[#05c6ff] to-[#0066ff]',
  },
];

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center w-full pb-24 relative overflow-hidden">

      {/* ── Background decorations ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Primary glow */}
        <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[800px] h-[560px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(ellipse at center, rgba(5,198,255,0.18) 0%, rgba(0,102,255,0.10) 50%, transparent 80%)' }}
        />
        {/* Secondary accent glow */}
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[400px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
        />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-6xl w-full px-4 sm:px-8">

        {/* ── Hero ── */}
        <section className="pt-16 sm:pt-24 pb-16 sm:pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/6 text-primary text-xs sm:text-sm font-semibold mb-8 sm:mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            100% Client-Side — Zero Server Uploads
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-black tracking-tighter leading-[0.92] mb-6 sm:mb-8">
            <span className="block text-foreground">Edit files.</span>
            <span
              className="block mt-1"
              style={{
                background: 'linear-gradient(135deg, #05c6ff 0%, #0055ee 55%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Privately.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-xl text-muted-foreground max-w-lg mx-auto mb-10 sm:mb-12 leading-relaxed font-medium px-2">
            10 powerful browser-based tools to convert, compress, and edit files — with zero server uploads.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center flex-wrap gap-3">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.97]"
              style={{ background: 'linear-gradient(135deg, #05c6ff, #0055ee)' }}
            >
              Explore tools
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border border-border bg-white text-muted-foreground text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              No sign-up needed
            </div>
          </div>
        </section>

        {/* ── Feature pills ── */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pb-16 sm:pb-20">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`flex items-start gap-4 bg-white border border-border rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg, ${f.iconGradient.replace('from-', '').replace(' to-', ', ')})` }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm text-foreground mb-1">{f.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* ── Tools Grid ── */}
        <section id="tools" className="scroll-mt-20">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">All tools</h2>
              <p className="text-muted-foreground text-sm mt-1 font-medium">Pick a tool to get started instantly</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white border border-border px-3 sm:px-4 py-2 rounded-full font-semibold shadow-sm">
              <Layers className="w-3 h-3 text-primary" />
              <span className="hidden sm:inline">{tools.length} tools available</span>
              <span className="sm:hidden">{tools.length}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group relative flex flex-col p-5 sm:p-6 rounded-2xl border border-border bg-white shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:border-primary/20 hover:-translate-y-1 transition-all duration-250 overflow-hidden"
                >
                  {/* Category badge */}
                  <span className="absolute top-4 right-4 text-[10px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {tool.category}
                  </span>

                  {/* Background gradient — appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-350 rounded-2xl`} />

                  {/* Icon */}
                  <div className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${tool.iconBg} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${tool.iconColor}`} />
                  </div>

                  {/* Text */}
                  <h3 className="relative text-base sm:text-lg font-bold mb-1.5 text-foreground tracking-tight">{tool.name}</h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed flex-1">{tool.desc}</p>

                  {/* Arrow link */}
                  <div className="relative flex items-center gap-1 mt-4 sm:mt-5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                    Open tool <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Bottom trust strip ── */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground font-semibold">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />Files never leave your device</span>
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-500" />WebAssembly-powered</span>
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-primary" />No account required</span>
        </div>
      </div>
    </main>
  );
}
