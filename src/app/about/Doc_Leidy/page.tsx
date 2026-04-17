import { Metadata } from "next";
import DocLeidyContent from "./DocLeidyContent";

export const metadata: Metadata = {
  title:
    "Dra. Leidy Tirado | Abogada conciliadora en Colombia - Derecho Comercial y Empresarial",
  description:
    "Abogada conciliadora en Colombia especializada en derecho comercial, empresarial y protección al consumidor. Conciliación extrajudicial, recuperación de cartera y acuerdos legales.",
  keywords: [
    "abogada conciliadora Colombia",
    "derecho comercial Colombia",
    "conciliación extrajudicial",
    "protección al consumidor Ley 1480",
    "recuperación de cartera empresarial",
    "abogados en Bogotá conciliación",
  ],
  openGraph: {
    title: "Dra. Leidy Tirado | Conciliación en Derecho Comercial en Colombia",
    description:
      "Especialista en conciliación extrajudicial, derecho comercial, empresarial y protección al consumidor en Colombia.",
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
