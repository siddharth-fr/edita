import dynamic from 'next/dynamic';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const PdfViewerClient = dynamic(() => import('./PdfViewerClient'), {
  loading: () => (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin" />
        <p className="text-sm font-medium text-[#475569]">Loading PDF Viewer...</p>
      </div>
    </div>
  ),
});

const m = TOOL_METADATA["pdf-viewer"];
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function PdfViewerPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen">
      <PdfViewerClient />
    </main>
  );
}