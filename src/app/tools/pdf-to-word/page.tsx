import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const PdfToWordClient = dynamic(() => import('@/components/tools/PdfToWordClient').then(mod => mod.PdfToWordClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      footerContent={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Accurate PDF to Word Conversion</h2>
            <p>
              Converting PDFs to editable Word documents can often result in messy 
              formatting. Our tool uses advanced extraction logic to preserve 
              document layout, fonts, and tables as accurately as possible.
            </p>
            <p>
              Whether it&apos;s a simple text document or a complex report, Edita 
              helps you get back to editing in Microsoft Word without the 
              hassle of retyping.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Your Privacy Matters</h2>
            <p>
              We know your documents contain sensitive information. That&apos;s why 
              Edita performs the entire PDF to Word conversion locally in your 
              browser. Your files are never uploaded to our servers or stored 
              anywhere in the cloud.
            </p>
            <p>
              Enjoy a dedicated, private workspace for all your document 
              conversion needs—free, fast, and 100% secure.
            </p>
          </div>
        </div>
      }
    >
      <PdfToWordClient />
    </ToolLayout>
  );
}
