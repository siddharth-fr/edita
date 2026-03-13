import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
const SplitPdfClient = dynamic(() => import('@/components/tools/SplitPdfClient').then(mod => mod.SplitPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata: Metadata = {
  title: 'Split PDF – Edita',
  description: 'Extract pages from your PDFs.',
  alternates: { canonical: '/tools/split-pdf' },
};

export default function Page() {
  return (
    <ToolLayout title="Split PDF" description="Extract pages from your PDFs.">
      <SplitPdfClient />
    </ToolLayout>
  );
}
