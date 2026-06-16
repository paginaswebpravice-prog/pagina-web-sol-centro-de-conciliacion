import type { Metadata } from "next";
import ConciliacionVirtualBogotaContent from "./ConciliacionVirtualBogotaContent";

export const metadata: Metadata = {
  title: "Conciliación virtual en Bogotá | Cómo funciona en Colombia",
  description:
    "Conoce cómo funciona la conciliación virtual en Bogotá, sus beneficios, requisitos y cómo realizar una audiencia sin desplazarte en Colombia.",
  keywords: [
    "conciliación virtual Bogotá",
    "conciliación online Colombia",
    "MASC virtual Colombia",
    "audiencia virtual conciliación",
    "conciliación por internet Bogotá",
    "conciliación extrajudicial virtual",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-virtual-bogota",
  },
  openGraph: {
    title: "Conciliación virtual en Bogotá",
    description:
      "Cómo funciona la conciliación virtual en Bogotá y qué necesitas para realizarla en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-virtual-bogota",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación virtual en Bogotá",
    description:
      "Explicación de la conciliación virtual como mecanismo alternativo de solución de conflictos en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-virtual-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación virtual es válida en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, tiene plena validez jurídica si se realiza a través de un centro autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué se necesita para una conciliación virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Conexión a internet, documento de identidad y acceso a la plataforma del centro de conciliación.",
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

      <ConciliacionVirtualBogotaContent />
    </>
  );
}
