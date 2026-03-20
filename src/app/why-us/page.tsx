import { constructMetadata } from "@/lib/metadata";
import { STATIC_METADATA } from "@/config/seo";
import WhyUsClient from "./WhyUsClient";

const m = STATIC_METADATA["why-us"];
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function WhyUs() {
  return <WhyUsClient />;
}
