import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const EquationSolverClient = dynamic(() => import('@/components/tools/EquationSolverClient').then(mod => ({ default: mod.EquationSolverClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Variable, ShieldCheck } from 'lucide-react';

const TOOL_ID = "equation-solver";
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
              title: "Solve for X",
              description: "Find roots and variable values for linear and algebraic equations instantly.",
              icon: Variable
            },
            {
              title: "Privacy First",
              description: "Your expressions are parsed and solved locally in your browser memory.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <EquationSolverClient />
    </ToolLayout>
  );
}