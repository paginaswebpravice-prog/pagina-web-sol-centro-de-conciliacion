import type { Metadata } from "next";
import ConflictosMascotasVecinosContent from "./ConflictosMascotasVecinosContent";

export const metadata: Metadata = {
  title:
    "Conflictos por mascotas entre vecinos en Colombia: qué hacer y cómo resolverlos",
  description:
    "¿Tienes problemas con un vecino por perros, ladridos, mascotas o daños? Conoce qué hacer en Colombia y cuándo la conciliación puede ayudar a resolver el conflicto.",
  keywords: [
    "conflictos por mascotas entre vecinos Colombia",
    "problemas por perros entre vecinos",
    "ladridos de perros vecinos Colombia",
    "vecino se queja por mi perro",
    "mascotas en propiedad horizontal Colombia",
    "problemas con mascotas en conjuntos residenciales",
    "daños causados por mascotas",
    "conciliación por mascotas entre vecinos",
    "conflictos de convivencia mascotas",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conflictos-mascotas-vecinos-conciliacion",
  },
  openGraph: {
    title:
      "Conflictos por mascotas entre vecinos: qué hacer y cómo resolverlos en Colombia",
    description:
      "Conoce cómo manejar conflictos entre vecinos relacionados con mascotas, ladridos, daños y convivencia, y cuándo puede ser útil intentar una conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/conflictos-mascotas-vecinos-conciliacion",
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
      "Conflictos por mascotas entre vecinos en Colombia: qué hacer y cómo resolverlos",
    description:
      "Guía sobre los conflictos entre vecinos relacionados con mascotas, ladridos, daños y convivencia en Colombia, incluyendo alternativas como el diálogo y la conciliación.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conflictos-mascotas-vecinos-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué puedo hacer si tengo problemas con un vecino por mi mascota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lo primero es identificar cuál es la situación que está generando el conflicto e intentar una conversación respetuosa. Dependiendo del caso, pueden revisarse las reglas aplicables y explorar alternativas como la conciliación para buscar acuerdos sobre convivencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar un conflicto entre vecinos por mascotas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo de las circunstancias del caso y de la naturaleza del conflicto, la conciliación puede ser una alternativa para que las partes dialoguen y busquen acuerdos relacionados con la convivencia, las molestias o los daños que estén generando el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si un perro genera molestias constantes a los vecinos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La situación debe analizarse según sus circunstancias. Puede ser útil identificar el tipo de molestia, su frecuencia y las reglas aplicables, además de intentar un diálogo entre las personas involucradas para buscar una solución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si una mascota causa daños?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando existe un daño, las personas involucradas pueden intentar dialogar y buscar un acuerdo sobre la forma de manejar la situación. Dependiendo de los hechos concretos, pueden existir otras alternativas legales que deben evaluarse según cada caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿La administración puede intervenir en conflictos por mascotas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En una propiedad horizontal, la administración puede tener un papel relacionado con la aplicación del reglamento y las normas internas de convivencia, dependiendo de las circunstancias del conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tipo de acuerdos pueden lograrse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, las partes pueden explorar compromisos relacionados con horarios, manejo de las mascotas, prevención de molestias, reparación de daños u otras medidas concretas que permitan mejorar la convivencia.",
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

      <ConflictosMascotasVecinosContent />
    </>
  );
}
