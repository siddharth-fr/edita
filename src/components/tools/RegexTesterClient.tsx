'use client';

import React, { useState, useMemo, useCallback } from 'react';
import {
  Copy,
  Check,
  Trash2,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Search,
} from 'lucide-react';

// ─── Types ─────────────────────────────────────────────────────────────────

interface MatchResult {
  fullMatch: string;
  index: number;
  groups: string[];
  namedGroups: Record<string, string>;
}

interface RegexStatus {
  type: 'idle' | 'valid' | 'error';
  message?: string;
}

// ─── Highlighted test string ────────────────────────────────────────────────

const HIGHLIGHT_COLORS = [
  'bg-emerald-200 text-emerald-900',
  'bg-sky-200 text-sky-900',
  'bg-amber-200 text-amber-900',
  'bg-rose-200 text-rose-900',
  'bg-indigo-200 text-indigo-900',
];

function HighlightedText({ text, matches }: { text: string; matches: MatchResult[] }) {
  if (!matches.length) {
    return (
      <span className="font-sans text-sm text-foreground whitespace-pre-wrap break-all leading-relaxed">
        {text}
      </span>
    );
  }

  const segments: { start: number; end: number; color: string }[] = [];
  let colorIdx = 0;
  const sorted = [...matches].sort((a, b) => a.index - b.index);
  let lastEnd = 0;
  for (const m of sorted) {
    const start = m.index;
    const end = start + m.fullMatch.length;
    if (start >= lastEnd) {
      segments.push({ start, end, color: HIGHLIGHT_COLORS[colorIdx % HIGHLIGHT_COLORS.length] });
      colorIdx++;
      lastEnd = end;
    }
  }

  const parts: React.ReactNode[] = [];
  let cursor = 0;
  for (const seg of segments) {
    if (cursor < seg.start) {
      parts.push(<span key={`t-${cursor}`}>{text.slice(cursor, seg.start)}</span>);
    }
    parts.push(
      <mark key={`m-${seg.start}`} className={`rounded px-0.5 ${seg.color}`} style={{ fontStyle: 'normal' }}>
        {text.slice(seg.start, seg.end)}
      </mark>
    );
    cursor = seg.end;
  }
  if (cursor < text.length) {
    parts.push(<span key="t-end">{text.slice(cursor)}</span>);
  }

  return (
    <span className="font-sans text-sm text-foreground whitespace-pre-wrap break-all leading-relaxed">
      {parts}
    </span>
  );
}

// ─── Match Row ───────────────────────────────────────────────────────────────

function MatchRow({ match, index }: { match: MatchResult; index: number }) {
  const [open, setOpen] = useState(false);
  const hasGroups = match.groups.length > 0 || Object.keys(match.namedGroups).length > 0;

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden">
      <button
        id={`regex-match-${index}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
          {index + 1}
        </span>
        <span className="flex-1 font-sans text-sm text-foreground truncate">{JSON.stringify(match.fullMatch)}</span>
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex-shrink-0">
          idx {match.index}
        </span>
        {hasGroups && (
          open
            ? <ChevronDown className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            : <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
        )}
      </button>

      {hasGroups && open && (
        <div className="border-t border-border px-4 py-3 bg-muted/20 space-y-2">
          {match.groups.map((g, gi) => (
            <div key={gi} className="flex items-start gap-3">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-0.5 w-14 flex-shrink-0">
                G{gi + 1}
              </span>
              <span className="font-mono text-xs text-foreground break-all leading-relaxed">
                {g === undefined ? <span className="text-muted-foreground italic">undefined</span> : JSON.stringify(g)}
              </span>
            </div>
          ))}
          {Object.entries(match.namedGroups).map(([name, val]) => (
            <div key={name} className="flex items-start gap-3">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-0.5 w-14 flex-shrink-0 truncate">
                {name}
              </span>
              <span className="font-mono text-xs text-foreground break-all leading-relaxed">
                {val === undefined ? <span className="text-muted-foreground italic">undefined</span> : JSON.stringify(val)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Cheat-sheet ─────────────────────────────────────────────────────────────

const CHEAT_SHEET = [
  { token: '.', desc: 'Any character except newline' },
  { token: '\\d', desc: 'Digit [0-9]' },
  { token: '\\w', desc: 'Word char [a-zA-Z0-9_]' },
  { token: '\\s', desc: 'Whitespace' },
  { token: '\\D \\W \\S', desc: 'Negated versions above' },
  { token: '^', desc: 'Start of line' },
  { token: '$', desc: 'End of line' },
  { token: '*', desc: '0 or more (greedy)' },
  { token: '+', desc: '1 or more (greedy)' },
  { token: '?', desc: '0 or 1 (optional)' },
  { token: '{n,m}', desc: 'Between n and m times' },
  { token: '(abc)', desc: 'Capture group' },
  { token: '(?:abc)', desc: 'Non-capture group' },
  { token: '(?<name>)', desc: 'Named capture group' },
  { token: '[abc]', desc: 'Character class' },
  { token: '[^abc]', desc: 'Negated character class' },
  { token: 'a|b', desc: 'Alternation (a or b)' },
];

// ─── Presets ─────────────────────────────────────────────────────────────────

const PRESETS = [
  { label: 'Email', pattern: '([\\w.+-]+)@([\\w-]+\\.)+[\\w-]{2,}', flags: 'gi', testString: 'Send to alice@example.com or bob.smith@mail.org for details.' },
  { label: 'URL', pattern: 'https?:\\/\\/([\\w-]+\\.)+[\\w-]+(\\/[^\\s]*)?', flags: 'gi', testString: 'Visit https://www.example.com or http://api.site.io/v2/data.' },
  { label: 'IPv4', pattern: '\\b(\\d{1,3}\\.){3}\\d{1,3}\\b', flags: 'g', testString: 'Server IPs: 192.168.1.1, 10.0.0.255, 172.16.254.1' },
  { label: 'Date', pattern: '(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])', flags: 'g', testString: 'Events on 2024-03-15 and 2025-12-01 are confirmed.' },
  { label: 'Hex Color', pattern: '#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\\b', flags: 'gi', testString: 'Colors used: #FF5733, #abc, #1a2B3C in the palette.' },
];

const DEFAULT_TEST_STRING = `Hello, World! Testing 123.\nEmail: user@example.com\nURL: https://edita.tools/regex\nDate: 2024-07-18`;

const FLAGS_CONFIG = [
  { flag: 'g', title: 'Global — find all matches' },
  { flag: 'i', title: 'Case insensitive' },
  { flag: 'm', title: 'Multiline — ^ and $ match line boundaries' },
  { flag: 's', title: 'Dot-all — . matches newlines' },
  { flag: 'u', title: 'Unicode mode' },
  { flag: 'y', title: 'Sticky — match at lastIndex only' },
];

// ─── Main Component ──────────────────────────────────────────────────────────

export function RegexTesterClient() {
  const [pattern, setPattern] = useState('([\\w.+-]+)@([\\w-]+\\.)+[\\w-]{2,}');
  const [flags, setFlags] = useState('gi');
  const [testString, setTestString] = useState(DEFAULT_TEST_STRING);
  const [copied, setCopied] = useState(false);
  const [showCheatSheet, setShowCheatSheet] = useState(false);

  const toggleFlag = useCallback((f: string) => {
    setFlags((prev) => prev.includes(f) ? prev.replace(f, '') : prev + f);
  }, []);

  const { status, matches } = useMemo<{ status: RegexStatus; matches: MatchResult[] }>(() => {
    if (!pattern) return { status: { type: 'idle' }, matches: [] };
    let regex: RegExp;
    try {
      regex = new RegExp(pattern, flags);
    } catch (e) {
      return { status: { type: 'error', message: (e as Error).message }, matches: [] };
    }
    if (!testString) return { status: { type: 'valid', message: 'Pattern is valid' }, matches: [] };

    const results: MatchResult[] = [];
    if (flags.includes('g') || flags.includes('y')) {
      let m: RegExpExecArray | null;
      let safeLimit = 0;
      while ((m = regex.exec(testString)) !== null && safeLimit < 500) {
        results.push({ fullMatch: m[0], index: m.index, groups: [...m].slice(1).map((g) => g ?? ''), namedGroups: (m.groups as Record<string, string>) ?? {} });
        safeLimit++;
        if (m[0].length === 0) regex.lastIndex++;
      }
    } else {
      const m = regex.exec(testString);
      if (m) results.push({ fullMatch: m[0], index: m.index, groups: [...m].slice(1).map((g) => g ?? ''), namedGroups: (m.groups as Record<string, string>) ?? {} });
    }

    const word = results.length === 1 ? 'match' : 'matches';
    return { status: { type: 'valid', message: `${results.length} ${word} found` }, matches: results };
  }, [pattern, flags, testString]);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(pattern ? `/${pattern}/${flags}` : '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [pattern, flags]);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">

      {/* ── Pattern + Flags panel ── */}
      <div className="bg-card border border-border rounded-[1.5rem] shadow-sm overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
          </div>
          <button
            id="regex-copy-btn"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Pattern input row */}
        <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
          <span className="text-2xl font-mono font-bold text-emerald-400 select-none leading-none">/</span>
          <input
            id="regex-pattern-input"
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="Enter regex pattern…"
            spellCheck={false}
            className="flex-1 font-mono text-base text-foreground bg-transparent outline-none placeholder:text-muted-foreground/40"
          />
          <span className="text-2xl font-mono font-bold text-emerald-400 select-none leading-none">/</span>
          <input
            id="regex-flags-input"
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value.replace(/[^gimsuy]/g, ''))}
            placeholder="gi"
            spellCheck={false}
            maxLength={6}
            className="w-12 font-mono text-base text-emerald-600 font-semibold bg-transparent outline-none placeholder:text-muted-foreground/40"
          />
        </div>

        {/* Flags row */}
        <div className="flex flex-wrap items-center gap-2 px-6 py-4 border-b border-border">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mr-1">Flags</span>
          {FLAGS_CONFIG.map(({ flag, title }) => (
            <button
              key={flag}
              id={`regex-flag-${flag}`}
              title={title}
              onClick={() => toggleFlag(flag)}
              className={`px-2.5 py-1 rounded-full text-xs font-sans font-semibold transition-all border ${flags.includes(flag)
                  ? 'bg-emerald-600 text-white border-emerald-700'
                  : 'bg-muted/30 text-muted-foreground border-border hover:border-emerald-300 hover:text-emerald-700'
                }`}
            >
              {flag}
            </button>
          ))}
        </div>

        {/* Status bar */}
        <div className={`flex items-center gap-2 px-6 py-3 text-xs font-medium transition-colors ${status.type === 'error'
            ? 'bg-red-50 text-red-600'
            : status.type === 'valid'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-muted/20 text-muted-foreground'
          }`}>
          {status.type === 'error' ? (
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          ) : status.type === 'valid' ? (
            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
          ) : (
            <Search className="w-3.5 h-3.5 flex-shrink-0" />
          )}
          <span className="font-sans">{status.message ?? 'Enter a pattern to begin'}</span>
        </div>
      </div>

      {/* ── Presets ── */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mr-1">Presets</span>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            id={`regex-preset-${p.label.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => { setPattern(p.pattern); setFlags(p.flags); setTestString(p.testString); }}
            className="px-3 py-1.5 rounded-xl text-xs font-sans font-medium border border-border bg-muted/20 text-foreground hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-all"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* ── Test String + Matches ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card border border-border rounded-[2.5rem] p-6 md:p-10 shadow-sm items-start">

        {/* Left: test string */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Test String</label>
            <button
              id="regex-clear-test"
              onClick={() => setTestString('')}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear
            </button>
          </div>
          <textarea
            id="regex-test-string"
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="Paste or type your test string here…"
            spellCheck={false}
            rows={8}
            className="w-full bg-muted/30 border border-border rounded-2xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 resize-none outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all leading-relaxed"
          />

          {/* Live preview */}
          {testString && (
            <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/10 px-4 py-3">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-2">Live Preview</span>
              <HighlightedText text={testString} matches={matches} />
            </div>
          )}
        </div>

        {/* Right: matches */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Matches</label>
            {matches.length > 0 && (
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {matches.length}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 max-h-[380px] overflow-y-auto">
            {status.type === 'error' ? (
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-mono text-xs leading-relaxed">{status.message}</span>
              </div>
            ) : matches.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 py-14 gap-2 text-muted-foreground">
                <Search className="w-7 h-7 opacity-30" />
                <p className="text-sm font-medium">No matches yet</p>
                <p className="text-xs">Try a pattern or pick a preset</p>
              </div>
            ) : (
              matches.map((m, i) => <MatchRow key={i} match={m} index={i} />)
            )}
          </div>

          {/* Stats */}
          {matches.length > 0 && (
            <div className="flex flex-wrap gap-4 px-4 py-3 rounded-2xl bg-muted/30 border border-border text-xs">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-0.5">Matches</span>
                <span className="font-black text-foreground text-lg">{matches.length}</span>
              </div>
              <div className="w-px bg-border self-stretch" />
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-0.5">Capture Groups</span>
                <span className="font-black text-foreground text-lg">
                  {matches.reduce((acc, m) => Math.max(acc, m.groups.length), 0)}
                </span>
              </div>
              {Object.keys(matches[0]?.namedGroups ?? {}).length > 0 && (
                <>
                  <div className="w-px bg-border self-stretch" />
                  <div>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-0.5">Named Groups</span>
                    <span className="font-mono text-foreground text-xs">{Object.keys(matches[0].namedGroups).join(', ')}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Cheat Sheet ── */}
      <div className="bg-card border border-border rounded-[2.5rem] shadow-sm overflow-hidden">
        <button
          id="regex-cheatsheet-toggle"
          className="w-full flex items-center justify-between px-6 py-5 hover:bg-muted/30 transition-colors"
          onClick={() => setShowCheatSheet((v) => !v)}
        >
          <span className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            <Search className="w-4 h-4" />
            Regex Cheat Sheet
          </span>
          {showCheatSheet
            ? <ChevronDown className="w-4 h-4 text-muted-foreground" />
            : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
        </button>

        {showCheatSheet && (
          <div className="border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {CHEAT_SHEET.map((item) => (
              <div key={item.token} className="bg-card px-5 py-3.5 flex gap-3 items-center">
                <code className="text-emerald-700 font-mono text-xs font-bold bg-emerald-50 px-2 py-1 rounded-lg flex-shrink-0">
                  {item.token}
                </code>
                <span className="text-xs text-muted-foreground">{item.desc}</span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
