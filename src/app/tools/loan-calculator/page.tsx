import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const LoanCalculatorClient = dynamic(() => import('@/components/tools/LoanCalculatorClient').then(mod => ({ default: mod.LoanCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Wallet, ShieldCheck } from 'lucide-react';

const TOOL_ID = "loan-calculator";
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
              title: "EMI Estimation",
              description: "Calculate your monthly loan payments, total interest, and final repayment amount accurately.",
              icon: Wallet
            },
            {
              title: "Strict Privacy",
              description: "Financial planning is sensitive. Our tool runs strictly in your browser—no logs, no data uploads.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <LoanCalculatorClient />
    </ToolLayout>
  );
}