import type { Metadata } from "next";
import QueEsLaConciliacionContent from "./QueEsLaConciliacionContent";

export const metadata: Metadata = {
  title:
    "¿Qué es la conciliación en Colombia? Cómo funciona, requisitos y beneficios (Guía 2026)",

  description:
    "Descubre qué es la conciliación en Colombia, cómo funciona, cuándo es obligatoria, qué asuntos pueden conciliarse y cuáles son sus beneficios. Guía completa actualizada 2026.",

  keywords: [
    "qué es la conciliación",
    "qué es la conciliación en Colombia",
    "cómo funciona la conciliación",
    "para qué sirve la conciliación",
    "conciliación extrajudicial",
    "conciliación extrajudicial en derecho",
    "centro de conciliación",
    "acta de conciliación",
    "audiencia de conciliación",
    "conciliación Bogotá",
    "conciliación Colombia",
    "solución de conflictos",
    "conciliador",
    "requisito de procedibilidad",
    "conciliación civil",
    "conciliación familiar",
    "conciliación comercial",
    "conciliación laboral",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion",
  },

  openGraph: {
    title:
      "¿Qué es la conciliación en Colombia? Guía completa sobre cómo funciona",

    description:
      "Aprende qué es la conciliación, cuándo procede, cuáles son sus ventajas, cómo solicitar una audiencia y qué validez tiene el acta de conciliación.",

    url: "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion",

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
      "¿Qué es la conciliación en Colombia? Cómo funciona y cuándo utilizarla",

    description:
      "Guía completa sobre la conciliación en Colombia: definición, beneficios, procedimiento, asuntos conciliables, efectos jurídicos y preguntas frecuentes.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación es un mecanismo alternativo de solución de conflictos mediante el cual las partes buscan llegar a un acuerdo con la ayuda de un conciliador autorizado, evitando en muchos casos acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Para qué sirve la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sirve para resolver conflictos civiles, familiares, comerciales, laborales y de otras materias conciliables mediante acuerdos voluntarios con efectos legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo funciona una audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes exponen el conflicto ante un conciliador, quien facilita el diálogo para intentar llegar a un acuerdo. Si existe consenso, se firma un acta de conciliación con efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede solicitar una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cualquier persona natural o jurídica que tenga un conflicto susceptible de conciliación puede solicitar una audiencia ante un centro de conciliación autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué asuntos pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre otros, conflictos civiles, comerciales, familiares, arrendamientos, propiedad horizontal, incumplimientos contractuales, acuerdos de pago y algunos asuntos laborales permitidos por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tipo de proceso. En varios asuntos civiles, comerciales y de familia constituye un requisito de procedibilidad antes de acudir a un juez.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué validez tiene un acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación tiene plenos efectos legales, presta mérito ejecutivo y hace tránsito a cosa juzgada respecto de los acuerdos alcanzados.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si una persona incumple el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La parte afectada puede acudir a las autoridades competentes para exigir el cumplimiento del acta de conciliación, ya que esta constituye un título ejecutivo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda un proceso de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo depende de la complejidad del conflicto y de la disponibilidad de las partes, pero normalmente es mucho más rápido que un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde puedo hacer una conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede realizarse en centros de conciliación autorizados por el Ministerio de Justicia, cámaras de comercio, consultorios jurídicos y otras entidades habilitadas.",
        },
      },
    ],
  };

  return (
    <>
      {/* ✅ SCHEMA EN SEO (como tú lo vienes trabajando) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <QueEsLaConciliacionContent />
    </>
  );
}
