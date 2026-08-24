import type { Metadata } from "next";
import PrestamoDineroFamiliaresAmigosConciliacionContent from "./PrestamoDineroFamiliaresAmigosConciliacionContent";

export const metadata: Metadata = {
  title:
    "Préstamo de dinero a familiares o amigos: ¿cómo recuperar el dinero mediante conciliación?",
  description:
    "¿Le prestaste dinero a un familiar o amigo y no te ha pagado? Conoce qué alternativas existen y cómo la conciliación puede ayudar a buscar un acuerdo en Colombia.",
  keywords: [
    "préstamo de dinero a familiares",
    "préstamo de dinero a amigos",
    "me deben dinero familiar",
    "amigo no me devuelve el dinero",
    "presté dinero y no me pagan",
    "conciliación préstamo de dinero",
    "recuperar dinero prestado",
    "préstamo verbal Colombia",
    "deuda entre familiares",
    "deuda entre amigos",
    "acuerdo de pago préstamo personal",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/prestamo-dinero-familiares-amigos-conciliacion",
  },
  openGraph: {
    title:
      "¿Le prestaste dinero a un familiar o amigo? Así puede ayudarte la conciliación",
    description:
      "Conoce qué hacer cuando un familiar o amigo no devuelve un préstamo y cómo intentar llegar a un acuerdo mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/prestamo-dinero-familiares-amigos-conciliacion",
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
      "Préstamo de dinero a familiares o amigos: ¿cómo recuperar el dinero mediante conciliación?",
    description:
      "Guía sobre préstamos de dinero entre familiares o amigos, acuerdos verbales, incumplimientos de pago y la posibilidad de intentar resolver el conflicto mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/prestamo-dinero-familiares-amigos-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué puedo hacer si le presté dinero a un familiar y no me paga?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable organizar la información relacionada con el préstamo, como transferencias, mensajes o documentos disponibles, e intentar establecer una solución. Dependiendo de las características del caso, las partes pueden explorar la conciliación para buscar un acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo reclamar un préstamo de dinero si no firmamos un contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La ausencia de un contrato escrito no permite concluir automáticamente que no exista una obligación. Las circunstancias del préstamo y los soportes disponibles deben analizarse según cada caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar una deuda entre familiares o amigos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo de la naturaleza del conflicto y de los derechos involucrados, las partes pueden acudir a conciliación para intentar llegar a un acuerdo sobre una obligación económica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué se puede acordar en una conciliación por dinero prestado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden explorar alternativas relacionadas con el valor de la obligación, fechas de pago, pagos por cuotas u otras condiciones que permitan solucionar el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si mi familiar o amigo no quiere llegar a un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible alcanzar un acuerdo, las partes pueden evaluar las alternativas disponibles de acuerdo con las circunstancias particulares del conflicto.",
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

      <PrestamoDineroFamiliaresAmigosConciliacionContent />
    </>
  );
}
