import type { Metadata } from "next";
import ConciliacionOnlineColombiaContent from "./ConciliacionOnlineColombiaContent";

export const metadata: Metadata = {
  title: "Conciliación online en Colombia | Virtual y rápida",
  description:
    "Conoce cómo funciona la conciliación online en Colombia, sus ventajas, requisitos y cómo realizar audiencias virtuales de forma legal y segura.",
  keywords: [
    "conciliación online Colombia",
    "conciliación virtual Colombia",
    "audiencia virtual conciliación",
    "MASC online Colombia",
    "centros de conciliación virtuales",
    "conciliación por internet Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-online-colombia",
  },
  openGraph: {
    title: "Conciliación online en Colombia",
    description:
      "Guía sobre la conciliación virtual en Colombia: ventajas, requisitos y funcionamiento.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-online-colombia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación online en Colombia",
    description:
      "Explicación de la conciliación virtual en Colombia y cómo funciona el proceso online.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-online-colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación online es válida en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, tiene plena validez jurídica siempre que sea realizada por un centro autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué necesito para una audiencia virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dispositivo con internet, cámara, micrófono y documentos del caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es igual que la presencial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, tiene los mismos efectos legales que una conciliación presencial.",
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

      <ConciliacionOnlineColombiaContent />
    </>
  );
}
