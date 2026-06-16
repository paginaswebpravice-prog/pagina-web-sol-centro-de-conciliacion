import type { Metadata } from "next";
import InasistenciaConciliacionContent from "./InasistenciaConciliacionContent";

export const metadata: Metadata = {
  title: "¿Qué pasa si una persona no asiste a la conciliación en Colombia?",
  description:
    "Conoce las consecuencias legales de no asistir a una audiencia de conciliación en Colombia, qué sucede con la constancia de inasistencia y cuándo se puede presentar una demanda.",
  keywords: [
    "inasistencia a conciliación",
    "no asistir a conciliación",
    "conciliación Colombia",
    "constancia de inasistencia",
    "audiencia de conciliación",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/inasistencia-a-conciliacion",
  },
  openGraph: {
    title: "¿Qué pasa si una persona no asiste a la conciliación en Colombia?",
    description:
      "Descubre qué ocurre cuando una de las partes no comparece a una audiencia de conciliación y cuáles son las consecuencias legales.",
    url: "https://solcentrodeconciliacion.com/blog/inasistencia-a-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "¿Qué pasa si una persona no asiste a la conciliación en Colombia?",
    description:
      "Consecuencias legales de la inasistencia a una audiencia de conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/inasistencia-a-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué pasa si una persona no asiste a la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador puede expedir una constancia de inasistencia que podrá utilizarse para continuar con otras actuaciones legales o judiciales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo demandar si la otra parte no asiste?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos casos la constancia emitida por el centro de conciliación permite acreditar el intento conciliatorio previo y continuar con la demanda.",
        },
      },
      {
        "@type": "Question",
        name: "¿La audiencia se reprograma automáticamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. La decisión dependerá de las circunstancias del caso y de las reglas aplicables al trámite.",
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

      <InasistenciaConciliacionContent />
    </>
  );
}
