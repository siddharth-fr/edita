import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
const ToolLayout = dynamic(() => import('@/components/layout/ToolLayout').then(mod => mod.ToolLayout), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});
const WordToPdfClient = dynamic(() => import('@/components/tools/WordToPdfClient').then(mod => mod.WordToPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});


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
