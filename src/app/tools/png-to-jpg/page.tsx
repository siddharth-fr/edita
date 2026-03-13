import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
const PngToJpgClient = dynamic(() => import('@/components/tools/PngToJpgClient').then(mod => mod.PngToJpgClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata: Metadata = {
  title: 'PNG to JPG – Edita',
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
