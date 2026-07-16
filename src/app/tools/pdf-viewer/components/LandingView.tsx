import React from 'react';
import { ShieldCheck, CloudUpload, FolderOpen as FolderOpenIcon, Trash2, Zap, Search, Edit3, Loader2, AlertCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CachedFile } from '../lib/idb';
import { fmtBytes, formatTime } from '../lib/utils';

interface LandingViewProps {
  recentFiles: CachedFile[];
  isDragging: boolean;
  isLoading: boolean;
  loadError: string | null;
  toastMsg: string | null;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleDragOver: (e: React.DragEvent) => void;
  handleDragLeave: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loadFromCache: (file: CachedFile) => void;
  handleDeleteCache: (id: string, e: React.MouseEvent) => void;
  setLoadError: (err: string | null) => void;
}

export function LandingView({
  recentFiles,
  isDragging,
  isLoading,
  loadError,
  toastMsg,
  fileInputRef,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleFileInputChange,
  loadFromCache,
  handleDeleteCache,
  setLoadError
}: LandingViewProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col overflow-y-auto">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center text-center px-6 pt-[72px] pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ECFDF5] text-[#059669] border border-[#6EE7B7] rounded-full px-3.5 py-1.5 text-xs font-semibold mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          100% Private — Files Never Leave Your Device
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-[clamp(38px,6vw,60px)] tracking-tight leading-[1.1] text-[#0F172A] mb-4">
          The PDF viewer<br />built for privacy.
        </h1>
        <p className="max-w-[520px] text-base text-[#475569] leading-relaxed mb-12">
          View, search, annotate, and edit PDFs directly in your browser using WebAssembly.
          No uploads, no accounts, no tracking.
        </p>

        {/* Upload Card */}
        <div className="w-full max-w-[540px] bg-white border border-[#E2E8F0] rounded-[20px] shadow-lg overflow-hidden mb-10">
          <div className="p-2">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                "border-2 border-dashed rounded-[14px] p-10 flex flex-col items-center text-center transition-all cursor-pointer",
                isDragging
                  ? "border-[#059669] bg-[#ECFDF5]"
                  : "border-[#CBD5E1] hover:border-[#059669] hover:bg-[#ECFDF5]/50"
              )}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-[52px] h-[52px] rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center text-2xl mb-4 shadow-sm">
                <CloudUpload className="w-6 h-6 text-[#475569]" />
              </div>
              <h3 className="font-semibold text-sm mb-1.5">Choose a file or drag &amp; drop it here</h3>
              <p className="text-xs text-[#94A3B8] mb-4">PDF format, up to 200 MB</p>
              <label
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border border-[#CBD5E1] bg-white text-[#0F172A] cursor-pointer hover:bg-[#F1F5F9] transition-colors"
              >
                <FolderOpenIcon className="w-4 h-4" />
                Browse File
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleFileInputChange(e);
                  }}
                />
              </label>
            </div>
          </div>

          {/* Recent Files */}
          {recentFiles.length > 0 && (
            <div className="border-t border-[#E2E8F0]">
              {recentFiles.slice(0, 5).map((file) => (
                <div
                  key={file.id}
                  onClick={() => loadFromCache(file)}
                  className="flex items-center justify-between px-5 py-3.5 border-b border-[#E2E8F0] last:border-b-0 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <span className="bg-red-600 text-white text-[9px] font-bold px-1 py-0.5 rounded-[3px] tracking-wide shrink-0">
                      PDF
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium truncate max-w-[280px]">{file.name}</h4>
                      <p className="text-[11.5px] text-[#94A3B8] mt-0.5">
                        {fmtBytes(file.size)} &bull; {formatTime(file.ts)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => handleDeleteCache(file.id, e)}
                    className="shrink-0 p-1.5 rounded-md text-[#94A3B8] hover:text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] bg-white border border-[#E2E8F0] rounded-full px-3.5 py-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-500" /> Instant loading
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] bg-white border border-[#E2E8F0] rounded-full px-3.5 py-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Encrypted locally
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] bg-white border border-[#E2E8F0] rounded-full px-3.5 py-1.5">
            <Search className="w-3.5 h-3.5 text-emerald-500" /> Full-text search
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] bg-white border border-[#E2E8F0] rounded-full px-3.5 py-1.5">
            <Edit3 className="w-3.5 h-3.5 text-emerald-500" /> Annotations
          </div>
        </div>
      </section>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white rounded-2xl px-8 py-6 shadow-xl flex items-center gap-4">
            <Loader2 className="w-6 h-6 text-emerald-500 animate-spin" />
            <span className="text-sm font-semibold text-[#0F172A]">Loading PDF...</span>
          </div>
        </div>
      )}

      {/* Error toast */}
      {loadError && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-red-50 border border-red-200 text-red-700 px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 z-[100]">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="text-sm font-medium">{loadError}</span>
          <button onClick={() => setLoadError(null)} className="ml-2 p-1 hover:bg-red-100 rounded">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Toast */}
      {toastMsg && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white px-5 py-2.5 rounded-xl shadow-md text-sm font-medium z-[100] transition-opacity">
          {toastMsg}
        </div>
      )}
    </div>
  );
}
