import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const quicksand = Quicksand({ subsets: ["latin"], variable: '--font-quicksand' });
const playwritenl = localFont({variable: '--font-playwritenl', src: '../public/fonts/Playwrite-Netherland/PlaywriteNL.ttf' });

export const metadata: Metadata = {
  title: "Scriptly",
  description: "A simple book manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`antialiased ${inter.variable} ${quicksand.variable} ${playwritenl.variable}`}>{children}</body>
    </html>
  );
}
