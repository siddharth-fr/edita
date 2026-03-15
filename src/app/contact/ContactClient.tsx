'use client';

export default function ContactClient() {
  return (
    <main className="flex-1 flex flex-col items-center w-full pb-28 pt-28 px-4" style={{ background: '#FAFBFF' }}>
      <div className="max-w-3xl w-full bg-white p-8 sm:p-12 rounded-[32px] border border-emerald-50 shadow-sm text-center">
        <h1 className="text-4xl font-extrabold mb-4 font-display tracking-tight text-slate-900">Contact Us</h1>
        <p className="text-slate-600 mb-12">Have questions or feedback? We'd love to hear from you.</p>
        
        <div className="max-w-md mx-auto space-y-6 text-left">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
            <textarea 
              rows={5}
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            ></textarea>
          </div>
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all focus:scale-95 active:scale-90">
            Send Message
          </button>
        </div>
      </div>
    </main>
  );
}
