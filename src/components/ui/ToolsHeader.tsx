'use client';

import { useRef } from 'react';
import { Search, X, Layers } from 'lucide-react';

interface Props {
  totalTools: number;
  filteredCount: number;
  query: string;
  onSearch: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  categories: string[];
}

/*  Spring easing — feels elastic and natural, not mechanical */
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

export default function ToolsHeader({
  totalTools,
  filteredCount,
  query,
  onSearch,
  selectedCategory,
  onCategoryChange,
  categories,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const active = query.length > 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onSearch(e.target.value);
  }

  function clear() {
    onSearch('');
    inputRef.current?.focus();
  }

  function focusPill() {
    inputRef.current?.focus();
  }

  return (
    <div className="flex flex-col gap-6 mb-10">
      {/* ── Top Row: Title + Search ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex-1">
          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight"
            style={{ color: '#0F172A' }}
          >
            {active 
              ? 'Search Results' 
              : selectedCategory === 'Popular' 
                ? 'Popular Tools' 
                : selectedCategory.toLowerCase().includes('tools') 
                  ? selectedCategory 
                  : `${selectedCategory} Tools`}
          </h2>
          <p className="text-sm mt-1.5 font-medium" style={{ color: '#94A3B8', maxWidth: 400 }}>
            {active
              ? `${filteredCount} result${filteredCount !== 1 ? 's' : ''} for "${query}"`
              : 'Pick any tool and get started instantly'}
          </p>
        </div>

        <div className="flex items-center">
          {/* Search pill — click anywhere to focus */}
          <div
            onClick={focusPill}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              borderRadius: 18,
              background: '#ffffff',
              border: `1px solid ${active ? '#10B981' : '#E2E8F0'}`,
              boxShadow: active
                ? '0 6px 15px rgba(16,185,129,0.06)'
                : '0 2px 4px rgba(0,0,0,0.02)',
              cursor: 'text',
              transition: 'all 0.3s ease',
              width: '100%',
              minWidth: '300px',
              maxWidth: 360,
            }}
          >
            <Search
              size={14}
              style={{
                color: active ? '#10B981' : '#94A3B8',
                flexShrink: 0,
                transition: 'color 0.2s ease',
              }}
            />

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search tools…"
              aria-label="Search tools"
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: 13,
                fontWeight: 500,
                color: '#1E293B',
                letterSpacing: '-0.01em',
                width: '100%',
                minWidth: 0,
              }}
            />

            {/* Clear button */}
            <button
              onClick={(e) => { e.stopPropagation(); clear(); }}
              aria-label="Clear search"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: active ? 18 : 0,
                height: active ? 18 : 0,
                borderRadius: '50%',
                background: '#F1F5F9',
                border: 'none',
                cursor: 'pointer',
                flexShrink: 0,
                padding: 0,
                overflow: 'hidden',
                opacity: active ? 1 : 0,
                transform: active ? 'scale(1)' : 'scale(0.5)',
                transition: `width 0.25s ${SPRING}, height 0.25s ${SPRING}, opacity 0.2s ease, transform 0.25s ${SPRING}`,
              }}
            >
              <X size={10} style={{ color: '#64748B' }} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom Row: Category Filter ── */}
      <div className="flex items-center gap-2 overflow-x-auto px-10 -mx-10 py-4 pb-6 scrollbar-hide" style={{ marginBottom: -16 }}>
        <div
          className="flex items-center gap-2"
          style={{ minWidth: 'max-content' }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className="transition-all duration-400 hover:scale-[1.04] active:scale-[0.96]"
                style={{
                  padding: '10px 24px',
                  borderRadius: 18,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  background: isSelected
                    ? 'linear-gradient(135deg, #34D399 0%, #059669 100%)'
                    : '#ffffff',
                  color: isSelected ? '#ffffff' : '#64748B',
                  opacity: 0.8,
                  border: isSelected ? '1px solid rgba(5, 150, 105, 0.2)' : '1px solid #E2E8F0',
                  boxShadow: isSelected
                    ? '0 6px 18px rgba(5, 150, 105, 0.25)'
                    : '0 2px 4px rgba(0,0,0,0.02)',
                  cursor: 'pointer',
                  transition: `all 0.4s ${SPRING}`,
                  willChange: 'transform, box-shadow, background, opacity',
                }}
              >
                {cat === 'Popular' || cat.toLowerCase().includes('tools') ? cat : `${cat} Tools`}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
