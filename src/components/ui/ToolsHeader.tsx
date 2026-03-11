'use client';

import { useRef } from 'react';
import { Search, X, Layers } from 'lucide-react';

interface Props {
  totalTools: number;
  filteredCount: number;
  query: string;
  onSearch: (q: string) => void;
}

/*  Spring easing — feels elastic and natural, not mechanical */
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

export default function ToolsHeader({
  totalTools,
  filteredCount,
  query,
  onSearch,
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

  /* Click the icon area to focus the input */
  function focusPill() {
    inputRef.current?.focus();
  }

  return (
    <div className="flex items-center justify-between mb-7 sm:mb-9 gap-4">
      {/* ── Left: Title ── */}
      <div>
        <h2
          className="text-2xl sm:text-3xl font-black tracking-tight"
          style={{ color: '#0F172A' }}
        >
          Popular Tools
        </h2>
        <p className="text-sm mt-1 font-medium" style={{ color: '#94A3B8' }}>
          {active
            ? `${filteredCount} result${filteredCount !== 1 ? 's' : ''} for "${query}"`
            : 'Pick any tool and get started instantly'}
        </p>
      </div>

      {/* ── Right: search pill + count pill ── */}
      <div className="flex items-center gap-2 shrink-0">

        {/* Search pill — click anywhere to focus */}
        <div
          onClick={focusPill}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 10px',
            borderRadius: 999,
            background: '#fff',
            border: `1px solid ${active ? 'rgba(52,211,153,0.5)' : 'rgba(0,0,0,0.08)'}`,
            boxShadow: active
              ? '0 0 0 3px rgba(52,211,153,0.10), 0 1px 4px rgba(0,0,0,0.04)'
              : '0 1px 4px rgba(0,0,0,0.04)',
            cursor: 'text',
            /* Only transition non-layout props so no jank on the pill itself */
            transition: 'border-color 0.2s ease, box-shadow 0.25s ease',
          }}
        >
          <Search
            size={13}
            style={{
              color: active ? '#34D399' : '#94A3B8',
              flexShrink: 0,
              transition: 'color 0.2s ease',
            }}
          />

          {/* The input drives the pill width — spring between two fixed values */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search…"
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: 12.5,
              fontWeight: 500,
              color: '#1F2937',
              letterSpacing: '-0.01em',
              /*
               * Animate width between 58px (resting) and 148px (active).
               * Transitioning an explicit pixel width is reliable and smooth.
               * Using the spring curve gives the elastic-feel the user wants.
               */
              width: active ? 148 : 58,
              minWidth: 0,
              transition: `width 0.38s ${SPRING}`,
            }}
          />

          {/* Clear button — fades + scales in */}
          <button
            onClick={(e) => { e.stopPropagation(); clear(); }}
            aria-label="Clear search"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: active ? 16 : 0,
              height: active ? 16 : 0,
              borderRadius: '50%',
              background: '#E5E7EB',
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
            <X size={8} style={{ color: '#6B7280' }} />
          </button>
        </div>

        {/* Count pill */}
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            color: '#94A3B8',
            background: '#fff',
            border: '1px solid #dde5f0',
            transition: 'color 0.2s ease',
          }}
        >
          <Layers size={11} style={{ color: '#34D399' }} />
          <span className="hidden sm:inline">{totalTools} tools</span>
          <span className="sm:hidden">{totalTools}</span>
        </div>
      </div>
    </div>
  );
}
