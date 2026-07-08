import { constructMetadata } from "@/lib/metadata";
import { TOOL_METADATA } from "@/config/seo";
import { OnlineCompilerClient } from "@/components/tools/OnlineCompilerClient";

const m = TOOL_METADATA["online-compiler"];

export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Page() {
  return (
    <main className="flex flex-col w-full min-h-[calc(100vh-64px)] mt-16 bg-slate-50 py-12 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4 tracking-tight">
          Online Compiler
        </h1>
        <p className="text-center text-slate-500 mb-12 text-lg">
          Write, compile, and run your code instantly in your browser.
        </p>
        <OnlineCompilerClient />
      </div>
    </main>
  );
}
