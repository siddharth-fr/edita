'use client';

import { MousePointerClick, Cpu, Download } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Select Tool",
      desc: "Pick the PDF, Image, or Video tool you need from our growing selection.",
      icon: <MousePointerClick size={28} style={{ color: '#059669' }} />,
      gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)'
    },
    {
      step: "02",
      title: "Local Magic",
      desc: "Our WASM engine processes your files locally. No data ever leaves your device.",
      icon: <Cpu size={28} style={{ color: '#D97706' }} />,
      gradient: 'linear-gradient(135deg,#FFF6EC,#FFEAD8)'
    },
    {
      step: "03",
      title: "Instant Save",
      desc: "Get your processed file in seconds and download it directly to your folder.",
      icon: <Download size={28} style={{ color: '#2563EB' }} />,
      gradient: 'linear-gradient(135deg,#F5F9FF,#E6F0FF)'
    }
  ];

  return (
    <section className="w-full mt-20 pt-16 border-t border-border/40 relative">

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
          How it <span style={{
            background: 'linear-gradient(128deg, #34D399 0%, #059669 65%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Works</span>
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: '#64748B',
          fontWeight: 400,
        }}>
          Everything happens right in your browser. Private, fast, and completely free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 relative max-w-5xl mx-auto px-4 sm:px-8">
        {/* Desktop Connection Line */}
        <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-emerald-100/60 to-transparent -z-10" />

        {steps.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div 
              className="w-20 h-20 rounded-[28px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center mb-6 relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              style={{
                border: '1px solid rgba(0,0,0,0.03)',
                background: 'linear-gradient(135deg, #ffffff 0%, #fcfdfe 100%)'
              }}
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-2 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{ background: item.gradient, filter: 'blur(12px)' }}
              />
              
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-white text-[11px] font-black flex items-center justify-center shadow-md border-4 border-white">
                {item.step}
              </div>
              
              <div className="transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
            </div>
            
            <h3 style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#1F2937',
              marginBottom: '10px',
              letterSpacing: '-0.01em'
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#64748B',
              lineHeight: 1.6,
              fontWeight: 400,
              maxWidth: '240px'
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
