'use client';

export default function PrivacyClient() {
  return (
    <main className="flex-1 flex flex-col items-center w-full pb-28 pt-28 px-4" style={{ background: '#FAFBFF' }}>
      <div className="max-w-3xl w-full bg-white p-8 sm:p-12 rounded-[32px] border border-emerald-50 shadow-sm">
        <h1 className="text-4xl font-extrabold mb-8 font-display tracking-tight text-slate-900">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-sm text-slate-500">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          <p>
            At Edita.tools, we believe in a privacy-by-design approach. Our entire suite of tools is built with user privacy and data security as the foundational principles. This Privacy Policy outlines what information is collected, how it is used, and how we protect your data when you use our website (edita.tools).
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. 100% Client-Side Processing</h2>
          <p>
            The most important aspect of Edita.tools is that <strong>your files never leave your device</strong>. Unlike traditional online editors and converters that require you to upload documents to a remote server, our platform utilizes advanced WebAssembly (WASM) technologies to perform all file processing directly within your web browser. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not upload your files to our servers.</li>
            <li>We do not have access to the content of your files.</li>
            <li>We cannot view, share, or store any data contained within the files you process.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Information We Do NOT Collect</h2>
          <p>Because of our strict local-processing architecture, we explicitly <strong>DO NOT</strong> collect or store:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>File contents, metadata, file names, or formats.</li>
            <li>Personally Identifiable Information (PII) such as your name, email address, or phone number (unless you voluntarily contact us via email for support).</li>
            <li>Account or login credentials, as our service requires no registration or signup.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Information We Collect (Analytics)</h2>
          <p>
            To understand how our website is used and to improve the user experience, we collect anonymous, aggregated usage statistics through <strong>Google Analytics 4 (GA4)</strong>. The information collected may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browser type and version, operating system, and device type.</li>
            <li>Pages visited, time spent on pages, and general interaction with our website elements.</li>
            <li>Approximate geographic location (e.g., country or city level derived from IP addresses, which are anonymized by default in GA4).</li>
          </ul>
          <p>
            This analytics data is strictly used for monitoring the performance of our website and guiding future tool development. We do not use this data to personally identify any user.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Cookies and Local Storage</h2>
          <p>
            Edita.tools itself does not actively use application-level cookies, <code>localStorage</code>, or <code>sessionStorage</code> to track you or store personal preferences across sessions.
          </p>
          <p>
            However, our third-party analytics provider (Google Analytics) may place cookies on your browser to collect the anonymous data described above. You can choose to disable Google Analytics tracking globally by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Google Analytics Opt-out Browser Add-on</a>, or by configuring your browser settings to block cookies.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">5. Third-Party Links and Services</h2>
          <p>
            Our website may contain links to third-party websites or services that we do not own or control. We are not responsible for the privacy practices, content, or security of those external sites. We encourage you to read the privacy policies of any third-party website you visit.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">6. Data Retention and Deletion Rights</h2>
          <p>
            Because we do not store any personal data or file content on our servers, there is no user data or account information for us to delete. This inherently satisfies data minimization and &quot;right to be forgotten&quot; principles found in regulations like the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">7. Children&apos;s Privacy</h2>
          <p>
            Our services are not intended for or directed at children under the age of 13. We do not knowingly collect personal information from children. Because we do not collect personal usage information, there is no mechanism for a child to transmit personal information to us via the website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any modifications will be posted on this page with an updated &quot;Effective Date.&quot; We encourage you to review this page periodically.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at <a href="mailto:info@edita.tools" className="text-emerald-600 hover:text-emerald-700 underline font-medium">info@edita.tools</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
