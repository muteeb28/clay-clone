import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./clay.css";

const claySans = Plus_Jakarta_Sans({
  variable: "--font-clay-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const clayMono = Space_Mono({
  variable: "--font-clay-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Clay for Sales Teams — Make every sales touch fast and deeply personal",
  description:
    "Cut down time sellers spend on research while equipping them with quality contact data and custom insights on their prospects.",
};

export default function ClayForSalesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${claySans.variable} ${clayMono.variable} clay-scope`}>
      {children}
    </div>
  );
}
