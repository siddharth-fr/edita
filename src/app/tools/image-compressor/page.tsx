import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const ImageCompressorClient = dynamic(() => import('@/components/tools/ImageCompressorClient').then(mod => mod.ImageCompressorClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "Image Compressor - Compress JPG, PNG & WebP Online",
  description: "Compress JPG, PNG and WebP images online for free. Reduce image file size quickly while keeping high quality. Fast browser-based compression. No upload to server required.",
  canonical: "/tools/image-compressor",
  keywords: ["image compressor", "compress images online", "reduce image size", "compress jpg", "compress png", "webp compressor", "free image compressor"],
});

export default function Page() {
  return (
    <ToolLayout
      title="Image Compressor"
      description="Compress JPG, PNG and WebP images online to reduce file size while preserving quality."
      howItWorksSteps={[
        {
          title: "Upload",
          desc: "Select the image file you want to optimize from your device."
        },
        {
          title: "Compress",
          desc: "Our engine reduces the file size instantly while maintaining quality."
        },
        {
          title: "Download",
          desc: "Save your optimized image directly to your folder in seconds."
        }
      ]}
    >
      <ImageCompressorClient />
    </ToolLayout>
  );
}
