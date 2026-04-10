import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const JpgToPdfClient = dynamic(() => import('@/components/tools/JpgToPdfClient').then(mod => mod.JpgToPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { ImageIcon, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["jpg-to-pdf"];
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout 
      toolSlug="jpg-to-pdf"
      canonicalUrl={"/tools/jpg-to-pdf"} 
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Convert Images to Professional PDFs",
              description: "Whether you need to combine several photos into a single report or convert a scanned document into a PDF, our tool handles it all. Upload multiple images, arrange them, and create a high-quality PDF in seconds.",
              icon: ImageIcon
            },
            {
              title: "Private & Local Processing",
              description: "Security is built-in. Your images are processed entirely within your browser—no files are ever sent to a server. Experience the speed and safety of local processing, free and private.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <JpgToPdfClient />
    </ToolLayout>
  );
}
