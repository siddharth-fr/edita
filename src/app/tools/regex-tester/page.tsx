import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from '@/lib/metadata';
import { TOOL_METADATA } from '@/config/seo';
import { ToolFooter } from '@/components/ui/ToolFooter';
import { ShieldCheck, Zap } from 'lucide-react';

const RegexTesterClient = dynamic(
  () => import('@/components/tools/RegexTesterClient').then((mod) => mod.RegexTesterClient),
  { loading: () => <div className="h-[560px] w-full animate-pulse bg-muted rounded-2xl" /> }
);

const m = TOOL_METADATA['regex-tester'];

export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout
      toolSlug="regex-tester"
      canonicalUrl="/tools/regex-tester"
      title={m.toolTitle}
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter
          blocks={[
            {
              title: 'Real-Time Matching',
              description:
                'Instantly see every match, capture group, and named group as you type — no button clicks needed.',
              icon: Zap,
            },
            {
              title: '100% Private — Runs in Your Browser',
              description:
                'All regex evaluation happens locally using the JavaScript engine. Your text never leaves your device.',
              icon: ShieldCheck,
            },
          ]}
        />
      }
    >
      <RegexTesterClient />
    </ToolLayout>
  );
}
