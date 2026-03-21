import { type FAQ } from '@/components/ui/FAQSection';

export const GENERAL_FAQS: FAQ[] = [
  {
    question: "Is it safe to use Edita for sensitive files?",
    answer: "Absolutely. Edita processes all your files locally in your browser using WASM (WebAssembly) technology. Your documents never leave your device and are never uploaded to our servers, ensuring total privacy."
  },
  {
    question: "Does Edita store my data or file history?",
    answer: "No. We have a strict 'no-storage' policy. Once you close your browser tab, all traces of your processed files are gone. We don't track your content or keep any logs of your file data."
  },
  {
    question: "Why is Edita faster than other online converters?",
    answer: "Traditional tools require you to upload large files to a server, wait for processing, and then download them back. Edita eliminates all network lag by processing everything instantly on your own hardware."
  }
];

export const TOOL_METADATA = {
  "merge-pdf": {
    title: "Merge PDF Online – Combine PDF Files Free",
    description: "Merge multiple PDF files into one document for free. Fast, secure, and private browser-based PDF merger. No file size limits or registration required.",
    keywords: ["merge pdf", "combine pdf files", "join pdf", "pdf merger online", "free pdf joiner"],
    canonical: "/tools/merge-pdf",
    toolTitle: "Merge PDF",
    toolDescription: "Combine multiple PDF files into a single document instantly in your browser.",
    howItWorksSteps: [
      { title: "Select PDFs", desc: "Choose multiple PDF files from your device to combine." },
      { title: "Arrange Order", desc: "Drag and drop the files to set the perfect order for your merged document." },
      { title: "Merge & Save", desc: "Our local engine joins them instantly—download your new PDF in seconds." }
    ],
    faqs: [
      {
        question: "How many PDF files can I merge at once?",
        answer: "There's no hard limit on the number of files you can merge. Since processing happens locally on your machine, it depends on your device's memory. Most users can easily merge dozens of PDFs at once."
      },
      {
        question: "Will the formatting of my PDFs be preserved?",
        answer: "Yes. Our merging engine preserves all fonts, formatting, and layouts exactly as they appear in the original documents."
      },
      {
        question: "Can I reorder pages after selecting files?",
        answer: "Currently, you can reorder entire files before merging. If you need to reorder individual pages, we recommend using our Split PDF tool first to extract them."
      }
    ]
  },
  "compress-pdf": {
    title: "Compress PDF Online – Reduce PDF File Size Free",
    description: "Compress PDF files online for free. Reduce PDF size while maintaining high quality. Fast browser-based compression with private, local processing.",
    keywords: ["compress pdf", "reduce pdf size", "shrink pdf online", "free pdf compressor", "pdf optimizer"],
    canonical: "/tools/compress-pdf",
    toolTitle: "Compress PDF",
    toolDescription: "Reduce PDF file size quickly in your browser while preserving document quality.",
    howItWorksSteps: [
      { title: "Upload PDF", desc: "Select the PDF file you want to compress from your computer or device." },
      { title: "Compress Online", desc: "Our engine optimizes the file size instantly without uploading to any server." },
      { title: "Save Result", desc: "Download your compressed PDF with reduced file size in just seconds." }
    ],
    faqs: [
      {
        question: "Will I lose quality when I compress my PDF?",
        answer: "We use smart compression algorithms that target redundant data and optimize images within the PDF. You'll get a significantly smaller file with minimal to no visible loss in document quality."
      },
      {
        question: "How much can I reduce my PDF file size?",
        answer: "Most PDFs can be reduced by 40-80% of their original size, depending on how many images and high-resolution assets are inside the document."
      },
      {
        question: "Is it safe to compress confidential legal or business PDFs here?",
        answer: "Yes, it's safer than almost any other online tool. Your files are compressed entirely in your browser memory and are never sent to a cloud server, ensuring your data remains private."
      }
    ]
  },
  "split-pdf": {
    title: "Split PDF Free – Extract Pages from PDF Online",
    description: "Split PDF files into multiple documents or extract specific pages easily. Secure, private, and 100% browser-based PDF splitter.",
    keywords: ["split pdf", "extract pdf pages", "separate pdf", "pdf splitter online", "free pdf extractor"],
    canonical: "/tools/split-pdf",
    toolTitle: "Split PDF",
    toolDescription: "Divide your PDF into separate files or extract only the pages you need.",
    howItWorksSteps: [
      { title: "Choose PDF", desc: "Select the PDF document you want to split or extract pages from." },
      { title: "Select Pages", desc: "Choose the specific pages or ranges you want to separate into new files." },
      { title: "Split & Download", desc: "Generate your split PDF files instantly and download them to your device." }
    ],
    faqs: [
      {
        question: "Can I extract specific page ranges from a PDF?",
        answer: "Yes. Our tool allows you to specify exact page numbers or ranges (e.g., 1-5, 8, 12) to extract only the content you need into a new PDF document."
      },
      {
        question: "Will splitting a PDF ruin my original file?",
        answer: "Not at all. Your original file remains untouched. We create new PDF files based on your selection and process everything in your browser's memory."
      },
      {
        question: "Is there a limit to how many files I can split into?",
        answer: "There's no set limit. You can split a large document into individual pages or several smaller documents. It's fast, private, and efficient."
      }
    ]
  },
  "pdf-to-word": {
    title: "PDF to Word Converter – Convert PDF to Docx Free Online",
    description: "Convert PDF to editable Word documents online for free. Accurate conversion that preserves layouts. Private processing directly in your browser.",
    keywords: ["pdf to word", "convert pdf to docx", "pdf to editable word", "free pdf to word converter", "pdf to doc online"],
    canonical: "/tools/pdf-to-word",
    toolTitle: "PDF to Word",
    toolDescription: "Transform your PDF documents into editable Microsoft Word files accurately.",
    howItWorksSteps: [
      { title: "Upload PDF", desc: "Select the PDF file you wish to convert into an editable Word document." },
      { title: "Auto-Convert", desc: "Our tool extracts text and formatting locally in your browser to create a .docx file." },
      { title: "Download Docx", desc: "Save the converted Word file and start editing right away." }
    ],
    faqs: [
      {
        question: "Will the Word document be fully editable?",
        answer: "Yes. We extract the text and layout from your PDF to create a standard .docx file that you can edit using Microsoft Word, Google Docs, or any other compatible editor."
      },
      {
        question: "Does this tool support OCR for scanned PDFs?",
        answer: "Currently, our local converter works best with native digital PDFs. For scanned PDF images, text extraction might be limited as we focus on 100% private, local processing."
      },
      {
        question: "Is my document formatting preserved?",
        answer: "We strive to maintain your original layout, fonts, and images as closely as possible during the PDF to Word conversion process."
      }
    ]
  },
  "word-to-pdf": {
    title: "Word to PDF Converter – Convert Docx to PDF Free",
    description: "Convert Word documents to PDF online for free. Maintain formatting and quality with our secure, browser-based Docx to PDF tool.",
    keywords: ["word to pdf", "convert docx to pdf", "word to pdf converter", "free docx to pdf online", "microsoft word to pdf"],
    canonical: "/tools/word-to-pdf",
    toolTitle: "Word to PDF",
    toolDescription: "Convert your Microsoft Word documents to professional PDF files instantly.",
    howItWorksSteps: [
      { title: "Select Word File", desc: "Choose the .doc or .docx file you want to convert to PDF." },
      { title: "Fast Conversion", desc: "Wait a moment while we transform your document into a high-quality PDF." },
      { title: "Save PDF", desc: "Download your new PDF document directly to your device." }
    ],
    faqs: [
      {
        question: "Will my Word document's fonts look the same in the PDF?",
        answer: "Yes. Our converter embeds formatting to ensure your PDF looks exactly like your Word document, preserving layout and typography."
      },
      {
        question: "Can I convert old .doc files or only .docx?",
        answer: "We support both legacy .doc and modern .docx formats for conversion to PDF."
      },
      {
        question: "Is there a page limit for Word to PDF conversion?",
        answer: "Since it's processed on your device, you can convert long documents. Most standard business and academic papers are converted in seconds."
      }
    ]
  },
  "jpg-to-pdf": {
    title: "JPG to PDF Converter – Convert Images to PDF Online",
    description: "Convert JPG and other images to PDF online for free. Combine multiple images into a single PDF document securely in your browser.",
    keywords: ["jpg to pdf", "convert image to pdf", "images to pdf merger", "free jpg to pdf converter", "online image to pdf"],
    canonical: "/tools/jpg-to-pdf",
    toolTitle: "JPG to PDF",
    toolDescription: "Convert one or multiple images into a single, clean PDF document.",
    howItWorksSteps: [
      { title: "Add Images", desc: "Upload your JPG files. You can select multiple images at once." },
      { title: "Organize Pages", desc: "Drag to reorder your images to set the page sequence in the final PDF." },
      { title: "Create PDF", desc: "Download your images combined into a single professional PDF file." }
    ],
    faqs: [
      {
        question: "Can I combine multiple JPGs into one PDF?",
        answer: "Yes. You can select multiple images and our tool will merge them into a single, multi-page PDF document in the order you choose."
      },
      {
        question: "Will my images lose quality in the PDF?",
        answer: "We preserve the original resolution of your JPGs during the conversion to ensure your PDF looks professional and high-quality."
      },
      {
        question: "How do I reorder pages in the PDF?",
        answer: "Once you upload your images, you can simply drag and drop them to arrange the perfect page sequence before clicking 'Create PDF'."
      }
    ]
  },
  "pdf-to-jpg": {
    title: "PDF to JPG Converter – Extract Images from PDF Online",
    description: "Convert PDF pages to JPG images online for free. High-quality image extraction with private, local browser processing.",
    keywords: ["pdf to jpg", "pdf to image converter", "extract images from pdf", "free pdf to jpg online", "convert pdf pages to jpeg"],
    canonical: "/tools/pdf-to-jpg",
    toolTitle: "PDF to JPG",
    toolDescription: "Transform your PDF pages into high-quality JPG image files instantly.",
    howItWorksSteps: [
      { title: "Select PDF", desc: "Choose the PDF document whose pages you want to convert into images." },
      { title: "Extract Images", desc: "Our tool processes the conversion locally, ensuring high-resolution JPG output." },
      { title: "Save Gallery", desc: "Download each page as an individual JPG image or as a single zip archive." }
    ],
    faqs: [
      {
        question: "Can I convert a specific page from a PDF to JPG?",
        answer: "Currently, our tool converts all pages of the document. You can then choose to download only the specific images you need from the list."
      },
      {
        question: "What resolution will the output JPGs have?",
        answer: "We extract pages at high resolution (typically 300 DPI or the original document's quality) to ensure your images are crisp and readable."
      },
      {
        question: "Is it safe to convert private PDF documents to images?",
        answer: "Yes. All extraction happens directly in your browser. Your PDF and its contents never touch our servers, providing ultimate privacy for sensitive work."
      }
    ]
  },
  "image-compressor": {
    title: "Image Compressor – Reduce Image File Size Online Free",
    description: "Compress JPG, PNG, and WebP images online without losing quality. Fast, private browser-based image optimization.",
    keywords: ["image compressor", "reduce image size", "compress jpg", "compress png", "shrink image online", "photo optimizer"],
    canonical: "/tools/image-compressor",
    toolTitle: "Image Compressor",
    toolDescription: "Shrink your image file sizes easily while maintaining excellent visual quality.",
    howItWorksSteps: [
      { title: "Upload Images", desc: "Select the JPG, PNG, or WebP images you want to optimize." },
      { title: "Set Compression", desc: "Our engine automatically finds the best balance between size and quality." },
      { title: "Download Small", desc: "Save your optimized images instantly—perfect for web use and sharing." }
    ],
    faqs: [
      {
        question: "Which image formats can I compress?",
        answer: "Our image compressor supports all popular formats including JPG, JPEG, PNG, and WebP, optimizing each one for its specific format strengths."
      },
      {
        question: "Will my images look blurry after compression?",
        answer: "No. We use intelligent lossy and lossless algorithms to strip away unneeded data while keeping the visual details sharp. Most users see no difference in quality."
      },
      {
        question: "Can I compress multiple images at the same time?",
        answer: "Yes, you can upload and optimize dozens of images in a single batch session, with all processing happening locally in your browser."
      }
    ]
  },
  "png-to-jpg": {
    title: "PNG to JPG Converter – Convert PNG to JPEG Online Free",
    description: "Convert PNG images to JPG format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["png to jpg", "convert png to jpeg", "png to jpg converter", "free image converter", "online png to jpg"],
    canonical: "/tools/png-to-jpg",
    toolTitle: "PNG to JPG",
    toolDescription: "Efficiently convert PNG images to JPG format directly in your browser.",
    howItWorksSteps: [
      { title: "Select PNGs", desc: "Upload the PNG images you want to convert to JPG format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as JPG", desc: "Download your converted JPG images individually or together." }
    ],
    faqs: [
      {
        question: "What happens to the transparent background when I convert PNG to JPG?",
        answer: "Since the JPG format doesn't support transparency, any transparent areas in your PNG will be converted to a solid white background by default."
      },
      {
        question: "Will the image quality decrease after conversion?",
        answer: "PNG is lossless while JPG uses compression. You might see a tiny difference in file size and detail, but we use high-quality encoding to ensure your images look sharp."
      },
      {
        question: "Is there a limit to how many PNGs I can convert?",
        answer: "No. You can upload and convert as many PNG images as you need. Since the work is done by your own browser, there's no server queue or usage limit."
      }
    ]
  },
  "jpg-to-png": {
    title: "JPG to PNG Converter – Convert JPEG to PNG Online Free",
    description: "Convert JPG images to PNG format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["jpg to png", "convert jpeg to png", "jpg to png converter", "free image converter", "online jpg to png"],
    canonical: "/tools/jpg-to-png",
    toolTitle: "JPG to PNG",
    toolDescription: "Efficiently convert JPG images to PNG format directly in your browser.",
    howItWorksSteps: [
      { title: "Select JPGs", desc: "Upload the JPG images you want to convert to PNG format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as PNG", desc: "Download your converted PNG images individually or together." }
    ],
    faqs: [
      {
        question: "Will converting JPG to PNG make the background transparent?",
        answer: "No. Since JPG doesn't support transparency, the background is already solid. Converting it to PNG preserves the solid background while using a lossless format for future editing."
      },
      {
        question: "Is PNG better than JPG for quality?",
        answer: "PNG is a lossless format, meaning it doesn't lose data when saved. Converting a JPG to PNG won't 'restore' quality already lost in the JPG, but it prevents further degradation during future edits."
      },
      {
        question: "Is my image uploaded to a server for conversion?",
        answer: "Never. Edita performs the conversion locally in your browser. Your images stay on your device throughout the entire process."
      }
    ]
  },
  "png-to-webp": {
    title: "PNG to WebP Converter – Convert PNG to WebP Online Free",
    description: "Convert PNG images to WebP format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["png to webp", "convert png to webp", "png to webp converter", "free image converter", "online png to webp"],
    canonical: "/tools/png-to-webp",
    toolTitle: "PNG to WebP",
    toolDescription: "Efficiently convert PNG images to WebP format directly in your browser.",
    howItWorksSteps: [
      { title: "Select PNGs", desc: "Upload the PNG images you want to convert to WebP format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as WebP", desc: "Download your converted WebP images individually or together." }
    ],
    faqs: [
      {
        question: "How much smaller are WebP files compared to PNG?",
        answer: "WebP files are typically 25-35% smaller than PNGs while maintaining the same visual quality and transparency support, making them ideal for faster website loading."
      },
      {
        question: "Does WebP support transparent backgrounds?",
        answer: "Yes. WebP supports full alpha transparency just like PNG, but with much better compression."
      },
      {
        question: "Are WebP images compatible with all browsers?",
        answer: "Yes, all modern browsers including Chrome, Firefox, Safari, and Edge fully support WebP images."
      }
    ]
  },
  "webp-to-png": {
    title: "WebP to PNG Converter – Convert WebP to PNG Online Free",
    description: "Convert WebP images to PNG format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["webp to png", "convert webp to png", "webp to png converter", "free image converter", "online webp to png"],
    canonical: "/tools/webp-to-png",
    toolTitle: "WebP to PNG",
    toolDescription: "Efficiently convert WebP images to PNG format directly in your browser.",
    howItWorksSteps: [
      { title: "Select WebPs", desc: "Upload the WebP images you want to convert to PNG format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as PNG", desc: "Download your converted PNG images individually or together." }
    ],
    faqs: [
      {
        question: "Will transparency be kept when converting WebP to PNG?",
        answer: "Yes. Our converter fully preserves the alpha channel (transparency) during the transition from WebP to PNG."
      },
      {
        question: "Why would I convert WebP back to PNG?",
        answer: "While WebP is great for the web, some older image editors or specific software might still require the more universal PNG format for editing or specialized use."
      },
      {
        question: "Is this conversion lossless?",
        answer: "Yes. Since both formats support high-quality data, we ensure that no visual quality is lost during the local conversion on your device."
      }
    ]
  },
  "jpg-to-webp": {
    title: "JPG to WebP Converter – Convert JPEG to WebP Online Free",
    description: "Convert JPG images to WebP format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["jpg to webp", "convert jpeg to webp", "jpg to webp converter", "free image converter", "online jpg to webp"],
    canonical: "/tools/jpg-to-webp",
    toolTitle: "JPG to WebP",
    toolDescription: "Efficiently convert JPG images to WebP format directly in your browser.",
    howItWorksSteps: [
      { title: "Select JPGs", desc: "Upload the JPG images you want to convert to WebP format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as WebP", desc: "Download your converted WebP images individually or together." }
    ],
    faqs: [
      {
        question: "Is WebP better than JPG for web use?",
        answer: "Generally, yes. WebP provides superior compression, resulting in smaller files that load faster while maintaining the same or better visual quality than JPG."
      },
      {
        question: "Can I convert high-resolution JPGs to WebP?",
        answer: "Yes. Our local engine handles high-resolution images easily, optimizing them for modern web standards without compromising their clarity."
      },
      {
        question: "How safe is my photo data here?",
        answer: "Completely safe. Since the conversion happens in your browser's local sandbox, your photos are never seen or stored by anyone else."
      }
    ]
  },
  "webp-to-jpg": {
    title: "WebP to JPG Converter – Convert WebP to JPEG Online Free",
    description: "Convert WebP images to JPG format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["webp to jpg", "convert webp to jpeg", "webp to jpg converter", "free image converter", "online webp to jpg"],
    canonical: "/tools/webp-to-jpg",
    toolTitle: "WebP to JPG",
    toolDescription: "Efficiently convert WebP images to JPG format directly in your browser.",
    howItWorksSteps: [
      { title: "Select WebPs", desc: "Upload the WebP images you want to convert to JPG format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as JPG", desc: "Download your converted JPG images individually or together." }
    ],
    faqs: [
      {
        question: "Will my images look different after converting WebP to JPG?",
        answer: "You won't notice a visual difference. We use high-quality encoding to ensure the resulting JPG captures all the detail of the original WebP file."
      },
      {
        question: "What happens to the background of a transparent WebP when converting to JPG?",
        answer: "Since JPG doesn't support transparency, any transparent areas will be filled with a solid white background."
      },
      {
        question: "Why use Edita for this conversion?",
        answer: "Privacy and speed. Most converters require an upload; Edita works instantly in your browser, keeping your images private and saving you data."
      }
    ]
  },
  "png-to-avif": {
    title: "PNG to AVIF Converter – Convert PNG to AVIF Online Free",
    description: "Convert PNG images to AVIF format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["png to avif", "convert png to avif", "png to avif converter", "free image converter", "online png to avif"],
    canonical: "/tools/png-to-avif",
    toolTitle: "PNG to AVIF",
    toolDescription: "Efficiently convert PNG images to AVIF format directly in your browser.",
    howItWorksSteps: [
      { title: "Select PNGs", desc: "Upload the PNG images you want to convert to AVIF format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as AVIF", desc: "Download your converted AVIF images individually or together." }
    ],
    faqs: [
      {
        question: "Is AVIF better than WebP or PNG?",
        answer: "AVIF offers even better compression than WebP, often saving 50% more space than a PNG while maintaining incredible detail and transparency support."
      },
      {
        question: "Do all browsers support AVIF?",
        answer: "Most modern browsers like Chrome, Firefox, and recent versions of Safari support AVIF. It's the future of web image formats."
      },
      {
        question: "Will my PNG look the same in AVIF?",
        answer: "Yes. AVIF is designed to handle transparency and wide color gamuts, ensuring your high-quality PNGs translate perfectly to a smaller file size."
      }
    ]
  },
  "jpg-to-avif": {
    title: "JPG to AVIF Converter – Convert JPEG to AVIF Online Free",
    description: "Convert JPG images to AVIF format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["jpg to avif", "convert jpeg to avif", "jpg to avif converter", "free image converter", "online jpg to avif"],
    canonical: "/tools/jpg-to-avif",
    toolTitle: "JPG to AVIF",
    toolDescription: "Efficiently convert JPG images to AVIF format directly in your browser.",
    howItWorksSteps: [
      { title: "Select JPGs", desc: "Upload the JPG images you want to convert to AVIF format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as AVIF", desc: "Download your converted AVIF images individually or together." }
    ],
    faqs: [
      {
        question: "How much space can I save by converting JPG to AVIF?",
        answer: "You can often reduce your file size by up to 50% or more without losing any noticeable image quality."
      },
      {
        question: "Is this tool free for large JPG files?",
        answer: "Yes, Edita is completely free. Since the conversion happens on your device, there are no file size limits imposed by our servers."
      },
      {
        question: "Why convert to AVIF instead of staying with JPG?",
        answer: "AVIF is a modern 'next-gen' format that provides much better efficiency, making your website or gallery load lightning-fast for your visitors."
      }
    ]
  },
  "avif-to-png": {
    title: "AVIF to PNG Converter – Convert AVIF to PNG Online Free",
    description: "Convert AVIF images to PNG format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["avif to png", "convert avif to png", "avif to png converter", "free image converter", "online avif to png"],
    canonical: "/tools/avif-to-png",
    toolTitle: "AVIF to PNG",
    toolDescription: "Efficiently convert AVIF images to PNG format directly in your browser.",
    howItWorksSteps: [
      { title: "Select AVIFs", desc: "Upload the AVIF images you want to convert to PNG format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as PNG", desc: "Download your converted PNG images individually or together." }
    ],
    faqs: [
      {
        question: "Will converting AVIF to PNG preserve transparency?",
        answer: "Yes. Our converter maintains the full alpha channel, ensuring any transparent regions in your AVIF remain transparent in the resulting PNG."
      },
      {
        question: "Why convert AVIF to PNG?",
        answer: "While AVIF is superior for web size, PNG is often required for high-end editing in software that hasn't fully adopted the AVIF standard yet."
      },
      {
        question: "Is the conversion quality same as the original?",
        answer: "Yes. We use lossless rendering to ensure your PNG output is a pixel-perfect representation of the source AVIF file."
      }
    ]
  },
  "avif-to-jpg": {
    title: "AVIF to JPG Converter – Convert AVIF to JPEG Online Free",
    description: "Convert AVIF images to JPG format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["avif to jpg", "convert avif to jpeg", "avif to jpg converter", "free image converter", "online avif to jpg"],
    canonical: "/tools/avif-to-jpg",
    toolTitle: "AVIF to JPG",
    toolDescription: "Efficiently convert AVIF images to JPG format directly in your browser.",
    howItWorksSteps: [
      { title: "Select AVIFs", desc: "Upload the AVIF images you want to convert to JPG format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your files without any quality loss." },
      { title: "Save as JPG", desc: "Download your converted JPG images individually or together." }
    ],
    faqs: [
      {
        question: "Will my JPG file be larger than the original AVIF?",
        answer: "Likely yes. AVIF is much more efficient than JPG, so expect a larger file size after converting for compatibility reasons."
      },
      {
        question: "Does AVIF to JPG conversion affect resolution?",
        answer: "No. We maintain the original dimensions and pixel density of your image, ensuring a high-quality JPG output."
      },
      {
        question: "Can I use these JPGs anywhere?",
        answer: "Yes. JPG is the most universally compatible image format, supported by every device, website, and social media platform."
      }
    ]
  },
  "svg-to-png": {
    title: "SVG to PNG Converter – Convert SVG to PNG Online Free",
    description: "Convert SVG vectors to PNG images for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["svg to png", "convert svg to png", "svg to png converter", "free vector converter", "online svg to png"],
    canonical: "/tools/svg-to-png",
    toolTitle: "SVG to PNG",
    toolDescription: "Efficiently convert SVG vector images to PNG format directly in your browser.",
    howItWorksSteps: [
      { title: "Select SVGs", desc: "Upload the SVG vector files you want to convert to PNG format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your vectors into high-quality raster images." },
      { title: "Save as PNG", desc: "Download your converted PNG images individually or together." }
    ],
    faqs: [
      {
        question: "Will the PNG output be blurry if I scale up my SVG?",
        answer: "No. Since SVG is a vector format, we render it at high resolution during the conversion process to ensure your PNG looks crisp regardless of the original SVG's defined dimensions."
      },
      {
        question: "Does the converter preserve SVG transparency?",
        answer: "Yes, when converting SVG to PNG, the transparency is fully preserved, unlike when converting to JPG."
      },
      {
        question: "Is this tool suitable for logo conversion?",
        answer: "Absolutely. This is the perfect tool for turning vector logos into web-ready raster images for social media, websites, or presentations."
      }
    ]
  },
  "svg-to-jpg": {
    title: "SVG to JPG Converter – Convert SVG to JPEG Online Free",
    description: "Convert SVG vectors to JPG format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["svg to jpg", "convert svg to jpeg", "svg to jpg converter", "free vector converter", "online svg to jpg"],
    canonical: "/tools/svg-to-jpg",
    toolTitle: "SVG to JPG",
    toolDescription: "Efficiently convert SVG vector images to JPG format directly in your browser.",
    howItWorksSteps: [
      { title: "Select SVGs", desc: "Upload the SVG vector files you want to convert to JPG format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your vectors into clean JPG images." },
      { title: "Save as JPG", desc: "Download your converted JPG images individually or together." }
    ],
    faqs: [
      {
        question: "What happens to the transparent background of my SVG?",
        answer: "Since JPG doesn't support transparency, any transparent areas in your SVG will be filled with a solid white background in the final JPG image."
      },
      {
        question: "Can I scale the SVG up during conversion?",
        answer: "Yes. Because SVGs are vectors, we can render them at any size without losing sharpness, resulting in a crisp JPG output."
      },
      {
        question: "Is this tool free for commercial logos?",
        answer: "Yes, Edita is 100% free for all users, including professionals converting brand assets and logos."
      }
    ]
  },
  "svg-to-webp": {
    title: "SVG to WebP Converter – Convert SVG to WebP Online Free",
    description: "Convert SVG vectors to WebP format for free. Fast, secure, and private browser-based image converter with no cloud uploads.",
    keywords: ["svg to webp", "convert svg to webp", "svg to webp converter", "free vector converter", "online svg to webp"],
    canonical: "/tools/svg-to-webp",
    toolTitle: "SVG to WebP",
    toolDescription: "Efficiently convert SVG vector images to WebP format directly in your browser.",
    howItWorksSteps: [
      { title: "Select SVGs", desc: "Upload the SVG vector files you want to convert to WebP format." },
      { title: "Fast Processing", desc: "Wait a split second as we transform your vectors into modern WebP images." },
      { title: "Save as WebP", desc: "Download your converted WebP images individually or together." }
    ],
    faqs: [
      {
        question: "Is WebP better than PNG for SVG conversion?",
        answer: "Yes, typically WebP provides much smaller file sizes than PNG while still supporting the full transparency of your original SVG."
      },
      {
        question: "Will my vector look blurry after converting to WebP?",
        answer: "No. We render the SVG at high resolution before encoding it to WebP, ensuring your icons and illustrations remain sharp."
      },
      {
        question: "Can I batch convert SVGs to WebP?",
        answer: "Yes. You can upload multiple SVG files and convert them all to WebP in a single, secure browser session."
      }
    ]
  },
  "mp4-to-mp3": {
    title: "MP4 to MP3 Converter – Extract Audio from Video Free",
    description: "Convert MP4 videos to MP3 audio online for free. Fast, private audio extraction directly in your browser using FFmpeg WASM.",
    keywords: ["mp4 to mp3", "extract audio from video", "video to mp3 converter", "free mp4 to mp3 online", "video audio extractor"],
    canonical: "/tools/mp4-to-mp3",
    toolTitle: "MP4 to MP3",
    toolDescription: "Extract high-quality audio tracks from your MP4 video files instantly.",
    howItWorksSteps: [
      { title: "Upload Video", desc: "Select the MP4 video file you want to extract audio from." },
      { title: "Extract Audio", desc: "Our tool uses local FFmpeg processing to pull the audio track safely." },
      { title: "Save MP3", desc: "Download your high-bitrate MP3 file and enjoy your audio." }
    ],
    faqs: [
      {
        question: "What audio bitrate is used for the MP3 extraction?",
        answer: "We typically extract audio at a high quality (usually 192kbps or higher, depending on the source) to ensure your music and dialogue sound great."
      },
      {
        question: "Can I extract audio from very long MP4 videos?",
        answer: "Yes, you can. However, since the processing happens in your browser's memory, very long or high-bitrate videos might take longer to process and require more RAM."
      },
      {
        question: "Is my video uploaded to a server to extract the audio?",
        answer: "No. We use FFmpeg compiled to WebAssembly, which allows your browser to do all the heavy lifting locally. Your video never leaves your computer."
      }
    ]
  },
  "qr-code-generator": {
    title: "QR Code Generator – Create Free Custom QR Codes Online",
    description: "Generate custom QR codes for free. Fast, private, and 100% browser-based QR code generator. Customize colors, styles, and download as PNG or JPG.",
    keywords: ["qr code generator", "free qr code generator", "generate qr code online", "custom qr code creator", "private qr code generator"],
    canonical: "/tools/qr-code-generator",
    toolTitle: "QR Code Generator",
    toolDescription: "Create custom, high-quality QR codes instantly in your browser for URLs, text, and more.",
    howItWorksSteps: [
      { title: "Enter Content", desc: "Type or paste the URL or text you want to encode into your QR code." },
      { title: "Customize Design", desc: "Change colors, adjust corners, and choose between square or rounded modules." },
      { title: "Download & Use", desc: "Export your custom QR code as a high-resolution PNG or JPG file instantly." }
    ],
    faqs: [
      {
        question: "Is it free to create QR codes here?",
        answer: "Yes, Edita's QR Code Generator is 100% free with no hidden costs, limits, or account requirements. You can generate as many codes as you need."
      },
      {
        question: "Do these QR codes ever expire?",
        answer: "No. The QR codes you generate are static, meaning the data is encoded directly into the pattern. They will work forever as long as the destination URL or content remains valid."
      },
      {
        question: "Can I customize the look of my QR code?",
        answer: "Absolutely. You can change the foreground and background colors, use transparent backgrounds for PNGs, and choose between sharp square or soft rounded modules to match your brand."
      },
      {
        question: "Is my data privacy protected?",
        answer: "Total privacy is our priority. Your text or URLs are processed entirely in your browser memory to generate the QR code. We never see or store the data you encode."
      }
    ]
  }
};

export const STATIC_METADATA = {
  home: {
    title: "Edita – Free, Private Online File Tools",
    description: "Fast, private, and browser-based file tools. Compress PDFs, convert images, extract video audio, and more—all without your files ever leaving your device.",
    keywords: ["online file tools", "private pdf editor", "browser-based converter", "free file editor no signup", "local file processing"],
    canonical: "/"
  },
  tools: {
    title: "All Online File Tools – PDF, Image & Video | Edita",
    description: "Browse our collection of free, private online tools. Compress, convert, and edit your files securely right in your web browser.",
    keywords: ["file tools list", "pdf converters", "image optimizers", "video tools", "free online utilities"],
    canonical: "/tools"
  },
  "how-it-works": {
    title: "How Edita Works – Private & Local File Processing",
    description: "Learn how Edita processes your files locally in your browser using WASM technology. Your data never touches our servers, ensuring 100% privacy.",
    keywords: ["how it works", "wasm file processing", "private file editing", "local browser tools", "edita technology"],
    canonical: "/how-it-works"
  },
  "why-us": {
    title: "Why Choose Edita? – Fast, Secure & Free File Tools",
    description: "Discover why Edita is the safest choice for your file editing needs. No uploads, no storage, no registration—just fast, private tools.",
    keywords: ["why choose edita", "secure file tools", "privacy-first converter", "no upload file editor", "free private tools"],
    canonical: "/why-us"
  },
  privacy: {
    title: "Privacy Policy – Your Files Never Leave Your Device",
    description: "Read our privacy policy and learn how we protect your data by processing everything locally. 100% privacy with zero server uploads.",
    keywords: ["privacy policy", "data security", "no server upload", "local processing privacy"],
    canonical: "/privacy"
  },
  terms: {
    title: "Terms of Service | Edita",
    description: "The terms and conditions for using Edita.tools. Simple, transparent, and user-friendly terms for our free online tools.",
    keywords: ["terms of service", "user agreement", "legal terms"],
    canonical: "/terms"
  }
};
