import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const MatrixCalculatorClient = dynamic(() => import('@/components/tools/MatrixCalculatorClient').then(mod => ({ default: mod.MatrixCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Grid, ShieldCheck } from 'lucide-react';

const TOOL_ID = "matrix-calculator";
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
              title: "Linear Algebra Tool",
              description: "Perform matrix addition, multiplication, and find determinants or inverses effortlessly.",
              icon: Grid
            },
            {
              title: "Privately Calculated",
              description: "Matrix operations are handled by math.js locally in your browser environment.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <MatrixCalculatorClient />
    </ToolLayout>
  );
}