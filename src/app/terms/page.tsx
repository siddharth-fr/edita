import { constructMetadata } from "@/lib/metadata";
import TermsClient from "./TermsClient";

export const metadata = constructMetadata({
  title: "Terms of Service – Editor.tools",
  description: "Read the terms of service for using Editor.tools. Fast, free, and secure browser-based file tools for everyone.",
});

export default function Terms() {
  return <TermsClient />;
}
