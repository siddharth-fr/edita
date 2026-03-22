import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const ImageColorPalette = dynamic(() => import('@/components/tools/ImageColorPalette').then(mod => mod.ImageColorPalette), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Palette, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["image-color-palette-generator"];
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
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Precise Color Extraction",
              description: "Our advanced algorithm analyzes your images to find the most dominant and aesthetically pleasing colors. Perfect for creating brand palettes or finding inspiration.",
              icon: Palette
            },
            {
              title: "100% Client-Side",
              description: "Edita processes your images entirely in your browser. We never upload your photos to our servers, keeping your creative assets and privacy completely safe.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <ImageColorPalette />
    </ToolLayout>
  );
}
