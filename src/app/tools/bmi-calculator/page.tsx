import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const BMICalculatorClient = dynamic(() => import('@/components/tools/BMICalculatorClient').then(mod => ({ default: mod.BMICalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Activity, ShieldCheck } from 'lucide-react';

const TOOL_ID = "bmi-calculator";
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
              title: "Health Metrics",
              description: "Quickly determine your Body Mass Index and understand your health classification.",
              icon: Activity
            },
            {
              title: "Privacy First",
              description: "Your health data never leaves your browser. No cookies, no trackers, just privacy.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <BMICalculatorClient />
    </ToolLayout>
  );
}