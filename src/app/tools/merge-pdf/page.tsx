import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
const MergePdfClient = dynamic(() => import('./MergePdfClient'), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata: Metadata = {
    title: 'Merge PDF – Edita',
    description: 'Combine multiple PDFs into a single file quickly and securely in your browser.',
    alternates: {
        canonical: '/tools/merge-pdf',
    },
};

export default function MergePdfPage() {
    return <MergePdfClient />;
}
