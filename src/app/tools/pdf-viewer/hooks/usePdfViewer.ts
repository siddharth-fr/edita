import { useState, useEffect, useRef, useCallback } from 'react';
import { CachedFile, saveFileToCache, getRecentFilesFromCache, deleteFileFromCache, MAX_CACHE_SIZE } from '../lib/idb';
import { fmtBytes } from '../lib/utils';

export function usePdfViewer() {
  // ─── STATE ──────────────────────────────────────
  const [currentView, setCurrentView] = useState<'landing' | 'viewer'>('landing');
  const [recentFiles, setRecentFiles] = useState<CachedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Viewer state
  const [docTitle, setDocTitle] = useState('document.pdf');
  const [fileId, setFileId] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  const [zoom, setZoom] = useState(100);
  const [showFindBar, setShowFindBar] = useState(false);
  const [findText, setFindText] = useState('');
  const [findMatches, setFindMatches] = useState({ current: 0, total: 0 });
  const [fitMode, setFitMode] = useState('auto');
  const [rotation, setRotation] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'two' | 'continuous'>('continuous');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [activeTool, setActiveTool] = useState<'select' | 'pan' | 'highlight' | 'draw' | 'laser' | 'shape' | 'erase'>('select');
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [showProps, setShowProps] = useState(false);
  const [docProps, setDocProps] = useState<Record<string, string>>({});
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Refs
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const pdfDocRef = useRef<any>(null);
  const renderedSpreads = useRef<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pageObserverRef = useRef<IntersectionObserver | null>(null);
  const defaultViewport = useRef<{width: number; height: number} | null>(null);
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

  // ─── SPREAD RENDERERS ──────────────────────────
  const renderSpread = async (spreadIdx: number, container: HTMLElement, pdfDoc: any, currentZoom: number, currentRotation: number, isTwo: boolean) => {
    if (renderedSpreads.current.has(spreadIdx)) return;
    renderedSpreads.current.add(spreadIdx);
    
    const pagesToRender = [];
    if (isTwo) {
      const p1 = spreadIdx * 2 + 1;
      const p2 = spreadIdx * 2 + 2;
      if (p1 <= pdfDoc.numPages) pagesToRender.push(p1);
      if (p2 <= pdfDoc.numPages) pagesToRender.push(p2);
    } else {
      pagesToRender.push(spreadIdx + 1);
    }

    for (const pageNum of pagesToRender) {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: currentZoom / 100, rotation: currentRotation });

      const pixelRatio = window.devicePixelRatio || 1;

      const pageWrapper = document.createElement('div');
      pageWrapper.className = 'pdf-page-wrapper';
      pageWrapper.dataset.pageNum = String(pageNum);
      pageWrapper.style.cssText = `box-shadow: 0 2px 8px rgba(0,0,0,0.12); border-radius: 4px; overflow: hidden; position: relative; width: ${viewport.width}px; height: ${viewport.height}px; background: white; flex-shrink: 0;`;

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width * pixelRatio;
      canvas.height = viewport.height * pixelRatio;
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      canvas.className = 'pdf-page-canvas';
      canvas.style.display = 'block';
      pageWrapper.appendChild(canvas);

      const textLayerDiv = document.createElement('div');
      textLayerDiv.className = 'pdf-text-layer textLayer';
      textLayerDiv.style.cssText = `position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; opacity: 0.2; line-height: 1; --scale-factor: ${viewport.scale};`;
      pageWrapper.appendChild(textLayerDiv);

      const svgOverlay = document.createElement('div');
      svgOverlay.id = `annot-layer-${pageNum}`;
      svgOverlay.setAttribute('class', 'pdf-annot-layer-container');
      svgOverlay.style.cssText = `position: absolute; left: 0; top: 0; right: 0; bottom: 0; z-index: 2; pointer-events: none;`;
      pageWrapper.appendChild(svgOverlay);

      container.appendChild(pageWrapper);

      const ctx = canvas.getContext('2d')!;
      ctx.scale(pixelRatio, pixelRatio);
      page.render({ canvasContext: ctx, viewport }).promise.then(async () => {
        try {
          const textContent = await page.getTextContent();
          const pdfjsLib = await import('pdfjs-dist');
          
          if (typeof window !== 'undefined' && !(window as any).pdfjsLib) {
            (window as any).pdfjsLib = pdfjsLib;
          }

          const textLayer = new pdfjsLib.TextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport: viewport,
          });
          
          await textLayer.render();
          
          setVisiblePages(prev => {
            if (!prev.includes(pageNum)) return [...prev, pageNum];
            return prev;
          });
        } catch (e) {
          console.error('Text layer error:', e);
        }
      });
    }
  };

  const cleanupSpread = (spreadIdx: number, container: HTMLElement, isTwo: boolean, pdfDoc: any) => {
    if (!renderedSpreads.current.has(spreadIdx)) return;
    renderedSpreads.current.delete(spreadIdx);
    container.innerHTML = '';
    
    // Determine which pages were in this spread and remove them from visiblePages
    const pagesToRemove: number[] = [];
    if (isTwo) {
      const p1 = spreadIdx * 2 + 1;
      const p2 = spreadIdx * 2 + 2;
      if (p1 <= pdfDoc.numPages) pagesToRemove.push(p1);
      if (p2 <= pdfDoc.numPages) pagesToRemove.push(p2);
    } else {
      pagesToRemove.push(spreadIdx + 1);
    }
    
    setVisiblePages(prev => prev.filter(p => !pagesToRemove.includes(p)));
  };

  // ─── LOAD PDF ──────────────────────────────────
  const loadPdf = useCallback(async (buffer: ArrayBuffer, name: string) => {
    setIsLoading(true);
    setLoadError(null);

    try {
      const pdfjsLib = await import('pdfjs-dist');
      const pdfDoc = await pdfjsLib.getDocument({ data: buffer.slice(0) }).promise;
      pdfDocRef.current = pdfDoc;
      setDocTitle(name);
      setFileId(`${name}_${buffer.byteLength}`);
      setTotalPages(pdfDoc.numPages);
      setCurrentPage(1);
      setZoom(100);
      setRotation(0);
      setVisiblePages([]);
      renderedSpreads.current.clear();
      const firstPage = await pdfDoc.getPage(1);
      const vp = firstPage.getViewport({ scale: 1 });
      defaultViewport.current = { width: vp.width, height: vp.height };

      setCurrentView('viewer');

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
  }, [showToast]);

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
      await saveFileToCache(file, buf);
      await loadRecent();
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

    const isTwo = viewMode === 'two';
    const spreadIdx = isTwo ? Math.floor((p - 1) / 2) : p - 1;
    
    const spreadDiv = canvasContainerRef.current?.querySelector(
      `[data-spread-idx="${spreadIdx}"]`
    ) as HTMLElement | null;
    
    spreadDiv?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [totalPages, viewMode]);


  // ─── VIRTUALIZATION & RENDER ──────────────────
  useEffect(() => {
    if (!pdfDocRef.current || currentView !== 'viewer' || !canvasContainerRef.current || !defaultViewport.current) return;

    const container = canvasContainerRef.current;
    container.innerHTML = '';
    renderedSpreads.current.clear();
    setVisiblePages([]);
    
    if (observerRef.current) observerRef.current.disconnect();
    if (pageObserverRef.current) pageObserverRef.current.disconnect();

    const pdfDoc = pdfDocRef.current;
    const isTwo = viewMode === 'two';
    const numSpreads = isTwo ? Math.ceil(pdfDoc.numPages / 2) : pdfDoc.numPages;

    const baseW = defaultViewport.current.width * (zoom / 100);
    const baseH = defaultViewport.current.height * (zoom / 100);
    const isLandscape = rotation % 180 !== 0;
    const phWidth = isLandscape ? baseH : baseW;
    const phHeight = isLandscape ? baseW : baseH;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const spreadIdx = Number((entry.target as HTMLElement).dataset.spreadIdx);
        if (entry.isIntersecting) {
          renderSpread(spreadIdx, entry.target as HTMLElement, pdfDoc, zoom, rotation, isTwo);
        } else {
          cleanupSpread(spreadIdx, entry.target as HTMLElement, isTwo, pdfDoc);
        }
      });
    }, { root: container, rootMargin: '100% 0px 100% 0px' });
    
    observerRef.current = observer;

    const pageObserver = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let targetSpread = -1;
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          targetSpread = Number((entry.target as HTMLElement).dataset.spreadIdx);
        }
      });
      if (targetSpread !== -1) {
        setCurrentPage(isTwo ? targetSpread * 2 + 1 : targetSpread + 1);
      }
    }, { root: container, threshold: [0.1, 0.5, 0.9] });
    
    pageObserverRef.current = pageObserver;

    for (let i = 0; i < numSpreads; i++) {
      const spreadDiv = document.createElement('div');
      spreadDiv.className = 'pdf-spread-wrapper';
      spreadDiv.dataset.spreadIdx = String(i);
      spreadDiv.style.cssText = `
        margin: 12px auto;
        display: flex;
        justify-content: center;
        gap: 12px;
        min-height: ${phHeight}px;
        min-width: ${isTwo ? phWidth * 2 + 12 : phWidth}px;
      `;
      container.appendChild(spreadDiv);
      observer.observe(spreadDiv);
      pageObserver.observe(spreadDiv);
    }
  }, [zoom, rotation, viewMode, currentView, totalPages]);

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
    renderedSpreads.current.clear();
    setVisiblePages([]);
    setCurrentView('landing');
    setDocTitle('document.pdf');
    setFileId(null);
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

  return {
    // State
    currentView, setCurrentView,
    recentFiles, setRecentFiles,
    isDragging, setIsDragging,
    isLoading, setIsLoading,
    loadError, setLoadError,
    docTitle, setDocTitle,
    fileId, setFileId,
    totalPages, setTotalPages,
    currentPage, setCurrentPage,
    visiblePages,
    zoom, setZoom,
    showFindBar, setShowFindBar,
    findText, setFindText,
    findMatches, setFindMatches,
    fitMode, setFitMode,
    rotation, setRotation,
    viewMode, setViewMode,
    sidebarOpen, setSidebarOpen,
    rightSidebarOpen, setRightSidebarOpen,
    activeTool, setActiveTool,
    showOpenModal, setShowOpenModal,
    showProps, setShowProps,
    docProps, setDocProps,
    toastMsg, setToastMsg,
    
    // Refs
    viewerContainerRef,
    canvasContainerRef,
    fileInputRef,
    findInputRef,
    
    // Functions
    loadRecent,
    loadPdf,
    handleFile,
    loadFromCache,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInputChange,
    handleDeleteCache,
    zoomIn,
    zoomOut,
    goToPage,
    handleSearch,
    handlePrint,
    toggleFullscreen,
    rotateCW,
    rotateCCW,
    handleClosePdf,
  };
}
