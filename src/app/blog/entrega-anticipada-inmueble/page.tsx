import type { Metadata } from "next";
import EntregaAnticipadaContent from "./EntregaAnticipadaContent";

export const metadata: Metadata = {
  title: "Entrega anticipada de inmueble arrendado en Colombia | Guía completa",
  description:
    "Conoce cómo funciona la entrega anticipada de un inmueble arrendado en Colombia y cómo resolverlo mediante conciliación sin conflictos legales.",
  keywords: [
    "entrega anticipada inmueble arrendado Colombia",
    "terminación anticipada contrato arriendo",
    "conciliación arrendamiento Colombia",
    "devolución inmueble arrendado",
    "contrato de arrendamiento Colombia",
    "desocupación anticipada inmueble",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/entrega-anticipada-inmueble",
  },
  openGraph: {
    title: "Entrega anticipada de inmueble arrendado en Colombia",
    description:
      "Aprende cómo manejar la entrega anticipada de un inmueble arrendado mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/entrega-anticipada-inmueble",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Entrega anticipada de inmueble arrendado en Colombia",
    description:
      "Guía sobre la entrega anticipada de inmuebles arrendados y su solución mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/entrega-anticipada-inmueble",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede terminar un contrato de arrendamiento antes de tiempo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, siempre que exista acuerdo entre arrendador y arrendatario o se cumplan las condiciones del contrato.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hay sanciones por entrega anticipada del inmueble?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del contrato, puede haber penalidades o acuerdos de compensación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación ayuda en estos casos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, permite acordar la terminación anticipada de forma legal y sin conflictos.",
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

      <EntregaAnticipadaContent />
    </>
  );
}
