import type { Metadata } from "next";
import PrestacionesSocialesConciliacionContent from "./PrestacionesSocialesConciliacionContent";

export const metadata: Metadata = {
  title:
    "Conciliación sobre prestaciones sociales en Colombia | Reclamos y acuerdos laborales",
  description:
    "Conoce cómo funciona la conciliación sobre prestaciones sociales en Colombia. Reclama cesantías, primas, intereses, vacaciones y otros pagos pendientes sin necesidad de demanda.",
  keywords: [
    "prestaciones sociales conciliación",
    "conciliación laboral Colombia",
    "reclamar prestaciones sociales",
    "cesantías pendientes",
    "prima de servicios",
    "vacaciones pendientes",
    "liquidación laboral",
    "centro de conciliación laboral",
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
    title: "Conciliación sobre prestaciones sociales en Colombia",
    description:
      "Aprende cómo reclamar prestaciones sociales mediante conciliación laboral en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/prestaciones-sociales-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación sobre prestaciones sociales en Colombia",
    description:
      "Guía completa sobre conciliación para reclamar prestaciones sociales pendientes en Colombia.",
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
