import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://leylad.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Leyla D, Specialist skin treatments in Point Cook",
    template: "%s · Leyla D",
  },
  description:
    "Advanced skin treatments for pigmentation, acne and anti-ageing. HIFU, Q-Switch laser, Procell microchanneling and more, at our Point Cook clinic.",
  openGraph: {
    title: "Leyla D, Specialist skin treatments in Point Cook",
    description:
      "Advanced skin treatments for pigmentation, acne and anti-ageing. Point Cook, Melbourne.",
    url: SITE_URL,
    siteName: "Leyla D",
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-paper text-ink"
        suppressHydrationWarning
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
