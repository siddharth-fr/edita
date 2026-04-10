import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { constructMetadata } from "@/lib/metadata";
import { ToastProvider } from "@/components/providers/ToastProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata();
export const viewport: Viewport = {
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-dark-mode theme lock script to prevent accidental theme flashes or system overrides */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const html = document.documentElement;
                html.classList.remove('dark');
                // Force color scheme preference for browsers that support it
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                   // Optional: We can add more aggressive overrides here if needed
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${displayFont.variable} antialiased min-h-screen flex flex-col bg-[#f7f9ff] text-foreground`}
      >
        <ToastProvider>
          <GoogleAnalytics />
          <Navbar />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
