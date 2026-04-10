import dynamic from 'next/dynamic';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";

const QRCodeGeneratorControl = dynamic(() => import('@/components/tools/QRCodeGenerator').then(mod => mod.QRCodeGenerator), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

import { ToolFooter } from '@/components/ui/ToolFooter';
import { QrCode, ShieldCheck } from 'lucide-react';

const m = TOOL_METADATA["qr-code-generator"];
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <ToolLayout 
      toolSlug="qr-code-generator"
      canonicalUrl={"/tools/qr-code-generator"} 
      title={m.toolTitle} 
      description={m.toolDescription}
      howItWorksSteps={m.howItWorksSteps}
      faqItems={m.faqs}
      footerContent={
        <ToolFooter 
          blocks={[
            {
              title: "Customizable QR Codes",
              description: "Generate high-quality QR codes for your brand. Customize colors, rounded corners, and download in various formats. Perfect for marketing materials, business cards, and digital displays.",
              icon: QrCode
            },
            {
              title: "Privacy-First Tool",
              description: "Edita processes your QR code generation entirely in your browser. Your URLs and text content are never sent to a server, ensuring 100% privacy and security.",
              icon: ShieldCheck
            }
          ]}
        />
      }
    >
      <QRCodeGeneratorControl />
    </ToolLayout>
  );
}
