import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const MutualFundCalculatorClient = dynamic(() => import('@/components/tools/MutualFundCalculatorClient').then(mod => ({ default: mod.MutualFundCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { BarChart3, ShieldCheck, Zap } from 'lucide-react';

const TOOL_ID = "mutual-fund-calculator";
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
              title: "Growth Projection",
              description: "Calculate potential returns for both Lumpsum and SIP investments in seconds.",
              icon: BarChart3
            },
            {
              title: "Smart Estimator",
              description: "Adjust return rates and time periods to see how they impact your wealth.",
              icon: Zap
            },
            {
              title: "Privacy First",
              description: "Your financial calculations never leave your browser for maximum security.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <MutualFundCalculatorClient />
    </ToolLayout>
  );
}
