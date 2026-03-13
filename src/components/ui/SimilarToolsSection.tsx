'use client';

import ToolCard from '@/components/ui/ToolCard';
import { usePathname } from 'next/navigation';

const ALL_TOOLS = [
  { name: 'Merge PDF', slug: 'merge-pdf', theme: 'blue', category: 'PDF' },
  { name: 'Compress PDF', slug: 'compress-pdf', theme: 'purple', category: 'PDF' },
  { name: 'Split PDF', slug: 'split-pdf', theme: 'orange', category: 'PDF' },
  { name: 'PDF to Word', slug: 'pdf-to-word', theme: 'cyan', category: 'Convert' },
  { name: 'Word to PDF', slug: 'word-to-pdf', theme: 'indigo', category: 'Convert' },
  { name: 'JPG to PDF', slug: 'jpg-to-pdf', theme: 'pink', category: 'Image' },
  { name: 'PDF to JPG', slug: 'pdf-to-jpg', theme: 'rose', category: 'Image' },
  { name: 'Image Compressor', slug: 'image-compressor', theme: 'green', category: 'Image' },
  { name: 'PNG to JPG', slug: 'png-to-jpg', theme: 'emerald', category: 'Image' },
  { name: 'MP4 to MP3', slug: 'mp4-to-mp3', theme: 'violet', category: 'Audio' },
];

export default function SimilarToolsSection() {
  const pathname = usePathname();
  const currentSlug = pathname.split('/').pop();

  // Filter out the current tool and pick 5 random/popular ones
  const filteredTools = ALL_TOOLS.filter(t => t.slug !== currentSlug);
  const displayTools = filteredTools.slice(0, 5);

  return (
    <section className="w-full mt-24 pt-20 border-t border-border/40 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1 bg-white border border-border/60 rounded-full text-[11px] font-bold text-emerald-600 tracking-widest uppercase shadow-sm">
        Discover
      </div>

      <div className="text-center max-w-2xl mx-auto mb-16 px-4">
        <h2 style={{
          margin: '0 0 14px',
          fontFamily: 'var(--font-display), sans-serif',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          fontSize: 'clamp(28px, 5vw, 36px)',
          color: '#0C0F17',
        }}>
          Popular <span style={{
            background: 'linear-gradient(128deg, #34D399 0%, #059669 65%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Tools</span>
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: '#64748B',
          fontWeight: 400,
        }}>
          Explore our most loved tools and speed up your workflow.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7 w-full max-w-6xl mx-auto px-4 sm:px-8">
        {displayTools.map((tool) => (
          <ToolCard
            key={tool.slug}
            name={tool.name}
            slug={tool.slug}
            theme={tool.theme as any}
            category={tool.category}
          />
        ))}
      </div>
    </section>
  );
}
