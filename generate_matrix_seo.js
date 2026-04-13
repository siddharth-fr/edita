const fs = require('fs');

const tools = [
  { slug: 'compress-pdf', name: 'Compress PDF' },
  { slug: 'merge-pdf', name: 'Merge PDF' },
  { slug: 'split-pdf', name: 'Split PDF' },
  { slug: 'pdf-to-word', name: 'PDF to Word' },
  { slug: 'word-to-pdf', name: 'Word to PDF' },
  { slug: 'jpg-to-pdf', name: 'JPG to PDF' },
  { slug: 'pdf-to-jpg', name: 'PDF to JPG' },
  { slug: 'image-compressor', name: 'Image Compressor' },
  { slug: 'png-to-jpg', name: 'PNG to JPG' },
  { slug: 'jpg-to-png', name: 'JPG to PNG' },
  { slug: 'png-to-webp', name: 'PNG to WebP' },
  { slug: 'webp-to-png', name: 'WebP to PNG' },
  { slug: 'jpg-to-webp', name: 'JPG to WebP' },
  { slug: 'webp-to-jpg', name: 'WebP to JPG' },
  { slug: 'png-to-avif', name: 'PNG to AVIF' },
  { slug: 'jpg-to-avif', name: 'JPG to AVIF' },
  { slug: 'avif-to-png', name: 'AVIF to PNG' },
  { slug: 'avif-to-jpg', name: 'AVIF to JPG' },
  { slug: 'svg-to-png', name: 'SVG to PNG' },
  { slug: 'svg-to-jpg', name: 'SVG to JPG' },
  { slug: 'svg-to-webp', name: 'SVG to WebP' },
  { slug: 'mp4-to-mp3', name: 'MP4 to MP3 Extractor' },
  { slug: 'qr-code-generator', name: 'QR Code Generator' },
  { slug: 'image-color-palette-generator', name: 'Image Color Palette Generator' }
];

const industries = [
  "Lawyers", "Accountants", "Real Estate Agents", "HR Managers", 
  "Students", "Architects", "Clinics", "Photographers", 
  "Content Creators", "Designers"
];

const constraints = [
  "Offline", "100 Percent Local", "Browser Based", 
  "No Server Upload", "Secure"
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

let fileContent = `import React from 'react';
import { ProgrammaticSeoEntry } from './programmaticSeo';

export const MATRIX_SEO: Record<string, ProgrammaticSeoEntry> = {
`;

tools.forEach(tool => {
  industries.forEach(industry => {
    constraints.forEach(constraint => {
      const generatedSlug = slugify(`${constraint}-${tool.name}-for-${industry}`);
      const h1 = `${constraint} ${tool.name} for ${industry}`;
      const desc = `Struggling to manage files? Edita's ${h1} works exclusively using WASM tech, ensuring your professional data never leaves your device. Perfect for ${industry}.`;
      const keys = [
        slugify(`${constraint} ${tool.name}`).replace(/-/g, ' '),
        slugify(`${tool.name} for ${industry}`).replace(/-/g, ' ')
      ];

      fileContent += `  "${generatedSlug}": {
    slug: "${generatedSlug}",
    baseTool: "${tool.slug}",
    title: "${h1} | Edita Tools",
    description: "${desc}",
    keywords: ${JSON.stringify(keys)},
    h1: "${h1}",
    h2: "Private & Limitless File Processing",
    seoContent: (
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">${h1}</h2>
        <p>${desc} Most standard web tools require uploading your sensitive documentation to external servers, which violates data privacy policies for many industries.</p>
        <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Artificial Limits</h3>
        <p>By leveraging your device's own hardware capabilities, you skip the upload queue and artificial file size caps. Experience military-grade security and uncompromising speed.</p>
      </div>
    )
  },
`;
    });
  });
});

fileContent += `};
`;

fs.writeFileSync('src/config/programmaticSeoMatrix.tsx', fileContent);
console.log('Successfully generated the SEO Matrix!');
