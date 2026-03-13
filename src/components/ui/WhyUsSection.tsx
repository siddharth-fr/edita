'use client';

import { Lock, Zap, Globe, Layers } from 'lucide-react';
import { CardFace } from '@/components/ui/HeroCardGrid';

export default function WhyUsSection() {
  return (
    <section className="w-full max-w-6xl px-4 sm:px-8 mt-12 mb-10">
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-0">
        {/* Static Floating Cards decorating the Title */}
        <div className="absolute -left-3 sm:-left-12 lg:-left-32 top-[-10px] sm:top-2 lg:top-8 -rotate-6 opacity-60 sm:opacity-60 lg:opacity-80 scale-[0.55] sm:scale-75 lg:scale-100 origin-center pointer-events-none -z-10" style={{ width: 140, filter: 'blur(0.5px)' }}>
          <CardFace label="Merge PDF" category="PDF" gradient="linear-gradient(135deg,#F5F9FF,#E6F0FF)" size={140} />
        </div>
        <div className="absolute -right-3 sm:-right-12 lg:-right-28 top-[-20px] sm:top-[-10px] lg:top-2 rotate-3 opacity-60 sm:opacity-70 lg:opacity-90 scale-[0.6] sm:scale-75 lg:scale-100 origin-center pointer-events-none -z-10" style={{ width: 125, filter: 'blur(0px)' }}>
          <CardFace label="Image Compressor" category="IMAGE" gradient="linear-gradient(135deg,#F3FFF7,#E2FBEA)" size={125} />
        </div>
        <div className="absolute -right-6 sm:-right-20 lg:-right-40 top-[50px] sm:top-[70px] lg:top-36 -rotate-3 opacity-50 sm:opacity-50 lg:opacity-60 scale-[0.55] sm:scale-65 lg:scale-100 origin-center pointer-events-none -z-10" style={{ width: 100, filter: 'blur(1.5px)' }}>
          <CardFace label="Word to PDF" category="CONVERT" gradient="linear-gradient(135deg,#F8F4FF,#EDE5FF)" size={100} />
        </div>
        <div className="absolute -left-6 sm:-left-16 lg:-left-36 top-[60px] sm:top-[80px] lg:top-40 rotate-6 opacity-50 sm:opacity-50 lg:opacity-70 scale-[0.55] sm:scale-65 lg:scale-100 origin-center pointer-events-none -z-10" style={{ width: 110, filter: 'blur(1px)' }}>
          <CardFace label="Split PDF" category="PDF" gradient="linear-gradient(135deg,#FFF6EC,#FFEAD8)" size={110} />
        </div>
        
        <div className="relative z-10 w-full flex flex-col items-center">
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
            <span>Why Choose Edita?</span>
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
            The Ultimate Selection of <br className="hidden sm:block" />
            <span style={{
              background: 'linear-gradient(128deg, #34D399 0%, #059669 65%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Free Online File Tools</span>
          </h2>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#6B7280',
            fontWeight: 400,
          }}>
            Whether you need a reliable PDF converter, a high-quality image compressor, or powerful document editing features, Edita provides an all-in-one platform built for speed, uncompromised security, and absolute premium quality without the price tag.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 w-full max-w-6xl relative z-10 px-2">
        {[
          {
            icon: <Lock size={22} style={{ color: '#059669' }} strokeWidth={2.5} />,
            title: "100% Secure & Private",
            desc: "Files never leave your device. All compression and formatting is executed locally via browser.",
            gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)',
            category: 'PRIVACY'
          },
          {
            icon: <Zap size={22} style={{ color: '#D97706' }} strokeWidth={2.5} />,
            title: "Blazing Fast Speeds",
            desc: "Powered by advanced WebAssembly (WASM), skipping long server uploads for immediate results.",
            gradient: 'linear-gradient(135deg,#FFF6EC,#FFEAD8)',
            category: 'PERFORMANCE'
          },
          {
            icon: <Globe size={22} style={{ color: '#059669' }} strokeWidth={2.5} />,
            title: "Free With No Limits",
            desc: "Access premium PDF and image tools with zero paywalls, and absolutely no account required.",
            gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)',
            category: 'ACCESS'
          },
          {
            icon: <Layers size={22} style={{ color: '#7C3AED' }} strokeWidth={2.5} />,
            title: "Studio-Grade Precision",
            desc: "Intelligent algorithms preserve your original layout and formatting for lossless quality.",
            gradient: 'linear-gradient(135deg,#F8F4FF,#EDE5FF)',
            category: 'QUALITY'
          }
        ].map((feature, i) => (
          <div
            key={i}
            className="group relative w-full bg-white p-1 transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
            style={{
              borderRadius: '22px',
              minHeight: '260px',
            }}
          >
            {/* PASTEL BACKGROUND */}
            <div
              className="absolute overflow-hidden transition-all duration-300 group-hover:saturate-[1.08] group-hover:brightness-[1.02]"
              style={{
                inset: '4px',
                borderRadius: '18px',
                background: feature.gradient,
              }}
            >
              {/* AMBIENT LIGHT */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.35), transparent 70%)',
                }}
              />
              {/* AMBIENT LIGHT HOVER */}
              <div
                className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.55), transparent 65%)',
                }}
              />

              {/* Icon */}
              <div className="absolute top-5 right-5 w-10 h-10 bg-white/70 backdrop-blur-md rounded-[12px] flex items-center justify-center shadow-sm border border-white/60 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>
            </div>

            {/* FOLDER BODY */}
            <div
              className="absolute bg-white flex flex-col justify-start"
              style={{
                bottom: '4px',
                left: '4px',
                right: '4px',
                height: '62%',
                borderRadius: '0 0 18px 18px',
                padding: '24px 20px 20px',
              }}
            >
              {/* CATEGORY NOTCH */}
              <div
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: 0,
                  width: '52%',
                  height: '24px',
                  background: '#ffffff',
                  borderRadius: '9px 9px 0 0',
                  padding: '4px 14px 0 16px',
                  fontSize: '10.5px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}
              >
                {feature.category}
              </div>

              {/* CURVE SEAM */}
              <div
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: '52%',
                  width: '16px',
                  height: '24px',
                  background: 'transparent',
                  boxShadow: '-8px 8px 0 0 #ffffff',
                  borderRadius: '0 0 0 9px'
                }}
              />

              <div
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#1F2937',
                  letterSpacing: '-0.015em',
                  lineHeight: 1.35,
                  marginBottom: '8px'
                }}
              >
                {feature.title}
              </div>
              <div
                style={{
                  fontSize: '13.5px',
                  color: '#6B7280',
                  lineHeight: 1.55,
                  fontWeight: 400,
                }}
              >
                {feature.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
