import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const SalesTaxCalculatorClient = dynamic(() => import('@/components/tools/SalesTaxCalculatorClient').then(mod => ({ default: mod.SalesTaxCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Receipt, ShieldCheck } from 'lucide-react';

const TOOL_ID = "sales-tax-calculator";
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
              title: "Tax Transparency",
              description: "Calculate gross totals and tax collected for any net amount with custom tax rates.",
              icon: Receipt
            },
            {
              title: "Offline Capable",
              description: "Perform your commercial calculations privately and quickly on any device.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <SalesTaxCalculatorClient />
    </ToolLayout>
  );
}