import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Edita.tools",
  description: "Free online file tools that run directly in your browser. Fast, private, and no signup required. Compress, convert, and edit PDFs, images, and videos securely.",
  url: "https://edita.tools",
  ogImage: "https://edita.tools/og-image.png", // Assuming this exists or will be added
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
  keywords = [],
}: MetadataProps = {}): Metadata {
  // If title is provided, append site name if it's not already there
  const finalTitle = title 
    ? (title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`)
    : SITE_CONFIG.name;

  // Combine provided keywords with site-wide defaults
  const allKeywords = [...new Set([...keywords, ...SITE_CONFIG.keywords])];

  return {
    title: finalTitle,
    description,
    keywords: allKeywords.join(", "),
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
      creator: "@edita_tools",
    },
    icons,
    metadataBase: new URL(SITE_CONFIG.url),
    colorScheme: 'light',
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
