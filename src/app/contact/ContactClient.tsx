'use client';

import { Mail, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactClient() {
  const [copied, setCopied] = useState(false);
  const email = "info@edita.tools";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex-1 flex flex-col items-center w-full pb-28 pt-28 px-4" style={{ background: '#FAFBFF' }}>
      <div className="max-w-2xl w-full bg-white p-8 sm:p-12 rounded-[32px] border border-emerald-50 shadow-sm text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-emerald-600" />
        </div>
        
        <h1 className="text-4xl font-extrabold mb-4 font-display tracking-tight text-slate-900">Get in Touch</h1>
        <p className="text-slate-600 mb-10 max-w-lg mx-auto text-lg">
          Have questions, feature requests, or just want to say hello? 
          We'd love to hear from you. Reach out to us via email and we'll get back to you as soon as possible.
        </p>
        
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
            <div className="flex flex-col text-left pl-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us At</span>
              <span className="text-lg font-semibold text-slate-800 tracking-tight">{email}</span>
            </div>
            <button 
              onClick={handleCopy}
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-200 focus:scale-95 active:scale-90"
              title="Copy to clipboard"
            >
              {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-[0_8px_16px_rgba(5,150,105,0.2)] hover:shadow-[0_12px_20px_rgba(5,150,105,0.3)] transition-all duration-300 focus:scale-[0.98] active:scale-[0.95] text-lg cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            Send us an Email
          </a>
        </div>
      </div>
    </main>
  );
}
