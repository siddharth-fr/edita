export interface CachedFile {
  id: string;
  name: string;
  size: number;
  data: ArrayBuffer;
  ts: number;
}

const DB_NAME = 'EditaPDFCache';
const DB_STORE = 'recent_files';
const ANNOT_STORE = 'annotations';
const MAX_CACHE_SIZE = 200 * 1024 * 1024; // 200 MB

export interface AnnotationElement {
  type: 'highlight' | 'pen' | 'laser';
  path?: { x: number; y: number }[];
  color: string;
  width?: number;
  opacity?: number;
}

export interface PageAnnotations {
  id: string; // `${fileId}_${pageIndex}`
  fileId: string;
  pageIndex: number;
  elements: AnnotationElement[];
}

export function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 2);
    req.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(ANNOT_STORE)) {
        const annotStore = db.createObjectStore(ANNOT_STORE, { keyPath: 'id' });
        annotStore.createIndex('fileId', 'fileId', { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveFileToCache(file: File, buf: ArrayBuffer): Promise<void> {
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

export async function getRecentFilesFromCache(): Promise<CachedFile[]> {
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

export async function deleteFileFromCache(id: string): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(DB_STORE, 'readwrite');
  tx.objectStore(DB_STORE).delete(id);
  await new Promise<void>((r) => (tx.oncomplete = () => r()));
}

export async function saveAnnotations(fileId: string, pageIndex: number, elements: AnnotationElement[]): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(ANNOT_STORE, 'readwrite');
  tx.objectStore(ANNOT_STORE).put({
    id: `${fileId}_${pageIndex}`,
    fileId,
    pageIndex,
    elements,
  });
  await new Promise<void>((r) => (tx.oncomplete = () => r()));
}

export async function getAnnotations(fileId: string, pageIndex: number): Promise<AnnotationElement[]> {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(ANNOT_STORE, 'readonly');
    const req = tx.objectStore(ANNOT_STORE).get(`${fileId}_${pageIndex}`);
    req.onsuccess = () => {
      if (req.result) {
        resolve((req.result as PageAnnotations).elements);
      } else {
        resolve([]);
      }
    };
    req.onerror = () => resolve([]);
  });
}

export { MAX_CACHE_SIZE };
