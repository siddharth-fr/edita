## Implementation Plan: PdfViewerClient Upgrade

### Phase 0 — UI Audit (current state → gaps)

| Area                   | Current                                   | Issue                                               | Fix                                                                                                              |
| ---------------------- | ----------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Text layer             | Canvas-only render                        | No selection/copy possible                          | Add pdfjs `TextLayerBuilder` as transparent DOM layer over canvas                                                |
| Toolbar                | Single flat row (zoom, rotate, fit, hand) | Will overcrowd once annotate/laser/snap tools added | Split into: Primary toolbar (nav/zoom/fit) + Tool palette (select/highlight/draw/laser) that toggles active mode |
| Sidebar                | Thumbnails/outline only                   | No annotation list, no page-export entry point      | Add tabs: Pages / Outline / Annotations                                                                          |
| Page view              | Single page only                          | No two-page/facing mode                             | Add view-mode toggle (Single / Facing / Continuous)                                                              |
| Cursor modes           | Only "hand tool" implied                  | No explicit mode state machine                      | Introduce single `activeTool` enum driving cursor + click behavior                                               |
| Export                 | None                                      | No JPG export, no photo import                      | New modal component, separate from main viewer state                                                             |
| Annotation persistence | None                                      | Marks would be lost on reload                       | IndexedDB store keyed by file hash, separate object store from file cache                                        |

---

### Phase 1 — Foundational Layers (do first, everything else depends on this)

1. **Text layer** — render `TextLayerBuilder` output per page, positioned absolutely over canvas. Required for text selection tool to work at all.
2. **Tool state machine** — single source of truth: `activeTool: 'select' | 'pan' | 'highlight' | 'draw' | 'laser' | 'shape' | 'erase'`. Cursor, event handlers, and overlay interactivity all derive from this one state.
3. **Per-page overlay layer** — an `<svg>` (preferred over canvas for annotations — easier hit-testing, resolution-independent, easy to serialize/undo) stacked above text layer, below nothing (topmost). This is where highlight, draw, laser, and shapes all render.

---

### Phase 2 — View Modes

4. **Facing/two-page view**: change page-index math to spread-index (`spread = Math.floor(page/2)`), render two canvases + two overlays per spread, keep thumbnail nav in sync by mapping spread→page.
5. **Snapping**: for draw/shape tools — snap annotation edges to page bounds, other annotation bounding boxes, and a light grid (8–10px). Compute snap targets on drag-start, show a thin guide line when within threshold (~6px).

---

### Phase 3 — Annotation Tools

6. **Highlight** — text-layer-aware: if selection active, highlight wraps selected text rects (multi-line safe); if no selection, freeform highlight rect on overlay.
7. **Rotate** — already exists; just confirm it's non-destructive (stored as per-page rotation state, applied at render time, not baked into canvas).
8. **Laser tool** — ephemeral, not persisted: draws on overlay with a fade-out (opacity decay via `requestAnimationFrame` or CSS animation, ~1.5s trail), used for "explaining flow" live — no IndexedDB write needed for this one.
9. **Annotation persistence** — IndexedDB store: `{ id, fileHash, page, type, coords, color, timestamp }`. Load on file open, write on mutation (debounced).

---

### Phase 4 — Export/Import Modal (separate component, own state)

10. New `ExportImportModal.tsx`, opened from toolbar/sidebar, not inline in viewer:
    - **Export page as JPG**: render target page canvas at higher scale (e.g. 2x) off-screen, `canvas.toDataURL('image/jpeg')`, trigger download.
    - **Export annotated PDF**: use `pdf-lib` (pdfjs-dist is read-only) to flatten SVG overlay annotations into the PDF and download.
    - **Import photos**: file input → convert image to a new PDF page (via `pdf-lib`) or insert as an image annotation on current page — clarify which behavior you want, they're different features.

---
