import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { type HowItWorksStep } from '@/components/ui/HowItWorksSection';

const HowItWorksSection = dynamic(() => import('@/components/ui/HowItWorksSection'));
const SimilarToolsSection = dynamic(() => import('@/components/ui/SimilarToolsSection'));
const FAQSection = dynamic(() => import('@/components/ui/FAQSection'));

import { type FAQ } from '@/components/ui/FAQSection';
import { GENERAL_FAQS } from '@/config/seo';


interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  howItWorksTitle?: string;
  howItWorksSubtitle?: string;
  howItWorksSteps?: HowItWorksStep[];
  faqItems?: FAQ[];
  faqTitle?: string;
  faqSubtitle?: string;
  footerContent?: React.ReactNode;
}

export function ToolLayout({ 
  title, 
  description, 
  children,
  howItWorksTitle,
  howItWorksSubtitle,
  howItWorksSteps,
  faqItems,
  faqTitle,
  faqSubtitle,
  footerContent
}: ToolLayoutProps) {
  return (
    <main className="flex-1 flex flex-col items-center w-full pb-28 pt-28 relative overflow-x-clip">
      
      {/* ── Decorative green-white aurora glow (matching homepage) ── */}
      <div className="pointer-events-none absolute top-0 inset-x-0 -z-10 h-[500px] overflow-hidden">
        {/* Outer diffuse green bloom */}
        <div
          className="absolute"
          style={{
            top: '0%', left: '50%',
            transform: 'translate(-50%, -10%)',
            width: 580, height: 380,
            background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.18) 0%, rgba(16,185,129,0.06) 40%, transparent 70%)',
            filter: 'blur(3px)',
          }}
        />
        {/* Inner brighter emerald core */}
        <div
          className="absolute"
          style={{
            top: '0%', left: '50%',
            transform: 'translate(-50%, -20%)',
            width: 320, height: 200,
            background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.22) 0%, transparent 65%)',
            filter: 'blur(1px)',
          }}
        />
        {/* White softener */}
        <div
          className="absolute"
          style={{
            top: '0%', left: '50%',
            transform: 'translate(-50%, -10%)',
            width: 440, height: 260,
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.15) 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-4xl w-full px-4 sm:px-8 mt-12 mb-10">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <h1
            style={{
              margin: '0 0 18px',
              fontFamily: 'var(--font-display), sans-serif',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              fontSize: 'clamp(38px, 6vw, 48px)',
              color: '#0C0F17',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: '#6B7280',
              fontWeight: 400,
            }}
          >
            {description}
          </p>
        </div>

        {/* ── Tool Interface Content ── */}
        <div className="w-full relative z-10">
          {children}
        </div>
      </div>

      <div className="w-full max-w-5xl px-4 sm:px-8">
        <HowItWorksSection 
          title={howItWorksTitle}
          subtitle={howItWorksSubtitle}
          steps={howItWorksSteps}
        />
      </div>

      <div className="w-full max-w-6xl px-4 sm:px-8">
        <SimilarToolsSection />
      </div>

      {faqItems && (
        <div className="w-full max-w-5xl px-4 sm:px-8">
          <FAQSection 
            items={[...faqItems, ...GENERAL_FAQS]}
            title={faqTitle}
            subtitle={faqSubtitle}
          />
        </div>
      )}

      {footerContent && (
        <div className="w-full max-w-4xl px-4 sm:px-8 mt-24">
          {footerContent}
        </div>
      )}

    </main>
  );
}
