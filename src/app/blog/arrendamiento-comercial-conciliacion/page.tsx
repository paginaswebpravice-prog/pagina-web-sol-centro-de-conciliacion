import type { Metadata } from "next";
import ArrendamientoComercialContent from "./ArrendamientoComercialContent";

export const metadata: Metadata = {
  title: "Arrendamiento comercial y conciliación en Colombia | Guía completa",
  description:
    "Conoce cómo resolver conflictos en arrendamientos comerciales en Colombia mediante conciliación de forma rápida, legal y sin procesos judiciales.",
  keywords: [
    "arrendamiento comercial Colombia",
    "conciliación locales comerciales",
    "conflictos arriendo comercial",
    "contrato arrendamiento comercial Colombia",
    "desalojo local comercial Colombia",
    "deudas arrendamiento comercial",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/arrendamiento-comercial-conciliacion",
  },
  openGraph: {
    title: "Arrendamiento comercial y conciliación en Colombia",
    description:
      "Soluciona conflictos en locales comerciales mediante conciliación en Colombia de forma rápida y legal.",
    url: "https://solcentrodeconciliacion.com/blog/arrendamiento-comercial-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Arrendamiento comercial y conciliación en Colombia",
    description:
      "Guía sobre la resolución de conflictos en arrendamientos comerciales mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/arrendamiento-comercial-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es el arrendamiento comercial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el contrato de arrendamiento de locales o espacios destinados a actividades comerciales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden resolver conflictos comerciales por conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, en Colombia es posible resolver conflictos de arrendamiento comercial mediante conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita procesos judiciales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, ya que permite acuerdos voluntarios entre las partes.",
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

      <ArrendamientoComercialContent />
    </>
  );
}
