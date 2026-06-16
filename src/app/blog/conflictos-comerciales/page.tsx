import type { Metadata } from "next";
import ConflictosComercialesContent from "./ConflictosComercialesContent";

export const metadata: Metadata = {
  title:
    "Conciliación para conflictos comerciales en Colombia | Solución empresarial",
  description:
    "Aprende cómo resolver conflictos comerciales mediante conciliación en Colombia. Alternativa rápida y efectiva para empresas, socios, proveedores y clientes.",
  keywords: [
    "conflictos comerciales",
    "conciliación comercial Colombia",
    "conciliación empresarial",
    "disputas comerciales",
    "conflictos entre empresas",
    "conciliación Bogotá",
    "incumplimiento comercial",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conflictos-comerciales",
  },
  openGraph: {
    title: "Conciliación para conflictos comerciales en Colombia",
    description:
      "Conoce cómo resolver disputas empresariales y comerciales mediante conciliación sin acudir a largos procesos judiciales.",
    url: "https://solcentrodeconciliacion.com/blog/conflictos-comerciales",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación para conflictos comerciales en Colombia",
    description:
      "Guía sobre conciliación comercial para resolver disputas empresariales de manera rápida y eficiente.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conflictos-comerciales",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un conflicto comercial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una controversia que surge entre empresas, comerciantes, proveedores, clientes o socios por incumplimientos, pagos, contratos u obligaciones comerciales.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación sirve para resolver conflictos empresariales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación es uno de los mecanismos más utilizados para resolver disputas comerciales sin necesidad de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo alcanzado tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse legalmente en caso de incumplimiento.",
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

      <ConflictosComercialesContent />
    </>
  );
}
