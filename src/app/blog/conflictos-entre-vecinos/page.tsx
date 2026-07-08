import type { Metadata } from "next";
import ConflictosEntreVecinosContent from "./ConflictosEntreVecinosContent";

export const metadata: Metadata = {
  title:
    "Conflictos entre vecinos en Colombia: cómo resolverlos con conciliación sin demanda",
  description:
    "Descubre cómo solucionar conflictos entre vecinos en Colombia mediante conciliación. Aprende qué hacer ante problemas por ruido, mascotas, parqueaderos, linderos, filtraciones, zonas comunes y propiedad horizontal antes de iniciar un proceso judicial.",
  keywords: [
    "conflictos entre vecinos Colombia",
    "conciliación entre vecinos",
    "conciliación vecinal",
    "problemas con vecinos",
    "ruidos molestos vecinos",
    "conflictos propiedad horizontal",
    "problemas de convivencia",
    "conflictos por mascotas",
    "problemas de parqueaderos",
    "conflictos de linderos",
    "conciliación Bogotá",
    "solución conflictos vecinales",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conflictos-entre-vecinos",
  },
  openGraph: {
    title:
      "Conflictos entre vecinos en Colombia | Soluciones mediante conciliación",
    description:
      "Conoce cómo resolver conflictos por ruido, mascotas, parqueaderos, linderos, filtraciones y convivencia mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conflictos-entre-vecinos",
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
      "Conflictos entre vecinos en Colombia: cómo resolver disputas mediante conciliación",
    description:
      "Guía completa para resolver conflictos entre vecinos relacionados con ruido, mascotas, parqueaderos, filtraciones, linderos, zonas comunes y propiedad horizontal mediante conciliación en Colombia.",
    keywords: [
      "conflictos entre vecinos",
      "conciliación vecinal",
      "problemas de convivencia",
      "propiedad horizontal",
      "ruidos molestos",
      "linderos",
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
      "https://solcentrodeconciliacion.com/blog/conflictos-entre-vecinos",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué conflictos entre vecinos pueden conciliarse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden conciliarse conflictos relacionados con ruidos molestos, mascotas, uso de zonas comunes, linderos, filtraciones, daños a propiedades y problemas de convivencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio demandar a un vecino?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. En muchos casos la conciliación permite resolver el conflicto sin necesidad de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y obliga a las partes a cumplir lo acordado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué hacer si mi vecino hace ruido constantemente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lo recomendable es intentar un diálogo inicial y, si el problema continúa, acudir a un centro de conciliación para buscar un acuerdo antes de iniciar acciones judiciales o administrativas.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación sirve para conflictos por mascotas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los conflictos relacionados con mascotas, como ruidos, daños o incumplimiento de normas de convivencia, pueden resolverse mediante conciliación cuando el asunto es conciliable.",
        },
      },
      {
        "@type": "Question",
        name: "¿Pueden resolverse conflictos por parqueaderos mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las disputas por uso indebido de parqueaderos, invasión de espacios o incumplimiento de reglamentos internos pueden abordarse mediante conciliación para lograr acuerdos entre las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación aplica para problemas de propiedad horizontal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos conflictos relacionados con la convivencia en edificios y conjuntos residenciales pueden resolverse mediante conciliación cuando la ley lo permite.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede si una de las partes incumple el acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación tiene efectos jurídicos y, en caso de incumplimiento, puede utilizarse para exigir el cumplimiento de las obligaciones pactadas conforme a la normativa aplicable.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario contratar un abogado para acudir a una conciliación entre vecinos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del caso. En muchos conflictos vecinales las partes pueden asistir directamente al proceso de conciliación, aunque recibir asesoría jurídica puede facilitar la defensa de sus intereses.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación ayuda a evitar un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando las partes alcanzan un acuerdo durante la conciliación, normalmente evitan un proceso judicial, lo que reduce tiempos, costos y el desgaste derivado del conflicto.",
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

      <ConflictosEntreVecinosContent />
    </>
  );
}
