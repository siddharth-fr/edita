import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const RandomGeneratorClient = dynamic(() => import('@/components/tools/RandomGeneratorClient').then(mod => ({ default: mod.RandomGeneratorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Shuffle, ShieldCheck } from 'lucide-react';

const TOOL_ID = "random-generator";
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
              title: "True Randomness",
              description: "Generate unbiased random numbers for games, research, or decisions using robust PRNGs.",
              icon: Shuffle
            },
            {
              title: "No Tracking",
              description: "Your generated sequences are random and private. We don't log your results.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <RandomGeneratorClient />
    </ToolLayout>
  );
}