import type { Metadata } from "next";
import PrestacionesSocialesConciliacionContent from "./PrestacionesSocialesConciliacionContent";

export const metadata: Metadata = {
  title:
    "Conciliación de prestaciones sociales en Colombia: cesantías, primas, vacaciones y liquidación laboral",
  description:
    "Aprende cómo reclamar prestaciones sociales mediante conciliación en Colombia. Conoce cómo conciliar cesantías, intereses, primas, vacaciones, salarios pendientes y liquidación laboral sin iniciar una demanda.",
  keywords: [
    "conciliación prestaciones sociales",
    "prestaciones sociales Colombia",
    "conciliación laboral Colombia",
    "reclamar prestaciones sociales",
    "cesantías pendientes",
    "intereses a las cesantías",
    "prima de servicios",
    "vacaciones pendientes",
    "liquidación laboral",
    "salarios pendientes",
    "conciliación cesantías",
    "conciliación prima de servicios",
    "conciliación vacaciones",
    "acuerdo laboral",
    "centro de conciliación laboral Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/prestaciones-sociales-conciliacion",
  },
  openGraph: {
    title:
      "Conciliación de prestaciones sociales en Colombia | Guía para reclamar cesantías, primas y vacaciones",
    description:
      "Descubre cuándo puedes reclamar prestaciones sociales mediante conciliación, qué documentos necesitas y cómo llegar a un acuerdo sin acudir a un proceso judicial.",
    url: "https://solcentrodeconciliacion.com/blog/prestaciones-sociales-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conciliación de prestaciones sociales en Colombia",
    description:
      "Guía para reclamar cesantías, primas, vacaciones y otros derechos laborales mediante conciliación.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Conciliación de prestaciones sociales en Colombia: cómo reclamar cesantías, primas, vacaciones y liquidación laboral",
    description:
      "Guía completa para trabajadores y empleadores sobre la conciliación de prestaciones sociales en Colombia, incluyendo cesantías, intereses, primas, vacaciones, salarios pendientes y acuerdos laborales.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/prestaciones-sociales-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué prestaciones sociales pueden reclamarse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden reclamarse cesantías, intereses a las cesantías, primas de servicios, vacaciones y otros conceptos laborales pendientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo alcanzado mediante conciliación tiene efectos jurídicos y puede exigirse legalmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario demandar para reclamar prestaciones sociales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No siempre. La conciliación permite resolver muchos conflictos laborales sin necesidad de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué prestaciones sociales pueden reclamarse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es posible conciliar diferencias relacionadas con cesantías, intereses sobre cesantías, prima de servicios, vacaciones, salarios pendientes y otros conceptos laborales conciliables.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación laboral evita presentar una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí. Cuando las partes llegan a un acuerdo durante la conciliación, no es necesario iniciar un proceso judicial respecto del conflicto conciliado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable llevar contrato de trabajo, liquidación, desprendibles de nómina, comprobantes de pago, consignaciones de cesantías y cualquier documento relacionado con el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el empleador incumple el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si el acuerdo quedó consignado en un acta de conciliación, esta puede tener efectos jurídicos que permiten exigir su cumplimiento conforme a la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Pueden conciliarse salarios pendientes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Dependiendo del caso, los salarios pendientes y otros conceptos laborales pueden incluirse dentro del acuerdo conciliatorio.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación sirve para revisar una liquidación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Es frecuente utilizar la conciliación para revisar diferencias en la liquidación final del contrato de trabajo y buscar un acuerdo entre trabajador y empleador.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la disponibilidad de las partes y de la complejidad del conflicto, aunque muchas controversias pueden resolverse en una sola audiencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio asistir con abogado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La necesidad de contar con abogado depende del caso concreto. Sin embargo, recibir asesoría jurídica puede facilitar la negociación y proteger mejor los derechos de las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede hacer una conciliación laboral virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación autorizados realizan audiencias virtuales cuando las condiciones del caso lo permiten.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos de pago pueden incluirse en la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Es posible acordar pagos únicos o por cuotas, siempre que exista consentimiento entre las partes y el acuerdo quede consignado en el acta correspondiente.",
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

      <PrestacionesSocialesConciliacionContent />
    </>
  );
}
