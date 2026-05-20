import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const PPFCalculatorClient = dynamic(() => import('@/components/tools/PPFCalculatorClient').then(mod => ({ default: mod.PPFCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { ShieldCheck, Calendar, TrendingUp } from 'lucide-react';

const TOOL_ID = "ppf-calculator";
const m = TOOL_METADATA[TOOL_ID as keyof typeof TOOL_METADATA];

export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout 
      toolSlug={TOOL_ID}
      canonicalUrl={"/tools/" + TOOL_ID} 
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Tax Benefits",
              description: "Calculate how your EEE category investment grows tax-free over the 15-year tenure.",
              icon: ShieldCheck
            },
            {
              title: "Lock-in Visualization",
              description: "Understand the growth of your capital considering the minimum 15-year maturity period.",
              icon: Calendar
            },
            {
              title: "Secure Planning",
              description: "Plan your annual contributions to stay within the government limits while maximizing returns.",
              icon: TrendingUp
            }
          ]}
        />
      }
    >
      <PPFCalculatorClient />
    </ToolLayout>
  );
}
