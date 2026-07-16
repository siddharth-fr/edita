'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Search, Download, Upload, FolderOpen, ChevronLeft, ChevronRight,
  SkipBack, SkipForward, Minus, Plus, RotateCw, RotateCcw,
  Maximize2, Hand, MousePointer2, PanelLeft, FileText, X,
  ChevronUp, ChevronDown, Share2, MoreHorizontal, BookOpen, LayoutList,
  Square, Circle, ArrowUpRight, Type, Highlighter, Underline, Strikethrough,
  PenTool, Baseline, ImagePlus, Eraser, ShieldOff, FilePlus2, Trash2, Scissors,
  Info, Printer, Bookmark, StickyNote, MessageSquare, Paperclip, List,
  CloudUpload, ShieldCheck, Zap, Edit3, FolderOpen as FolderOpenIcon,
  AlertCircle, Loader2, File as FileIcon
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

import { LandingView } from './components/LandingView';
import { TopToolbar } from './components/TopToolbar';
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { FloatingTopToolbar, FloatingBottomToolbar } from './components/FloatingToolbars';
import { OpenPdfModal, PropertiesModal } from './components/Modals';
import 'pdfjs-dist/web/pdf_viewer.css';

import { fmtBytes } from './lib/utils';
import { usePdfViewer } from './hooks/usePdfViewer';
import { createPortal } from 'react-dom';
import { AnnotationLayer } from './components/AnnotationLayer';
import { ExportModal } from './components/ExportModal';

// ============================================================
// PDF VIEWER CLIENT
// ============================================================
export default function PdfViewerClient() {
  const [showExportModal, setShowExportModal] = useState(false);
  const {
    currentView, recentFiles, isDragging, isLoading, loadError,
    docTitle, fileId, totalPages, currentPage, visiblePages, zoom, showFindBar, setShowFindBar,
    findText, setFindText, findMatches, fitMode, setFitMode,
    rotation, viewMode, setViewMode, sidebarOpen, setSidebarOpen,
    rightSidebarOpen, setRightSidebarOpen, activeTool, setActiveTool,
    showOpenModal, setShowOpenModal, showProps, setShowProps,
    docProps, toastMsg,
    viewerContainerRef, canvasContainerRef, fileInputRef, findInputRef,
    loadRecent, handleDragOver, handleDragLeave, handleDrop,
    handleFileInputChange, loadFromCache, handleDeleteCache, setLoadError,
    zoomIn, zoomOut, goToPage, handleSearch,
    handlePrint, toggleFullscreen, rotateCW, rotateCCW, handleClosePdf
  } = usePdfViewer();

  const handleDownload = () => setShowExportModal(true);

  // ─── RENDER LANDING ────────────────────────────
  if (currentView === 'landing') {
    return (
      <LandingView
        recentFiles={recentFiles}
        isDragging={isDragging}
        isLoading={isLoading}
        loadError={loadError}
        toastMsg={toastMsg}
        fileInputRef={fileInputRef}
        handleDragOver={handleDragOver}
        handleDragLeave={handleDragLeave}
        handleDrop={handleDrop}
        handleFileInputChange={handleFileInputChange}
        loadFromCache={loadFromCache}
        handleDeleteCache={handleDeleteCache}
        setLoadError={setLoadError}
      />
    );
  }

  // ─── RENDER VIEWER ────────────────────────────
  return (
    <div className="flex flex-col h-screen w-full bg-[#D1D5DB] overflow-hidden">
      <TopToolbar
        setSidebarOpen={setSidebarOpen}
        loadRecent={loadRecent}
        setShowOpenModal={setShowOpenModal}
        docTitle={docTitle}
        showFindBar={showFindBar}
        setShowFindBar={setShowFindBar}
        findInputRef={findInputRef}
        findText={findText}
        setFindText={setFindText}
        handleSearch={handleSearch}
        findMatches={findMatches}
        handleDownload={handleDownload}
        handleClosePdf={handleClosePdf}
        rightSidebarOpen={rightSidebarOpen}
        setRightSidebarOpen={setRightSidebarOpen}
      />

      {/* ── Main Workspace ── */}
      <div className="flex-1 flex overflow-hidden">
        <LeftSidebar sidebarOpen={sidebarOpen} />

        {/* Viewer Area */}
        <div className="flex-1 relative overflow-hidden">
          <FloatingTopToolbar
            activeTool={activeTool as any}
            setActiveTool={setActiveTool as any}
            zoom={zoom}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            fitMode={fitMode}
            setFitMode={setFitMode}
            rotateCW={rotateCW}
            toggleFullscreen={toggleFullscreen}
          />

          {/* PDF canvas container */}
          <div
            ref={canvasContainerRef}
            className="absolute inset-0 overflow-auto bg-[#D1D5DB] p-4"
            style={{ background: 'linear-gradient(180deg, #CBD5E1, #D1D5DB)' }}
            onMouseDown={(e) => {
              if (activeTool === 'pan' && canvasContainerRef.current) {
                const el = canvasContainerRef.current;
                el.setAttribute('data-panning', 'true');
                el.setAttribute('data-start-x', e.pageX.toString());
                el.setAttribute('data-start-y', e.pageY.toString());
                el.setAttribute('data-scroll-left', el.scrollLeft.toString());
                el.setAttribute('data-scroll-top', el.scrollTop.toString());
              }
            }}
            onMouseMove={(e) => {
              if (activeTool === 'pan' && canvasContainerRef.current) {
                const el = canvasContainerRef.current;
                if (el.getAttribute('data-panning') === 'true') {
                  e.preventDefault();
                  const startX = parseFloat(el.getAttribute('data-start-x') || '0');
                  const startY = parseFloat(el.getAttribute('data-start-y') || '0');
                  const scrollLeft = parseFloat(el.getAttribute('data-scroll-left') || '0');
                  const scrollTop = parseFloat(el.getAttribute('data-scroll-top') || '0');
                  const walkX = e.pageX - startX;
                  const walkY = e.pageY - startY;
                  el.scrollLeft = scrollLeft - walkX;
                  el.scrollTop = scrollTop - walkY;
                }
              }
            }}
            onMouseUp={() => canvasContainerRef.current?.removeAttribute('data-panning')}
            onMouseLeave={() => canvasContainerRef.current?.removeAttribute('data-panning')}
          >
            {/* Pages rendered here */}
            {totalPages === 0 && !isLoading && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" />
                  <p className="text-sm text-[#475569]">Select a PDF to start viewing</p>
                </div>
              </div>
            )}

            {/* Annotation Layers mapped via Portals */}
            {fileId && visiblePages.map(pageNum => {
              const container = document.getElementById(`annot-layer-${pageNum}`);
              if (!container) return null;
              
              return createPortal(
                <AnnotationLayer
                  key={`annot-${pageNum}`}
                  fileId={fileId}
                  pageNum={pageNum}
                  activeTool={activeTool as any}
                  zoom={zoom}
                />,
                container
              );
            })}
          </div>

          <FloatingBottomToolbar
            zoom={zoom}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            viewMode={viewMode as any}
            setViewMode={setViewMode as any}
            rotateCW={rotateCW}
            rotateCCW={rotateCCW}
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
            activeTool={activeTool as any}
            setActiveTool={setActiveTool as any}
            toggleFullscreen={toggleFullscreen}
          />
        </div>

        <RightSidebar
          rightSidebarOpen={rightSidebarOpen}
          viewMode={viewMode}
          setViewMode={setViewMode}
          toggleFullscreen={toggleFullscreen}
          setShowProps={setShowProps}
          handlePrint={handlePrint}
        />
      </div>

      <OpenPdfModal
        showOpenModal={showOpenModal}
        setShowOpenModal={setShowOpenModal}
        isDragging={isDragging}
        handleDragOver={handleDragOver}
        handleDragLeave={handleDragLeave}
        handleDrop={handleDrop}
        fileInputRef={fileInputRef}
        recentFiles={recentFiles}
        loadFromCache={loadFromCache}
      />

      <PropertiesModal
        showProps={showProps}
        setShowProps={setShowProps}
        docProps={docProps}
      />

      <ExportModal
        show={showExportModal}
        onClose={() => setShowExportModal(false)}
        pdfDoc={null}
        canvasContainerRef={canvasContainerRef}
      />

      {/* ── Toast ── */}
      {toastMsg && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white px-5 py-2.5 rounded-xl shadow-md text-sm font-medium z-[1000] transition-opacity">
          {toastMsg}
        </div>
      )}
    </div>
  );
}