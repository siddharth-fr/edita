import Link from 'next/link';
import { Briefcase, Building2, Calculator, Camera, GraduationCap, Home, PenTool, Scale, Stethoscope, Users } from 'lucide-react';

import { MATRIX_SEO } from '@/config/programmaticSeoMatrix';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Professional Solutions & Use Cases | Edita Tools',
  description:
    'Explore specialized offline file processing workflows for legal, medical, and creative industries. 100% private and secure.',
  canonical: '/use-cases',
});

const INDUSTRIES = [
  'Lawyers',
  'Accountants',
  'Real Estate Agents',
  'HR Managers',
  'Students',
  'Architects',
  'Clinics',
  'Photographers',
  'Content Creators',
  'Designers',
] as const;

const INDUSTRY_ICONS: Record<(typeof INDUSTRIES)[number], typeof Briefcase> = {
  Lawyers: Scale,
  Accountants: Calculator,
  'Real Estate Agents': Home,
  'HR Managers': Users,
  Students: GraduationCap,
  Architects: Building2,
  Clinics: Stethoscope,
  Photographers: Camera,
  'Content Creators': PenTool,
  Designers: Briefcase,
};

function getRelatedLinks(industry: string) {
  return Object.values(MATRIX_SEO)
    .filter((item) => item.h1.includes(industry))
    .slice(0, 10);
}

function IndustryCard({ industry }: { industry: (typeof INDUSTRIES)[number] }) {
  const Icon = INDUSTRY_ICONS[industry];
  const relatedLinks = getRelatedLinks(industry);

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:border-emerald-200/50 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] lg:p-10">
      <div className="absolute right-0 top-0 h-32 w-32 bg-emerald-500/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-8 flex items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 font-display">{industry}</h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-500/80">Specialized Suite</p>
        </div>
      </div>

      <div className="relative z-10 space-y-3.5">
        {relatedLinks.map((link) => (
          <Link
            key={link.slug}
            href={`/use-cases/${link.slug}`}
            className="group/link flex items-center gap-3 text-[15px] text-slate-500 transition-all hover:translate-x-1 hover:text-emerald-600"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-slate-200 transition-all group-hover/link:bg-emerald-400 group-hover/link:scale-125" />
            {link.h1}
          </Link>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-slate-50 pt-8">
        <p className="text-[13px] font-medium text-slate-400">{industry} Workflow Solutions</p>
        <div className="text-xs font-bold text-emerald-500 opacity-0 transition-opacity group-hover:opacity-100">
          SECURE WASM
        </div>
      </div>
    </div>
  );
}

export default function UseCasesDirectory() {
  return (
    <main className="relative flex w-full flex-1 flex-col items-center overflow-x-clip bg-white pb-32 pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] overflow-hidden">
        <div
          className="absolute"
          style={{
            top: '0%',
            left: '50%',
            transform: 'translate(-50%, -10%)',
            width: 800,
            height: 400,
            background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.12) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      <div className="max-w-6xl w-full px-4 sm:px-8">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl font-display">
            Professional <span className="text-emerald-500">Solutions</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-slate-500">
            Discover tailored workflows designed for high-security environments.
            All tools operate 100% locally in your browser-private, fast, and weightless.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry} industry={industry} />
          ))}
        </div>

        <div className="relative mt-24 overflow-hidden rounded-[3rem] border border-slate-100 bg-gradient-to-b from-white to-slate-50/50 px-8 py-20 text-center shadow-sm">
          <div className="relative z-10">
            <h3 className="mb-4 text-3xl font-bold text-slate-900 font-display">Need a Generic Solution?</h3>
            <p className="mx-auto mb-10 max-w-xl text-lg font-medium text-slate-500">
              If your workflow isn't listed, our core tool suite handles hundreds of other file combinations with the same privacy.
            </p>
            <Link
              href="/tools"
              className="inline-block rounded-2xl bg-emerald-500 px-10 py-4.5 font-bold text-white shadow-[0_10px_20px_rgba(16,185,129,0.2)] transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)]"
            >
              Explore Full Toolset
            </Link>
          </div>
          <div className="absolute -bottom-20 left-1/2 h-40 w-full max-w-2xl -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />
        </div>
      </div>
    </main>
  );
}
