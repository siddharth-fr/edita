import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
const JpgToPdfClient = dynamic(() => import('@/components/tools/JpgToPdfClient').then(mod => mod.JpgToPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
