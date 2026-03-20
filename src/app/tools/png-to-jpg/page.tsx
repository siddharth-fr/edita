import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const PngToJpgClient = dynamic(() => import('@/components/tools/PngToJpgClient').then(mod => mod.PngToJpgClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { ImageIcon, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["png-to-jpg"];
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
              title: "Effortless PNG to JPG Conversion",
              description: "PNG files are great for transparency but can be much larger than JPGs. Our converter transforms your PNGs into space-efficient JPG format while maintaining visual quality. Perfect for web optimization.",
              icon: ImageIcon
            },
            {
              title: "Privacy-First Image Conversion",
              description: "Most online converters require cloud uploads. Edita is different. All processing happens locally in your browser. Your private photos never leave your device, ensuring absolute 100% privacy and security.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <PngToJpgClient />
    </ToolLayout>
  );
}
