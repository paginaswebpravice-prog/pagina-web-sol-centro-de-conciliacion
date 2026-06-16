import type { Metadata } from "next";
import AcuerdoPagoCanonesContent from "./AcuerdoPagoCanonesContent";

export const metadata: Metadata = {
  title: "Acuerdos de pago para cánones vencidos en Colombia | Guía completa",
  description:
    "Aprende cómo negociar deudas de arrendamiento mediante acuerdos de pago por cánones vencidos en Colombia de forma legal y efectiva.",
  keywords: [
    "cánones vencidos arrendamiento Colombia",
    "acuerdo de pago arriendo",
    "deuda arrendamiento Colombia",
    "conciliación arriendo deudas",
    "pago alquiler atrasado Colombia",
    "negociación deuda arrendamiento",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/acuerdo-pago-canones-vencidos",
  },
  openGraph: {
    title: "Acuerdos de pago para cánones vencidos en Colombia",
    description:
      "Negocia deudas de arrendamiento mediante conciliación y acuerdos de pago en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/acuerdo-pago-canones-vencidos",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Acuerdos de pago para cánones vencidos en Colombia",
    description:
      "Guía sobre cómo negociar deudas por cánones de arrendamiento vencidos mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/acuerdo-pago-canones-vencidos",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se pueden negociar cánones de arrendamiento vencidos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, es posible llegar a acuerdos de pago mediante conciliación entre arrendador y arrendatario.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no pago el arriendo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se pueden generar intereses, procesos de cobro o incluso procesos de restitución de inmueble.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, en muchos casos permite resolver la deuda sin necesidad de demanda.",
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

      <AcuerdoPagoCanonesContent />
    </>
  );
}
