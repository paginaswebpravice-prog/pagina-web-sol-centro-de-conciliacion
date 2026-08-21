import type { Metadata } from "next";
import RuidoEntreVecinosContent from "./RuidoEntreVecinosContent";

export const metadata: Metadata = {
  title:
    "Ruido entre vecinos en Colombia: qué hacer y cómo resolver el conflicto",
  description:
    "¿Tienes problemas por ruido con un vecino? Conoce qué hacer en Colombia, cómo buscar una solución y cuándo la conciliación puede ayudar a resolver el conflicto.",
  keywords: [
    "ruido entre vecinos Colombia",
    "problemas por ruido vecinos",
    "vecino hace mucho ruido qué hacer Colombia",
    "ruidos molestos vecinos Colombia",
    "conciliación ruido entre vecinos",
    "conflictos entre vecinos por ruido",
    "que hacer con un vecino ruidoso",
    "problemas de convivencia ruido",
    "conciliación entre vecinos Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/ruido-entre-vecinos-conciliacion",
  },
  openGraph: {
    title:
      "Ruido entre vecinos en Colombia: qué hacer y cómo resolver el conflicto",
    description:
      "Conoce las alternativas para manejar problemas por ruidos molestos entre vecinos y cuándo la conciliación puede ser una opción para llegar a un acuerdo.",
    url: "https://solcentrodeconciliacion.com/blog/ruido-entre-vecinos-conciliacion",
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
      "Ruido entre vecinos en Colombia: qué hacer y cómo resolver el conflicto",
    description:
      "Guía sobre qué hacer frente a problemas por ruido entre vecinos en Colombia, las alternativas para buscar una solución y el papel de la conciliación en este tipo de conflictos.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/ruido-entre-vecinos-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué puedo hacer si mi vecino hace mucho ruido?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lo recomendable es intentar inicialmente una comunicación respetuosa para explicar la situación. Si el problema continúa y existe disposición de las partes, pueden buscar alternativas como la conciliación para intentar construir un acuerdo sobre horarios, comportamientos y medidas que permitan mejorar la convivencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar un conflicto por ruido entre vecinos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo de las circunstancias del caso y de la naturaleza del conflicto, la conciliación puede ser una alternativa para que las partes dialoguen y busquen acuerdos relacionados con la convivencia, los horarios, las molestias y otros compromisos que ayuden a solucionar la situación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tipo de acuerdos se pueden lograr por problemas de ruido?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden proponer acuerdos relacionados con horarios, niveles de ruido, realización de reuniones, uso de equipos de sonido, obras o cualquier otra situación concreta que esté generando el conflicto, siempre que el acuerdo sea legal y corresponda a las circunstancias del caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el vecino no quiere llegar a un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible alcanzar un acuerdo, la persona afectada puede evaluar otras alternativas o acudir a las autoridades e instancias competentes según las circunstancias particulares del caso y las normas aplicables.",
        },
      },
      {
        "@type": "Question",
        name: "¿Un problema por ruido en un conjunto residencial también puede involucrar a la administración?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Dependiendo de la situación, la administración puede tener un papel relacionado con la aplicación del reglamento de propiedad horizontal y las normas internas de convivencia. Sin embargo, la participación y responsabilidad de cada persona dependerán de los hechos concretos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es mejor intentar llegar a un acuerdo antes de iniciar un proceso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos conflictos de convivencia, intentar un diálogo o explorar mecanismos de solución como la conciliación puede ayudar a las partes a buscar una salida directa al problema. La conveniencia de esta alternativa depende de las circunstancias específicas del caso.",
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

      <RuidoEntreVecinosContent />
    </>
  );
}
