import { constructMetadata } from "@/lib/metadata";
import HomeClient from "./HomeClient";

export const metadata = constructMetadata({
  title: "Free Online File Tools – Compress, Convert, Edit Files Privately",
  description: "Secure, browser-based file tools. Compress PDF, convert images, merge files, and more without uploading to a server. 100% private and free with no signup.",
  keywords: [
    "free online tools",
    "browser-based editor",
    "compress pdf online",
    "pdf to word free",
    "image compressor without upload",
    "private file editor",
    "editor.tools",
  ],
});

export default function Home() {
  return <HomeClient />;
}
