import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const CompoundInterestClient = dynamic(() => import('@/components/tools/CompoundInterestClient').then(mod => ({ default: mod.CompoundInterestClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { TrendingUp, Calculator, ShieldCheck } from 'lucide-react';

const TOOL_ID = "compound-interest-calculator";
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
              title: "Power of Compounding",
              description: "See how interest on interest can exponentially grow your wealth over time.",
              icon: TrendingUp
            },
            {
              title: "Precise Growth",
              description: "Calculate with different compounding frequencies to see the impact on your final value.",
              icon: Calculator
            },
            {
              title: "Privacy First",
              description: "All financial data stays in your browser. We don't track your investments.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <CompoundInterestClient />
    </ToolLayout>
  );
}
