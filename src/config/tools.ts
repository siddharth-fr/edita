import { type AppTheme } from './themes';

export interface Tool {
  name: string;
  slug: string;
  iconKey: string;
  theme: AppTheme;
  category: string;
}

export const TOOLS: Tool[] = [
  { name: 'Merge PDF Online', slug: 'merge-pdf', iconKey: 'FileText', theme: 'blue', category: 'PDF' },
  { name: 'Compress PDF Online', slug: 'compress-pdf', iconKey: 'Minimize2', theme: 'purple', category: 'PDF' },
  { name: 'Split PDF Online', slug: 'split-pdf', iconKey: 'SplitSquareHorizontal', theme: 'orange', category: 'PDF' },
  { name: 'PDF to Word Converter', slug: 'pdf-to-word', iconKey: 'FileOutput', theme: 'cyan', category: 'Convert' },
  { name: 'Word to PDF Converter', slug: 'word-to-pdf', iconKey: 'FileText', theme: 'indigo', category: 'Convert' },
  { name: 'JPG to PDF Converter', slug: 'jpg-to-pdf', iconKey: 'ImageIcon', theme: 'pink', category: 'Image' },
  { name: 'PDF to JPG Converter', slug: 'pdf-to-jpg', iconKey: 'Maximize2', theme: 'rose', category: 'Image' },
  { name: 'Image Compressor', slug: 'image-compressor', iconKey: 'FileArchive', theme: 'green', category: 'Image' },
  { name: 'PNG to JPG Converter', slug: 'png-to-jpg', iconKey: 'ImageIcon', theme: 'emerald', category: 'Image' },
  { name: 'JPG to PNG Converter', slug: 'jpg-to-png', iconKey: 'ImageIcon', theme: 'pink', category: 'Image' },
  { name: 'PNG to WebP Converter', slug: 'png-to-webp', iconKey: 'ImageIcon', theme: 'emerald', category: 'Image' },
  { name: 'WebP to PNG Converter', slug: 'webp-to-png', iconKey: 'ImageIcon', theme: 'cyan', category: 'Image' },
  { name: 'JPG to WebP Converter', slug: 'jpg-to-webp', iconKey: 'ImageIcon', theme: 'pink', category: 'Image' },
  { name: 'WebP to JPG Converter', slug: 'webp-to-jpg', iconKey: 'ImageIcon', theme: 'cyan', category: 'Image' },
  { name: 'PNG to AVIF Converter', slug: 'png-to-avif', iconKey: 'ImageIcon', theme: 'emerald', category: 'Image' },
  { name: 'JPG to AVIF Converter', slug: 'jpg-to-avif', iconKey: 'ImageIcon', theme: 'pink', category: 'Image' },
  { name: 'AVIF to PNG Converter', slug: 'avif-to-png', iconKey: 'ImageIcon', theme: 'indigo', category: 'Image' },
  { name: 'AVIF to JPG Converter', slug: 'avif-to-jpg', iconKey: 'ImageIcon', theme: 'indigo', category: 'Image' },
  { name: 'SVG to PNG Converter', slug: 'svg-to-png', iconKey: 'ImageIcon', theme: 'orange', category: 'Image' },
  { name: 'SVG to JPG Converter', slug: 'svg-to-jpg', iconKey: 'ImageIcon', theme: 'orange', category: 'Image' },
  { name: 'SVG to WebP Converter', slug: 'svg-to-webp', iconKey: 'ImageIcon', theme: 'orange', category: 'Image' },
  { name: 'MP4 to MP3 Converter', slug: 'mp4-to-mp3', iconKey: 'Music', theme: 'violet', category: 'Audio' },
  { name: 'QR Code Generator', slug: 'qr-code-generator', iconKey: 'QrCode', theme: 'indigo', category: 'Utility' },
  { name: 'Image Color Palette', slug: 'image-color-palette-generator', iconKey: 'Palette', theme: 'emerald', category: 'Utility' },
];
