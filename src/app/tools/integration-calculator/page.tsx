import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const IntegrationClient = dynamic(() => import('@/components/tools/IntegrationClient').then(mod => ({ default: mod.IntegrationClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Sigma, ShieldCheck } from 'lucide-react';

const TOOL_ID = "integration-calculator";
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
              title: "Numerical Integration",
              description: "High-precision definite integral calculation using Simpson's Rule, suitable for complex functions.",
              icon: Sigma
            },
            {
              title: "Secure Processing",
              description: "Your math problems stay on your device. We use local WASM and JS for all computations.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <IntegrationClient />
    </ToolLayout>
  );
}