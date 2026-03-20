import { constructMetadata } from "@/lib/metadata";
import { STATIC_METADATA } from "@/config/seo";
import PrivacyClient from "./PrivacyClient";

const m = STATIC_METADATA.privacy;
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Privacy() {
  return <PrivacyClient />;
}
