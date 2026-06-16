import type { Metadata } from "next";
import DesocupacionInmuebleContent from "./DesocupacionInmuebleContent";

export const metadata: Metadata = {
  title:
    "Desocupación de inmueble mediante conciliación en Colombia | Guía completa",
  description:
    "Conoce cómo recuperar un inmueble mediante conciliación en Colombia de forma rápida, legal y sin procesos judiciales largos.",
  keywords: [
    "desocupación de inmueble Colombia",
    "conciliación arrendamiento Colombia",
    "recuperar inmueble arrendado",
    "desalojo conciliación Colombia",
    "restitución de inmueble arrendado",
    "incumplimiento arrendamiento Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/desocupacion-inmueble-conciliacion",
  },
  openGraph: {
    title: "Desocupación de inmueble mediante conciliación en Colombia",
    description:
      "Recupera tu inmueble mediante conciliación en Colombia de forma rápida y con validez legal.",
    url: "https://solcentrodeconciliacion.com/blog/desocupacion-inmueble-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Desocupación de inmueble mediante conciliación en Colombia",
    description:
      "Guía sobre cómo recuperar un inmueble mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/desocupacion-inmueble-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede recuperar un inmueble mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, es posible llegar a un acuerdo para la entrega voluntaria del inmueble sin necesidad de proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el arrendatario no quiere desocupar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se puede intentar una conciliación antes de iniciar un proceso de restitución de inmueble arrendado.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, el acta de conciliación tiene plena validez jurídica en Colombia.",
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

      <DesocupacionInmuebleContent />
    </>
  );
}
