import { Metadata } from "next";
import PracticeContent from "./PracticeContent";

export const metadata: Metadata = {
  title:
    "Conciliación extrajudicial en Colombia | Centro de conciliación en Bogotá",
  description:
    "Conciliación extrajudicial en derecho en Bogotá y Colombia. Resolución de conflictos civiles, comerciales, laborales y familiares de forma ágil, legal y efectiva.",
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
      "Conciliación extrajudicial en Colombia | Soluciones legales efectivas",
    description:
      "Resuelve conflictos sin procesos judiciales. Conciliación en Bogotá y Colombia en temas civiles, comerciales, laborales y familiares.",
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
