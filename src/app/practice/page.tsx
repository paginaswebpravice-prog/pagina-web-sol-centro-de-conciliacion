import { Metadata } from "next";
import PracticeContent from "./PracticeContent";

export const metadata: Metadata = {
  title:
    "Conciliación extrajudicial en Bogotá y Colombia: resuelve conflictos sin demanda rápida y legal",
  description:
    "Resuelve conflictos sin ir a juicio con conciliación extrajudicial en Bogotá y Colombia. Soluciones rápidas, legales y efectivas en temas civiles, comerciales, laborales y familiares.",

  keywords: [
    "conciliación extrajudicial Colombia",
    "centro de conciliación Bogotá",
    "resolver conflictos sin demanda",
    "conciliación civil Colombia",
    "conciliación laboral Bogotá",
    "conciliación familiar Colombia",
  ],

  openGraph: {
    title:
      "Conciliación extrajudicial en Bogotá: solución rápida y legal sin demanda",
    description:
      "Evita procesos judiciales largos. Resuelve conflictos en Colombia con conciliación civil, comercial, laboral y familiar de forma ágil y efectiva.",
    url: "https://solcentrodeconciliacion.com/practice",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "website",
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/practice",
  },
};

export default function Page() {
  return <PracticeContent />;
}
