import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const QuadraticSolverClient = dynamic(() => import('@/components/tools/QuadraticSolverClient').then(mod => ({ default: mod.QuadraticSolverClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Sigma, ShieldCheck } from 'lucide-react';

const TOOL_ID = "quadratic-solver";
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
              title: "Roots & Discriminants",
              description: "Instantly find real and complex roots for any quadratic equation of the form ax² + bx + c.",
              icon: Sigma
            },
            {
              title: "Local Execution",
              description: "Equations are solved using local JS algorithms. Your math stays on your machine.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <QuadraticSolverClient />
    </ToolLayout>
  );
}