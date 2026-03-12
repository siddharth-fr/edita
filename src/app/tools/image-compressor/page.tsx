import type { Metadata } from 'next';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { ImageCompressorClient } from '@/components/tools/ImageCompressorClient';

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
