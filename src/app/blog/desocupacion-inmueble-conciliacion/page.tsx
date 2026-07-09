import type { Metadata } from "next";
import DesocupacionInmuebleContent from "./DesocupacionInmuebleContent";

export const metadata: Metadata = {
  title:
    "¿Cómo recuperar un inmueble arrendado? Desocupación por conciliación en Colombia (Guía 2026)",

  description:
    "Aprende cómo recuperar un inmueble arrendado mediante conciliación en Colombia. Conoce cuándo procede, qué hacer si el inquilino no entrega el inmueble, documentos necesarios, ventajas y alternativas legales.",

  keywords: [
    "recuperar inmueble arrendado",
    "desocupación inmueble Colombia",
    "desocupación por conciliación",
    "conciliación arrendamiento",
    "arrendatario no entrega inmueble",
    "restitución de inmueble arrendado",
    "desalojo Colombia",
    "incumplimiento contrato arrendamiento",
    "entrega voluntaria inmueble",
    "centro de conciliación arrendamientos",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/desocupacion-inmueble-conciliacion",
  },

  openGraph: {
    title:
      "¿Cómo recuperar un inmueble arrendado? Desocupación mediante conciliación",

    description:
      "Conoce cómo lograr la entrega voluntaria de un inmueble arrendado mediante conciliación, evitando procesos judiciales largos y costosos.",

    url: "https://solcentrodeconciliacion.com/blog/desocupacion-inmueble-conciliacion",

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
      "¿Cómo recuperar un inmueble arrendado mediante conciliación en Colombia?",

    alternativeHeadline:
      "Guía para la desocupación voluntaria de inmuebles arrendados",

    description:
      "Guía completa sobre la desocupación de inmuebles arrendados mediante conciliación. Descubre cuándo aplica, cómo funciona el procedimiento, qué documentos presentar y qué hacer cuando el arrendatario se niega a entregar el inmueble.",

    keywords: [
      "desocupación inmueble",
      "restitución inmueble",
      "conciliación arrendamiento",
      "arrendatario no entrega inmueble",
      "desalojo Colombia",
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
      "https://solcentrodeconciliacion.com/blog/desocupacion-inmueble-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo recuperar un inmueble si el arrendatario no quiere entregarlo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Antes de acudir a un proceso judicial, las partes pueden intentar una conciliación para acordar la entrega voluntaria del inmueble, establecer fechas de desocupación y resolver obligaciones económicas pendientes.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación evita un proceso de restitución de inmueble arrendado?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En muchos casos sí. Cuando ambas partes llegan a un acuerdo, es posible evitar un proceso judicial de restitución, reduciendo tiempos y costos.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos debo llevar para una conciliación de arrendamiento?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es recomendable presentar el contrato de arrendamiento, comprobantes de pago, inventarios, comunicaciones entre las partes y cualquier documento relacionado con el incumplimiento o la entrega del inmueble.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre si el arrendatario incumple el acta de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación tiene efectos jurídicos y puede servir como soporte para exigir el cumplimiento de las obligaciones pactadas conforme a la normativa colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cuánto tarda una conciliación por desocupación de inmueble?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El tiempo depende de la disponibilidad de las partes y del centro de conciliación, pero normalmente resulta mucho más ágil que un proceso judicial de restitución.",
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

        name: "Desocupación de inmueble mediante conciliación",

        item: "https://solcentrodeconciliacion.com/blog/desocupacion-inmueble-conciliacion",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "LegalService",

    name: "Sol Centro de Conciliación",

    areaServed: "Colombia",

    url: "https://solcentrodeconciliacion.com",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <DesocupacionInmuebleContent />
    </>
  );
}
