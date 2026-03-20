import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const PdfToJpgClient = dynamic(() => import('@/components/tools/PdfToJpgClient').then(mod => mod.PdfToJpgClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Maximize2, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["pdf-to-jpg"];
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
              title: "Extract High-Quality JPGs from PDF",
              description: "Turn your PDF presentations or documents into high-resolution JPG images. Edita ensures that every extracted page maintains its original clarity—perfect for social media, presentations, or quick sharing.",
              icon: Maximize2
            },
            {
              title: "Secure & Locally Processed",
              description: "Your document privacy is paramount. Edita extracts images from your PDFs directly in your web browser. No cloud uploads, no software downloads—just fast, free, and secure extraction.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <PdfToJpgClient />
    </ToolLayout>
  );
}
