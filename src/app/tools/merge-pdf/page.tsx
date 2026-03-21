import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const MergePdfClient = dynamic(() => import('./MergePdfClient'), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Files, ShieldCheck } from 'lucide-react';

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
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Why Merge PDF Files?",
              description: "Combining multiple PDF documents into a single file makes it much easier to organize, share, and archive your work. Instead of sending separate attachments, you can send one professional, unified document.",
              icon: Files
            },
            {
              title: "100% Private & Browser-Based",
              description: "Your security is our priority. Edita processes your files locally in your web browser. This means your private documents never leave your computer and are never uploaded to any server.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <MergePdfClient />
    </ToolLayout>
  );
}
