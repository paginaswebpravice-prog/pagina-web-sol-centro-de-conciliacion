import type { Metadata } from "next";
import FuncionesConciliadoresContent from "./FuncionesConciliadoresContent";

export const metadata: Metadata = {
  title: "Funciones de los conciliadores en Colombia | Guía completa",
  description:
    "Conoce cuáles son las funciones de los conciliadores en Colombia, su rol dentro del proceso y sus responsabilidades legales.",
  keywords: [
    "funciones del conciliador Colombia",
    "qué hace un conciliador",
    "rol del conciliador Colombia",
    "conciliador funciones y responsabilidades",
    "MASC Colombia conciliador",
    "centro de conciliación conciliador",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/funciones-de-los-conciliadores",
  },
  openGraph: {
    title: "Funciones de los conciliadores en Colombia",
    description:
      "Explicación clara del rol y responsabilidades de los conciliadores en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/funciones-de-los-conciliadores",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Funciones de los conciliadores en Colombia",
    description:
      "Guía sobre el rol, funciones y responsabilidades de los conciliadores en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/funciones-de-los-conciliadores",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la función principal de un conciliador?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Facilitar el diálogo entre las partes para que lleguen a un acuerdo voluntario.",
        },
      },
      {
        "@type": "Question",
        name: "¿El conciliador decide quién tiene la razón?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, el conciliador no impone decisiones, solo facilita el acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿El conciliador es neutral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, debe actuar con imparcialidad durante todo el proceso.",
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

      <FuncionesConciliadoresContent />
    </>
  );
}
