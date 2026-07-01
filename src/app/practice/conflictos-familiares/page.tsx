import { Metadata } from "next";
import ConflictosFamiliaresContent from "./ConflictosFamiliaresContent";

export const metadata: Metadata = {
  title:
    "Conciliación familiar en Colombia | Custodia, alimentos, visitas y acuerdos legales",

  description:
    "¿Tiene un conflicto familiar? Resuelva mediante conciliación asuntos de custodia de hijos, cuota alimentaria, régimen de visitas, separación, liquidación de sociedad conyugal y acuerdos familiares en Colombia. Evite procesos judiciales largos.",

  keywords: [
    "conciliación familiar Colombia",
    "conciliación familiar Bogotá",
    "conflictos familiares",
    "problemas familiares",
    "custodia de hijos",
    "custodia compartida",
    "conciliación custodia",
    "cuota alimentaria",
    "conciliación alimentos",
    "aumento cuota alimentaria",
    "disminución cuota alimentaria",
    "régimen de visitas",
    "conciliación visitas",
    "visitas menores",
    "separación de mutuo acuerdo",
    "separación de pareja",
    "liquidación sociedad conyugal",
    "liquidación sociedad patrimonial",
    "acuerdos familiares",
    "centro de conciliación familiar",
    "conciliación derecho de familia",
    "demanda de alimentos",
    "demanda custodia",
    "conciliación antes de demanda",
    "acta de conciliación familiar",
    "conciliación extrajudicial",
    "conciliación hijos",
    "obligaciones alimentarias",
    "pensión alimentaria",
    "acuerdo de visitas",
    "acuerdo de custodia",
    "modificación cuota alimentaria",
    "modificación régimen visitas",
    "conciliador familiar",
    "familia Colombia",
  ],

  authors: [{ name: "Sol Centro de Conciliación" }],

  creator: "Sol Centro de Conciliación",

  publisher: "Sol Centro de Conciliación",

  metadataBase: new URL("https://solcentrodeconciliacion.com"),

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/conflictos-familiares",
  },

  openGraph: {
    title: "Conflictos familiares en Colombia | Soluciones legales sin demanda",

    description:
      "Conciliación familiar en Bogotá y Colombia para resolver conflictos relacionados con hijos, separación, alimentos y acuerdos familiares.",

    url: "https://solcentrodeconciliacion.com/practice/conflictos-familiares",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación de conflictos familiares en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Conflictos familiares en Colombia | Conciliación rápida y legal",

    description:
      "Evite procesos judiciales familiares. Soluciones legales para custodia, alimentos, separación y acuerdos familiares en Colombia.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Legal Services",
};

export default function Page() {
  const schemaData = [
    {
      "@context": "https://schema.org",

      "@type": "LegalService",

      name: "Conciliación en conflictos familiares en Colombia",

      description:
        "Servicio de conciliación familiar en Bogotá y Colombia para resolver conflictos relacionados con separación, custodia, alimentos, visitas, acuerdos familiares y obligaciones económicas sin necesidad de proceso judicial.",

      url: "https://solcentrodeconciliacion.com/practice/conflictos-familiares",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType:
        "Conciliación familiar y resolución de conflictos de familia",

      provider: {
        "@type": "Organization",

        name: "Sol Centro de Conciliación",

        url: "https://solcentrodeconciliacion.com",

        logo: {
          "@type": "ImageObject",
          url: "https://solcentrodeconciliacion.com/logo.png",
        },
      },
    },

    {
      "@context": "https://schema.org",

      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",

          name: "¿Qué conflictos familiares se pueden resolver mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La conciliación familiar permite resolver conflictos relacionados con custodia de hijos, cuota alimentaria, régimen de visitas, separación, liquidación de bienes y acuerdos familiares.",
          },
        },

        {
          "@type": "Question",

          name: "¿La conciliación familiar tiene validez legal en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Los acuerdos logrados mediante conciliación quedan consignados en un acta con efectos legales y cumplimiento obligatorio para las partes.",
          },
        },

        {
          "@type": "Question",

          name: "¿Por qué es recomendable conciliar antes de iniciar una demanda familiar?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La conciliación ayuda a reducir conflictos emocionales, evitar procesos judiciales largos y alcanzar acuerdos más rápidos y flexibles para las familias.",
          },
        },

        {
          "@type": "Question",

          name: "¿Se pueden modificar acuerdos familiares mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Los acuerdos relacionados con alimentos, visitas, custodia u obligaciones familiares pueden modificarse cuando cambian las circunstancias económicas o familiares.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cómo iniciar una conciliación familiar en Bogotá o Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "El proceso inicia con una solicitud ante un centro de conciliación autorizado. Luego las partes son citadas a una audiencia para intentar llegar a un acuerdo legal con acompañamiento de un conciliador.",
          },
        },
        {
          "@type": "Question",
          name: "¿La conciliación familiar es obligatoria antes de demandar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En determinados asuntos de familia la conciliación constituye un requisito previo antes de acudir ante un juez, dependiendo del tipo de conflicto y de la normativa aplicable.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto dura una conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La duración depende de la complejidad del caso y de la disposición de las partes para llegar a un acuerdo, siendo generalmente mucho más rápida que un proceso judicial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué documentos debo llevar a una conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generalmente se recomienda presentar documentos de identidad, registros civiles, soportes económicos y cualquier documento relacionado con el conflicto objeto de conciliación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué documentos debo llevar a una conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generalmente se recomienda presentar documentos de identidad, registros civiles, soportes económicos y cualquier documento relacionado con el conflicto objeto de conciliación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si una persona no asiste a la audiencia de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dependiendo del caso, podrá dejarse constancia de la inasistencia para los efectos legales correspondientes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se puede modificar un acuerdo de conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, cuando las circunstancias cambian y la ley lo permite, las partes pueden acudir nuevamente a conciliación para modificar determinados acuerdos.",
          },
        },
      ],
    },

    {
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

          name: "Conflictos familiares",

          item: "https://solcentrodeconciliacion.com/practice/conflictos-familiares",
        },
      ],
    },
  ];

  return (
    <>
      {/* ================= SEO SCHEMA ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ConflictosFamiliaresContent />
    </>
  );
}
