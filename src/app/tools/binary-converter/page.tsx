import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const BinaryConverterClient = dynamic(() => import('@/components/tools/BinaryConverterClient').then(mod => ({ default: mod.BinaryConverterClient })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Cpu, ShieldCheck } from 'lucide-react';

const TOOL_ID = "binary-converter";
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
              title: "Base Conversion",
              description: "Translate values between Binary, Decimal, Hexadecimal, and Octal systems effortlessly.",
              icon: Cpu
            },
            {
              title: "Developer Ready",
              description: "Fast, accurate, and offline-capable conversion for programming and computer science.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <BinaryConverterClient />
    </ToolLayout>
  );
}