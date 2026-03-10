import type { Metadata } from 'next';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { PngToJpgClient } from '@/components/tools/PngToJpgClient';

export const metadata: Metadata = {
  title: 'PNG to JPG – Edit',
  description: 'Convert transparent PNGs to JPG.',
  alternates: { canonical: '/tools/png-to-jpg' },
};

export default function Page() {
  return (
    <ToolLayout title="PNG to JPG" description="Convert transparent PNGs to JPG.">
      <PngToJpgClient />
    </ToolLayout>
  );
}
