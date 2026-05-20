import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const DifferentiationClient = dynamic(() => import('@/components/tools/DifferentiationClient').then(mod => ({ default: mod.DifferentiationClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Variable, ShieldCheck } from 'lucide-react';

const TOOL_ID = "differentiation-calculator";
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
              title: "Symbolic Differentiation",
              description: "Calculate derivatives for polynomials, trig functions, and more using our advanced mathematical engine.",
              icon: Variable
            },
            {
              title: "Privacy Focused",
              description: "Calculations happen in your browser memory. We don't store or see your mathematical expressions.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <DifferentiationClient />
    </ToolLayout>
  );
}