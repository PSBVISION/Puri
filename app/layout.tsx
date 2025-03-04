import type { Metadata } from "next";
import { Inter, Inter_Tight, Leckerli_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const leckerliOne = Leckerli_One({
  weight: "400", // Leckerli One only comes in 400 weight
  subsets: ["latin"],
  variable: "--font-leckerli-one",
});
const interTight = Inter_Tight({
  variable: "--font-inter-tight", // Changed to lowercase "inter" for consistency
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body suppressHydrationWarning
        className={`${interSans.variable} ${interTight.variable} ${leckerliOne.variable} antialiased`}
      ><Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
