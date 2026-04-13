import { PROGRAMMATIC_SEO } from '@/config/programmaticSeo';
import { notFound } from 'next/navigation';
import { ToolLayout } from '@/components/layout/ToolLayout';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { TOOL_METADATA } from '@/config/seo';

// Loaders for each tool type
const MergePdfClient = dynamic(() => import('@/app/tools/merge-pdf/MergePdfClient'), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const CompressPdfClient = dynamic(() => import('@/components/tools/CompressPdfClient').then(mod => mod.CompressPdfClient), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const SplitPdfClient = dynamic(() => import('@/components/tools/SplitPdfClient').then(mod => mod.SplitPdfClient), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const ImageCompressorClient = dynamic(() => import('@/components/tools/ImageCompressorClient').then(mod => mod.ImageCompressorClient), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const ImageConverter = dynamic(() => import('@/components/tools/ImageConverter').then(mod => mod.ImageConverter), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const JpgToPdfClient = dynamic(() => import('@/components/tools/JpgToPdfClient').then(mod => mod.JpgToPdfClient), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const Mp4ToMp3Client = dynamic(() => import('@/components/tools/Mp4ToMp3Client').then(mod => mod.Mp4ToMp3Client), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const PdfToJpgClient = dynamic(() => import('@/components/tools/PdfToJpgClient').then(mod => mod.PdfToJpgClient), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const PdfToWordClient = dynamic(() => import('@/components/tools/PdfToWordClient').then(mod => mod.PdfToWordClient), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const WordToPdfClient = dynamic(() => import('@/components/tools/WordToPdfClient').then(mod => mod.WordToPdfClient), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const QRCodeGenerator = dynamic(() => import('@/components/tools/QRCodeGenerator').then(mod => mod.QRCodeGenerator), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });
const ImageColorPalette = dynamic(() => import('@/components/tools/ImageColorPalette').then(mod => mod.ImageColorPalette), { loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" /> });

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const seoData = PROGRAMMATIC_SEO[p.slug];

  if (!seoData) {
    return {};
  }

  return constructMetadata({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: `/use-cases/${p.slug}`,
  });
}

export function generateStaticParams() {
  return Object.keys(PROGRAMMATIC_SEO).map((slug) => ({
    slug,
  }));
}

export default async function ProgrammaticPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const seoData = PROGRAMMATIC_SEO[p.slug];

  if (!seoData) {
    notFound();
  }

  const baseToolMeta = (TOOL_METADATA as Record<string, any>)[seoData.baseTool];

  // Map to the correct component
  let ToolComponent;
  switch (seoData.baseTool) {
    case 'merge-pdf': ToolComponent = <MergePdfClient />; break;
    case 'compress-pdf': ToolComponent = <CompressPdfClient />; break;
    case 'split-pdf': ToolComponent = <SplitPdfClient />; break;
    case 'image-compressor': ToolComponent = <ImageCompressorClient />; break;
    case 'mp4-to-mp3': ToolComponent = <Mp4ToMp3Client />; break;
    case 'pdf-to-word': ToolComponent = <PdfToWordClient />; break;
    case 'word-to-pdf': ToolComponent = <WordToPdfClient />; break;
    case 'qr-code-generator': ToolComponent = <QRCodeGenerator />; break;
    case 'jpg-to-pdf': ToolComponent = <JpgToPdfClient />; break;
    case 'pdf-to-jpg': ToolComponent = <PdfToJpgClient />; break;
    case 'image-color-palette-generator': ToolComponent = <ImageColorPalette />; break;
    
    // Image Converter specific types
    case 'png-to-jpg': ToolComponent = <ImageConverter initialInputFormat="png" initialOutputFormat="jpg" />; break;
    case 'png-to-webp': ToolComponent = <ImageConverter initialInputFormat="png" initialOutputFormat="webp" />; break;
    case 'png-to-avif': ToolComponent = <ImageConverter initialInputFormat="png" initialOutputFormat="avif" />; break;
    
    case 'jpg-to-png': ToolComponent = <ImageConverter initialInputFormat="jpg" initialOutputFormat="png" />; break;
    case 'jpg-to-webp': ToolComponent = <ImageConverter initialInputFormat="jpg" initialOutputFormat="webp" />; break;
    case 'jpg-to-avif': ToolComponent = <ImageConverter initialInputFormat="jpg" initialOutputFormat="avif" />; break;
    
    case 'avif-to-jpg': ToolComponent = <ImageConverter initialInputFormat="avif" initialOutputFormat="jpg" />; break;
    case 'avif-to-png': ToolComponent = <ImageConverter initialInputFormat="avif" initialOutputFormat="png" />; break;

    case 'svg-to-png': ToolComponent = <ImageConverter initialInputFormat="svg" initialOutputFormat="png" />; break;
    case 'svg-to-jpg': ToolComponent = <ImageConverter initialInputFormat="svg" initialOutputFormat="jpg" />; break;
    case 'svg-to-webp': ToolComponent = <ImageConverter initialInputFormat="svg" initialOutputFormat="webp" />; break;

    default: ToolComponent = <div>Tool mapping missing</div>; break;
  }

  return (
    <ToolLayout
      title={seoData.h1}
      description={seoData.description.length > 120 ? seoData.description.slice(0, 117) + "..." : seoData.description}
      toolSlug={seoData.baseTool} // Fallback to base tool slug if needed somewhere
      canonicalUrl={`/use-cases/${p.slug}`}
      seoContent={seoData.seoContent}
      howItWorksSteps={baseToolMeta?.howItWorksSteps} // Inherit how-to from parent tool
      faqItems={baseToolMeta?.faqs} // Inherit FAQ from parent tool
    >
      {ToolComponent}
    </ToolLayout>
  );
}
