'use client';

export default function TermsClient() {
  return (
    <main className="flex-1 flex flex-col items-center w-full pb-28 pt-28 px-4" style={{ background: '#FAFBFF' }}>
      <div className="max-w-3xl w-full bg-white p-8 sm:p-12 rounded-[32px] border border-emerald-50 shadow-sm">
        <h1 className="text-4xl font-extrabold mb-8 font-display tracking-tight text-slate-900">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>By using Editor.tools, you agree to the following terms.</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Usage</h2>
          <p>
            Editor.tools provides free online file editing and conversion tools. These tools are provided "as is" 
            without warranty of any kind.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Local Processing</h2>
          <p>
            You acknowledge that all file processing occurs locally in your browser. You are responsible for 
            ensuring you have the right to process the files you use with our tools.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Prohibited Use</h2>
          <p>
            You may not use Editor.tools for any illegal purposes or to process content that violates any laws 
            or third-party rights.
          </p>
        </div>
      </div>
    </main>
  );
}
