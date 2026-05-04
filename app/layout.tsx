import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import NewsletterPopup from "./components/NewsletterPopup";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luminous By Nature | Stained Glass Sunshine Coast",
  description:
    "Custom stained glass commissions, leadlight repairs and stained glass workshops across Sunshine Coast, Brisbane and South East Queensland.",
  keywords: [
    "stained glass Sunshine Coast",
    "stained glass Brisbane",
    "leadlight repairs Queensland",
    "stained glass workshops",
    "custom stained glass commissions",
    "Sunshine Coast artist",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head />

      <body className="min-h-full flex flex-col">

        {/* Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4964811819591438"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* MailerLite */}
        <Script id="mailerlite" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '2295194');
          `}
        </Script>

        <Navbar />
        <NewsletterPopup />

        {children}

      </body>
    </html>
  );
}