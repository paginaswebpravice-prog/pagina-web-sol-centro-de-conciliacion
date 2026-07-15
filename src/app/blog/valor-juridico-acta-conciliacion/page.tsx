import type { Metadata } from "next";
import ValorJuridicoActaConciliacionContent from "./ValorJuridicoActaConciliacionContent";

export const metadata: Metadata = {
  title:
    "Valor jurídico del acta de conciliación en Colombia: fuerza legal, efectos y cumplimiento (Guía 2026)",

  description:
    "Descubre cuál es el valor jurídico del acta de conciliación en Colombia, cuándo produce cosa juzgada, cuándo presta mérito ejecutivo, qué sucede si se incumple y por qué tiene plena validez legal.",

  keywords: [
    "valor jurídico del acta de conciliación",
    "acta de conciliación tiene valor legal",
    "fuerza legal del acta de conciliación",
    "efectos jurídicos del acta de conciliación",
    "acta de conciliación Colombia",
    "acta de conciliación obligatoria",
    "mérito ejecutivo acta de conciliación",
    "cosa juzgada conciliación",
    "ejecución del acta de conciliación",
    "cumplimiento del acta de conciliación",
    "conciliación extrajudicial Colombia",
    "centro de conciliación",
    "MASC Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/valor-juridico-acta-conciliacion",
  },

  openGraph: {
    title:
      "¿Qué valor jurídico tiene un acta de conciliación en Colombia? | Guía Completa",

    description:
      "Conoce la fuerza legal del acta de conciliación, sus efectos jurídicos, cuándo constituye título ejecutivo y qué hacer si una de las partes incumple el acuerdo.",

    url: "https://solcentrodeconciliacion.com/blog/valor-juridico-acta-conciliacion",

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
      "Valor jurídico del acta de conciliación en Colombia: fuerza legal, efectos y cumplimiento",

    description:
      "Guía completa sobre el valor jurídico del acta de conciliación en Colombia, la cosa juzgada, el mérito ejecutivo y los mecanismos para exigir el cumplimiento de los acuerdos conciliatorios.",

    keywords: [
      "valor jurídico del acta de conciliación",
      "fuerza legal del acta de conciliación",
      "mérito ejecutivo",
      "cosa juzgada",
      "conciliación Colombia",
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
      "https://solcentrodeconciliacion.com/blog/valor-juridico-acta-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué valor jurídico tiene un acta de conciliación en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación tiene plena validez jurídica. Produce efectos de cosa juzgada y, cuando contiene obligaciones claras, expresas y exigibles, presta mérito ejecutivo para solicitar su cumplimiento ante un juez.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación es obligatoria para las partes?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Una vez firmada válidamente, las partes quedan obligadas a cumplir los compromisos adquiridos dentro del acuerdo conciliatorio.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué sucede si una persona incumple un acta de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La parte afectada puede iniciar un proceso ejecutivo cuando el acta cumple los requisitos legales para prestar mérito ejecutivo y exigir judicialmente el cumplimiento del acuerdo.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación tiene el mismo valor que una sentencia judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Aunque no es una sentencia emitida por un juez, la ley le reconoce importantes efectos jurídicos, entre ellos la cosa juzgada y la posibilidad de ejecución judicial cuando corresponde.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se puede volver a demandar un asunto que ya fue conciliado?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En principio no. Los asuntos válidamente conciliados producen efectos de cosa juzgada, por lo que no pueden volver a discutirse judicialmente entre las mismas partes respecto de los mismos hechos.",
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

      <ValorJuridicoActaConciliacionContent />
    </>
  );
}
