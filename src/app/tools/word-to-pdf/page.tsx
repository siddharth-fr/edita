import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const WordToPdfClient = dynamic(() => import('@/components/tools/WordToPdfClient').then(mod => mod.WordToPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Layout, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["word-to-pdf"];
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
        <ToolFooter 
          blocks={[
            {
              title: "Professional Word to PDF Converter",
              description: "Converting your Word documents to PDF ensures that your layout looks exactly as intended across all devices. Edita provides a high-quality conversion engine that respects margins, fonts, and images.",
              icon: Layout
            },
            {
              title: "Secure & Locally Processed",
              description: "Most online converters require cloud uploads. Edita processes your Word documents locally in your browser, keeping your private files truly private. Fast, free, and no account required.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <WordToPdfClient />
    </ToolLayout>
  );
}
