import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TheCollegeTech | Empowering Colleges with Innovative Tech Solutions",
  description: "TheCollegeTech provides cutting-edge technology solutions, including Placeeasy for placements, Vidya LMS for learning management, and comprehensive IT services for educational institutions.",
  icons: {
    icon: '/Official Logo - 1.jpg',
    shortcut: '/Official Logo - 1.jpg',
    apple: '/Official Logo - 1.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), Inter, "Noto Sans", sans-serif' }}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
