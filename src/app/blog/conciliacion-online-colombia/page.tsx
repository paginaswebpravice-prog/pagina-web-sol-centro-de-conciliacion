import type { Metadata } from "next";
import ConciliacionOnlineColombiaContent from "./ConciliacionOnlineColombiaContent";

export const metadata: Metadata = {
  title:
    "Conciliación online en Colombia: cómo funciona, requisitos y validez legal | Guía 2026",

  description:
    "Descubre cómo funciona la conciliación online en Colombia, qué casos pueden resolverse de manera virtual, cuáles son sus requisitos, ventajas, validez jurídica y cómo participar desde cualquier ciudad o desde el exterior.",

  keywords: [
    "conciliación online Colombia",
    "conciliación virtual Colombia",
    "conciliación por internet",
    "audiencia virtual conciliación",
    "conciliación virtual con validez legal",
    "conciliación extrajudicial virtual",
    "centro de conciliación virtual",
    "MASC Colombia",
    "conciliación desde el exterior",
    "conciliación familiar virtual",
    "conciliación civil virtual",
    "conciliación laboral virtual",
    "cómo funciona la conciliación online",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-online-colombia",
  },

  openGraph: {
    title:
      "Conciliación online en Colombia: requisitos, ventajas y validez legal",

    description:
      "Conoce cómo funciona una audiencia virtual de conciliación, qué conflictos pueden resolverse online y cuáles son sus beneficios frente a un proceso judicial.",

    url: "https://solcentrodeconciliacion.com/blog/conciliacion-online-colombia",

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
      "Conciliación online en Colombia: cómo funciona, requisitos, ventajas y validez legal",

    description:
      "Guía completa sobre la conciliación online en Colombia. Descubre cómo participar en audiencias virtuales, qué conflictos pueden resolverse, cuáles son los requisitos y por qué este mecanismo ofrece la misma validez jurídica que una conciliación presencial.",

    author: {
      "@type": "Organization",

      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",

      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-online-colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación online tiene validez legal en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando la audiencia es realizada por un centro de conciliación autorizado, el acta de conciliación tiene la misma validez jurídica que una conciliación presencial y puede hacerse cumplir legalmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué necesito para participar en una conciliación virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se requiere un computador, celular o tableta con cámara y micrófono, conexión estable a internet, documento de identidad vigente y los documentos relacionados con el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación online tiene los mismos efectos que la presencial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La modalidad virtual conserva los mismos efectos legales que una audiencia presencial, siempre que se cumplan los requisitos establecidos por la normativa colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es posible conciliar asuntos civiles, comerciales, familiares, laborales, conflictos derivados de contratos, arrendamientos, deudas, obligaciones económicas y otros casos permitidos por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo participar en una conciliación online si estoy fuera de Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchas audiencias virtuales permiten la participación de colombianos que se encuentran en el exterior, siempre que cuenten con conexión a internet y puedan acreditar su identidad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda una conciliación virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo depende de la complejidad del conflicto y de la disponibilidad de las partes, aunque normalmente el procedimiento es mucho más rápido que iniciar un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si las partes no llegan a un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible alcanzar un acuerdo durante la audiencia, las partes conservan la posibilidad de acudir a los mecanismos judiciales correspondientes para resolver el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación online es segura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las audiencias se desarrollan mediante plataformas tecnológicas autorizadas que permiten la identificación de los participantes y garantizan la validez del procedimiento.",
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

      <ConciliacionOnlineColombiaContent />
    </>
  );
}
