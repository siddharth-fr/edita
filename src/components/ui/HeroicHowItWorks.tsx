'use client';

import { MousePointerClick, Cpu, Download, Sparkles } from 'lucide-react';

export default function HeroicHowItWorks() {
  return (
    <section className="w-full max-w-6xl px-4 sm:px-8 mt-24 mb-16 relative">
      <div className="text-center max-w-2xl mx-auto mb-16 relative">
        {/* Subtle decoration */}
        <div className="absolute -left-16 top-0 opacity-20 rotate-12 pointer-events-none -z-10 hidden lg:block">
          <Cpu size={120} className="text-emerald-300" />
        </div>
        <div className="absolute -right-16 bottom-0 opacity-20 -rotate-12 pointer-events-none -z-10 hidden lg:block">
          <Sparkles size={100} className="text-blue-300" />
        </div>

        <div
          className="inline-flex items-center gap-2 mb-6"
          style={{
            padding: '6px 14px',
            borderRadius: 999,
            border: '1px solid rgba(52, 211, 153, 0.25)',
            background: 'rgba(197, 255, 234, 0.08)',
            color: '#065F46',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          <span>Simple 3-Step Process</span>
        </div>

        <h2 style={{
          margin: '0 0 18px',
          fontFamily: 'var(--font-display), sans-serif',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          fontSize: 'clamp(38px, 6vw, 48px)',
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
          fontSize: '17px',
          lineHeight: 1.6,
          color: '#6B7280',
          fontWeight: 400,
        }}>
          Edita is designed to be powerful yet remarkably simple. 
          Everything happens right in your browser, keeping your data entirely private.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Desktop Connection Line */}
        <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-emerald-100 to-transparent -z-10" />

        {[
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
            icon: <Download size={28} style={{ color: '#059669' }} />,
            gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)'
          }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div 
              className="w-24 h-24 rounded-[32px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)] flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] group-hover:-translate-y-2"
              style={{
                border: '1px solid rgba(0,0,0,0.04)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
              }}
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-2 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{ background: item.gradient, filter: 'blur(15px)' }}
              />
              
              <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-emerald-500 text-white text-[13px] font-black flex items-center justify-center shadow-lg border-4 border-white">
                {item.step}
              </div>
              
              <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>
            </div>
            
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#1F2937',
              marginBottom: '12px',
              letterSpacing: '-0.02em'
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: '15px',
              color: '#6B7280',
              lineHeight: 1.6,
              fontWeight: 400,
              maxWidth: '260px'
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
