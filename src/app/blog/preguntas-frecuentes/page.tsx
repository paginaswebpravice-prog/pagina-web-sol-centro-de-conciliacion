import { Metadata } from "next";
import PreguntasFrecuentesContent from "./PreguntasFrecuentesContent";

export const metadata: Metadata = {
  title:
    "50 preguntas frecuentes sobre conciliación en Colombia: guía completa, requisitos, costos y respuestas (2026)",

  description:
    "Resuelve las dudas más frecuentes sobre conciliación en Colombia. Conoce cómo funciona una audiencia, qué documentos necesitas, cuánto cuesta, cuánto demora, qué pasa si no hay acuerdo y cuáles son los efectos legales del acta de conciliación.",

  keywords: [
    "preguntas frecuentes conciliación Colombia",
    "FAQ conciliación Colombia",
    "dudas conciliación",
    "qué es conciliación Colombia",
    "cómo funciona conciliación",
    "audiencia de conciliación",
    "acta de conciliación",
    "conciliación Bogotá",
    "conciliación virtual",
    "centro de conciliación",
    "requisitos conciliación",
    "costos conciliación",
    "tiempo conciliación",
    "qué pasa si no hay acuerdo",
    "proceso conciliación Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/preguntas-frecuentes",
  },

  openGraph: {
    title: "50 preguntas frecuentes sobre conciliación en Colombia (Guía 2026)",

    description:
      "Encuentra respuestas claras sobre conciliación en Colombia: requisitos, audiencias, costos, tiempos, actas de conciliación, conciliación virtual y mucho más.",

    url: "https://solcentrodeconciliacion.com/blog/preguntas-frecuentes",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Preguntas frecuentes sobre conciliación en Colombia",

    description:
      "Resuelve todas tus dudas sobre conciliación en Colombia con esta guía completa.",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",

      headline: "50 preguntas frecuentes sobre conciliación en Colombia",

      description:
        "Guía completa con respuestas sobre conciliación en Colombia, requisitos, audiencias, costos, tiempos y efectos legales.",

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
        "@id": "https://solcentrodeconciliacion.com/blog/preguntas-frecuentes",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es la conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La conciliación en Colombia es un mecanismo de solución de conflictos donde las partes llegan a un acuerdo con ayuda de un conciliador sin necesidad de un proceso judicial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué casos se pueden conciliar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se pueden conciliar asuntos civiles, comerciales, de familia y algunos laborales siempre que sean derechos disponibles para las partes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si la otra parte no asiste a la conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se expide una constancia de inasistencia que permite continuar con otras acciones legales en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se puede conciliar virtualmente en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, en Colombia se pueden realizar audiencias de conciliación virtuales con verificación de identidad.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto demora una conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Muchas conciliaciones pueden resolverse en una sola audiencia dependiendo del caso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito abogado para asistir a una conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende del caso. En muchos asuntos la asistencia de abogado no es obligatoria, aunque contar con asesoría jurídica puede facilitar la negociación y proteger mejor tus derechos.",
          },
        },
        {
          "@type": "Question",
          name: "¿La conciliación tiene efectos legales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Cuando se logra un acuerdo, el acta de conciliación puede tener mérito ejecutivo y hacer tránsito a cosa juzgada en los términos establecidos por la ley.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué documentos debo llevar a la audiencia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es recomendable presentar contratos, facturas, comprobantes de pago, chats, correos electrónicos y cualquier documento relacionado con el conflicto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta una conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo depende del centro de conciliación, del tipo de asunto y de las tarifas aplicables en cada caso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo asistir virtualmente a una audiencia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Muchos centros de conciliación autorizados ofrecen audiencias virtuales cuando el caso lo permite.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué sucede si las partes llegan a un acuerdo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El conciliador elabora un acta de conciliación donde quedan consignados los compromisos asumidos por las partes y las condiciones para su cumplimiento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué ocurre si no se logra un acuerdo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El conciliador expide la constancia correspondiente, la cual puede servir para continuar con otras actuaciones legales cuando sea procedente.",
          },
        },
        {
          "@type": "Question",
          name: "¿Las empresas también pueden acudir a conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La conciliación es utilizada con frecuencia por empresas para resolver conflictos comerciales, contractuales y de cobro de obligaciones.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se pueden conciliar acuerdos de pago?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Los acuerdos de pago son uno de los asuntos más comunes que se tramitan mediante conciliación en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿La conciliación es confidencial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. En general, las audiencias de conciliación tienen carácter reservado y buscan proteger la información compartida por las partes.",
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
          name: "Preguntas frecuentes sobre conciliación",
          item: "https://solcentrodeconciliacion.com/blog/preguntas-frecuentes",
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

      <PreguntasFrecuentesContent />
    </>
  );
}
