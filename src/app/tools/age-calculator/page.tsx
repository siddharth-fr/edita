import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const AgeCalculatorClient = dynamic(() => import('@/components/tools/AgeCalculatorClient').then(mod => ({ default: mod.AgeCalculatorClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Calendar, ShieldCheck } from 'lucide-react';

const TOOL_ID = "age-calculator";
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
              title: "Precise Chronology",
              description: "Calculate exact age down to years, months, days, and hours automatically.",
              icon: Calendar
            },
            {
              title: "Safe Processing",
              description: "Dates are processed using local client-side time. We don't store your birthday.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <AgeCalculatorClient />
    </ToolLayout>
  );
}