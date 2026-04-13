import { MetadataRoute } from 'next';
import { PROGRAMMATIC_SEO } from '@/config/programmaticSeo';
import { MATRIX_SEO } from '@/config/programmaticSeoMatrix';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://edita.tools';

    const pages = [
        { path: '', priority: 1, frequency: 'daily' },
        { path: 'tools', priority: 0.8, frequency: 'weekly' },
        { path: 'how-it-works', priority: 0.7, frequency: 'monthly' },
        { path: 'why-us', priority: 0.7, frequency: 'monthly' },
        { path: 'contact', priority: 0.7, frequency: 'monthly' },
        { path: 'privacy', priority: 0.4, frequency: 'yearly' },
        { path: 'terms', priority: 0.4, frequency: 'yearly' },
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
        'qr-code-generator',
        'image-color-palette-generator'
    ];

    const pageUrls: MetadataRoute.Sitemap = pages.map((page) => ({
        url: page.path === '' ? baseUrl : `${baseUrl}/${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.frequency as any,
        priority: page.priority,
    }));

    const toolUrls: MetadataRoute.Sitemap = tools.map((slug) => ({
        url: `${baseUrl}/tools/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const combinedSeoKeys = [
        ...Object.keys(PROGRAMMATIC_SEO),
        ...Object.keys(MATRIX_SEO)
    ];

    const programmaticUrls: MetadataRoute.Sitemap = combinedSeoKeys.map((slug) => ({
        url: `${baseUrl}/use-cases/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [...pageUrls, ...toolUrls, ...programmaticUrls];
}