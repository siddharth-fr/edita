import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const FDCalculatorClient = dynamic(() => import('@/components/tools/FDCalculatorClient').then(mod => ({ default: mod.FDCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Landmark, ShieldCheck, History } from 'lucide-react';

const TOOL_ID = "fd-calculator";
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
              title: "Fixed Returns",
              description: "Calculate exactly what you will get at the end of your fixed deposit tenure.",
              icon: Landmark
            },
            {
              title: "Safe Planning",
              description: "Estimate interest based on quarterly compounding standards used by most banks.",
              icon: History
            },
            {
              title: "Privacy Guaranteed",
              description: "EDITA does not store your deposit amounts. All logic runs in your browser.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <FDCalculatorClient />
    </ToolLayout>
  );
}
