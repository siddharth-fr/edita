import dynamic from 'next/dynamic';
import { constructMetadata } from "@/lib/metadata";

const MergePdfClient = dynamic(() => import('./MergePdfClient'), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "Merge PDF Online Free – Editor.tools",
  description: "Combine multiple PDF files into one document online. Fast, secure, and entirely in your browser. No signup needed. 100% private PDF merger.",
  canonical: "/tools/merge-pdf",
  keywords: ["merge pdf", "combine pdf files", "pdf joiner free", "online pdf merger", "secure pdf tools"],
});

export default function MergePdfPage() {
    return <MergePdfClient />;
}
