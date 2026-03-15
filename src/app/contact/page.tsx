import { constructMetadata } from "@/lib/metadata";
import ContactClient from "./ContactClient";

export const metadata = constructMetadata({
  title: "Contact Us – Editor.tools",
  description: "Have questions or feedback? Get in touch with the Editor.tools team. We're here to help you with your browser-based file editing needs.",
});

export default function Contact() {
  return <ContactClient />;
}
