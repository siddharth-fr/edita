import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const ImageCompressorClient = dynamic(() => import('@/components/tools/ImageCompressorClient').then(mod => mod.ImageCompressorClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Why Compress Images Online?</h2>
            <p>
              High-resolution images can significantly slow down website loading times 
              and take up valuable storage space. Our image compressor helps you 
              reduce file sizes for JPG, PNG, and WebP images without compromising 
              visual quality.
            </p>
            <p>
              Faster loading websites rank better on Google and provide a superior 
              user experience. Edita makes image optimization effortless.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Privacy-First Compression</h2>
            <p>
              Most online image compressors upload your photos to their servers. 
              Edita is different. All image processing happens locally in your 
              browser using efficient client-side compression libraries.
            </p>
            <p>
              Your images never leave your computer, ensuring absolute privacy for 
              your personal photos and professional assets. It&apos;s fast, secure, 
              and works directly in your web browser.
            </p>
          </div>
        </div>
      }
    >
      <ImageCompressorClient />
    </ToolLayout>
  );
}
