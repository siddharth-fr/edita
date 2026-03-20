import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const CompressPdfClient = dynamic(() => import('@/components/tools/CompressPdfClient').then(mod => mod.CompressPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Why Compress PDF Files?</h2>
            <p>
              PDF files can often be too large for email attachments, web uploads, or storage. 
              Reducing the file size makes it easier to share documents quickly without 
              clogging inboxes or exceeding upload limits.
            </p>
            <p>
               Whether it&apos;s for school applications, legal filings, or business reports, 
               our tool helps you shrink PDFs to the optimal size.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">High Quality, Private Processing</h2>
            <p>
              We prioritize your document&apos;s quality. Our compression engine focuses on 
              optimizing data streams and stripping unnecessary metadata, ensuring your 
              PDF remains clear and professional.
            </p>
            <p>
              Best of all, your privacy is guaranteed. All processing happens locally 
              in your browser via WASM—your files never leave your device, ensuring 
              100% security for sensitive documents.
            </p>
          </div>
        </div>
      }
    >
      <CompressPdfClient />
    </ToolLayout>
  );
}
