import type { Metadata } from "next";
import MarcoLegalConciliacionContent from "./MarcoLegalConciliacionContent";

export const metadata: Metadata = {
  title:
    "Marco legal de la conciliación extrajudicial en Colombia (Guía Completa 2026)",

  description:
    "Conoce cuál es el marco legal de la conciliación extrajudicial en Colombia. Descubre las leyes que la regulan, cuándo es obligatoria, los efectos del acta de conciliación y cómo funciona este mecanismo de solución de conflictos.",

  keywords: [
    "marco legal conciliación Colombia",
    "marco normativo conciliación",
    "conciliación extrajudicial Colombia",
    "Ley 2220 de 2022",
    "Ley 640 de 2001",
    "normas conciliación",
    "regulación conciliación Colombia",
    "acta de conciliación",
    "conciliación obligatoria",
    "MASC Colombia",
    "conciliación jurídica",
    "centros de conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/marco-legal-conciliacion",
  },

  openGraph: {
    title:
      "Marco legal de la conciliación extrajudicial en Colombia | Guía Actualizada",

    description:
      "Aprende qué leyes regulan la conciliación en Colombia, cuáles son sus efectos jurídicos y cuándo este mecanismo es obligatorio.",

    url: "https://solcentrodeconciliacion.com/blog/marco-legal-conciliacion",

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
      "Marco legal de la conciliación extrajudicial en Colombia: leyes, requisitos y efectos jurídicos",

    alternativeHeadline:
      "Normativa de la conciliación en Colombia explicada paso a paso",

    description:
      "Guía completa sobre el marco legal de la conciliación extrajudicial en Colombia. Conoce las leyes que regulan este mecanismo, cuándo es obligatorio, cuáles son sus efectos jurídicos y qué normas conforman el Sistema Nacional de Conciliación.",

    keywords: [
      "marco legal conciliación",
      "conciliación Colombia",
      "Ley 2220 de 2022",
      "Ley 640 de 2001",
      "conciliación extrajudicial",
      "MASC",
      "acta de conciliación",
    ],

    inLanguage: "es-CO",

    articleSection: "Conciliación",

    wordCount: "2500",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/marco-legal-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la ley que regula la conciliación extrajudicial en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Actualmente el Sistema Nacional de Conciliación se encuentra regulado principalmente por la Ley 2220 de 2022, complementada por la Constitución Política, el Código General del Proceso y otras disposiciones aplicables.",
        },
      },

      {
        "@type": "Question",
        name: "¿La Ley 640 de 2001 sigue vigente?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Aunque la Ley 2220 de 2022 modernizó el sistema de conciliación, algunas disposiciones de la Ley 640 de 2001 continúan siendo relevantes dentro del marco normativo colombiano.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué es el Sistema Nacional de Conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el conjunto de normas, instituciones, centros de conciliación y conciliadores autorizados para promover la solución pacífica de conflictos mediante mecanismos alternativos.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación siempre es obligatoria?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "No. En algunos asuntos constituye un requisito de procedibilidad antes de presentar una demanda, mientras que en otros casos es completamente voluntaria.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué efectos tiene un acta de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando cumple los requisitos legales, el acta hace tránsito a cosa juzgada y presta mérito ejecutivo, permitiendo exigir judicialmente su cumplimiento.",
        },
      },

      {
        "@type": "Question",
        name: "¿Quién puede realizar una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación debe adelantarse ante un conciliador autorizado perteneciente a un centro de conciliación o a una entidad habilitada por la ley.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden conciliarse múltiples asuntos civiles, comerciales, familiares, de arrendamiento, patrimoniales y otros derechos de contenido económico que sean susceptibles de transacción.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación evita un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando las partes alcanzan un acuerdo válido, normalmente no será necesario acudir a un proceso judicial sobre el mismo conflicto.",
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

      <MarcoLegalConciliacionContent />
    </>
  );
}
