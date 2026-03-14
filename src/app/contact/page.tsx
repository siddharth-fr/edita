'use client';

import { Mail, MessageSquare, Globe, Send } from 'lucide-react';
import { CardFace } from '@/components/ui/HeroCardGrid';

export default function ContactPage() {
  return (
    <main
      className="flex-1 flex flex-col items-center w-full pb-28 pt-28 relative overflow-x-clip"
      style={{
        background: '#FAFBFF',
      }}
    >
      {/* ── Deep-space ambient background ── */}
      <div className="pointer-events-none select-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 35%, #F0F4FF 0%, #F7F5FF 35%, #FAFBFF 70%, #FAFBFF 100%)',
          }}
        />
        <div
          className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(199,210,255,0.15) 0%, rgba(167,240,198,0.08) 45%, transparent 72%)',
            filter: 'blur(2px)',
          }}
        />
      </div>

      <section className="w-full max-w-5xl px-4 sm:px-8 mt-12 mb-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-0">
          
          {/* Static Floating Cards decorating the Title */}
          <div className="absolute -left-12 sm:-left-32 lg:-left-56 top-[-40px] sm:top-[-60px] lg:top-[-100px] -rotate-12 opacity-60 sm:opacity-60 lg:opacity-75 scale-[0.55] sm:scale-75 lg:scale-105 origin-center pointer-events-none -z-10" style={{ width: 140, filter: 'blur(0.5px)' }}>
            <CardFace label="Direct Line" category="SUPPORT" gradient="linear-gradient(135deg,#F5F9FF,#E6F0FF)" size={140} />
          </div>
          <div className="absolute -right-12 sm:-right-32 lg:-right-56 top-[-20px] sm:top-[-40px] lg:top-[-80px] rotate-12 opacity-60 sm:opacity-70 lg:opacity-85 scale-[0.6] sm:scale-75 lg:scale-105 origin-center pointer-events-none -z-10" style={{ width: 125, filter: 'blur(0px)' }}>
            <CardFace label="Feedback" category="COMMUNITY" gradient="linear-gradient(135deg,#F3FFF7,#E2FBEA)" size={125} />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <div
              className="inline-flex items-center gap-2 mb-6"
              style={{
                padding: '6px 14px',
                borderRadius: 999,
                border: '1px solid rgba(52, 211, 153, 0.25)',
                background: 'rgba(197, 255, 234, 0.08)',
                color: '#065F46',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              <span>Get in Touch</span>
            </div>
            <h1 style={{
              margin: '0 0 18px',
              fontFamily: 'var(--font-display), sans-serif',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              fontSize: 'clamp(38px, 6vw, 48px)',
              color: '#0C0F17',
            }}>
              Contact Us
            </h1>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: '#6B7280',
              fontWeight: 400,
            }}>
              Have questions or suggestions? We're here to help. Reach out to the Edita team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div 
              className="p-8 rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col gap-4 group hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-[14px] bg-emerald-50 flex items-center justify-center text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                <Mail size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Email Support</h3>
                <p className="text-gray-500 text-[15px] mb-3">Questions about tools or technical issues?</p>
                <a href="mailto:support@edita.com" className="text-emerald-600 font-semibold hover:underline decoration-2 underline-offset-4">support@edita.com</a>
              </div>
            </div>

            <div 
              className="p-8 rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col gap-4 group hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-[14px] bg-blue-50 flex items-center justify-center text-blue-600 transition-transform duration-300 group-hover:scale-110">
                <MessageSquare size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Feedback & Features</h3>
                <p className="text-gray-500 text-[15px] mb-3">Want to see a new tool or suggest an improvement?</p>
                <a href="mailto:hello@edita.com" className="text-blue-600 font-semibold hover:underline decoration-2 underline-offset-4">hello@edita.com</a>
              </div>
            </div>

            <div 
              className="p-8 rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col gap-4 group hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-[14px] bg-purple-50 flex items-center justify-center text-purple-600 transition-transform duration-300 group-hover:scale-110">
                <Globe size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Partnerships</h3>
                <p className="text-gray-500 text-[15px] mb-3">Interested in collaboration or enterprise queries?</p>
                <a href="mailto:partners@edita.com" className="text-purple-600 font-semibold hover:underline decoration-2 underline-offset-4">partners@edita.com</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="order-1 lg:order-2 p-8 sm:p-10 rounded-[32px] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-gray-800 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full h-14 px-5 rounded-[16px] bg-white border border-gray-100 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-gray-800 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full h-14 px-5 rounded-[16px] bg-white border border-gray-100 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-gray-800 ml-1">Message</label>
                <textarea 
                  placeholder="How can we help you?"
                  rows={5}
                  className="w-full px-5 py-4 rounded-[16px] bg-white border border-gray-100 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 outline-none transition-all placeholder:text-gray-400 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full h-14 rounded-[16px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[16px] flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(5,150,105,0.25)] transition-all active:scale-[0.98] group"
              >
                Send Message
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>

      </section>
    </main>
  );
}
