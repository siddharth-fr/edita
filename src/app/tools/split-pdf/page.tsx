import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const SplitPdfClient = dynamic(() => import('@/components/tools/SplitPdfClient').then(mod => mod.SplitPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Scissors, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["split-pdf"];
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout 
      title={m.toolTitle}
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Why Split PDF Documents?",
              description: "Often, you only need a specific section of a large PDF file. Splitting allows you to extract just the relevant pages, making it easier to share, upload, or manage specific document parts.",
              icon: Scissors
            },
            {
              title: "Secure & Locally Processed",
              description: "Unlike other tools, Edita splits your PDFs directly in your web browser. This means your sensitive documents are never uploaded to a server, giving you 100% privacy and lightning-fast speed.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <SplitPdfClient />
    </ToolLayout>
  );
}
