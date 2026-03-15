import { constructMetadata } from "@/lib/metadata";
import ToolsClient from "./ToolsClient";

export const metadata = constructMetadata({
  title: "All Free Online Tools – Editor.tools",
  description: "Browse our complete collection of fast, secure, and free online file tools. PDF merging, image compression, video conversion, and more, all running in your browser.",
  keywords: [
    "online file tools",
    "free pdf tools",
    "image editor online",
    "video tools browser",
    "secure file conversion",
  ],
});

export default function ToolsPage() {
  return <ToolsClient />;
}
