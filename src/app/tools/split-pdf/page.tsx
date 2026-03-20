import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const SplitPdfClient = dynamic(() => import('@/components/tools/SplitPdfClient').then(mod => mod.SplitPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Why Split PDF Documents?</h2>
            <p>
              Often, you only need a specific section of a large PDF file. Splitting allows 
              you to extract just the relevant pages, making it easier to share, upload, 
              or manage specific document parts.
            </p>
            <p>
               Whether you're extracting a single invoice from a monthly report or 
               separating chapters of an eBook, our tool makes it simple and fast.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Secure & Locally Processed</h2>
            <p>
              Unlike other tools, Edita splits your PDFs directly in your web browser. 
              This means your sensitive documents are never uploaded to a server, 
              giving you 100% privacy and lightning-fast speed.
            </p>
            <p>
              We use advanced browser-based technology to ensure your extracted PDF 
              maintains its original quality, resolution, and formatting.
            </p>
          </div>
        </div>
      }
    >
      <SplitPdfClient />
    </ToolLayout>
  );
}
