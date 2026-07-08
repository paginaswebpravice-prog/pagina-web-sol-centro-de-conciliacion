import type { Metadata } from "next";
import DanosInmuebleContent from "./DanosInmuebleContent";

export const metadata: Metadata = {
  title:
    "Daños en inmueble arrendado en Colombia: ¿Quién debe pagar? Guía y conciliación 2026",

  description:
    "Descubre quién responde por los daños en un inmueble arrendado en Colombia. Conoce cuándo paga el arrendatario o el propietario, qué hacer si existe un desacuerdo y cómo resolver el conflicto mediante conciliación.",

  keywords: [
    "daños en inmueble arrendado",
    "quien responde por daños en un inmueble arrendado",
    "daños en vivienda arrendada Colombia",
    "responsabilidad arrendatario daños",
    "responsabilidad arrendador reparaciones",
    "conciliación arrendamiento Colombia",
    "conflictos entre arrendador y arrendatario",
    "reparaciones inmueble arrendado",
    "desgaste natural inmueble",
    "acta de conciliación arrendamiento",
    "centro de conciliación Bogotá",
    "conciliación conflictos de arrendamiento",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/danos-inmueble-arrendado",
  },

  openGraph: {
    title:
      "¿Quién responde por los daños en un inmueble arrendado en Colombia?",

    description:
      "Conoce cuándo los daños corresponden al arrendatario o al propietario y cómo resolver el conflicto mediante conciliación sin acudir a un proceso judicial.",

    url: "https://solcentrodeconciliacion.com/blog/danos-inmueble-arrendado",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Daños en inmueble arrendado: responsabilidades y conciliación",

    description:
      "Aprende quién debe asumir las reparaciones y cómo solucionar el conflicto mediante conciliación en Colombia.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Daños en inmueble arrendado en Colombia: quién responde y cómo resolver el conflicto mediante conciliación",

    description:
      "Guía completa sobre la responsabilidad por daños en inmuebles arrendados en Colombia, diferencias entre desgaste natural y daños por mal uso, derechos del arrendador y del arrendatario, y solución de conflictos mediante conciliación.",

    keywords: [
      "daños inmueble arrendado",
      "arrendamiento Colombia",
      "conciliación",
      "reparaciones",
      "arrendador",
      "arrendatario",
    ],

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
        "https://solcentrodeconciliacion.com/blog/danos-inmueble-arrendado",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Quién debe pagar los daños en un inmueble arrendado en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende del origen del daño. Si fue ocasionado por un uso inadecuado o negligencia del arrendatario, normalmente este deberá asumir la reparación. Cuando corresponde al desgaste natural o al paso del tiempo, generalmente la responsabilidad recae sobre el propietario.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cómo demostrar quién ocasionó los daños en un inmueble arrendado?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es recomendable contar con inventarios de entrega, fotografías, videos, contratos de arrendamiento, cotizaciones, facturas y cualquier otra prueba que permita establecer el estado del inmueble antes y después del arriendo.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué hacer si el arrendador y el arrendatario no llegan a un acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Las partes pueden acudir a un centro de conciliación para negociar las reparaciones, el pago de los daños o cualquier otra diferencia relacionada con el contrato de arrendamiento antes de iniciar un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación tiene validez legal en conflictos de arrendamiento?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las partes llegan a un acuerdo, este queda consignado en un acta de conciliación con efectos jurídicos y fuerza obligatoria para quienes participaron en el procedimiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación puede evitar un proceso judicial por daños en un inmueble?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. En muchos casos la conciliación permite solucionar el conflicto mediante acuerdos sobre reparaciones, indemnizaciones o formas de pago, evitando procesos judiciales más largos y costosos.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Inicio",

        item: "https://solcentrodeconciliacion.com",
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

        name: "Daños en inmueble arrendado",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <DanosInmuebleContent />
    </>
  );
}
