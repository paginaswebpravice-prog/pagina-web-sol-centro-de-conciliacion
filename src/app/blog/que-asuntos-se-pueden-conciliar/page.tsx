import { Metadata } from "next";
import QueAsuntosSePuedenConciliarContent from "./QueAsuntosSePuedenConciliarContent";

export const metadata: Metadata = {
  title: "¿Qué asuntos se pueden conciliar en Colombia? | Guía legal completa",
  description:
    "Descubre qué asuntos se pueden conciliar en Colombia: civil, familia, laboral y comercial. Ejemplos reales en Bogotá y requisitos legales.",
  keywords: [
    "que asuntos se pueden conciliar Colombia",
    "conciliacion civil Colombia",
    "conciliacion familia Bogota",
    "conciliacion laboral Colombia",
    "conciliacion comercial Colombia",
  ],
  openGraph: {
    title: "¿Qué asuntos se pueden conciliar en Colombia?",
    description:
      "Guía completa sobre los casos que se pueden conciliar en Colombia y Bogotá.",
    url: "https://solcentrodeconciliacion.com/blog/que-asuntos-se-pueden-conciliar",
    siteName: "Abogados en Bogotá Colombia",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos que se pueden conciliar en Colombia",
    description:
      "Aprende qué conflictos pueden resolverse mediante conciliación en Colombia.",
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/que-asuntos-se-pueden-conciliar",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "¿Qué asuntos se pueden conciliar en Colombia?",
      description:
        "Guía completa sobre los asuntos conciliables en Colombia en materia civil, familiar, laboral y comercial.",
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
            text: "Se pueden conciliar asuntos civiles, comerciales, laborales y de familia siempre que sean derechos disponibles.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se pueden conciliar deudas en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, las deudas y acuerdos de pago son de los casos más comunes en conciliación en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Los conflictos laborales se pueden conciliar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, algunos conflictos laborales como liquidaciones o pagos pendientes pueden resolverse mediante conciliación.",
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
