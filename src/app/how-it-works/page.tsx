import { constructMetadata } from "@/lib/metadata";
import HowItWorksClient from "./HowItWorksClient";

export const metadata = constructMetadata({
  title: "How it Works – Secure Browser-Based Processing",
  description: "Learn how Editor.tools uses WebAssembly to process your files locally in your browser. No uploads, no servers, 100% private file editing.",
  keywords: [
    "how it works",
    "webassembly file processing",
    "local file editing",
    "private online tools",
    "browser based processing",
  ],
});

export default function HowItWorksPage() {
  return <HowItWorksClient />;
}
