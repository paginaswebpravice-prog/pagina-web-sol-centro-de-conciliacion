import type { Metadata } from "next";
import ActaNoConciliacionLaboralContent from "./ActaNoConciliacionLaboralContent";

export const metadata: Metadata = {
  title:
    "Acta de no conciliación laboral en Colombia: qué es, efectos legales, cuándo se expide y qué hacer después (Guía 2026)",
  description:
    "Descubra qué es un acta de no conciliación laboral en Colombia, cuándo se expide, qué efectos legales tiene, qué ocurre si no hubo acuerdo, si sirve para demandar, qué pasa cuando el empleador no asiste y cuáles son las alternativas después de la audiencia.",
  keywords: [
    "acta de no conciliación laboral",
    "acta no conciliación laboral Colombia",
    "constancia de no conciliación",
    "qué pasa si no hay conciliación laboral",
    "conciliación laboral sin acuerdo",
    "audiencia laboral sin acuerdo",
    "efectos legales acta de no conciliación",
    "empleador no asistió conciliación",
    "trabajador no asistió conciliación",
    "qué hacer después de una no conciliación",
    "modelo acta de no conciliación laboral",
    "formato acta de no conciliación",
    "conflicto laboral Colombia",
    "conciliación laboral Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/acta-no-conciliacion-laboral-guia",
  },
  openGraph: {
    title: "Acta de no conciliación laboral en Colombia",
    description:
      "Aprende cuándo se emite un acta de no conciliación laboral y cuáles son sus efectos jurídicos.",
    url: "https://solcentrodeconciliacion.com/blog/acta-no-conciliacion-laboral-guia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Acta de no conciliación laboral en Colombia",
    description:
      "Guía completa sobre el acta de no conciliación laboral, su utilidad y consecuencias legales.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/acta-no-conciliacion-laboral-guia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acta de no conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el documento que deja constancia de que las partes no lograron llegar a un acuerdo durante una audiencia de conciliación laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tiene efectos legales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Sirve como prueba de que se intentó resolver el conflicto mediante conciliación y puede utilizarse en actuaciones posteriores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede después de una no conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden evaluar otras alternativas legales para solucionar el conflicto laboral.",
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

      <ActaNoConciliacionLaboralContent />
    </>
  );
}
