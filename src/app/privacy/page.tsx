import { constructMetadata } from "@/lib/metadata";
import PrivacyClient from "./PrivacyClient";

export const metadata = constructMetadata({
  title: "Privacy Policy – Edita.tools",
  description: "Your privacy is our priority. Read our privacy policy to understand how Edita.tools processes your files locally without ever uploading them to a server.",
});

export default function Privacy() {
  return <PrivacyClient />;
}
