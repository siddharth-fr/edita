import { constructMetadata } from "@/lib/metadata";
import dynamic from "next/dynamic";

const ContactClient = dynamic(() => import("./ContactClient"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted rounded-3xl" />
});

export const metadata = constructMetadata({
  title: "Contact Us – Editor.tools",
  description: "Have questions or feedback? Get in touch with the Editor.tools team. We are here to help you with all your browser-based file editing and conversion needs securely.",
});

export default function Contact() {
  return <ContactClient />;
}
