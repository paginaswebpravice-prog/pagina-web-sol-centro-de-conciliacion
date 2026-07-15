import type { Metadata } from "next";
import VecinosPropiedadHorizontalContent from "./VecinosPropiedadHorizontalContent";

export const metadata: Metadata = {
  title:
    "Conflictos entre vecinos en propiedad horizontal: cómo resolver problemas de convivencia en Colombia (Guía 2026)",

  description:
    "Aprende cómo resolver conflictos entre vecinos en propiedad horizontal en Colombia. Conoce qué hacer ante ruidos, mascotas, parqueaderos, zonas comunes y cómo la conciliación permite alcanzar acuerdos con validez jurídica.",

  keywords: [
    "conflictos entre vecinos",
    "problemas entre vecinos Colombia",
    "vecinos ruidosos Colombia",
    "propiedad horizontal Colombia",
    "problemas de convivencia",
    "conciliación entre vecinos",
    "conflictos propiedad horizontal",
    "ruidos en conjuntos residenciales",
    "mascotas propiedad horizontal",
    "zonas comunes propiedad horizontal",
    "parqueaderos propiedad horizontal",
    "administración propiedad horizontal",
    "ley 675 de 2001",
    "convivencia conjuntos residenciales",
    "centro de conciliación",
    "conciliación Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/vecinos-propiedad-horizontal",
  },

  openGraph: {
    title:
      "¿Problemas con vecinos en propiedad horizontal? Así puedes solucionarlos legalmente",

    description:
      "Descubre cómo resolver conflictos por ruido, mascotas, parqueaderos, zonas comunes y otros problemas de convivencia mediante conciliación en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/vecinos-propiedad-horizontal",

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
      "Cómo resolver conflictos entre vecinos en propiedad horizontal en Colombia",

    description:
      "Guía completa sobre conflictos entre vecinos en conjuntos residenciales, edificios y propiedad horizontal. Aprende cómo funciona la conciliación y cuáles son los derechos y obligaciones de cada propietario o residente.",

    keywords: [
      "conflictos entre vecinos",
      "propiedad horizontal",
      "conciliación",
      "ruidos",
      "mascotas",
      "zonas comunes",
      "parqueaderos",
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
      "https://solcentrodeconciliacion.com/blog/vecinos-propiedad-horizontal",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Cuáles son los conflictos más comunes entre vecinos en propiedad horizontal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Los conflictos más frecuentes están relacionados con ruidos excesivos, mascotas, uso de zonas comunes, parqueaderos, filtraciones, basuras, obras dentro de los apartamentos y problemas de convivencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio acudir a conciliación antes de demandar a un vecino?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende del tipo de conflicto. En muchos casos la conciliación es una alternativa altamente recomendable porque permite alcanzar acuerdos rápidos y evita procesos judiciales prolongados.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si un vecino incumple un acuerdo de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando el acuerdo queda consignado en un acta de conciliación válida, esta puede prestar mérito ejecutivo, permitiendo solicitar judicialmente su cumplimiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿La administración del conjunto puede obligar a conciliar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La administración puede promover el diálogo y sugerir la conciliación, pero la participación depende de la voluntad de las partes cuando la ley no establece una obligación específica.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación sirve para problemas por ruido, mascotas o parqueaderos?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Son algunos de los asuntos que con mayor frecuencia se resuelven mediante conciliación, logrando acuerdos sobre horarios, uso de espacios comunes, manejo de mascotas y demás normas de convivencia.",
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

      <VecinosPropiedadHorizontalContent />
    </>
  );
}
