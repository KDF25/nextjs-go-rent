import { Providers } from "@shared/providers";
import "@shared/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoRent",
  description:
    "GoRent is your go-to platform for fast and easy hotel bookings worldwide. Find the best deals and book your stay in just a few clicks.",
  metadataBase: new URL(process.env.NEXT_BASE_URL || ""),
  openGraph: {
    title: "GoRent",
    description:
      "GoRent helps you discover and book hotels across the globe with ease. Simple, secure, and fast hotel reservations for your next trip.",
    url: process.env.NEXT_BASE_URL,
    siteName: "GoRent",
    images: [
      {
        url: "./gorentOG.jpg",
        width: 800,
        height: 600,
        alt: "GoRent - Hotel Booking Platform",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
