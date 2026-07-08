import type { Metadata } from "next";
import ConciliacionLaboralVsDemandaContent from "./ConciliacionLaboralVsDemandaContent";

export const metadata: Metadata = {
  title:
    "Conciliación laboral vs demanda laboral en Colombia: ¿Cuál conviene más en 2026?",

  description:
    "¿Conciliación laboral o demanda laboral? Descubre las diferencias, ventajas, tiempos, costos, requisitos y cuándo conviene cada opción para resolver conflictos entre trabajadores y empleadores en Colombia.",

  keywords: [
    "conciliación laboral vs demanda laboral",
    "qué es mejor conciliación o demanda laboral",
    "conciliación laboral Colombia",
    "demanda laboral Colombia",
    "demanda por despido",
    "liquidación laboral",
    "conciliación extrajudicial laboral",
    "conflictos laborales",
    "centro de conciliación laboral",
    "acuerdo laboral",
    "trabajador y empleador",
    "derecho laboral Colombia",
    "cómo resolver conflictos laborales",
    "acta de conciliación laboral",
    "proceso laboral Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-vs-demanda",
  },

  openGraph: {
    title:
      "Conciliación laboral vs demanda laboral: diferencias, ventajas y cuál elegir",

    description:
      "Conoce cuándo es mejor acudir a una conciliación laboral y cuándo presentar una demanda. Comparativa completa sobre tiempos, costos, riesgos y beneficios en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-vs-demanda",

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
      "Conciliación laboral vs demanda laboral en Colombia: diferencias, ventajas y cuál conviene",

    description:
      "Guía completa para conocer las diferencias entre la conciliación laboral y la demanda laboral, sus ventajas, tiempos, costos, efectos legales y cuándo resulta conveniente acudir a cada una.",

    keywords:
      "conciliación laboral, demanda laboral, derecho laboral Colombia, trabajador, empleador, conflictos laborales",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-vs-demanda",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es más rápido: una conciliación laboral o una demanda laboral?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Generalmente la conciliación laboral permite resolver el conflicto en un tiempo considerablemente menor que una demanda judicial, la cual puede extenderse durante meses o incluso años dependiendo del caso.",
        },
      },

      {
        "@type": "Question",
        name: "¿Cuándo conviene intentar primero una conciliación laboral?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando existe disposición de diálogo entre trabajador y empleador y el conflicto puede solucionarse mediante un acuerdo sobre salarios, liquidaciones, prestaciones, indemnizaciones u otras obligaciones laborales.",
        },
      },

      {
        "@type": "Question",
        name: "¿Cuándo es necesario presentar una demanda laboral?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando no es posible alcanzar un acuerdo mediante conciliación, existe incumplimiento de los derechos laborales o el conflicto requiere que un juez adopte una decisión obligatoria.",
        },
      },

      {
        "@type": "Question",
        name: "¿El acta de conciliación laboral tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación tiene plenos efectos jurídicos y puede exigirse legalmente en caso de incumplimiento por cualquiera de las partes.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación laboral evita un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las partes llegan a un acuerdo durante la conciliación normalmente se evita iniciar un proceso judicial, lo que reduce tiempos, costos y desgaste emocional.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué asuntos laborales pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Entre otros, conflictos relacionados con salarios, prestaciones sociales, liquidaciones, indemnizaciones, vacaciones, horas extras y diferentes obligaciones derivadas de la relación laboral, siempre que la ley permita su conciliación.",
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

      <ConciliacionLaboralVsDemandaContent />
    </>
  );
}
