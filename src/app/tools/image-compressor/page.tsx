import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
const ImageCompressorClient = dynamic(() => import('@/components/tools/ImageCompressorClient').then(mod => mod.ImageCompressorClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata: Metadata = {
  title: 'Image Compressor – Edita',
  description: 'Compress JPG, PNG, and WebP images.',
  alternates: { canonical: '/tools/image-compressor' },
};

export default function Page() {
  return (
    <ToolLayout title="Image Compressor" description="Compress JPG, PNG, and WebP images.">
      <ImageCompressorClient />
    </ToolLayout>
  );
}
