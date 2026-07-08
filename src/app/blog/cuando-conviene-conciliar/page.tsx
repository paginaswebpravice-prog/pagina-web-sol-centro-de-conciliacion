import { Metadata } from "next";
import CuandoConvieneConciliarContent from "./CuandoConvieneConciliarContent";

export const metadata: Metadata = {
  title:
    "¿Cuándo conviene conciliar en Colombia? Casos, beneficios y cuándo NO hacerlo",
  description:
    "Descubre cuándo conviene acudir a una conciliación en Colombia. Conoce los casos más frecuentes, cuándo es obligatoria, sus ventajas, ejemplos reales y cómo saber si tu conflicto puede resolverse sin demanda.",
  keywords: [
    "cuando conviene conciliar Colombia",
    "cuando acudir a conciliación",
    "casos de conciliación Colombia",
    "cuando ir a conciliación",
    "conciliación extrajudicial Colombia",
    "conciliación Bogotá",
    "ventajas de la conciliación",
    "qué conflictos pueden conciliarse",
    "cuándo no conviene conciliar",
    "centro de conciliación",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "¿Cuándo conviene conciliar en Colombia? Guía completa con ejemplos",
    description:
      "Aprende cuándo es recomendable acudir a conciliación, qué conflictos pueden resolverse, cuáles son sus ventajas y cuándo es mejor acudir directamente a un juez.",
    url: "https://solcentrodeconciliacion.com/blog/cuando-conviene-conciliar",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Cuándo conviene conciliar en Colombia? Casos y recomendaciones",
    description:
      "Conoce cuándo la conciliación es la mejor alternativa para resolver un conflicto sin acudir a un proceso judicial.",
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/cuando-conviene-conciliar",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "¿Cuándo conviene conciliar en Colombia? Casos, ventajas y recomendaciones",
      alternativeHeadline:
        "Guía para saber cuándo acudir a conciliación antes de presentar una demanda",
      description:
        "Guía completa para conocer cuándo conviene acudir a conciliación en Colombia, qué conflictos pueden resolverse, cuándo es obligatoria, cuáles son sus beneficios y en qué casos no resulta recomendable.",
      keywords:
        "cuando conviene conciliar, conciliación Colombia, conciliación extrajudicial, conflictos conciliables, centro de conciliación",
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
          "https://solcentrodeconciliacion.com/blog/cuando-conviene-conciliar",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuándo conviene acudir a una conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Conviene acudir a conciliación cuando existe disposición para dialogar, se busca una solución rápida, se pretende evitar un proceso judicial o la ley exige intentar una conciliación antes de demandar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué conflictos pueden resolverse mediante conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es posible conciliar conflictos familiares, civiles, comerciales, de arrendamiento, deudas, conflictos entre vecinos, controversias entre empresas y otros asuntos permitidos por la legislación colombiana.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuándo no es recomendable acudir a conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No suele ser recomendable cuando una de las partes no tiene intención de negociar, el asunto no es conciliable, existe violencia, amenazas o se requiere una medida urgente que solo puede adoptar un juez.",
          },
        },
        {
          "@type": "Question",
          name: "¿La conciliación es obligatoria antes de demandar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende del tipo de proceso. En algunos asuntos la conciliación constituye un requisito de procedibilidad antes de presentar la demanda ante un juez.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo puede tardar una conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La duración depende de la complejidad del conflicto y de la disposición de las partes. En muchos casos el conflicto puede resolverse en una o pocas audiencias.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué beneficios ofrece la conciliación frente a un juicio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Permite ahorrar tiempo y costos, mantener relaciones personales o comerciales, construir acuerdos flexibles y obtener un acta con efectos jurídicos cuando las partes llegan a un acuerdo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué sucede si las partes no llegan a un acuerdo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si no es posible conciliar, las partes conservan la posibilidad de acudir a la vía judicial para que un juez resuelva el conflicto.",
          },
        },
        {
          "@type": "Question",
          name: "¿El acta de conciliación tiene validez legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación celebrada en un centro autorizado tiene efectos jurídicos y, en caso de incumplimiento, puede hacerse exigible conforme a la ley.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CuandoConvieneConciliarContent />
    </>
  );
}
