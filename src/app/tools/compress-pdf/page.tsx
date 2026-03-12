import type { Metadata } from 'next';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { CompressPdfClient } from '@/components/tools/CompressPdfClient';

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
