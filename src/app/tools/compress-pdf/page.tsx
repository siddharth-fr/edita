import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const CompressPdfClient = dynamic(() => import('@/components/tools/CompressPdfClient').then(mod => mod.CompressPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Layout, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["compress-pdf"];
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
              title: "Why Compress PDF Files?",
              description: "PDF files can often be too large for email attachments, web uploads, or storage. Reducing the file size makes it easier to share documents quickly without clogging inboxes or exceeding upload limits.",
              icon: Layout
            },
            {
              title: "High Quality, Private Processing",
              description: "We prioritize your document's quality. Our compression engine optimizes data streams locally in your browser via WASM—your files never leave your device, ensuring 100% security.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <CompressPdfClient />
    </ToolLayout>
  );
}
