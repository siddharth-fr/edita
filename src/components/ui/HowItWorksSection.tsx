'use client';

import { MousePointerClick, Cpu, Download } from 'lucide-react';
import { CardFace } from '@/components/ui/HeroCardGrid';
import { THEME_PALETTE, type AppTheme } from '@/config/themes';

interface HowItWorksStep {
  title: string;
  desc: string;
  step: string;
  icon?: React.ReactNode;
  theme: AppTheme;
}

interface HowItWorksSectionProps {
  steps?: HowItWorksStep[];
}

export default function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  const defaultSteps: HowItWorksStep[] = [
    {
      step: "01",
      icon: <MousePointerClick className="w-8 h-8 text-blue-600" />,
      title: "Select Files",
      desc: "Pick your PDF or image files directly from your computer.",
      theme: 'blue',
    },
    {
      step: "02",
      icon: <Cpu className="w-8 h-8 text-emerald-600" />,
      title: "Fast Process",
      desc: "Our WASM engine processes everything securely in your browser.",
      theme: 'emerald',
    },
    {
      step: "03",
      icon: <Download className="w-8 h-8 text-purple-600" />,
      title: "Save Results",
      desc: "Download your professionally optimized files instantly.",
      theme: 'purple',
    }
  ];

  const displaySteps = steps || defaultSteps;

  return (
    <section className="w-full max-w-6xl px-4 sm:px-8 py-24 mb-16 mx-auto relative overflow-hidden">
      {/* Dynamic Background Card Decorations */}
      <div className="absolute top-10 -left-16 rotate-12 opacity-30 select-none pointer-events-none scale-75">
        <CardFace label="Pick" category="STEP 1" theme="blue" size={130} />
      </div>
      <div className="absolute bottom-10 -right-16 -rotate-12 opacity-30 select-none pointer-events-none scale-75">
        <CardFace label="Save" category="STEP 3" theme="purple" size={130} />
      </div>

      <div className="text-center mb-20">
        <h2 style={{
          margin: '0 0 20px',
          fontFamily: 'var(--font-display), sans-serif',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          fontSize: 'clamp(36px, 6vw, 48px)',
          color: '#0C0F17',
        }}>
          Fast. Local. <span style={{
            background: 'linear-gradient(128deg, #34D399 0%, #059669 65%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Effortless.</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Manage your sensitive files with zero uploads. Everything happens directly in your browser.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {displaySteps.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div 
              className="w-20 h-20 rounded-[24px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center justify-center mb-6 relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
              style={{
                border: '1.5px solid rgba(0,0,0,0.03)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-2 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{ background: THEME_PALETTE[item.theme].gradient, filter: 'blur(12px)' }}
              />
              
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-white text-[11px] font-black flex items-center justify-center shadow-md border-4 border-white">
                {item.step}
              </div>
              
              <div className="transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
              {item.title}
            </h3>
            <p className="text-slate-500 leading-relaxed font-medium px-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
