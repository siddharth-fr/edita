import React from 'react';
import { cn } from '@/lib/utils';
import { CloudUpload, X } from 'lucide-react';
import { CachedFile } from '../lib/idb';
import { fmtBytes } from '../lib/utils';

interface OpenPdfModalProps {
  showOpenModal: boolean;
  setShowOpenModal: (v: boolean) => void;
  isDragging: boolean;
  handleDragOver: (e: React.DragEvent) => void;
  handleDragLeave: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  recentFiles: CachedFile[];
  loadFromCache: (file: CachedFile) => void;
}

export function OpenPdfModal({
  showOpenModal, setShowOpenModal,
  isDragging, handleDragOver, handleDragLeave, handleDrop, fileInputRef,
  recentFiles, loadFromCache
}: OpenPdfModalProps) {
  if (!showOpenModal) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0F172A]/35 backdrop-blur-sm flex items-center justify-center z-[500] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) setShowOpenModal(false); }}
    >
      <div className="bg-white rounded-[20px] w-full max-w-[500px] shadow-xl flex flex-col max-h-[90vh] overflow-hidden">
        <div className="flex items-start justify-between p-5 pb-4 border-b border-[#E2E8F0] shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-[38px] h-[38px] border border-[#E2E8F0] rounded-full flex items-center justify-center">
              <CloudUpload className="w-5 h-5 text-[#475569]" />
            </div>
            <div>
              <h2 className="text-sm font-semibold">Open a PDF</h2>
              <p className="text-xs text-[#94A3B8]">Drag, drop, or browse to open a file</p>
            </div>
          </div>
          <button onClick={() => setShowOpenModal(false)} className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#475569] hover:bg-[#F1F5F9]">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "mx-5 mt-5 border-2 border-dashed rounded-[14px] p-7 flex flex-col items-center text-center transition-all cursor-pointer",
            isDragging ? "border-[#059669] bg-[#ECFDF5]" : "border-[#CBD5E1] hover:border-[#059669] hover:bg-[#ECFDF5]/50"
          )}
        >
          <CloudUpload className="w-7 h-7 text-[#475569] mb-2.5" />
          <h3 className="text-sm font-semibold mb-1.5">Choose a file or drag &amp; drop it here</h3>
          <p className="text-xs text-[#94A3B8]">PDF format, up to 200 MB</p>
        </div>

        {recentFiles.length > 0 && (
          <div className="overflow-y-auto mt-4">
            {recentFiles.map((file) => (
              <div
                key={file.id}
                onClick={() => { loadFromCache(file); setShowOpenModal(false); }}
                className="flex items-center justify-between px-5 py-3.5 border-b border-[#E2E8F0] last:border-b-0 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <span className="bg-red-600 text-white text-[9px] font-bold px-1 py-0.5 rounded-[3px] tracking-wide shrink-0">PDF</span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium truncate max-w-[250px]">{file.name}</h4>
                    <p className="text-[11.5px] text-[#94A3B8] mt-0.5">{fmtBytes(file.size)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface PropertiesModalProps {
  showProps: boolean;
  setShowProps: (v: boolean) => void;
  docProps: Record<string, any>;
}

export function PropertiesModal({ showProps, setShowProps, docProps }: PropertiesModalProps) {
  if (!showProps) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0F172A]/35 backdrop-blur-sm flex items-center justify-center z-[500] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) setShowProps(false); }}
    >
      <div className="bg-white rounded-[20px] w-full max-w-[480px] shadow-xl">
        <div className="flex items-center justify-between p-5 border-b border-[#E2E8F0]">
          <h2 className="text-sm font-semibold">Document Properties</h2>
          <button onClick={() => setShowProps(false)} className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#475569] hover:bg-[#F1F5F9]">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6 text-sm space-y-1 overflow-y-auto max-h-[60vh]">
          {Object.entries(docProps).map(([key, value]) => (
            <div key={key} className="flex gap-3 py-1.5 border-b border-[#E2E8F0] last:border-b-0">
              <span className="w-[110px] shrink-0 font-semibold text-[#475569]">{key}</span>
              <span className="text-[#0F172A] break-all">{String(value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
