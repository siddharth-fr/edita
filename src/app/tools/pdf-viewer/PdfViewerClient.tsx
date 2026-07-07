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

// ============================================================
// TYPES
// ============================================================
interface CachedFile {
  id: string;
  name: string;
  size: number;
  data: ArrayBuffer;
  ts: number;
}

// ============================================================
// CONSTANTS
// ============================================================
const DB_NAME = 'EditaPDFCache';
const DB_STORE = 'recent_files';
const MAX_CACHE_SIZE = 200 * 1024 * 1024; // 200 MB

// ============================================================
// INDEXED DB CACHE
// ============================================================
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveFileToCache(file: File, buf: ArrayBuffer): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(DB_STORE, 'readwrite');
  tx.objectStore(DB_STORE).put({
    id: `${file.name}_${file.size}`,
    name: file.name,
    size: file.size,
    data: buf,
    ts: Date.now(),
  });
  await new Promise<void>((r) => (tx.oncomplete = () => r()));
}

async function getRecentFilesFromCache(): Promise<CachedFile[]> {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(DB_STORE, 'readonly');
    const req = tx.objectStore(DB_STORE).getAll();
    req.onsuccess = () => {
      const files = (req.result as CachedFile[]).sort((a, b) => b.ts - a.ts);
      resolve(files);
    };
    req.onerror = () => resolve([]);
  });
}

async function deleteFileFromCache(id: string): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(DB_STORE, 'readwrite');
  tx.objectStore(DB_STORE).delete(id);
  await new Promise<void>((r) => (tx.oncomplete = () => r()));
}

// ============================================================
// FORMAT HELPERS
// ============================================================
function fmtBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

function formatTime(ts: number): string {
  const diff = Date.now() - ts;
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return `${Math.floor(diff / 86400000)}d ago`;
}

// ============================================================
// PDF VIEWER CLIENT
// ============================================================
export default function PdfViewerClient() {
  // ─── STATE ──────────────────────────────────────
  const [currentView, setCurrentView] = useState<'landing' | 'viewer'>('landing');
  const [recentFiles, setRecentFiles] = useState<CachedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Viewer state
  const [docTitle, setDocTitle] = useState('document.pdf');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [showFindBar, setShowFindBar] = useState(false);
  const [findText, setFindText] = useState('');
  const [findMatches, setFindMatches] = useState({ current: 0, total: 0 });
  const [fitMode, setFitMode] = useState('auto');
  const [rotation, setRotation] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'two' | 'continuous'>('continuous');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [activeTool, setActiveTool] = useState<'hand' | 'select'>('hand');
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [showProps, setShowProps] = useState(false);
  const [docProps, setDocProps] = useState<Record<string, string>>({});
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Refs
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const pdfDocRef = useRef<any>(null);
  const renderedPages = useRef<Set<number>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);
  const findInputRef = useRef<HTMLInputElement>(null);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  // ─── LOAD PDF.JS ────────────────────────────────
  useEffect(() => {
    const loadPdfJs = async () => {
      try {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url
        ).toString();
      } catch (e) {
        // Fallback CDN worker
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        document.head.appendChild(script);
      }
    };
    loadPdfJs();
  }, []);

  // ─── TOAST ──────────────────────────────────────
  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastMsg(null), 2800);
  }, []);

  // ─── LOAD RECENT FILES ──────────────────────────
  const loadRecent = useCallback(async () => {
    const files = await getRecentFilesFromCache();
    setRecentFiles(files);
  }, []);

  useEffect(() => {
    loadRecent();
  }, [loadRecent]);

  // ─── RENDER PAGE ────────────────────────────────
  const renderPage = useCallback(async (pdfDoc: any, pageNum: number, container: HTMLDivElement) => {
    if (renderedPages.current.has(pageNum)) return;
    renderedPages.current.add(pageNum);

    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: zoom / 100, rotation });

    const canvas = document.createElement('canvas');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    canvas.className = 'pdf-page-canvas';
    canvas.dataset.pageNum = String(pageNum);

    const wrapper = document.createElement('div');
    wrapper.className = 'pdf-page-wrapper';
    wrapper.style.cssText = `margin: 12px auto; box-shadow: 0 2px 8px rgba(0,0,0,0.12); border-radius: 4px; overflow: hidden;`;
    wrapper.appendChild(canvas);
    container.appendChild(wrapper);

    const ctx = canvas.getContext('2d')!;
    await page.render({ canvasContext: ctx, viewport }).promise;
  }, [zoom, rotation]);

  // ─── LOAD PDF ──────────────────────────────────
  const loadPdf = useCallback(async (buffer: ArrayBuffer, name: string) => {
    setIsLoading(true);
    setLoadError(null);

    try {
      const pdfjsLib = await import('pdfjs-dist');
      const pdfDoc = await pdfjsLib.getDocument({ data: buffer.slice(0) }).promise;
      pdfDocRef.current = pdfDoc;
      setDocTitle(name);
      setTotalPages(pdfDoc.numPages);
      setCurrentPage(1);
      setZoom(100);
      setRotation(0);
      renderedPages.current = new Set();

      setCurrentView('viewer');

      // Render pages
      if (canvasContainerRef.current) {
        canvasContainerRef.current.innerHTML = '';
        const promises: Promise<void>[] = [];
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          promises.push(renderPage(pdfDoc, i, canvasContainerRef.current));
        }
        await Promise.all(promises);
      }

      // Get metadata
      try {
        const meta = await pdfDoc.getMetadata();
        const info = meta.info || {};
        setDocProps({
          'File Name': name,
          'File Size': fmtBytes(buffer.byteLength),
          'Pages': String(pdfDoc.numPages),
          'Title': (info as any).Title || '—',
          'Author': (info as any).Author || '—',
          'Creator': (info as any).Creator || '—',
          'Producer': (info as any).Producer || '—',
          'Created': (info as any).CreationDate ? String((info as any).CreationDate).replace('D:', '') : '—',
        });
      } catch {}

      showToast('PDF loaded successfully');
    } catch (err) {
      console.error('PDF load error:', err);
      setLoadError('Failed to load PDF. The file may be corrupted or password-protected.');
    } finally {
      setIsLoading(false);
    }
  }, [renderPage, showToast]);

  // ─── HANDLE FILE ───────────────────────────────
  const handleFile = useCallback(async (file: File) => {
    if (file.type !== 'application/pdf') {
      showToast('Please select a valid PDF file.');
      return;
    }

    if (file.size > MAX_CACHE_SIZE) {
      showToast('File is too large. Maximum size is 200 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const buf = e.target?.result as ArrayBuffer;
      if (!buf) return;

      // Cache the file
      await saveFileToCache(file, buf);

      // Reload recent files
      await loadRecent();

      // Load the PDF
      await loadPdf(buf, file.name);
    };
    reader.onerror = () => showToast('Failed to read file.');
    reader.readAsArrayBuffer(file);
  }, [loadPdf, loadRecent, showToast]);

  // ─── LOAD FROM CACHE ──────────────────────────
  const loadFromCache = useCallback(async (cached: CachedFile) => {
    await loadPdf(cached.data, cached.name);
  }, [loadPdf]);

  // ─── DRAG & DROP ──────────────────────────────
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  // ─── FILE INPUT ────────────────────────────────
  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = '';
  }, [handleFile]);

  // ─── DELETE CACHED FILE ───────────────────────
  const handleDeleteCache = useCallback(async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    await deleteFileFromCache(id);
    await loadRecent();
  }, [loadRecent]);

  // ─── ZOOM ──────────────────────────────────────
  const zoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 25, 400));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((prev) => Math.max(prev - 25, 25));
  }, []);

  // ─── NAVIGATION ────────────────────────────────
  const goToPage = useCallback((page: number) => {
    if (!pdfDocRef.current) return;
    const p = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(p);

    // Scroll to the page canvas
    const canvas = canvasContainerRef.current?.querySelector(
      `[data-page-num="${p}"]`
    ) as HTMLElement | null;
    canvas?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [totalPages]);

  // ─── EXPORT DOWNLOAD ──────────────────────────
  const handleDownload = useCallback(() => {
    if (!pdfDocRef.current) return;
    // Re-fetch from the pdf doc or use the original approach
    const canvas = canvasContainerRef.current?.querySelector('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;

    // Simple download: print to PDF
    window.print();
  }, []);

  // ─── RERENDER ON ZOOM/ROTATION CHANGE ─────────
  useEffect(() => {
    if (!pdfDocRef.current || currentView !== 'viewer') return;

    const rerender = async () => {
      if (!canvasContainerRef.current) return;
      canvasContainerRef.current.innerHTML = '';
      renderedPages.current = new Set();

      const promises: Promise<void>[] = [];
      for (let i = 1; i <= totalPages; i++) {
        promises.push(renderPage(pdfDocRef.current, i, canvasContainerRef.current));
      }
      await Promise.all(promises);
    };
    rerender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom, rotation, currentView]);

  // ─── SEARCH ────────────────────────────────────
  const handleSearch = useCallback((dir: 'next' | 'prev' = 'next') => {
    if (!findText.trim()) return;

    const allText = document.querySelectorAll('.pdf-page-wrapper');
    let found = false;

    allText.forEach((wrapper) => {
      const el = wrapper as HTMLElement;
      const text = el.textContent?.toLowerCase() || '';
      if (text.includes(findText.toLowerCase())) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.outline = '3px solid #059669';
        setTimeout(() => { el.style.outline = ''; }, 2000);
        found = true;
      }
    });

    if (!found) {
      setFindMatches({ current: 0, total: 0 });
    }
  }, [findText]);

  // ─── PRINT ─────────────────────────────────────
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // ─── FULLSCREEN ────────────────────────────────
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }, []);

  // ─── ROTATE ────────────────────────────────────
  const rotateCW = useCallback(() => {
    setRotation((prev) => (prev + 90) % 360);
  }, []);

  const rotateCCW = useCallback(() => {
    setRotation((prev) => (prev + 270) % 360);
  }, []);

  // ─── CLOSE PDF ─────────────────────────────────
  const handleClosePdf = useCallback(() => {
    pdfDocRef.current = null;
    renderedPages.current = new Set();
    setCurrentView('landing');
    setDocTitle('document.pdf');
    setTotalPages(0);
    setCurrentPage(1);
    setZoom(100);
    setRotation(0);
    setShowFindBar(false);
    setFindText('');
  }, []);

  // ─── KEYBOARD SHORTCUTS ────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (currentView !== 'viewer') return;

      if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        setShowFindBar((prev) => !prev);
        if (!showFindBar) setTimeout(() => findInputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') {
        setShowFindBar(false);
        setShowOpenModal(false);
        setShowProps(false);
      }
      if (e.ctrlKey && e.key === '=') { e.preventDefault(); zoomIn(); }
      if (e.ctrlKey && e.key === '-') { e.preventDefault(); zoomOut(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [currentView, showFindBar, zoomIn, zoomOut]);

  // ─── RENDER LANDING ────────────────────────────
  if (currentView === 'landing') {
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

  // ─── RENDER VIEWER ────────────────────────────
  return (
    <div className="flex flex-col h-screen w-full bg-[#D1D5DB] overflow-hidden">
      {/* ── Top Navbar ── */}
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
            edit<span className="text-[#059669]">a</span>.
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
            <Download className="w-4 h-4" /> Download
          </button>
          <button
            onClick={handleClosePdf}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#475569] hover:bg-red-50 hover:text-red-500 transition-all"
            title="Close PDF"
          >
            <X className="w-[18px] h-[18px]" />
          </button>
        </div>
      </header>

      {/* ── Main Workspace ── */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <aside
          className={cn(
            "w-[220px] bg-white border-r border-[#E2E8F0] flex flex-col shrink-0 overflow-y-auto transition-all duration-300",
            !sidebarOpen && "-ml-[220px]"
          )}
        >
          <nav className="p-2.5 space-y-0.5">
            {[
              { icon: FileIcon, label: 'Pages', active: true },
              { icon: List, label: 'Outline' },
              { icon: Bookmark, label: 'Bookmarks' },
              { icon: Highlighter, label: 'Highlights' },
              { icon: StickyNote, label: 'Notes' },
              { icon: MessageSquare, label: 'Comments' },
              { icon: Paperclip, label: 'Attachments' },
              { icon: Search, label: 'Search' },
            ].map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                className={cn(
                  "w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-all text-left",
                  active
                    ? "bg-[#ECFDF5] text-[#059669]"
                    : "text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
                )}
              >
                <Icon className="w-[17px] h-[17px] shrink-0" />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Viewer Area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Top floating toolbar */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-[#E2E8F0] rounded-[14px] shadow-md flex items-center px-2 py-1 gap-1 z-20">
            {/* Hand/Select */}
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => setActiveTool('hand')}
                className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", activeTool === 'hand' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
              >
                <Hand className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTool('select')}
                className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", activeTool === 'select' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
              >
                <MousePointer2 className="w-4 h-4" />
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
              className="appearance-none bg-transparent border-none text-xs font-medium cursor-pointer px-1 py-0.5 text-[#0F172A] outline-none"
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

          {/* PDF canvas container */}
          <div
            ref={canvasContainerRef}
            className="absolute inset-0 overflow-auto bg-[#D1D5DB] p-4"
            style={{ background: 'linear-gradient(180deg, #CBD5E1, #D1D5DB)' }}
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
          </div>

          {/* Bottom floating toolbar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border border-[#E2E8F0] rounded-[14px] shadow-md flex items-center px-2 py-1 gap-1 z-20">
            <span className="text-[10.5px] font-semibold text-[#94A3B8] uppercase tracking-wide mr-1">Zoom</span>
            <button onClick={zoomOut} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold min-w-[44px] text-center text-[#0F172A]">{zoom}%</span>
            <button onClick={zoomIn} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
              <Plus className="w-4 h-4" />
            </button>

            <div className="w-px h-[22px] bg-[#E2E8F0] mx-1" />

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
              onClick={() => setActiveTool('hand')}
              className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", activeTool === 'hand' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
            >
              <Hand className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTool('select')}
              className={cn("inline-flex items-center justify-center w-[30px] h-[30px] rounded-md transition-all", activeTool === 'select' ? 'bg-[#ECFDF5] text-[#059669]' : 'text-[#475569] hover:bg-[#F1F5F9]')}
            >
              <MousePointer2 className="w-4 h-4" />
            </button>
            <button onClick={toggleFullscreen} className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-md text-[#475569] hover:bg-[#F1F5F9]">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
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
              ].map(({ icon: Icon, label, mode, onClick }) => (
                <button
                  key={label}
                  onClick={onClick || (() => mode && setViewMode(mode))}
                  className={cn(
                    "flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl border transition-all",
                    mode && viewMode === mode
                      ? "bg-[#ECFDF5] border-[#6EE7B7]"
                      : "border-transparent hover:bg-[#F1F5F9]"
                  )}
                >
                  <Icon className={cn("w-[22px] h-[22px]", mode && viewMode === mode ? 'text-[#059669]' : 'text-[#475569]')} />
                  <span className={cn("text-[10.5px] font-medium text-center", mode && viewMode === mode ? 'text-[#059669]' : 'text-[#475569]')}>
                    {label}
                  </span>
                </button>
              ))}
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
                  className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl border border-transparent hover:bg-[#F1F5F9] transition-all"
                >
                  <Icon className="w-[22px] h-[22px] text-[#475569]" />
                  <span className="text-[10.5px] font-medium text-[#475569] text-center">{label}</span>
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
                  className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl border border-transparent hover:bg-[#F1F5F9] transition-all"
                >
                  <Icon className="w-[22px] h-[22px] text-[#475569]" />
                  <span className="text-[10.5px] font-medium text-[#475569] text-center">{label}</span>
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
                  className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl border border-transparent hover:bg-[#F1F5F9] transition-all"
                >
                  <Icon className="w-[22px] h-[22px] text-[#475569]" />
                  <span className="text-[10.5px] font-medium text-[#475569] text-center">{label}</span>
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
                className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl border border-transparent hover:bg-[#F1F5F9] transition-all"
              >
                <Info className="w-[22px] h-[22px] text-[#475569]" />
                <span className="text-[10.5px] font-medium text-[#475569] text-center">Properties</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex flex-col items-center gap-1.5 px-1.5 py-3 rounded-xl border border-transparent hover:bg-[#F1F5F9] transition-all"
              >
                <Printer className="w-[22px] h-[22px] text-[#475569]" />
                <span className="text-[10.5px] font-medium text-[#475569] text-center">Print</span>
              </button>
            </div>
          </section>
        </aside>
      </div>

      {/* ── Open File Modal ── */}
      {showOpenModal && (
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
      )}

      {/* ── Properties Modal ── */}
      {showProps && (
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
                  <span className="text-[#0F172A] break-all">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toastMsg && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white px-5 py-2.5 rounded-xl shadow-md text-sm font-medium z-[1000] transition-opacity">
          {toastMsg}
        </div>
      )}
    </div>
  );
}