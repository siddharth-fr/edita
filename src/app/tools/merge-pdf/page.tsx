import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const MergePdfClient = dynamic(() => import('./MergePdfClient'), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

const m = TOOL_METADATA["merge-pdf"];
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function MergePdfPage() {
  return (
    <ToolLayout 
      title={m.toolTitle}
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      footerContent={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Why Merge PDF Files?</h2>
            <p>
              Combining multiple PDF documents into a single file makes it much easier to 
              organize, share, and archive your work. Instead of sending five separate 
              attachments, you can send one professional, unified document.
            </p>
            <p>
              Perfect for combining reports, merging legal documents, or grouping 
              assignment pages. Edita makes the process simple, fast, and entirely free.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">100% Private & Browser-Based</h2>
            <p>
              Your security is our priority. Unlike other online PDF mergers, Edita 
              processes your files locally in your web browser. This means your 
              private documents never leave your computer and are never uploaded 
              to any third-party server.
            </p>
            <p>
              Experience lightning-fast merging speeds without the privacy risks 
              associated with cloud-based tools.
            </p>
          </div>
        </div>
      }
    >
      <MergePdfClient />
    </ToolLayout>
  );
}
