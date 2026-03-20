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
      className="pointer-events-auto group flex w-full animate-in slide-in-from-right-12 fade-in duration-500 hover:scale-[1.02] active:scale-[0.98] transition-all"
      style={{
        borderRadius: 24,
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 20px 48px -12px rgba(0,0,0,0.1), 0 8px 16px -4px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.4)',
        padding: '16px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
        {/* Glow corner - dynamic */}
        <div 
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-[0.08]"
          style={{ background: pal.gradient }}
        />

        {/* Theme accent left bar */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[5px] opacity-80"
          style={{ background: pal.gradient }}
        />

        <div className="flex gap-4 items-center pr-8 w-full">
            <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 shadow-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-500"
                style={{ background: pal.tint }}
            >
                {/* Subtle internal glow for icon */}
                <div className="absolute inset-0 bg-white/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">{iconMap[type]}</div>
            </div>
            
            <div className="flex flex-col gap-0.5 text-left">
                <h4 
                  className="text-15px font-extrabold text-slate-900 leading-tight tracking-tight"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}
                >
                    {title}
                </h4>
                {description && (
                   <p className="text-13px font-semibold text-slate-500/80 leading-relaxed">
                       {description}
                   </p>
                )}
            </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-black/5 hover:rotate-90 active:scale-90 transition-all duration-300"
        >
            <X className="w-4.5 h-4.5" />
        </button>

        {/* Subliminal Progress bar */}
        <div 
          className="absolute bottom-0 left-0 h-[3px] origin-left opacity-20"
          style={{ 
            background: pal.gradient,
            width: '100%',
            animation: 'toast-progress 5s linear forwards'
          }}
        />

        <style jsx global>{`
            @keyframes toast-progress {
                from { transform: scaleX(1); }
                to { transform: scaleX(0); }
            }
        `}</style>
    </div>
  );
}
