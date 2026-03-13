import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
const PdfToJpgClient = dynamic(() => import('@/components/tools/PdfToJpgClient').then(mod => mod.PdfToJpgClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
