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
  },
  "image-color-palette-generator": {
    title: "Image Color Palette Generator – Extract Colors from Photos Free",
    description: "Generate a beautiful color palette from any image online for free. Fast, private, browser-based color extraction. Perfect for designers and artists.",
    keywords: ["color palette generator", "extract colors from image", "image color picker", "photo palette creator", "free design tool"],
    canonical: "/tools/image-color-palette-generator",
    toolTitle: "Image Color Palette",
    toolDescription: "Create a stunning color palette from your images instantly in your browser.",
    howItWorksSteps: [
      { title: "Upload Image", desc: "Select a photo or graphic from your device to extract its color palette." },
      { title: "Auto-Extract", desc: "Our local engine analyzes the image and identifies dominant colors instantly." },
      { title: "Copy Colors", desc: "Click any color to copy its HEX or RGB code directly to your clipboard." }
    ],
    faqs: [
      {
        question: "How does the color extraction work?",
        answer: "Our tool uses a browser-based quantization algorithm to analyze the pixels in your image and identify the most dominant and visually representative colors."
      },
      {
        question: "Is my image uploaded to a server?",
        answer: "No. Like all Edita tools, the color extraction happens entirely in your browser. Your images never leave your device, ensuring total privacy."
      },
      {
        question: "Can I download the extracted palette?",
        answer: "Currently, you can copy individual color codes. We are working on a feature to download the entire palette as a CSS or JSON file."
      }
    ]
  },
  "sip-calculator": {
    title: "SIP Calculator – Calculate Mutual Fund SIP Returns Online",
    description: "Calculate your Systematic Investment Plan (SIP) returns with our free online SIP calculator. Estimate future wealth based on monthly investments and expected returns.",
    keywords: ["sip calculator", "mutual fund calculator", "investment returns calculator", "future wealth calculator", "sip interest calculator"],
    canonical: "/tools/sip-calculator",
    toolTitle: "SIP Calculator",
    toolDescription: "Estimate the potential returns on your Systematic Investment Plans (SIP) instantly.",
    howItWorksSteps: [
      { title: "Monthly Investment", desc: "Enter the amount you plan to invest every month in your SIP." },
      { title: "Set Duration", desc: "Specify the number of years you intend to keep your investment active." },
      { title: "Expected Return", desc: "Enter the expected annual rate of return (%) for your investment." }
    ],
    faqs: [
      {
        question: "What is a SIP Calculator?",
        answer: "A SIP (Systematic Investment Plan) calculator is a simple tool that allows individuals to get an idea of the returns on their mutual fund investments made through SIP."
      },
      {
        question: "How does the SIP calculation work?",
        answer: "The calculator uses the formula: FV = P × ({[1 + i]^n - 1} / i) × (1 + i), where FV is future value, P is monthly investment, i is periodic rate of interest, and n is number of payments."
      },
      {
        question: "Is this calculator accurate?",
        answer: "The calculator provides estimates based on your inputs. Actual mutual fund returns may vary based on market performance and fund-specific factors."
      }
    ]
  },
  "compound-interest-calculator": {
    title: "Compound Interest Calculator – Calculate Future Value Online",
    description: "Calculate the future value of your investments with compound interest. Use our free tool to see how your money grows with compounding over time.",
    keywords: ["compound interest calculator", "future value calculator", "compounding calculator", "investment growth calculator", "interest on interest"],
    canonical: "/tools/compound-interest-calculator",
    toolTitle: "Compound Interest Calculator",
    toolDescription: "Visualize how your investments grow over time with the power of compounding.",
    howItWorksSteps: [
      { title: "Initial Investment", desc: "Enter the starting amount or principal of your investment." },
      { title: "Set Rate & Time", desc: "Specify the annual interest rate and the number of years you'll stay invested." },
      { title: "Compounding Frequency", desc: "Choose how often interest is added—monthly, quarterly, or yearly." }
    ],
    faqs: [
      {
        question: "What is compound interest?",
        answer: "Compound interest is interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods."
      },
      {
        question: "How is it different from simple interest?",
        answer: "Simple interest is only calculated on the principal amount, while compound interest is calculated on the principal plus the interest that has already been added."
      }
    ]
  },
  "fd-calculator": {
    title: "FD Calculator – Calculate Fixed Deposit Returns Online",
    description: "Calculate your Fixed Deposit (FD) maturity amount and interest earned with our free online calculator. Plan your savings effectively.",
    keywords: ["fd calculator", "fixed deposit calculator", "fd interest calculator", "maturity amount calculator", "bank fd returns"],
    canonical: "/tools/fd-calculator",
    toolTitle: "Fixed Deposit Calculator",
    toolDescription: "Quickly estimate the maturity value and interest of your bank fixed deposits.",
    howItWorksSteps: [
      { title: "Deposit Amount", desc: "Enter the amount you wish to deposit into the fixed deposit scheme." },
      { title: "Interest Rate", desc: "Enter the annual interest rate offered by the bank or financial institution." },
      { title: "Tenure", desc: "Specify the duration of the deposit in years or months." }
    ],
    faqs: [
      {
        question: "What is a Fixed Deposit?",
        answer: "A Fixed Deposit (FD) is a financial instrument where you invest a sum of money for a fixed tenure at a pre-determined interest rate."
      },
      {
        question: "How is interest calculated on FD?",
        answer: "Most banks use quarterly compounding for FD interest calculations, though it can vary based on the scheme."
      }
    ]
  },
  "mutual-fund-calculator": {
    title: "Mutual Fund Calculator – Estimate Investment Returns",
    description: "Estimate the growth of your mutual fund investments. Calculate returns for both SIP and Lumpsum investments easily.",
    keywords: ["mutual fund calculator", "mf returns calculator", "investment estimator", "sip lumpsum calculator", "fund growth"],
    canonical: "/tools/mutual-fund-calculator",
    toolTitle: "Mutual Fund Calculator",
    toolDescription: "Project the potential growth of your mutual fund investments based on historical trends.",
    howItWorksSteps: [
      { title: "Investment Type", desc: "Choose between a one-time Lumpsum investment or a recurring SIP." },
      { title: "Return Rate", desc: "Select an expected annual return percentage based on the fund type." },
      { title: "Duration", desc: "Enter the number of years you plan to hold your mutual fund units." }
    ],
    faqs: [
      {
        question: "Why use a mutual fund calculator?",
        answer: "It helps you set financial goals by showing how much you need to invest to reach a specific target amount."
      }
    ]
  },
  "ppf-calculator": {
    title: "PPF Calculator – Plan Public Provident Fund Returns",
    description: "Calculate your PPF maturity amount and interest with our free tool. Plan your long-term tax-saving investments accurately.",
    keywords: ["ppf calculator", "public provident fund", "ppf interest calculator", "ppf maturity value", "tax saving investment"],
    canonical: "/tools/ppf-calculator",
    toolTitle: "PPF Calculator",
    toolDescription: "Plan your long-term savings and tax benefits with our Public Provident Fund calculator.",
    howItWorksSteps: [
      { title: "Annual Deposit", desc: "Enter the amount you plan to deposit in your PPF account each year." },
      { title: "Current Interest", desc: "The calculator uses the current government-notified PPF interest rate." },
      { title: "Maturity Period", desc: "PPF has a mandatory lock-in of 15 years, which can be extended." }
    ],
    faqs: [
      {
        question: "What is PPF?",
        answer: "Public Provident Fund (PPF) is a popular long-term savings-cum-tax-saving instrument backed by the Government of India."
      }
    ]
  },
  "rd-calculator": {
    title: "RD Calculator – Calculate Recurring Deposit Maturity Online",
    description: "Calculate the interest and maturity amount for your Recurring Deposits (RD) with our easy-to-use calculator.",
    keywords: ["rd calculator", "recurring deposit calculator", "rd interest calculator", "rd maturity amount", "monthly savings"],
    canonical: "/tools/rd-calculator",
    toolTitle: "RD Calculator",
    toolDescription: "See how your monthly savings grow in a recurring deposit account.",
    howItWorksSteps: [
      { title: "Monthly Deposit", desc: "Enter the fixed amount you will deposit every month." },
      { title: "Interest Rate", desc: "Enter the annual interest rate provided for the RD account." },
      { title: "Duration", desc: "Select the total number of months or years for the deposit." }
    ],
    faqs: [
      {
        question: "How does an RD work?",
        answer: "In a Recurring Deposit, you invest a fixed amount every month for a specific period and earn interest at a fixed rate."
      }
    ]
  },
  "standard-calculator": {
    title: "Standard Calculator – Free Online Basic Math Tool",
    description: "Perform basic mathematical operations like addition, subtraction, multiplication, and division with our free online calculator. Simple, fast, and private.",
    keywords: ["standard calculator", "basic calculator", "online calculator", "addition calculator", "subtraction tool"],
    canonical: "/tools/standard-calculator",
    toolTitle: "Standard Calculator",
    toolDescription: "A simple and efficient tool for your everyday mathematical calculations.",
    howItWorksSteps: [
      { title: "Enter Numbers", desc: "Use the keypad or your keyboard to enter the numbers for your calculation." },
      { title: "Select Operation", desc: "Choose the mathematical operation you want to perform (+, -, *, /)." },
      { title: "Get Result", desc: "The result is displayed instantly as you type or press the equal sign." }
    ],
    faqs: [
      {
        question: "Is this calculator suitable for complex math?",
        answer: "This is a standard calculator designed for basic arithmetic. For calculus or logarithms, please use our specialized tools."
      }
    ]
  },
  "differentiation-calculator": {
    title: "Differentiation Tool – Calculate Derivatives Online Free",
    description: "Calculate derivatives of mathematical expressions instantly. Use our free differentiation tool for calculus homework and complex math problems.",
    keywords: ["differentiation calculator", "derivative calculator", "calculus tool", "calculate derivatives", "math solver"],
    canonical: "/tools/differentiation-calculator",
    toolTitle: "Differentiation Tool",
    toolDescription: "Find the derivative of any mathematical function with step-by-step-like speed.",
    howItWorksSteps: [
      { title: "Enter Function", desc: "Input the mathematical expression you want to differentiate (e.g., x^2 + 2x)." },
      { title: "Variable Selection", desc: "Specify the variable to differentiate with respect to (usually x)." },
      { title: "Calculate", desc: "Get the resulting derivative expression instantly." }
    ],
    faqs: [
      {
        question: "Can it handle trigonometric functions?",
        answer: "Yes, our tool can differentiate various functions including polynomials, trigonometric, exponential, and logarithmic expressions."
      }
    ]
  },
  "integration-calculator": {
    title: "Integration Tool – Evaluate Integrals Online Free",
    description: "Evaluate definite and indefinite integrals of mathematical functions. A fast and secure tool for calculus students and professionals.",
    keywords: ["integration calculator", "integral calculator", "evaluate integrals", "calculus solver", "math integration tool"],
    canonical: "/tools/integration-calculator",
    toolTitle: "Integration Tool",
    toolDescription: "Solve complex integration problems quickly in your browser.",
    howItWorksSteps: [
      { title: "Enter Function", desc: "Input the function you want to integrate (e.g., 2x + 5)." },
      { title: "Integral Type", desc: "Choose between indefinite or definite integration (with limits)." },
      { title: "Result", desc: "View the integrated result, including the constant of integration for indefinite integrals." }
    ],
    faqs: [
      {
        question: "Does it support double or triple integrals?",
        answer: "Currently, the tool supports single variable integration. We are working on adding multi-variable support in the future."
      }
    ]
  },
  "logarithm-calculator": {
    title: "Logarithm Tool – Calculate Logs for Any Base Online",
    description: "Calculate logarithms for any base easily. Our free tool supports natural logs (ln), common logs (log10), and custom base logarithms.",
    keywords: ["logarithm calculator", "log tool", "calculate logs", "natural log calculator", "log base calculator"],
    canonical: "/tools/logarithm-calculator",
    toolTitle: "Logarithm Tool",
    toolDescription: "Find the logarithm of any number with any base instantly.",
    howItWorksSteps: [
      { title: "Enter Number", desc: "Input the number you want to find the logarithm of." },
      { title: "Set Base", desc: "Specify the base of the logarithm (e.g., 10, e, or a custom number)." },
      { title: "Get Log", desc: "The calculated logarithm value is displayed instantly." }
    ],
    faqs: [
      {
        question: "What bases are supported?",
        answer: "You can calculate logarithms for any positive base except 1. Common bases like 10 (log) and e (ln) are pre-filled as options."
      }
    ]
  },
  "scientific-calculator": {
    title: "Scientific Calculator – Free Online Advanced Math Tool",
    description: "Perform advanced mathematical operations including trigonometry, logarithms, and exponents with our free scientific calculator.",
    keywords: ["scientific calculator", "advanced calculator", "trigonometry tool", "online math calculator"],
    canonical: "/tools/scientific-calculator",
    toolTitle: "Scientific Calculator",
    toolDescription: "A powerful tool for complex mathematical and scientific calculations.",
    howItWorksSteps: [
      { title: "Enter Expression", desc: "Type your mathematical expression using functions like sin, cos, tan, log, etc." },
      { title: "Choose Format", desc: "Select between Radian and Degree modes for trigonometric calculations." },
      { title: "Solve", desc: "Get highly accurate results for your advanced calculations instantly." }
    ],
    faqs: [
      {
        question: "Does it support radians and degrees?",
        answer: "Yes, you can easily toggle between radian and degree modes for all trigonometric functions."
      }
    ]
  },
  "percentage-calculator": {
    title: "Percentage Calculator – Calculate Percentages & Discounts",
    description: "Easily calculate percentages, discount amounts, interest increases, and decreases with our free online tool.",
    keywords: ["percentage calculator", "calculate percent", "discount calculator", "increase decrease calculator"],
    canonical: "/tools/percentage-calculator",
    toolTitle: "Percentage Calculator",
    toolDescription: "Quickly solve percentage-based problems like discounts, markups, and differences.",
    howItWorksSteps: [
      { title: "Choose Type", desc: "Select the type of percentage problem you want to solve (e.g., 'X is what % of Y')." },
      { title: "Input Values", desc: "Enter the numbers relevant to your specific percentage calculation." },
      { title: "Instant Result", desc: "View the calculated percentage or final amount immediately." }
    ],
    faqs: [
      {
        question: "Can I use this for sales tax calculations?",
        answer: "Absolutely. You can use the 'Percentage Increase' option to quickly calculate final prices including tax."
      }
    ]
  },
  "fraction-calculator": {
    title: "Fraction Calculator – Add, Subtract & Simplify Fractions",
    description: "Perform arithmetic operations on fractions and simplify them to the lowest terms. Supports mixed and improper fractions.",
    keywords: ["fraction calculator", "simplify fractions", "add fractions online", "mixed fractions tool"],
    canonical: "/tools/fraction-calculator",
    toolTitle: "Fraction Calculator",
    toolDescription: "Add, subtract, multiply, and divide fractions easily with simplification.",
    howItWorksSteps: [
      { title: "Enter Fractions", desc: "Input your two fractions (e.g., 1/2 and 3/4) into the fields." },
      { title: "Select Operation", desc: "Choose whether to add, subtract, multiply, or divide the fractions." },
      { title: "Simplify", desc: "The tool automatically simplifies the resulting fraction to its lowest terms." }
    ],
    faqs: [
      {
        question: "Does it handle mixed numbers?",
        answer: "Yes, you can input mixed numbers, and the calculator will convert them as needed to find the result."
      }
    ]
  },
  "equation-solver": {
    title: "Equation Solver – Solve Linear & Algebraic Equations Online",
    description: "Find the value of variables in linear and simple algebraic equations instantly with our free equation solver.",
    keywords: ["equation solver", "solve for x", "algebra solver", "linear equation tool"],
    canonical: "/tools/equation-solver",
    toolTitle: "Equation Solver",
    toolDescription: "Solve mathematical equations and find the value of unknown variables.",
    howItWorksSteps: [
      { title: "Input Equation", desc: "Type your equation into the solver (e.g., 2x + 5 = 15)." },
      { title: "Solve", desc: "The engine solves the equation step-by-step or provides the final variable values." },
      { title: "Get Answer", desc: "Review the roots or solutions found for your algebraic expression." }
    ],
    faqs: [
      {
        question: "What types of equations can it solve?",
        answer: "Currently, we focus on linear equations and basic algebraic expressions. For quadratic equations, we recommend using our specialized Quadratic Solver."
      }
    ]
  },
  "quadratic-solver": {
    title: "Quadratic Equation Solver – Find Roots & Discriminants",
    description: "Solve quadratic equations of the form ax² + bx + c = 0. Find real and complex roots, vertex, and disciminant instantly.",
    keywords: ["quadratic solver", "quadratic formula calculator", "roots of equation", "solve ax2+bx+c"],
    canonical: "/tools/quadratic-solver",
    toolTitle: "Quadratic Equation Solver",
    toolDescription: "Easily find solutions for quadratic equations and visualize their properties.",
    howItWorksSteps: [
      { title: "Enter Coefficients", desc: "Input the 'a', 'b', and 'c' values of your quadratic equation." },
      { title: "Calculate", desc: "Our engine uses the quadratic formula to find the roots and vertex." },
      { title: "Review Roots", desc: "See both real and complex roots, along with the step-by-step discriminant calculation." }
    ],
    faqs: [
      {
        question: "Does it handle complex roots?",
        answer: "Yes. If the discriminant is negative, the solver will provide the complex solutions in 'a + bi' format."
      }
    ]
  },
  "matrix-calculator": {
    title: "Matrix Calculator – Determinants, Inverses & Operations",
    description: "Perform matrix calculations including addition, multiplication, determinants, and inverses for square and rectangular matrices.",
    keywords: ["matrix calculator", "matrix determinant", "matrix inverse", "linear algebra tool"],
    canonical: "/tools/matrix-calculator",
    toolTitle: "Matrix Calculator",
    toolDescription: "A comprehensive tool for performing matrix algebra operations.",
    howItWorksSteps: [
      { title: "Define Dimensions", desc: "Choose the number of rows and columns for your matrices." },
      { title: "Input Data", desc: "Fill in the elements of the matrices for the calculation." },
      { title: "Select Operation", desc: "Choose to add, multiply, or find the determinant/inverse." }
    ],
    faqs: [
      {
        question: "What size matrices are supported?",
        answer: "While there's no hard limit, the interface is optimized for matrices up to 5x5 for clarity."
      }
    ]
  },
  "statistics-calculator": {
    title: "Statistics Calculator – Mean, Median, Mode & Std Dev",
    description: "Analyze datasets with our free statistics tool. Calculate mean, median, mode, variance, and standard deviation instantly.",
    keywords: ["statistics calculator", "mean median mode", "standard deviation tool", "stdev calculator"],
    canonical: "/tools/statistics-calculator",
    toolTitle: "Statistics Calculator",
    toolDescription: "Simplify data analysis with our comprehensive statistical calculator.",
    howItWorksSteps: [
      { title: "Input Dataset", desc: "Enter your numbers separated by commas or new lines." },
      { title: "Analyze", desc: "The tool automatically calculates all key descriptive statistics." },
      { title: "Review Results", desc: "See the dispersion, central tendency, and variance of your data." }
    ],
    faqs: [
      {
        question: "Does it calculate sample or population standard deviation?",
        answer: "Our tool provides both sample and population calculations to suit your specific statistical needs."
      }
    ]
  },
  "gcd-lcm-calculator": {
    title: "GCD & LCM Calculator – Find Factors & Multiples Online",
    description: "Calculate the Greatest Common Divisor (GCD) and Least Common Multiple (LCM) for multiple numbers instantly.",
    keywords: ["gcd calculator", "lcm calculator", "greatest common divisor", "least common multiple"],
    canonical: "/tools/gcd-lcm-calculator",
    toolTitle: "GCD & LCM Calculator",
    toolDescription: "Quickly find the common factors and multiples behind your numbers.",
    howItWorksSteps: [
      { title: "Enter Numbers", desc: "Provide two or more numbers separated by commas." },
      { title: "Calculate", desc: "Our engine finds the highest common factor and lowest common multiple." },
      { title: "View Results", desc: "The GCD and LCM are displayed instantly for your review." }
    ],
    faqs: [
      {
        question: "Can I find GCD for more than two numbers?",
        answer: "Yes, you can input a list of multiple numbers to find their collective GCD and LCM."
      }
    ]
  },
  "unit-converter": {
    title: "Unit Converter – Length, Weight, Temp & More Online",
    description: "Convert between various units of measurement including length, mass, temperature, and area with our free online tool.",
    keywords: ["unit converter", "metric to imperial", "convert units online", "length weight converter"],
    canonical: "/tools/unit-converter",
    toolTitle: "Unit Converter",
    toolDescription: "Easily switch between different systems of measurement for any value.",
    howItWorksSteps: [
      { title: "Select Category", desc: "Choose the type of measurement (e.g., Length, Mass, Volume)." },
      { title: "Set Units", desc: "Choose the 'from' and 'to' units for your conversion." },
      { title: "Enter Value", desc: "Type the amount you want to convert to see the result instantly." }
    ],
    faqs: [
      {
        question: "Which units are supported?",
        answer: "We support over 50+ units across categories like length, mass, temperature, volume, area, and speed."
      }
    ]
  },
  "bmi-calculator": {
    title: "BMI Calculator – Calculate Body Mass Index Free",
    description: "Check your Body Mass Index (BMI) and health category based on height and weight. Fast and private health tool.",
    keywords: ["bmi calculator", "body mass index", "health calculator", "weight category tool"],
    canonical: "/tools/bmi-calculator",
    toolTitle: "BMI Calculator",
    toolDescription: "Determine your BMI and understand your health classification.",
    howItWorksSteps: [
      { title: "Enter Height", desc: "Provide your height in centimeters or feet/inches." },
      { title: "Enter Weight", desc: "Provide your weight in kilograms or pounds." },
      { title: "Get BMI", desc: "See your calculated BMI score and health category (e.g., Normal, Overweight)." }
    ],
    faqs: [
      {
        question: "Is BMI an accurate measure of health?",
        answer: "BMI is a useful general screening tool but doesn't account for muscle mass vs. fat composition. Consult a professional for a detailed health analysis."
      }
    ]
  },
  "age-calculator": {
    title: "Age Calculator – Find Age in Years, Months & Days",
    description: "Calculate your exact age using your date of birth. See how many years, months, and days you have been alive.",
    keywords: ["age calculator", "calculate age from dob", "how old am i", "dob tool"],
    canonical: "/tools/age-calculator",
    toolTitle: "Age Calculator",
    toolDescription: "Determine exact age and time elapsed between any two dates.",
    howItWorksSteps: [
      { title: "Select Birth Date", desc: "Choose your date of birth from the calendar picker." },
      { title: "Compare Date", desc: "Set the comparison date (typically 'Today' by default)." },
      { title: "Result", desc: "See your age broken down into years, months, days, and even minutes." }
    ],
    faqs: [
      {
        question: "Can I calculate time between two historical dates?",
        answer: "Yes, you can change both the 'Start' and 'End' dates to calculate the duration between any two points in time."
      }
    ]
  },
  "binary-converter": {
    title: "Binary Converter – Decimal, Hex & Octal Tool Online",
    description: "Convert numbers between binary, decimal, hexadecimal, and octal systems instantly. Perfect for programmers and students.",
    keywords: ["binary converter", "hex to decimal", "binary to hex", "number system tool"],
    canonical: "/tools/binary-converter",
    toolTitle: "Binary Converter",
    toolDescription: "Easily translate values between different base number systems.",
    howItWorksSteps: [
      { title: "Choose Input Base", desc: "Select if you are entering a Decimal, Binary, or Hexadecimal value." },
      { title: "Enter Value", desc: "Type the number you wish to convert." },
      { title: "See All Outputs", desc: "The tool shows the value translated to all other major number systems simultaneously." }
    ],
    faqs: [
      {
        question: "What is the maximum number I can convert?",
        answer: "The tool handles standard 64-bit integer ranges, which covers almost all common computing needs."
      }
    ]
  },
  "random-generator": {
    title: "Random Number Generator – Sequence & List Picker",
    description: "Generate truly random numbers or pick from custom lists. Secure, private, and customizable randomizer tool.",
    keywords: ["random number generator", "list randomizer", "pick one tool", "random sequence creator"],
    canonical: "/tools/random-generator",
    toolTitle: "Random Number Generator",
    toolDescription: "Generate random values for games, research, or decision-making.",
    howItWorksSteps: [
      { title: "Set Range", desc: "Define the minimum and maximum numbers for your random generation." },
      { title: "Choose Quantity", desc: "Decide how many random numbers you need to generate at once." },
      { title: "Roll", desc: "Click the generate button to get your unique set of random values." }
    ],
    faqs: [
      {
        question: "Is this cryptographically secure?",
        answer: "We use standard browser-based PRNGs which are suitable for general use, games, and basic research, but not recommended for high-stakes cryptography."
      }
    ]
  },
  "roman-numerals": {
    title: "Roman Numeral Converter – Roman to Arabic & Arabic to Roman",
    description: "Convert standard numbers into Roman numerals and vice versa. Support for large numbers with proper formatting.",
    keywords: ["roman numeral converter", "arabic to roman", "convert numbers to roman", "roman to decimal"],
    canonical: "/tools/roman-numerals",
    toolTitle: "Roman Numeral Converter",
    toolDescription: "Translate between modern number systems and ancient Roman numerals.",
    howItWorksSteps: [
      { title: "Enter Input", desc: "Type either a standard number (Arabic) or a Roman numeral string (e.g., MC)." },
      { title: "Auto-Convert", desc: "The tool identifies the input type and provides the translation instantly." },
      { title: "Validate", desc: "Ensure your Roman numerals are correctly formatted according to standard rules." }
    ],
    faqs: [
      {
        question: "Up to what number does this converter work?",
        answer: "We support standard Roman numeral conventions up to 3,999 (MMMCMXCIX)."
      }
    ]
  },
  "loan-calculator": {
    title: "Loan Calculator – Estimate Monthly EMIs & Interest",
    description: "Calculate your monthly loan EMIs, total interest, and final repayment amount. Accurate and easy to use.",
    keywords: ["loan calculator", "emi calculator", "mortgage calculator", "interest estimator"],
    canonical: "/tools/loan-calculator",
    toolTitle: "Loan Calculator",
    toolDescription: "Plan your finances with accurate monthly installment estimates.",
    howItWorksSteps: [
      { title: "Enter Amount", desc: "Input the total loan principal you plan to borrow." },
      { title: "Set Rate", desc: "Specify the annual interest rate offered by the lender." },
      { title: "Choose Tenure", desc: "Select the repayment period in years." }
    ],
    faqs: [
      {
        question: "Does this include taxes or insurance?",
        answer: "This calculator focuses on the principal and interest components of your loan repayment."
      }
    ]
  },
  "discount-calculator": {
    title: "Discount Calculator – Calculate Savings & Final Price",
    description: "Quickly find the final price after discounts and see exactly how much you save with our free tool.",
    keywords: ["discount calculator", "sale price tool", "savings calculator", "percentage off"],
    canonical: "/tools/discount-calculator",
    toolTitle: "Discount Calculator",
    toolDescription: "Instantly see the value of any sale or percentage discount.",
    howItWorksSteps: [
      { title: "Original Price", desc: "Enter the base price before any discount is applied." },
      { title: "Discount Rate", desc: "Input the percentage off or fixed amount discount." },
      { title: "Calculate", desc: "See your final price and total savings immediately." }
    ],
    faqs: [
      {
        question: "Can I use it for tax calculations too?",
        answer: "Yes, you can treat tax as a 'negative' discount by entering it as a surcharge if needed."
      }
    ]
  },
  "margin-calculator": {
    title: "Margin Calculator – Calculate Gross Profit & Markup",
    description: "Analyze your business profitability by calculating margins, markups, and total profit from cost and revenue data.",
    keywords: ["margin calculator", "markup calculator", "profit tool", "business calculator"],
    canonical: "/tools/margin-calculator",
    toolTitle: "Margin Calculator",
    toolDescription: "Determine the profitability of your products with precision.",
    howItWorksSteps: [
      { title: "Enter Cost", desc: "Input the total cost spent on producing or acquiring the item." },
      { title: "Enter Revenue", desc: "Input the selling price or total revenue generated." },
      { title: "See Results", desc: "View the gross margin and markup percentages instantly." }
    ],
    faqs: [
      {
        question: "What is the difference between margin and markup?",
        answer: "Margin is the percentage of revenue that is profit, while markup is the percentage profit added to the cost."
      }
    ]
  },
  "sales-tax-calculator": {
    title: "Sales Tax Calculator – Add or Remove Sales Tax Online",
    description: "Calculate sales tax for any net amount. Add tax to find the gross total or remove it to find the base price.",
    keywords: ["sales tax calculator", "vat calculator", "gst calculator", "tax tool"],
    canonical: "/tools/sales-tax-calculator",
    toolTitle: "Sales Tax Calculator",
    toolDescription: "Easily handle tax calculations for any transaction.",
    howItWorksSteps: [
      { title: "Net Amount", desc: "Enter the amount before tax is applied." },
      { title: "Tax Rate", desc: "Specify the applicable sales tax percentage." },
      { title: "Get Total", desc: "See the tax amount and total gross price instantly." }
    ],
    faqs: [
      {
        question: "Does it work for GST and VAT?",
        answer: "Yes, you can use any tax rate percentage to calculate VAT, GST, or local sales tax."
      }
    ]
  },
  "pdf-viewer": {
    title: "PDF Viewer – Read, Search & Annotate PDFs Online Free",
    description: "View and annotate PDF files directly in your browser. Fast, private, and 100% free PDF viewer with search, zoom, and text selection. No uploads needed.",
    keywords: ["pdf viewer", "read pdf online", "pdf reader free", "browser pdf viewer", "annotate pdf", "search pdf", "private pdf reader"],
    canonical: "/tools/pdf-viewer",
    toolTitle: "PDF Viewer",
    toolDescription: "View, search, zoom, and annotate PDF files instantly in your browser. Completely free and private.",
    howItWorksSteps: [
      { title: "Upload PDF", desc: "Drag and drop your PDF file or click to browse. Files are cached locally for quick access." },
      { title: "Browse & Search", desc: "Scroll through pages, use the search bar to find text, zoom in and out, or switch view modes." },
      { title: "Annotate & Download", desc: "Highlight, underline, or draw on your PDF. Download the modified version with your annotations." }
    ],
    faqs: [
      {
        question: "Is it safe to view sensitive PDFs here?",
        answer: "Absolutely. Your PDF is processed entirely in your browser — it never leaves your device. The file is stored locally in memory and cached via IndexedDB for convenience."
      },
      {
        question: "Can I search for text within a PDF?",
        answer: "Yes. The PDF viewer includes a full-text search bar that highlights all matches on the document, with navigation between results."
      },
      {
        question: "How do I annotate or highlight a PDF?",
        answer: "Use the annotation sidebar to select tools like Highlight, Underline, Strikethrough, Pen, or shapes. Your annotations are rendered on top of the PDF."
      },
      {
        question: "Can I download the PDF after viewing?",
        answer: "Yes, you can download the original PDF or, after using editing features, download the modified version with changes applied."
      },
      {
        question: "Does the PDF stay in cache after I close it?",
        answer: "Yes, uploaded PDFs are stored in your browser's IndexedDB cache so you can reopen them quickly from the recent files list without re-uploading."
      }
    ]
  },
  "online-compiler": {
    title: "Online Compiler - Free Browser-based IDE | Edita",
    description: "Write, run, and test C, C++, Java, and Python code directly in your browser. A fast, private, and modern online compiler with a clean IDE interface.",
    keywords: ["online compiler", "browser ide", "python compiler", "c++ compiler", "java compiler", "free online ide"],
    canonical: "/tools/online-compiler",
    toolTitle: "Online Compiler",
    toolDescription: "Write, run, and test your code instantly in a modern, fully-featured browser IDE.",
    howItWorksSteps: [
      { title: "Select Language", desc: "Choose from C, C++, Java, or Python using the sidebar." },
      { title: "Write Code", desc: "Use the advanced editor with syntax highlighting, autocomplete, and error checking." },
      { title: "Run & Test", desc: "Execute your code instantly and view the output or errors in the built-in console." }
    ],
    faqs: [
      {
        question: "Which programming languages are supported?",
        answer: "Currently, our online compiler supports C, C++, Java, and Python. We plan to add more languages in the future."
      },
      {
        question: "Where does my code run?",
        answer: "Your code runs on a secure sandbox execution engine, meaning you don't need to install any compilers or interpreters locally on your device."
      },
      {
        question: "Can I save my code files?",
        answer: "Yes, you can download your active file directly to your device by clicking the download icon in the file explorer."
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
