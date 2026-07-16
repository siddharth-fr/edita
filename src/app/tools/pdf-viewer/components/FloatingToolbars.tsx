import React from 'react';
import { cn } from '@/lib/utils';
import {
  Hand, MousePointer2, Highlighter, PenTool, Minus, Plus,
  RotateCw, Maximize2, RotateCcw, File as FileIcon, BookOpen, LayoutList,
  SkipBack, ChevronLeft, ChevronRight, SkipForward
} from 'lucide-react';

interface FloatingTopToolbarProps {
  activeTool: 'pan' | 'select' | 'highlight' | 'draw' | 'laser';
  setActiveTool: (tool: 'pan' | 'select' | 'highlight' | 'draw' | 'laser') => void;
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  fitMode: string;
  setFitMode: (mode: string) => void;
  rotateCW: () => void;
  toggleFullscreen: () => void;
}

export function FloatingTopToolbar({
  activeTool, setActiveTool,
  zoom, zoomIn, zoomOut,
  fitMode, setFitMode,
  rotateCW, toggleFullscreen
}: FloatingTopToolbarProps) {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-[#E2E8F0] rounded-[14px] shadow-md flex items-center px-2 py-1 gap-1 z-20">
      {/* Hand/Select */}
      <div className="flex items-center gap-0.5">
        <button
          onClick={() => setActiveTool('pan')}
          className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", activeTool === 'pan' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
        >
          <Hand className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveTool('highlight')}
          className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", activeTool === 'highlight' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
        >
          <Highlighter className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveTool('draw')}
          className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", activeTool === 'draw' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
        >
          <PenTool className="w-4 h-4" />
        </button>
      </div>

      <div className="w-px h-[22px] bg-[#E2E8F0] mx-1" />

      {/* Zoom */}
      <div className="flex items-center gap-0.5">
        <button onClick={zoomOut} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
          <Minus className="w-4 h-4" />
        </button>
        <span className="text-xs font-semibold min-w-[44px] text-center text-[#0F172A]">{zoom}%</span>
        <button onClick={zoomIn} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="w-px h-[22px] bg-[#E2E8F0] mx-1" />

      {/* Fit mode */}
      <select
        value={fitMode}
        onChange={(e) => setFitMode(e.target.value)}
        className="appearance-none bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#059669] rounded-xl text-xs font-medium cursor-pointer px-2 py-1 text-[#0F172A] outline-none transition-all"
      >
        <option value="page-width">Fit Width</option>
        <option value="page-fit">Fit Page</option>
        <option value="auto">Auto</option>
      </select>

      <div className="w-px h-[22px] bg-[#E2E8F0] mx-1" />

      {/* Rotate & Fullscreen */}
      <button onClick={rotateCW} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
        <RotateCw className="w-4 h-4" />
      </button>
      <button onClick={toggleFullscreen} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
        <Maximize2 className="w-4 h-4" />
      </button>
    </div>
  );
}

interface FloatingBottomToolbarProps {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  viewMode: 'single' | 'two' | 'continuous';
  setViewMode: (v: 'single' | 'two' | 'continuous') => void;
  rotateCW: () => void;
  rotateCCW: () => void;
  currentPage: number;
  totalPages: number;
  goToPage: (p: number) => void;
  activeTool: 'pan' | 'select' | 'highlight' | 'draw' | 'laser';
  setActiveTool: (tool: 'pan' | 'select' | 'highlight' | 'draw' | 'laser') => void;
  toggleFullscreen: () => void;
}

export function FloatingBottomToolbar({
  zoom, zoomIn, zoomOut,
  viewMode, setViewMode,
  rotateCW, rotateCCW,
  currentPage, totalPages, goToPage,
  activeTool, setActiveTool,
  toggleFullscreen
}: FloatingBottomToolbarProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border border-[#E2E8F0] rounded-[14px] shadow-md flex items-center px-2 py-1 gap-1 z-20">
      <span className="text-[10.5px] font-semibold text-[#94A3B8] uppercase tracking-wide mr-1">View</span>
      <button
        onClick={() => setViewMode('single')}
        className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", viewMode === 'single' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
      >
        <FileIcon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setViewMode('two')}
        className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", viewMode === 'two' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
      >
        <BookOpen className="w-4 h-4" />
      </button>
      <button
        onClick={() => setViewMode('continuous')}
        className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", viewMode === 'continuous' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
      >
        <LayoutList className="w-4 h-4" />
      </button>

      <div className="w-px h-[22px] bg-[#E2E8F0] mx-1" />

      <span className="text-[10.5px] font-semibold text-[#94A3B8] uppercase tracking-wide mr-1">Rotate</span>
      <button onClick={rotateCCW} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
        <RotateCcw className="w-4 h-4" />
      </button>
      <button onClick={rotateCW} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
        <RotateCw className="w-4 h-4" />
      </button>

      <div className="w-px h-[22px] bg-[#E2E8F0] mx-1" />

      <span className="text-[10.5px] font-semibold text-[#94A3B8] uppercase tracking-wide mr-1">Page</span>
      <button onClick={() => goToPage(1)} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
        <SkipBack className="w-4 h-4" />
      </button>
      <button onClick={() => goToPage(currentPage - 1)} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <div className="flex items-center gap-1 px-1">
        <input
          type="number"
          value={currentPage}
          onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
          className="w-9 border border-[#E2E8F0] rounded-[4px] px-1 py-0.5 text-xs text-center bg-[#F1F5F9] outline-none focus:border-[#059669]"
          min={1}
          max={totalPages}
        />
        <span className="text-xs text-[#94A3B8]">/</span>
        <span className="text-xs font-semibold">{totalPages}</span>
      </div>
      <button onClick={() => goToPage(currentPage + 1)} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
        <ChevronRight className="w-4 h-4" />
      </button>
      <button onClick={() => goToPage(totalPages)} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
        <SkipForward className="w-4 h-4" />
      </button>

      <div className="w-px h-[22px] bg-[#E2E8F0] mx-1" />

      <span className="text-[10.5px] font-semibold text-[#94A3B8] uppercase tracking-wide mr-1">Tools</span>
      <button
        onClick={() => setActiveTool('pan')}
        className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", activeTool === 'pan' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
      >
        <Hand className="w-4 h-4" />
      </button>
      <button onClick={toggleFullscreen} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
        <Maximize2 className="w-4 h-4" />
      </button>
    </div>
  );
}
