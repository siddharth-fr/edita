'use client';

import { Scale, FileText, CheckCircle, ShieldCheck } from 'lucide-react';
import { CardFace } from '@/components/ui/HeroCardGrid';

export default function TermsPage() {
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
          
          {/* Static Floating Cards decorating the Title */}
          <div className="absolute -left-12 sm:-left-32 lg:-left-56 top-[-40px] sm:top-[-60px] lg:top-[-80px] -rotate-12 opacity-60 sm:opacity-60 lg:opacity-75 scale-[0.55] sm:scale-75 lg:scale-105 origin-center pointer-events-none -z-10" style={{ width: 140, filter: 'blur(0.5px)' }}>
            <CardFace label="Simple" category="TERMS" gradient="linear-gradient(135deg,#F5F9FF,#E6F0FF)" size={140} />
          </div>
          <div className="absolute -right-12 sm:-right-32 lg:-right-56 top-[-20px] sm:top-[-40px] lg:top-[-50px] rotate-12 opacity-60 sm:opacity-70 lg:opacity-85 scale-[0.6] sm:scale-75 lg:scale-105 origin-center pointer-events-none -z-10" style={{ width: 125, filter: 'blur(0px)' }}>
            <CardFace label="Privacy" category="FIRST" gradient="linear-gradient(135deg,#F3FFF7,#E2FBEA)" size={125} />
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
              <span>Legal Transparency</span>
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
              Terms of Service
            </h1>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: '#6B7280',
              fontWeight: 400,
            }}>
              By accessing Edita, you agree to these transparent terms designed to protect you and maintain our browser-based platform's integrity.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-12 sm:gap-16 pt-8">

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              By accessing and using Edita, you acknowledge that you have read, understood, and agreed to be bound by these terms. These terms constitute a legally binding agreement between you and Edita regarding your use of our website and services. If you do not agree with any part of these terms, you must immediately discontinue use of the platform.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Edita provides a suite of online file processing tools, including but not limited to PDF conversion, image compression, and audio extraction. Our primary technological distinction is that most processing occurs locally within your web browser using WebAssembly. While we strive for continuous availability, we do not guarantee uninterrupted access to the platform or its tools.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">3. Proper Use and Restrictions</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              You agree to use Edita only for lawful purposes. You are strictly prohibited from using the platform to process content that is illegal, infringing on third-party intellectual property, or containing malicious software. You may not attempt to reverse engineer, decompile, or interfere with the client-side code that powers our browser-based tools.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">4. Ownership and Intellectual Property</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Edita does not claim any ownership rights over the files you process using our tools. All processed files and their contents remain your property. However, the design, source code, logos, and original content of the Edita platform itself are protected by intellectual property laws and remain the exclusive property of Edita.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Edita provides its services on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or suitability of our tools for any particular purpose. Since processing occurs on your own device, we are not responsible for performance issues or data loss caused by hardware limitations or software conflicts on the browser level.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              To the maximum extent permitted by law, Edita and its creators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use or inability to use the platform. This includes, but is not limited to, damages for loss of profits, data corruption, or business interruption.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
