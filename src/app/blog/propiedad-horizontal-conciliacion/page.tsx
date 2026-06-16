import type { Metadata } from "next";
import PropiedadHorizontalContent from "./PropiedadHorizontalContent";

export const metadata: Metadata = {
  title:
    "Conciliación en propiedad horizontal en Colombia | Solución de conflictos",
  description:
    "Conoce cómo resolver conflictos en propiedad horizontal en Colombia mediante conciliación en conjuntos residenciales de forma rápida y legal.",
  keywords: [
    "propiedad horizontal Colombia",
    "conciliación conjuntos residenciales",
    "conflictos copropiedad Colombia",
    "administración conjuntos residenciales",
    "problemas vecinos Colombia",
    "expensas comunes Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/propiedad-horizontal-conciliacion",
  },
  openGraph: {
    title: "Conciliación en propiedad horizontal en Colombia",
    description:
      "Soluciona conflictos en conjuntos residenciales mediante conciliación en Colombia de forma rápida y legal.",
    url: "https://solcentrodeconciliacion.com/blog/propiedad-horizontal-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación en propiedad horizontal en Colombia",
    description:
      "Guía sobre la resolución de conflictos en propiedad horizontal mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/propiedad-horizontal-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la propiedad horizontal en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el régimen que regula conjuntos residenciales, edificios y unidades privadas con zonas comunes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden resolver conflictos por conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, los conflictos entre copropietarios pueden resolverse mediante conciliación en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria en propiedad horizontal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es obligatoria, pero es una vía efectiva antes de procesos legales.",
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

      <PropiedadHorizontalContent />
    </>
  );
}
