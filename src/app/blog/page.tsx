import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title:
    "Conciliación en Colombia: guía completa, actas y audiencias paso a paso",
  description:
    "Aprende conciliación extrajudicial en Colombia con guías claras, modelos de actas, audiencias y consejos legales para resolver conflictos sin demanda.",
  keywords: [
    "conciliación Colombia",
    "acta de conciliación ejemplo",
    "audiencia de conciliación Colombia",
    "modelos de conciliación",
    "conciliación extrajudicial paso a paso",
    "resolver conflictos sin demanda Colombia",
  ],
  openGraph: {
    title:
      "Conciliación en Colombia: guía práctica con actas, audiencias y modelos",
    description:
      "Guías legales, ejemplos de actas y todo sobre conciliación extrajudicial en Colombia explicado paso a paso.",
    url: "https://www.solcentrodeconciliacion.com/blog",
    siteName: "Sol Centro de Conciliación",
    images: [
      {
        url: "https://www.solcentrodeconciliacion.com/logo.png",
        width: 800,
        height: 600,
        alt: "Guía de conciliación en Colombia",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return <BlogContent />;
}
