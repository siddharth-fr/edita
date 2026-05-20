import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const ImageConverter = dynamic(() => import('@/components/tools/ImageConverter').then(mod => mod.ImageConverter), {
  loading: () => <div className="h-100 w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { ImageIcon, ShieldCheck } from 'lucide-react';

const TOOL_ID = "avif-to-jpg";
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
      toolSlug="avif-to-jpg"
      canonicalUrl={"/tools/avif-to-jpg"} 
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "AVIF to JPG for Easy Sharing",
              description: "Convert highly compressed AVIF images to standard JPGs for easy sharing on social media and older platforms.",
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
      <ImageConverter initialInputFormat="avif" initialOutputFormat="jpg" />
    </ToolLayout>
  );
}
