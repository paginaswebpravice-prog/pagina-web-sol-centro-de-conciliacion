import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
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
  title: "SOL Centro de Conciliación y Arbitraje",
  description:
    "En SOL ofrecemos soluciones legales ágiles y efectivas para resolver tus conflictos mediante conciliación y arbitraje",
  keywords: [
    "centro de conciliación",
    "resolución de conflictos",
    "Conciliación Extrajudicial en Derecho",
    "Conciliación",
    "Liquidación Sociedad Conyugal",
    "Asuntos Comerciales",
    "Asuntos Civiles",
    "Asuntos Laborales",
    "Custodia y Visitas",
  ],
  openGraph: {
    title: "SOL Centro de Conciliación y Arbitraje",
    description:
      "En SOL ofrecemos soluciones legales ágiles y efectivas para resolver tus conflictos mediante conciliación y arbitraje.",
    url: "https://www.solcentrodeconciliacion.com/",
    siteName: "SOL Centro de Conciliación y Arbitraje",
    images: [
      {
        url: "/logo_sol.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CO">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G3PE07R7Y8"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-G3PE07R7Y8');
  `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
