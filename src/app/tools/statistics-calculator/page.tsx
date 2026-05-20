import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const StatisticsCalculatorClient = dynamic(() => import('@/components/tools/StatisticsCalculatorClient').then(mod => ({ default: mod.StatisticsCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { BarChart3, ShieldCheck } from 'lucide-react';

const TOOL_ID = "statistics-calculator";
const m = TOOL_METADATA[TOOL_ID as keyof typeof TOOL_METADATA];

export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout 
      toolSlug={TOOL_ID}
      canonicalUrl={"/tools/" + TOOL_ID} 
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Data Analysis",
              description: "Calculate mean, median, mode, variance, and standard deviation for any dataset instantly.",
              icon: BarChart3
            },
            {
              title: "Private & Faster",
              description: "Statistical analysis is performed locally. High performance with zero data upload.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <StatisticsCalculatorClient />
    </ToolLayout>
  );
}