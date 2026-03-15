import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";

const Mp4ToMp3Client = dynamic(() => import('@/components/tools/Mp4ToMp3Client').then(mod => mod.Mp4ToMp3Client), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "MP4 to MP3 Converter Online Free – Edita.tools",
  description: "Extract audio from MP4 videos and save as MP3. Free online conversion that runs securely in your browser. No file size limits or registration.",
  canonical: "/tools/mp4-to-mp3",
  keywords: ["mp4 to mp3", "extract audio from video", "free video converter", "online mp3 extractor"],
});

export default function Page() {
  return (
    <ToolLayout title="MP4 to MP3" description="Extract audio from video files.">
      <Mp4ToMp3Client />
    </ToolLayout>
  );
}
