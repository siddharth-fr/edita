import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const PdfToJpgClient = dynamic(() => import('@/components/tools/PdfToJpgClient').then(mod => mod.PdfToJpgClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "PDF to JPG Online Free – Edita.tools",
  description: "Convert PDF pages to high-quality JPG images online. Fast, secure browser-based conversion. No software to install, no files uploaded to servers.",
  canonical: "/tools/pdf-to-jpg",
  keywords: ["pdf to jpg", "convert pdf to image", "pdf to jpeg free", "online pdf converter", "secure file tools"],
});

export default function Page() {
  return (
    <ToolLayout title="PDF to JPG" description="Extract images from your PDFs.">
      <PdfToJpgClient />
    </ToolLayout>
  );
}
