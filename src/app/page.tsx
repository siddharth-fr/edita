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
    color: 'from-blue-500/20 to-cyan-400/10',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    category: 'PDF',
  },
  {
    name: 'Compress PDF',
    slug: 'compress-pdf',
    icon: FileArchive,
    desc: 'Shrink large PDFs without sacrificing quality.',
    color: 'from-violet-500/20 to-purple-400/10',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-500/10',
    category: 'PDF',
  },
  {
    name: 'Split PDF',
    slug: 'split-pdf',
    icon: Scissors,
    desc: 'Extract specific pages from any PDF file.',
    color: 'from-orange-500/20 to-amber-400/10',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    category: 'PDF',
  },
  {
    name: 'PDF to Word',
    slug: 'pdf-to-word',
    icon: FileText,
    desc: 'Convert PDF content into editable Word documents.',
    color: 'from-sky-500/20 to-blue-400/10',
    iconColor: 'text-sky-500',
    iconBg: 'bg-sky-500/10',
    category: 'Convert',
  },
  {
    name: 'Word to PDF',
    slug: 'word-to-pdf',
    icon: FileText,
    desc: 'Turn .docx files into polished PDF documents.',
    color: 'from-indigo-500/20 to-blue-400/10',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-500/10',
    category: 'Convert',
  },
  {
    name: 'JPG to PDF',
    slug: 'jpg-to-pdf',
    icon: ImageIcon,
    desc: 'Pack multiple images into a single PDF file.',
    color: 'from-pink-500/20 to-rose-400/10',
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-500/10',
    category: 'Convert',
  },
  {
    name: 'PDF to JPG',
    slug: 'pdf-to-jpg',
    icon: ImageIcon,
    desc: 'Render each PDF page as a high-quality image.',
    color: 'from-rose-500/20 to-red-400/10',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
    category: 'Convert',
  },
  {
    name: 'Image Compressor',
    slug: 'image-compressor',
    icon: FileArchive,
    desc: 'Compress JPG, PNG, and WebP without visible loss.',
    color: 'from-teal-500/20 to-emerald-400/10',
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-500/10',
    category: 'Image',
  },
  {
    name: 'PNG to JPG',
    slug: 'png-to-jpg',
    icon: ImageIcon,
    desc: 'Convert transparent PNGs to clean JPG images.',
    color: 'from-emerald-500/20 to-green-400/10',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    category: 'Image',
  },
  {
    name: 'MP4 to MP3',
    slug: 'mp4-to-mp3',
    icon: Video,
    desc: 'Isolate audio from any video file — in seconds.',
    color: 'from-fuchsia-500/20 to-purple-400/10',
    iconColor: 'text-fuchsia-500',
    iconBg: 'bg-fuchsia-500/10',
    category: 'Audio',
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: 'Zero uploads',
    desc: 'Your files never leave your device. All processing happens locally in your browser.',
  },
  {
    icon: Zap,
    title: 'Instant results',
    desc: 'No waiting for server queues. Files are processed immediately using WebAssembly.',
  },
  {
    icon: Globe,
    title: 'Always free',
    desc: 'No account required. No watermarks. No file size limits. 100% free forever.',
  },
];

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center w-full pb-24 relative overflow-hidden">

      {/* ── Background decorations ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Large soft glow */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl w-full px-5 sm:px-8">

        {/* ── Hero ── */}
        <section className="pt-24 pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            100% Client-Side — Zero Server Uploads
          </div>

          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-[90px] font-black tracking-tighter leading-[0.95] mb-8">
            <span className="block text-foreground">Edit files.</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #05c6ff 0%, #0066ff 60%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Privately.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed font-medium">
            10 powerful browser-based tools to convert, compress, and edit files — with zero server uploads.
          </p>

          {/* CTA */}
          <a
            href="#tools"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-sm sm:text-base font-bold text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #05c6ff, #0066ff)' }}
          >
            Explore tools
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* ── Feature pills ── */}
        <section className="flex flex-wrap justify-center gap-4 pb-20">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 max-w-[300px] shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-foreground">All tools</h2>
              <p className="text-muted-foreground text-sm mt-1 font-medium">Pick a tool to get started instantly</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground bg-card border border-border px-4 py-2 rounded-full font-semibold">
              <Layers className="w-3 h-3 text-primary" />
              {tools.length} tools available
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group relative flex flex-col p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/25 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
                >
                  {/* Category badge */}
                  <span className="absolute top-4 right-4 text-[10px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {tool.category}
                  </span>

                  {/* Background gradient blob */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                  {/* Icon */}
                  <div className={`relative w-12 h-12 rounded-xl ${tool.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${tool.iconColor}`} />
                  </div>

                  {/* Text */}
                  <h3 className="relative text-lg font-bold mb-2 text-foreground tracking-tight">{tool.name}</h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed flex-1">{tool.desc}</p>

                  {/* Arrow */}
                  <div className="relative flex items-center gap-1 mt-5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200">
                    Open tool <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
