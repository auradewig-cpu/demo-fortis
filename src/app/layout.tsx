import type { Metadata } from "next";
import { Domine, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORTIS Law & Consulting",
  description: "Kemitraan strategis untuk solusi hukum dan bisnis yang presisi di Yogyakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${domine.variable} ${hankenGrotesk.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.jpg"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
