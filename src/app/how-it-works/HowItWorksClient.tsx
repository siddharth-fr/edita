'use client';

import { MousePointerClick, Cpu, Download } from 'lucide-react';
import { CardFace } from '@/components/ui/HeroCardGrid';
import { THEME_PALETTE, type AppTheme } from '@/config/themes';

export default function HowItWorksPage() {
  return (
    <main
      className="flex-1 flex flex-col items-center w-full pb-28 pt-28 relative overflow-x-clip"
      style={{
        background: '#FAFBFF',
      }}
    >
      {/* ── Deep-space ambient background ── */}
      <div className="pointer-events-none select-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 35%, #F0F4FF 0%, #F7F5FF 35%, #FAFBFF 70%, #FAFBFF 100%)',
          }}
        />
        <div
          className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[640px] h-[440px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(186,220,255,0.35) 0%, rgba(199,210,255,0.18) 45%, transparent 72%)',
            filter: 'blur(1px)',
          }}
        />
        <div
          className="absolute bottom-[-40px] left-[-60px] w-[380px] h-[320px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(210,190,255,0.28) 0%, transparent 68%)',
          }}
        />
      </div>

      <section className="w-full max-w-6xl px-4 sm:px-8 mt-12 mb-16 relative">
        <div className="text-center max-w-2xl mx-auto mb-20 relative z-0">
          {/* Static Floating Cards decorating the Title — Differentiated for How it Works */}
          <div className="absolute -left-8 sm:-left-16 lg:-left-24 top-[-20px] sm:top-[-40px] lg:top-[-60px] -rotate-12 opacity-60 sm:opacity-60 lg:opacity-70 scale-[0.55] sm:scale-75 lg:scale-110 origin-center pointer-events-none -z-10" style={{ width: 140, filter: 'blur(0.5px)' }}>
            <CardFace label="1. Select" category="PICK" theme="pink" size={140} />
          </div>
          <div className="absolute -right-8 sm:-right-16 lg:-right-24 top-[10px] sm:top-[30px] lg:top-[50px] rotate-12 opacity-60 sm:opacity-70 lg:opacity-80 scale-[0.6] sm:scale-75 lg:scale-105 origin-center pointer-events-none -z-10" style={{ width: 125, filter: 'blur(0px)' }}>
            <CardFace label="2. Process" category="WASM" theme="emerald" size={125} />
          </div>
          <div className="absolute -right-6 sm:-right-12 lg:-right-16 top-[140px] sm:top-[160px] lg:top-[220px] -rotate-6 opacity-50 sm:opacity-50 lg:opacity-60 scale-[0.55] sm:scale-65 lg:scale-115 origin-center pointer-events-none -z-10" style={{ width: 100, filter: 'blur(1.5px)' }}>
            <CardFace label="3. Save" category="DONE" theme="blue" size={100} />
          </div>
          <div className="absolute -left-6 sm:-left-12 lg:-left-16 top-[120px] sm:top-[140px] lg:top-[180px] rotate-3 opacity-50 sm:opacity-50 lg:opacity-70 scale-[0.55] sm:scale-65 lg:scale-100 origin-center pointer-events-none -z-10" style={{ width: 110, filter: 'blur(1px)' }}>
            <CardFace label="Processing..." category="LOCAL" theme="purple" size={110} />
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
              <span>Simple 3-Step Process</span>
            </div>

            <h1 style={{
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
            </h1>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

          {[
            {
              step: "01",
              title: "Select Tool",
              desc: "Pick the PDF, Image, or Video tool you need from our growing selection.",
              icon: <MousePointerClick size={28} style={{ color: '#059669' }} />,
              theme: 'emerald' as AppTheme
            },
            {
              step: "02",
              title: "Local Magic",
              desc: "Our WASM engine processes your files locally. No data ever leaves your device.",
              icon: <Cpu size={28} style={{ color: '#D97706' }} />,
              theme: 'orange' as AppTheme
            },
            {
              step: "03",
              title: "Instant Save",
              desc: "Get your processed file in seconds and download it directly to your folder.",
              icon: <Download size={28} style={{ color: '#059669' }} />,
              theme: 'green' as AppTheme
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
                  style={{ background: THEME_PALETTE[item.theme].gradient, filter: 'blur(15px)' }}
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

      {/* Additional Detail Section — Folder Style Cards */}
      <section className="w-full max-w-5xl px-4 sm:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {[
            {
              title: "Privacy by Design",
              desc: "Unlike traditional online tools that upload your files to a central server, Edita runs entirely in your web browser. Using advanced technologies like WebAssembly (WASM), we bring the processing power to your computer.",
              theme: 'emerald' as AppTheme,
              category: 'SECURITY'
            },
            {
              title: "No Limits, No Fees",
              desc: "Because we don't have to pay for expensive server-side processing for every file, we can offer our tools for free, without any file size limits or paywalls. It's a faster, safer, and cheaper way to manage your files.",
              theme: 'blue' as AppTheme,
              category: 'ACCESS'
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative w-full p-1 transition-all duration-400 hover:-translate-y-2 flex flex-col"
              style={{
                background: THEME_PALETTE[feature.theme].tint,
                borderRadius: '24px',
                minHeight: '280px',
                border: '1.5px solid rgba(0,0,0,0.03)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                willChange: 'transform, box-shadow',
              }}
            >
              {/* PASTEL BACKGROUND */}
              <div
                className="absolute overflow-hidden transition-all duration-300 group-hover:saturate-[1.1] group-hover:brightness-[1.02]"
                style={{
                  inset: '4px',
                  bottom: '60%',
                  borderRadius: '20px 20px 0 0',
                  background: THEME_PALETTE[feature.theme].gradient,
                }}
              >
                {/* AMBIENT LIGHT */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.4), transparent 70%)',
                  }}
                />
                
              </div>

              {/* FOLDER BODY */}
              <div
                className="absolute bg-white flex flex-col justify-start transition-all duration-300"
                style={{
                  bottom: '4px',
                  left: '4px',
                  right: '4px',
                  height: '60%',
                  borderRadius: '0 0 20px 20px',
                  padding: '28px 20px 20px',
                }}
              >
                {/* CATEGORY NOTCH */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-24px',
                    left: 0,
                    width: '54%',
                    height: '24px',
                    background: '#ffffff',
                    borderRadius: '10px 10px 0 0',
                    padding: '0 14px 0 16px',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#94A3B8',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {feature.category}
                </div>

                {/* CURVE SEAM */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-24px',
                    left: '54%',
                    width: '20px',
                    height: '24px',
                    background: 'transparent',
                    boxShadow: '-10px 10px 0 0 #ffffff',
                    borderRadius: '0 0 0 10px'
                  }}
                />

                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1E293B',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.3,
                    marginBottom: '10px'
                  }}
                >
                  {feature.title}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: '#64748B',
                    lineHeight: 1.6,
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
    </main>
  );
}
