import type { Metadata } from "next";
import DisminucionCuotaAlimentariaContent from "./DisminucionCuotaAlimentariaContent";

export const metadata: Metadata = {
  title:
    "Disminución de cuota alimentaria en Colombia | Requisitos y conciliación",
  description:
    "Conoce cuándo puede solicitarse la disminución de una cuota alimentaria en Colombia, qué requisitos existen y cómo funciona la conciliación familiar.",
  keywords: [
    "disminución cuota alimentaria",
    "reducir cuota alimentaria",
    "conciliación alimentos Colombia",
    "modificación cuota alimentaria",
    "cuota alimentaria Bogotá",
    "conciliación familiar",
    "acuerdo alimentos",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/disminucion-cuota-alimentaria",
  },
  openGraph: {
    title: "Disminución de cuota alimentaria en Colombia",
    description:
      "Aprende cuándo puede reducirse una cuota alimentaria y cómo solicitar la modificación mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/disminucion-cuota-alimentaria",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Disminución de cuota alimentaria en Colombia",
    description:
      "Guía sobre la reducción de la cuota alimentaria mediante conciliación familiar.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/disminucion-cuota-alimentaria",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuándo puede solicitarse la disminución de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando existen cambios importantes en la capacidad económica del obligado o en las circunstancias que dieron origen al acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede hacerse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las partes pueden modificar acuerdos de alimentos mediante una audiencia de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La reducción tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo alcanzado en conciliación tiene efectos jurídicos y puede exigirse legalmente.",
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

      <DisminucionCuotaAlimentariaContent />
    </>
  );
}
