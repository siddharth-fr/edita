import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const PdfToWordClient = dynamic(() => import('@/components/tools/PdfToWordClient').then(mod => mod.PdfToWordClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "PDF to Word Online Free – Editor.tools",
  description: "Convert PDF documents to editable Microsoft Word files online. Secure browser-based conversion. No registration or email required. Purely local processing.",
  canonical: "/tools/pdf-to-word",
  keywords: ["pdf to word", "convert pdf to docx", "free pdf to word converter", "online pdf to word", "secure doc conversion"],
});

export default function Page() {
  return (
    <ToolLayout title="PDF to Word" description="Convert PDFs to editable Word documents.">
      <PdfToWordClient />
    </ToolLayout>
  );
}
