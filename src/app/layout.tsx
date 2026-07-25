import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

// Clay.com uses the commercial fonts Roobert (sans) and Canela (serif),
// which cannot be legally redistributed in this clone. Geist is a close
// free substitute for Roobert's neutral geometric grotesque; Fraunces
// substitutes Canela's warm serif display headlines.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Clay | Build systems to grow revenue",
  description:
    "Infrastructure to get any data, run agentic workflows, and launch GTM plays.",
  icons: {
    icon: "/seo/favicon-512.png",
  },
  openGraph: {
    title: "Clay | Build systems to grow revenue",
    description:
      "Infrastructure to get any data, run agentic workflows, and launch GTM plays.",
    images: ["/seo/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
