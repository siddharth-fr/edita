'use client';

import { ShieldCheck, Lock, Globe } from 'lucide-react';
import { CardFace } from '@/components/ui/HeroCardGrid';

export default function PrivacyPage() {
  return (
    <main
      className="flex flex-col items-center w-full min-h-screen pb-28 pt-28 relative overflow-x-hidden"
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
          className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(167,240,198,0.15) 0%, rgba(199,210,255,0.08) 45%, transparent 72%)',
            filter: 'blur(2px)',
          }}
        />
      </div>

      <section className="w-full max-w-4xl px-4 sm:px-8 mt-12 mb-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          
          {/* Static Floating Cards decorating the Title */}
          <div className="absolute -left-3 sm:-left-12 lg:-left-32 top-[-10px] sm:top-2 lg:top-8 -rotate-6 opacity-40 sm:opacity-60 lg:opacity-80 scale-[0.35] sm:scale-75 lg:scale-100 origin-center -z-10" style={{ width: 140, filter: 'blur(0.5px)' }}>
            <CardFace label="Privacy Shield" category="SECURITY" gradient="linear-gradient(135deg,#F5F9FF,#E6F0FF)" size={140} />
          </div>
          <div className="absolute -right-3 sm:-right-12 lg:-right-28 top-[-20px] sm:top-[-10px] lg:top-2 rotate-3 opacity-50 sm:opacity-70 lg:opacity-90 scale-[0.4] sm:scale-75 lg:scale-100 origin-center -z-10" style={{ width: 125, filter: 'blur(0px)' }}>
            <CardFace label="Local Processing" category="WASM" gradient="linear-gradient(135deg,#F3FFF7,#E2FBEA)" size={125} />
          </div>
          <div className="absolute -right-6 sm:-right-20 lg:-right-40 top-[50px] sm:top-[70px] lg:top-36 -rotate-3 opacity-30 sm:opacity-50 lg:opacity-60 scale-[0.35] sm:scale-50 lg:scale-100 origin-center -z-10" style={{ width: 100, filter: 'blur(1.5px)' }}>
             <CardFace label="No Tracking" category="PRIVACY" gradient="linear-gradient(135deg,#F8F4FF,#EDE5FF)" size={100} />
          </div>
          <div className="absolute -left-6 sm:-left-16 lg:-left-36 top-[60px] sm:top-[80px] lg:top-40 rotate-6 opacity-30 sm:opacity-50 lg:opacity-70 scale-[0.35] sm:scale-[0.55] lg:scale-100 origin-center -z-10" style={{ width: 110, filter: 'blur(1px)' }}>
             <CardFace label="Secure Docs" category="PROTECT" gradient="linear-gradient(135deg,#FFF6EC,#FFEAD8)" size={110} />
          </div>

          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              padding: '6px 14px',
              borderRadius: 999,
              border: '1px solid rgba(52, 211, 153, 0.3)',
              background: 'rgba(197, 255, 234, 0.15)',
              color: '#065F46',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            <ShieldCheck size={14} />
            <span>100% Client-Side Processing</span>
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
            Privacy Policy
          </h1>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#6B7280',
            fontWeight: 400,
          }}>
            Your data is your business. At EDDIT, we have built our entire architecture around ensuring your files never leave your device.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-12 sm:gap-16 pt-8">

          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-[14px] bg-white/60 backdrop-blur-md flex items-center justify-center border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.03)]">
                <Lock size={22} className="text-emerald-500" strokeWidth={2} />
              </div>
              <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight m-0">Zero Data Collection</h2>
            </div>
            <p className="text-gray-600 leading-[1.7] m-0 text-[16.5px] sm:text-[17.5px] pl-[64px]">
              EDDIT operates entirely within your browser utilizing advanced WebAssembly (WASM) technology. When you convert, compress, or manipulate files using our tools, the processing happens directly on your own device's hardware. <strong className="text-gray-900 font-semibold">We do not upload your files to our servers, we do not store them, and we have absolutely no access to their contents.</strong>
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-[14px] bg-white/60 backdrop-blur-md flex items-center justify-center border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.03)]">
                <Globe size={22} className="text-blue-500" strokeWidth={2} />
              </div>
              <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight m-0">No Accounts, No Tracking</h2>
            </div>
            <p className="text-gray-600 leading-[1.7] m-0 text-[16.5px] sm:text-[17.5px] pl-[64px]">
              We believe privacy implies anonymity. We do not require you to create an account, provide an email address, or log in to use our services. We intentionally avoid integrating intrusive third-party ad-trackers or analytics platforms that profile your personal web behavior.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-[14px] bg-white/60 backdrop-blur-md flex items-center justify-center border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.03)]">
                <ShieldCheck size={22} className="text-amber-500" strokeWidth={2} />
              </div>
              <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight m-0">Analytics & Cookies</h2>
            </div>
            <p className="text-gray-600 leading-[1.7] m-0 text-[16.5px] sm:text-[17.5px] pl-[64px]">
              We may utilize completely anonymized, privacy-friendly analytics exclusively to count the aggregate number of page visits and ensure our application is running smoothly. This minimal data cannot be traced back to you. We do not use persistent tracking cookies.
            </p>
          </div>

          <div className="relative pl-[64px]">
            <h2 className="text-xl sm:text-[22px] font-bold text-gray-900 tracking-tight mb-3">Updates to this Policy</h2>
            <p className="text-gray-600 leading-[1.7] m-0 text-[16.5px] sm:text-[17.5px]">
              As our platform evolves, we may occasionally update this Privacy Policy. However, our fundamental commitment to local, client-side processing will never change. Any updates will be reflected directly on this page.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
