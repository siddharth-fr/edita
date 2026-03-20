import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const Mp4ToMp3Client = dynamic(() => import('@/components/tools/Mp4ToMp3Client').then(mod => mod.Mp4ToMp3Client), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { Music, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["mp4-to-mp3"];
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout 
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Fast & High-Quality Audio Extraction",
              description: "Need the audio from a video? Our MP4 to MP3 converter uses FFmpeg technology directly in your browser to pull high-quality audio tracks instantly. Save soundtracks, speeches, or music at high bitrates.",
              icon: Music
            },
            {
              title: "Local Processing for Total Privacy",
              description: "Video files can be large and personal. Our tool processes files locally using WebAssembly. Your videos never touch our servers, ensuring the safest way to extract audio from your MP4 files. 100% private.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <Mp4ToMp3Client />
    </ToolLayout>
  );
}
