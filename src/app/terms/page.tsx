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
              By accessing and using Edita ("the Platform"), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and Edita. If you do not agree with any part of these terms, you must immediately discontinue use of the platform.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">2. Description of the Service</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Edita provides a suite of browser-based file conversion, compression, and editing utilities. Most of these tools operate using client-side technologies (such as WebAssembly), meaning file processing occurs locally on your device. We provide these services for free, and we reserve the right to modify, suspend, or terminate tools at any time without prior notice.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">3. Acceptable Use</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              You agree to use Edita only for lawful purposes. You are strictly prohibited from:
              <br />• Using the Platform to process or transmit content that violates any laws or infringes on third-party rights.
              <br />• Attempting to disrupt the platform's security, interfere with other users, or extract source code.
              <br />• Using automated scripts or "bots" to access the tools in a way that places excessive load on our infrastructure.
              <br />• Obliterating or altering any branding or legal notices on processed files.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              <strong>Your Content:</strong> Edita does not claim any ownership rights over the files you process. You retain full copyright and all other rights to your data.
              <br /><br />
              <strong>Platform Property:</strong> The software, design, logos, and original content of Edita are protected by copyright, trademark, and other laws. Your use of the Platform does not grant you any ownership interest in these assets.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Edita is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the tools will be error-free, that the output will be perfectly accurate in all cases, or that the service will be uninterrupted.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              To the maximum extent permitted by law, Edita and its creators shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the Platform. This includes, without limitation, loss of profits, data corruption, or business interruption, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">7. Governing Law</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              These terms shall be governed by and construed in accordance with the laws of your local jurisdiction, without regard to its conflict of law provisions. Any legal action or proceeding related to your access to or use of the Platform shall be instituted in a court of competent jurisdiction.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              We reserve the right to revise these terms at any time. When changes are made, we will update the "Last Updated" date below. Your continued use of the Platform signifies your acceptance of the revised terms.
            </p>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground italic">
              Last Updated: March 14, 2026
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
