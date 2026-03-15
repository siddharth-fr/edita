import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const PngToJpgClient = dynamic(() => import('@/components/tools/PngToJpgClient').then(mod => mod.PngToJpgClient), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "PNG to JPG Online Free – Edita.tools",
  description: "Convert PNG images to JPG format for free online. Fast, secure, and purely browser-based image conversion. No file size limits or registration.",
  canonical: "/tools/png-to-jpg",
  keywords: ["png to jpg", "convert png to image", "free png to jpg converter", "online image conversion", "secure image tools"],
});

export default function Page() {
  return (
    <ToolLayout title="PNG to JPG" description="Convert transparent PNGs to JPG.">
      <PngToJpgClient />
    </ToolLayout>
  );
}
