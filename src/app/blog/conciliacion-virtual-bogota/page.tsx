import type { Metadata } from "next";
import ConciliacionVirtualBogotaContent from "./ConciliacionVirtualBogotaContent";

export const metadata: Metadata = {
  title:
    "Conciliación virtual en Bogotá: ¿Cómo funciona y cómo solicitarla en 2026?",
  description:
    "Descubre cómo funciona la conciliación virtual en Bogotá, qué conflictos puedes resolver, requisitos, ventajas, costos y cómo realizar una audiencia online con plena validez jurídica en Colombia.",
  keywords: [
    "conciliación virtual Bogotá",
    "conciliación virtual Colombia",
    "conciliación online Bogotá",
    "conciliación por videollamada",
    "conciliación digital Colombia",
    "audiencia virtual conciliación",
    "centro de conciliación virtual",
    "conciliación extrajudicial Bogotá",
    "MASC Colombia",
    "resolver conflictos online",
    "acta de conciliación virtual",
    "conciliación civil virtual",
    "conciliación familiar virtual",
    "conciliación laboral virtual",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-virtual-bogota",
  },
  openGraph: {
    title:
      "Conciliación virtual en Bogotá | Audiencias online con validez jurídica",
    description:
      "Conoce cómo funciona una conciliación virtual en Bogotá, sus ventajas, requisitos y los conflictos que puedes resolver sin desplazarte.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-virtual-bogota",
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
      "Conciliación virtual en Bogotá: cómo funciona, requisitos y ventajas en Colombia",
    description:
      "Guía completa sobre la conciliación virtual en Bogotá. Descubre cómo funciona una audiencia online, qué requisitos debes cumplir, qué conflictos pueden resolverse y cuáles son sus ventajas frente a la conciliación presencial.",
    keywords: [
      "conciliación virtual Bogotá",
      "conciliación online Colombia",
      "audiencia virtual",
      "conciliación digital",
      "MASC Colombia",
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
      "https://solcentrodeconciliacion.com/blog/conciliacion-virtual-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación virtual tiene la misma validez que una presencial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando la audiencia es realizada por un centro de conciliación autorizado, el acta de conciliación virtual tiene la misma validez jurídica que una conciliación presencial en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es posible conciliar conflictos civiles, comerciales, familiares, laborales, arrendamientos, deudas, incumplimientos contractuales y otros asuntos permitidos por la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito estar en Bogotá para participar en una audiencia virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Puedes participar desde cualquier ciudad de Colombia o incluso desde el exterior, siempre que cuentes con conexión a internet y el centro de conciliación autorice la audiencia virtual.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos necesito para una conciliación virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se requiere el documento de identidad, los soportes relacionados con el conflicto y un correo electrónico para recibir las comunicaciones del proceso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto puede tardar una conciliación virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo depende de la complejidad del caso y de la disponibilidad de las partes, aunque normalmente es mucho más rápido que acudir directamente a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede si no se llega a un acuerdo durante la audiencia virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no existe un acuerdo entre las partes, estas conservan la posibilidad de acudir a las autoridades competentes o iniciar el proceso judicial correspondiente.",
        },
      },
      {
        "@type": "Question",
        name: "¿La audiencia virtual es segura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los centros de conciliación autorizados utilizan plataformas tecnológicas que permiten identificar a las partes y garantizar la validez del procedimiento.",
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

      <ConciliacionVirtualBogotaContent />
    </>
  );
}
