import { constructMetadata } from "@/lib/metadata";
import WhyUsClient from "./WhyUsClient";

export const metadata = constructMetadata({
  title: "Why Choose Edita.tools – Fast, Private & Free",
  description: "Discover why professionals choose Edita.tools for their file needs. Privacy-first, browser-based, no-signup tools that respect your data and time.",
  keywords: [
    "why us",
    "privacy first tools",
    "no signup editor",
    "free file conversion online",
    "secure pdf tools",
  ],
});

export default function WhyUs() {
  return <WhyUsClient />;
}
