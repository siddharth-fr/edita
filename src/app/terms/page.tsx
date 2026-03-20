import { constructMetadata } from "@/lib/metadata";
import { STATIC_METADATA } from "@/config/seo";
import dynamic from "next/dynamic";

const TermsClient = dynamic(() => import("./TermsClient"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

const m = STATIC_METADATA.terms;
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Terms() {
  return <TermsClient />;
}
