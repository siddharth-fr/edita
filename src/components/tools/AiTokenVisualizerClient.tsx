'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Type, Hash, BarChart3, AlertCircle, Loader2 } from 'lucide-react';
import { tokenizeText } from '@/app/tools/ai-token-visualizer/actions';

type ModelKey = 'chatgpt' | 'claude' | 'gemini';

const MODELS: Record<ModelKey, { name: string; contextLimit: number; color: string; bg: string; logo: string }> = {
  chatgpt: {
    name: 'ChatGPT (OpenAI)',
    contextLimit: 8192,
    color: 'text-emerald-600',
    bg: 'bg-emerald-500',
    logo: '/icon-chatgpt.png',
  },
  claude: {
    name: 'Claude (Anthropic)',
    contextLimit: 8192,
    color: 'text-violet-600',
    bg: 'bg-violet-500',
    logo: '/icon-claude.png',
  },
  gemini: {
    name: 'Gemini (Google)',
    contextLimit: 8192,
    color: 'text-blue-600',
    bg: 'bg-blue-500',
    logo: '/icon-google-gemini.png',
  }
};

const TOKEN_COLORS = [
  'bg-emerald-200 text-emerald-900',
  'bg-blue-200 text-blue-900',
  'bg-amber-200 text-amber-900',
  'bg-violet-200 text-violet-900',
  'bg-rose-200 text-rose-900',
];

export function AiTokenVisualizerClient() {
  const [activeModel, setActiveModel] = useState<ModelKey>('chatgpt');
  const [text, setText] = useState<string>('');
  
  const [tokensInfo, setTokensInfo] = useState<{tokens: number[], tokenStrings: string[]}>({ tokens: [], tokenStrings: [] });
  const [isTokenizing, setIsTokenizing] = useState(false);

  // Debounced Tokenization
  useEffect(() => {
    if (!text) {
      setTokensInfo({ tokens: [], tokenStrings: [] });
      setIsTokenizing(false);
      return;
    }

    setIsTokenizing(true);
    const handler = setTimeout(async () => {
      try {
        const res = await tokenizeText(text, activeModel);
        setTokensInfo(res);
      } catch (err) {
        console.error(err);
      } finally {
        setIsTokenizing(false);
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [text, activeModel]);

  const stats = useMemo(() => {
    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const model = MODELS[activeModel];
    
    const estimatedTokens = tokensInfo.tokens.length;
    const percentage = Math.min(100, (estimatedTokens / model.contextLimit) * 100);

    return {
      charCount,
      wordCount,
      estimatedTokens,
      percentage,
      limit: model.contextLimit,
      isNearLimit: percentage > 90,
      isOverLimit: estimatedTokens > model.contextLimit
    };
  }, [text, activeModel, tokensInfo]);

  const model = MODELS[activeModel];

  return (
    <div className="w-full bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-200 flex flex-col font-sans h-full min-h-[700px]">
      {/* Top Toolbar: Model Selector */}
      <div className="px-4 py-3 border-b border-slate-200 flex items-center bg-white flex-wrap gap-3 shrink-0">
        <span className="text-sm font-semibold text-slate-700">Select Model:</span>
        <div className="flex items-center space-x-2">
          {(Object.keys(MODELS) as ModelKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveModel(key)}
              className={`px-3 py-1.5 rounded-md transition-all duration-200 flex items-center gap-2 text-sm font-medium ${
                activeModel === key
                  ? 'bg-slate-100 text-slate-900 ring-1 ring-slate-300 shadow-sm'
                  : 'hover:bg-slate-50 text-slate-600 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={MODELS[key].logo} alt={MODELS[key].name} className="w-4 h-4 object-contain" />
              {MODELS[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-col lg:flex-row flex-1 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 overflow-hidden">
        
        {/* Left Pane: Prompt Input */}
        <div className="flex-1 lg:w-[50%] flex flex-col bg-white">
          <div className="flex items-center px-4 h-12 border-b border-slate-200 bg-[#f8f9fa] shrink-0">
            <h2 className="text-[14px] font-medium text-slate-700">Prompt Text</h2>
            <button
              onClick={() => setText('')}
              className="ml-auto text-[13px] text-slate-600 hover:text-slate-900 px-3 py-1 border border-slate-200 rounded bg-white transition-colors"
            >
              Clear
            </button>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your prompt here to see exact token counts for the selected model..."
            className="flex-1 w-full p-4 resize-none outline-none border-none focus:ring-0 text-[14px] leading-relaxed text-slate-800 placeholder:text-slate-400"
            spellCheck="false"
          />
        </div>

        {/* Right Pane: Stats & Visualization */}
        <div className="flex-1 lg:w-[50%] flex flex-col bg-[#fcfcfc]">
          <div className="flex items-center px-4 h-12 border-b border-slate-200 bg-white shrink-0 justify-between">
            <h2 className="text-[14px] font-medium text-slate-700">Token Analysis</h2>
            {isTokenizing && <Loader2 className="w-4 h-4 animate-spin text-slate-400" />}
          </div>
          
          <div className="p-4 flex flex-col flex-1 overflow-hidden relative">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 gap-4 shrink-0 mb-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                <Hash className="w-5 h-5 text-slate-400 mb-2" />
                <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">Exact Tokens</span>
                <span className={`text-3xl font-bold mt-1 ${stats.isOverLimit ? 'text-rose-600' : 'text-slate-800'}`}>
                  {stats.estimatedTokens.toLocaleString()}
                </span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                <Type className="w-5 h-5 text-slate-400 mb-2" />
                <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">Words</span>
                <span className="text-3xl font-bold text-slate-800 mt-1">{stats.wordCount.toLocaleString()}</span>
              </div>
            </div>

            {/* Consumption Bar */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm shrink-0 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-slate-400" />
                  <span className="text-[13px] font-medium text-slate-700">Context Consumption</span>
                </div>
                <span className="text-[12px] font-semibold text-slate-500">
                  {stats.percentage.toFixed(1)}% of {stats.limit.toLocaleString()}
                </span>
              </div>
              
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ease-out ${stats.isOverLimit ? 'bg-rose-500' : stats.isNearLimit ? 'bg-amber-500' : model.bg}`}
                  style={{ width: `${stats.percentage}%` }}
                />
              </div>

              {stats.isOverLimit && (
                <div className="mt-3 flex items-start gap-2 text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-100">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="text-[12px] font-medium leading-relaxed">
                    Warning: The exact token count exceeds the visualization context limit of {stats.limit}.
                  </span>
                </div>
              )}
            </div>

            {/* Visual Token Output */}
            <div className={`flex flex-col flex-1 min-h-0 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-opacity duration-300 ${isTokenizing ? 'opacity-50' : 'opacity-100'}`}>
              <div className="flex items-center px-4 py-2 border-b border-slate-200 bg-slate-50 shrink-0">
                <span className="text-[13px] font-medium text-slate-700">Token Visualization</span>
              </div>
              <div className="p-4 overflow-y-auto whitespace-pre-wrap break-words font-mono text-[14px] leading-relaxed flex-1">
                {tokensInfo.tokenStrings.length > 0 ? (
                  tokensInfo.tokenStrings.map((str, i) => (
                    <span key={i} className={`px-0.5 rounded-sm ${TOKEN_COLORS[i % TOKEN_COLORS.length]}`}>{str}</span>
                  ))
                ) : (
                  <span className="text-slate-400">Tokens will appear here...</span>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

