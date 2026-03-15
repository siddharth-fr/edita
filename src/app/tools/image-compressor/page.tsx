import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const ImageCompressorClient = dynamic(() => import('@/components/tools/ImageCompressorClient').then(mod => mod.ImageCompressorClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "Image Compressor Online Free – Edita.tools",
  description: "Compress JPG, PNG, and WebP images online without losing quality. Fast, free, and secure browser-based image compression. No upload to server required.",
  canonical: "/tools/image-compressor",
  keywords: ["compress image", "image optimizer", "shrink jpg", "reduce png size", "free image compressor"],
});

export default function Page() {
  return (
    <ToolLayout title="Image Compressor" description="Compress JPG, PNG, and WebP images.">
      <ImageCompressorClient />
    </ToolLayout>
  );
}
