# PdfViewerClient Upgrade Progress

This document tracks the progress of the implementation plan for the `PdfViewerClient` upgrade.

## Phase 0 — UI Audit
- [x] Analyze current state vs gaps
- [x] Identify missing features (Text layer, proper toolbar, sidebar tabs, view modes, cursor states, export, persistence)

## Phase 1 — Foundational Layers
- [x] **Text layer**: Rendered `TextLayerBuilder` output per page, positioned absolutely over canvas.
- [x] **Tool state machine**: Expanded `activeTool` enum (`select`, `pan`, `highlight`, `draw`, `laser`, `shape`, `erase`) driving cursor and click behavior.
- [x] **Per-page overlay layer**: Added `<svg>` layer stacked above the text layer for future annotations.

## Phase 2 — View Modes & Virtualization
- [x] **Virtualization**: Implemented IntersectionObserver-based rendering. Renders canvases only for pages within viewport + buffer.
- [x] **Scroll-based page tracking**: Updates `currentPage` indicator via IntersectionObserver on each spread container.
- [x] **Facing/two-page view**: Updated rendering logic to support grouping two pages per spread when layout mode is 'two'.
- [ ] **Snapping**: Add logic for draw/shape tools to snap annotation edges to bounds (to be completed alongside drawing tools).

## Phase 3 — Annotation Tools
- [ ] **Annotation persistence**: Set up IndexedDB store (`{ id, fileHash, page, type, coords, color, timestamp }`).
- [ ] **Highlight**: Implement text-layer-aware highlighting on SVG overlay.
- [x] **Rotate**: Ensure rotation handles page states non-destructively (Already implemented).
- [ ] **Laser tool**: Implement ephemeral fading drawing tool on SVG overlay.

## Phase 4 — Export/Import Modal
- [ ] **New Modal Component**: Create separate `ExportImportModal.tsx`.
- [ ] **Export page as JPG**: Render target page at 2x scale off-screen and export.
- [ ] **Export annotated PDF**: Use `pdf-lib` to flatten SVG annotations into the PDF for download.
- [ ] **Import photos**: Support inserting images into the PDF.

## Bug Fixes
- [x] Fixed `renderTextLayer` backward compatibility issue (added fallback for `pdfjs-dist` v4/v5 using `TextLayer` class).
- [x] Fixed `handleClosePdf` error (updated deprecated `renderedPages` clear logic to correctly clear `renderedSpreads`).
