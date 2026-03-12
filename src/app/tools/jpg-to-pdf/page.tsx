import type { Metadata } from 'next';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { JpgToPdfClient } from '@/components/tools/JpgToPdfClient';

export const metadata: Metadata = {
  title: 'JPG to PDF – Edita',
  description: 'Convert JPG images to a PDF document.',
  alternates: { canonical: '/tools/jpg-to-pdf' },
};

export default function Page() {
  return (
    <ToolLayout title="JPG to PDF" description="Convert JPG images to a PDF document.">
      <JpgToPdfClient />
    </ToolLayout>
  );
}
