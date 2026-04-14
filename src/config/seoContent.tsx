import React from 'react';
import Link from 'next/link';

export const TOOL_SEO_CONTENT: Record<string, React.ReactNode> = {

  /* ─────────────────────────────────────────────
     COMPRESS PDF
  ───────────────────────────────────────────── */
  "compress-pdf": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is PDF Compression?</h2>
      <p>
        PDF stands for Portable Document Format — a file standard created by Adobe in 1993 to present documents consistently across hardware, operating systems, and software. A PDF file can contain text, fonts, images, vector graphics, and metadata all packaged into one container. That flexibility comes at a cost: PDFs, especially those built from high-resolution images or print-ready layouts, can grow very large very fast.
      </p>
      <p>
        PDF compression is the process of reducing that file size by eliminating redundant data, downsampling embedded images, and optimizing internal data streams — all without altering the visible content. The result is a document that looks virtually identical but takes up significantly less storage space.
      </p>
      <p>
        You encounter PDFs constantly: job applications, invoices, research papers, e-books, and medical records. Most of the time the person who created the file never thought about the recipient's upload limit, inbox quota, or mobile data plan. Compression bridges that gap.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why PDF File Size Becomes a Real Problem</h2>
      <p>
        Email providers cap attachments between 10 MB and 25 MB. Government application portals often enforce a 2 MB or 5 MB limit. A single PDF built from a dozen scanned pages can easily exceed 20 MB — making it unsendable through standard channels.
      </p>
      <p>
        Students submitting coursework online hit institutional upload limits. Freelancers delivering client proposals run into email bounces. Small business owners attaching contracts to mobile emails find their message rejected before it even leaves the outbox. Developers integrating document pipelines need lightweight assets that don't slow API calls.
      </p>
      <p>
        Ignoring the problem means asking clients to create cloud storage links, splitting documents into multiple parts, or converting files using opaque third-party services that may store your data. Each workaround adds friction — and in the case of cloud tools, potential privacy exposure.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the Compress PDF Tool Works</h2>
      <p>
        Edita's PDF compressor runs entirely in your browser using WebAssembly libraries — no remote servers, no upload queues. Here's exactly what the tool does:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your PDF.</strong> Drag and drop the file onto the tool or click to browse. Only PDF files are accepted; the tool validates the file type immediately.</li>
        <li><strong>Choose a compression level.</strong> Three levels are available — <em>Low</em> (best quality, moderate size reduction), <em>Medium</em> (balanced default), and <em>High</em> (smallest output, more aggressive image downsampling).</li>
        <li><strong>Processing begins locally.</strong> The tool uses <code>pdfjs-dist</code> to render each page of your PDF onto an HTML canvas at the scale matching your chosen level, then uses <code>jsPDF</code> to reconstruct the document with JPEG-encoded images at the specified quality setting.</li>
        <li><strong>Progress updates in real time.</strong> A progress bar shows compression advancing page by page so you always know where it stands.</li>
        <li><strong>Review the savings.</strong> Once done, the tool displays the original file size, the compressed file size, and the percentage reduction achieved.</li>
        <li><strong>Download your file.</strong> Click the download button to save the compressed PDF directly to your device. No email required, no account needed.</li>
      </ol>
      <p className="mt-4">
        The compression approach is image-based: each page is rendered to a canvas at a reduced resolution, then re-encoded as a JPEG. This works exceptionally well on scanned documents, image-heavy presentations, and photo-rich reports. For text-only documents with minimal graphics, size reduction will be smaller — but the output is always a valid, clean PDF.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based PDF Compressor</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Installation Required</h3>
      <p>
        Desktop tools like Adobe Acrobat Pro cost over $250 per year. Lightweight alternatives still require downloading and installing software — a process that IT departments block on corporate machines. A browser-based compressor works immediately on any device with a modern browser, including Chromebooks, locked-down work laptops, and shared library computers.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Upload Delay</h3>
      <p>
        Traditional online compressors require uploading your file to a remote server, waiting for processing, and downloading the result — three separate network round trips. When you're compressing a 50 MB file on a slow connection, that process can take several minutes. Edita eliminates the upload entirely. Processing starts the moment you click the button, using your device's own CPU.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Works on Any Device</h3>
      <p>
        The tool functions identically on macOS, Windows, Linux, Android, and iOS. Whether you're at a desktop workstation, an iPad in a coffee shop, or your phone during a commute, you can compress a PDF in under a minute.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Your Files Never Leave Your Device</h3>
      <p>
        Edita's compression engine is verified to be entirely client-side. The code uses <code>pdfjs-dist</code> and <code>jsPDF</code> running locally via WebAssembly. Your PDF is read into browser memory, processed there, and downloaded back to your disk. At no point does any file data travel to an external server. This makes it safe to compress confidential legal documents, financial statements, medical records, and internal business reports.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools for Your PDF Workflow</h2>
      <p>
        Compression is often just one step in a larger document workflow. After reducing your PDF's size, you may need to combine it with other documents — use the <Link href="/tools/merge-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Merger</Link> to join multiple PDFs into one file without leaving the browser.
      </p>
      <p className="mt-4">
        If your document only needs a few pages shared rather than the whole file, <Link href="/tools/split-pdf" className="text-emerald-600 hover:underline font-semibold">Split PDF</Link> lets you extract exactly the pages you need before compressing — reducing file size further by removing content you don't need to send.
      </p>
      <p className="mt-4">
        When a client or colleague needs to edit the compressed document's text, the <Link href="/tools/pdf-to-word" className="text-emerald-600 hover:underline font-semibold">PDF to Word converter</Link> converts it into an editable .docx file. And if you originally built your PDF from images, the <Link href="/tools/jpg-to-pdf" className="text-emerald-600 hover:underline font-semibold">JPG to PDF tool</Link> can help you rebuild a leaner version from optimized source images.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases for PDF Compression</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Students Submitting Assignments and Applications</h3>
      <p>
        University portals routinely cap file uploads at 2–5 MB for assignments, scholarship applications, and financial aid submissions. A student scanning a handwritten exam or compiling a research portfolio can end up with a 30 MB PDF that the portal refuses to accept. One pass through Edita's compressor — choosing the High compression level — typically brings that file well within limits in under 30 seconds, no software installation needed on a dorm laptop.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Freelancers Sending Client Deliverables</h3>
      <p>
        A graphic designer delivering print-ready brochure files or a consultant attaching a strategic report to a client email often faces the same wall: the attachment is too large. Compressing the PDF means the client receives it immediately in email instead of through a link to a cloud service — which looks more professional and requires no third-party account from the recipient.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Remote Workers Sharing Internal Documents</h3>
      <p>
        Distributed teams frequently attach PDFs — procedure manuals, weekly reports, design specs — to emails or collaboration tools. When colleagues are working across regions with variable connectivity, a 25 MB attachment can make inboxes unresponsive and cause mobile notifications to lag. Compressing documents before distribution keeps communication flowing.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Small Business Owners Filing Digital Paperwork</h3>
      <p>
        Tax filings, vendor agreements, and licensing applications submitted through government portals often enforce strict file size limits. A business owner who scanned multiple ID documents and invoices into a single PDF may need to reduce the file from 18 MB to under 4 MB. The High compression setting achieves this in a single step, with no subscription required.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Developers Building Document Pipelines</h3>
      <p>
        A developer building an expense management system or HR onboarding platform needs uploaded PDFs to stay below a threshold to keep storage costs predictable. Pointing employees or users to Edita's compressor as a pre-submission step eliminates the need to build server-side compression into the pipeline — reducing architecture complexity and infrastructure cost.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Researchers Archiving and Sharing Papers</h3>
      <p>
        Academic researchers accumulate hundreds of PDFs — papers, conference proceedings, scanned archives. Compressing a large corpus of documents makes them easier to back up, share with collaborators via email, or host on a personal research site without exceeding storage quotas. Because everything is processed locally, sensitive pre-publication drafts stay private throughout the process.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips and Best Practices for PDF Compression</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Match compression level to purpose.</strong> Choose Low for documents where visual fidelity matters (design proofs, medical images). Use Medium for everyday business documents. Reserve High for when file size is the only priority and minor quality reduction is acceptable.</li>
        <li><strong>Compress images before building the PDF.</strong> If you control the source images, compress them first using the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> tool and then create the PDF. Starting with smaller source assets produces a leaner PDF even at lower compression levels.</li>
        <li><strong>Remove unnecessary pages first.</strong> Use the <Link href="/tools/split-pdf" className="text-emerald-600 hover:underline font-semibold">Split PDF</Link> tool to extract only the pages you need to share. Compressing a 10-page extract is faster and yields a smaller result than compressing a 100-page master file.</li>
        <li><strong>Text-only PDFs compress least.</strong> A PDF that contains only text with embedded fonts will see minimal size reduction, because the file already uses efficient internal encoding. The compressor delivers the most dramatic results on image-heavy documents.</li>
        <li><strong>Stay on the browser tab during processing.</strong> Because the compression runs in your browser's JavaScript thread, switching to another tab during processing can slow or pause it on some browsers. Keep the Edita tab in the foreground until the progress bar reaches 100%.</li>
        <li><strong>Verify readable text after compression.</strong> After downloading, open the compressed PDF and zoom to 150–200% on a text-heavy page. If characters look blurry, try a lower compression level — the Medium setting preserves text rendering significantly better than High for most documents.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will compressing my PDF reduce image quality visibly?</summary>
        <p className="mt-3">
          It depends on the compression level you choose. The Low setting targets a high JPEG quality factor and minimal resolution reduction — most readers cannot see a difference. The High setting applies more aggressive downsampling, which can soften fine details in photographs. For text-dominant documents, all three settings look indistinguishable at normal reading zoom levels.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is it safe to compress confidential PDFs using this tool?</summary>
        <p className="mt-3">
          Yes. Edita processes all files locally in your browser using WebAssembly. The code has been verified to use <code>pdfjs-dist</code> and <code>jsPDF</code> running entirely in-browser. Your file is never transmitted to any external server. Legal documents, medical records, and financial statements can be compressed without any privacy risk.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">How much can I reduce a PDF's file size?</summary>
        <p className="mt-3">
          Image-heavy PDFs typically compress by 40–80%. A 20 MB scanned document can often become 4–8 MB. Text-only PDFs may see 10–25% reduction. The final size depends on how much of the file consists of image data versus text and vector content.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does the tool work on iPhone and Android?</summary>
        <p className="mt-3">
          Yes. The tool runs in any modern mobile browser — Chrome on Android, Safari on iOS, Firefox Mobile. File selection works through the standard device file picker. Processing speed depends on your device's CPU; most documents under 20 pages complete within 15–30 seconds on a mid-range smartphone.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do I need to create an account or pay anything?</summary>
        <p className="mt-3">
          No account, no payment, no sign-up. Edita is completely free. There are no watermarks added to compressed files, no usage caps, and no premium tier required to access any feature of the compressor.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What happens to my file after I download it?</summary>
        <p className="mt-3">
          Once you close or refresh the browser tab, all file data is cleared from memory. Edita does not retain, log, or cache any file you process. The compressed PDF exists only in your browser's temporary memory during the session and on your disk after you download it.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     MERGE PDF
  ───────────────────────────────────────────── */
  "merge-pdf": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is a PDF Merger and Why Does It Exist?</h2>
      <p>
        PDF — Portable Document Format — was designed by Adobe to present documents identically on any device. That portability made it the format of choice for contracts, invoices, reports, and official correspondence. But the format was never designed with easy assembly in mind: combining multiple separate PDFs into one requires software with explicit merge functionality.
      </p>
      <p>
        A PDF merger joins two or more individual PDF files into a single, continuous document. The page order follows the sequence you specify, and the original formatting of every source file is preserved exactly. The practical need arises whenever someone accumulates separate files that belong together: chapters of a report, scan batches from a multi-page document, or independent contracts that need to be filed as one submission.
      </p>
      <p>
        PDF merging has historically required desktop software like Adobe Acrobat or Preview on macOS. Browser-based tools have made it accessible to anyone with a web connection — but most of those tools upload your files to a server, which creates a privacy risk for any document containing personal or business-sensitive information.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">When Separate PDF Files Become a Problem</h2>
      <p>
        Many workflows generate documents in fragments. A legal case may accumulate dozens of separate PDFs: a complaint, supporting exhibits, correspondence, and declarations — each produced by a different party at a different time. Submitting them one by one to a court portal is tedious and error-prone. Merging them first creates a single, sequential record.
      </p>
      <p>
        Students building a portfolio may have design files, supporting essays, and reference sheets saved as separate PDFs. Freelancers delivering completed projects often need to bundle a final report, an appendix, and signed approval documents into one clean package. Business owners submitting grant applications must combine financial statements, identity documents, and supporting evidence into a single upload.
      </p>
      <p>
        Sending five separate PDF attachments instead of one also increases the likelihood that a recipient misses one. A merged document is harder to overlook and easier to archive, print, or forward.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the Merge PDF Tool Works</h2>
      <p>
        Edita's PDF merger uses <code>pdf-lib</code>, a JavaScript library that manipulates PDF documents directly in the browser. The process is straightforward:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your PDFs.</strong> Drag and drop multiple files onto the dropzone at once, or click to browse. The tool accepts any number of PDF files.</li>
        <li><strong>Review your file list.</strong> Each uploaded file appears in a list with its filename and size. You can remove any file you added by mistake.</li>
        <li><strong>Reorder the documents.</strong> Drag and drop files within the list to arrange the page sequence. The first file in the list becomes the first pages of the merged document.</li>
        <li><strong>Add more files.</strong> If you need to include files you didn't upload initially, use the "Add more files" option to append them to the list at any point before merging.</li>
        <li><strong>Merge locally.</strong> Click "Merge PDFs." The tool reads each file into memory, copies all pages using <code>pdf-lib</code>'s <code>copyPages</code> function, and assembles them into a new PDF document — entirely within your browser.</li>
        <li><strong>Download immediately.</strong> The merged PDF is ready in seconds. Click the download button to save it to your device with the filename <em>Merged_Document.pdf</em>.</li>
      </ol>
      <p className="mt-4">
        Because the tool uses <code>pdf-lib</code> rather than a canvas-rendered approach, all original text, fonts, hyperlinks, and vector graphics are preserved with lossless fidelity in the output document.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based PDF Merger</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Installation Required</h3>
      <p>
        Adobe Acrobat requires a paid subscription. macOS Preview can merge PDFs, but Windows users have no native equivalent — they need third-party software. Edita works instantly in any modern browser on any operating system, with nothing to install or update.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Instant Processing</h3>
      <p>
        Server-based PDF mergers require uploading every source file before processing begins, then downloading the output. If you have five 10 MB files, that's 50 MB of upload before you even see a result. Edita reads files from your local disk directly into browser memory and merges them there, so the whole operation takes seconds regardless of your internet speed.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Works on Desktop, Tablet, and Mobile</h3>
      <p>
        The drag-and-drop interface and file picker work on Chrome, Firefox, Safari, and Edge across Windows, macOS, Android, and iOS. If you receive documents on your phone and need to merge them before forwarding, you can do it within the browser without switching devices.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Your Files Never Leave Your Device</h3>
      <p>
        Edita's merge engine runs exclusively in your browser via WebAssembly. The verified implementation uses <code>pdf-lib</code> entirely on the client side. No file data is transmitted to any server. Sensitive contracts, medical records, legal filings, and financial documents can be merged safely without exposing them to third parties.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools for Your Document Workflow</h2>
      <p>
        After merging, your combined document may be too large to email. Run it through the <Link href="/tools/compress-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Compressor</Link> to reduce its size while preserving formatting, making it easy to send as an email attachment.
      </p>
      <p className="mt-4">
        If you need to share only a portion of a merged document with different recipients, the <Link href="/tools/split-pdf" className="text-emerald-600 hover:underline font-semibold">Split PDF tool</Link> lets you extract specific pages or ranges into separate files — each section going to the right audience without exposing the rest.
      </p>
      <p className="mt-4">
        When the source documents include Word files that haven't yet been converted, use the <Link href="/tools/word-to-pdf" className="text-emerald-600 hover:underline font-semibold">Word to PDF converter</Link> to create PDFs from your .docx files before merging. If any component of the merged PDF comes from scanned images, the <Link href="/tools/jpg-to-pdf" className="text-emerald-600 hover:underline font-semibold">JPG to PDF tool</Link> can package those images into PDF format first.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases for Merging PDFs</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Students Assembling Academic Submissions</h3>
      <p>
        A university student completing a dissertation may produce separate PDFs for the main paper, bibliography, appendices, ethical approval certificate, and signed declaration. Most faculty portals accept only one file. Merging all five into a single document before uploading satisfies the requirement instantly, and ensures the submission is complete without the risk of accidentally omitting a component.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Freelancers Delivering Professional Packages</h3>
      <p>
        A web developer may finalize a project with a technical handover document, a licensing agreement, and a maintenance guide — each as a separate PDF. Merging them into a single "Delivery Package" file looks more professional, makes it easier for the client to file the documents together, and ensures nothing gets separated or lost in an email thread with multiple attachments.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Remote Workers Consolidating Meeting Materials</h3>
      <p>
        Before a video call, a remote worker may receive an agenda, a slide deck exported as PDF, and a reference data sheet from three different colleagues. Merging them into one document before the meeting ensures all relevant material is accessible in one place without switching between tabs during the call.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Small Business Owners Filing Applications</h3>
      <p>
        A small business applying for a bank loan or government grant typically submits a full application package: a business plan, audited financial statements, tax returns, registration certificates, and personal ID documents. The portal expects a single PDF. Merging all components locally keeps sensitive financial and identity data private, which uploading to a cloud merger service would not guarantee.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Developers Archiving Software Documentation</h3>
      <p>
        A developer may generate API reference documentation, a deployment guide, and a change log as separate PDFs through automated tooling. Combining them into a single release document archive makes distribution simpler: one file attached to the release tag on GitHub, one file emailed to enterprise clients, one file hosted on a documentation portal.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Researchers Compiling Literature Reviews</h3>
      <p>
        A researcher managing dozens of downloaded academic papers can merge selected papers related to a specific topic into one reviewable document. This makes annotation and side-by-side reading easier, especially on a tablet. Since the research content may be pre-publication or under embargo, processing with a privacy-first tool is critically important.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips and Best Practices for Merging PDFs</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Compress large source files before merging.</strong> If your individual PDFs are image-heavy, run each through the <Link href="/tools/compress-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Compressor</Link> first. Merging already-optimized files keeps the output document manageable.</li>
        <li><strong>Plan your page order before uploading.</strong> The order you upload files in is the order they appear in the merged document. Think through the intended sequence — cover page first, appendices last — before selecting files.</li>
        <li><strong>Use descriptive source filenames.</strong> Before merging, rename your source files to reflect their content and intended order (e.g., 01_MainReport.pdf, 02_Appendix.pdf). This makes it easier to verify the correct order in the file list.</li>
        <li><strong>Verify output page count.</strong> After downloading, open the merged PDF and check the total page count. It should equal the sum of all source document pages. A page count mismatch suggests a source file encountered an error during reading.</li>
        <li><strong>Keep originals as backups.</strong> The merge operation is non-destructive — it reads copies of your source files and doesn't modify them. Still, keep your original PDFs until you've confirmed the merged output is complete and correct.</li>
        <li><strong>Check bookmarks and hyperlinks.</strong> pdf-lib preserves internal page structure, but cross-document hyperlinks (links that pointed to a specific page in a different source file) may not resolve correctly in the merged output. Test any critical links after merging.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">How many PDFs can I merge at once?</summary>
        <p className="mt-3">
          There is no set file count limit. Processing happens in your browser's memory, so the practical limit depends on your device's available RAM. Most users can merge 20–50 PDF files in a single session without issue. Very large documents or dozens of files on low-memory devices may slow the merge or cause the browser tab to run out of memory.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will formatting, fonts, and images be preserved in the merged file?</summary>
        <p className="mt-3">
          Yes. Edita's merge tool uses <code>pdf-lib</code>, which performs a lossless copy of all pages from each source document. Text, fonts, embedded images, vector graphics, and page dimensions are preserved exactly as they appear in the originals.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is my data safe when merging sensitive documents?</summary>
        <p className="mt-3">
          Completely. Edita processes files locally in your browser using verified client-side WebAssembly code. Your files are never uploaded, transmitted, or stored anywhere outside your own device. You can safely merge confidential contracts, financial records, or personal identity documents.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I merge PDFs on my phone or tablet?</summary>
        <p className="mt-3">
          Yes. The tool works in mobile browsers including Chrome on Android and Safari on iOS. File selection uses your device's native file picker. Processing speed scales with your device's CPU, so smaller files merge faster. The drag-and-drop reordering also works via touch — long-press a file card and drag it to reorder.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I reorder individual pages from different PDFs before merging?</summary>
        <p className="mt-3">
          The tool currently reorders at the document level — you can arrange the sequence of entire PDF files, but not individual pages from within different documents. For granular page-level reordering, split your PDFs into individual pages first using the <Link href="/tools/split-pdf" className="text-emerald-600 hover:underline font-semibold">Split PDF tool</Link>, then upload and reorder the individual page files.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do I need an account to merge PDFs?</summary>
        <p className="mt-3">
          No account, no registration, and no payment required. Edita is free to use without any form of sign-up. The merged file is downloaded directly to your device with no watermarks, no branding, and no usage restrictions.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     SPLIT PDF
  ───────────────────────────────────────────── */
  "split-pdf": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Does Splitting a PDF Mean?</h2>
      <p>
        PDF documents are containers that hold any number of pages. A contract might be 3 pages; a company's annual report might be 300. Splitting a PDF means extracting a defined subset of those pages — whether a single page, a range, or multiple ranges — into one or more separate PDF files.
      </p>
      <p>
        This is distinct from simply printing selected pages. When you split a PDF, you create a new, standalone file containing exactly the pages you specified, formatted identically to the originals. The source document is never altered; what you get is a clean extract.
      </p>
      <p>
        PDF splitting is one of the most common document operations people carry out. It shows up constantly: a school marks a specific chapter of a PDF textbook as required reading. A legal team needs to share the exhibits section of a deposition without including the transcript. A contractor needs to send page 1 (the quote) without page 2 (the internal pricing notes).
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why You Need to Split PDFs</h2>
      <p>
        Large PDFs create real problems when shared. Recipients who only need two pages out of a 150-page report shouldn't have to search through the whole document. Uploading a 60 MB report to an online form when you only need to attach a 2-page summary wastes time and may exceed file size limits.
      </p>
      <p>
        Confidentiality is another major driver. A business proposal might contain a pricing section that should not go to the same audience as the technical specification. An HR document might combine a public job description with a confidential compensation range. Splitting lets you share exactly what each audience needs and nothing more.
      </p>
      <p>
        Students, legal professionals, researchers, and healthcare workers all routinely need to extract specific sections from larger documents. Desktop software capable of this costs money or requires technical expertise. A browser-based tool eliminates those barriers.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the Split PDF Tool Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your PDF.</strong> Select the document from your device. The tool accepts any standard PDF file and validates the type before processing.</li>
        <li><strong>Specify the pages to extract.</strong> Enter exact page numbers or ranges in the input field. You can specify individual pages (e.g., 3, 7), consecutive ranges (e.g., 1–5), or a combination (e.g., 1–3, 8, 12–15).</li>
        <li><strong>Processing happens locally.</strong> The tool reads the source PDF in browser memory, identifies the specified pages, and creates a new PDF document containing only those pages — all without sending data to any server.</li>
        <li><strong>Download your extracted pages.</strong> The split result downloads immediately as a new PDF file to your device. Your original document is untouched.</li>
      </ol>
      <p className="mt-4">
        The split is non-destructive. After completing one extraction, you can run additional splits with different page ranges on the same uploaded file — creating multiple targeted extracts in a single session.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based PDF Splitter</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Software to Install</h3>
      <p>
        Splitting PDFs used to require Adobe Acrobat (paid) or a specific desktop application. Edita works in any modern browser — Chrome, Firefox, Safari, Edge — on any operating system. IT-managed computers, Chromebooks, and library workstations all qualify with no installation.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Waiting for Server Processing</h3>
      <p>
        Server-based splitters require uploading the full source PDF before even processing begins. A 100 MB document with a large number of scanned pages can take several minutes to upload before you get a result. Edita reads the file locally and performs the extraction in seconds.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Works on Any Device</h3>
      <p>
        The tool runs on desktop browsers, mobile browsers, and tablets. If you received a large PDF on your phone and need to extract two pages to forward, you can do it directly in Safari or Chrome without switching to a desktop.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Your Files Never Leave Your Device</h3>
      <p>
        Processing happens in your browser using verified client-side code. The PDF content is read into local memory, the extraction is performed there, and the result is downloaded directly. No page of your document is ever transmitted externally — which matters when the document contains private, legally privileged, or health-related content.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools That Complete Your Workflow</h2>
      <p>
        After splitting, you may want to combine the extracted pages with content from other documents. Use the <Link href="/tools/merge-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Merger</Link> to join your extracted section with new material into one cohesive document.
      </p>
      <p className="mt-4">
        If the extracted section is still too large for a specific upload limit, pass it through the <Link href="/tools/compress-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Compressor</Link> to reduce the file size without removing any pages.
      </p>
      <p className="mt-4">
        When you need the extracted pages as images — for embedding in a presentation or sharing on messaging apps — the <Link href="/tools/pdf-to-jpg" className="text-emerald-600 hover:underline font-semibold">PDF to JPG converter</Link> converts each page into a high-resolution image file. If your original document came from a Word file, the <Link href="/tools/word-to-pdf" className="text-emerald-600 hover:underline font-semibold">Word to PDF tool</Link> can regenerate a clean, single-section PDF from the source.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases for PDF Splitting</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Students Sharing Course Reading Extracts</h3>
      <p>
        A student who purchased a PDF textbook can extract the chapter assigned as required reading and share just those pages with a study group — avoiding the sharing of an entire copyrighted book unnecessarily. Similarly, a student who needs to attach a specific chapter as a submission appendix can extract exactly those pages without attaching the entire document.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Legal Professionals Isolating Document Sections</h3>
      <p>
        Attorneys frequently work with large case documents that combine multiple exhibits, affidavits, and transcripts into a single filing. Splitting out individual exhibits means each piece of evidence can be referenced, shared with expert witnesses, or attached to correspondence separately — with the clear page numbering and formatting of the original preserved.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Freelancers Separating Client-Facing Sections</h3>
      <p>
        A project proposal might contain a public-facing scope of work followed by an internal cost breakdown. Splitting the public section into a standalone PDF means the client receives a clean, professional document without seeing internal pricing notes — even when the original was built as a single file.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Business Owners Distributing Page-Specific Forms</h3>
      <p>
        A business may have a master PDF containing multiple fillable forms — an employee registration form, a leave application, and a reimbursement claim — all in one document. Splitting each form into its own PDF allows HR to distribute the correct form to each employee without confusion about which pages apply.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Developers Processing Document Components Separately</h3>
      <p>
        A developer building a document processing pipeline may need to route specific sections of an uploaded PDF to different processing workflows — the first page (a cover sheet) to an indexing service, and the remaining pages to an archiving system. Splitting the document programmatically, or instructing users to pre-split with Edita, keeps the pipeline clean and lightweight.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Researchers Extracting Key Findings</h3>
      <p>
        A researcher reviewing a 400-page government report may identify 12 pages of directly relevant findings. Extracting those 12 pages into a standalone PDF creates a citation-ready reference document that is far faster to read and share with collaborators than the full report, while retaining original page numbers and formatting for accurate citation.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips for Getting the Most from PDF Splitting</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Check the page count before specifying ranges.</strong> Open your PDF in a viewer to confirm total page count and find the exact pages you need. A mismatch between the range you enter and the document's actual page count will produce an incomplete or empty output.</li>
        <li><strong>Use range notation for consecutive pages.</strong> Instead of listing every page individually (1, 2, 3, 4, 5), use range notation (1–5). This avoids typos and keeps your input brief.</li>
        <li><strong>Run multiple extractions in one session.</strong> After downloading your first extract, change the page range and extract again without re-uploading. This saves time when you need several different sections from the same document.</li>
        <li><strong>Compress after splitting if needed.</strong> If the extracted section is still large (mainly due to scanned images), pass it through the <Link href="/tools/compress-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Compressor</Link> before sharing.</li>
        <li><strong>Label your extracted files clearly.</strong> The tool downloads your extracted section with a default filename. Rename it immediately to reflect the content (e.g., Contract_SignaturePage.pdf) before filing or sending, to avoid confusion later.</li>
        <li><strong>Verify the extract before sending.</strong> Open the downloaded PDF and scroll through it to confirm all targeted pages are present and correctly ordered before sharing with clients or submitting to portals.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I extract specific non-consecutive pages?</summary>
        <p className="mt-3">
          Yes. You can specify any combination of individual pages and ranges. For example, entering "1, 3, 7–10, 15" would extract pages 1, 3, 7, 8, 9, 10, and 15 into a single output PDF, in that order.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will my original PDF be modified or deleted?</summary>
        <p className="mt-3">
          Never. The splitting operation reads a copy of your file into browser memory and creates a new PDF from selected pages. Your original file on disk is not touched at any point. You can close the browser and your source document remains exactly as it was.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is it safe to split confidential or legal documents?</summary>
        <p className="mt-3">
          Yes. All processing happens in your browser's local memory using verified client-side code. Your document content never travels to any server. This makes it appropriate for legally privileged communications, medical records, financial documents, and classified company materials.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does the tool work on iPhone and Android?</summary>
        <p className="mt-3">
          Yes. Chrome on Android and Safari on iOS both support the tool fully. You can select a PDF from your device's Files app, specify page ranges, and download the extracted section — all in a mobile browser without any additional app.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is there a page limit or file size limit?</summary>
        <p className="mt-3">
          There is no imposed file size limit. The practical constraint is your device's available RAM. Very large PDFs (200+ pages with embedded high-resolution images) may take longer to read into memory on older devices, but there is no artificial cap enforced by Edita.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do I need to create an account?</summary>
        <p className="mt-3">
          No. Edita requires no account, sign-up, or payment. The Split PDF tool is fully free with no watermarks added to output files and no usage restrictions.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     PDF TO WORD
  ───────────────────────────────────────────── */
  "pdf-to-word": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is PDF to Word Conversion?</h2>
      <p>
        A PDF is a read-only document container. Text inside a PDF cannot be edited the way a Word document can — clicking on a paragraph won't give you a cursor. PDF to Word conversion extracts the text, formatting, and layout from a PDF and reconstructs them as an editable .docx file that works in Microsoft Word, Google Docs, LibreOffice, and Apple Pages.
      </p>
      <p>
        The need for this conversion is constant. PDFs are the final form most documents take — locked, consistent, shareable. But when updates are needed, when text must be rewritten, or when a document must be repurposed, a PDF's read-only nature becomes a barrier. Conversion makes the content editable again without retyping everything from scratch.
      </p>
      <p>
        You encounter this challenge when receiving a contract that needs revision, a form that requires data entry, a report that must be reformatted for a new presentation, or an academic paper that needs annotations embedded in the text rather than only in margins.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Converting PDF to Word Matters</h2>
      <p>
        Retyping the content of a PDF by hand is time-consuming and error-prone. A 20-page report would take hours to transcribe, and even careful transcription introduces formatting inconsistencies. Conversion tools do this work in seconds.
      </p>
      <p>
        The stakes are higher for sensitive documents. Uploading a confidential contract to an online converter means that content may be read, stored, or analyzed by the converter's servers. Lawyers, HR professionals, executives, and healthcare workers all handle documents they cannot ethically expose to third-party cloud services.
      </p>
      <p>
        The demand spans every type of user: students who receive assignment templates in PDF form, administrative assistants updating standardized documents, non-profits maintaining grant templates, and developers who need to process structured PDF data in a more parseable format.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the PDF to Word Converter Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your PDF.</strong> Select the file through the dropzone or file picker. The tool accepts standard digital PDFs.</li>
        <li><strong>Automatic text extraction.</strong> The tool reads the PDF's internal content stream, extracting embedded text blocks, their positions, and associated font metadata — entirely within your browser.</li>
        <li><strong>Document reconstruction.</strong> The extracted text and structural elements are assembled into a .docx file using local document-building logic, preserving paragraph groupings, headings, and lists where the source PDF's structure makes them identifiable.</li>
        <li><strong>Download your Word file.</strong> The completed .docx file downloads directly to your device and opens immediately in any Word-compatible application.</li>
      </ol>
      <p className="mt-4">
        <strong>Important note on scanned PDFs:</strong> This tool works best with native digital PDFs (PDFs created from word processors, design tools, or data exports). PDFs created by scanning a physical document are image-based — they contain pictures of text rather than actual text data. The local editor extracts text from the PDF content stream, which means scanned PDFs may yield limited text output. For scanned documents, OCR (optical character recognition) technology would be required, which this tool does not perform server-side.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based PDF to Word Converter</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Software Required</h3>
      <p>
        Dedicated PDF editing software is expensive. Microsoft Word's built-in PDF import is inconsistent. A browser tool requires nothing beyond an internet connection to load and then works entirely locally from there.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Upload Latency</h3>
      <p>
        Most online converters send your file to a cloud server for processing and stream the Word document back. This round-trip can take 30–90 seconds for a 10-page document, and significantly longer on slow connections. Edita converts in seconds because the work happens in your own browser.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Works on Any Platform</h3>
      <p>
        The converter runs on Windows, macOS, Linux, Android, and iOS — in any modern browser. You don't need Microsoft Word installed on the converting device. The .docx file it produces opens in Google Docs online, LibreOffice on a Linux machine, or Word on a Windows PC.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Processing Happens in Your Browser</h3>
      <p>
        The conversion is verified to run entirely client-side. Your document content is read into browser memory, processed there, and assembled into a .docx file for download — with no transmission to any external server. Business contracts, legal drafts, and medical records can be converted without privacy risk.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools in Your Document Editing Flow</h2>
      <p>
        Once you've finished editing the converted Word document, convert it back to a shareable, formatting-locked PDF using the <Link href="/tools/word-to-pdf" className="text-emerald-600 hover:underline font-semibold">Word to PDF converter</Link> — the full round-trip without leaving the browser.
      </p>
      <p className="mt-4">
        If the PDF you're working with needs to be trimmed before conversion — for example, extracting only the pages you actually need to edit — use the <Link href="/tools/split-pdf" className="text-emerald-600 hover:underline font-semibold">Split PDF tool</Link> first. This produces a smaller, focused document that converts faster and more cleanly.
      </p>
      <p className="mt-4">
        For PDFs that are too large to work with efficiently, the <Link href="/tools/compress-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Compressor</Link> can reduce file size before conversion. And if you need to view the content of individual pages as images first, <Link href="/tools/pdf-to-jpg" className="text-emerald-600 hover:underline font-semibold">PDF to JPG</Link> extracts each page as a high-resolution image.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Students Editing Received Assignment Templates</h3>
      <p>
        Professors often distribute assignment templates or rubrics as PDFs. A student who needs to fill in a table or complete a form in that document can convert it to Word, make their edits, and convert it back to PDF for submission — without paying for Acrobat or struggling with PDF form fields.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Administrative Assistants Updating Standard Documents</h3>
      <p>
        An office administrator who manages quarterly reports or standardized forms in PDF format can convert any document that needs updating, revise the text, and regenerate the PDF — all in a browser during a lunch break, without specialist software installed on the work computer.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Freelancers Repurposing Client Materials</h3>
      <p>
        A copywriter who receives a client's existing brochure as a PDF can extract the text for rewriting by converting it to Word. This saves the time that would otherwise go to manual transcription, and the structured output makes it easy to identify which sections need fresh copy.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Lawyers Revising Contract Drafts</h3>
      <p>
        A legal professional receiving a contract draft as a PDF can convert it to Word to use tracked changes and comments during review — standard practice for document negotiation. Converting locally means the contract content never leaves the browser, which is essential for privileged attorney-client communications.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Non-Profits Maintaining Grant Templates</h3>
      <p>
        Grant templates distributed by funding bodies often arrive as PDFs. A non-profit grants writer who needs to adapt the same base template for multiple applications can convert it to Word once, create a working master, and customize each application from there without converting repeatedly.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Researchers Extracting Textual Data</h3>
      <p>
        A researcher analyzing published reports or government documents can convert them to Word to extract and quote specific passages accurately, use find-and-replace to identify recurring terminology, or build a corpus from multiple sources — all while keeping sensitive pre-publication draft materials private through local processing.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips for Better PDF to Word Conversion</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Use digitally created PDFs for best results.</strong> PDFs exported from Word, InDesign, or data software contain actual text data. These convert cleanly. Scanned PDFs contain images of text — conversion output will be limited.</li>
        <li><strong>Convert section by section for long documents.</strong> A PDF over 100 pages may produce a very large .docx. Use the <Link href="/tools/split-pdf" className="text-emerald-600 hover:underline font-semibold">Split PDF tool</Link> to extract individual chapters, then convert each chapter separately for cleaner, more manageable Word files.</li>
        <li><strong>Review formatting after conversion.</strong> Complex multi-column layouts, tables with merged cells, and justified text may require minor formatting cleanup in Word after conversion. Budget 5–10 minutes for a formatting review on longer documents.</li>
        <li><strong>Check character encoding for international documents.</strong> PDFs with non-Latin scripts (Arabic, Chinese, Korean, etc.) may not extract correctly depending on how the source PDF embedded its fonts. Preview the output before distributing.</li>
        <li><strong>Protect the Word file after editing.</strong> Once you've made your edits, password-protect the Word document or convert it back to PDF immediately. An editable .docx is easier to accidentally modify than a locked PDF.</li>
        <li><strong>Do not rely on conversion for legally binding signatures.</strong> Digital signatures embedded in a PDF are not preserved in the converted Word document. If the original PDF contains signatures that carry legal weight, keep the original PDF as the authoritative copy.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the Word document be fully editable?</summary>
        <p className="mt-3">
          For digitally created PDFs, yes. The extracted text is placed into Word-compatible text blocks within a standard .docx file that opens and edits normally in Microsoft Word, Google Docs, and LibreOffice. Scanned PDFs produce limited editable text because their content is image-based rather than text-based.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is my document data safe during conversion?</summary>
        <p className="mt-3">
          Yes. Conversion runs entirely in your browser. The PDF content is read from your local file system into browser memory, processed there, and downloaded as a .docx file without any network transmission. No server sees your document content.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this tool support scanned PDFs?</summary>
        <p className="mt-3">
          This tool works best with native digital PDFs. Scanned PDFs consist of images rather than embedded text, so the converter cannot extract meaningful text from them without OCR processing. For scanned documents, the output may consist of image placeholders rather than editable text.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I convert PDFs on my phone?</summary>
        <p className="mt-3">
          Yes. The converter works in mobile browsers on Android and iOS. File selection uses the device's native file picker, and the output .docx downloads to your Files app. You can then open it directly in mobile Word, Google Docs, or any compatible app.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What happens to my document after I close the browser?</summary>
        <p className="mt-3">
          When you close or refresh the tab, all file data is cleared from browser memory. Edita does not retain any document content after the session ends. The only copy of your converted Word file is the one you downloaded to your device.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do I need to pay or sign up?</summary>
        <p className="mt-3">
          No payment and no account. The PDF to Word tool is completely free. There are no watermarks in the output file, no page limits, and no premium features locked behind a subscription.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     WORD TO PDF
  ───────────────────────────────────────────── */
  "word-to-pdf": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Converting Word to PDF Matters</h2>
      <p>
        Microsoft Word documents (.doc and .docx) are designed for editing. They contain fonts, styles, and layout information that renders differently depending on the operating system, Word version, and installed fonts on the recipient's device. A beautifully formatted resume on your Windows machine may arrive as a misaligned mess on a recruiter's macOS laptop — with different line spacing, missing fonts, and shifted margins.
      </p>
      <p>
        PDF solves this by locking a document's layout into a format that renders identically everywhere. Converting Word to PDF is the last step before any document leaves your hands: resumes before job applications, reports before client delivery, contracts before signing, and academic papers before submission.
      </p>
      <p>
        PDF is also the format accepted by the vast majority of online portals, government systems, email attachment conventions, and digital signature platforms. A Word document in someone's inbox is editable — sometimes unintentionally. A PDF communicates finality and professionalism.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">When Word Format Creates Problems</h2>
      <p>
        Job portals reject resumes submitted in .docx format. Academic submission systems require PDF. Clients who open Word documents in Google Docs may see reformatted tables. Vendors who receive contracts in Word may alter terms accidentally — or intentionally — without track changes being activated.
      </p>
      <p>
        Sensitive content also flows through the Word to PDF pipeline. A legal brief, a business plan, a personal financial statement, or a medical referral letter must reach its destination intact and unaltered. For these documents, using an online converter that uploads the file to a server creates an unacceptable exposure window.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the Word to PDF Converter Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your Word document.</strong> Drag and drop your .doc or .docx file, or click to browse. Both legacy .doc and modern .docx formats are accepted.</li>
        <li><strong>Automatic conversion begins.</strong> The tool reads your Word document locally, extracts the text, styles, and structure, and builds a corresponding PDF layout in your browser's memory.</li>
        <li><strong>Download the PDF.</strong> The converted PDF is ready within seconds and downloads directly to your device with layout, fonts, and formatting preserved as closely as the source allows.</li>
      </ol>
      <p className="mt-4">
        The converter handles standard Word formatting including headings, paragraphs, bold and italic text, lists, tables, and images. Complex multi-column layouts or heavily customized styles may require minor review after conversion.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based Word to PDF Converter</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Software Installation Needed</h3>
      <p>
        Microsoft Word itself can export to PDF — but only if you have Word installed. Google Docs can too — but only from a desktop browser via File → Download. Edita works in any browser without requiring Word, Google Docs, or any desktop application.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Instant, Local Processing</h3>
      <p>
        Cloud-based converters upload your document to a remote server, convert it there, and send the PDF back. This takes time and exposes your document content. Edita converts locally — the moment you click, conversion begins using your device's own resources with no network round-trip required.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Works on All Devices</h3>
      <p>
        Convert from Windows, Mac, Linux, Android, or iOS. If you're editing a document on your phone and need to convert it before sending, the mobile browser experience is the same as desktop — no app download required.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Processing Happens in Your Browser</h3>
      <p>
        Your Word document content is processed entirely within your browser session. The conversion is local — no server receives your file. This is the appropriate choice for confidential business proposals, legal documents, employment applications, and any file you wouldn't want transmitted through a cloud service.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools That Extend Your Workflow</h2>
      <p>
        If the PDF you generate is larger than an attachment limit allows, immediately compress it with the <Link href="/tools/compress-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Compressor</Link> to reduce file size without quality loss.
      </p>
      <p className="mt-4">
        When a client or colleague needs to edit the PDF you send them, they can convert it back using the <Link href="/tools/pdf-to-word" className="text-emerald-600 hover:underline font-semibold">PDF to Word tool</Link> — the reverse conversion that runs with the same local privacy guarantee.
      </p>
      <p className="mt-4">
        If your Word document contains important charts or visuals that a colleague needs as standalone image files, the <Link href="/tools/pdf-to-jpg" className="text-emerald-600 hover:underline font-semibold">PDF to JPG converter</Link> can extract each page of the generated PDF as an image for separate use.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Job Seekers Submitting Resumes</h3>
      <p>
        Recruiters and applicant tracking systems strongly prefer PDF resumes because they render consistently across all viewing environments. A job seeker who built their resume in Word can convert it to PDF with one click immediately before submitting — ensuring font choices, column layouts, and spacing arrive exactly as designed.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Students Submitting Coursework</h3>
      <p>
        Most university submission portals require PDF format. A student who wrote their essay in Word can convert it moments before the submission deadline — without needing Word itself, using any device with a browser, including a phone or a borrowed laptop.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Freelancers Delivering Final Documents</h3>
      <p>
        A copywriter delivering final copy, a consultant submitting a strategy memo, or a designer handing over a brand guide all benefit from PDF delivery. The document arrives looking exactly as intended, cannot be accidentally altered in transit, and signals professional care.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Businesses Signing and Archiving Contracts</h3>
      <p>
        Before a contract enters a digital signing workflow (DocuSign, Adobe Sign, etc.), it typically needs to be in PDF format. Converting the drafted Word contract to PDF locally ensures neither the text nor the negotiated terms are exposed to a third-party server before signing.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Teachers Creating Distributable Handouts</h3>
      <p>
        An educator who writes lesson plans, quizzes, or worksheets in Word can convert them to PDF before distributing to students. PDF format prevents unauthorized editing and ensures all students receive the same version — a particular concern when distributing exam materials.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips for Clean Word to PDF Conversion</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Use standard fonts.</strong> Documents using unusual or system-specific fonts may render with font substitution in the PDF. Switching to widely available fonts (Arial, Times New Roman, Calibri, Georgia) before conversion produces the most consistent output.</li>
        <li><strong>Review margins and page size before converting.</strong> If your document uses custom page sizes (A5, legal, etc.), verify the page dimensions look correct in the PDF preview before sending — different page sizes can affect how the document prints or displays.</li>
        <li><strong>Flatten tracked changes before converting.</strong> If your document contains tracked changes or comments, accept or reject all edits before converting to PDF. Comments and review markup appear in the PDF as-is if not cleared.</li>
        <li><strong>Compress the output for large documents.</strong> Image-heavy Word documents convert to large PDFs. Run the output through the <Link href="/tools/compress-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Compressor</Link> if the file needs to fit within an email attachment limit.</li>
        <li><strong>Test hyperlinks in the output.</strong> Hyperlinks embedded in Word documents are carried over to the PDF output. Verify that URLs remain clickable and point to the correct destinations after conversion.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the PDF look exactly like my Word document?</summary>
        <p className="mt-3">
          In most cases, yes. Standard formatting including headings, paragraphs, bold/italic text, numbered and bulleted lists, tables, and embedded images is preserved. Very complex layouts — multi-column designs or custom styles — may have minor differences. Review the output before sharing for high-stakes documents.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does the tool support both .doc and .docx formats?</summary>
        <p className="mt-3">
          Yes. The converter accepts both legacy .doc files (Word 97–2003 format) and modern .docx files (Word 2007 and later). Both are handled with the same local processing approach.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is my document content safe during conversion?</summary>
        <p className="mt-3">
          Yes. Conversion happens entirely in your browser's local memory. Your document is never uploaded to or processed by any external server. The only output is the PDF file downloaded directly to your device.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I convert documents on my phone?</summary>
        <p className="mt-3">
          Yes. The tool runs in mobile browsers on Android and iOS. You can select a Word document from your device's file system and download the converted PDF directly to the same device without any desktop required.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are there any file size or page limitations?</summary>
        <p className="mt-3">
          There are no server-imposed limits because processing is local. The practical constraint is your device's available memory. Most business and academic documents — even those running to 50+ pages — convert without issue.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do I need to pay or register?</summary>
        <p className="mt-3">
          No. The Word to PDF converter is completely free. No sign-up, no subscription, and no watermarks are added to the output PDF. Use it as many times as needed.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     JPG TO PDF
  ───────────────────────────────────────────── */
  "jpg-to-pdf": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is JPG to PDF Conversion?</h2>
      <p>
        JPG (also written JPEG) is the most common format for photographs and scanned images. It uses lossy compression to keep file sizes manageable while preserving visual quality. PDF, on the other hand, is a document container format designed for reliable, consistent presentation.
      </p>
      <p>
        Converting JPG to PDF means embedding your image files inside a PDF document — each image becoming one page of the resulting file. Multiple images can be combined into a multi-page PDF in a sequence you choose. The result is a single, self-contained document file rather than a scattered collection of image files.
      </p>
      <p>
        This conversion is one of the most widely needed tasks outside of professional document workflows. You encounter the need whenever you photograph a paper document with your phone, scan receipts for reimbursement, photograph ID cards or certificates for submission, or assemble a photo series into a presentable format.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">When Images Need to Become a Document</h2>
      <p>
        Most submission systems — university portals, insurance claim forms, job application systems, government services — accept PDF but not JPG. Photographing a required document on your phone gives you a JPG. Converting it to PDF makes it acceptable for submission.
      </p>
      <p>
        Multiple images create a secondary problem: sending ten separate JPGs as email attachments is disorganized and easy to miss. A single PDF containing all ten images is one attachment, clearly labeled, impossible to miscount. For professional deliverables, the PDF format signals that you've put effort into the presentation.
      </p>
      <p>
        Storage and archiving also favor PDF. A folder of dozens of JPGs is harder to search, share, and distribute than a single labeled PDF. Image-to-PDF conversion creates a manageable archive that can be emailed, stored on a drive, or printed as a unit.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the JPG to PDF Tool Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Add your images.</strong> Upload one or multiple JPG files at once using the dropzone or file picker. PNG and other image formats may also work via the underlying converter.</li>
        <li><strong>Review your image list.</strong> Each uploaded image appears as a page entry. See what you've selected and remove any images you added in error.</li>
        <li><strong>Drag to reorder.</strong> Arrange the images into your intended page sequence by dragging and dropping them within the list.</li>
        <li><strong>Create the PDF.</strong> Click the conversion button. The tool assembles all images into a new PDF document in browser memory, with each image occupying its own page at its original dimensions.</li>
        <li><strong>Download.</strong> The compiled PDF downloads directly to your device — ready to attach, submit, or archive.</li>
      </ol>
      <p className="mt-4">
        The tool preserves original image resolution during the conversion. Images are not recompressed — their pixel data is embedded into the PDF at full quality. This keeps photographs clear and detailed in the output document.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based Image to PDF Tool</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No App Required</h3>
      <p>
        iOS and Android have limited native PDF creation. Desktop operating systems have print-to-PDF but no multi-image assembly. Edita works in any mobile or desktop browser without downloading a separate app or tool.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Fast, Local Assembly</h3>
      <p>
        Server-based tools require uploading all your images before processing begins. Edita reads images from your device directly into browser memory and builds the PDF there — no internet round-trip, no waiting for server processing.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Works on Any Device</h3>
      <p>
        The tool runs identically on desktop browsers and mobile browsers. On a phone, you can photograph a document, open the tool in Safari or Chrome, upload the photo, and have a PDF within seconds — all before leaving the room where the document is.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Your Files Never Leave Your Device</h3>
      <p>
        Image assembly runs entirely in the browser. Photos of ID documents, medical records, contracts, and financial statements are processed locally with zero transmission to external servers. This is the appropriate choice when the images contain personal or sensitive information.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools in Your Document Workflow</h2>
      <p>
        If the PDF you create from images is too large to email, pass it through the <Link href="/tools/compress-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Compressor</Link> before sending. And if you later need to extract those images back from the PDF, the <Link href="/tools/pdf-to-jpg" className="text-emerald-600 hover:underline font-semibold">PDF to JPG converter</Link> reverses the process.
      </p>
      <p className="mt-4">
        For images that are themselves too large, the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> can reduce individual photo file sizes before you assemble them into a PDF — keeping the final document lean from the start. If you need to combine your image-based PDF with other PDFs, the <Link href="/tools/merge-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Merger</Link> joins multiple PDFs without quality loss.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Students Submitting Handwritten Work</h3>
      <p>
        A student who completes a math problem set or lab diagram by hand photographs each page on their phone. Converting the photos to a multi-page PDF creates a single file for online submission — far more organized than attaching a dozen separate image files, and compatible with every submission portal.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Freelancers Creating Portfolio Documents</h3>
      <p>
        A photographer, illustrator, or designer with a collection of high-resolution project photos can assemble them into a polished portfolio PDF in minutes. Clients receive a single, beautifully sequenced document rather than a bulk folder of image files.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Small Business Owners Filing Expense Claims</h3>
      <p>
        An owner who photographs receipts for tax or reimbursement purposes can combine a month's worth of receipt JPGs into one organized PDF at the end of each billing cycle. Accountants and bookkeepers receive one structured file per period rather than a disorganized image dump.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Anyone Submitting Physical Documents Digitally</h3>
      <p>
        Government applications, rental agreements, insurance claims, and medical referrals often require you to submit photographs of paper documents. Converting those photos to a PDF — with all required pages assembled in order — ensures the submission is complete, correctly ordered, and accepted by the portal.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips for Better Image to PDF Results</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Photograph in good lighting.</strong> The quality of a scanned-document PDF depends entirely on the quality of the source photos. Even lighting, a stable hand, and a clear background produce images that are crisp and readable at any zoom level.</li>
        <li><strong>Use consistent orientation per batch.</strong> If all your source images are portrait-oriented, the PDF pages will be consistent. Mixing portrait and landscape images in one PDF can make some pages hard to read without rotating.</li>
        <li><strong>Compress images before combining.</strong> Run large photos through the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> before uploading. Starting with smaller source images produces a more manageable PDF file.</li>
        <li><strong>Name images in order before uploading.</strong> If you name your files 01_page.jpg, 02_page.jpg, etc., they will appear in numerical order in most file pickers, making it easier to upload them in the right sequence before reordering.</li>
        <li><strong>Verify all pages are included before downloading.</strong> After assembling, preview the page count displayed by the tool to confirm it matches the number of images you uploaded. If a count mismatch occurs, check which images may have been rejected as invalid file types.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I combine multiple JPG images into one PDF?</summary>
        <p className="mt-3">
          Yes. Upload as many JPG files as you need, arrange them in order, and the tool creates a single multi-page PDF with one image per page.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will my images lose quality in the PDF?</summary>
        <p className="mt-3">
          No. The tool embeds your JPG images into the PDF at original resolution. The visual quality of images in the PDF matches the quality of the source files.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is my image data safe?</summary>
        <p className="mt-3">
          Yes. All processing happens locally in your browser. Your images are never transmitted to a server. Photos of identity documents, financial records, or private materials are safe to use with this tool.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does the tool work on mobile?</summary>
        <p className="mt-3">
          Yes. You can upload photos directly from your phone's camera roll on Android or iOS, arrange them, and download the PDF — all within the mobile browser.
      </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free to use?</summary>
        <p className="mt-3">
          Yes. The JPG to PDF tool is completely free. No account required, no watermarks added, no file count limits.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What happens to my files when I close the browser?</summary>
        <p className="mt-3">
          All file data is cleared from browser memory when you close or refresh the tab. Edita retains nothing after your session ends.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     PDF TO JPG
  ───────────────────────────────────────────── */
  "pdf-to-jpg": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is PDF to JPG Conversion?</h2>
      <p>
        Converting a PDF to JPG means rendering each page of the PDF as a raster image — capturing the visual output of the page and saving it as a JPEG photograph. The result is a set of image files, one per page, each containing a visual snapshot of that page's content with all text, graphics, and formatting rendered exactly as they appear in the original document.
      </p>
      <p>
        PDF and JPG serve different purposes. PDFs are designed to preserve document layout and allow reading, searching, and sometimes editing. JPGs are raster images — flat visual representations without selectable text or embedded vectors. Converting from one to the other is a one-way rasterization, most useful when you need the visual content of a document in image form rather than document form.
      </p>
      <p>
        This need arises constantly. Slide decks sent as PDFs need to become image files for embedding in a presentation. A scanned certificate needs to be provided as an image attachment. A document page needs to be shared in a messaging app that doesn't render PDFs inline. A product spec sheet needs its diagrams extracted as images for use in a different context.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why You Need to Convert PDF Pages to Images</h2>
      <p>
        Many platforms simply don't support PDF. Social media, messaging apps, content management systems, and presentation builders all work with images, not document containers. Someone who wants to quote a specific page of a report in a blog post, embed a chart in a Notion page, or share a certificate on LinkedIn needs an image file, not a PDF.
      </p>
      <p>
        Even in document contexts, image extraction is common. A designer incorporating a chart from a financial report into an annual report layout needs the chart as a standalone graphic. A marketing team that received a company FAQ as a PDF may need each page as an image for a website gallery or social media post series.
      </p>
      <p>
        For confidential documents, the privacy risk of server-based converters is significant. A PDF page containing a salary figure, a patient diagnosis, or a trade secret should not travel to a cloud server just to be rendered as an image.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the PDF to JPG Tool Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your PDF.</strong> Select the document from your device. The tool validates the file type before processing.</li>
        <li><strong>Page-by-page rendering begins.</strong> The tool uses <code>pdfjs-dist</code> — a Mozilla PDF rendering library — to render each page of the PDF onto an HTML canvas element inside your browser at high resolution.</li>
        <li><strong>Image encoding.</strong> Each rendered canvas is exported as a high-quality JPEG. The resolution is controlled by a scaling factor that produces sharp, readable images even for text-dense pages.</li>
        <li><strong>Download your images.</strong> The resulting JPGs are available for individual download — one image file per page. You choose which pages to save.</li>
      </ol>
      <p className="mt-4">
        Because rendering happens via <code>pdfjs-dist</code> in the browser, all visual elements of each page — text with embedded fonts, vector graphics, photographs, tables — are rendered accurately. The output is what the page actually looks like, not a programmatic export.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based PDF to Image Converter</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Application Required</h3>
      <p>
        Desktop PDF readers that include export functionality (Acrobat, Preview) require installation and often carry subscription costs. Edita requires only a browser and produces high-quality results from any device.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Faster Than Upload-Based Tools</h3>
      <p>
        Server-based converters require uploading the entire PDF before rendering any single page. Edita loads the PDF locally and begins rendering immediately, page by page, with no upload wait time regardless of file size.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Consistent Results Across Platforms</h3>
      <p>
        The tool produces identical output on Windows, macOS, and mobile because <code>pdfjs-dist</code> renders consistently across all browser environments. There's no dependency on OS-specific rendering engines.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Your Files Never Leave Your Device</h3>
      <p>
        All rendering and encoding takes place in your browser. No page of your PDF is transmitted to any server. This makes it suitable for extracting image representations of confidential documents — medical reports, legal filings, financial statements — without privacy risk.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools for Complete Document Workflows</h2>
      <p>
        If you want to work with the extracted images on the web, convert them to a modern format using the <Link href="/tools/jpg-to-webp" className="text-emerald-600 hover:underline font-semibold">JPG to WebP converter</Link> — reducing file size by 25–35% while maintaining the same visual quality.
      </p>
      <p className="mt-4">
        To go in the reverse direction and assemble images back into a PDF, use the <Link href="/tools/jpg-to-pdf" className="text-emerald-600 hover:underline font-semibold">JPG to PDF tool</Link>. And if your source PDF is too large to render efficiently, first compress the document with the <Link href="/tools/compress-pdf" className="text-emerald-600 hover:underline font-semibold">PDF Compressor</Link>.
      </p>
      <p className="mt-4">
        When you need higher-detail images suitable for print rather than screen, consider the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> to balance quality and file size for the extracted JPGs before use in print workflows.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Content Creators Repurposing Documents</h3>
      <p>
        A content creator who publishes research summaries as PDF reports can extract individual pages as images for use in Instagram carousels, Twitter/X posts, or LinkedIn article illustrations. Each page becomes a shareable visual that platforms render natively, reaching audiences who would never download a PDF.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Designers Extracting Diagrams and Charts</h3>
      <p>
        A graphic designer working on an annual report receives last year's data as a PDF. By converting the relevant chart pages to JPG, they can import those visuals directly into InDesign or Figma as reference images — without re-creating the charts from data.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Students Sharing Notes and Lecture Slides</h3>
      <p>
        A student who receives lecture slides as a PDF can convert individual pages to images for sharing in a study group chat. Images render inline in messaging apps, making it easier for group members to reference specific slides during discussion.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Developers Generating Document Previews</h3>
      <p>
        A developer building a document management system may need to display preview thumbnails of uploaded PDFs. Directing users to convert their first page to JPG with Edita removes the need to implement server-side PDF rendering in the application, simplifying the infrastructure significantly.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips for Better PDF to JPG Conversion</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Convert only the pages you need.</strong> After conversion, download only the specific page images you need. This avoids accumulating large numbers of image files for pages you won't use.</li>
        <li><strong>Use the extracted JPGs for screen, not print.</strong> Browser-rendered PDFs produce screen-resolution images. For commercial print use, a dedicated desktop tool at 300 DPI or higher is more appropriate.</li>
        <li><strong>Compress images after extraction if needed.</strong> If the extracted JPGs are large and you need to embed them in a website or mobile app, run them through the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> to reduce file size without visible quality loss.</li>
        <li><strong>Convert to WebP for web embedding.</strong> For images destined for web pages, <Link href="/tools/jpg-to-webp" className="text-emerald-600 hover:underline font-semibold">converting to WebP</Link> after extraction produces smaller files that load faster for website visitors.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What resolution will the output JPG images be?</summary>
        <p className="mt-3">
          The tool renders each PDF page using <code>pdfjs-dist</code> at a high-quality scale factor, producing images that are clear and readable at standard screen resolutions. The exact pixel dimensions depend on the source PDF's page size and the rendering scale used.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is it safe to convert private PDFs to images?</summary>
        <p className="mt-3">
          Yes. Edita renders PDF pages locally in your browser using verified client-side code. No page content is sent to any server. Confidential documents — medical records, signed contracts, financial statements — can be converted without privacy concerns.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I select which pages to convert?</summary>
        <p className="mt-3">
          The tool converts all pages and presents them as individual downloadable images. You choose which page images to download. If you only need specific pages as images, download just those and ignore the rest.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does the tool work on mobile devices?</summary>
        <p className="mt-3">
          Yes. Chrome on Android and Safari on iOS both support the tool. PDF rendering on mobile may take slightly longer for large documents due to CPU constraints, but the output quality is identical.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do I need an account to use this tool?</summary>
        <p className="mt-3">
          No. The PDF to JPG converter is free with no sign-up required. All features are available without registration.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What happens to my PDF when I close the browser?</summary>
        <p className="mt-3">
          All data is cleared from browser memory on tab close or refresh. Edita does not retain any file data after the session. Only the images you explicitly downloaded to your device are kept.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     IMAGE COMPRESSOR
  ───────────────────────────────────────────── */
  "image-compressor": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is Image Compression?</h2>
      <p>
        Image compression is the process of reducing the file size of a digital image by removing or approximating data that doesn't significantly affect how the image looks. Modern compression algorithms exploit the fact that human vision is more sensitive to brightness changes than to fine color detail — allowing them to eliminate color data that viewers won't notice while keeping the image looking sharp.
      </p>
      <p>
        There are two broad categories: <strong>lossless</strong> compression, which removes redundant data without discarding any visual information, and <strong>lossy</strong> compression, which achieves greater size reductions by selectively discarding detail that most viewers won't perceive. JPG uses lossy compression; PNG uses lossless. WebP supports both.
      </p>
      <p>
        You encounter compressed images everywhere: every photograph on a website, every image in a mobile app, every attachment in a marketing email has been optimized to balance visual quality with file size. The difference between a well-compressed image and an uncompressed one can be the difference between a 200 KB file that loads instantly and a 5 MB file that causes a browser to wait 3 seconds.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Uncompressed Images Create Real Problems</h2>
      <p>
        A modern smartphone camera produces JPG files between 4 MB and 12 MB each. A professional camera shooting RAW files produces even larger source images. Sharing these files uncompressed causes friction at every step: email attachments bounce, messaging apps scale images down automatically (losing quality), and website page loads slow.
      </p>
      <p>
        For web developers and designers, unoptimized images are one of the most common causes of poor Lighthouse performance scores. Google counts page speed as a search ranking factor — oversized images directly cost search visibility. For content teams managing a CMS, a library of uncompressed product photos can exhaust server storage within months.
      </p>
      <p>
        Even for personal use, storage on phones, cloud services, and external drives is finite. Compressing image archives before backup can reduce storage usage by 40–70% without visible quality loss.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the Image Compressor Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your images.</strong> Select one or multiple JPG, PNG, or WebP files. Batch processing allows you to compress an entire set in one session.</li>
        <li><strong>Automatic optimization.</strong> The tool reads each image into browser memory and applies an intelligent compression algorithm tuned for the image's format — distinguishing between photographic content (where lossy compression applies well) and graphic elements (where lossless preserves edges and text).</li>
        <li><strong>Size and quality comparison.</strong> For each compressed image, the tool shows the original size, the compressed size, and the percentage reduction — so you can evaluate the trade-off before downloading.</li>
        <li><strong>Download selectively.</strong> Download individual optimized images or all of them at once. Compression is complete and the files are ready to use immediately.</li>
      </ol>
      <p className="mt-4">
        The compression runs entirely in your browser using the browser's native Canvas API and encoding capabilities. No external library is uploaded, and no server round-trip occurs. This approach delivers fast results because it processes files using your computer's GPU-accelerated rendering pipeline.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based Image Compressor</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Installation</h3>
      <p>
        Desktop tools like Photoshop, Squoosh CLI, or ImageMagick require installation, configuration, and in Photoshop's case, a subscription. Edita's compressor opens immediately in any browser with no setup.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Batch Processing Without Upload Delays</h3>
      <p>
        Online compressors that run on servers require uploading every image before compression begins. For a 50-image product photo set, that upload alone can take minutes on a typical connection. Edita processes images locally, starting compression immediately after file selection.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Cross-Platform, Any Device</h3>
      <p>
        The tool runs identically on Windows, macOS, Linux, Android tablets, and iPhones. E-commerce sellers who photograph products on their phone can compress in the mobile browser before uploading to their store.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Your Files Never Leave Your Device</h3>
      <p>
        Image processing uses the browser's local Canvas API. Your photos — including personal family images, professional photography, and proprietary product visuals — are never transmitted to any server. Processing happens entirely in browser memory with zero external data exposure.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools for a Complete Image Workflow</h2>
      <p>
        After compressing, if you need to change format — for example, to reduce size further using a next-generation codec — use the <Link href="/tools/jpg-to-webp" className="text-emerald-600 hover:underline font-semibold">JPG to WebP converter</Link> or <Link href="/tools/png-to-avif" className="text-emerald-600 hover:underline font-semibold">PNG to AVIF converter</Link> to gain an additional 25–50% reduction on top of compression.
      </p>
      <p className="mt-4">
        If compressed images need to be collected into a single document for sharing or submission, the <Link href="/tools/jpg-to-pdf" className="text-emerald-600 hover:underline font-semibold">JPG to PDF tool</Link> assembles multiple images into one PDF with their compressed sizes preserved. And for SVG graphics that need rasterizing before compression, <Link href="/tools/svg-to-png" className="text-emerald-600 hover:underline font-semibold">SVG to PNG</Link> converts vectors to raster images first.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Web Developers Optimizing Page Load Times</h3>
      <p>
        A developer building an e-commerce site receives a folder of 80 product images from a photographer, each between 8–15 MB. Compressing them before upload reduces the image library from 800 MB to under 200 MB. Pages load faster, Core Web Vitals improve, and hosting costs drop. The whole batch is processed in a single browser session.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Freelancers Emailing High-Resolution Deliverables</h3>
      <p>
        A photographer who delivers 30 edited images to a client faces the attachment limit problem: 30 × 10 MB images can't go in one email. Compressing each to 1–2 MB without perceptible quality loss allows delivery via a single email with a browser-based compressor, no Dropbox link required.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Content Creators Managing Social Media Assets</h3>
      <p>
        Instagram, Facebook, and Twitter automatically recompress uploaded images — often in ways that introduce visible artifacts. Compressing images to an optimized file size before uploading gives the platform less reason to apply aggressive secondary compression, resulting in better-looking posts.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Businesses Optimizing Email Marketing</h3>
      <p>
        Marketing teams embedding images in email campaigns need to keep image file sizes small to prevent emails from being flagged as large downloads or failing spam filters. Compressing campaign images before embedding keeps email clients happy and engagement rates higher.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Anyone Archiving Personal Photos</h3>
      <p>
        A person with a 50 GB camera roll backing up to cloud storage can compress their library before uploading to reduce storage usage dramatically. A 50% average reduction across 50 GB saves 25 GB — months of cloud storage fees at no quality cost.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips for Better Image Compression Results</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Match format to content type.</strong> JPG is best for photographs with gradients and complex colors. PNG is better for screenshots, diagrams, and images with sharp edges or text. Use the format that already matches your image type for compression rather than forcing conversion.</li>
        <li><strong>Convert to WebP or AVIF for web use.</strong> After compressing, if images are destined for a website, <Link href="/tools/jpg-to-webp" className="text-emerald-600 hover:underline font-semibold">converting to WebP</Link> typically yields an additional 25–35% reduction compared to a compressed JPG at equivalent visual quality.</li>
        <li><strong>Compress before building PDFs.</strong> If you later plan to use compressed images in a PDF via the <Link href="/tools/jpg-to-pdf" className="text-emerald-600 hover:underline font-semibold">JPG to PDF tool</Link>, compressing the source images first creates a leaner final document without needing after-the-fact PDF compression.</li>
        <li><strong>Don't compress already-compressed images repeatedly.</strong> Each pass through a lossy compression algorithm introduces small errors. Compress once from the original, keep the original as a source file, and don't recompress the compressed output.</li>
        <li><strong>Visually inspect results at 100% zoom.</strong> After compressing, view the output image at 100% magnification in a browser or image viewer. Compression artifacts in JPG images often aren't visible at normal viewing distances but become apparent when zoomed in closely around detailed areas.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Which image formats can I compress?</summary>
        <p className="mt-3">
          The compressor supports JPG/JPEG, PNG, and WebP — the three most common web image formats. Each format is handled with compression logic appropriate to its encoding characteristics.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will my images look blurry after compression?</summary>
        <p className="mt-3">
          Not at typical viewing sizes. The compressor eliminates data that most viewers cannot perceive at normal viewing distances. Images viewed at 100% magnification may show subtle artifacts in high-compression settings, but at standard display sizes the output looks identical to the original.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my photos safe to upload here?</summary>
        <p className="mt-3">
          Yes. All compression happens locally in your browser using the native Canvas API. Your images — including personal photos, professional portfolio work, and proprietary product images — are never transmitted to any server or retained after the session ends.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I compress multiple images at the same time?</summary>
        <p className="mt-3">
          Yes. You can upload a batch of images and compress them all in a single session. Each image is processed independently, and you can download them individually or as a batch.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does compression work on a phone?</summary>
        <p className="mt-3">
          Yes. The tool runs in Chrome on Android and Safari on iOS. You can compress images directly from your camera roll on-device without any app download. Processing speed varies with device CPU — most phone-captured images compress in under 5 seconds.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">How much will my image file size be reduced?</summary>
        <p className="mt-3">
          Results vary by image content and format. JPEG photographs typically compress 40–70%. PNG graphics with large areas of solid color compress well; complex photos in PNG format compress less. The tool displays the exact size reduction for each image before you download it.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     MP4 TO MP3
  ───────────────────────────────────────────── */
  "mp4-to-mp3": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is MP4 and What Makes Audio Extraction Useful?</h2>
      <p>
        MP4 (MPEG-4 Part 14) is a multimedia container format that stores video, audio, and sometimes subtitles in a single file. When you record a video on your phone, download a YouTube video, or export a screen recording from a meeting tool, you typically get an MP4 file. Inside that container, the audio and video tracks are stored as separate streams — the audio is usually encoded as AAC (Advanced Audio Coding).
      </p>
      <p>
        MP3 is an audio-only format. It stores just the audio track — compressed efficiently using the MPEG-1 Audio Layer III codec. MP3 is the world's most universally compatible audio format, supported by every device, platform, and media player without exception.
      </p>
      <p>
        Extracting audio from an MP4 means stripping out the video stream and keeping only the audio — either in its original encoding or re-encoded to MP3. The result is a standalone audio file that plays anywhere, takes up far less space than the original video, and is trivial to share as an attachment, podcast episode, or music file.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">When You Need Audio Without the Video</h2>
      <p>
        The need to extract audio emerges across dozens of common situations. A lecturer records a presentation on video — the audio is the valuable content, and students want a downloadable MP3 they can listen to on their commute. A musician records a session via video call — the audio track is the deliverable, not the visual feed.
      </p>
      <p>
        Podcasters frequently record interviews over video conferencing tools. The video file is the raw recording, but the podcast episode is audio-only. Fitness instructors create workout videos but also release audio-only versions for users who exercise without a screen.
      </p>
      <p>
        Privacy is a significant concern here. Many video files contain incidental visual information — faces, backgrounds, whiteboards with sensitive data — that the uploader does not want exposed to a cloud service just to extract a soundtrack. Processing locally eliminates that risk entirely.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the MP4 to MP3 Tool Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your MP4 file.</strong> Select the video file from your device using the dropzone or file picker.</li>
        <li><strong>FFmpeg WASM initializes.</strong> The tool loads FFmpeg compiled to WebAssembly — a full, production-grade multimedia processing library running entirely within your browser.</li>
        <li><strong>Audio extraction begins.</strong> FFmpeg reads the MP4 file in browser memory, identifies the audio stream, and extracts it. The process uses your device's CPU through the WebAssembly runtime.</li>
        <li><strong>MP3 encoding.</strong> The extracted audio is encoded to MP3 at high bitrate (typically 192 kbps or higher, matching the source quality), producing a clean, standard-compliant audio file.</li>
        <li><strong>Download the MP3.</strong> The completed audio file downloads directly to your device. The original video file remains unchanged on your disk.</li>
      </ol>
      <p className="mt-4">
        The use of FFmpeg WebAssembly is significant: FFmpeg is the industry-standard multimedia processing tool used by professionals worldwide. By running it in the browser, Edita brings professional-grade audio extraction to anyone with a browser — without requiring FFmpeg to be installed locally.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based Video to Audio Converter</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Installation Required</h3>
      <p>
        Installing FFmpeg natively requires command-line familiarity. Desktop tools with audio extraction require downloading, installing, and often paying for software. Edita's tool requires only opening a browser tab.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Upload Time for Large Video Files</h3>
      <p>
        MP4 files are large — a one-hour meeting recording can easily be 500 MB–2 GB. Uploading that to a server for audio extraction could take 10–30 minutes on a typical connection. Edita processes the file locally, so extraction begins immediately. The only time spent is the extraction itself, which takes a fraction of the video's duration.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Works on All Platforms</h3>
      <p>
        FFmpeg WASM runs in Chrome, Firefox, and Edge on all desktop platforms. This means Mac and Linux users — who traditionally had fewer MP4-to-audio tool options than Windows users — have full access to the same professional extraction capability.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Your Files Never Leave Your Device</h3>
      <p>
        The extraction is verified to use FFmpeg WebAssembly running client-side. Your video file — with all its visual content — is loaded into browser memory and processed there. No frame, no audio sample, and no metadata is transmitted externally. This is the correct choice for business meeting recordings, personal video content, and anything containing visual information you haven't consented to share with a cloud service.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools for Multimedia Workflows</h2>
      <p>
        After extracting your audio as MP3, you may want to share the accompanying video screenshots as images. The <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> can help optimize any screenshots captured from the video before sharing.
      </p>
      <p className="mt-4">
        If your audio extraction project is tied to a larger document workflow — extracting audio from a recorded presentation, for example — the <Link href="/tools/pdf-to-jpg" className="text-emerald-600 hover:underline font-semibold">PDF to JPG tool</Link> can extract the visual slides as images to accompany the audio file for a complete, multi-format deliverable.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Podcasters Converting Interview Recordings</h3>
      <p>
        A podcaster who records interviews via Zoom or Riverside receives MP4 files. Extracting the audio with Edita produces a clean MP3 file ready for editing in Audacity or Adobe Audition — with no third-party server receiving the raw interview before the editing stage, which matters when the interview content is under embargo or non-disclosure.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Educators Creating Audio Learning Materials</h3>
      <p>
        A professor who recorded a 90-minute lecture video can extract the audio as MP3 and publish it as an audio lecture on the course LMS. Students who learn better by listening can play it during a commute. The audio file is a fraction of the video's size, making it accessible on slow mobile connections.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Musicians Capturing Performance Audio</h3>
      <p>
        A musician who video-recorded a rehearsal or live performance on their phone gets an MP4. Extracting the audio gives them a usable file to review timing, share with bandmates, or upload to a streaming demo platform — without needing recording studio software or a dedicated audio interface.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Remote Workers Archiving Meeting Audio</h3>
      <p>
        A remote team lead who records project briefing meetings can extract the audio track to create a lighter, more accessible archive. Team members can listen back at 1.5x speed without watching the video, making review significantly faster. The MP3 is also smaller to store and easier to share via email for those who missed the call.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Content Creators Producing Audio Versions of Video Content</h3>
      <p>
        A YouTube creator who publishes video essays can simultaneously publish an audio-podcast version of the same content. Extracting the MP3 from the final rendered MP4 takes moments with Edita and opens a second distribution channel (Spotify, Apple Podcasts) for the same content — reaching audiences who prefer audio to video.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips for Better Audio Extraction</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Stay on the browser tab during extraction.</strong> FFmpeg WASM runs in the browser's main thread. Switching away from the tab during processing can cause the browser to throttle the process on some browsers. Keep the Edita tab visible and active until the download begins.</li>
        <li><strong>Extraction quality matches source quality.</strong> FFmpeg extracts the audio at the bitrate present in the source MP4. If the original recording was captured at low audio quality (e.g., built-in laptop microphone at 64 kbps), the extracted MP3 will reflect that. The tool doesn't add quality that wasn't in the original.</li>
        <li><strong>Large files require sufficient RAM.</strong> Processing a 1 GB MP4 video requires loading that file into browser memory. Devices with 4 GB or less RAM may struggle with very large files. If extraction fails, try converting a shorter segment first.</li>
        <li><strong>Name the extracted file before sharing.</strong> The tool downloads the MP3 with a default filename. Rename it to something descriptive immediately after download — especially for library management with multiple extracted files from different videos.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What audio bitrate does the extracted MP3 use?</summary>
        <p className="mt-3">
          The tool extracts audio at high quality, typically at 192 kbps, depending on the source's audio stream. The output matches the quality available in the original MP4 file. If the source video has high-quality audio, the extracted MP3 will as well.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is my video content safe when extracting audio?</summary>
        <p className="mt-3">
          Yes. The tool uses FFmpeg WebAssembly running entirely in your browser. Your video file — including all visual frames — is loaded into local browser memory and processed there. No video content is transmitted to any external server.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I extract audio from very long videos?</summary>
        <p className="mt-3">
          Yes, but very long or high-resolution MP4 files (1 hour at 1080p, for example) require significant RAM and processing time because they must be loaded entirely into browser memory. On modern devices with 8 GB+ RAM, hour-long videos typically extract without issue. Older devices with limited memory may encounter slowdowns.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this tool work on mobile phones?</summary>
        <p className="mt-3">
          The tool works in Chrome on Android. On iOS, Safari may have more limited WebAssembly support for very large files. For mobile use, shorter MP4 files under 500 MB generally process without issue. Very large files may be better processed on desktop.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do I need to pay or create an account?</summary>
        <p className="mt-3">
          No. The MP4 to MP3 converter is completely free. No account creation, no subscription, no download limits.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What happens to my video when I close the browser?</summary>
        <p className="mt-3">
          The moment you close or refresh the tab, all data loaded into browser memory — including your MP4 file — is cleared. Edita retains nothing after your session ends.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     QR CODE GENERATOR
  ───────────────────────────────────────────── */
  "qr-code-generator": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is a QR Code?</h2>
      <p>
        A QR code (Quick Response code) is a two-dimensional barcode that stores data as a matrix of black and white squares. Originally developed in 1994 by Denso Wave for tracking automotive parts, QR codes are now used everywhere: restaurant menus, payment systems, event tickets, product packaging, marketing materials, and digital identification.
      </p>
      <p>
        Unlike a standard barcode, which encodes data in one dimension (as a series of vertical lines), a QR code encodes data in two dimensions — horizontally and vertically. This allows a QR code to store significantly more data in a small physical or digital space. A single QR code can encode up to 4,296 alphanumeric characters, 7,089 numeric-only characters, or the equivalent of a long URL, a full address, or a contact card.
      </p>
      <p>
        Any smartphone camera can now read a QR code without a dedicated app. This frictionless scan-to-action capability made QR codes ubiquitous: they appear on outdoor posters, storefront windows, business cards, packaging, and anywhere a physical object needs to bridge to a digital destination.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why QR Code Generation Matters</h2>
      <p>
        A printed URL is awkward. People squint at small text, mistype characters, and give up. A QR code converts any URL, Wi-Fi password, address, phone number, or block of text into a single scannable image that takes milliseconds to use. The same information — presented as a QR code versus a typed URL — has dramatically higher engagement.
      </p>
      <p>
        Businesses add QR codes to receipts that link to loyalty programs. Restaurants replace physical menus with QR-linked digital menus. Event organizers issue QR-based tickets that validate at the door with a scan. Teachers link to supplementary resources by printing a QR code on a handout. Trainers create in-person exercises that reference online videos.
      </p>
      <p>
        The problem with many QR code generators is that they create <em>dynamic</em> QR codes — codes that route through the generator's server to redirect users to the destination. This creates a dependency: when the service shuts down or requires a paid subscription to remain active, the codes stop working. Static QR codes encode the destination directly into the pattern, requiring no intermediary — and they work forever.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the QR Code Generator Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Enter your content.</strong> Type or paste the URL, text, phone number, or other data you want to encode. The QR code preview updates in real time as you type.</li>
        <li><strong>Customize the design.</strong> Adjust the foreground color, background color, and choose between square and rounded module styles. For PNG downloads, you can set a transparent background. The tool shows you exactly how the finished QR code will look.</li>
        <li><strong>Choose your error correction level.</strong> Higher error correction allows the QR code to remain scannable even if part of the pattern is obscured — useful for codes embedded in logos or printed on textured surfaces.</li>
        <li><strong>Download your QR code.</strong> Export as a high-resolution PNG or JPG file. The generated image is ready for print at any size or for use in digital materials.</li>
      </ol>
      <p className="mt-4">
        The entire generation process runs in your browser using a QR code library that executes locally. The content you encode — whether it's a URL, a Wi-Fi password, or a private piece of text — is processed in browser memory and encoded into the QR image pattern. No content is sent to any server.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based QR Generator</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Account, No Subscription</h3>
      <p>
        Most commercial QR generators require account creation to download codes, and many actively discourage static code generation because dynamic codes create subscription lock-in. Edita generates permanent static codes with no account and no fees.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Codes That Never Expire</h3>
      <p>
        Because the data is encoded directly into the QR pattern — with no routing through a redirect server — the codes work indefinitely. Print them on business cards, stamp them on packaging, apply them to storefronts — they will still scan in ten years without any ongoing subscription or service dependency.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Works on Any Device</h3>
      <p>
        QR codes can be generated on a desktop, laptop, tablet, or phone. If you need a quick QR code for a trade show banner or a classroom handout, you can generate and download it from your phone without switching to a desktop.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Your Data Never Leaves Your Browser</h3>
      <p>
        The content you encode — URLs, Wi-Fi credentials, contact details, internal tool URLs, or private notes — is processed entirely in the browser. It is never transmitted to any server. This is important when encoding internal application URLs, business system passwords, or any link you wouldn't want a third party to see.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools for QR Code Projects</h2>
      <p>
        After downloading your QR code as a PNG, you may want to optimize it for web use. The <Link href="/tools/png-to-webp" className="text-emerald-600 hover:underline font-semibold">PNG to WebP converter</Link> reduces the image file size by 25–35% while maintaining perfect QR code scannability — useful for embedding QR codes in web pages or apps.
      </p>
      <p className="mt-4">
        For print materials, the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> can help optimize QR code images included in larger print-ready PDFs. If you need to include your QR code alongside other documents, the <Link href="/tools/jpg-to-pdf" className="text-emerald-600 hover:underline font-semibold">JPG to PDF tool</Link> can embed it into a multi-page PDF document.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Small Business Owners Creating Marketing Materials</h3>
      <p>
        A café owner who prints a table tent menu can embed a QR code linking to the full digital menu. Customers scan without waiting for paper menus. The QR code is generated privately, encodes a URL directly, needs no monthly subscription, and prints on the card at the same size as the business name — no graphic design experience required.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Event Organizers Issuing Digital Tickets</h3>
      <p>
        A community event coordinator who sells tickets through a simple registration form can give each attendee a unique QR code encoding their registration ID. Volunteers scan codes at the door to verify entry. Static QR codes work offline — no internet required to scan them — making them reliable even in venues with poor connectivity.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Teachers Linking Physical Materials to Digital Resources</h3>
      <p>
        An educator who prints a worksheet can add a QR code in the corner linking to an instructional video, an answer key, or supplementary reading. Students scan with their phone and access the resource instantly without typing a URL. A new QR code takes 30 seconds to generate and embed in the handout's design.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Freelancers and Professionals Adding to Business Cards</h3>
      <p>
        A freelance developer or consultant can add a QR code to their business cards that links directly to their portfolio, LinkedIn profile, or contact page. Someone who receives the card at a networking event scans and visits the page immediately — no typing, no loss of the contact information later. The code is permanent and needs no ongoing service.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">IT Administrators Sharing Wi-Fi Access</h3>
      <p>
        An IT administrator setting up a conference room or guest network can generate a QR code that encodes the Wi-Fi SSID and password. Guests scan the code and connect automatically without being told the password verbally. Since the credentials are encoded locally and never pass through a server, the Wi-Fi password remains private.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Developers Linking to Application Features</h3>
      <p>
        A developer building an internal tool can generate QR codes linking to specific application pages, dashboards, or onboarding flows. Printing these QR codes in office spaces or including them in training documents gives employees instant access to specific tool pages without navigating through menus.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips for Better QR Codes</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Keep encoded content short.</strong> The shorter the URL or text encoded, the simpler the QR code pattern. Simpler patterns scan faster and more reliably in low-light or low-resolution cameras. Use a URL shortener for long destination URLs before encoding.</li>
        <li><strong>Maintain high contrast.</strong> QR codes must have strong contrast between foreground (dark) and background (light) to scan reliably. Avoid light grey on white or dark brown on dark grey. Black on white is always the safest combination.</li>
        <li><strong>Print large enough to scan comfortably.</strong> A QR code printed smaller than 2 cm × 2 cm may not scan reliably on older smartphones or in poor lighting. For business cards, 2.5 cm × 2.5 cm is a reliable minimum.</li>
        <li><strong>Test before printing at scale.</strong> Generate your code, download it, and test it with multiple devices (Android, iPhone, older hardware) before committing to a large print run. Verify that it scans in the intended ambient lighting conditions.</li>
        <li><strong>Use PNG for digital, JPG for embedded print.</strong> For web pages and apps, PNG with a transparent background allows the QR code to sit cleanly on any background color. For print files where the background is always white, JPG is smaller and equally appropriate.</li>
        <li><strong>Set error correction appropriately.</strong> If the QR code will be placed over a logo or in a setting where it might be partially obscured, use the highest error correction level (H). For clean, unobscured placements, medium (M) error correction is sufficient.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do QR codes generated here ever expire?</summary>
        <p className="mt-3">
          Never. Edita generates <em>static</em> QR codes, meaning the destination URL or text is encoded directly into the QR pattern. There is no redirect server involved. The code works for as long as the destination URL or content it encodes remains valid — with no subscription or renewal required.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is my QR code data private?</summary>
        <p className="mt-3">
          Yes. The URL or text you encode is processed entirely in your browser and never transmitted to any server. Edita does not see, store, or log any content you encode into QR codes.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What can I encode in a QR code?</summary>
        <p className="mt-3">
          Any text content: URLs (the most common use case), plain text, phone numbers, email addresses, SMS messages, Wi-Fi credentials, vCard contact information, geographic coordinates, and event calendar entries (when formatted correctly). The tool encodes whatever text you enter into the input field.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I customize the colors of my QR code?</summary>
        <p className="mt-3">
          Yes. You can change the foreground (module) color and background color to match your brand. You can also enable a transparent background when downloading as PNG. Always ensure there is sufficient contrast between foreground and background for reliable scanning.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this tool work on mobile?</summary>
        <p className="mt-3">
          Yes. The QR code generator works in Chrome on Android and Safari on iOS. You can generate, preview, and download QR codes directly from your phone's browser without any app installation.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is the QR code generator free?</summary>
        <p className="mt-3">
          Completely free. No account required, no watermarks on the output image, no limit on how many QR codes you can generate.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     IMAGE COLOR PALETTE GENERATOR
  ───────────────────────────────────────────── */
  "image-color-palette-generator": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is a Color Palette and Why Extract It from an Image?</h2>
      <p>
        A color palette is a curated set of colors used consistently in a design project. In branding, a palette defines a brand's identity — the exact hues that appear on a website, in packaging, in marketing materials, and in product design. In UI/UX design, a palette ensures visual consistency across a product's interface. In art, a palette reflects the color choices that define a style or mood.
      </p>
      <p>
        Extracting a color palette from an image means using an algorithm to analyze the image's pixels and identify the most dominant and visually representative colors. Instead of manually picking colors with an eyedropper, extraction generates the core palette automatically — including colors that might not be immediately obvious but that appear frequently enough to define the image's character.
      </p>
      <p>
        Designers encounter this need constantly: matching a UI to a product photograph, building a brand system around a company's established photography style, adapting a poster's color scheme for a digital campaign, or sampling colors from a physical material for use in a digital design environment. Color extraction makes all of these tasks immediate and accurate.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Color Matching by Eye Doesn't Work Well Enough</h2>
      <p>
        Human color perception is relative, not absolute. The perceived color of an object changes depending on the surrounding colors, the lighting conditions in which you view it, and your display's color profile. Two designers looking at the same image on different monitors will identify different dominant colors — both confidently, both incorrectly.
      </p>
      <p>
        Design systems require exact, reproducible color values: not "that blue-green from the hero photo" but "HSL(185, 65%, 45%)" or "#2A8A8A". Algorithmic color extraction produces these exact values directly from the image data, bypassing the unreliability of manual sampling.
      </p>
      <p>
        Product designers matching UI to photography, video editors building color grades, marketers creating campaign assets, and web developers building themed components all need the same thing: the actual color values from a reference image, not an approximation.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the Color Palette Generator Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your image.</strong> Select any photo, graphic, screenshot, or illustration from your device. JPG, PNG, and WebP images are supported.</li>
        <li><strong>Algorithmic color analysis.</strong> The tool uses a quantization algorithm — running entirely in the browser — to analyze the pixel data of the uploaded image. It clusters similar colors and identifies the most dominant distinct colors across the image.</li>
        <li><strong>Palette display.</strong> The tool presents the extracted dominant colors as a palette, each displayed as a color swatch. Exact color values (HEX and RGB) are shown for each swatch.</li>
        <li><strong>Copy color codes.</strong> Click any color swatch to copy its HEX or RGB value directly to your clipboard — ready to paste into Figma, Tailwind, CSS, or any design tool.</li>
      </ol>
      <p className="mt-4">
        The quantization algorithm is particularly good at identifying the colors that define an image's visual character — not just the most frequent pixels (which could be background sky or white space) but the colors that carry the most visual weight. This makes the extracted palette immediately useful for design decisions.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Use a Browser-Based Color Extractor</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">No Design Software Required</h3>
      <p>
        Extracting a color palette accurately from an image in Photoshop, Illustrator, or Figma requires knowing where to look and how to use color sampling tools. Edita presents the extracted palette automatically — no tool knowledge required.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Instant Results Without Upload</h3>
      <p>
        The browser's Canvas API reads image pixel data locally, so the extraction produces results as soon as the image loads — no waiting for server analysis. For a 5 MB photograph, the palette appears within one or two seconds.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Works on Any Device</h3>
      <p>
        Color analysis runs identically on Chrome, Firefox, Safari, and Edge across desktop and mobile. On-site designers working with physical product samples can photograph the product on their phone and extract colors immediately in the mobile browser.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Your Images Never Leave Your Device</h3>
      <p>
        The color analysis uses the browser's local Canvas API. Your image is loaded into browser memory and processed there — no image pixel data is transmitted anywhere. Proprietary product images, unpublished photography, and confidential design assets can be analyzed safely.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools for Design Workflows</h2>
      <p>
        After extracting colors from a reference image, the image itself may need optimization before use. The <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> reduces the visual reference's file size for inclusion in design presentations or client documents.
      </p>
      <p className="mt-4">
        For web design projects, converting reference images to modern formats improves site performance. The <Link href="/tools/jpg-to-webp" className="text-emerald-600 hover:underline font-semibold">JPG to WebP</Link> and <Link href="/tools/png-to-webp" className="text-emerald-600 hover:underline font-semibold">PNG to WebP</Link> converters prepare photography and graphic assets for optimal web delivery. And for SVG-based design assets that need web export, <Link href="/tools/svg-to-png" className="text-emerald-600 hover:underline font-semibold">SVG to PNG</Link> rasterizes vector artwork for contexts requiring raster images.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Practical Use Cases</h2>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">UI Designers Matching Interfaces to Photography</h3>
      <p>
        A product designer building a landing page around a hero photograph needs to ensure the page's color system — button colors, heading colors, background tints — harmonizes with the photography. Extracting the dominant colors from the hero image takes seconds and gives an objective starting point for the design system rather than guesswork.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Branding Professionals Building Style Guides</h3>
      <p>
        A brand strategist developing a visual identity system for a client whose brand already has strong photographic assets can extract the palette from those images to identify the implicit color language of the brand — colors that already feel right for the brand even before the formal palette is defined.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Social Media Managers Achieving Feed Consistency</h3>
      <p>
        A social media manager aiming for a consistent aesthetic across Instagram posts can extract the palette from existing high-performing posts and use those color codes to guide photo editing and graphic creation for new content — maintaining the visual coherence that drives follower engagement.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Developers Theming Applications</h3>
      <p>
        A developer building a themed dashboard or multi-brand application can extract color palettes from a client's brand imagery and immediately use the HEX values in CSS variables or a Tailwind config file. This ensures the theme is derived from actual brand materials rather than approximated.
      </p>

      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Artists and Illustrators Analyzing Inspiration References</h3>
      <p>
        An illustrator studying a painting's color relationships can extract the palette to understand the precise hues and their proportions. Working from exact extracted values in a digital illustration tool — rather than visually approximating color from a reference — produces more accurate re-interpretations and deeper color understanding.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Tips for Better Color Extraction</h2>
      <ul className="list-disc pl-6 space-y-3 mt-4">
        <li><strong>Use the highest-quality version of your reference image.</strong> Low-resolution or heavily compressed JPG images may have colors shifted by compression artifacts. Extracting from a high-resolution, lightly compressed source produces more accurate palette values.</li>
        <li><strong>Crop out dominant neutral backgrounds.</strong> If your image has a large area of plain white background or sky, the extracted palette will over-index on that neutral. Cropping the image to focus on the content area before extracting produces a more useful, content-focused palette.</li>
        <li><strong>Extract from multiple images for a brand palette.</strong> A brand's visual identity comes from multiple photographs. Extract palettes from several representative images and look for colors that consistently appear across all of them — those recurring colors are the brand's true palette.</li>
        <li><strong>Convert HEX values to HSL for design systems.</strong> After copying HEX values, convert them to HSL (Hue, Saturation, Lightness) for use in design systems. HSL makes it easy to create tints, shades, and accessible contrast variants of the extracted colors.</li>
        <li><strong>Verify contrast ratios for accessibility.</strong> Extracted colors often look great together but may not meet WCAG contrast requirements for text on background combinations. Check extracted color pairs using a contrast ratio calculator before committing them to UI applications.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">How does the color extraction algorithm work?</summary>
        <p className="mt-3">
          The tool uses a pixel-sampling and color quantization algorithm that runs in your browser. It analyzes the image's pixel data, clusters visually similar colors, and identifies the most visually dominant distinct color groups. The output prioritizes colors that appear most frequently and carry the most visual weight across the image.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is my image sent to a server for analysis?</summary>
        <p className="mt-3">
          No. Color extraction uses the browser's local Canvas API to read pixel data from the image in memory. No image data is transmitted to any server. Proprietary photos, unpublished designs, and client brand assets can all be analyzed privately.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What color format do I get — HEX, RGB, or HSL?</summary>
        <p className="mt-3">
          The tool provides HEX and RGB values for each extracted color. You can copy either format with a click and paste it directly into Figma, Sketch, Adobe tools, CSS, or any design system. HEX is the most widely compatible format across design tools and CSS.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I extract colors from a photo on my phone?</summary>
        <p className="mt-3">
          Yes. The tool works in mobile browsers on Android (Chrome) and iOS (Safari). You can photograph a product, a piece of fabric, a painting, or any physical reference object and immediately extract its color palette within the mobile browser.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I download the extracted palette as a file?</summary>
        <p className="mt-3">
          Currently, the tool allows you to copy individual color codes by clicking on each swatch. We're developing a batch export feature that will allow downloading the full palette as a CSS, JSON, or ASE file.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this tool free to use?</summary>
        <p className="mt-3">
          Yes. The Image Color Palette Generator is completely free. No sign-up, no limits on image size or number of extractions, and no premium features behind a paywall.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     PNG TO JPG
  ───────────────────────────────────────────── */
  "png-to-jpg": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Understanding PNG and JPG — Key Differences</h2>
      <p>
        PNG (Portable Network Graphics) is a lossless image format designed for graphics that need to preserve every pixel exactly — screenshots, logos, illustrations, and images with text or sharp edges. PNG supports transparency (alpha channel), making it the format of choice for images that need to sit on different background colors.
      </p>
      <p>
        JPG (JPEG) is a lossy format optimized for photographs. It achieves significantly smaller file sizes than PNG by selectively discarding fine detail that most viewers don't consciously perceive. JPG does not support transparency. For photographic images, a JPG is often 5–10× smaller than the equivalent PNG with no visible quality difference.
      </p>
      <p>
        Converting PNG to JPG makes sense when you have a PNG photograph, scanned page, or realistic illustration that doesn't require transparency — and you need a smaller file for sharing, emailing, uploading to a website, or storing efficiently on a device.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Convert PNG to JPG?</h2>
      <p>
        PNG files of photographic content are unnecessarily large. A 5 MB PNG of a landscape photograph might be 500 KB as a JPG — a 90% reduction with no visible quality loss at normal viewing sizes. When you need to email images, upload product photos to an e-commerce store, or share photographs on social media, PNG creates friction that JPG eliminates.
      </p>
      <p>
        Many platforms that accept image uploads have file size limits. Stock photo sites, social media platforms, profile picture uploaders, and email servers all enforce limits where a PNG frequently exceeds what a JPG would not. Converting avoids the rejection without having to reduce image resolution.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the PNG to JPG Converter Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Upload your PNG files.</strong> Select one or multiple PNG images through the dropzone.</li>
        <li><strong>Local conversion.</strong> The tool renders each PNG onto a browser canvas and encodes the result as JPEG at high quality, applying the canvas's native encoding engine.</li>
        <li><strong>Transparency handling.</strong> Since JPG doesn't support transparency, any transparent areas in the PNG are filled with a solid white background before encoding.</li>
        <li><strong>Download your JPGs.</strong> Converted images are available immediately for individual download.</li>
      </ol>
      <p className="mt-4">
        For complementary size reduction, combine this converter with the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> to reduce the JPG output further. Or skip JPG entirely and convert to <Link href="/tools/png-to-webp" className="text-emerald-600 hover:underline font-semibold">WebP</Link> or <Link href="/tools/png-to-avif" className="text-emerald-600 hover:underline font-semibold">AVIF</Link> for modern web use with even better compression ratios.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Privacy and Platform Details</h2>
      <p>
        All conversion runs in your browser using the native Canvas API. Your PNG files are never uploaded to any server. This tool functions on any modern browser across Windows, macOS, Android, and iOS. No account or payment is required.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What happens to transparent areas when converting PNG to JPG?</summary>
        <p className="mt-3">
          JPG does not support transparency. Any transparent regions in your PNG will be filled with a solid white background in the output JPG. If you need transparency preserved, use the <Link href="/tools/png-to-webp" className="text-emerald-600 hover:underline font-semibold">PNG to WebP</Link> converter instead, as WebP supports alpha transparency.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will picture quality decrease after conversion?</summary>
        <p className="mt-3">
          JPN is a lossy format, so some very fine detail is discarded during encoding. For photographic content at high quality settings, the difference is not visible to the naked eye. For images with sharp edges, text, or solid colors (logos, icons, diagrams), quality loss is more visible — PNG or WebP is a better format for those use cases.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my images uploaded to a server?</summary>
        <p className="mt-3">
          No. Conversion uses the browser's local Canvas API. Your images are processed in browser memory and never transmitted externally.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I convert multiple PNGs at once?</summary>
        <p className="mt-3">
          Yes. Upload a batch of PNG files and they are all converted in one session.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. The converter runs in Chrome on Android and Safari on iOS. You can convert images from your phone's storage directly in the mobile browser.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this tool free?</summary>
        <p className="mt-3">
          Completely free. No account required and no limits on how many images you convert.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     JPG TO PNG
  ───────────────────────────────────────────── */
  "jpg-to-png": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">When to Convert JPG to PNG</h2>
      <p>
        JPG is the default format for photographs. PNG is the default for graphics requiring lossless quality and transparency support. Converting JPG to PNG makes sense when you need an image to serve as a source for further editing — where re-saving as JPG multiple times would progressively degrade quality through generation loss. PNG's lossless encoding stops that degradation in its tracks.
      </p>
      <p>
        It also matters for images you plan to overlay on different backgrounds, embed in presentations with transparent areas, or use as layers in graphic design software. Even though the conversion doesn't restore quality already lost in the original JPG, it preserves whatever quality is there without further loss through subsequent edits and re-saves.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How It Works and What to Expect</h2>
      <p>
        The converter renders your JPG onto an HTML canvas and encodes the result as a lossless PNG. The output will be larger in file size than the JPG source — that's expected. PNG must store every pixel value exactly, making it inherently larger for photographic content. The trade-off is: no further quality loss from re-saving, and full PNG feature support (transparency, richer metadata, lossless editing capability).
      </p>
      <p>
        Converting JPG to PNG does <em>not</em> restore quality lost when the original JPG was created. If the JPG was heavily compressed, the output PNG will faithfully represent the compressed image — cleanly preserved from that point forward, but not improved.
      </p>
      <p>
        All conversion runs locally in your browser. Files are never transmitted externally. The tool works on desktop and mobile browsers, is completely free, and requires no account. If you later need to convert back to JPG or to a modern format, use the <Link href="/tools/png-to-jpg" className="text-emerald-600 hover:underline font-semibold">PNG to JPG</Link> or <Link href="/tools/png-to-webp" className="text-emerald-600 hover:underline font-semibold">PNG to WebP</Link> converters.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will converting JPG to PNG improve image quality?</summary>
        <p className="mt-3">
          No. Converting a JPG to PNG preserves the image at its current quality without any further degradation. It does not restore detail lost when the JPG was originally created. Think of it as locking current quality for future edits rather than recovering lost quality.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the PNG be larger than the JPG?</summary>
        <p className="mt-3">
          Yes. PNG uses lossless compression which stores all pixel data precisely. For photographic content, PNGs are typically 3–10× larger than equivalent JPGs. This is normal and expected.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the transparent background become available after conversion?</summary>
        <p className="mt-3">
          No. JPG files don't contain transparency data. Converting to PNG doesn't add transparency — it simply re-encodes the same image in the PNG container. To use PNG's transparency features, you'd need to manually remove the background in a photo editor after conversion.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my images uploaded to a server?</summary>
        <p className="mt-3">
          No. All conversion happens in your browser. Your images are never transmitted externally. Processing happens in your browser — no account required.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. The tool runs in Chrome on Android and Safari on iOS. Select images from your camera roll and download the converted PNGs within the mobile browser.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is there a cost or sign-up required?</summary>
        <p className="mt-3">
          No. The JPG to PNG converter is completely free with no account required and no limits on conversion volume.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     JPG TO WEBP
  ───────────────────────────────────────────── */
  "jpg-to-webp": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is WebP and Why Convert from JPG?</h2>
      <p>
        WebP is a modern image format developed by Google and released in 2010. It uses advanced compression techniques that achieve 25–35% smaller file sizes than JPG at equivalent visual quality. WebP supports both lossy and lossless compression, as well as transparency and animation — making it a versatile replacement for both JPG and PNG in web contexts.
      </p>
      <p>
        All major browsers — Chrome, Firefox, Safari (iOS 14+ and macOS Big Sur+), Edge, and Opera — fully support WebP. If your website or application targets modern browser environments, WebP is the correct choice for photographic images. Smaller files mean faster page loads, better Core Web Vitals scores, and lower bandwidth costs at scale.
      </p>
      <p>
        Converting your existing JPG library to WebP is one of the highest-return image optimizations available for web performance. The same visual content, 30% smaller, loads in 30% less time for image-heavy pages.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the Converter Works and Related Tools</h2>
      <p>
        The converter reads your JPG files into a browser canvas and encodes the result using the browser's native WebP encoder. Processing happens locally — your images are never transmitted externally. The tool works on all devices with a modern browser. No account or payment required.
      </p>
      <p>
        For a complete web image optimization workflow: compress your JPGs first with the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link>, then convert to WebP for delivery. If you need to go even further with compression, <Link href="/tools/jpg-to-avif" className="text-emerald-600 hover:underline font-semibold">AVIF</Link> offers an additional 20% size reduction over WebP. For PNG images, use the <Link href="/tools/png-to-webp" className="text-emerald-600 hover:underline font-semibold">PNG to WebP</Link> converter. And the <Link href="/tools/svg-to-webp" className="text-emerald-600 hover:underline font-semibold">SVG to WebP</Link> tool handles vector-to-raster conversion for web use.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">How much smaller will the WebP be compared to the JPG?</summary>
        <p className="mt-3">
          Typically 25–35% smaller at equivalent visual quality. Results vary with image content — photographs with many colors and gradients compress very well. Detailed images with sharp edges may see smaller improvements.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are WebP images supported everywhere?</summary>
        <p className="mt-3">
          Yes, in all modern browsers. Chrome, Firefox, Edge, and Safari (since iOS 14 and macOS Big Sur) all support WebP. Very old browsers (Internet Explorer) do not, but they represent a negligible fraction of current traffic.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is my image data safe?</summary>
        <p className="mt-3">
          Yes. Conversion happens locally in your browser. Images are never transmitted to any server.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does the tool work on mobile?</summary>
        <p className="mt-3">
          Yes. The converter runs in Chrome on Android and Safari on iOS. Select images from your device's photo library and download the converted WebP files in the same session.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I batch convert multiple JPGs?</summary>
        <p className="mt-3">
          Yes. Upload multiple files at once and the tool converts them all, providing individual download options for each converted WebP.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free to use?</summary>
        <p className="mt-3">
          Yes. Free, no account required, no watermarks, no limits.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     PNG TO WEBP
  ───────────────────────────────────────────── */
  "png-to-webp": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Convert PNG to WebP?</h2>
      <p>
        PNG files are lossless and often large. A single PNG screenshot of a UI, a logo with transparency, or a product image against a transparent background can easily be 1–5 MB. WebP achieves 25–35% smaller file sizes than PNG for the same content — while fully preserving transparency (alpha channel) and maintaining visual quality indistinguishable from the original.
      </p>
      <p>
        For web developers, this is the clearest win available in image optimization. Every PNG on a website that can be replaced with an equivalent WebP reduces page weight and improves loading speed. Google's PageSpeed Insights and Lighthouse both specifically flag "serve images in next-gen formats" as an opportunity when PNG is used where WebP would perform better.
      </p>
      <p>
        Unlike conversion to JPG, converting PNG to WebP preserves transparency exactly. A logo with a transparent background in PNG will have the same transparent background in WebP — with a smaller file. This makes PNG to WebP the superior conversion for web UI assets, icons, illustrations, and logos.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools and Workflow Connection</h2>
      <p>
        For additional size reduction beyond what WebP achieves, <Link href="/tools/png-to-avif" className="text-emerald-600 hover:underline font-semibold">AVIF</Link> provides roughly 50% smaller files than PNG. If you need to process entire image batches before converting, the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> reduces starting sizes. For JPG source images, use the <Link href="/tools/jpg-to-webp" className="text-emerald-600 hover:underline font-semibold">JPG to WebP converter</Link> instead. All processing is local — images never leave your device.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is transparency preserved when converting PNG to WebP?</summary>
        <p className="mt-3">
          Yes. WebP fully supports alpha transparency. Any transparent areas in your PNG will be preserved exactly in the output WebP file.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">How much smaller will the WebP be?</summary>
        <p className="mt-3">
          Typically 25–35% smaller than the PNG at equivalent visual quality. Graphics with large areas of solid color may compress more. Complex photographic PNGs may compress less.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my images uploaded to a server?</summary>
        <p className="mt-3">
          No. Conversion uses the browser's local Canvas API. Your images are processed in browser memory and never transmitted externally.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. Chrome on Android and Safari on iOS both support WebP encoding and the local conversion process. Works identically to the desktop experience.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I convert multiple PNGs at once?</summary>
        <p className="mt-3">
          Yes. Upload a batch of PNG files and convert them all in one session with individual download options for each.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free?</summary>
        <p className="mt-3">
          Completely free. No account, no limits, no watermarks.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     WEBP TO PNG
  ───────────────────────────────────────────── */
  "webp-to-png": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">When You Need to Convert WebP Back to PNG</h2>
      <p>
        WebP is excellent for web delivery, but you may need to convert WebP images to PNG when working with software that doesn't yet fully support WebP — including some versions of Photoshop, older design tools, certain content management systems, and Microsoft Office applications. PNG is universally supported across every image editor, operating system, and workflow tool in existence.
      </p>
      <p>
        Archiving is another driver: PNG's lossless encoding makes it the preferred format for source file storage, while WebP is used for optimized web delivery. Converting web assets back to PNG preserves them in a format suitable for indefinite archival and future re-use in any context.
      </p>
      <p>
        The conversion from WebP to PNG is lossless — WebP lossless images decode to PNG without any quality change. Lossy WebP images decode to PNG preserving whatever visual quality was encoded in the WebP, without introducing further compression artifacts.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How It Works and Workflow Connections</h2>
      <p>
        The converter renders each WebP onto an HTML canvas and exports as PNG. All transparency is preserved. Processing is entirely local in your browser — no external transmission. Works on desktop and mobile browsers with no account required.
      </p>
      <p>
        For the reverse conversion (PNG to WebP for web optimization), use the <Link href="/tools/png-to-webp" className="text-emerald-600 hover:underline font-semibold">PNG to WebP converter</Link>. If you need a JPG rather than PNG from your WebP files, use the <Link href="/tools/webp-to-jpg" className="text-emerald-600 hover:underline font-semibold">WebP to JPG tool</Link>. For further reducing the PNG output's file size, pass it through the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link>.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is transparency preserved when converting WebP to PNG?</summary>
        <p className="mt-3">
          Yes. PNG supports full alpha transparency, and the conversion preserves any transparent regions present in the original WebP file exactly.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the PNG file be larger than the WebP?</summary>
        <p className="mt-3">
          Yes, typically. PNG uses lossless encoding which is inherently less space-efficient than WebP's compression. This is normal when converting from a web delivery format to a lossless archival format.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my images sent to a server?</summary>
        <p className="mt-3">
          No. All processing happens locally in your browser using the Canvas API. Images are never transmitted externally.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile browsers?</summary>
        <p className="mt-3">
          Yes. Chrome on Android and Safari on iOS both support the conversion. The experience is identical to desktop.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I convert multiple WebP files at once?</summary>
        <p className="mt-3">
          Yes. Batch convert multiple WebP images in one session with individual download options provided for each output PNG.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this tool free?</summary>
        <p className="mt-3">
          Yes. Completely free, no account needed, no usage limits.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     WEBP TO JPG
  ───────────────────────────────────────────── */
  "webp-to-jpg": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Convert WebP to JPG?</h2>
      <p>
        WebP is the ideal format for modern web delivery — but it's not universally supported in non-browser contexts. Social media platforms that don't accept WebP uploads, physical print services that require JPG, email clients that don't inline WebP images, and many image editing applications all work better or exclusively with JPG.
      </p>
      <p>
        If you downloaded a WebP image from the web (a common occurrence since many sites now serve WebP by default) and need to use it in a context that expects JPG, converting it is the fastest path to compatibility. The conversion produces a high-quality JPG that opens anywhere and works in every application, operating system, and print workflow.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How It Works and Privacy</h2>
      <p>
        The converter renders each WebP image on an HTML canvas and encodes it as JPEG at high quality. Transparent areas in the WebP are filled with a white background, since JPG doesn't support transparency. All processing is local — images are never transmitted to any server. Processing happens in your browser — no account required.
      </p>
      <p>
        Related converters: <Link href="/tools/webp-to-png" className="text-emerald-600 hover:underline font-semibold">WebP to PNG</Link> preserves transparency. <Link href="/tools/jpg-to-webp" className="text-emerald-600 hover:underline font-semibold">JPG to WebP</Link> reverses this conversion for web optimization. <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> optimizes the resulting JPG further.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What happens to transparent areas in the WebP?</summary>
        <p className="mt-3">
          Since JPG doesn't support transparency, any transparent areas in the WebP are filled with solid white in the output JPG. To preserve transparency, convert to <Link href="/tools/webp-to-png" className="text-emerald-600 hover:underline font-semibold">PNG</Link> instead.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will image quality be reduced?</summary>
        <p className="mt-3">
          The output JPG uses high-quality encoding, minimizing visible quality reduction. For photographic WebP images, the difference is typically imperceptible in normal viewing conditions.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my files safe?</summary>
        <p className="mt-3">
          Yes. Processing happens in your browser locally. Files are never uploaded to any server.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. The tool runs in Chrome on Android and Safari on iOS. Select WebP files from your device and download the converted JPGs in the same session.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I convert multiple WebP files at once?</summary>
        <p className="mt-3">
          Yes. Upload a batch of WebP files and convert them all in one session.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free?</summary>
        <p className="mt-3">
          Completely free. No account, no watermarks, no conversion limits.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     PNG TO AVIF
  ───────────────────────────────────────────── */
  "png-to-avif": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is AVIF and Why Is It the Best Web Image Format?</h2>
      <p>
        AVIF (AV1 Image File Format) is a next-generation image format based on the AV1 video codec, developed by the Alliance for Open Media. It represents the current state of the art in image compression. AVIF typically achieves 50% smaller file sizes than PNG and 20% smaller than WebP — at equivalent visual quality — making it the most efficient format available for web image delivery.
      </p>
      <p>
        AVIF was designed to support modern display capabilities: wide color gamut (HDR), 10-bit and 12-bit color depth, transparency, and high-dynamic-range content. Unlike JPG, AVIF loses no noticeable detail even at aggressive compression ratios. Unlike PNG, AVIF delivers this quality at dramatically smaller file sizes.
      </p>
      <p>
        Browser support has caught up: Chrome, Firefox, and Safari all support AVIF on modern operating systems. For web projects targeting current browsers, AVIF delivers the best possible combination of visual quality and file size — measurably improving Core Web Vitals, Lighthouse scores, and bandwidth costs.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Converting PNG to AVIF and Related Tools</h2>
      <p>
        The converter renders PNG images on an HTML canvas and encodes them as AVIF using the browser's native encoding support. Transparency is preserved. Processing is entirely local — images never leave your browser. No account or payment required.
      </p>
      <p>
        For images that need to remain in PNG format, the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> reduces PNG file sizes without format conversion. To convert between AVIF and PNG in the reverse direction, the <Link href="/tools/avif-to-png" className="text-emerald-600 hover:underline font-semibold">AVIF to PNG converter</Link> is available. For JPG to AVIF conversion, use the <Link href="/tools/jpg-to-avif" className="text-emerald-600 hover:underline font-semibold">JPG to AVIF tool</Link>. For legacy compatibility where AVIF may not be supported, <Link href="/tools/png-to-webp" className="text-emerald-600 hover:underline font-semibold">PNG to WebP</Link> provides the next-best compression ratio.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do all browsers support AVIF?</summary>
        <p className="mt-3">
          All major modern browsers support AVIF: Chrome 85+, Firefox 93+, Safari 16+, and Edge 121+. Internet Explorer does not. For production web use, providing WebP as a fallback for older browser versions is a safe strategy.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is transparency preserved in AVIF?</summary>
        <p className="mt-3">
          Yes. AVIF supports full alpha transparency. Transparent areas in your PNG will be preserved in the output AVIF file.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">How much smaller will the AVIF be than the PNG?</summary>
        <p className="mt-3">
          Typically 40–60% smaller for photographic content, sometimes more. For PNG graphics with transparency and sharp edges, savings vary but AVIF consistently outperforms both JPG and WebP in size-to-quality ratio.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my images uploaded to a server?</summary>
        <p className="mt-3">
          No. Conversion uses the browser's local encoding capabilities. Your images are processed in browser memory and never transmitted externally.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this tool work on mobile?</summary>
        <p className="mt-3">
          Yes. Chrome on Android and Safari 16+ on iOS both support AVIF encoding. The tool runs in the mobile browser with identical functionality to the desktop experience.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free?</summary>
        <p className="mt-3">
          Completely free. No account, no limits, no watermarks.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     JPG TO AVIF
  ───────────────────────────────────────────── */
  "jpg-to-avif": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Convert JPG to AVIF?</h2>
      <p>
        JPG has been the dominant format for web photographs for over 25 years. AVIF offers the same photographic quality at 30–50% smaller file sizes — a significant improvement that directly translates to faster page loads, lower server costs, and better user experience on mobile connections.
      </p>
      <p>
        For e-commerce sites serving thousands of product images, news sites with editorial photography libraries, and any web application with image-heavy content, converting the JPG library to AVIF is a high-value optimization. The visual quality is indistinguishable from the original at equivalent or smaller sizes, and all modern browsers — Chrome, Firefox, Safari 16+, Edge — render AVIF natively.
      </p>
      <p>
        AVIF also handles gradients and smooth color transitions better than JPG, eliminating the banding artifacts that appear in JPG-encoded gradients. This makes AVIF better than JPG for skies, skin tones, and product photography with natural lighting.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools</h2>
      <p>
        Converting your JPG library to AVIF is one step in a complete image optimization workflow. Before converting, use the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> to reduce source sizes. For PNG images, use <Link href="/tools/png-to-avif" className="text-emerald-600 hover:underline font-semibold">PNG to AVIF</Link>. If you need to revert AVIF images to more universally compatible formats, use <Link href="/tools/avif-to-jpg" className="text-emerald-600 hover:underline font-semibold">AVIF to JPG</Link> or <Link href="/tools/avif-to-png" className="text-emerald-600 hover:underline font-semibold">AVIF to PNG</Link>.
      </p>
      <p className="mt-4">
        All processing is local in your browser. Files are never transmitted to any server. The tool is free and requires no account.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">How much smaller will AVIF be compared to the original JPG?</summary>
        <p className="mt-3">
          Typically 30–50% smaller at equivalent visual quality. Results depend on image content — photographs with complex color and detail benefit most. Simple flat images see smaller improvements.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will AVIF look better than the original JPG?</summary>
        <p className="mt-3">
          At the same file size, yes — AVIF's codec handles gradients and fine color transitions with fewer artifacts than JPG. At smaller file sizes than the original JPG, quality is typically equivalent or better.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my photos safe during conversion?</summary>
        <p className="mt-3">
          Yes. All processing happens locally in your browser. No image data is transmitted externally. Processing happens in your browser — no account required.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. Chrome on Android and Safari 16+ on iOS support AVIF. The mobile browser conversion experience is identical to desktop.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I convert multiple JPGs to AVIF at once?</summary>
        <p className="mt-3">
          Yes. Batch convert multiple JPG images in one session.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free?</summary>
        <p className="mt-3">
          Yes. Completely free with no account required and no conversion limits.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     AVIF TO PNG
  ───────────────────────────────────────────── */
  "avif-to-png": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">When to Convert AVIF Back to PNG</h2>
      <p>
        AVIF is the format of choice for web delivery — but many image editing applications, enterprise software tools, and legacy systems don't yet support it. Converting AVIF to PNG gives you a universally compatible lossless image that works everywhere: Photoshop, Illustrator, Word, PowerPoint, print services, and every image viewer across every operating system.
      </p>
      <p>
        AVIF's transparency (alpha channel) translates perfectly to PNG's transparency. The conversion is visual-quality preserving: a lossless AVIF decodes to PNG without any quality change, and a lossy AVIF decodes capturing whatever detail was encoded — then preserved losslessly in PNG from that point forward. This makes AVIF to PNG conversion the correct path for archiving web assets in a universally editable format.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools</h2>
      <p>
        For the reverse conversion — PNG to AVIF for web optimization — use the <Link href="/tools/png-to-avif" className="text-emerald-600 hover:underline font-semibold">PNG to AVIF converter</Link>. If you need a JPG from your AVIF files instead of PNG, the <Link href="/tools/avif-to-jpg" className="text-emerald-600 hover:underline font-semibold">AVIF to JPG</Link> tool handles that conversion. For reducing the size of the resulting PNG, the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> applies additional compression without format change. All processing is local in your browser — files never leave your device.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is transparency preserved when converting AVIF to PNG?</summary>
        <p className="mt-3">
          Yes. PNG supports full alpha transparency, and the converter preserves any transparent regions from the AVIF source exactly.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the PNG be larger than the AVIF?</summary>
        <p className="mt-3">
          Yes. PNG is lossless and therefore larger than the highly compressed AVIF. This size increase is expected when converting from a delivery-optimized format to a lossless archival format.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my files safe?</summary>
        <p className="mt-3">
          Yes. All processing happens locally in your browser. Images are never transmitted to any server.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. Chrome on Android and Safari on iOS both support the conversion. The mobile experience is identical to desktop.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free?</summary>
        <p className="mt-3">
          Completely free. No account, no limits, no watermarks.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Do I need to create an account?</summary>
        <p className="mt-3">
          No. The tool is fully accessible without registration of any kind.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     AVIF TO JPG
  ───────────────────────────────────────────── */
  "avif-to-jpg": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Convert AVIF to JPG?</h2>
      <p>
        AVIF has rapidly become the web's most efficient image format — but it still encounters compatibility gaps outside the browser. Print services, email platforms with image previews, legacy content management systems, and many professional image editing workflows require JPG. Converting AVIF to JPG gives you a universally compatible file that works in every context, on every device, in every application.
      </p>
      <p>
        The resulting JPG will be larger than the original AVIF — that's the expected trade-off when moving from a highly efficient format to JPG's older compression approach. But the visual content will be faithfully represented, and the JPG will open in any software without hesitation.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools</h2>
      <p>
        For the opposite direction — converting JPG to AVIF for web use — use the <Link href="/tools/jpg-to-avif" className="text-emerald-600 hover:underline font-semibold">JPG to AVIF converter</Link>. To convert AVIF to PNG instead (preserving transparency), use <Link href="/tools/avif-to-png" className="text-emerald-600 hover:underline font-semibold">AVIF to PNG</Link>. After converting to JPG, you can compress the result further with the <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link>. All processing is local in your browser — no server upload, no exposure of your images.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the JPG be larger than the original AVIF?</summary>
        <p className="mt-3">
          Yes. AVIF is highly compressed. The converted JPG will typically be significantly larger in file size for the same visual content. This is the compatibility cost of moving from a modern format to JPG.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What happens to transparency in AVIF when converting to JPG?</summary>
        <p className="mt-3">
          JPG does not support transparency. Any transparent areas in the AVIF are filled with a solid white background in the output JPG. To preserve transparency, convert to <Link href="/tools/avif-to-png" className="text-emerald-600 hover:underline font-semibold">PNG</Link> instead.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my files safe during conversion?</summary>
        <p className="mt-3">
          Yes. Processing happens entirely in your browser. Images are never uploaded or transmitted to any server.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. Chrome on Android and Safari on iOS support the conversion in the mobile browser.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is there a cost or sign-up?</summary>
        <p className="mt-3">
          No. Completely free with no account required.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I batch convert multiple AVIF files?</summary>
        <p className="mt-3">
          Yes. Upload multiple AVIF files and convert them in one session.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     SVG TO PNG
  ───────────────────────────────────────────── */
  "svg-to-png": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is SVG and Why Convert It to PNG?</h2>
      <p>
        SVG (Scalable Vector Graphics) is an XML-based vector image format. Unlike raster formats (JPG, PNG, WebP), SVG stores images as mathematical descriptions of shapes, paths, and curves — not as a grid of pixels. This means SVG images scale to any size without losing sharpness. A logo in SVG looks identical at 16px and at 1600px.
      </p>
      <p>
        PNG is a raster format. Each pixel in a PNG image has a fixed color value — scale a PNG beyond its original resolution and it becomes blurry. However, PNG is universally supported in applications, print workflows, office software, social media platforms, and messaging apps. SVG support is more limited.
      </p>
      <p>
        Converting SVG to PNG is necessary when you need to use a vector asset in a context that doesn't support SVG: embedding a logo in a PowerPoint slide, uploading a brand icon to a social media profile, including a vector illustration in a Word document, or delivering a design asset to a client for use in general applications.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How the SVG to PNG Converter Works</h2>
      <p>
        The converter renders each SVG in a browser canvas — using the browser's native SVG rendering engine — and exports the result as a PNG. Because SVG is rendered at the browser's native resolution pipeline, the output is crisp regardless of the SVG's defined dimensions. Transparency in the SVG is preserved in the PNG output, since PNG supports alpha channels.
      </p>
      <p>
        For the output to be used on the web with smaller file sizes, convert the resulting PNG to <Link href="/tools/png-to-webp" className="text-emerald-600 hover:underline font-semibold">WebP</Link> or <Link href="/tools/png-to-avif" className="text-emerald-600 hover:underline font-semibold">AVIF</Link>. To convert to a JPG instead (without transparency), use <Link href="/tools/svg-to-jpg" className="text-emerald-600 hover:underline font-semibold">SVG to JPG</Link>. All processing is local in your browser — images never leave your device. No account required.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the PNG output be blurry if the SVG is small?</summary>
        <p className="mt-3">
          No. Because SVG is vector-based, the browser renders it at full quality regardless of the SVG's defined dimensions. The output PNG is sharp and clean at the rendered resolution.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is SVG transparency preserved in the PNG output?</summary>
        <p className="mt-3">
          Yes. PNG supports full alpha transparency, and the converter preserves any transparent regions in the SVG source exactly.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my SVG files transmitted to any server?</summary>
        <p className="mt-3">
          No. The SVG is rendered locally using the browser's native SVG engine and encoded to PNG in browser memory. No file data is transmitted externally.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. The tool runs in Chrome on Android and Safari on iOS. SVG rendering is handled by the mobile browser's native engine.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this suitable for converting logo SVGs?</summary>
        <p className="mt-3">
          Yes. SVG to PNG is the recommended path for exporting brand logos from vector format to raster format for use in presentations, documents, and platform uploads.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free?</summary>
        <p className="mt-3">
          Completely free. No account, no limits, no watermarks.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     SVG TO JPG
  ───────────────────────────────────────────── */
  "svg-to-jpg": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Convert SVG to JPG?</h2>
      <p>
        SVG vectors are perfect for scalable design — but they're not accepted everywhere. Print services often require raster images, and JPG is the most universally compatible format available. Social media platforms, email clients, photo sharing services, and most consumer software accept JPG without hesitation. Converting SVG to JPG makes your vector artwork immediately usable in any context.
      </p>
      <p>
        Because SVG is mathematical rather than pixel-based, the tool can render it at any scale before encoding to JPG — producing a high-resolution raster image even from a small SVG file. The output JPG is sharp, professional, and sized appropriately for its intended use.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Key Difference from SVG to PNG</h2>
      <p>
        JPG doesn't support transparency. Any transparent areas in your SVG will be filled with a white background. If you need to preserve transparency in the raster output, use <Link href="/tools/svg-to-png" className="text-emerald-600 hover:underline font-semibold">SVG to PNG</Link> instead. For web-optimized output with transparency, <Link href="/tools/svg-to-webp" className="text-emerald-600 hover:underline font-semibold">SVG to WebP</Link> provides both transparency support and better compression than PNG.
      </p>
      <p className="mt-4">
        All processing is local in your browser. Files never leave your device. No account or payment required. Works on desktop and mobile browsers.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">What happens to transparent areas in the SVG?</summary>
        <p className="mt-3">
          Since JPG doesn't support transparency, transparent regions are filled with a solid white background. To preserve transparency, use <Link href="/tools/svg-to-png" className="text-emerald-600 hover:underline font-semibold">SVG to PNG</Link>.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the JPG output be sharp?</summary>
        <p className="mt-3">
          Yes. The browser renders the SVG at high resolution before encoding as JPG, ensuring crisp, sharp output regardless of the SVG's original defined dimensions.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my SVG files safe?</summary>
        <p className="mt-3">
          Yes. All processing happens locally in your browser. No file data is transmitted to any server.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. The tool runs in any modern mobile browser on Android and iOS.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I convert multiple SVGs at once?</summary>
        <p className="mt-3">
          Yes. Upload multiple SVG files and convert them all in a single session.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free for commercial use?</summary>
        <p className="mt-3">
          Yes. The tool is free for all users, including professionals converting brand assets and commercial illustrations.
        </p>
      </details>

    </section>
  ),

  /* ─────────────────────────────────────────────
     SVG TO WEBP
  ───────────────────────────────────────────── */
  "svg-to-webp": (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Convert SVG to WebP?</h2>
      <p>
        SVG is ideal as a source vector format but may not be the most efficient output for web delivery in all contexts. WebP provides superior compression to PNG — the typical raster SVG export format — while maintaining full alpha transparency support. Converting SVG to WebP produces web-ready images that are 25–35% smaller than equivalent PNGs, with no loss in visual quality and no transparency compromise.
      </p>
      <p>
        This is particularly useful for UI icons, illustrations, and decorative graphics that need to be served as raster images in web contexts where SVG delivery isn't ideal (for example, in CSS backgrounds, email templates, or within tools that don't support SVG references). The resulting WebP files are small, sharp, and transparent where needed.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Tools</h2>
      <p>
        For transparent PNG output instead of WebP, use <Link href="/tools/svg-to-png" className="text-emerald-600 hover:underline font-semibold">SVG to PNG</Link>. For maximum compression at the cost of transparency, <Link href="/tools/svg-to-jpg" className="text-emerald-600 hover:underline font-semibold">SVG to JPG</Link> produces the smallest raster files. For images needing the absolute best compression, <Link href="/tools/png-to-avif" className="text-emerald-600 hover:underline font-semibold">PNG to AVIF</Link> after conversion gives you next-generation format efficiency.
      </p>
      <p className="mt-4">
        All processing runs locally in your browser. Files never leave your device. No account required. Completely free.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions</h2>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is transparency preserved in the WebP output?</summary>
        <p className="mt-3">
          Yes. WebP supports full alpha transparency. Any transparent regions in your SVG are preserved exactly in the output WebP file.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Will the WebP look blurry?</summary>
        <p className="mt-3">
          No. The browser renders the SVG at high resolution before WebP encoding. The output is sharp and clean regardless of the SVG's defined size.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Are my SVG files sent to a server?</summary>
        <p className="mt-3">
          No. Processing happens locally in your browser. No file data is transmitted externally.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Can I batch convert SVGs to WebP?</summary>
        <p className="mt-3">
          Yes. Upload multiple SVG files and convert them all in a single browser session.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Does this work on mobile?</summary>
        <p className="mt-3">
          Yes. The tool runs in Chrome on Android and Safari on iOS. SVG rendering uses the mobile browser's native engine.
        </p>
      </details>

      <details className="border border-slate-200 rounded-xl p-4 mt-4">
        <summary className="font-semibold text-slate-900 cursor-pointer">Is this free?</summary>
        <p className="mt-3">
          Completely free. No account, no limits, no watermarks on any conversion.
        </p>
      </details>

    </section>
  ),
};

// Generic Fallback generator for unmapped tools to prevent breaking
export const getSEOContent = (toolId: string, toolTitle: string) => {
  if (TOOL_SEO_CONTENT[toolId]) {
    return TOOL_SEO_CONTENT[toolId];
  }

  // Generic fallback content block for remaining formats
  return (
    <section className="tool-content space-y-6 text-slate-600 leading-relaxed">
      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Secure &amp; Fast {toolTitle} in Your Browser</h2>
      <p>
        Format incompatibility slows digital workflows down. Edita&apos;s browser-based <strong>{toolTitle} tool</strong> lets you convert, adapt, and process your files without uploading them to any third-party server. All processing happens locally using WebAssembly — delivering the speed of a desktop application with the convenience of a browser tab.
      </p>
      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Why Edita Handles Files Better</h3>
      <p>
        By running file operations through WebAssembly in your browser, Edita keeps your data strictly on your device. Your files are processed using your computer&apos;s own CPU — never transmitted, never stored, never seen by any server. There&apos;s no upload queue, no server lag, and no artificial file size limit.
      </p>
      <p>
        Continue optimizing your media workflow with our completely free <Link href="/tools/image-compressor" className="text-emerald-600 hover:underline font-semibold">Image Compressor</Link> or explore our full suite of <Link href="/tools" className="text-emerald-600 hover:underline font-semibold">browser-based file tools</Link>.
      </p>
    </section>
  );
};
