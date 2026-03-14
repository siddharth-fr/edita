'use client';

import { ShieldCheck, Lock, Globe } from 'lucide-react';
import { CardFace } from '@/components/ui/HeroCardGrid';

export default function PrivacyPage() {
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
          className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(167,240,198,0.15) 0%, rgba(199,210,255,0.08) 45%, transparent 72%)',
            filter: 'blur(2px)',
          }}
        />
      </div>

      <section className="w-full max-w-4xl px-4 sm:px-8 mt-12 mb-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-0">
          
          {/* Static Floating Cards decorating the Title — Differentiated for Privacy */}
          <div className="absolute -left-12 sm:-left-32 lg:-left-56 top-[-40px] sm:top-[-60px] lg:top-[-80px] -rotate-12 opacity-60 sm:opacity-60 lg:opacity-75 scale-[0.55] sm:scale-75 lg:scale-105 origin-center pointer-events-none -z-10" style={{ width: 140, filter: 'blur(0.5px)' }}>
            <CardFace label="Zero Log" category="ANONYMOUS" gradient="linear-gradient(135deg,#F5F9FF,#E6F0FF)" size={140} />
          </div>
          <div className="absolute -right-12 sm:-right-32 lg:-right-56 top-[-20px] sm:top-[-40px] lg:top-[-50px] rotate-12 opacity-60 sm:opacity-70 lg:opacity-85 scale-[0.6] sm:scale-75 lg:scale-105 origin-center pointer-events-none -z-10" style={{ width: 125, filter: 'blur(0px)' }}>
            <CardFace label="End-to-End" category="SECURE" gradient="linear-gradient(135deg,#F3FFF7,#E2FBEA)" size={125} />
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
              <span>Commitment to Privacy</span>
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
              Your privacy is our highest priority at Edita. We've designed our platform from the ground up to ensure your files remain exclusively yours. By leveraging in-browser processing, your data never hits our servers, guaranteeing absolute confidentiality. 
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-12 sm:gap-16 pt-8">

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">Zero Data Collection</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Edita operates entirely within your browser utilizing advanced WebAssembly (WASM) technology. When you convert, compress, or manipulate files using our tools, the processing happens directly on your own device's hardware. At no point are your files uploaded to any remote server. Since the data never leaves your system, we do not store, view, or have any access to your private information or content.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">No Accounts or Profiling</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              We believe that the best way to protect your data is to never ask for it. Edita does not require you to create an account, provide an email address, or link any social media profiles to use our services. We do not build user profiles, track your cross-site behavior, or use invasive third-party advertising cookies that compromise your digital identity.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">Anonymized Analytics</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              To maintain the health of our platform and understand general usage trends, we utilize privacy-focused, anonymized analytics. This data is limited to aggregate statistics such as page view counts and success rates of tool usage. This information is completely ephemeral, contains no personally identifiable information (PII), and cannot be used to trace activity back to an individual user.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">Updates to this Policy</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              We may occasionally update this Privacy Policy to reflect technical improvements or changes in our operational practices. However, our core philosophy remains unchanged: your files are processed locally, and your privacy is absolute. We encourage you to review this page periodically for any updates.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
