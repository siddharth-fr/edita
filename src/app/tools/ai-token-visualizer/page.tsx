import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";
import { ToolFooter } from '@/components/ui/ToolFooter';
import { Cpu, Zap } from 'lucide-react';

const AiTokenVisualizerClient = dynamic(() => import('@/components/tools/AiTokenVisualizerClient').then(mod => mod.AiTokenVisualizerClient), {
  loading: () => <div className="h-[500px] w-full animate-pulse bg-muted rounded-xl" />
});

const m = TOOL_METADATA["ai-token-visualizer"];

export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout 
      toolSlug="ai-token-visualizer"
      canonicalUrl={"/tools/ai-token-visualizer"} 
      title={m.toolTitle || "AI Token Visualizer"} 
      description={m.toolDescription || "Estimate token counts for popular AI models based on your prompts."}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Multiple Models Supported",
              description: "Visualize token limits and consumption for ChatGPT, Claude, and Gemini in real-time.",
              icon: Cpu
            },
            {
              title: "Instant Estimation",
              description: "No APIs required. Uses fast heuristic calculations right in your browser to help you optimize prompts.",
              icon: Zap
            }
          ]}
        />
      }
    >
      <AiTokenVisualizerClient />
    </ToolLayout>
  );
}
