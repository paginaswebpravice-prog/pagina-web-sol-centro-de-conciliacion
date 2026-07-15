import type { Metadata } from "next";
import VentajasConciliacionContent from "./VentajasConciliacionContent";

export const metadata: Metadata = {
  title:
    "10 ventajas de la conciliación frente a un proceso judicial en Colombia (Guía 2026)",

  description:
    "Descubre las principales ventajas de la conciliación frente a una demanda judicial en Colombia. Ahorra tiempo, dinero y evita procesos largos con acuerdos que tienen validez legal.",

  keywords: [
    "ventajas de la conciliación",
    "beneficios de la conciliación",
    "conciliación vs proceso judicial",
    "conciliación o demanda",
    "conciliación extrajudicial Colombia",
    "conciliación antes de demandar",
    "por qué conciliar",
    "resolver conflictos sin demanda",
    "acuerdo conciliatorio Colombia",
    "centro de conciliación Bogotá",
    "conciliación legal Colombia",
    "conciliación civil Colombia",
    "conciliación comercial",
    "mecanismos alternativos solución conflictos",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/ventajas-de-la-conciliacion",
  },

  openGraph: {
    title:
      "10 ventajas de la conciliación frente a un proceso judicial en Colombia",

    description:
      "Conoce por qué miles de personas prefieren la conciliación antes que iniciar una demanda judicial. Descubre sus beneficios legales, económicos y prácticos.",

    url: "https://solcentrodeconciliacion.com/blog/ventajas-de-la-conciliacion",

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
      "10 ventajas de la conciliación frente a un proceso judicial en Colombia",

    description:
      "Guía completa sobre las ventajas de la conciliación en Colombia frente a un proceso judicial tradicional.",

    keywords: [
      "ventajas conciliación",
      "beneficios conciliación",
      "conciliación Colombia",
      "proceso judicial",
      "conciliación extrajudicial",
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
      "https://solcentrodeconciliacion.com/blog/ventajas-de-la-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué ventajas tiene la conciliación frente a una demanda judicial?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación permite resolver conflictos de forma más rápida, económica y flexible. Además, los acuerdos alcanzados tienen efectos jurídicos y pueden exigirse judicialmente en caso de incumplimiento.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación tiene la misma validez que un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando las partes llegan a un acuerdo y este queda consignado en un acta de conciliación, dicho documento presta mérito ejecutivo y hace tránsito a cosa juzgada en los términos previstos por la ley.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación es más económica que demandar?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "En la mayoría de los casos sí. La conciliación evita muchos de los costos asociados a procesos judiciales prolongados, como gastos procesales, honorarios adicionales y el tiempo invertido en litigios.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación puede utilizarse en conflictos civiles, comerciales, familiares, de propiedad horizontal, arrendamientos, obligaciones económicas, responsabilidad civil y muchos otros asuntos permitidos por la legislación colombiana.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué pasa si una persona incumple el acuerdo conciliatorio?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "La parte afectada puede iniciar un proceso ejecutivo utilizando el acta de conciliación como título ejecutivo para exigir el cumplimiento de las obligaciones pactadas.",
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

      <VentajasConciliacionContent />
    </>
  );
}
