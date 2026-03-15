import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const JpgToPdfClient = dynamic(() => import('@/components/tools/JpgToPdfClient').then(mod => mod.JpgToPdfClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "JPG to PDF Online Free – Edita.tools",
  description: "Convert JPG images to PDF documents online for free. Secure browser-based conversion. No registration or software installation required.",
  canonical: "/tools/jpg-to-pdf",
  keywords: ["jpg to pdf", "convert image to pdf", "free jpg to pdf converter", "secure image conversion"],
});

export default function Page() {
  return (
    <ToolLayout title="JPG to PDF" description="Convert JPG images to a PDF document.">
      <JpgToPdfClient />
    </ToolLayout>
  );
}
