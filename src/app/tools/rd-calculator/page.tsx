import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const RDCalculatorClient = dynamic(() => import('@/components/tools/RDCalculatorClient').then(mod => ({ default: mod.RDCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Repeat, ShieldCheck, PieChart } from 'lucide-react';

const TOOL_ID = "rd-calculator";
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
              title: "Disciplined Savings",
              description: "Calculate how small monthly deposits grow into a significant corpus with steady interest.",
              icon: Repeat
            },
            {
              title: "Accurate Interest",
              description: "Calculates interest based on quarterly compounding, mapping directly to typical bank RD modules.",
              icon: PieChart
            },
            {
              title: "Local Execution",
              description: "All calculations are performed on gadget. No data is stored or transmitted.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <RDCalculatorClient />
    </ToolLayout>
  );
}
