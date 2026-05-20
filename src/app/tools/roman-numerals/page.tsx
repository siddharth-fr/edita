import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const RomanNumeralConverterClient = dynamic(() => import('@/components/tools/RomanNumeralConverterClient').then(mod => ({ default: mod.RomanNumeralConverterClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Hash, ShieldCheck } from 'lucide-react';

const TOOL_ID = "roman-numerals";
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
              title: "Ancient Translation",
              description: "Convert modern Arabic numerals to Roman numerals and back with historical accuracy.",
              icon: Hash
            },
            {
              title: "100% Client-Side",
              description: "Translation is handled locally in your browser. No data is sent to the cloud.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <RomanNumeralConverterClient />
    </ToolLayout>
  );
}