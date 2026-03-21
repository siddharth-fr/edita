import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://edita.tools';

    const pages = [
        '',
        'tools',
        'how-it-works',
        'why-us',
        'privacy',
        'terms',
        'contact'
    ];

    const tools = [
        'merge-pdf',
        'compress-pdf',
        'split-pdf',
        'pdf-to-word',
        'word-to-pdf',
        'jpg-to-pdf',
        'pdf-to-jpg',
        'image-compressor',
        'png-to-jpg',
        'jpg-to-png',
        'png-to-webp',
        'webp-to-png',
        'jpg-to-webp',
        'webp-to-jpg',
        'png-to-avif',
        'jpg-to-avif',
        'avif-to-png',
        'avif-to-jpg',
        'svg-to-png',
        'svg-to-jpg',
        'svg-to-webp',
        'mp4-to-mp3',
        'qr-code-generator'
    ];

    const pageUrls: MetadataRoute.Sitemap = pages.map((page) => ({
        url: `${baseUrl}/${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.6,
    }));

    const toolUrls: MetadataRoute.Sitemap = tools.map((slug) => ({
        url: `${baseUrl}/tools/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [...pageUrls, ...toolUrls];
}