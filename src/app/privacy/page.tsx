'use client';

import { ShieldCheck, Lock, Globe } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main
      className="flex flex-col items-center w-full min-h-screen py-24 px-4 overflow-hidden relative"
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

      <section className="w-full max-w-4xl relative z-10">
        <div className="text-center mb-16">
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
            margin: 0,
            fontFamily: 'var(--font-display), sans-serif',
            fontSize: 'clamp(36px, 5vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#0C0F17',
            marginBottom: '20px',
            lineHeight: 1.1,
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#4B5563',
            fontWeight: 400,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Your data is your business. At EDDIT, we have built our entire architecture around ensuring your files never leave your device.
          </p>
        </div>

        <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-10">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[12px] bg-emerald-50 flex items-center justify-center border border-emerald-100">
                <Lock size={20} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight m-0">Zero Data Collection</h2>
            </div>
            <p className="text-gray-600 leading-relaxed m-0 text-[15.5px]">
              EDDIT operates entirely within your browser utilizing advanced WebAssembly (WASM) technology. When you convert, compress, or manipulate files using our tools, the processing happens directly on your own device's hardware. <strong>We do not upload your files to our servers, we do not store them, and we have absolutely no access to their contents.</strong>
            </p>
          </div>

          <div className="h-px w-full bg-gray-100" />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[12px] bg-indigo-50 flex items-center justify-center border border-indigo-100">
                <Globe size={20} className="text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight m-0">No Accounts, No Tracking</h2>
            </div>
            <p className="text-gray-600 leading-relaxed m-0 text-[15.5px]">
              We believe privacy implies anonymity. We do not require you to create an account, provide an email address, or log in to use our services. We intentionally avoid integrating intrusive third-party ad-trackers or analytics platforms that profile your personal web behavior.
            </p>
          </div>

          <div className="h-px w-full bg-gray-100" />

          <div>
             <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[12px] bg-amber-50 flex items-center justify-center border border-amber-100">
                <ShieldCheck size={20} className="text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight m-0">Analytics & Cookies</h2>
            </div>
            <p className="text-gray-600 leading-relaxed m-0 text-[15.5px]">
              We may utilize completely anonymized, privacy-friendly analytics exclusively to count the aggregate number of page visits and ensure our application is running smoothly. This minimal data cannot be traced back to you. We do not use persistent tracking cookies.
            </p>
          </div>

          <div className="h-px w-full bg-gray-100" />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">Updates to this Policy</h2>
            <p className="text-gray-600 leading-relaxed m-0 text-[15.5px]">
              As our platform evolves, we may occasionally update this Privacy Policy. However, our fundamental commitment to local, client-side processing will never change. Any updates will be reflected directly on this page.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
