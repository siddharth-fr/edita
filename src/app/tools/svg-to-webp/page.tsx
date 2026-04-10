import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const ImageConverter = dynamic(() => import('@/components/tools/ImageConverter').then(mod => mod.ImageConverter), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { ImageIcon, ShieldCheck } from 'lucide-react';

const TOOL_ID = "svg-to-webp";
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
      toolSlug="svg-to-webp"
      canonicalUrl={"/tools/svg-to-webp"} 
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "SVG to Modern WebP",
              description: "Modernize your vector assets by converting them to the WebP format, offering great compression for the web.",
              icon: ImageIcon
            },
            {
              title: "Privacy-First Image Conversion",
              description: "Edita processes all images locally in your browser. Your private photos never leave your device, ensuring 100% privacy and security with zero server uploads.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <ImageConverter initialInputFormat="svg" initialOutputFormat="webp" />
    </ToolLayout>
  );
}
