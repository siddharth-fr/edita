'use client';

import { useState, useEffect, memo } from 'react';

import { THEME_PALETTE, type AppTheme } from '@/config/themes';

const COL_POSITIONS = ['8%', '27%', '50%', '74%', '92%'];
const ROW_POSITIONS = ['14%', '50%', '86%'];
const MAX_DIST = Math.sqrt(4 + 1);

export interface HeroCard {
  label: string;
  category: string;
  theme: AppTheme;
  col: number;
  row: number;
  rotate: string;
}

/** Fisher-Yates shuffle — returns a new array */
function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Shared folder card face — used by both desktop grid and mobile layout */
export const CardFace = memo(({
  label, category, theme, size,
}: { label: string; category: string; theme: AppTheme; size: number }) => {
  const tabH = size < 130 ? 16 : 24;
  const radius = size < 130 ? 16 : 24;
  const inner = size < 130 ? 12 : 20;
  const pad = 4;
  const fsCat = size < 130 ? 6.5 : 9;
  const fsLbl = size < 130 ? 10 : 13;

  const pal = THEME_PALETTE[theme] ?? THEME_PALETTE.blue;
  const shellTint = pal.tint;
  const topGradient = pal.gradient;

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        background: shellTint, borderRadius: radius, padding: pad, overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.03)',
        border: '1.5px solid rgba(0,0,0,0.03)',
      }}>
        {/* Pastel gradient top */}
        <div style={{
          position: 'absolute', inset: pad, borderRadius: `${inner}px ${inner}px 0 0`,
          bottom: '58%',
          background: topGradient, overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.6), transparent 70%)',
          }} />
        </div>

        {/* White folder body */}
        <div style={{
          position: 'absolute', bottom: pad, left: pad, right: pad, height: '58%',
          background: '#ffffff', borderRadius: `0 0 ${inner}px ${inner}px`,
          padding: `${pad + 6}px ${pad + 8}px`,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        }}>
          {/* Category notch */}
          <div style={{
            position: 'absolute', top: -tabH, left: 0, width: '54%', height: tabH,
            background: '#ffffff', borderRadius: '10px 10px 0 0',
            padding: `0 6px 0 12px`, fontSize: fsCat, fontWeight: 700,
            letterSpacing: '0.06em', color: '#94A3B8', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center'
          }}>
            {category}
          </div>
          {/* Curve seam */}
          <div style={{
            position: 'absolute', top: -tabH, left: '54%',
            width: 14, height: tabH, background: 'transparent',
            boxShadow: `-8px 8px 0 0 #ffffff`, borderRadius: '0 0 0 10px',
          }} />
          {/* Label */}
          <p style={{
            margin: 0, fontSize: fsLbl, fontWeight: 700,
            color: '#1E293B', letterSpacing: '-0.025em', lineHeight: 1.3,
          }}>
            {label}
          </p>
        </div>
      </div>
    </div>
  );
});

CardFace.displayName = 'CardFace';

export default function HeroCardGrid({ cards }: { cards: HeroCard[] }) {
  const [display, setDisplay] = useState<HeroCard[]>(cards);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const visuals = shuffled(
      cards.map(c => ({ label: c.label, category: c.category, theme: c.theme, rotate: c.rotate }))
    );
    setDisplay(cards.map((c, i) => ({ ...c, ...visuals[i] })));
    setMounted(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Mobile 3×4 grid layout ──
     Mirrors the desktop grid mathematics but tailored for portrait screens.
     Cards are brought fully inside the display bounds (16%-84% width). 
     Center is calculated at col 1, row 1.5 */
  const MOBILE_COLS = ['16%', '50%', '84%'];
  const MOBILE_ROWS = ['12%', '36%', '64%'];
  const MOBILE_MAX_DIST = Math.sqrt(Math.pow(1, 2) + Math.pow(1.5, 2)); // center is (1, 1.5)

  // Generate 12 slots
  const mobileSlots = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      mobileSlots.push({ col: c, row: r });
    }
  }

  return (
    <>
      {/* ── Desktop 5×3 grid ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-visible hidden lg:block">
        {display.map((card) => {
          const dist = Math.sqrt(Math.pow(card.col - 2, 2) + Math.pow(card.row - 1, 2));
          const norm = dist / MAX_DIST;
          const blurPx = (norm * 4.5).toFixed(1);
          const opacity = (mounted ? 0.98 : 0) - norm * 0.18;
          const saturate = (0.96 - norm * 0.12).toFixed(2);

          return (
            <div
              key={`grid-${card.col}-${card.row}`}
              style={{
                position: 'absolute',
                left: COL_POSITIONS[card.col],
                top: ROW_POSITIONS[card.row],
                transform: `translate(-50%, -50%) rotate(${card.rotate})`,
                width: 184,
                opacity,
                filter: `blur(${blurPx}px) saturate(${saturate})`,
                transition: 'opacity 0.55s ease, filter 0.55s ease',
                willChange: 'opacity, filter',
              }}
            >
              <CardFace label={card.label} category={card.category} theme={card.theme} size={184} />
            </div>
          );
        })}
      </div>

      {/* ── Mobile 3×4 grid ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden block lg:hidden">
        {mobileSlots.map((slot, i) => {
          // Skip the center slots strictly behind the hero text on mobile to preserve readability
          if (slot.col === 1 && (slot.row === 1 || slot.row === 2)) return null;

          const card = display[i % display.length];
          // Calculate distance from center grid point (col 1, row 1.5)
          const dist = Math.sqrt(Math.pow(slot.col - 1, 2) + Math.pow(slot.row - 1.5, 2));
          const norm = dist / MOBILE_MAX_DIST;

          // Slightly reduced blur/fade radius for tighter mobile screens
          const blurPx = (norm * 3.5).toFixed(1);
          const opacity = (mounted ? 0.88 : 0) - norm * 0.22;
          const saturate = (0.96 - norm * 0.12).toFixed(2);

          return (
            <div
              key={`mobile-grid-${slot.col}-${slot.row}`}
              style={{
                position: 'absolute',
                left: MOBILE_COLS[slot.col],
                top: MOBILE_ROWS[slot.row],
                transform: `translate(-50%, -50%) rotate(${card.rotate})`,
                width: 110, // Slightly smaller to ensure 3 columns fit well side-by-side
                opacity,
                filter: `blur(${blurPx}px) saturate(${saturate})`,
                transition: 'opacity 0.55s ease, filter 0.55s ease',
                willChange: 'opacity, filter',
              }}
            >
              <CardFace label={card.label} category={card.category} theme={card.theme} size={110} />
            </div>
          );
        })}
      </div>
    </>
  );
}
