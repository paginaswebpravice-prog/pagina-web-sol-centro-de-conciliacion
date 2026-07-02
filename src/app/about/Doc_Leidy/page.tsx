import { Metadata } from "next";
import DocLeidyContent from "./DocLeidyContent";

export const metadata: Metadata = {
  title:
    "Leidy Tirado | Abogada Conciliadora en Colombia | Derecho Comercial y Empresarial",
  description:
    "Conoce a la abogada conciliadora Leidy Tirado. Especialista en conciliación comercial, empresarial, recuperación de cartera, acuerdos de pago y protección al consumidor en Colombia.",
  keywords: [
    "Leidy Tirado",
    "abogada conciliadora Colombia",
    "conciliación comercial",
    "conciliación empresarial",
    "recuperación de cartera",
    "acuerdos de pago",
    "conflictos comerciales",
    "conflictos empresariales",
    "derecho comercial Colombia",
    "protección al consumidor",
    "Ley 1480",
    "garantías mobiliarias",
    "abogada comercial Bogotá",
    "Sol Centro de Conciliación",
  ],

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/about/Doc_Leidy",
  },

  openGraph: {
    title: "Leidy Tirado | Abogada Conciliadora en Colombia",

    description:
      "Especialista en conciliación comercial, empresarial, recuperación de cartera y protección al consumidor.",

    url: "https://solcentrodeconciliacion.com/about/Doc_Leidy",
    siteName: "Sol Centro de Conciliación",
    images: [
      {
        url: "https://solcentrodeconciliacion.com/doc-leidy.jpg",
        width: 800,
        height: 600,
        alt: "Dra. Leidy Tirado abogada conciliadora en Colombia",
      },
    ],
    locale: "es_CO",
    type: "profile",
  },
};

export default function Page() {
  return <DocLeidyContent />;
}
