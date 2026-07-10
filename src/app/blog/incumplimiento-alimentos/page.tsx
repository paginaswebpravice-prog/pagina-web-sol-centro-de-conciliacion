import type { Metadata } from "next";
import IncumplimientoAlimentosContent from "./IncumplimientoAlimentosContent";

export const metadata: Metadata = {
  title:
    "Incumplimiento de conciliación de alimentos en Colombia: qué hacer si no pagan la cuota alimentaria (Guía 2026)",

  description:
    "¿No están cumpliendo el acuerdo de cuota alimentaria? Descubre qué hacer cuando se incumple un acta de conciliación de alimentos, cómo exigir el pago, cuándo demandar y qué acciones legales existen en Colombia.",

  keywords: [
    "incumplimiento conciliación alimentos",
    "incumplimiento cuota alimentaria",
    "no pagan cuota alimentaria",
    "qué hacer si no pagan alimentos",
    "demanda por cuota alimentaria",
    "acta de conciliación alimentos",
    "ejecutar acta de conciliación",
    "embargo cuota alimentaria",
    "proceso ejecutivo alimentos",
    "conciliación alimentos Colombia",
    "conciliación familiar",
    "centro de conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-alimentos",
  },

  openGraph: {
    title:
      "¿Incumplieron la conciliación de alimentos? Conoce qué hacer en Colombia",

    description:
      "Aprende cómo reclamar el incumplimiento de una cuota alimentaria acordada mediante conciliación, qué documentos necesitas y cuándo puedes acudir a un juez.",

    url: "https://solcentrodeconciliacion.com/blog/incumplimiento-alimentos",

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
      "Incumplimiento de conciliación de alimentos en Colombia: qué hacer cuando no pagan la cuota alimentaria",

    description:
      "Guía completa para entender las consecuencias del incumplimiento de una conciliación de alimentos, cómo exigir el pago de las cuotas vencidas, cuándo iniciar un proceso ejecutivo y qué derechos protege la ley colombiana.",

    keywords: [
      "incumplimiento cuota alimentaria",
      "acta de conciliación alimentos",
      "proceso ejecutivo alimentos",
      "demanda alimentos",
      "embargo alimentos",
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
      "https://solcentrodeconciliacion.com/blog/incumplimiento-alimentos",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué hacer si el padre o la madre incumple la cuota alimentaria?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando existe un acta de conciliación y la persona obligada deja de cumplir los pagos, es posible acudir a mecanismos judiciales para exigir el cumplimiento del acuerdo y reclamar las cuotas adeudadas.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación sirve para demandar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación presta mérito ejecutivo, lo que permite iniciar un proceso judicial para exigir el cumplimiento de la obligación alimentaria cuando existe incumplimiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se pueden cobrar cuotas alimentarias atrasadas?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Las cuotas vencidas pueden reclamarse mediante los mecanismos legales previstos en la legislación colombiana, siempre que existan los documentos que soporten la obligación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si el incumplimiento continúa durante varios meses?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El incumplimiento prolongado puede generar procesos judiciales para obtener el pago de las obligaciones pendientes y otras medidas previstas por la ley para proteger los derechos del beneficiario.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es posible modificar la cuota alimentaria si cambió la situación económica?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando cambian las circunstancias económicas de cualquiera de las partes, es posible solicitar una nueva conciliación para revisar las condiciones del acuerdo.",
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

      <IncumplimientoAlimentosContent />
    </>
  );
}
