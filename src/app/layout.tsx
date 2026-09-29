import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Wolf's Fitness Zone 99 | Premium Gym",
  description: "Build the strongest version of you at Wolf's Fitness Zone 99. Premium facilities, expert trainers, and a community dedicated to fitness.",
  openGraph: {
    title: "Wolf's Fitness Zone 99",
    description: "Build the strongest version of you at Wolf's Fitness Zone 99.",
    url: "https://wolfsfitnesszone99.com",
    siteName: "Wolf's Fitness Zone 99",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wolf's Fitness Zone 99 Gym Interior",
      }
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-black text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
