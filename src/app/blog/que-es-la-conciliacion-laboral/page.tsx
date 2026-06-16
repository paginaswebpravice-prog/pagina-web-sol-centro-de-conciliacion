import type { Metadata } from "next";
import QueEsLaConciliacionLaboralContent from "./QueEsLaConciliacionLaboralContent";

export const metadata: Metadata = {
  title: "¿Qué es la conciliación laboral en Colombia? | Guía completa 2026",
  description:
    "Conoce qué es la conciliación laboral en Colombia, cómo funciona, cuándo procede y cuáles son sus beneficios para trabajadores y empleadores.",
  keywords: [
    "conciliación laboral Colombia",
    "conciliación laboral Bogotá",
    "qué es la conciliación laboral",
    "conciliación entre trabajador y empleador",
    "conflictos laborales Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion-laboral",
  },
  openGraph: {
    title: "¿Qué es la conciliación laboral en Colombia?",
    description:
      "Aprende cómo funciona la conciliación laboral, cuándo utilizarla y cómo resolver conflictos laborales sin acudir a juicio.",
    url: "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion-laboral",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué es la conciliación laboral en Colombia?",
    description:
      "Guía completa sobre conciliación laboral en Colombia para resolver conflictos entre trabajadores y empleadores.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion-laboral",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un mecanismo mediante el cual trabajador y empleador intentan resolver un conflicto laboral mediante un acuerdo voluntario.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación laboral evita una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Si las partes alcanzan un acuerdo, pueden evitar un proceso judicial laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos laborales pueden conciliarse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Liquidaciones, salarios, prestaciones sociales, indemnizaciones, vacaciones y otros derechos laborales susceptibles de conciliación.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <QueEsLaConciliacionLaboralContent />
    </>
  );
}
