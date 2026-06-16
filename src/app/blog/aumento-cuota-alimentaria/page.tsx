import type { Metadata } from "next";
import AumentoCuotaAlimentariaContent from "./AumentoCuotaAlimentariaContent";

export const metadata: Metadata = {
  title:
    "Aumento de cuota alimentaria por conciliación en Colombia | Guía 2026",
  description:
    "Conoce cuándo puede solicitarse el aumento de una cuota alimentaria en Colombia, cómo funciona la conciliación y qué factores se tienen en cuenta para modificar el valor.",
  keywords: [
    "aumento cuota alimentaria",
    "incremento cuota alimentaria",
    "conciliación alimentos Colombia",
    "modificar cuota alimentaria",
    "cuota alimentaria Bogotá",
    "conciliación familiar",
    "alimentos menores de edad",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/aumento-cuota-alimentaria",
  },
  openGraph: {
    title: "Aumento de cuota alimentaria por conciliación en Colombia",
    description:
      "Aprende cuándo y cómo solicitar el aumento de una cuota alimentaria mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/aumento-cuota-alimentaria",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Aumento de cuota alimentaria por conciliación en Colombia",
    description:
      "Guía sobre el incremento de la cuota alimentaria mediante conciliación familiar.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/aumento-cuota-alimentaria",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuándo puede solicitarse un aumento de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando cambian las necesidades del menor o las condiciones económicas de las partes involucradas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede aumentar la cuota mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las partes pueden acudir a conciliación para modificar acuerdos anteriores relacionados con alimentos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio firmar un nuevo acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando se alcanza un acuerdo, este debe quedar consignado en un acta de conciliación para generar efectos jurídicos.",
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

      <AumentoCuotaAlimentariaContent />
    </>
  );
}
