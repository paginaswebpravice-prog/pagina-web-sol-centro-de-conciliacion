import { Metadata } from "next";
import ActaNoConciliacionLaboralContent from "./ActaNoConciliacionLaboralContent";

export const metadata: Metadata = {
  title:
    "Acta de no conciliación laboral en Colombia: modelo, efectos legales, inasistencia y qué hacer después (Guía 2026)",
  description:
    "Conozca qué es un acta de no conciliación laboral en Colombia, cuándo se expide, qué pasa si el empleador no asiste, cómo utilizarla para continuar un proceso laboral, modelo, formato, requisitos y efectos legales.",
  keywords: [
    "acta de no conciliación laboral Colombia",
    "constancia de no conciliación laboral",
    "modelo acta de no conciliación laboral",
    "formato acta de no conciliación",
    "qué pasa si no hay conciliación laboral",
    "empleador no asiste conciliación laboral",
    "inasistencia conciliación laboral",
    "demanda después de conciliación laboral",
    "efectos legales de la no conciliación laboral",
    "certificado de no conciliación laboral",
    "requisitos acta de no conciliación",
    "conciliación laboral sin acuerdo",
  ],
  openGraph: {
    title: "Acta de no conciliación laboral en Colombia (modelo y guía)",
    description:
      "Conoce el modelo de acta de no conciliación laboral en Colombia, qué pasa si no hay acuerdo y cómo continuar con una demanda.",
    url: "https://solcentrodeconciliacion.com/blog/acta-no-conciliacion-laboral",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acta de no conciliación laboral en Colombia (modelo)",
    description:
      "Ejemplo práctico + guía sobre la constancia de no conciliación laboral en Colombia.",
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/acta-no-conciliacion-laboral",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Acta de no conciliación laboral en Colombia (modelo y explicación)",
      description:
        "Modelo de acta de no conciliación laboral en Colombia, constancia por inasistencia y procedimiento legal.",
      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      publisher: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://solcentrodeconciliacion.com/blog/acta-no-conciliacion-laboral",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un acta de no conciliación laboral en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es una constancia que deja registro de que en la audiencia de conciliación laboral no se llegó a un acuerdo o que una de las partes no asistió.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué sirve la constancia de no conciliación laboral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve como requisito previo para presentar una demanda laboral ante un juez en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si el empleador no asiste a la conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se deja constancia por inasistencia y el trabajador puede continuar con la demanda laboral.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Conciliación laboral en Colombia",
      provider: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      areaServed: {
        "@type": "City",
        name: "Bogotá",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ActaNoConciliacionLaboralContent />
    </>
  );
}
