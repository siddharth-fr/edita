import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const JpgToPdfClient = dynamic(() => import('@/components/tools/JpgToPdfClient').then(mod => mod.JpgToPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

const m = TOOL_METADATA["jpg-to-pdf"];
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
            <h2 className="text-xl font-bold text-foreground">Convert Images to Professional PDFs</h2>
            <p>
              Whether you need to combine several photos into a single report or 
              convert a scanned document into a PDF, our tool handles it all. 
              Upload multiple images and arrange them in the exact order you 
              want for the final document.
            </p>
            <p>
              Edita supports common image formats and ensures high-quality PDF 
              output that's ready for sharing or printing.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Private & Local Processing</h2>
            <p>
              Security is built into every tool we create. Your images are 
              processed entirely within your browser using Client-side logic. 
              No images are ever sent to a server, ensuring 100% privacy 
              for your sensitive documents and photos.
            </p>
            <p>
              Experience the speed and safety of local file processing—free, 
              private, and works on any device with a modern web browser.
            </p>
          </div>
        </div>
      }
    >
      <JpgToPdfClient />
    </ToolLayout>
  );
}
