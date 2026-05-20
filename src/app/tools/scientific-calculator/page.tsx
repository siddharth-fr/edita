import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const ScientificCalculatorClient = dynamic(() => import('@/components/tools/ScientificCalculatorClient').then(mod => ({ default: mod.ScientificCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Calculator, ShieldCheck } from 'lucide-react';

const TOOL_ID = "scientific-calculator";
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
              title: "Scientific Precision",
              description: "Perform complex calculations with trigonometric, logarithmic, and exponential functions.",
              icon: Calculator
            },
            {
              title: "100% Private",
              description: "All calculations are done in your browser. No data is sent to any server.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <ScientificCalculatorClient />
    </ToolLayout>
  );
}