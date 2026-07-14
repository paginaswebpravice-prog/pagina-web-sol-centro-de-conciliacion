import { Metadata } from "next";
import PoderContent from "./PoderContent";

export const metadata: Metadata = {
  title:
    "Poder para audiencia de conciliación en Colombia: modelo, requisitos y ejemplo (Guía 2026)",

  description:
    "Descarga y conoce un modelo de poder para audiencia de conciliación en Colombia. Aprende cuándo se necesita, qué requisitos debe cumplir, quién puede representarte y cómo otorgar un poder especial con validez jurídica.",

  keywords: [
    "poder para audiencia de conciliación",
    "modelo de poder conciliación Colombia",
    "poder especial conciliación",
    "poder para abogado conciliación",
    "representación en audiencia de conciliación",
    "poder conciliación Bogotá",
    "cómo hacer un poder para conciliación",
    "ejemplo de poder conciliación",
    "requisitos poder conciliación",
    "poder para centro de conciliación",
    "poder especial abogado Colombia",
    "audiencia de conciliación Colombia",
    "centro de conciliación Bogotá",
    "conciliación extrajudicial Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/poder",
  },

  openGraph: {
    title:
      "Modelo de poder para audiencia de conciliación en Colombia | Requisitos y ejemplo",

    description:
      "Conoce cuándo puedes otorgar un poder para conciliación, qué facultades puede tener el apoderado y descarga un modelo práctico actualizado para Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/poder",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Modelo de poder para audiencia de conciliación en Colombia",

    description:
      "Guía práctica con requisitos, facultades del apoderado y ejemplo actualizado para Colombia.",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",

      headline:
        "Poder para audiencia de conciliación en Colombia: modelo, requisitos y ejemplo",

      alternativeHeadline:
        "Cómo elaborar un poder especial para una audiencia de conciliación",

      description:
        "Guía completa sobre el poder para audiencia de conciliación en Colombia, cuándo utilizarlo, quién puede actuar como apoderado, qué facultades puede otorgar el poderdante y modelo actualizado.",

      keywords:
        "poder conciliación Colombia, modelo poder conciliación, poder especial, audiencia conciliación, abogado conciliación",

      inLanguage: "es-CO",

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
        "@id": "https://solcentrodeconciliacion.com/blog/poder",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un poder para conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un documento mediante el cual una persona autoriza a otra para representarla en una audiencia de conciliación en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se necesita abogado para conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No siempre es obligatorio, pero es recomendable cuando el caso tiene implicaciones jurídicas o económicas importantes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde se usa el poder para conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se utiliza en centros de conciliación, notarías, cámaras de comercio y conciliaciones virtuales en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿El poder para conciliación debe autenticarse?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Depende del caso y de la entidad ante la cual se adelante la conciliación. En algunos trámites basta un poder simple, mientras que en otros puede solicitarse presentación personal o autenticación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Una persona puede representar a otra en una audiencia de conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Siempre que exista un poder válido otorgado por la persona interesada y la representación sea procedente según la naturaleza del trámite.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué facultades puede incluir un poder para conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Puede autorizar al apoderado para asistir a la audiencia, presentar documentos, negociar fórmulas de arreglo, suscribir el acta de conciliación, recibir notificaciones y realizar las actuaciones expresamente autorizadas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo otorgar un poder si vivo fuera de Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Los colombianos en el exterior pueden otorgar poderes siguiendo los requisitos legales aplicables, incluso mediante consulados colombianos cuando corresponda.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es obligatorio asistir personalmente a una conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "No siempre. Dependiendo del asunto y de la normativa aplicable, es posible comparecer mediante un apoderado debidamente autorizado.",
          },
        },
        {
          "@type": "Question",
          name: "¿El apoderado puede firmar el acta de conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí, siempre que el poder otorgue expresamente esa facultad o permita celebrar acuerdos dentro de los límites establecidos por el poderdante.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si el poder tiene limitaciones?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "El apoderado únicamente podrá actuar dentro de las facultades expresamente conferidas en el documento de poder.",
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
          name: "Blog",
          item: "https://solcentrodeconciliacion.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Poder para audiencia de conciliación",
          item: "https://solcentrodeconciliacion.com/blog/poder",
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PoderContent />
    </>
  );
}
