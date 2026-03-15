import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const CompressPdfClient = dynamic(() => import('@/components/tools/CompressPdfClient').then(mod => mod.CompressPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "Compress PDF Online Free – Edita.tools",
  description: "Reduce PDF file size online without losing quality. Our free browser-based tool allows you to compress PDF files securely on your device. No signup needed.",
  canonical: "/tools/compress-pdf",
  keywords: ["compress pdf", "reduce pdf size", "shrink pdf online", "free pdf compressor", "private pdf compression"],
});

export default function Page() {
  return (
    <ToolLayout title="Compress PDF" description="Reduce the file size of your PDFs.">
      <CompressPdfClient />
    </ToolLayout>
  );
}
