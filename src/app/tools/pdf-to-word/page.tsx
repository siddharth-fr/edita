import type { Metadata } from 'next';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { PdfToWordClient } from '@/components/tools/PdfToWordClient';

export const metadata: Metadata = {
  title: 'PDF to Word – Edit',
  description: 'Convert PDFs to editable Word documents.',
  alternates: { canonical: '/tools/pdf-to-word' },
};

export default function Page() {
  return (
    <ToolLayout title="PDF to Word" description="Convert PDFs to editable Word documents.">
      <PdfToWordClient />
    </ToolLayout>
  );
}
