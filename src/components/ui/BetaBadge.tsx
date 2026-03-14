'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, AlertTriangle } from 'lucide-react';

export default function BetaBadge() {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Expanded Message Panel */}
      <div 
        className={`
          max-w-[280px] p-5 rounded-[24px] bg-white/80 backdrop-blur-2xl border border-white 
          shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 origin-bottom-right pointer-events-auto
          ${isExpanded ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-8 pointer-events-none'}
        `}
      >
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
            <AlertTriangle size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-[15px] leading-tight mb-1">We're in Beta</h4>
            <div className="w-12 h-1 bg-emerald-500/20 rounded-full" />
          </div>
        </div>
        
        <p className="text-[13.5px] leading-relaxed text-gray-600 font-medium">
          Edita is still improving! You may encounter occasional bugs as we refine features and add more tools.
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-md">
            Phase 1.0
          </span>
          <button 
            onClick={() => setIsExpanded(false)}
            className="text-[12px] font-bold text-gray-400 hover:text-gray-900 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          flex items-center gap-2 px-4 py-2.5 rounded-[999px] font-bold text-[13px] 
          transition-all duration-300 pointer-events-auto shadow-lg
          ${isExpanded 
            ? 'bg-gray-900 text-white translate-y-1' 
            : 'bg-white/80 text-emerald-700 backdrop-blur-md border border-emerald-100/50 hover:bg-white hover:scale-105 hover:-translate-y-1 active:scale-95'
          }
        `}
      >
        <Sparkles size={14} className={isExpanded ? 'text-emerald-400' : 'text-emerald-500'} />
        <span>BETA</span>
        {isExpanded && <X size={14} className="ml-1 opacity-60" />}
      </button>
    </div>
  );
}
