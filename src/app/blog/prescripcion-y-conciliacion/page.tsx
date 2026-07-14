import type { Metadata } from "next";
import PrescripcionYConciliacionContent from "./PrescripcionYConciliacionContent";

export const metadata: Metadata = {
  title:
    "Prescripción y conciliación en Colombia: ¿la conciliación suspende los términos? | Guía 2026",

  description:
    "Descubre cómo afecta la conciliación a la prescripción y la caducidad en Colombia. Conoce cuándo se suspenden los términos, qué ocurre si no hay acuerdo y cómo evitar perder el derecho a reclamar.",

  keywords: [
    "prescripción y conciliación Colombia",
    "la conciliación suspende la prescripción",
    "caducidad y conciliación",
    "prescripción demanda Colombia",
    "suspensión términos conciliación",
    "prescripción civil Colombia",
    "prescripción comercial Colombia",
    "centro de conciliación Bogotá",
    "solicitud de conciliación prescripción",
    "conciliación extrajudicial Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/prescripcion-y-conciliacion",
  },

  openGraph: {
    title:
      "¿La conciliación suspende la prescripción en Colombia? Guía completa 2026",

    description:
      "Aprende cuándo la conciliación puede afectar los términos de prescripción y caducidad en Colombia y evita perder tus derechos por dejar pasar el tiempo.",

    url: "https://solcentrodeconciliacion.com/blog/prescripcion-y-conciliacion",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "¿La conciliación suspende la prescripción en Colombia?",

    description:
      "Guía práctica sobre prescripción, caducidad y conciliación en Colombia.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "¿La conciliación suspende la prescripción en Colombia? Guía completa sobre términos legales",

    description:
      "Explicación sobre la relación entre la conciliación extrajudicial, la prescripción y la caducidad en Colombia.",

    datePublished: "2026-01-01",

    dateModified: "2026-07-14",

    inLanguage: "es-CO",

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
        "https://solcentrodeconciliacion.com/blog/prescripcion-y-conciliacion",
    },
  };

  const breadcrumbSchema = {
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
        name: "Prescripción y conciliación",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación suspende la prescripción?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En determinados casos la solicitud de conciliación extrajudicial puede suspender los términos de prescripción mientras se desarrolla el trámite.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si dejo vencer los términos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La acción puede extinguirse por prescripción o caducidad, impidiendo reclamar judicialmente ciertos derechos.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación reemplaza la demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. Si no se logra acuerdo, la conciliación puede servir como requisito previo para acudir a la vía judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La solicitud de conciliación suspende siempre la prescripción?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No en todos los casos. Los efectos dependen de la naturaleza del conflicto y de las normas aplicables a cada asunto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia existe entre prescripción y caducidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La prescripción extingue la posibilidad de reclamar un derecho por el paso del tiempo, mientras que la caducidad corresponde al vencimiento definitivo del plazo para ejercer determinadas acciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si no se logra un acuerdo en la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, la persona podrá acudir posteriormente a la jurisdicción competente para presentar la demanda correspondiente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es recomendable iniciar una conciliación antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos asuntos sí, ya que puede permitir una solución rápida y además cumplir requisitos previos establecidos por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué riesgos existen si dejo pasar mucho tiempo antes de reclamar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El paso del tiempo puede afectar el ejercicio de algunos derechos y limitar la posibilidad de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita perder los términos legales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede generar efectos sobre determinados términos, pero cada situación debe analizarse individualmente.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué casos es obligatorio intentar una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existen materias en las que la conciliación constituye un requisito previo antes de presentar la demanda.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede orientar sobre la prescripción de un caso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un abogado o un centro de conciliación puede brindar orientación general sobre los efectos jurídicos aplicables a cada situación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación también aplica para empresas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Es utilizada frecuentemente para conflictos comerciales, cobro de obligaciones e incumplimientos contractuales.",
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <PrescripcionYConciliacionContent />
    </>
  );
}
