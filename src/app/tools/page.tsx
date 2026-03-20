import { constructMetadata } from "@/lib/metadata";
import { STATIC_METADATA } from "@/config/seo";
import ToolsClient from "./ToolsClient";

const m = STATIC_METADATA.tools;
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function ToolsPage() {
  return <ToolsClient />;
}
