import { PROGRAMMATIC_SEO } from '@/config/programmaticSeo';
import { MATRIX_SEO } from '@/config/programmaticSeoMatrix';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { Briefcase, Building2, GraduationCap, Camera, PenTool, Scale, Stethoscope, Users, Calculator, Home } from 'lucide-react';

export const metadata = constructMetadata({
  title: "Professional Solutions & Use Cases | Edita Tools",
  description: "Explore specialized offline file processing workflows for legal, medical, and creative industries. 100% private and secure.",
  canonical: "/use-cases"
});

const ALL_SEO = { ...PROGRAMMATIC_SEO, ...MATRIX_SEO };

// Icon mapping for industries
const industryIcons: Record<string, any> = {
  "Lawyers": Scale,
  "Accountants": Calculator,
  "Real Estate Agents": Home,
  "HR Managers": Users,
  "Students": GraduationCap,
  "Architects": Building2,
  "Clinics": Stethoscope,
  "Photographers": Camera,
  "Content Creators": PenTool,
  "Designers": Briefcase
};

export default function UseCasesDirectory() {
  // Organize data by industry
  const industries = [
    "Lawyers", "Accountants", "Real Estate Agents", "HR Managers", 
    "Students", "Architects", "Clinics", "Photographers", 
    "Content Creators", "Designers"
  ];

  return (
    <main className="flex-1 flex flex-col items-center w-full pb-32 pt-28 relative overflow-x-clip bg-white">
      {/* ── Background Glow ── */}
      <div className="pointer-events-none absolute top-0 inset-x-0 -z-10 h-[500px] overflow-hidden">
        <div
          className="absolute"
          style={{
            top: '0%', left: '50%',
            transform: 'translate(-50%, -10%)',
            width: 800, height: 400,
            background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.12) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      <div className="max-w-6xl w-full px-4 sm:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 font-display">
            Professional <span className="text-emerald-500">Solutions</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Discover tailored workflows designed for high-security environments. 
            All tools operate 100% locally in your browser—private, fast, and weightless.
          </p>
        </div>

        {/* ── Industry Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {industries.map((ind) => {
            const Icon = industryIcons[ind] || Briefcase;
            // Filter matrix links for this specific industry
            const relatedLinks = Object.values(MATRIX_SEO).filter(item => item.h1.includes(ind)).slice(0, 10);
            
            return (
              <div key={ind} className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] hover:border-emerald-200/50 transition-all duration-500 group relative overflow-hidden">
                {/* Subtle internal glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 font-display">{ind}</h2>
                    <p className="text-xs font-semibold text-emerald-500/80 uppercase tracking-wider mt-1">Specialized Suite</p>
                  </div>
                </div>

                <div className="space-y-3.5 relative z-10">
                  {relatedLinks.map((link) => (
                    <Link 
                      key={link.slug} 
                      href={`/use-cases/${link.slug}`}
                      className="text-[15px] text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all flex items-center gap-3 group/link"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/link:bg-emerald-400 group-hover/link:scale-125 transition-all" />
                      {link.h1}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                   <p className="text-[13px] text-slate-400 font-medium">
                     {ind} Workflow Solutions
                   </p>
                   <div className="text-xs font-bold text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                     SECURE WASM
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Footer CTA (Redesigned) ── */}
        <div className="mt-24 text-center py-20 px-8 border border-slate-100 rounded-[3rem] bg-gradient-to-b from-white to-slate-50/50 shadow-sm overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">Need a Generic Solution?</h3>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-medium">
              If your workflow isn't listed, our core tool suite handles 
              hundreds of other file combinations with the same privacy.
            </p>
            <Link 
              href="/tools" 
              className="px-10 py-4.5 bg-emerald-500 hover:bg-emerald-600 shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] text-white font-bold rounded-2xl transition-all inline-block hover:-translate-y-1"
            >
              Explore Full Toolset
            </Link>
          </div>
          {/* Decorative accents replaces the black block's glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-2xl h-40 bg-emerald-500/5 blur-[100px] rounded-full" />
        </div>
      </div>
    </main>
  );
}
