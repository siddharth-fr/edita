import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const LogarithmClient = dynamic(() => import('@/components/tools/LogarithmClient').then(mod => ({ default: mod.LogarithmClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Binary, ShieldCheck } from 'lucide-react';

const TOOL_ID = "logarithm-calculator";
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
              title: "Logarithms for Any Base",
              description: "Quickly calculate natural (ln), common (log10), and custom base logarithms for any positive number.",
              icon: Binary
            },
            {
              title: "Private & Fast",
              description: "Instant results calculated right in your browser. No data ever leaves your computer.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <LogarithmClient />
    </ToolLayout>
  );
}