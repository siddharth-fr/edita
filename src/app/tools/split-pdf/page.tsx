import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const SplitPdfClient = dynamic(() => import('@/components/tools/SplitPdfClient').then(mod => mod.SplitPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "Split PDF Online Free – Edita.tools",
  description: "Extract specific pages or split your PDF into multiple files online. Secure browser-based PDF splitting. No signup, no uploads, 100% private.",
  canonical: "/tools/split-pdf",
  keywords: ["split pdf", "extract pdf pages", "free pdf splitter", "online pdf tool", "secure pdf processing"],
});

export default function Page() {
  return (
    <ToolLayout title="Split PDF" description="Extract pages from your PDFs.">
      <SplitPdfClient />
    </ToolLayout>
  );
}
