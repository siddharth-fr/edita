import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const SIPCalculatorClient = dynamic(() => import('@/components/tools/SIPCalculatorClient').then(mod => ({ default: mod.SIPCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { TrendingUp, Calculator, ShieldCheck } from 'lucide-react';

const TOOL_ID = "sip-calculator";
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
              title: "Plan Your Wealth",
              description: "Visualize your long-term wealth creation with our SIP calculator. Adjust monthly savings and timeframes to see how small investments grow over time.",
              icon: TrendingUp
            },
            {
              title: "100% Private Calculation",
              description: "All financial calculations are performed locally in your browser. Your investment data is never sent to our servers or stored anywhere.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <SIPCalculatorClient />
    </ToolLayout>
  );
}