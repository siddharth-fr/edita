import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
const PdfToWordClient = dynamic(() => import('@/components/tools/PdfToWordClient').then(mod => mod.PdfToWordClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata: Metadata = {
  title: 'PDF to Word – Edita',
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
