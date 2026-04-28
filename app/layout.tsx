import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import NewsletterPopup from "./components/NewsletterPopup";
import Script from "next/script";

const geistSans = Geist({
  variable:"--font-geist-sans",
  subsets:["latin"],
});

const geistMono = Geist_Mono({
  variable:"--font-geist-mono",
  subsets:["latin"],
});

export const metadata: Metadata = {
title:"Luminous By Nature | Stained Glass Sunshine Coast",

description:
"Custom stained glass commissions, leadlight repairs and stained glass workshops across Sunshine Coast, Brisbane and South East Queensland.",

keywords:[
"stained glass Sunshine Coast",
"stained glass Brisbane",
"leadlight repairs Queensland",
"stained glass workshops",
"custom stained glass commissions",
"Sunshine Coast artist"
],
};

export default function RootLayout({
children,
}:{
children:React.ReactNode;
}){

return(
<html
lang="en"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>

<body className="min-h-full flex flex-col">

<Script
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4964811819591438"
strategy="afterInteractive"
crossOrigin="anonymous"
/>

<Navbar />

<NewsletterPopup />

{children}

</body>

</html>
);

}