import type { Metadata } from "next";
import ConciliacionLaboralBogotaContent from "./ConciliacionLaboralBogotaContent";

export const metadata: Metadata = {
  title:
    "Conciliación Laboral en Bogotá: Salarios, Liquidaciones, Despidos y Prestaciones Sociales",
  description:
    "Descubre cómo funciona la conciliación laboral en Bogotá. Resuelve conflictos por salarios, liquidaciones, prestaciones sociales, despidos e indemnizaciones sin acudir a un proceso judicial.",
  keywords: [
    "conciliación laboral Bogotá",
    "conciliación laboral Colombia",
    "conflictos laborales Bogotá",
    "salarios pendientes conciliación",
    "liquidación laboral",
    "prestaciones sociales",
    "despido injustificado",
    "indemnización laboral",
    "trabajador y empleador",
    "centro de conciliación Bogotá",
    "conciliación antes de demandar",
    "conciliación Ministerio del Trabajo",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-bogota",
  },
  openGraph: {
    title:
      "Conciliación Laboral en Bogotá | Resuelve Conflictos entre Trabajadores y Empleadores",

    description:
      "Guía completa para resolver conflictos laborales mediante conciliación en Bogotá. Conoce qué casos pueden conciliarse y cuáles son sus beneficios.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-bogota",
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
      "Conciliación Laboral en Bogotá: Guía Completa para Resolver Conflictos Laborales",
    description:
      "Aprende cómo funciona la conciliación laboral en Bogotá para resolver conflictos relacionados con salarios, prestaciones sociales, despidos, liquidaciones e indemnizaciones.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué se puede conciliar en materia laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salarios, liquidaciones, prestaciones sociales, indemnizaciones y otros derechos laborales.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación laboral es obligatoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos es requisito antes de iniciar un proceso judicial laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, el acta de conciliación tiene efectos jurídicos en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos laborales pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es posible conciliar controversias relacionadas con salarios pendientes, liquidaciones laborales, prestaciones sociales, vacaciones, indemnizaciones, despidos, terminación del contrato y otros asuntos permitidos por la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio intentar una conciliación antes de presentar una demanda laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso y de la normativa aplicable, la conciliación puede ser un requisito previo o una alternativa recomendable para buscar una solución sin acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación laboral tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo alcanzado y consignado en un acta de conciliación produce efectos jurídicos y obliga a las partes a cumplir los compromisos adquiridos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar un despido injustificado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos casos las partes pueden negociar aspectos económicos derivados del despido, como indemnizaciones, liquidaciones u otros derechos laborales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente es recomendable presentar el contrato de trabajo, desprendibles de nómina, liquidaciones, comunicaciones entre las partes y cualquier documento relacionado con el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo puede tardar una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la complejidad del caso y de la disposición de las partes para llegar a un acuerdo, aunque suele ser mucho más rápida que un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Trabajador y empleador deben asistir personalmente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Por regla general ambas partes participan en la audiencia, ya sea de manera presencial o virtual cuando la modalidad esté disponible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede si no se logra un acuerdo en la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no existe un acuerdo, las partes conservan la posibilidad de acudir a las acciones judiciales que correspondan según la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede realizarse una conciliación laboral virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Dependiendo del centro de conciliación y del caso, es posible desarrollar audiencias virtuales con la misma validez jurídica que una audiencia presencial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo conciliar una liquidación laboral en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación laboral permite resolver diferencias relacionadas con liquidaciones, prestaciones sociales, salarios pendientes, indemnizaciones y demás derechos derivados de la relación laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se llega a un acuerdo en la conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si las partes no logran un acuerdo, el conflicto podrá continuar por la vía judicial cuando la ley lo permita.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo presentar para una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se recomienda presentar el contrato de trabajo, comprobantes de pago, liquidaciones, comunicaciones relacionadas con el conflicto y cualquier otra prueba pertinente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto dura una conciliación laboral en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo puede variar según el caso, aunque normalmente la conciliación es mucho más rápida que un proceso judicial laboral.",
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

      <ConciliacionLaboralBogotaContent />
    </>
  );
}
