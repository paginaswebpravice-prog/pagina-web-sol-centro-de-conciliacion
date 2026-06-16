import type { Metadata } from "next";
import EntregaInmuebleContent from "./EntregaInmuebleContent";

export const metadata: Metadata = {
  title:
    "Entrega de inmueble por conciliación en Colombia | Restitución voluntaria",
  description:
    "Conoce cómo funciona la entrega de inmueble por conciliación en Colombia. Acuerdos de restitución voluntaria entre arrendador e inquilino sin procesos judiciales prolongados.",
  keywords: [
    "entrega de inmueble por conciliación",
    "restitución de inmueble",
    "conciliación arrendamiento",
    "entrega voluntaria inmueble",
    "arrendador e inquilino",
    "conciliación Bogotá",
    "restitución inmueble Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/entrega-inmueble",
  },
  openGraph: {
    title: "Entrega de inmueble por conciliación en Colombia",
    description:
      "Aprende cómo lograr acuerdos de restitución voluntaria mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/entrega-inmueble",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Entrega de inmueble por conciliación en Colombia",
    description:
      "Guía sobre restitución voluntaria de inmuebles mediante conciliación.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/entrega-inmueble",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede entregar un inmueble mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Arrendador e inquilino pueden acordar la restitución voluntaria del inmueble mediante una audiencia de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ventajas tiene la entrega voluntaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Permite evitar procesos judiciales prolongados, reducir costos y establecer condiciones claras para ambas partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y obliga a las partes a cumplir lo pactado.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <EntregaInmuebleContent />
    </>
  );
}
