import type { Metadata } from "next";
import ConflictosEntreVecinosContent from "./ConflictosEntreVecinosContent";

export const metadata: Metadata = {
  title:
    "Conflictos entre vecinos en Colombia | Conciliación vecinal y solución de disputas",
  description:
    "Conoce cómo resolver conflictos entre vecinos mediante conciliación en Colombia. Problemas de ruido, linderos, mascotas, zonas comunes y convivencia.",
  keywords: [
    "conflictos entre vecinos",
    "conciliación vecinal",
    "problemas entre vecinos",
    "ruidos molestos vecinos",
    "conciliación de convivencia",
    "conflictos de propiedad horizontal",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conflictos-entre-vecinos",
  },
  openGraph: {
    title: "Conflictos entre vecinos y conciliación en Colombia",
    description:
      "Aprende cómo solucionar disputas vecinales mediante conciliación antes de acudir a procesos judiciales.",
    url: "https://solcentrodeconciliacion.com/blog/conflictos-entre-vecinos",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conflictos entre vecinos en Colombia",
    description:
      "Guía completa sobre conciliación para resolver conflictos vecinales y problemas de convivencia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conflictos-entre-vecinos",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué conflictos entre vecinos pueden conciliarse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden conciliarse conflictos relacionados con ruidos molestos, mascotas, uso de zonas comunes, linderos, filtraciones, daños a propiedades y problemas de convivencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio demandar a un vecino?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. En muchos casos la conciliación permite resolver el conflicto sin necesidad de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y obliga a las partes a cumplir lo acordado.",
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

      <ConflictosEntreVecinosContent />
    </>
  );
}
