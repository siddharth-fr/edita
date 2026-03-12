import type { Metadata } from 'next';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { PdfToJpgClient } from '@/components/tools/PdfToJpgClient';

export const metadata: Metadata = {
  title: 'PDF to JPG – Edita',
  description: 'Extract images from your PDFs.',
  alternates: { canonical: '/tools/pdf-to-jpg' },
};

export default function Page() {
  return (
    <ToolLayout title="PDF to JPG" description="Extract images from your PDFs.">
      <PdfToJpgClient />
    </ToolLayout>
  );
}
