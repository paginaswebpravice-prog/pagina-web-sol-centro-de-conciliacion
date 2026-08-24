import type { Metadata } from "next";
import IncumplimientoAcuerdoVerbalContent from "./IncumplimientoAcuerdoVerbalContent";

export const metadata: Metadata = {
  title:
    "Incumplimiento de un acuerdo verbal en Colombia: qué hacer y cómo reclamar",
  description:
    "¿Incumplieron un acuerdo verbal contigo? Conoce qué validez puede tener un acuerdo verbal en Colombia, cómo demostrarlo y cuándo acudir a conciliación.",
  keywords: [
    "incumplimiento de acuerdo verbal Colombia",
    "acuerdo verbal tiene validez en Colombia",
    "qué hacer si incumplen un acuerdo verbal",
    "conciliación por incumplimiento de acuerdo",
    "prueba de acuerdo verbal Colombia",
    "demanda por acuerdo verbal",
    "incumplimiento de compromiso verbal",
    "conciliación extrajudicial Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-acuerdo-verbal-conciliacion",
  },
  openGraph: {
    title:
      "Incumplimiento de un acuerdo verbal en Colombia: qué hacer y cómo reclamar",
    description:
      "Descubre qué puedes hacer cuando una persona incumple un acuerdo verbal, cómo demostrar lo pactado y cuándo acudir a conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/incumplimiento-acuerdo-verbal-conciliacion",
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
      "Incumplimiento de un acuerdo verbal en Colombia: qué hacer y cómo reclamar",
    description:
      "Guía sobre el incumplimiento de acuerdos verbales en Colombia, su posible validez, las pruebas que pueden ayudar a demostrar lo pactado y la conciliación como alternativa para resolver el conflicto.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-acuerdo-verbal-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Un acuerdo verbal tiene validez en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos, los acuerdos verbales pueden producir efectos jurídicos, siempre que se cumplan los requisitos legales aplicables al negocio o acuerdo realizado. Sin embargo, la principal dificultad suele estar en demostrar qué fue exactamente lo pactado y cuáles eran las obligaciones de cada parte.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo demostrar que existió un acuerdo verbal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, pueden ser relevantes elementos como conversaciones por WhatsApp, correos electrónicos, mensajes, comprobantes de pago, testimonios, documentos posteriores y otros medios que permitan demostrar la existencia y las condiciones del acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede solicitar una conciliación por incumplimiento de un acuerdo verbal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, cuando el asunto sea susceptible de conciliación. Las partes pueden intentar llegar a un acuerdo sobre el cumplimiento de lo pactado, el pago de una obligación, la devolución de dinero, una compensación u otra solución permitida según las circunstancias del caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si la persona no quiere asistir a una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La falta de acuerdo o la inasistencia puede tener consecuencias diferentes según el asunto y el trámite aplicable. En determinados casos, la constancia correspondiente puede permitir continuar con las actuaciones o mecanismos jurídicos que procedan.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué puedo pedir en una conciliación por incumplimiento de un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Según el caso, las partes pueden buscar acuerdos relacionados con el pago de una suma de dinero, el cumplimiento de una obligación, la entrega de un bien, la devolución de recursos, la fijación de plazos o cualquier otra solución jurídicamente viable y susceptible de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es mejor conciliar antes de iniciar un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación puede ser una alternativa útil para intentar resolver el conflicto mediante un acuerdo y evitar, cuando sea posible, un proceso más prolongado. Además, en determinados asuntos puede ser un requisito previo antes de acudir ante un juez.",
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

      <IncumplimientoAcuerdoVerbalContent />
    </>
  );
}
