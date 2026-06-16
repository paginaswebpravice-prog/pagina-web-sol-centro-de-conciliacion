import type { Metadata } from "next";
import ConciliacionInmobiliariaContent from "./ConciliacionInmobiliariaContent";

export const metadata: Metadata = {
  title: "Conciliación inmobiliaria en Colombia | Guía completa de conflictos",
  description:
    "Conoce cómo resolver conflictos inmobiliarios en Colombia mediante conciliación de forma rápida, legal y efectiva sin procesos judiciales.",
  keywords: [
    "conciliación inmobiliaria Colombia",
    "conflictos inmobiliarios Colombia",
    "problemas bienes inmuebles Colombia",
    "conciliación propiedad raíz Colombia",
    "disputas inmobiliarias Colombia",
    "solución conflictos inmobiliarios",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-inmobiliaria-colombia",
  },
  openGraph: {
    title: "Conciliación inmobiliaria en Colombia",
    description:
      "Guía completa para resolver conflictos inmobiliarios mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-inmobiliaria-colombia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación inmobiliaria en Colombia",
    description:
      "Guía sobre resolución de conflictos inmobiliarios mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-inmobiliaria-colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación inmobiliaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un mecanismo para resolver conflictos relacionados con bienes inmuebles sin acudir a juicio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos inmobiliarios se pueden conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arrendamientos, propiedad horizontal, compraventas y disputas sobre inmuebles.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación inmobiliaria es obligatoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es obligatoria, pero es una alternativa legal muy efectiva en Colombia.",
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

      <ConciliacionInmobiliariaContent />
    </>
  );
}
