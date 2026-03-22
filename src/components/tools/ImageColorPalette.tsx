'use client';

import { useState, useRef, useCallback } from 'react';
import { UploadDropzone } from './UploadDropzone';
import { Button } from '@/components/ui/Button';
import { Copy, Check, RefreshCw, Palette, Image as ImageIcon, Download } from 'lucide-react';
import { useToast } from '@/hooks/useToast';
import { trackToolUsed, trackConversion } from '@/lib/ga4';

interface ColorInfo {
  hex: string;
  rgb: string;
  hsl: string;
  percentage: number;
  isDark: boolean;
}

export function ImageColorPalette() {
  const [image, setImage] = useState<string | null>(null);
  const [palette, setPalette] = useState<ColorInfo[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { success, error } = useToast();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return `${Math.round(h * 360)}°, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
  };

  const getIsDark = (r: number, g: number, b: number) => {
    // Relative luminance formula
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  };

  const extractPalette = useCallback((imgElement: HTMLImageElement) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Scale down for performance
    const size = 120; // Slightly larger for better accuracy
    canvas.width = size;
    canvas.height = size;
    ctx.drawImage(imgElement, 0, 0, size, size);

    try {
      const imageData = ctx.getImageData(0, 0, size, size).data;
      const pixels: { r: number, g: number, b: number }[] = [];

      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const a = imageData[i + 3];
        if (a >= 128) {
          pixels.push({ r, g, b });
        }
      }

      if (pixels.length === 0) {
        setIsProcessing(false);
        return;
      }

      // Median Cut Implementation
      const quantize = (pixelList: typeof pixels, depth: number): typeof pixels[] => {
        if (depth === 0 || pixelList.length === 0) {
          return [pixelList];
        }

        // Find dimension with max range
        let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
        pixelList.forEach(p => {
          minR = Math.min(minR, p.r); maxR = Math.max(maxR, p.r);
          minG = Math.min(minG, p.g); maxG = Math.max(maxG, p.g);
          minB = Math.min(minB, p.b); maxB = Math.max(maxB, p.b);
        });

        const rangeR = maxR - minR;
        const rangeG = maxG - minG;
        const rangeB = maxB - minB;

        let component: 'r' | 'g' | 'b' = 'r';
        if (rangeG >= rangeR && rangeG >= rangeB) component = 'g';
        else if (rangeB >= rangeR && rangeB >= rangeG) component = 'b';

        // Sort by the chosen component
        pixelList.sort((a, b) => a[component] - b[component]);

        // Split at median
        const mid = Math.floor(pixelList.length / 2);
        return [
          ...quantize(pixelList.slice(0, mid), depth - 1),
          ...quantize(pixelList.slice(mid), depth - 1)
        ];
      };

      // Get 8 clusters (depth 3 = 2^3 clusters)
      const clusters = quantize(pixels, 3);
      
      const totalPixels = pixels.length;
      const sortedColors = clusters
        .filter(cluster => cluster.length > 0)
        .map(cluster => {
          const sum = cluster.reduce((acc, p) => ({
            r: acc.r + p.r,
            g: acc.g + p.g,
            b: acc.b + p.b
          }), { r: 0, g: 0, b: 0 });

          const avg = {
            r: Math.round(sum.r / cluster.length),
            g: Math.round(sum.g / cluster.length),
            b: Math.round(sum.b / cluster.length)
          };

          return {
            hex: rgbToHex(avg.r, avg.g, avg.b),
            rgb: `${avg.r}, ${avg.g}, ${avg.b}`,
            hsl: rgbToHsl(avg.r, avg.g, avg.b),
            percentage: Math.round((cluster.length / totalPixels) * 100),
            isDark: getIsDark(avg.r, avg.g, avg.b),
          };
        })
        .sort((a, b) => b.percentage - a.percentage);

      setPalette(sortedColors);
      setIsProcessing(false);
      trackToolUsed('Image Color Palette');
      trackConversion('Image Color Palette');
    } catch (err) {
      error("Processing Failed", "Could not extract colors from this image.");
      setIsProcessing(false);
    }
  }, [error]);

  const handleUpload = (files: File[]) => {
    if (files.length === 0) return;
    setIsProcessing(true);
    
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImage(result);
      
      const img = new Image();
      img.onload = () => extractPalette(img);
      img.onerror = () => {
        error("Load Error", "Failed to load image for processing.");
        setIsProcessing(false);
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    success("Copied", `${text} copied to clipboard.`);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const reset = () => {
    setImage(null);
    setPalette([]);
  };

  return (
    <div className={`w-full flex flex-col gap-8 mx-auto items-stretch ${!image ? 'max-w-3xl' : 'max-w-6xl'}`}>
      {!image ? (
        <UploadDropzone 
          onUpload={handleUpload} 
          accept="image/*" 
          multiple={false} 
        />
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 min-h-[500px] w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
          {/* Left: Image Preview */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-6 h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                  <ImageIcon className="w-4 h-4 text-emerald-500" />
                  Source Image
                </div>
                <Button variant="ghost" size="sm" onClick={reset} className="h-8 text-[11px] font-bold uppercase tracking-wider">
                  <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                  New Image
                </Button>
              </div>

              <div className="relative flex-1 bg-muted/30 rounded-2xl overflow-hidden border border-border/50 group flex items-center justify-center min-h-[300px]">
                 <img 
                   src={image} 
                   alt="Preview" 
                   className="max-w-full max-h-[400px] object-contain shadow-2xl rounded-lg transition-transform duration-500 group-hover:scale-[1.02]" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-4 flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Palette className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-emerald-800 tracking-tight leading-none mb-1">Pro Tip</p>
                    <p className="text-[11px] leading-relaxed text-emerald-700/80 font-medium">
                      We analyze thousands of pixels to find the most visually impactful colors. Click any color card to copy its HEX value.
                    </p>
                  </div>
              </div>
            </div>
          </div>

          {/* Right: Palette Display */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-6 h-full">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                <Palette className="w-4 h-4 text-emerald-500" />
                Extracted Palette
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {isProcessing ? (
                  Array(6).fill(0).map((_, i) => (
                    <div key={i} className="h-24 bg-muted animate-pulse rounded-2xl" />
                  ))
                ) : (
                  palette.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => copyToClipboard(color.hex, index)}
                      className="group relative flex items-center gap-4 p-3 bg-white border border-border rounded-2xl hover:border-emerald-500/50 hover:shadow-md transition-all active:scale-[0.98] text-left overflow-hidden"
                    >
                      <div 
                        className="w-16 h-16 rounded-xl shadow-inner border border-black/5 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-sm font-bold font-mono text-foreground uppercase">{color.hex}</span>
                        <span className="text-[10px] font-medium text-muted-foreground truncate">RGB: {color.rgb}</span>
                        <span className="text-[10px] font-medium text-muted-foreground truncate">HSL: {color.hsl}</span>
                      </div>
                      <div className="ml-auto p-2 rounded-lg bg-muted/50 text-muted-foreground group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        {copiedIndex === index ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </div>
                      
                      {/* Dominance indicator */}
                      <div className="absolute top-0 right-0 px-2 py-1 bg-black/5 text-[9px] font-bold text-muted-foreground rounded-bl-lg">
                        {color.percentage}%
                      </div>
                    </button>
                  ))
                )}
              </div>

              <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                <p className="text-xs text-muted-foreground font-medium">
                  {palette.length} unique colors identified
                </p>
                <div className="flex gap-2">
                   {/* Palette actions could go here, e.g., export */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
