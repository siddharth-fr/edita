import { ReactNode } from 'react';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <main className="flex-1 flex flex-col items-center w-full pb-20 sm:pb-24 relative overflow-hidden">
      
      {/* ── Decorative green-white aurora glow (matching homepage) ── */}
      <div className="pointer-events-none absolute top-0 inset-x-0 -z-10 h-[500px] overflow-hidden">
        {/* Outer diffuse green bloom */}
        <div
          className="absolute"
          style={{
            top: '0%', left: '50%',
            transform: 'translate(-50%, -10%)',
            width: 580, height: 380,
            background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.18) 0%, rgba(16,185,129,0.06) 40%, transparent 70%)',
            filter: 'blur(3px)',
          }}
        />
        {/* Inner brighter emerald core */}
        <div
          className="absolute"
          style={{
            top: '0%', left: '50%',
            transform: 'translate(-50%, -20%)',
            width: 320, height: 200,
            background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.22) 0%, transparent 65%)',
            filter: 'blur(1px)',
          }}
        />
        {/* White softener */}
        <div
          className="absolute"
          style={{
            top: '0%', left: '50%',
            transform: 'translate(-50%, -10%)',
            width: 440, height: 260,
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.15) 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-4xl w-full px-5 sm:px-8">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center pt-16 sm:pt-20 pb-10 sm:pb-12 max-w-2xl mx-auto">
          <h1
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontWeight: 800,
              color: '#0C0F17',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              fontSize: 'clamp(36px, 5vw, 56px)',
              marginBottom: 16,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#6B7280',
              letterSpacing: '-0.01em',
              maxWidth: 420,
            }}
          >
            {description}
          </p>
        </div>

        {/* ── Tool Interface Content ── */}
        <div className="w-full relative z-10">
          {children}
        </div>
      </div>
    </main>
  );
}

