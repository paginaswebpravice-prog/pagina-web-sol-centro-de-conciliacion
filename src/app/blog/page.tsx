import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title:
    "Blog de conciliación extrajudicial en Colombia | Guías legales, modelos de actas, audiencias y resolución de conflictos",

  description:
    "Aprende todo sobre conciliación extrajudicial en Colombia. Guías paso a paso, modelos de actas de conciliación, audiencias, derecho de familia, laboral, comercial, civil, arrendamientos y consejos jurídicos escritos por especialistas.",

  keywords: [
    "blog conciliación Colombia",
    "conciliación extrajudicial Colombia",
    "acta de conciliación",
    "modelo acta conciliación",
    "audiencia de conciliación",
    "cómo conciliar en Colombia",
    "centro de conciliación",
    "derecho civil",
    "derecho laboral",
    "derecho familiar",
    "conflictos comerciales",
    "resolver conflictos sin demanda",
    "blog jurídico Colombia",
    "abogados conciliadores",
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
