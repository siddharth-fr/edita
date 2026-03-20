import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const WordToPdfClient = dynamic(() => import('@/components/tools/WordToPdfClient').then(mod => mod.WordToPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Professional Word to PDF Converter</h2>
            <p>
              Sharing Word documents can sometimes lead to formatting issues when 
              viewed on different devices. Converting your .doc or .docx files 
              to PDF ensures that your document looks exactly as you intended, 
              no matter where it&apos;s opened.
            </p>
            <p>
              Edita provides a high-quality conversion engine that respects 
              margins, fonts, and images, giving you professional results 
              every time.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Secure & Locally Processed</h2>
            <p>
              Most online converters require you to upload your files to their 
              servers. Edita changes the game by processing your Word documents 
              locally in your browser. This means your private files stay private.
            </p>
            <p>
              Our tool is fast, free, and does not require any account creation. 
              Your documents are processed instantly, and the results are 
              available for download in seconds.
            </p>
          </div>
        </div>
      }
    >
      <WordToPdfClient />
    </ToolLayout>
  );
}
