'use client';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { THEME_PALETTE } from '@/config/themes';

interface ToastProps {
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
}

export function Toast({ title, description, type = 'info', onClose }: ToastProps) {
  const iconMap = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-orange-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
  };

  const colorMap = {
    success: 'emerald',
    error: 'rose',
    warning: 'orange',
    info: 'blue',
  };

  const themeKey = colorMap[type] as keyof typeof THEME_PALETTE;
  const pal = THEME_PALETTE[themeKey] || THEME_PALETTE.blue;

  return (
    <div
      className="pointer-events-auto flex w-full animate-in slide-in-from-right-8 fade-in duration-500"
      style={{
        borderRadius: 20,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1.5px solid rgba(0,0,0,0.04)',
        boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
        padding: '16px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
        {/* Theme accent left border */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: pal.gradient }}
        />

        <div className="flex gap-4 items-start pr-8">
            <div className="mt-0.5">
                {iconMap[type]}
            </div>
            
            <div className="flex flex-col gap-0.5 text-left">
                <h4 className="text-[15px] font-bold text-slate-900 leading-tight">
                    {title}
                </h4>
                {description && (
                   <p className="text-[13px] font-medium text-slate-500 leading-relaxed">
                       {description}
                   </p>
                )}
            </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
            <X className="w-4 h-4" />
        </button>
    </div>
  );
}
