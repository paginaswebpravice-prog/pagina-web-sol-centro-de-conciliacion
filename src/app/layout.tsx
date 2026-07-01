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
  title: {
    default:
      "Centro de Conciliación en Bogotá | SOL Centro de Conciliación y Arbitraje",
    template: "%s | SOL Centro de Conciliación",
  },
  description:
    "Centro de Conciliación autorizado en Bogotá. Resuelva conflictos civiles, familiares, comerciales y laborales mediante conciliación extrajudicial en derecho. Audiencias presenciales y virtuales con validez legal en toda Colombia.",
  keywords: [
    "centro de conciliación Bogotá",
    "centro de conciliación Colombia",
    "conciliación extrajudicial en derecho",
    "conciliación en derecho",
    "conciliación virtual",
    "conciliación familiar",
    "conciliación civil",
    "conciliación comercial",
    "conciliación laboral",
    "conciliación empresarial",
    "acta de conciliación",
    "solución de conflictos",
    "resolver conflictos legales",
    "audiencia de conciliación",
    "centro de arbitraje",
    "arbitraje Colombia",
    "conciliación sin demanda",
    "conciliación antes de demanda",
    "mecanismos alternativos de solución de conflictos",
  ],

  metadataBase: new URL("https://solcentrodeconciliacion.com"),

  alternates: {
    canonical: "https://solcentrodeconciliacion.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Centro de Conciliación en Bogotá | SOL Centro de Conciliación",
    description:
      "Conciliación familiar, civil, comercial y laboral. Soluciones legales rápidas con plena validez jurídica en Colombia.",
    images: ["/logo_sol.jpg"],
  },

  authors: [
    {
      name: "SOL Centro de Conciliación",
    },
  ],
  creator: "SOL Centro de Conciliación",
  publisher: "SOL Centro de Conciliación",

  category: "Servicios Jurídicos",

  openGraph: {
    title: "SOL Centro de Conciliación y Arbitraje",
    description:
      "En SOL ofrecemos soluciones legales ágiles y efectivas para resolver tus conflictos mediante conciliación y arbitraje.",
    url: "https://solcentrodeconciliacion.com/",
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
    <html lang="es-CO">
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
