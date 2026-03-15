import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Editor.tools",
  description: "Free online file tools that run directly in your browser. Fast, private, and no signup required. Compress, convert, and edit PDFs, images, and videos securely.",
  url: "https://editor.tools",
  ogImage: "https://editor.tools/og-image.png", // Assuming this exists or will be added
  keywords: [
    "online editor",
    "free tools",
    "pdf tools",
    "image compressor",
    "video converter",
    "browser-based tools",
    "no signup",
    "privacy focused",
    "file editor",
    "compress pdf",
    "merge pdf",
    "split pdf",
    "pdf to word",
    "word to pdf",
    "mp4 to mp3",
  ],
};

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonical?: string;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
  canonical,
  keywords = SITE_CONFIG.keywords,
}: MetadataProps = {}): Metadata {
  const finalTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;

  return {
    title: finalTitle,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title: finalTitle,
      description,
      images: [
        {
          url: image,
        },
      ],
      type: "website",
      siteName: SITE_CONFIG.name,
      url: canonical || SITE_CONFIG.url,
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: [image],
      creator: "@editor_tools", // Placeholder
    },
    icons,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonical || SITE_CONFIG.url,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
