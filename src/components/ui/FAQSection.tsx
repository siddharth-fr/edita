'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div
      className={`group relative transition-all duration-300 rounded-[24px] border overflow-hidden ${isOpen
          ? 'bg-white border-emerald-500/30 shadow-[0_20px_50px_rgba(16,185,129,0.1)] -translate-y-1'
          : 'bg-white border-slate-200/60 hover:border-emerald-500/20 hover:bg-slate-50/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:-translate-y-0.5'
        }`}
    >
      <button
        onClick={onClick}
        className="w-full px-5 sm:px-8 py-6 sm:py-7 flex items-start gap-4 sm:gap-6 text-left transition-all duration-200"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <h3 className={`text-lg font-semibold tracking-tight transition-colors duration-200 leading-tight ${isOpen ? 'text-emerald-900' : 'text-slate-800'
            }`}>
            {question}
          </h3>

          <div
            className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'
              }`}
          >
            <div className="overflow-hidden">
              <p className="text-slate-600 leading-relaxed text-[16px] font-normal pb-1">
                {answer}
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-1.5 transition-all duration-500 shrink-0 ${isOpen ? 'rotate-180 text-emerald-500' : 'text-slate-400 group-hover:text-emerald-500'
          }`}>
          <ChevronDown size={24} strokeWidth={2} />
        </div>
      </button>

      {/* Subtle ambient glow for open item */}
      {isOpen && (
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      )}
    </div>
  );
};

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQ[];
  title?: string;
  subtitle?: string;
}

export const HOME_FAQS: FAQ[] = [
  {
    question: "Is Edita really free to use?",
    answer: "Yes, Edita is 100% free. You can compress PDFs, convert images, and use all our browser-based file tools without any subscription or hidden fees. We don't even require a sign-up—just fast, private tools for everyone.",
  },
  {
    question: "How does Edita ensure my file privacy?",
    answer: "Unlike other online file tools, Edita processes everything locally in your browser using WebAssembly. This means your files are never uploaded to any server. Your sensitive data stays on your device, ensuring 100% privacy and security for all your documents.",
  },
  {
    question: "Do I need to install any software to use these tools?",
    answer: "No software installation is required. Edita is a suite of web-based tools that run directly in any modern web browser. Simply visit our site and start editing your files instantly, no matter your operating system.",
  },
  {
    question: "Is there a file size limit for processing?",
    answer: "Since your files are processed locally on your machine, there are no traditional 'upload' limits. The performance depends on your computer's resources, but most common file sizes for PDFs and images (even large ones) are handled easily and quickly by our local engine.",
  },
  {
    question: "Which file formats does Edita support?",
    answer: "We currently support a wide range of popular formats including PDF, JPG, PNG, WebP, MP4, MP3, and Word (.docx). We are constantly adding new secure file tools and conversion options to our collection.",
  },
  {
    question: "Can I use Edita tools offline?",
    answer: "Once the website and tools are loaded, many of our utilities can work without an active internet connection because the processing logic is executed entirely on your device. This is one of the many benefits of private, local file tools.",
  },
  {
    question: "Why is Edita faster than other online converters?",
    answer: "Edita is faster because it eliminates the time-consuming steps of uploading your files to a cloud server and downloading the results. The computation happens immediately in your browser, saving you bandwidth and frustration.",
  },
  {
    question: "Are these tools secure for business and legal documents?",
    answer: "Absolutely. Because Edita follows a strict 'no-upload' policy, your private business contracts and legal documents never leave your local environment. This makes it the most secure choice for professionals who handle sensitive information.",
  }
];

export default function FAQSection({ items, title, subtitle }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayItems = items || HOME_FAQS;

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-32 relative">
      <div className="text-center mb-16">
        <h2 style={{
          margin: '0 0 16px',
          fontFamily: 'var(--font-display), sans-serif',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          fontSize: 'clamp(32px, 5vw, 42px)',
          color: '#0C0F17',
        }}>
          {title || "Frequently Asked"} <span style={{
            background: 'linear-gradient(128deg, #34D399 0%, #059669 65%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>{title ? "" : "Questions"}</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          {subtitle || "Everything you need to know about our private, browser-based file tools."}
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full">
        {displayItems.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="mt-16 text-center text-sm text-slate-400">
        <p>Still have questions? Contact us or check our <a href="/how-it-works" className="text-emerald-600 font-medium hover:underline">How it Works</a> page.</p>
      </div>
    </section>
  );
}
