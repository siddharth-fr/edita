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
    <main className="flex flex-col w-full h-[calc(100vh-64px)] overflow-hidden mt-16 bg-[#0E1525]">
      <OnlineCompilerClient />
    </main>
  );
}
