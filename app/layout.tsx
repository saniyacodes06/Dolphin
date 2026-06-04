import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dolphin Explorer",
  description:
    "Discover the hidden world of dolphins through immersive storytelling, intelligence research, and conservation insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${cormorant.variable} h-full antialiased bg-[#0B1220]`}
    >
      <body className="min-h-full flex flex-col bg-[#0B1220] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
