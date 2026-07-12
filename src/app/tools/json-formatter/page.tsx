import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";
import { ToolFooter } from '@/components/ui/ToolFooter';
import { Braces, ShieldCheck } from 'lucide-react';

const JsonFormatterClient = dynamic(
  () => import('@/components/tools/JsonFormatterClient').then(mod => mod.JsonFormatterClient),
  { loading: () => <div className="h-[560px] w-full animate-pulse bg-muted rounded-2xl" /> }
);

const m = TOOL_METADATA["json-formatter"];

export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout
      toolSlug="json-formatter"
      canonicalUrl="/tools/json-formatter"
      title={m.toolTitle}
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter
          blocks={[
            {
              title: "Format, Validate & Minify",
              description: "Instantly beautify messy JSON for readability, minify it to save bandwidth, or validate it to catch syntax errors before they hit production.",
              icon: Braces,
            },
            {
              title: "100% Private — Runs in Your Browser",
              description: "Your JSON data never leaves your device. All processing happens locally using pure JavaScript, with zero server uploads.",
              icon: ShieldCheck,
            },
          ]}
        />
      }
    >
      <JsonFormatterClient />
    </ToolLayout>
  );
}
