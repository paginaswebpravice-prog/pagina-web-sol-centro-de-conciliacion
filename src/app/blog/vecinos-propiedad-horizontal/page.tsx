import type { Metadata } from "next";
import VecinosPropiedadHorizontalContent from "./VecinosPropiedadHorizontalContent";

export const metadata: Metadata = {
  title:
    "Conflictos entre vecinos en propiedad horizontal en Colombia | Guía completa",
  description:
    "Aprende cómo resolver conflictos entre vecinos en propiedad horizontal en Colombia mediante conciliación de forma rápida, legal y efectiva.",
  keywords: [
    "conflictos entre vecinos Colombia",
    "propiedad horizontal convivencia",
    "problemas vecinos conjunto residencial",
    "conciliación convivencia Colombia",
    "ruidos vecinos Colombia",
    "disputas vecinos edificio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/vecinos-propiedad-horizontal",
  },
  openGraph: {
    title: "Conflictos entre vecinos en propiedad horizontal en Colombia",
    description:
      "Soluciona disputas entre vecinos en conjuntos residenciales mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/vecinos-propiedad-horizontal",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conflictos entre vecinos en propiedad horizontal en Colombia",
    description:
      "Guía sobre cómo resolver conflictos de convivencia entre vecinos en propiedad horizontal mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/vecinos-propiedad-horizontal",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuáles son los conflictos más comunes entre vecinos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ruidos, problemas de convivencia, uso indebido de zonas comunes y disputas por espacios compartidos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se resuelven los conflictos entre vecinos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mediante conciliación en Colombia antes de acudir a procesos judiciales.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es efectiva en convivencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, permite acuerdos rápidos y legales entre vecinos.",
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

      <VecinosPropiedadHorizontalContent />
    </>
  );
}
