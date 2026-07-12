'use client';

import { useState, useCallback, useRef } from 'react';
import Editor, { type OnMount } from '@monaco-editor/react';
import { Check, Copy, Minimize2, Maximize2, Trash2, AlertCircle, CheckCircle2, Braces } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { editor } from 'monaco-editor';

type Status = 
  | { type: 'idle' }
  | { type: 'valid'; message: string }
  | { type: 'error'; message: string };

const SAMPLE_JSON = `{
  "name": "Edita JSON Formatter",
  "version": "1.0.0",
  "features": [
    "Format & Beautify",
    "Minify",
    "Validate"
  ],
  "meta": {
    "author": "Edita",
    "private": true
  }
}`;

export function JsonFormatterClient() {
  const [value, setValue] = useState<string>(SAMPLE_JSON);
  const [status, setStatus] = useState<Status>({ type: 'idle' });
  const [copied, setCopied] = useState(false);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const handleEditorMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const parseJson = useCallback((raw: string): { parsed: unknown; error: null } | { parsed: null; error: string } => {
    try {
      return { parsed: JSON.parse(raw), error: null };
    } catch (e) {
      return { parsed: null, error: (e as Error).message };
    }
  }, []);

  const handleFormat = useCallback(() => {
    const result = parseJson(value);
    if (result.error) {
      setStatus({ type: 'error', message: result.error });
      return;
    }
    const formatted = JSON.stringify(result.parsed, null, 2);
    setValue(formatted);
    setStatus({ type: 'valid', message: 'Valid JSON — formatted successfully.' });
  }, [value, parseJson]);

  const handleMinify = useCallback(() => {
    const result = parseJson(value);
    if (result.error) {
      setStatus({ type: 'error', message: result.error });
      return;
    }
    const minified = JSON.stringify(result.parsed);
    setValue(minified);
    setStatus({ type: 'valid', message: 'Valid JSON — minified successfully.' });
  }, [value, parseJson]);

  const handleValidate = useCallback(() => {
    const result = parseJson(value.trim());
    if (result.error) {
      setStatus({ type: 'error', message: result.error });
    } else {
      setStatus({ type: 'valid', message: 'Valid JSON!' });
    }
  }, [value, parseJson]);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [value]);

  const handleClear = useCallback(() => {
    setValue('');
    setStatus({ type: 'idle' });
  }, []);

  const handleChange = useCallback((val: string | undefined) => {
    setValue(val ?? '');
    setStatus({ type: 'idle' });
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Toolbar */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
          {/* Left actions */}
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            <span className="ml-3 text-xs font-mono font-medium text-muted-foreground">input.json</span>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-all"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-all"
              title="Clear editor"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear
            </button>
          </div>
        </div>

        {/* Monaco Editor */}
        <div className="h-[480px]">
          <Editor
            height="100%"
            language="json"
            theme="light"
            value={value}
            onChange={handleChange}
            onMount={handleEditorMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
              lineHeight: 1.7,
              padding: { top: 16, bottom: 16 },
              scrollBeyondLastLine: false,
              smoothScrolling: true,
              cursorBlinking: 'smooth',
              renderLineHighlight: 'line',
              overviewRulerBorder: false,
              hideCursorInOverviewRuler: true,
              scrollbar: { verticalScrollbarSize: 6, horizontalScrollbarSize: 6 },
              lineNumbers: 'on',
              lineNumbersMinChars: 3,
              glyphMargin: false,
              folding: true,
              bracketPairColorization: { enabled: true },
              matchBrackets: 'always',
              autoClosingBrackets: 'always',
              autoClosingQuotes: 'always',
              formatOnPaste: true,
              wordWrap: 'off',
            }}
          />
        </div>
      </div>

      {/* Status Banner */}
      {status.type !== 'idle' && (
        <div
          className={`flex items-start gap-3 px-4 py-3 rounded-xl border text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-300 ${
            status.type === 'valid'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
              : 'bg-red-50 border-red-200 text-red-700'
          }`}
        >
          {status.type === 'valid' ? (
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          )}
          <span className="font-mono leading-relaxed break-all">{status.message}</span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          size="lg"
          onClick={handleFormat}
          className="flex-1 gap-2"
        >
          <Maximize2 className="w-4 h-4" />
          Format / Beautify
        </Button>
        <Button
          size="lg"
          onClick={handleMinify}
          className="flex-1 gap-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
        >
          <Minimize2 className="w-4 h-4" />
          Minify
        </Button>
        <Button
          size="lg"
          onClick={handleValidate}
          className="flex-1 gap-2 bg-slate-700 hover:bg-slate-800 focus:ring-slate-500"
        >
          <Braces className="w-4 h-4" />
          Validate
        </Button>
      </div>
    </div>
  );
}
