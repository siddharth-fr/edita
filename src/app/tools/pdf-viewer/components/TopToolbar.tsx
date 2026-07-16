import React from 'react';
import { PanelLeft, PanelRight, FolderOpen, FileText, Search, ChevronUp, ChevronDown, X, Share2, Download } from 'lucide-react';

interface TopToolbarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loadRecent: () => Promise<void>;
  setShowOpenModal: (v: boolean) => void;
  docTitle: string;
  showFindBar: boolean;
  setShowFindBar: React.Dispatch<React.SetStateAction<boolean>>;
  findInputRef: React.RefObject<HTMLInputElement | null>;
  findText: string;
  setFindText: (text: string) => void;
  handleSearch: (dir?: 'next' | 'prev') => void;
  findMatches: { current: number; total: number };
  handleDownload: () => void;
  handleClosePdf: () => void;
  rightSidebarOpen: boolean;
  setRightSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TopToolbar({
  setSidebarOpen,
  loadRecent,
  setShowOpenModal,
  docTitle,
  showFindBar,
  setShowFindBar,
  findInputRef,
  findText,
  setFindText,
  handleSearch,
  findMatches,
  handleDownload,
  handleClosePdf,
  rightSidebarOpen,
  setRightSidebarOpen
}: TopToolbarProps) {
  return (
    <header className="h-[52px] bg-white border-b border-[#E2E8F0] flex items-center justify-between px-3 gap-2 shrink-0 z-30">
      {/* Left */}
      <div className="flex items-center gap-2 flex-1">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-all"
          title="Toggle sidebar"
        >
          <PanelLeft className="w-[18px] h-[18px]" />
        </button>
        <div className="font-display text-lg font-extrabold tracking-tight text-[#0F172A] select-none">
          edit<span className="text-[#059669]">a</span>
        </div>
        <button
          onClick={() => { loadRecent(); setShowOpenModal(true); }}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-all"
        >
          <FolderOpen className="w-4 h-4" /> Open
        </button>
        <div className="hidden sm:flex items-center gap-2 ml-2">
          <FileText className="w-5 h-5 text-red-500" />
          <span className="text-sm font-semibold truncate max-w-[200px]">{docTitle}</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1.5 flex-1 justify-end">
        {/* Find bar */}
        {showFindBar && (
          <div className="flex items-center gap-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl px-2.5 py-1.5">
            <Search className="w-4 h-4 text-[#94A3B8]" />
            <input
              ref={findInputRef}
              type="text"
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
              placeholder="Find in document…"
              className="bg-transparent border-none text-sm text-[#0F172A] w-[160px] outline-none placeholder:text-[#94A3B8]"
            />
            <span className="text-xs text-[#94A3B8] min-w-[52px] text-center">
              {findMatches.total > 0 ? `${findMatches.current} / ${findMatches.total}` : ''}
            </span>
            <button onClick={() => handleSearch('prev')} className="p-0.5 rounded text-[#475569] hover:text-[#0F172A]"><ChevronUp className="w-3.5 h-3.5" /></button>
            <button onClick={() => handleSearch('next')} className="p-0.5 rounded text-[#475569] hover:text-[#0F172A]"><ChevronDown className="w-3.5 h-3.5" /></button>
            <button onClick={() => setShowFindBar(false)} className="p-0.5 rounded text-[#475569] hover:text-[#0F172A]"><X className="w-3.5 h-3.5" /></button>
          </div>
        )}

        <button
          onClick={() => setShowFindBar((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-all"
        >
          <Search className="w-4 h-4" /> Find
        </button>
        <button className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-all">
          <Share2 className="w-4 h-4" /> Share
        </button>
        <button
          onClick={handleDownload}
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-all"
        >
          <Download className="w-4 h-4" /> Export
        </button>
        <button
          onClick={handleClosePdf}
          className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#475569] hover:bg-red-50 hover:text-red-500 transition-all"
          title="Close PDF"
        >
          <X className="w-[18px] h-[18px]" />
        </button>
        <button
          onClick={() => setRightSidebarOpen((prev) => !prev)}
          className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-all ml-1"
          title="Toggle right sidebar"
        >
          <PanelRight className="w-[18px] h-[18px]" />
        </button>
      </div>
    </header>
  );
}
