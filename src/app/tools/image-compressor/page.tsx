import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const ImageCompressorClient = dynamic(() => import('@/components/tools/ImageCompressorClient').then(mod => mod.ImageCompressorClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Minimize2, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["image-compressor"];
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
              title: "Why Compress Images Online?",
              description: "High-resolution images can significantly slow down website loading times and take up valuable storage space. Our image compressor helps you reduce file sizes for JPG, PNG, and WebP images without compromising visual quality.",
              icon: Minimize2
            },
            {
              title: "Privacy-First Compression",
              description: "Most online tools upload your photos. Edita is different. All image processing happens locally in your browser using efficient client-side compression. Your images never leave your computer, ensuring absolute privacy.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <ImageCompressorClient />
    </ToolLayout>
  );
}
