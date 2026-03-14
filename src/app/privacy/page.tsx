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
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Welcome to Edita. Your privacy is not just a policy for us; it is a fundamental architectural requirement. This Privacy Policy outlines how Edita ("we," "our," or "the Platform") handles information when you interact with our web-based file conversion and editing tools. By using Edita, you consent to the practices described in this policy.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">2. The "Local-First" Absolute</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              The core distinction of Edita is our commitment to client-side processing. Leveraging advanced WebAssembly (WASM) and modern browser APIs, the vast majority of our tools process your files directly on your device. <strong className="text-gray-900 font-semibold">Your files are never uploaded to our servers for processing.</strong> They remain in your browser's temporary memory and are cleared once the session ends or the tab is closed. We have no technical means to see, store, or intercept your documents.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">3. Information We Collect</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              We operate on a principle of data minimization. 
              <br /><br />
              <strong>Personally Identifiable Information (PII):</strong> We do not require account registration, email addresses, or any personal details to use our tools. We do not collect names, addresses, or billing information.
              <br /><br />
              <strong>Technical Log Data:</strong> Like most web services, our hosting providers may record basic HTTP request headers (IP address, browser type, referral URL) to ensure security and prevent platform abuse. This data is standard and not used by us to profile individual users.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">4. Analytics and Cookies</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              We use Google Analytics 4 (GA4) to understand aggregate usage trends and improve our tools. GA4 collects anonymized data such as page views, button clicks (e.g., "Merge PDF"), and general geographic location (Country level).
              <br /><br />
              This data is strictly non-identifiable. We do not use persistent advertising cookies, and we do not share this data with third-party brokers. You can opt-out of analytics tracking by using browser extensions or disabling cookies in your browser settings.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">5. How We Use Information</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              The limited information we collect is used solely to:
              <br />• Maintain and optimize platform performance.
              <br />• Monitor for technical errors and debugging.
              <br />• Analyze which tools are most popular to guide future development.
              <br />• Protect the platform from automated attacks and malicious use.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">6. Data Security</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Because we do not store your files or personal data, the risk of a centralized data breach is virtually eliminated. Our website is served over an encrypted SSL (HTTPS) connection to ensure that your interaction with the Platform is secure. You are responsible for the security of your own device and the files stored thereon.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">7. International Users & Compliance</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Edita is accessible globally. Our "no-data" architecture is designed to exceed the requirements of global privacy regulations, including the GDPR (Europe) and CCPA (California). Since we do not "sell" or "process" personal data as defined by these statutes, your rights to privacy are upheld by default through our technical design.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              Our tools are not directed at children under 13. We do not knowingly collect or solicit any information from anyone under the age of 13. If we learn that we have inadvertently collected such information, we will delete it immediately.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">9. Policy Updates</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              We may update this Privacy Policy from time to time to reflect changes in our tools or legal requirements. The updated date at the bottom of the page will reflect the latest revision. Continued use of Edita after changes are posted constitutes your acceptance of the new policy.
            </p>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 tracking-tight mb-4">10. Contact Information</h2>
            <p className="text-gray-600 leading-[1.8] m-0 text-[16.5px] sm:text-[17.5px]">
              If you have questions about this Privacy Policy or our data handling practices, please contact us through the official support channels listed on our Homepage.
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
