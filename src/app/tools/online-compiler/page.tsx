import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";
import { ToolFooter } from '@/components/ui/ToolFooter';
import { Code2, Zap } from 'lucide-react';

const OnlineCompilerClient = dynamic(() => import('@/components/tools/OnlineCompilerClient').then(mod => mod.OnlineCompilerClient), {
  loading: () => <div className="h-[600px] w-full animate-pulse bg-muted rounded-xl" />
});

const m = TOOL_METADATA["online-compiler"];

export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout 
      toolSlug="online-compiler"
      canonicalUrl={"/tools/online-compiler"} 
      title={m.toolTitle || "Online Compiler"} 
      description={m.toolDescription || "Write, compile, and run your code instantly in your browser."}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Multiple Languages Supported",
              description: "Write and run code in popular languages including Python, Java, C, and C++. Perfect for practicing algorithms, testing snippets, or learning a new language.",
              icon: Code2
            },
            {
              title: "Lightning Fast Execution",
              description: "Our cloud infrastructure compiles and runs your code instantly. See the output of your programs without having to set up a local development environment.",
              icon: Zap
            }
          ]}
        />
      }
    >
    <OnlineCompilerClient />
    </ToolLayout>
  );
}
