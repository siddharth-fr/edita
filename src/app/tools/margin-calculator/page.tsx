import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const MarginCalculatorClient = dynamic(() => import('@/components/tools/MarginCalculatorClient').then(mod => ({ default: mod.MarginCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Percent, ShieldCheck } from 'lucide-react';

const TOOL_ID = "margin-calculator";
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
              title: "Business Profitability",
              description: "Analyze gross margins and markups to ensure your products are priced for success.",
              icon: Percent
            },
            {
              title: "Private Analysis",
              description: "Your business data is sensitive. That's why we calculate everything locally in your browser.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <MarginCalculatorClient />
    </ToolLayout>
  );
}