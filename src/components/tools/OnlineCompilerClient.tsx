'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels';
import Editor, { useMonaco } from '@monaco-editor/react';
import { Play, Square, Download, Upload, Folder, FileCode2, Terminal, Plus, X, Settings, Sparkles, GitBranch, Puzzle } from 'lucide-react';

const LANGUAGES = {
  python: {
    name: 'Python',
    pistonName: 'python',
    version: '*',
    extension: '.py',
    defaultCode: `def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("World")\n`,
    logo: '/icons8-python-96.png',
  },
  java: {
    name: 'Java',
    pistonName: 'java',
    version: '*',
    extension: '.java',
    defaultCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n`,
    logo: '/icons8-java-logo-96.png',
  },
  cpp: {
    name: 'C++',
    pistonName: 'cpp',
    version: '*',
    extension: '.cpp',
    defaultCode: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}\n`,
    logo: '/icons8-c++-96.png',
  },
  c: {
    name: 'C',
    pistonName: 'c',
    version: '*',
    extension: '.c',
    defaultCode: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}\n`,
    logo: '/icons8-c-programming-96.png',
  }
};

type LanguageKey = keyof typeof LANGUAGES;

interface FileTab {
  id: string;
  name: string;
  language: LanguageKey;
  content: string;
}

export function OnlineCompilerClient() {
  const monaco = useMonaco();
  const [tabs, setTabs] = useState<FileTab[]>([
    { id: '1', name: 'main.py', language: 'python', content: LANGUAGES.python.defaultCode }
  ]);
  const [activeTabId, setActiveTabId] = useState<string>('1');
  const [output, setOutput] = useState<string>('Welcome to Edita Online Compiler.\nSelect a file and click Run to execute code.');
  const [isRunning, setIsRunning] = useState(false);
  const [isConsoleExpanded, setIsConsoleExpanded] = useState(true);

  const activeTab = tabs.find(t => t.id === activeTabId);

  // Setup Monaco theme
  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('edita-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
          'editor.background': '#0f172a', // slate-900
          'editor.lineHighlightBackground': '#1e293b', // slate-800
        }
      });
      monaco.editor.setTheme('edita-dark');
    }
  }, [monaco]);

  const handleCodeChange = (value: string | undefined) => {
    if (value === undefined || !activeTab) return;
    setTabs(tabs.map(t => t.id === activeTabId ? { ...t, content: value } : t));
  };

  const handleLanguageChange = (lang: LanguageKey) => {
    if (!activeTab) return;
    const newName = activeTab.name.split('.')[0] + LANGUAGES[lang].extension;
    setTabs(tabs.map(t => t.id === activeTabId ? { ...t, language: lang, name: newName, content: LANGUAGES[lang].defaultCode } : t));
  };

  const executeCode = async () => {
    if (!activeTab || isRunning) return;
    setIsRunning(true);
    setOutput('Running...');
    setIsConsoleExpanded(true);

    try {
      const response = await fetch('https://emacs.piston.rs/api/v2/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: LANGUAGES[activeTab.language].pistonName,
          version: LANGUAGES[activeTab.language].version,
          files: [{ name: activeTab.name, content: activeTab.content }],
          stdin: "",
          args: [],
          compile_timeout: 10000,
          run_timeout: 3000,
        })
      });

      const data = await response.json();
      if (data.run) {
        setOutput(data.run.output || 'Process exited with no output.');
      } else if (data.compile) {
        setOutput(data.compile.output || 'Compilation error.');
      } else {
        setOutput(data.message || 'An unknown error occurred.');
      }
    } catch (err) {
      setOutput('Failed to execute code. Execution engine might be down.');
    } finally {
      setIsRunning(false);
    }
  };

  const handleDownload = () => {
    if (!activeTab) return;
    const blob = new Blob([activeTab.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeTab.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex-1 w-full h-full flex flex-col text-slate-200" style={{ backgroundColor: '#0f172a' }}>
      
      {/* Top Toolbar */}
      <div className="h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-emerald-400 font-semibold font-display tracking-wide">
            <Terminal className="w-5 h-5" />
            <span>EDITA COMPILER</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {activeTab && (
            <div className="flex items-center space-x-2 mr-4 bg-slate-800/50 rounded-lg p-1">
              {(Object.keys(LANGUAGES) as LanguageKey[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`p-1.5 rounded-md transition-all flex items-center ${activeTab.language === lang ? 'bg-slate-700 shadow-sm' : 'hover:bg-slate-800 opacity-60 hover:opacity-100'}`}
                  title={LANGUAGES[lang].name}
                >
                  <img src={LANGUAGES[lang].logo} alt={LANGUAGES[lang].name} className="w-5 h-5 object-contain" />
                </button>
              ))}
            </div>
          )}
          
          <button 
            onClick={handleDownload}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-md transition-colors"
            title="Download File"
          >
            <Download className="w-4 h-4" />
          </button>
          
          <button
            onClick={executeCode}
            disabled={isRunning}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all ${isRunning ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20'}`}
          >
            {isRunning ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <PanelGroup orientation="horizontal">
          
          {/* Sidebar */}
          <Panel defaultSize={15} minSize={10} maxSize={30} className="bg-slate-900 border-r border-slate-800 flex flex-col">
            <div className="p-3 uppercase text-xs font-semibold tracking-wider text-slate-500 flex justify-between items-center">
              <span>Explorer</span>
              <button className="hover:text-slate-200"><Plus className="w-3.5 h-3.5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="px-2 py-1">
                <div className="flex items-center space-x-1 px-2 py-1.5 text-slate-300 hover:bg-slate-800/50 rounded cursor-pointer group">
                  <Folder className="w-4 h-4 text-emerald-400/80 group-hover:text-emerald-400" />
                  <span className="text-sm font-medium">workspace</span>
                </div>
                <div className="pl-6 space-y-0.5 mt-1">
                  {tabs.map(tab => (
                    <div 
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer transition-colors ${activeTabId === tab.id ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
                    >
                      <img src={LANGUAGES[tab.language].logo} className="w-3.5 h-3.5" alt="" />
                      <span className="text-sm">{tab.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Panel>

          <PanelResizeHandle className="w-1 bg-slate-800 hover:bg-emerald-500/50 transition-colors cursor-col-resize" />

          {/* Main Editor Area */}
          <Panel defaultSize={85}>
            <PanelGroup orientation="vertical">
              
              {/* Editor Top */}
              <Panel defaultSize={70} className="flex flex-col bg-[#0f172a]">
                
                {/* Editor Tabs */}
                <div className="flex h-10 bg-slate-900 border-b border-slate-800 overflow-x-auto no-scrollbar">
                  {tabs.map(tab => (
                    <div 
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`flex items-center space-x-2 px-4 border-r border-slate-800 cursor-pointer min-w-[120px] max-w-[200px] ${activeTabId === tab.id ? 'bg-[#0f172a] text-slate-100 border-t-2 border-t-emerald-400' : 'bg-slate-900/50 text-slate-500 hover:bg-slate-800'}`}
                    >
                      <img src={LANGUAGES[tab.language].logo} className="w-3.5 h-3.5 grayscale opacity-70" alt="" />
                      <span className="text-sm truncate select-none flex-1">{tab.name}</span>
                      <button className="p-0.5 rounded-sm opacity-0 group-hover:opacity-100 hover:bg-slate-700"><X className="w-3 h-3" /></button>
                    </div>
                  ))}
                </div>

                {/* Monaco Editor */}
                <div className="flex-1 w-full relative">
                  {activeTab && (
                    <Editor
                      height="100%"
                      language={LANGUAGES[activeTab.language].name.toLowerCase()}
                      theme="edita-dark"
                      value={activeTab.content}
                      onChange={handleCodeChange}
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                        fontLigatures: true,
                        padding: { top: 16, bottom: 16 },
                        scrollBeyondLastLine: false,
                        smoothScrolling: true,
                        cursorBlinking: "smooth",
                        cursorSmoothCaretAnimation: "on",
                        formatOnPaste: true,
                      }}
                    />
                  )}
                </div>
              </Panel>

              <PanelResizeHandle className="h-1 bg-slate-800 hover:bg-emerald-500/50 transition-colors cursor-row-resize" />

              {/* Console / Terminal */}
              <Panel defaultSize={30} minSize={10} className="bg-slate-950 flex flex-col">
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900">
                  <div className="flex space-x-4">
                    <button className="text-emerald-400 text-sm font-medium border-b border-emerald-400 pb-1">Console</button>
                    <button className="text-slate-500 text-sm font-medium hover:text-slate-300 pb-1">Problems</button>
                    <button className="text-slate-500 text-sm font-medium hover:text-slate-300 pb-1">Terminal</button>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <button onClick={() => setOutput('')} className="hover:text-slate-300 text-xs tracking-wider uppercase">Clear</button>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto font-mono text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
                  <pre className="whitespace-pre-wrap font-inherit">{output}</pre>
                </div>
              </Panel>
              
            </PanelGroup>
          </Panel>
          
        </PanelGroup>
      </div>
      
      {/* Status Bar */}
      <div className="h-7 bg-emerald-600 flex items-center justify-between px-3 text-[11px] font-medium tracking-wide shrink-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-emerald-500 px-1.5 rounded transition-colors h-5">
            <GitBranch className="w-3 h-3" />
            <span>main*</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-emerald-500 px-1.5 rounded transition-colors h-5">
            <X className="w-3 h-3" />
            <span>0</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-emerald-500 px-1.5 rounded transition-colors h-5" title="Edita AI Assistant (Coming Soon)">
            <Sparkles className="w-3 h-3" />
            <span>AI Assist</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-emerald-500 px-1.5 rounded transition-colors h-5">
            <Puzzle className="w-3 h-3" />
            <span>Extensions</span>
          </div>
          <span>UTF-8</span>
          <span>{activeTab ? LANGUAGES[activeTab.language].name : ''}</span>
          <div className="cursor-pointer hover:bg-emerald-500 px-1.5 rounded transition-colors h-5 flex items-center">
            <Settings className="w-3 h-3" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
