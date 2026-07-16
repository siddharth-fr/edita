'use client';

import React, { useState, useMemo } from 'react';
import { Cpu, Type, Hash, BarChart3, AlertCircle } from 'lucide-react';

type ModelKey = 'chatgpt' | 'claude' | 'gemini';

const MODELS: Record<ModelKey, { name: string; multiplier: number; contextLimit: number; color: string; bg: string }> = {
  chatgpt: {
    name: 'ChatGPT (OpenAI)',
    multiplier: 4.0, // Roughly 4 chars per token
    contextLimit: 8192,
    color: 'text-emerald-600',
    bg: 'bg-emerald-500',
  },
  claude: {
    name: 'Claude (Anthropic)',
    multiplier: 3.5, // Slightly smaller chunks
    contextLimit: 8192,
    color: 'text-violet-600',
    bg: 'bg-violet-500',
  },
  gemini: {
    name: 'Gemini (Google)',
    multiplier: 4.0,
    contextLimit: 8192,
    color: 'text-blue-600',
    bg: 'bg-blue-500',
  }
};

export function AiTokenVisualizerClient() {
  const [activeModel, setActiveModel] = useState<ModelKey>('chatgpt');
  const [text, setText] = useState<string>('');

  const stats = useMemo(() => {
    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const model = MODELS[activeModel];
    
    // Heuristic estimation
    const estimatedTokens = Math.ceil(charCount / model.multiplier);
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
  }, [text, activeModel]);

  const model = MODELS[activeModel];

  return (
    <div className="w-full bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-200 flex flex-col font-sans">
      {/* Top Toolbar: Model Selector */}
      <div className="px-4 py-3 border-b border-slate-200 flex items-center bg-white flex-wrap gap-3">
        <span className="text-sm font-semibold text-slate-700">Select Model:</span>
        <div className="flex items-center space-x-2">
          {(Object.keys(MODELS) as ModelKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveModel(key)}
              className={`px-3 py-1.5 rounded-md transition-all duration-200 flex items-center gap-2 text-sm font-medium ${
                activeModel === key
                  ? 'bg-slate-100 text-slate-900 ring-1 ring-slate-300 shadow-sm'
                  : 'hover:bg-slate-50 text-slate-600'
              }`}
            >
              <Cpu className={`w-4 h-4 ${activeModel === key ? MODELS[key].color : 'text-slate-400'}`} />
              {MODELS[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-col lg:flex-row min-h-[500px] divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        
        {/* Left Pane: Prompt Input */}
        <div className="flex-1 lg:w-[60%] flex flex-col bg-white">
          <div className="flex items-center px-4 h-12 border-b border-slate-200 bg-[#f8f9fa]">
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
            placeholder="Paste or type your prompt here to see token estimates..."
            className="flex-1 w-full p-4 resize-none outline-none border-none focus:ring-0 text-[14px] leading-relaxed text-slate-800 placeholder:text-slate-400"
            spellCheck="false"
          />
        </div>

        {/* Right Pane: Stats & Visualization */}
        <div className="flex-1 lg:w-[40%] flex flex-col bg-[#fcfcfc]">
          <div className="flex items-center px-4 h-12 border-b border-slate-200 bg-white">
            <h2 className="text-[14px] font-medium text-slate-700">Token Analysis</h2>
          </div>
          
          <div className="p-6 flex flex-col gap-6 overflow-y-auto">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                <Hash className="w-5 h-5 text-slate-400 mb-2" />
                <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">Estimated Tokens</span>
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

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <span className="text-[13px] font-medium text-slate-600">Total Characters</span>
              <span className="text-[14px] font-bold text-slate-800">{stats.charCount.toLocaleString()}</span>
            </div>

            {/* Consumption Bar */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
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
                    Warning: The estimated token count exceeds the visualization context limit of {stats.limit}.
                  </span>
                </div>
              )}
              
              <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
                * Note: This tool uses heuristic math logic for fast client-side estimation ({model.multiplier} characters per token for {model.name}). Actual token counts via API may vary slightly depending on exact model tokenizer versions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
