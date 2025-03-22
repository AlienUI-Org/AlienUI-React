import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Head from "next/head";
import BannerAlienX from "@/components/BannerAlienX";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlienUI React",
  description: "Prebuilt Tailwind CSS UI Components",
  keywords: "UI, Tailwind CSS, components, react, AlienUI react",
  authors: [{ name: "Kenneth Akpo" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <BannerAlienX />
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
