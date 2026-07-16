import React, { useRef, useState } from 'react';
import { X, FileImage, Loader2, Download } from 'lucide-react';

interface ExportModalProps {
  show: boolean;
  onClose: () => void;
  pdfDoc: any;
  canvasContainerRef: React.RefObject<HTMLDivElement | null>;
}

export function ExportModal({ show, onClose, pdfDoc, canvasContainerRef }: ExportModalProps) {
  const [isExporting, setIsExporting] = useState(false);

  if (!show) return null;

  const handleExportJPG = async () => {
    setIsExporting(true);
    try {
      // Find the first rendered canvas as an example, or export all.
      // For simplicity in this demo, let's export the currently visible canvas.
      const canvas = canvasContainerRef.current?.querySelector('canvas') as HTMLCanvasElement;
      const svg = canvasContainerRef.current?.querySelector('svg') as SVGSVGElement;

      if (!canvas) {
        alert('No page is currently visible to export.');
        setIsExporting(false);
        return;
      }

      // Create an offscreen canvas to composite the PDF and SVG
      const compositeCanvas = document.createElement('canvas');
      compositeCanvas.width = canvas.width;
      compositeCanvas.height = canvas.height;
      const ctx = compositeCanvas.getContext('2d')!;

      // Draw the PDF canvas
      ctx.drawImage(canvas, 0, 0);

      // If there are annotations, render SVG to canvas
      if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg);
        const img = new Image();
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        await new Promise<void>((resolve) => {
          img.onload = () => {
            ctx.drawImage(img, 0, 0, compositeCanvas.width, compositeCanvas.height);
            URL.revokeObjectURL(url);
            resolve();
          };
          img.src = url;
        });
      }

      // Export composite canvas as JPG
      const dataUrl = compositeCanvas.toDataURL('image/jpeg', 0.9);
      
      const link = document.createElement('a');
      link.download = `exported_page.jpg`;
      link.href = dataUrl;
      link.click();
      
      onClose();
    } catch (err) {
      console.error(err);
      alert('Export failed.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-[#0F172A]/35 backdrop-blur-sm flex items-center justify-center z-[500] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-[20px] w-full max-w-[400px] shadow-xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-3">
            <div className="w-[38px] h-[38px] border border-[#E2E8F0] rounded-full flex items-center justify-center">
              <Download className="w-5 h-5 text-[#475569]" />
            </div>
            <div>
              <h2 className="text-sm font-semibold">Export Document</h2>
              <p className="text-[11px] text-[#94A3B8]">Save your annotated document</p>
            </div>
          </div>
          <button onClick={onClose} className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#475569] hover:bg-[#F1F5F9]">
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-6">
          <button
            onClick={handleExportJPG}
            disabled={isExporting}
            className="w-full flex items-center justify-between bg-white border border-[#E2E8F0] p-4 rounded-xl hover:border-[#059669] hover:bg-[#ECFDF5]/50 transition-all text-left group disabled:opacity-50"
          >
            <div className="flex items-center gap-3">
              <FileImage className="w-6 h-6 text-[#059669]" />
              <div>
                <h3 className="text-sm font-semibold text-[#0F172A]">Export as JPG</h3>
                <p className="text-xs text-[#64748B] mt-0.5">Saves current visible page with annotations</p>
              </div>
            </div>
            {isExporting ? <Loader2 className="w-4 h-4 animate-spin text-[#94A3B8]" /> : null}
          </button>
        </div>
      </div>
    </div>
  );
}
