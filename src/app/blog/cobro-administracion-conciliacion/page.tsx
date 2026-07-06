import type { Metadata } from "next";
import CobroAdministracionContent from "./CobroAdministracionContent";

export const metadata: Metadata = {
  title:
    "Cobro de cuotas de administración mediante conciliación en Colombia | Cómo recuperar cartera de propiedad horizontal",
  description:
    "Aprenda cómo recuperar cuotas de administración vencidas mediante conciliación en Colombia. Conozca el proceso, acuerdos de pago, documentos necesarios, ventajas legales y alternativas para propiedad horizontal.",
  keywords: [
    "cobro cuotas de administración",
    "cobro administración propiedad horizontal",
    "conciliación propiedad horizontal",
    "cuotas de administración vencidas",
    "recuperar cartera propiedad horizontal",
    "acuerdo de pago administración",
    "expensas comunes",
    "cobro cartera conjuntos residenciales",
    "deudas administración conjuntos",
    "conciliación cuotas administración Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/cobro-administracion-conciliacion",
  },
  openGraph: {
    title: "Cobro de administración mediante conciliación en Colombia",
    description:
      "Recupera cuotas de administración en conjuntos residenciales mediante conciliación en Colombia de forma legal y rápida.",
    url: "https://solcentrodeconciliacion.com/blog/cobro-administracion-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cobro de administración mediante conciliación en Colombia",
    description:
      "Guía sobre el cobro de cuotas de administración en propiedad horizontal mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/cobro-administracion-conciliacion",

    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    inLanguage: "es-CO",
    articleSection: "Propiedad Horizontal",
    keywords:
      "Cobro de administración, propiedad horizontal, conciliación, cuotas de administración, expensas comunes",
    about: {
      "@type": "Thing",
      name: "Conciliación en propiedad horizontal",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Administradores de propiedad horizontal y propietarios",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se pueden cobrar las cuotas de administración mediante conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación es un mecanismo que permite a las partes negociar el pago de cuotas de administración vencidas y celebrar acuerdos con efectos jurídicos, siempre que el asunto sea conciliable.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si un propietario no paga las cuotas de administración?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El incumplimiento puede generar intereses, afectar las finanzas de la copropiedad y dar lugar a gestiones de cobro, conciliaciones o procesos judiciales para recuperar la deuda.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos se necesitan para iniciar una conciliación por cuotas de administración?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se requiere el estado de cuenta de la deuda, la certificación del administrador o representante legal, los soportes del cobro y cualquier documento que permita demostrar la obligación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación permite hacer acuerdos de pago?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Durante la audiencia las partes pueden pactar acuerdos de pago, definir plazos, establecer cuotas o negociar otras condiciones para facilitar el cumplimiento de la obligación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se llega a un acuerdo durante la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no existe acuerdo, la copropiedad conserva la posibilidad de acudir a los mecanismos judiciales previstos por la ley para reclamar el pago de las cuotas de administración adeudadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez jurídica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación suscrita conforme a la ley produce efectos jurídicos y las partes deben cumplir los compromisos asumidos en ella.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede solicitar una conciliación por cuotas de administración?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación puede ser promovida por la administración de la copropiedad, el representante legal o el propietario interesado en resolver el conflicto mediante un acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo puede tardar una conciliación por cuotas de administración?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la disponibilidad de las partes y del centro de conciliación, aunque normalmente es un procedimiento más rápido que un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita un proceso judicial para cobrar las cuotas de administración?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando las partes alcanzan un acuerdo y este se cumple, normalmente no es necesario acudir a un proceso judicial. Si el acuerdo no se logra o se incumple, pueden ejercerse las acciones legales correspondientes.",
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

      <CobroAdministracionContent />
    </>
  );
}
