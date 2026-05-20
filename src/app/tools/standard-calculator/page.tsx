import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const StandardCalculatorClient = dynamic(() => import('@/components/tools/StandardCalculatorClient').then(mod => ({ default: mod.StandardCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Calculator, ShieldCheck } from 'lucide-react';

const TOOL_ID = "standard-calculator";
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
              title: "Basic Math Made Easy",
              description: "Perform your daily calculations quickly with our streamlined interface. Designed for speed and accuracy.",
              icon: Calculator
            },
            {
              title: "100% Private Calculation",
              description: "All calculations are performed locally in your browser. Your data never leaves your device.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <StandardCalculatorClient />
    </ToolLayout>
  );
}