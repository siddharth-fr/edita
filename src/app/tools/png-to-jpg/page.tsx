import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const PngToJpgClient = dynamic(() => import('@/components/tools/PngToJpgClient').then(mod => mod.PngToJpgClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Effortless PNG to JPG Conversion</h2>
            <p>
              PNG files are great for transparency but can be much larger than 
              JPGs. Our converter helps you transform your PNG images into 
              space-efficient JPG format while maintaining excellent visual 
              quality. Perfect for optimizing web images and reducing storage.
            </p>
            <p>
              Edita handles the conversion instantly, allowing you to quickly 
              get the file format you need for your project.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Privacy-First Image Conversion</h2>
            <p>
              Most online image converters upload your files to their servers. 
              Edita is different. All image processing happens locally in your 
              browser. Your private photos never leave your device, ensuring 
              absolute privacy and security.
            </p>
            <p>
              Enjoy the speed and safety of local browser-based tools—fast, 
              free, and 100% private.
            </p>
          </div>
        </div>
      }
    >
      <PngToJpgClient />
    </ToolLayout>
  );
}
