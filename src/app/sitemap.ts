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
        'mp4-to-mp3'
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