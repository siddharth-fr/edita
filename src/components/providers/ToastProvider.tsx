'use client';
import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { Toast } from '@/components/ui/Toast';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (title: string, description?: string, type?: ToastType) => void;
  success: (title: string, description?: string) => void;
  error: (title: string, description?: string) => void;
  warning: (title: string, description?: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((title: string, description?: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const success = useCallback((title: string, description?: string) => addToast(title, description, 'success'), [addToast]);
  const error = useCallback((title: string, description?: string) => addToast(title, description, 'error'), [addToast]);
  const warning = useCallback((title: string, description?: string) => addToast(title, description, 'warning'), [addToast]);

  return (
    <ToastContext.Provider value={{ toast: addToast, success, error, warning }}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none w-[calc(100%-48px)] sm:w-[380px]">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            title={t.title}
            description={t.description}
            type={t.type}
            onClose={() => setToasts((prev) => prev.filter((toast) => toast.id !== t.id))}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
