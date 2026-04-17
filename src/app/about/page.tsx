import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Equipo de abogados en Bogotá | Centro de conciliación en Colombia",
  description:
    "Conoce nuestro equipo de abogados en Bogotá especializados en conciliación extrajudicial y resolución de conflictos en Colombia. Profesionales con experiencia en derecho civil, comercial y familiar.",
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
    title: "Equipo de abogados en Bogotá | Conciliación y asesoría legal",
    description:
      "Conoce a nuestro equipo de abogados conciliadores en Bogotá especializados en resolución de conflictos en Colombia.",
    url: "https://solcentrodeconciliacion.com/about",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return <AboutContent />;
}
