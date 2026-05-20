import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const UnitConverterClient = dynamic(() => import('@/components/tools/UnitConverterClient').then(mod => ({ default: mod.UnitConverterClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Ruler, ShieldCheck } from 'lucide-react';

const TOOL_ID = "unit-converter";
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
              title: "Global Standards",
              description: "Convert between metric, imperial, and other systems across length, mass, and temperature.",
              icon: Ruler
            },
            {
              title: "Instant Conversion",
              description: "Results appear as you type. All conversions happen on your device.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <UnitConverterClient />
    </ToolLayout>
  );
}