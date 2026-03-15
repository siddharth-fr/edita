import { constructMetadata } from "@/lib/metadata";
import dynamic from "next/dynamic";

const TermsClient = dynamic(() => import("./TermsClient"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "Terms of Service – Edita.tools",
  description: "Read the terms of service for using Edita.tools. Our fast, free, and secure browser-based file tools are designed to respect your privacy and data security at all times.",
});

export default function Terms() {
  return <TermsClient />;
}
