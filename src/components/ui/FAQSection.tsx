'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Zap, Globe, Lock, Cpu, MousePointerClick } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const FAQItem = ({ question, answer, isOpen, onClick, icon }: FAQItemProps) => {
  return (
    <div className="border-b border-slate-200/60 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start gap-4 text-left transition-all duration-200 group"
        aria-expanded={isOpen}
      >
        <div className={`mt-0.5 p-2 rounded-lg transition-colors duration-200 ${isOpen ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400 group-hover:text-slate-600'}`}>
          {icon}
        </div>
        <div className="flex-1 pr-8">
          <h3 className={`text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-emerald-700' : 'text-slate-800'}`}>
            {question}
          </h3>
          <div 
            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="overflow-hidden">
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {answer}
              </p>
            </div>
          </div>
        </div>
        <div className={`mt-1.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : 'text-slate-300'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Edita really free to use?",
      answer: "Yes, Edita is 100% free. You can compress PDFs, convert images, and use all our browser-based file tools without any subscription or hidden fees. We don't even require a sign-up—just fast, private tools for everyone.",
      icon: <Zap size={18} />
    },
    {
      question: "How does Edita ensure my file privacy?",
      answer: "Unlike other online file tools, Edita processes everything locally in your browser using WebAssembly. This means your files are never uploaded to any server. Your sensitive data stays on your device, ensuring 100% privacy and security for all your documents.",
      icon: <Shield size={18} />
    },
    {
      question: "Do I need to install any software to use these tools?",
      answer: "No software installation is required. Edita is a suite of web-based tools that run directly in any modern web browser. Simply visit our site and start editing your files instantly, no matter your operating system.",
      icon: <MousePointerClick size={18} />
    },
    {
      question: "Is there a file size limit for processing?",
      answer: "Since your files are processed locally on your machine, there are no traditional 'upload' limits. The performance depends on your computer's resources, but most common file sizes for PDFs and images (even large ones) are handled easily and quickly by our local engine.",
      icon: <Cpu size={18} />
    },
    {
      question: "Which file formats does Edita support?",
      answer: "We currently support a wide range of popular formats including PDF, JPG, PNG, WebP, MP4, MP3, and Word (.docx). We are constantly adding new secure file tools and conversion options to our collection.",
      icon: <Globe size={18} />
    },
    {
      question: "Can I use Edita tools offline?",
      answer: "Yes! Once the website and tools are loaded, many of our utilities can work without an active internet connection because the processing logic is executed entirely on your device. This is one of the many benefits of private, local file tools.",
      icon: <Lock size={18} />
    },
    {
      question: "Why is Edita faster than other online converters?",
      answer: "Edita is faster because it eliminates the time-consuming steps of uploading your files to a cloud server and downloading the results. The computation happens immediately in your browser, saving you bandwidth and frustration.",
      icon: <Zap size={18} />
    },
    {
      question: "Are these tools secure for business and legal documents?",
      answer: "Absolutely. Because Edita follows a strict 'no-upload' policy, your private business contracts and legal documents never leave your local environment. This makes it the most secure choice for professionals who handle sensitive information.",
      icon: <Shield size={18} />
    }
  ];

  return (
    <section className="w-full max-w-4xl px-4 sm:px-8 py-24 mb-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C0F17] tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Everything you need to know about our private, browser-based file tools.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm px-6 sm:px-10 py-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            icon={faq.icon}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-slate-400">
        <p>Still have questions? Contact us or check our <a href="/how-it-works" className="text-emerald-600 font-medium hover:underline">How it Works</a> page.</p>
      </div>
    </section>
  );
}
