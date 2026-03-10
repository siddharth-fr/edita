import type { Metadata } from 'next';
import MergePdfClient from './MergePdfClient';

export const metadata: Metadata = {
    title: 'Merge PDF – Edit',
    description: 'Combine multiple PDFs into a single file quickly and securely in your browser.',
    alternates: {
        canonical: '/tools/merge-pdf',
    },
};

export default function MergePdfPage() {
    return <MergePdfClient />;
}
