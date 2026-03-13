import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
const Mp4ToMp3Client = dynamic(() => import('@/components/tools/Mp4ToMp3Client').then(mod => mod.Mp4ToMp3Client), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata: Metadata = {
  title: 'MP4 to MP3 – Edita',
  description: 'Extract audio from video files.',
  alternates: { canonical: '/tools/mp4-to-mp3' },
};

export default function Page() {
  return (
    <ToolLayout title="MP4 to MP3" description="Extract audio from video files.">
      <Mp4ToMp3Client />
    </ToolLayout>
  );
}
