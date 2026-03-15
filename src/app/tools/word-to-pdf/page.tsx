import dynamic from 'next/dynamic';
import { constructMetadata } from "@/lib/metadata";

const ToolLayout = dynamic(() => import('@/components/layout/ToolLayout').then(mod => mod.ToolLayout), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});
const WordToPdfClient = dynamic(() => import('@/components/tools/WordToPdfClient').then(mod => mod.WordToPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});


export const metadata = constructMetadata({
  title: "Word to PDF Online Free – Edita.tools",
  description: "Convert Word documents (.docx, .doc) to PDF formatting online for free. Secure browser-based conversion with zero uploads to servers. Fast and private.",
  canonical: "/tools/word-to-pdf",
  keywords: ["word to pdf", "convert docx to pdf", "free word to pdf converter", "secure doc conversion"],
});

export default function Page() {
  return (
    <ToolLayout title="Word to PDF" description="Convert Word documents to PDF formatting.">
      <WordToPdfClient />
    </ToolLayout>
  );
}
