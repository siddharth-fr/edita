'use client';

import { useMemo } from 'react';
import ToolCard from '@/components/ui/ToolCard';
import { usePathname } from 'next/navigation';
import { TOOLS, type Tool } from '@/config/tools';

export default function SimilarToolsSection() {
  const pathname = usePathname();
  const currentSlug = pathname.split('/').pop();

  // Find the current tool to get its category
  const currentTool = TOOLS.find(t => t.slug === currentSlug);

  // Filter and prioritize related tools
  const displayTools = useMemo(() => {
    if (!currentTool) return TOOLS.slice(0, 5);

    // 1. Get tools from the same category
    const sameCategory = TOOLS.filter(
      t => t.category === currentTool.category && t.slug !== currentSlug
    );

    // 2. Get other popular tools if we need more to reach 5
    const others = TOOLS.filter(
      t => t.category !== currentTool.category && t.slug !== currentSlug
    );

    // Combine and take 5
    return [...sameCategory, ...others].slice(0, 5);
  }, [currentSlug, currentTool]);

  return (
    <section className="w-full relative">

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
          Related <span style={{
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
          Explore other useful tools to help you with your tasks.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-7">
        {displayTools.map((tool) => (
          <ToolCard
            key={tool.slug}
            name={tool.name}
            slug={tool.slug}
            theme={tool.theme}
            category={tool.category}
          />
        ))}
      </div>
    </section>
  );
}
