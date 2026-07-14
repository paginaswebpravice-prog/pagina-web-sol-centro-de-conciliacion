import { Metadata } from "next";
import QueAsuntosSePuedenConciliarContent from "./QueAsuntosSePuedenConciliarContent";

export const metadata: Metadata = {
  title:
    "¿Qué asuntos se pueden conciliar en Colombia? Casos, ejemplos y requisitos legales (Guía 2026)",

  description:
    "Conoce qué asuntos se pueden conciliar en Colombia. Descubre los casos civiles, familiares, comerciales y laborales que pueden resolverse mediante conciliación, requisitos, ejemplos y efectos legales.",

  keywords: [
    "qué asuntos se pueden conciliar en Colombia",
    "casos que se pueden conciliar",
    "asuntos conciliables",
    "conciliación extrajudicial Colombia",
    "conciliación civil",
    "conciliación comercial",
    "conciliación familiar",
    "conciliación laboral",
    "ejemplos de conciliación",
    "qué conflictos pueden conciliarse",
    "centro de conciliación Bogotá",
    "acta de conciliación",
    "requisitos conciliación",
    "cómo funciona la conciliación",
    "qué no se puede conciliar",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/que-asuntos-se-pueden-conciliar",
  },

  openGraph: {
    title:
      "¿Qué asuntos se pueden conciliar en Colombia? Casos reales y guía completa",

    description:
      "Descubre qué conflictos pueden resolverse mediante conciliación en Colombia, cuándo procede este mecanismo y qué efectos legales tiene un acuerdo conciliatorio.",

    url: "https://solcentrodeconciliacion.com/blog/que-asuntos-se-pueden-conciliar",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "¿Qué asuntos se pueden conciliar en Colombia? Guía completa",

    description:
      "Casos civiles, comerciales, familiares y laborales que pueden resolverse mediante conciliación en Colombia.",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",

      headline:
        "¿Qué asuntos se pueden conciliar en Colombia? Casos, ejemplos y requisitos legales",

      description:
        "Guía completa sobre los asuntos que pueden resolverse mediante conciliación en Colombia, incluyendo conflictos civiles, comerciales, familiares y laborales.",

      keywords:
        "conciliación Colombia, asuntos conciliables, conciliación civil, conciliación laboral, conciliación familiar, conciliación comercial",

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
          "https://solcentrodeconciliacion.com/blog/que-asuntos-se-pueden-conciliar",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué asuntos se pueden conciliar en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Pueden conciliarse numerosos conflictos civiles, comerciales, familiares y algunos asuntos laborales, siempre que la ley permita a las partes disponer libremente del derecho en discusión.",
          },
        },

        {
          "@type": "Question",
          name: "¿Las deudas pueden resolverse mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Las deudas, acuerdos de pago, incumplimientos contractuales y obligaciones económicas son algunos de los asuntos que con mayor frecuencia se resuelven mediante conciliación.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué conflictos familiares pueden conciliarse?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Dependiendo del caso, pueden conciliarse asuntos relacionados con cuota alimentaria, custodia, visitas, separación de bienes y otros derechos disponibles conforme a la legislación colombiana.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué ocurre si durante la conciliación no se llega a un acuerdo?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Si no se alcanza un acuerdo, dependiendo del tipo de conflicto y de las normas aplicables, la parte interesada podrá acudir posteriormente ante la autoridad competente para continuar con la reclamación.",
          },
        },

        {
          "@type": "Question",
          name: "¿El acta de conciliación tiene efectos legales?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Cuando las partes alcanzan un acuerdo, este queda consignado en un acta de conciliación que produce efectos jurídicos conforme a la legislación colombiana.",
          },
        },

        {
          "@type": "Question",
          name: "¿Necesito abogado para asistir a una conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Dependerá del tipo de conflicto. En muchos casos las partes pueden asistir directamente, aunque recibir orientación jurídica suele facilitar la negociación y brindar mayor seguridad sobre el acuerdo alcanzado.",
          },
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

      <QueAsuntosSePuedenConciliarContent />
    </>
  );
}
