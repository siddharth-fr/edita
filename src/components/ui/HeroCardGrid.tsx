'use client';

import { useState, useEffect } from 'react';

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
function CardFace({
  label, category, gradient, size,
}: { label: string; category: string; gradient: string; size: number }) {
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
}

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

  /* Four mobile corners: pick indices spread across the shuffled pool */
  const mobileCorners = [
    { card: display[0],  pos: { top: '6%',    left: '3%'  }, rotate: '-5deg'  },
    { card: display[2],  pos: { top: '6%',    right: '3%' }, rotate:  '5deg'  },
    { card: display[7],  pos: { bottom: '6%', left: '3%'  }, rotate:  '4deg'  },
    { card: display[10], pos: { bottom: '6%', right: '3%' }, rotate: '-4deg'  },
  ];

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
                width: 152,
                opacity,
                filter: `blur(${blurPx}px) saturate(${saturate})`,
                transition: 'opacity 0.55s ease',
              }}
            >
              <CardFace label={card.label} category={card.category} gradient={card.gradient} size={152} />
            </div>
          );
        })}
      </div>

      {/* ── Mobile 4-corner layout ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden block lg:hidden">
        {mobileCorners.map(({ card, pos, rotate }, i) => (
          <div
            key={`mobile-${i}`}
            style={{
              position: 'absolute',
              ...pos,
              transform: `rotate(${rotate})`,
              width: 100,
              opacity: mounted ? 0.82 : 0,
              filter: 'blur(2.5px) saturate(0.90)',
              transition: 'opacity 0.55s ease',
            }}
          >
            <CardFace label={card.label} category={card.category} gradient={card.gradient} size={100} />
          </div>
        ))}
      </div>
    </>
  );
}
