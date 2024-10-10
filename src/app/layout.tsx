import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daneízo", 
  description: "Rent, Use, Return - It's That Simple !", 
  keywords: "Daneízo, Rent, Use, Return, Simple", 
  openGraph: {
    title: "Daneízo", 
    description: "Rent, Use, Return - It's That Simple !", 
    url: "https://daneizo.vercel.app", 
    type: "website",
    images: [
      {
        url: "https://daneizo.vercel.app/logo.svg", 
        width: 1200,
        height: 630,
        alt: "Image Alt Text",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
