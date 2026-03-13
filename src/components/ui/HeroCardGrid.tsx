'use client';

import { useState, useEffect, memo } from 'react';

const COL_POSITIONS = ['8%', '27%', '50%', '74%', '92%'];
const ROW_POSITIONS = ['14%', '50%', '86%'];
const MAX_DIST = Math.sqrt(4 + 1);

export interface HeroCard {
  label: string;
  category: string;
  gradient: string;
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
  label, category, gradient, size,
}: { label: string; category: string; gradient: string; size: number }) => {
  const tabH   = size < 130 ? 14 : 18;
  const radius = size < 130 ? 12 : 18;
  const inner  = size < 130 ? 10 : 15;
  const pad    = size < 130 ? 2  : 3;
  const fsCat  = size < 130 ? 6  : 7.5;
  const fsLbl  = size < 130 ? 8.5 : 10.5;

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        background: '#ffffff', borderRadius: radius, padding: pad, overflow: 'hidden',
        boxShadow: '0 8px 28px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.95)',
      }}>
        {/* Pastel gradient top */}
        <div style={{
          position: 'absolute', inset: pad, borderRadius: inner,
          background: gradient, overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.55), transparent 68%)',
          }} />
        </div>

        {/* White folder body */}
        <div style={{
          position: 'absolute', bottom: pad, left: pad, right: pad, height: '58%',
          background: '#ffffff', borderRadius: `0 0 ${inner}px ${inner}px`,
          padding: `${pad + 6}px ${pad + 7}px`,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        }}>
          {/* Category notch */}
          <div style={{
            position: 'absolute', top: -tabH, left: 0, width: '55%', height: tabH,
            background: '#ffffff', borderRadius: '6px 6px 0 0',
            padding: `2px 6px 0 8px`, fontSize: fsCat, fontWeight: 600,
            letterSpacing: '0.07em', color: '#9CA3AF', textTransform: 'uppercase',
          }}>
            {category}
          </div>
          {/* Curve seam */}
          <div style={{
            position: 'absolute', top: -tabH, left: '55%',
            width: 9, height: tabH, background: 'transparent',
            boxShadow: `-4px 4px 0 0 #ffffff`, borderRadius: '0 0 0 5px',
          }} />
          {/* Label */}
          <p style={{
            margin: 0, fontSize: fsLbl, fontWeight: 600,
            color: '#1F2937', letterSpacing: '-0.01em', lineHeight: 1.3,
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
  const [mounted, setMounted]  = useState(false);

  useEffect(() => {
    const visuals = shuffled(
      cards.map(c => ({ label: c.label, category: c.category, gradient: c.gradient, rotate: c.rotate }))
    );
    setDisplay(cards.map((c, i) => ({ ...c, ...visuals[i] })));
    setMounted(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Mobile 3×4 grid layout ──
     Mirrors the desktop grid mathematics but tailored for portrait screens.
     Cards are brought fully inside the display bounds (16%-84% width). 
     Center is calculated at col 1, row 1.5 */
  const MOBILE_COLS = ['16%', '50%', '84%'];
  const MOBILE_ROWS = ['12%', '36%', '64%', '88%'];
  const MOBILE_MAX_DIST = Math.sqrt(Math.pow(1, 2) + Math.pow(1.5, 2)); // center is (1, 1.5)

  // Generate 12 slots
  const mobileSlots = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 3; c++) {
      mobileSlots.push({ col: c, row: r });
    }
  }

  return (
    <>
      {/* ── Desktop 5×3 grid ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-visible hidden lg:block">
        {display.map((card) => {
          const dist     = Math.sqrt(Math.pow(card.col - 2, 2) + Math.pow(card.row - 1, 2));
          const norm     = dist / MAX_DIST;
          const blurPx   = (norm * 4.5).toFixed(1);
          const opacity  = (mounted ? 0.98 : 0) - norm * 0.18;
          const saturate = (0.96 - norm * 0.12).toFixed(2);

          return (
            <div
              key={`grid-${card.col}-${card.row}`}
              style={{
                position: 'absolute',
                left: COL_POSITIONS[card.col],
                top:  ROW_POSITIONS[card.row],
                transform: `translate(-50%, -50%) rotate(${card.rotate})`,
                width: 184,
                opacity,
                filter: `blur(${blurPx}px) saturate(${saturate})`,
                transition: 'opacity 0.55s ease, filter 0.55s ease',
                willChange: 'opacity, filter',
              }}
            >
              <CardFace label={card.label} category={card.category} gradient={card.gradient} size={184} />
            </div>
          );
        })}
      </div>

      {/* ── Mobile 3×4 grid ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden block lg:hidden">
        {mobileSlots.map((slot, i) => {
           const card = display[i % display.length];
           // Calculate distance from center grid point (col 1, row 1.5)
           const dist     = Math.sqrt(Math.pow(slot.col - 1, 2) + Math.pow(slot.row - 1.5, 2));
           const norm     = dist / MOBILE_MAX_DIST;
           
           // Slightly reduced blur/fade radius for tighter mobile screens
           const blurPx   = (norm * 3.5).toFixed(1);
           const opacity  = (mounted ? 0.95 : 0) - norm * 0.22;
           const saturate = (0.98 - norm * 0.15).toFixed(2);

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
               <CardFace label={card.label} category={card.category} gradient={card.gradient} size={110} />
             </div>
           );
        })}
      </div>
    </>
  );
}
