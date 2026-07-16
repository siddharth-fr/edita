'use client';

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const LANGUAGES = {
  java: {
    name: 'Java',
    monacoLanguage: 'java',
    pistonLanguage: 'java',
    pistonVersion: '15.0.2',
    extension: '.java',
    defaultCode: `class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n`,
    logo: '/icons8-java-logo-96.png',
  },
  c: {
    name: 'C',
    monacoLanguage: 'c',
    pistonLanguage: 'c',
    pistonVersion: '10.2.0',
    extension: '.c',
    defaultCode: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}\n`,
    logo: '/icons8-c-programming-96.png',
  },
  cpp: {
    name: 'C++',
    monacoLanguage: 'cpp',
    pistonLanguage: 'c++',
    pistonVersion: '10.2.0',
    extension: '.cpp',
    defaultCode: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}\n`,
    logo: '/icons8-c++-96.png',
  },
  python: {
    name: 'Python',
    monacoLanguage: 'python',
    pistonLanguage: 'python',
    pistonVersion: '3.10.0',
    extension: '.py',
    defaultCode: `name = input("What is your name? ")\nprint("Hello, " + name + "!")\n`,
    logo: '/icons8-python-96.png',
  }
};

type LanguageKey = keyof typeof LANGUAGES;

export function OnlineCompilerClient() {
  const [activeLang, setActiveLang] = useState<LanguageKey>('java');
  const [codes, setCodes] = useState<Record<LanguageKey, string>>({
    java: LANGUAGES.java.defaultCode,
    c: LANGUAGES.c.defaultCode,
    cpp: LANGUAGES.cpp.defaultCode,
    python: LANGUAGES.python.defaultCode,
  });

  const [stdin, setStdin] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [hasRun, setHasRun] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (value: string | undefined) => {
    if (value === undefined) return;
    setCodes(prev => ({ ...prev, [activeLang]: value }));
  };

  const executeCode = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setHasRun(false);
    setOutput('Compiling and running...');

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: activeLang,
          code: codes[activeLang],
          stdin: stdin,
        }),
      });

      const data = await response.json();
      setHasRun(true);

      if (!response.ok) {
        setOutput(data.error || 'Execution failed.');
        setIsError(true);
        return;
      }

      // Judge0 status.id: 3 = Accepted, 6 = Compilation Error, others = runtime/TLE/etc.
      const failed = data.status?.id !== 3;

      if (failed) {
        setOutput(data.compile_output || data.stderr || data.message || 'Execution failed.');
        setIsError(true);
      } else {
        setOutput(data.stdout || 'Process exited with no output.');
        setIsError(false);
      }
    } catch (err) {
      setHasRun(true);
      setIsError(true);
      setOutput('Failed to execute code. Execution engine might be down.');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-200 flex flex-col font-sans">

      {/* Top Toolbar: Language Selector */}
      <div className="px-4 py-3 border-b border-slate-200 flex items-center bg-white">
        <span className="text-sm font-semibold text-slate-700 mr-4">Language:</span>
        <div className="flex items-center space-x-2">
          {(Object.keys(LANGUAGES) as LanguageKey[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`relative px-3 py-1.5 rounded-md transition-all duration-200 flex items-center gap-2 ${
                activeLang === lang
                  ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200'
                  : 'hover:bg-slate-50 text-slate-600'
              }`}
              title={LANGUAGES[lang].name}
            >
              <img
                src={LANGUAGES[lang].logo}
                alt={LANGUAGES[lang].name}
                className="w-4 h-4 object-contain"
              />
              <span className="text-sm font-medium">{LANGUAGES[lang].name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-col lg:flex-row min-h-[600px] divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

        {/* Left Pane: Editor */}
        <div className="flex-1 lg:w-1/2 flex flex-col bg-white">
          <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8f9fa] h-12">
            <div className="px-4 h-full flex items-center border-r border-slate-200 bg-white shadow-[0_2px_0_0_#fff]">
              <span className="text-[14px] font-medium text-slate-600 font-mono">main{LANGUAGES[activeLang].extension}</span>
            </div>
            <div className="flex items-center px-2">
              <Button
                size="sm"
                onClick={executeCode}
                disabled={isRunning}
                isLoading={isRunning}
                className="bg-[#0052ff] hover:bg-[#0042cc] text-white rounded font-medium px-6 h-8 text-[14px]"
              >
                {isRunning ? 'Running...' : 'Run'}
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <Editor
              height="100%"
              language={LANGUAGES[activeLang].monacoLanguage}
              theme="light"
              value={codes[activeLang]}
              onChange={handleCodeChange}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                lineHeight: 1.5,
                padding: { top: 12, bottom: 12 },
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                cursorBlinking: "smooth",
                renderLineHighlight: "none",
                overviewRulerBorder: false,
                hideCursorInOverviewRuler: true,
                scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
                lineNumbers: 'on',
                lineNumbersMinChars: 3,
                glyphMargin: false,
                folding: false,
                matchBrackets: 'always',
                autoClosingBrackets: 'always',
                autoClosingQuotes: 'always',
              }}
            />
          </div>
        </div>

        {/* Right Pane: Stdin + Output */}
        <div className="flex-1 lg:w-1/2 flex flex-col bg-[#fcfcfc]">

          {/* Stdin box */}
          <div className="border-b border-slate-200">
            <div className="flex items-center px-4 h-9 bg-white border-b border-slate-100">
              <h2 className="text-[13px] font-medium text-slate-600">Input (stdin)</h2>
            </div>
            <textarea
              value={stdin}
              onChange={(e) => setStdin(e.target.value)}
              placeholder={'One value per line, in the order your program reads them\ne.g.\nAlice\n25'}
              className="w-full h-24 bg-transparent border-none outline-none resize-none focus:ring-0 p-3 text-[13px] font-mono leading-relaxed text-slate-800 placeholder:text-slate-400"
              spellCheck="false"
            />
          </div>

          {/* Output toolbar */}
          <div className="flex items-center justify-between px-4 border-b border-slate-200 bg-white h-12">
            <h2 className="text-[14px] font-medium text-slate-700">Output</h2>
            <button
              onClick={() => {
                setOutput('');
                setHasRun(false);
                setIsError(false);
                setStdin('');
              }}
              className="text-[13px] text-slate-600 hover:text-slate-900 px-3 py-1 border border-slate-200 rounded bg-white transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="flex-1 p-4 font-mono text-[14px] flex flex-col overflow-y-auto">
            <pre
              className={`w-full flex-1 whitespace-pre-wrap break-words text-[13px] leading-relaxed m-0 ${
                isError ? 'text-red-600' : 'text-slate-800'
              }`}
            >
              {output || 'Output Terminal'}
            </pre>
            {hasRun && !isRunning && (
              <div className={`pt-4 mt-2 border-t border-slate-100 ${isError ? 'text-red-500' : 'text-emerald-500'} text-[13px] shrink-0`}>
                === Code Execution {isError ? 'Failed' : 'Successful'} ===
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}