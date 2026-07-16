import React from 'react';
import { cn } from '@/lib/utils';
import {
  File as FileIcon, BookOpen, LayoutList, Maximize2, Highlighter, Underline,
  Strikethrough, PenTool, Square, Circle, ArrowUpRight, Type, Baseline,
  ImagePlus, Eraser, ShieldOff, FilePlus2, Trash2, RotateCw, Scissors, Info, Printer
} from 'lucide-react';

interface RightSidebarProps {
  rightSidebarOpen: boolean;
  viewMode: 'single' | 'two' | 'continuous';
  setViewMode: React.Dispatch<React.SetStateAction<'single' | 'two' | 'continuous'>>;
  toggleFullscreen: () => void;
  setShowProps: (v: boolean) => void;
  handlePrint: () => void;
}

export function RightSidebar({
  rightSidebarOpen,
  viewMode,
  setViewMode,
  toggleFullscreen,
  setShowProps,
  handlePrint
}: RightSidebarProps) {
  return (
    <aside
      className={cn(
        "w-[280px] bg-white border-l border-[#E2E8F0] flex flex-col overflow-y-auto shrink-0 transition-all duration-300",
        !rightSidebarOpen && "-mr-[280px]"
      )}
    >
      {/* VIEW */}
      <section className="px-4 py-5 border-b border-[#E2E8F0]">
        <div className="text-[10.5px] font-bold text-[#94A3B8] tracking-wider uppercase mb-3.5">VIEW</div>
        <div className="grid grid-cols-4 gap-2.5">
          {[
            { icon: FileIcon, label: 'Single Page', mode: 'single' as const },
            { icon: BookOpen, label: 'Two Page', mode: 'two' as const },
            { icon: LayoutList, label: 'Continuous', mode: 'continuous' as const },
            { icon: Maximize2, label: 'Fullscreen', onClick: toggleFullscreen },
          ].map(({ icon: Icon, label, mode, onClick }) => {
            const isActive = mode && viewMode === mode;
            return (
              <button
                key={label}
                onClick={onClick || (() => mode && setViewMode(mode))}
                className={cn(
                  "flex flex-col items-center gap-1.5 px-1.5 py-3 transition-all rounded-xl",
                  isActive
                    ? "text-[#059669]"
                    : "text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9]"
                )}
              >
                <Icon className="w-[22px] h-[22px]" />
                <span className="text-[10.5px] font-medium text-center">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ANNOTATE */}
      <section className="px-4 py-5 border-b border-[#E2E8F0]">
        <div className="text-[10.5px] font-bold text-[#94A3B8] tracking-wider uppercase mb-3.5">ANNOTATE</div>
        <div className="grid grid-cols-4 gap-2.5">
          {[
            { icon: Highlighter, label: 'Highlight' },
            { icon: Underline, label: 'Underline' },
            { icon: Strikethrough, label: 'Strikethrough' },
            { icon: PenTool, label: 'Pen' },
            { icon: Square, label: 'Rectangle' },
            { icon: Circle, label: 'Circle' },
            { icon: ArrowUpRight, label: 'Arrow' },
            { icon: Type, label: 'Text' },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl transition-all text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9]"
            >
              <Icon className="w-[22px] h-[22px]" />
              <span className="text-[10.5px] font-medium text-center">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* EDIT */}
      <section className="px-4 py-5 border-b border-[#E2E8F0]">
        <div className="text-[10.5px] font-bold text-[#94A3B8] tracking-wider uppercase mb-3.5">EDIT</div>
        <div className="grid grid-cols-4 gap-2.5">
          {[
            { icon: Baseline, label: 'Add Text' },
            { icon: ImagePlus, label: 'Add Image' },
            { icon: Eraser, label: 'Eraser' },
            { icon: ShieldOff, label: 'Redact' },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl transition-all text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9]"
            >
              <Icon className="w-[22px] h-[22px]" />
              <span className="text-[10.5px] font-medium text-center">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* PAGES */}
      <section className="px-4 py-5 border-b border-[#E2E8F0]">
        <div className="text-[10.5px] font-bold text-[#94A3B8] tracking-wider uppercase mb-3.5">PAGES</div>
        <div className="grid grid-cols-4 gap-2.5">
          {[
            { icon: FilePlus2, label: 'Insert' },
            { icon: Trash2, label: 'Delete' },
            { icon: RotateCw, label: 'Rotate' },
            { icon: Scissors, label: 'Extract' },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl transition-all text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9]"
            >
              <Icon className="w-[22px] h-[22px]" />
              <span className="text-[10.5px] font-medium text-center">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* DOCUMENT */}
      <section className="px-4 py-5">
        <div className="text-[10.5px] font-bold text-[#94A3B8] tracking-wider uppercase mb-3.5">DOCUMENT</div>
        <div className="grid grid-cols-4 gap-2.5">
          <button
            onClick={() => setShowProps(true)}
            className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl transition-all text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9]"
          >
            <Info className="w-[22px] h-[22px]" />
            <span className="text-[10.5px] font-medium text-center">Properties</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl transition-all text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9]"
          >
            <Printer className="w-[22px] h-[22px]" />
            <span className="text-[10.5px] font-medium text-center">Print</span>
          </button>
        </div>
      </section>
    </aside>
  );
}
