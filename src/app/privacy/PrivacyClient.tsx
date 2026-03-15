'use client';

export default function PrivacyClient() {
  return (
    <main className="flex-1 flex flex-col items-center w-full pb-28 pt-28 px-4" style={{ background: '#FAFBFF' }}>
      <div className="max-w-3xl w-full bg-white p-8 sm:p-12 rounded-[32px] border border-emerald-50 shadow-sm">
        <h1 className="text-4xl font-extrabold mb-8 font-display tracking-tight text-slate-900">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>At Edita.tools, we take your privacy seriously. Our tools are designed to be privacy-first.</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Client-Side Processing</h2>
          <p>
            The most important thing to know about Edita.tools is that your files <strong>never leave your device</strong>.
            Unlike traditional online editors that upload your documents to a server, our tools use WebAssembly (WASM)
            to process everything directly in your web browser.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Data Collection</h2>
          <p>
            We do not collect or store any of the content you process with our tools. Because the processing
            happens locally, we never even see your files.
          </p>
          <p>
            We may collect anonymous usage statistics through Google Analytics to help us improve our services,
            but this never includes any sensitive personal data or file content.
          </p>
        </div>
      </div>
    </main>
  );
}
