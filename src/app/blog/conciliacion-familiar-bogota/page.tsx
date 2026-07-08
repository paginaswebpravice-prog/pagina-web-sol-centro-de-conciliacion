import type { Metadata } from "next";
import ConciliacionFamiliarBogotaContent from "./ConciliacionFamiliarBogotaContent";

export const metadata: Metadata = {
  title:
    "Conciliación Familiar en Bogotá | Custodia, Cuota Alimentaria, Visitas y Separación",

  description:
    "Conoce cómo funciona la conciliación familiar en Bogotá. Aprende cómo resolver conflictos sobre custodia de hijos, cuota alimentaria, régimen de visitas, separación de bienes y otros asuntos familiares sin acudir a un proceso judicial.",

  keywords: [
    "conciliación familiar Bogotá",
    "conciliación familiar Colombia",
    "conciliación de familia",
    "conciliación custodia hijos",
    "conciliación cuota alimentaria",
    "conciliación régimen de visitas",
    "conciliación separación",
    "conciliación padres separados",
    "centro de conciliación familiar Bogotá",
    "conciliación antes de demanda familia",
    "custodia hijos Bogotá",
    "alimentos hijos conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-familiar-bogota",
  },

  openGraph: {
    title:
      "Conciliación Familiar en Bogotá | Guía Completa sobre Custodia, Alimentos y Visitas",

    description:
      "Descubre cuándo procede la conciliación familiar, qué asuntos pueden resolverse y cómo obtener acuerdos con validez legal en Bogotá.",

    url: "https://solcentrodeconciliacion.com/blog/conciliacion-familiar-bogota",

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
      "Conciliación Familiar en Bogotá: Custodia, Cuota Alimentaria, Régimen de Visitas y Separación",

    alternativeHeadline:
      "Guía completa sobre conciliación familiar en Colombia",

    description:
      "Aprende cómo funciona la conciliación familiar en Bogotá, cuáles son los conflictos que pueden resolverse mediante este mecanismo y cómo obtener acuerdos con plena validez jurídica sobre custodia, alimentos, visitas y demás asuntos familiares.",

    keywords: [
      "conciliación familiar Bogotá",
      "custodia hijos",
      "cuota alimentaria",
      "régimen de visitas",
      "conciliación familia Colombia",
      "centro de conciliación Bogotá",
    ],

    inLanguage: "es-CO",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-familiar-bogota",

    articleSection: [
      "Conciliación Familiar",
      "Derecho de Familia",
      "Custodia",
      "Cuota Alimentaria",
      "Régimen de Visitas",
    ],

    about: [
      {
        "@type": "Thing",
        name: "Conciliación Familiar",
      },
      {
        "@type": "Thing",
        name: "Custodia de Hijos",
      },
      {
        "@type": "Thing",
        name: "Cuota Alimentaria",
      },
      {
        "@type": "Thing",
        name: "Régimen de Visitas",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué conflictos familiares pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Es posible conciliar asuntos relacionados con custodia de hijos, cuota alimentaria, régimen de visitas, separación de bienes, responsabilidades económicas y otros conflictos familiares permitidos por la ley.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación familiar es obligatoria antes de presentar una demanda?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "En determinados asuntos de familia la conciliación constituye un requisito de procedibilidad antes de acudir ante un juez.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación familiar tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene plenos efectos jurídicos y puede exigirse judicialmente en caso de incumplimiento.",
        },
      },

      {
        "@type": "Question",
        name: "¿Se puede conciliar la custodia de los hijos?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los padres pueden llegar a acuerdos sobre la custodia, siempre que se garantice el interés superior del menor.",
        },
      },

      {
        "@type": "Question",
        name: "¿Es posible acordar una cuota alimentaria mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite fijar, modificar o actualizar la cuota alimentaria teniendo en cuenta las necesidades del menor y la capacidad económica de los padres.",
        },
      },

      {
        "@type": "Question",
        name: "¿Puede establecerse un régimen de visitas mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Es posible acordar horarios, días de visita, vacaciones, fechas especiales y otros aspectos relacionados con el contacto entre padres e hijos.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué pasa si una de las partes no asiste a la audiencia?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "La ausencia puede generar la expedición de la constancia correspondiente para continuar con las actuaciones legales cuando sea procedente.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué documentos se necesitan para una conciliación familiar?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se solicita el documento de identidad, registros civiles, información relacionada con el conflicto y los soportes necesarios según cada caso.",
        },
      },

      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda una conciliación familiar?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la complejidad del conflicto y de la disposición de las partes para llegar a un acuerdo, aunque muchos casos se resuelven en una o pocas audiencias.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué ocurre si no se logra un acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando no es posible conciliar, las partes podrán acudir a las vías judiciales correspondientes si la ley lo permite.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación familiar puede realizarse de forma virtual?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Algunos centros de conciliación cuentan con mecanismos virtuales para realizar audiencias cuando las condiciones legales lo permiten.",
        },
      },

      {
        "@type": "Question",
        name: "¿Por qué es recomendable intentar una conciliación antes de demandar?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Porque permite resolver el conflicto de forma más rápida, reduce costos, protege las relaciones familiares y facilita acuerdos construidos por las propias partes.",
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

      <ConciliacionFamiliarBogotaContent />
    </>
  );
}
