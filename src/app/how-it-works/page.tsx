import { constructMetadata } from "@/lib/metadata";
import { STATIC_METADATA } from "@/config/seo";
import HowItWorksClient from "./HowItWorksClient";

const m = STATIC_METADATA["how-it-works"];
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function HowItWorksPage() {
  return <HowItWorksClient />;
}
