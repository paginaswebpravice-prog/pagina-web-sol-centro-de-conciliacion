import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title:
    "Abogados conciliadores en Bogotá y Colombia | Equipo experto en resolución de conflictos",
  description:
    "Conozca el equipo de abogados conciliadores de SOL Centro de Conciliación. Especialistas en conciliación extrajudicial, asuntos civiles, familiares, comerciales y laborales en Bogotá y toda Colombia. Reciba orientación jurídica y resuelva conflictos sin procesos judiciales prolongados.",

  keywords: [
    "abogados conciliadores Bogotá",
    "abogado conciliador Colombia",
    "abogados conciliación extrajudicial",
    "centro de conciliación Bogotá",
    "equipo jurídico conciliación",
    "abogados civiles Bogotá",
    "abogados familiares Bogotá",
    "abogados comerciales Bogotá",
    "resolución de conflictos",
    "mecanismos alternativos de solución de conflictos",
    "conciliación familiar",
    "conciliación civil",
    "conciliación comercial",
    "conciliación laboral",
    "equipo legal Colombia",
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
