'use client';

export default function TermsClient() {
  return (
    <main className="flex-1 flex flex-col items-center w-full pb-28 pt-28 px-4" style={{ background: '#FAFBFF' }}>
      <div className="max-w-3xl w-full bg-white p-8 sm:p-12 rounded-[32px] border border-emerald-50 shadow-sm">
        <h1 className="text-4xl font-extrabold mb-8 font-display tracking-tight text-slate-900">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-sm text-slate-500">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          <p>
            Welcome to Edita.tools. By accessing or using our website and suite of browser-based tools, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Description of Service</h2>
          <p>
            Edita.tools provides a collection of free, online file editing, conversion, and digital utility tools. A defining feature of our service is that all file processing computationally occurs directly on your device (client-side) using your web browser&apos;s capabilities. Our servers do not receive, store, or process your files.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. User Responsibilities & Acceptable Use</h2>
          <p>When using Edita.tools, you acknowledge and agree that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Lawful Use:</strong> You will only process files and content that you have the legal right to use, modify, or distribute. You may not use our tools for any illegal, infringing, or malicious purposes.</li>
            <li><strong>Hardware Limitations:</strong> Because processing happens entirely on your local machine, the speed, performance, and success of file operations depend heavily on your device&apos;s hardware (e.g., RAM, CPU) and web browser limitations.</li>
            <li><strong>No Guaranteed Suitability:</strong> You are responsible for verifying the accuracy and integrity of any files converted or processed through our tools before relying on them for critical business, legal, or professional purposes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Intellectual Property Rights (Yours)</h2>
          <p>
            You retain 100% of the ownership and intellectual property rights to any files you process using Edita.tools. Because our tools operate locally within your browser, we never upload, intercept, or claim any rights whatsoever to your content, files, or data. We do not claim any copyright, license, or distribution rights over the materials you manipulate using our software.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Intellectual Property Rights (Ours)</h2>
          <p>
            The Edita.tools website, including its brand, design, logos, original text, and underlying codebase (excluding open-source libraries we utilize), are the intellectual property of Edita.tools. You may not scrape, copy, or redistribute the website&apos;s proprietary features without express permission.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">5. Disclaimers of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. EDITA.TOOLS EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The tools will meet your specific requirements.</li>
            <li>The service will be uninterrupted, timely, secure, or error-free.</li>
            <li>The results obtained from using the tools will be completely accurate or reliable.</li>
            <li>Locally heavy processing tasks will not cause your web browser to freeze or crash.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">6. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL EDITA.TOOLS, ITS CREATORS, OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA (INCLUDING CORRUPTION OF YOUR FILES DURING LOCAL PROCESSING), OR OTHER INTANGIBLE LOSSES RESULTING FROM:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use or inability to use the service.</li>
            <li>Unintended errors, bugs, or limitations in the browser-side processing libraries.</li>
            <li>Any actions taken regarding the files you process.</li>
          </ul>
          <p>Your sole remedy for dissatisfaction with the service is to stop using it.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">7. Modifications to the Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue, temporarily or permanently, any part of Edita.tools at any time without prior notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">8. Changes to Terms</h2>
          <p>
            We may update these Terms of Service periodically. We will reflect the update by changing the &quot;Effective Date&quot; at the top of this document. Continued use of the website following any changes constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">9. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with generally accepted international laws of commerce, without regard to conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts applicable to the website&apos;s ownership jurisdiction.
          </p>
        </div>
      </div>
    </main>
  );
}
