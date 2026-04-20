import { Metadata } from "next";
import PreguntasFrecuentesContent from "./PreguntasFrecuentesContent";

export const metadata: Metadata = {
  title:
    "Preguntas frecuentes sobre conciliación en Colombia | Guía completa 2026",
  description:
    "Resuelve dudas sobre conciliación en Colombia: qué es, qué casos se pueden conciliar, audiencias virtuales, tiempos y requisitos en Bogotá.",
  keywords: [
    "conciliacion Colombia preguntas frecuentes",
    "conciliacion Bogota dudas",
    "que es conciliacion Colombia",
    "audiencia conciliacion Colombia",
    "proceso conciliacion Colombia",
  ],
  openGraph: {
    title: "Preguntas frecuentes sobre conciliación en Colombia",
    description:
      "Guía clara con respuestas sobre conciliación en Colombia, audiencias, requisitos y tiempos.",
    url: "https://solcentrodeconciliacion.com/blog/preguntas-frecuentes",
    siteName: "Abogados en Bogotá Colombia",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ conciliación en Colombia",
    description: "Respuestas claras sobre conciliación en Colombia y Bogotá.",
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/preguntas-frecuentes",
  },
};

export default function Page() {
  const schema = [
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
