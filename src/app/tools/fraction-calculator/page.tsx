import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const FractionCalculatorClient = dynamic(() => import('@/components/tools/FractionCalculatorClient').then(mod => ({ default: mod.FractionCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Divide, ShieldCheck } from 'lucide-react';

const TOOL_ID = "fraction-calculator";
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
              title: "Simplify Fractions",
              description: "Add, subtract, multiply, and divide fractions. Supports mixed numbers and improper fractions.",
              icon: Divide
            },
            {
              title: "Local Computing",
              description: "Fractions are simplified locally using math logic. Fast and private.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <FractionCalculatorClient />
    </ToolLayout>
  );
}