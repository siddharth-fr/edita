import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const PdfToWordClient = dynamic(() => import('@/components/tools/PdfToWordClient').then(mod => mod.PdfToWordClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { FileText, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["pdf-to-word"];
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout 
      toolSlug="pdf-to-word"
      canonicalUrl={"/tools/pdf-to-word"} 
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Accurate PDF to Word Conversion",
              description: "Converting PDFs to editable Word documents can often result in messy formatting. Our tool uses advanced extraction logic to preserve document layout, fonts, and tables as accurately as possible.",
              icon: FileText
            },
            {
              title: "Your Privacy Matters",
              description: "We know your documents contain sensitive information. That's why Edita performs the entire conversion locally in your browser. Your files are never uploaded to our servers or stored in the cloud.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <PdfToWordClient />
    </ToolLayout>
  );
}
