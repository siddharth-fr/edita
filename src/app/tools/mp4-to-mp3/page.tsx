import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const Mp4ToMp3Client = dynamic(() => import('@/components/tools/Mp4ToMp3Client').then(mod => mod.Mp4ToMp3Client), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Fast & High-Quality Audio Extraction</h2>
            <p>
              Need the audio track from a video? Our MP4 to MP3 converter 
              uses FFmpeg technology directly in your browser to pull 
              high-quality audio from your video files. Save your favorite 
              soundtracks, speeches, or music instantly.
            </p>
            <p>
              Edita ensures that the extracted audio is saved at a high 
              bitrate, giving you clear sound for all your devices.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Local Processing for Total Privacy</h2>
            <p>
              Video files can be large and personal. Our tool processes 
              video files locally using WebAssembly. Your videos never 
              touch our servers, and we never see your data. This is 
              the safest way to extract audio from your MP4 files.
            </p>
            <p>
              No uploads, no limits, and 100% privacy—right in your 
              web browser.
            </p>
          </div>
        </div>
      }
    >
      <Mp4ToMp3Client />
    </ToolLayout>
  );
}
