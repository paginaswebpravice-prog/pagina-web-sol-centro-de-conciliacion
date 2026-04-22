import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title:
    "Abogados en Bogotá expertos en conciliación | Conoce el equipo que resuelve conflictos sin demanda",
  description:
    "Conoce nuestro equipo de abogados en Bogotá especializados en conciliación extrajudicial en Colombia. Resuelve conflictos de forma rápida, legal y sin procesos judiciales.",

  keywords: [
    "abogados en Bogotá",
    "equipo jurídico Colombia",
    "abogados conciliadores Bogotá",
    "centro de conciliación Colombia",
    "abogados expertos en conciliación",
    "equipo legal Bogotá",
  ],

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/about",
  },

  openGraph: {
    title:
      "Abogados en Bogotá especialistas en conciliación | Equipo legal experto",
    description:
      "Conoce a nuestro equipo de abogados conciliadores en Bogotá y resuelve conflictos sin ir a juicio de forma rápida y efectiva.",
    url: "https://solcentrodeconciliacion.com/about",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return <AboutContent />;
}
