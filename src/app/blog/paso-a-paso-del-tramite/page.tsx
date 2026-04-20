import { Metadata } from "next";
import PasoAPasoDelTramiteContent from "./PasoAPasoDelTramiteContent";

export const metadata: Metadata = {
  title:
    "Paso a paso del trámite de conciliación en Colombia (guía completa 2026)",
  description:
    "Conoce el proceso de conciliación en Colombia paso a paso: solicitud, citación, audiencia y acta de conciliación en Bogotá.",
  keywords: [
    "proceso conciliacion Colombia",
    "paso a paso conciliacion Bogota",
    "tramite conciliacion Colombia",
    "audiencia conciliacion Colombia",
    "acta de conciliacion Colombia",
  ],
  openGraph: {
    title:
      "Paso a paso del trámite de conciliación en Colombia (guía completa)",
    description:
      "Aprende cómo funciona el proceso de conciliación en Colombia desde la solicitud hasta el acta final.",
    url: "https://solcentrodeconciliacion.com/blog/paso-a-paso-del-tramite",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proceso de conciliación en Colombia paso a paso",
    description:
      "Guía completa del trámite de conciliación en Colombia y Bogotá.",
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/paso-a-paso-del-tramite",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Paso a paso del trámite de conciliación en Colombia y Bogotá",
      description:
        "Guía completa del proceso de conciliación en Colombia: solicitud, citación, audiencia y acta final.",
      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      publisher: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://solcentrodeconciliacion.com/blog/paso-a-paso-del-tramite",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Cómo es el proceso de conciliación en Colombia",
      step: [
        { name: "Solicitud de conciliación" },
        { name: "Revisión y admisión del caso" },
        { name: "Citación a audiencia" },
        { name: "Audiencia de conciliación" },
        { name: "Acta o constancia final" },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PasoAPasoDelTramiteContent />
    </>
  );
}
