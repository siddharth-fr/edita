import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const ImageConverter = dynamic(() => import('@/components/tools/ImageConverter').then(mod => mod.ImageConverter), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { ImageIcon, ShieldCheck } from 'lucide-react';

const TOOL_ID = "jpg-to-png";
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
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "High-Quality JPG to PNG Conversion",
              description: "Convert your compressed JPG images back into high-quality PNG format. Ideal for preserving image details and preparing for future edits.",
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
      <ImageConverter initialInputFormat="jpg" initialOutputFormat="png" />
    </ToolLayout>
  );
}
