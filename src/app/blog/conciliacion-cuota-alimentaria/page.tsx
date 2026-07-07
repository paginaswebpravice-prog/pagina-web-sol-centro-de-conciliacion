import type { Metadata } from "next";
import ConciliacionCuotaAlimentariaContent from "./ConciliacionCuotaAlimentariaContent";

export const metadata: Metadata = {
  title:
    "Conciliación de cuota alimentaria en Colombia: cómo fijarla, modificarla y llegar a un acuerdo",
  description:
    "Aprende cómo funciona la conciliación de cuota alimentaria en Colombia. Descubre cómo fijar, modificar o cobrar una cuota alimentaria, qué documentos necesitas, cómo es la audiencia y qué hacer si existe incumplimiento.",
  keywords: [
    "conciliación cuota alimentaria",
    "cuota alimentaria Colombia",
    "fijar cuota alimentaria",
    "modificar cuota alimentaria",
    "conciliación alimentos",
    "conciliación familiar",
    "cuota alimentaria hijos",
    "audiencia cuota alimentaria",
    "incumplimiento cuota alimentaria",
    "conciliación familiar Bogotá",
    "centro de conciliación Bogotá",
    "acuerdo cuota alimentaria",
    "conciliación Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-cuota-alimentaria",
  },
  openGraph: {
    title:
      "Conciliación de cuota alimentaria en Colombia: guía completa paso a paso",
    description:
      "Conoce cómo fijar, modificar o conciliar una cuota alimentaria en Colombia, qué documentos se requieren y qué sucede si una de las partes incumple el acuerdo.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-cuota-alimentaria",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conciliación de cuota alimentaria en Colombia | Guía completa",
    description:
      "Aprende cómo establecer una cuota alimentaria mediante conciliación y conoce los efectos legales del acuerdo.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Conciliación de cuota alimentaria en Colombia: cómo fijarla, modificarla y qué hacer si existe incumplimiento",
    description:
      "Guía completa sobre la conciliación de cuota alimentaria en Colombia. Aprende cómo fijar una cuota, modificarla, qué documentos presentar, cómo se desarrolla la audiencia y cuáles son los efectos jurídicos del acuerdo.",
    image:
      "https://solcentrodeconciliacion.com/images/blog/conciliacion-cuota-alimentaria.webp",
    inLanguage: "es-CO",
    keywords: [
      "conciliación cuota alimentaria",
      "cuota alimentaria Colombia",
      "conciliación familiar",
      "alimentos menores",
      "modificar cuota alimentaria",
      "fijar cuota alimentaria",
      "audiencia conciliación alimentos",
    ],
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
      logo: {
        "@type": "ImageObject",
        url: "https://solcentrodeconciliacion.com/logo.png",
      },
    },
    about: [
      {
        "@type": "Thing",
        name: "Conciliación familiar",
      },
      {
        "@type": "Thing",
        name: "Cuota alimentaria",
      },
      {
        "@type": "Thing",
        name: "Derecho de alimentos",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://solcentrodeconciliacion.com/blog/conciliacion-cuota-alimentaria",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación de cuota alimentaria en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un procedimiento mediante el cual los padres o responsables pueden llegar a un acuerdo sobre el valor, forma de pago y demás condiciones de la cuota alimentaria con la intervención de un conciliador autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué gastos puede incluir una cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, puede comprender alimentación, educación, salud, vivienda, vestuario, transporte, recreación y otros gastos necesarios para garantizar el bienestar del menor.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se determina el valor de la cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El valor se establece teniendo en cuenta las necesidades del menor y la capacidad económica de quienes tienen la obligación de suministrar alimentos, buscando un acuerdo justo para ambas partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos suelen solicitarse para una conciliación de alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se solicita el documento de identidad, registro civil del menor, información sobre ingresos, gastos y cualquier soporte que permita analizar la situación económica de las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación de cuota alimentaria tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede hacerse valer legalmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿La cuota alimentaria puede modificarse después de la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando cambian las necesidades del menor o la capacidad económica de alguno de los padres, es posible buscar un nuevo acuerdo mediante conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si una persona incumple el acuerdo de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación puede utilizarse para iniciar las actuaciones legales correspondientes y exigir el cumplimiento de las obligaciones pactadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio tener abogado para una conciliación de alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, muchas conciliaciones pueden adelantarse directamente por las partes ante un centro de conciliación autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación de cuota alimentaria puede realizarse de manera virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación en Colombia ofrecen la posibilidad de realizar audiencias virtuales, siempre que se cumplan los requisitos establecidos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo puede tardar una conciliación de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo depende de cada caso y de la disponibilidad de las partes, pero en muchas situaciones el conflicto puede resolverse en una sola audiencia cuando existe voluntad para llegar a un acuerdo.",
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

      <ConciliacionCuotaAlimentariaContent />
    </>
  );
}
