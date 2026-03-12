import type { Metadata } from 'next';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { SplitPdfClient } from '@/components/tools/SplitPdfClient';

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
