import type { Metadata } from 'next';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { Mp4ToMp3Client } from '@/components/tools/Mp4ToMp3Client';

export const metadata: Metadata = {
  title: 'MP4 to MP3 – Edit',
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
