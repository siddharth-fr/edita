'use client';

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Loader2, FileCode } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const LANGUAGES = {
  java: {
    name: 'Java',
    monacoLanguage: 'java',
    wandboxName: 'openjdk-jdk-22+36',
    extension: '.java',
    defaultCode: `class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n`,
    logo: '/icons8-java-logo-96.png',
  },
  c: {
    name: 'C',
    monacoLanguage: 'c',
    wandboxName: 'gcc-13.2.0-c',
    extension: '.c',
    defaultCode: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}\n`,
    logo: '/icons8-c-programming-96.png',
  },
  cpp: {
    name: 'C++',
    monacoLanguage: 'cpp',
    wandboxName: 'gcc-13.2.0',
    extension: '.cpp',
    defaultCode: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}\n`,
    logo: '/icons8-c++-96.png',
  },
  python: {
    name: 'Python',
    monacoLanguage: 'python',
    wandboxName: 'cpython-3.14.0',
    extension: '.py',
    defaultCode: `print("Hello, World!")\n`,
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
  
  const [output, setOutput] = useState<string>('');
  const [stdin, setStdin] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (value: string | undefined) => {
    if (value === undefined) return;
    setCodes(prev => ({
      ...prev,
      [activeLang]: value
    }));
  };

  const executeCode = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setOutput('Compiling and running...');

    try {
      const response = await fetch('https://wandbox.org/api/compile.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          compiler: LANGUAGES[activeLang].wandboxName,
          code: codes[activeLang],
          stdin: stdin,
          save: false
        })
      });

      const data = await response.json();
      if (data.status === "0") {
        setOutput(data.program_output || data.compiler_message || 'Process exited with no output.');
      } else {
        setOutput(data.compiler_error || data.program_error || 'Execution failed.');
      }
    } catch (err) {
      setOutput('Failed to execute code. Execution engine might be down.');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 flex flex-col">
      
      {/* Top Toolbar */}
      <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {(Object.keys(LANGUAGES) as LanguageKey[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`relative p-2 rounded-xl transition-all duration-200 flex items-center justify-center ${
                activeLang === lang 
                  ? 'bg-slate-50 ring-1 ring-slate-200/60 shadow-sm' 
                  : 'hover:bg-slate-50 opacity-60 hover:opacity-100'
              }`}
              title={LANGUAGES[lang].name}
            >
              <img 
                src={LANGUAGES[lang].logo} 
                alt={LANGUAGES[lang].name} 
                className="w-7 h-7 object-contain" 
              />
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-medium text-slate-700 hover:border-emerald-200 hover:shadow-emerald-500/5 transition-all cursor-default">
            <span className="mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>main{LANGUAGES[activeLang].extension}</span>
          </div>
          <Button
            size="lg"
            onClick={executeCode}
            disabled={isRunning}
            isLoading={isRunning}
            className="shadow-lg shadow-emerald-500/20 w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98] bg-[#10b981] hover:bg-[#059669] text-white"
          >
            {isRunning ? 'Running...' : (
              <>
                <Play className="w-4 h-4 mr-2 fill-current" />
                Run
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Editor & Output Area */}
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        
        {/* Left Pane: Codes here */}
        <div className="flex-1 lg:w-1/2 flex flex-col border-r border-slate-100">
          <div className="px-8 py-6 pb-2">
            <h2 className="text-[17px] font-bold text-slate-900 tracking-tight">Code</h2>
          </div>
          <div className="flex-1 relative pb-4">
            <Editor
              height="100%"
              language={LANGUAGES[activeLang].monacoLanguage}
              theme="light"
              value={codes[activeLang]}
              onChange={handleCodeChange}
              options={{
                minimap: { enabled: false },
                fontSize: 15,
                fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                lineHeight: 1.6,
                padding: { top: 16, bottom: 16 },
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                cursorBlinking: "smooth",
                renderLineHighlight: "none",
                overviewRulerBorder: false,
                hideCursorInOverviewRuler: true,
                scrollbar: {
                  vertical: 'hidden',
                  horizontal: 'hidden'
                },
                lineNumbers: 'on',
                lineNumbersMinChars: 3,
                glyphMargin: false,
                folding: false,
                matchBrackets: 'never',
              }}
            />
          </div>
        </div>

        {/* Right Pane: Input & Output */}
        <div className="flex-1 lg:w-1/2 flex flex-col bg-[#fafafa]/50 divide-y divide-slate-100">
          <div className="flex-1 flex flex-col min-h-[200px] max-h-[300px]">
            <div className="px-8 py-6 pb-2">
              <h2 className="text-[17px] font-bold text-slate-900 tracking-tight">Standard Input</h2>
            </div>
            <div className="flex-1 px-8 pb-6">
              <textarea
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
                placeholder="Enter input here..."
                className="w-full h-full bg-white border border-slate-200 rounded-xl p-4 font-mono text-[14px] text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col min-h-[250px] bg-white/40">
            <div className="px-8 py-6 pb-2">
              <h2 className="text-[17px] font-bold text-slate-900 tracking-tight">Output</h2>
            </div>
            <div className="flex-1 px-8 pb-8 pt-2 font-mono text-[14px] leading-relaxed text-slate-700 whitespace-pre-wrap overflow-y-auto">
              {output || <span className="text-slate-400 italic">Output will appear here after execution...</span>}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
