import type { Metadata } from "next";
import ConflictosArrendamientoContent from "./ConflictosArrendamientoContent";

export const metadata: Metadata = {
  title:
    "Conflictos entre arrendador y arrendatario en Colombia: cómo resolverlos sin demanda (Guía 2026)",

  description:
    "Descubre cómo resolver conflictos entre arrendador y arrendatario en Colombia mediante conciliación. Conoce los problemas más comunes, derechos, obligaciones, ventajas y cuándo acudir a un centro de conciliación.",

  keywords: [
    "conflictos entre arrendador y arrendatario",
    "problemas de arrendamiento Colombia",
    "conciliación arrendamiento",
    "conciliación contrato de arrendamiento",
    "conflictos contrato de arriendo",
    "incumplimiento contrato de arrendamiento",
    "arrendador no cumple contrato",
    "arrendatario no paga arriendo",
    "entrega del inmueble",
    "conciliación inmobiliaria",
    "restitución de inmueble",
    "derechos del arrendador",
    "derechos del arrendatario",
    "centro de conciliación Bogotá",
    "conciliación extrajudicial Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conflictos-arrendador-arrendatario",
  },

  openGraph: {
    title:
      "Conflictos entre arrendador y arrendatario: solución mediante conciliación",

    description:
      "Aprende cómo resolver conflictos de arrendamiento sin acudir inmediatamente a un proceso judicial. Guía completa sobre conciliación en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/conflictos-arrendador-arrendatario",

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
      "Conflictos entre arrendador y arrendatario en Colombia: cómo resolverlos mediante conciliación",

    description:
      "Guía completa sobre los conflictos más frecuentes entre arrendadores y arrendatarios en Colombia, cómo solucionarlos mediante conciliación, cuándo acudir a un proceso judicial y cuáles son los principales derechos y obligaciones de cada parte.",

    keywords: [
      "conflictos de arrendamiento",
      "conciliación arrendamiento",
      "arrendador",
      "arrendatario",
      "contrato de arrendamiento",
      "conciliación Colombia",
    ],

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conflictos-arrendador-arrendatario",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación entre arrendador y arrendatario?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación permite resolver conflictos relacionados con el pago del canon de arrendamiento, entrega del inmueble, daños al bien, incumplimiento del contrato, acuerdos de pago, terminación anticipada del contrato y otras diferencias derivadas de la relación de arrendamiento.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación evita un proceso judicial de arrendamiento?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí. Cuando las partes alcanzan un acuerdo durante la conciliación, pueden solucionar el conflicto sin necesidad de iniciar un proceso judicial, lo que reduce tiempos, costos y desgaste para ambas partes.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué pasa si no se llega a un acuerdo durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no existe acuerdo, las partes conservan el derecho de acudir ante las autoridades judiciales competentes para que el conflicto sea resuelto conforme a la legislación colombiana.",
        },
      },

      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando la conciliación se realiza ante un centro autorizado y las partes llegan a un acuerdo, el acta produce efectos jurídicos y puede ser exigible conforme a la ley.",
        },
      },

      {
        "@type": "Question",
        name: "¿Cuándo conviene acudir a un centro de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable acudir tan pronto surja un conflicto relacionado con el contrato de arrendamiento, especialmente cuando existe disposición de ambas partes para dialogar y encontrar una solución antes de iniciar un litigio.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una conciliación por un conflicto de arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se recomienda presentar el contrato de arrendamiento, documentos de identidad, comprobantes de pago, comunicaciones entre las partes y cualquier prueba relacionada con el conflicto, como fotografías, recibos o facturas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si el arrendador y el arrendatario llegan a un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si ambas partes llegan a un acuerdo durante la audiencia, este queda consignado en un acta de conciliación con efectos jurídicos. El documento es de obligatorio cumplimiento y puede servir como título ejecutivo en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si una de las partes no asiste a la audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando una de las partes no comparece sin una justificación válida, el proceso puede darse por terminado y la parte interesada podrá evaluar otras alternativas legales, incluida la vía judicial cuando sea procedente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es posible conciliar de manera virtual un conflicto de arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación autorizados ofrecen audiencias virtuales, permitiendo que arrendadores y arrendatarios participen desde diferentes ciudades con la misma validez jurídica que una audiencia presencial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación sirve para reclamar cánones de arrendamiento vencidos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación es una alternativa para negociar el pago de cánones atrasados, establecer acuerdos de pago, definir fechas de cumplimiento o buscar soluciones que beneficien a ambas partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ventajas tiene la conciliación frente a una demanda por arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación suele ser más rápida, menos costosa y permite que las partes construyan un acuerdo voluntario, evitando en muchos casos procesos judiciales prolongados y preservando una mejor relación entre arrendador y arrendatario.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo puede tardar una conciliación por un conflicto de arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo puede variar según la complejidad del caso y la disponibilidad de las partes. Sin embargo, normalmente una conciliación se resuelve mucho más rápido que un proceso judicial relacionado con un contrato de arrendamiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos relacionados con un contrato de arrendamiento pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es posible conciliar asuntos como el pago del canon, entrega del inmueble, daños a la propiedad, incumplimiento de obligaciones contractuales, terminación anticipada del contrato, servicios públicos y otros desacuerdos derivados de la relación entre arrendador y arrendatario.",
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

      <ConflictosArrendamientoContent />
    </>
  );
}
