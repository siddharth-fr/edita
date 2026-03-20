import { constructMetadata } from "@/lib/metadata";
import { STATIC_METADATA } from "@/config/seo";
import HomeClient from "./HomeClient";

const m = STATIC_METADATA.home;
export const metadata = constructMetadata({
  title: m.title,
  description: m.description,
  canonical: m.canonical,
  keywords: m.keywords,
});

export default function Home() {
  return <HomeClient />;
}
