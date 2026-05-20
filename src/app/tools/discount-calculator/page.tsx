import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const DiscountCalculatorClient = dynamic(() => import('@/components/tools/DiscountCalculatorClient').then(mod => ({ default: mod.DiscountCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Tag, ShieldCheck } from 'lucide-react';

const TOOL_ID = "discount-calculator";
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
              title: "Savings Solver",
              description: "Quickly determine the final price and total savings for any sale or percentage discount.",
              icon: Tag
            },
            {
              title: "On-Device Processing",
              description: "Calculated instantly in your browser. Fast, private, and works wherever you are.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <DiscountCalculatorClient />
    </ToolLayout>
  );
}