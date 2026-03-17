import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const CompressPdfClient = dynamic(() => import('@/components/tools/CompressPdfClient').then(mod => mod.CompressPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "Compress PDF Online – Reduce PDF File Size Free | Edita",
  description: "Compress PDF files online for free. Reduce PDF size while maintaining high quality. Fast browser-based compression with private, local processing.",
  canonical: "/tools/compress-pdf",
  keywords: ["compress pdf", "reduce pdf size", "shrink pdf online", "free pdf compressor", "pdf optimizer"],
});

export default function Page() {
  return (
    <ToolLayout 
      title="Compress PDF" 
      description="Reduce PDF file size quickly in your browser while preserving document quality."
      howItWorksSteps={[
        {
          title: "Upload PDF",
          desc: "Select the PDF file you want to compress from your computer or device."
        },
        {
          title: "Compress Online",
          desc: "Our engine optimizes the file size instantly without uploading to any server."
        },
        {
          title: "Save Result",
          desc: "Download your compressed PDF with reduced file size in just seconds."
        }
      ]}
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
               Whether it's for school applications, legal filings, or business reports, 
               our tool helps you shrink PDFs to the optimal size.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">High Quality, Private Processing</h2>
            <p>
              We prioritize your document's quality. Our compression engine focuses on 
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
