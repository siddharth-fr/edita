import type { Metadata } from 'next';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { WordToPdfClient } from '@/components/tools/WordToPdfClient';

export const metadata: Metadata = {
  title: 'Word to PDF – Edita',
  description: 'Convert Word documents to PDF formatting.',
  alternates: { canonical: '/tools/word-to-pdf' },
};

export default function Page() {
  return (
    <ToolLayout title="Word to PDF" description="Convert Word documents to PDF formatting.">
      <WordToPdfClient />
    </ToolLayout>
  );
}
