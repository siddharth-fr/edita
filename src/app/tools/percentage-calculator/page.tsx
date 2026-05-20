import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const PercentageCalculatorClient = dynamic(() => import('@/components/tools/PercentageCalculatorClient').then(mod => ({ default: mod.PercentageCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Percent, ShieldCheck } from 'lucide-react';

const TOOL_ID = "percentage-calculator";
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
              title: "Quick Percentages",
              description: "Easily handle discounts, markups, and percentage differences for shopping and finance.",
              icon: Percent
            },
            {
              title: "100% Secure",
              description: "Financial calculations are processed locally. Your values never touch any server.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <PercentageCalculatorClient />
    </ToolLayout>
  );
}