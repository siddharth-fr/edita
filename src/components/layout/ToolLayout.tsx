import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { type HowItWorksStep } from '@/components/ui/HowItWorksSection';

const HowItWorksSection = dynamic(() => import('@/components/ui/HowItWorksSection'));
const SimilarToolsSection = dynamic(() => import('@/components/ui/SimilarToolsSection'));
const FAQSection = dynamic(() => import('@/components/ui/FAQSection'));

import { type FAQ } from '@/components/ui/FAQSection';
import { GENERAL_FAQS } from '@/config/seo';
import { StructuredData } from '@/components/seo/StructuredData';
import { getSEOContent } from '@/config/seoContent';


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
  toolSlug?: string;
  seoContent?: React.ReactNode;
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
  footerContent,
  toolSlug,
  canonicalUrl,
  seoContent,
}: ToolLayoutProps & { canonicalUrl?: string }) {
  // We construct the absolute URL for the structured data. If canonicalUrl isn't provided, fallback
  const siteUrl = "https://edita.tools";
  const finalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <main className="flex-1 flex flex-col items-center w-full pb-32 pt-28 relative overflow-x-clip">
      <StructuredData
        toolName={title}
        toolDescription={description}
        url={finalUrl}
        faqs={faqItems ? [...faqItems, ...GENERAL_FAQS] : GENERAL_FAQS}
        howItWorksSteps={howItWorksSteps}
      />
      {/* ── Decorative aurora glow ── */}
      <div className="pointer-events-none absolute top-0 inset-x-0 -z-10 h-[500px] overflow-hidden">
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
      </div>

      <div className="max-w-4xl w-full px-4 sm:px-8 mt-12">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0C0F17] mb-6 font-display">
            {title}
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {description}
          </p>
        </div>

        {/* ── Tool Interface Content ── */}
        <div className="w-full relative z-10 mb-20">
          {children}
        </div>
      </div>

      {/* ── Additional Sections ── */}
      <div className="w-full flex flex-col items-center space-y-4">
        
        {/* How It Works */}
        <div className="w-full max-w-5xl px-4 sm:px-8 bg-slate-50/30 py-20 border-y border-slate-100/10">
          <HowItWorksSection 
            title={howItWorksTitle}
            subtitle={howItWorksSubtitle}
            steps={howItWorksSteps}
          />
        </div>

        {/* Related Tools */}
        <div className="w-full max-w-6xl px-4 sm:px-8 py-20">
          <SimilarToolsSection />
        </div>

        {/* Custom Footer Content (if any) - Privacy/Features Cards */}
        {footerContent && (
          <div className="w-full max-w-4xl px-4 sm:px-8 py-20">
            {footerContent}
          </div>
        )}

        {/* FAQ Section */}
        {faqItems && (
          <div className="w-full max-w-5xl px-4 sm:px-8 py-20 bg-slate-50/20 border-t border-slate-100/10">
            <FAQSection 
              items={[...faqItems, ...GENERAL_FAQS]}
              title={faqTitle}
              subtitle={faqSubtitle}
            />
          </div>
        )}

        {/* SEO Long Form Content Section */}
        {(toolSlug || seoContent) && (
          <div className="w-full max-w-3xl px-4 sm:px-8 py-16 text-left border-t border-slate-100/10">
            {seoContent ? seoContent : getSEOContent(toolSlug!, title)}
          </div>
        )}
      </div>

    </main>
  );
}
