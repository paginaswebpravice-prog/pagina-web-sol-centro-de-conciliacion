import type { Metadata } from "next";
import CompraventaBienesContent from "./CompraventaBienesContent";

export const metadata: Metadata = {
  title:
    "Conciliación en compraventa de bienes en Colombia: cómo resolver incumplimientos, pagos y conflictos contractuales",

  description:
    "Conozca cómo resolver conflictos por compraventa de bienes mediante conciliación en Colombia. Descubra qué hacer frente a incumplimientos, devolución de dinero, entrega de bienes, garantías y acuerdos legales antes de iniciar una demanda.",

  keywords: [
    "conciliación compraventa bienes Colombia",
    "compraventa de bienes",
    "incumplimiento contrato compraventa",
    "conflictos compraventa",
    "devolución de dinero compraventa",
    "entrega de bienes",
    "garantías compraventa",
    "incumplimiento contractual",
    "conciliación civil Colombia",
    "conciliación Bogotá",
    "contrato de compraventa",
    "recuperar dinero compraventa",
    "solución conflictos contractuales",
    "conciliación extrajudicial",
    "centro de conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/compraventa-bienes",
  },

  openGraph: {
    title:
      "Conciliación en compraventa de bienes en Colombia | Guía completa para resolver conflictos",

    description:
      "Aprenda cómo solucionar conflictos por compraventa de bienes mediante conciliación. Conozca las alternativas para exigir la entrega del bien, recuperar dinero, negociar garantías y evitar procesos judiciales.",

    url: "https://solcentrodeconciliacion.com/blog/compraventa-bienes",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Conciliación en compraventa de bienes en Colombia",

    description:
      "Guía práctica para resolver conflictos derivados de contratos de compraventa mediante conciliación en Colombia.",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",

      "@type": "Article",

      headline: "Conciliación en compraventa de bienes en Colombia",

      alternativeHeadline:
        "Cómo resolver conflictos por compraventa de bienes mediante conciliación",

      description:
        "Guía completa sobre conciliación para resolver conflictos derivados de contratos de compraventa de bienes en Colombia.",

      image:
        "https://solcentrodeconciliacion.com/images/blog/compraventa-bienes.webp",

      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },

      publisher: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },

      inLanguage: "es-CO",

      datePublished: "2026-07-07",

      dateModified: "2026-07-07",

      mainEntityOfPage: {
        "@type": "WebPage",

        "@id": "https://solcentrodeconciliacion.com/blog/compraventa-bienes",
      },

      about: [
        {
          "@type": "Thing",
          name: "Conciliación",
        },
        {
          "@type": "Thing",
          name: "Contrato de compraventa",
        },
        {
          "@type": "Thing",
          name: "Incumplimiento contractual",
        },
        {
          "@type": "Thing",
          name: "Conciliación civil",
        },
      ],
    },

    {
      "@context": "https://schema.org",

      "@type": "FAQPage",
    },

    {
      "@context": "https://schema.org",

      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Inicio",

          item: "https://solcentrodeconciliacion.com/",
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Blog",

          item: "https://solcentrodeconciliacion.com/blog",
        },

        {
          "@type": "ListItem",

          position: 3,

          name: "Conciliación en compraventa de bienes",

          item: "https://solcentrodeconciliacion.com/blog/compraventa-bienes",
        },
      ],
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué conflictos de compraventa pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La conciliación permite resolver conflictos relacionados con incumplimientos contractuales, retrasos en la entrega del bien, devolución de dinero, garantías, pagos pendientes, diferencias sobre la calidad del producto y otras controversias derivadas de un contrato de compraventa.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puedo recuperar el dinero pagado mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Dependiendo de las circunstancias del caso, las partes pueden acordar la devolución total o parcial del dinero, establecer nuevos plazos de pago o pactar otra solución que satisfaga a ambas.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si el vendedor no entrega el bien?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Durante la conciliación es posible negociar la entrega del bien, fijar nuevas fechas, acordar compensaciones económicas o incluso pactar la devolución del dinero entregado.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos debo llevar a una conciliación por compraventa?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es recomendable presentar el contrato de compraventa, comprobantes de pago, consignaciones, chats, correos electrónicos, facturas, fotografías y cualquier documento relacionado con el conflicto.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre si no se llega a un acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Si la conciliación finaliza sin acuerdo, las partes conservan la posibilidad de acudir a las acciones judiciales que correspondan para solucionar el conflicto.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación tiene efectos jurídicos y, en los casos previstos por la ley, puede servir para exigir el cumplimiento de lo acordado.",
        },
      },

      {
        "@type": "Question",

        name: "¿Necesito abogado para asistir a una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende del caso. En muchos asuntos conciliables las partes pueden asistir directamente, aunque contar con asesoría jurídica puede ayudar a proteger mejor sus intereses.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cuánto puede tardar una conciliación por compraventa?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La duración depende de la complejidad del conflicto y de la disponibilidad de las partes, pero normalmente es mucho más rápida que un proceso judicial.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <CompraventaBienesContent />
    </>
  );
}
