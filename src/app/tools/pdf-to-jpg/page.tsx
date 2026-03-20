import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const PdfToJpgClient = dynamic(() => import('@/components/tools/PdfToJpgClient').then(mod => mod.PdfToJpgClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Extract High-Quality JPGs from PDF</h2>
            <p>
              Need to turn a PDF presentation into images or extract a specific 
              page as a photo? Our PDF to JPG converter ensures that every 
              extracted image maintains its original resolution and clarity. 
              Perfect for social media, presentations, or quick sharing.
            </p>
            <p>
              Edita handles the extraction process smoothly, providing you 
              with clean JPG files ready for any use case.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Secure & Locally Processed</h2>
            <p>
              Your document privacy is paramount. Unlike other online converters, 
              Edita extracts images from your PDFs directly in your web browser. 
              This means your sensitive documents never leave your computer, 
              giving you 100% privacy and peace of mind.
            </p>
            <p>
              Experience fast, free, and secure PDF image extraction without 
              any software downloads or cloud uploads.
            </p>
          </div>
        </div>
      }
    >
      <PdfToJpgClient />
    </ToolLayout>
  );
}
