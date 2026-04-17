import { Metadata } from "next";
import ActaNoConciliacionLaboralContent from "./ActaNoConciliacionLaboralContent";

export const metadata: Metadata = {
  title: "Acta de no conciliación laboral en Colombia (modelo y explicación)",
  description:
    "Modelo de acta de no conciliación laboral en Colombia. Ejemplos, inasistencia, constancia y cómo demandar en Bogotá y Colombia.",
  keywords: [
    "acta de no conciliacion laboral Colombia",
    "constancia no conciliacion Bogota",
    "modelo acta no conciliacion laboral",
    "inasistencia conciliacion laboral Colombia",
    "demanda laboral conciliacion Colombia",
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
