import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
const CompressPdfClient = dynamic(() => import('@/components/tools/CompressPdfClient').then(mod => mod.CompressPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata: Metadata = {
  title: 'Compress PDF – Edita',
  description: 'Reduce the file size of your PDFs.',
  alternates: { canonical: '/tools/compress-pdf' },
};

export default function Page() {
  return (
    <ToolLayout title="Compress PDF" description="Reduce the file size of your PDFs.">
      <CompressPdfClient />
    </ToolLayout>
  );
}
