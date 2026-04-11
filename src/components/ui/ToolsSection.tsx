'use client';

import { useState, useMemo } from 'react';
import ToolCard from '@/components/ui/ToolCard';
import ToolsHeader from '@/components/ui/ToolsHeader';
import { type AppTheme } from '@/config/themes';

interface Tool {
  name: string;
  slug: string;
  theme: AppTheme;
  category: string;
}

export default function ToolsSection({ tools }: { tools: Tool[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Popular');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(tools.map(t => t.category))).filter(
      c => c !== 'QR Code' && c !== 'Utility' && c !== 'Utility Tools'
    );
    return ['Popular', 'Utility Tools', ...cats];
  }, [tools]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    
    if (q) {
      // If there is a search query, search across ALL tools globally
      return tools.filter(t => 
        t.name.toLowerCase().includes(q) || 
        t.category.toLowerCase().includes(q)
      );
    }
    
    // Otherwise, filter by the selected category
    const matchesCategory = tools.filter(t => {
      if (category === 'Popular') return true;
      if (category === 'Utility Tools') {
        return t.category === 'Utility Tools' || t.category === 'QR Code' || t.category === 'Utility';
      }
      return t.category === category;
    });

    if (category === 'Popular') {
      return matchesCategory.slice(0, 10);
    }
    return matchesCategory;
  }, [tools, query, category]);

  return (
    <>
      <ToolsHeader
        totalTools={tools.length}
        filteredCount={filtered.length}
        query={query}
        onSearch={setQuery}
        selectedCategory={category}
        onCategoryChange={setCategory}
        categories={categories}
      />

      {filtered.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-20 text-center"
          style={{ color: '#94A3B8' }}
        >
          <span style={{ fontSize: 32, marginBottom: 10 }}>🔍</span>
          <p style={{ fontSize: 14, fontWeight: 500 }}>
            No tools found for &ldquo;{query}&rdquo;
          </p>
          <p style={{ fontSize: 12, marginTop: 4, color: '#CBD5E1' }}>
            Try searching by name or category
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10">
          {filtered.map(tool => (
            <ToolCard
              key={tool.slug}
              name={tool.name}
              slug={tool.slug}
              theme={tool.theme}
              category={tool.category}
            />
          ))}
        </div>
      )}
    </>
  );
}
