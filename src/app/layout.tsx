import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

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
    url: "",
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
