import type { Metadata } from "next";
import ObrasRemodelacionesDanosVecinosConciliacionContent from "./ObrasRemodelacionesDanosVecinosConciliacionContent";

export const metadata: Metadata = {
  title:
    "¿Una obra o remodelación dañó tu vivienda? Cómo resolver conflictos entre vecinos mediante conciliación",
  description:
    "¿Una obra o remodelación de un vecino causó daños, filtraciones, grietas o afectaciones en tu vivienda? Conoce qué hacer y cómo la conciliación puede ayudar a buscar una solución en Colombia.",
  keywords: [
    "obra dañó vivienda vecino",
    "remodelación daños vecino",
    "daños por obra vecino",
    "conciliación daños entre vecinos",
    "grietas por obra vecino",
    "filtraciones por remodelación",
    "daños propiedad horizontal obra",
    "conflicto vecinos por remodelación",
    "conciliación por daños vivienda",
    "daños causados por construcción vecino",
    "reclamar daños por remodelación",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/obras-remodelaciones-danos-vecinos-conciliacion",
  },
  openGraph: {
    title:
      "¿Una obra o remodelación dañó tu vivienda? Conoce cómo buscar una solución",
    description:
      "Descubre qué hacer cuando una obra o remodelación genera daños en la vivienda de un vecino y cuándo puede ser útil acudir a conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/obras-remodelaciones-danos-vecinos-conciliacion",
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
      "¿Una obra o remodelación dañó tu vivienda? Cómo resolver conflictos entre vecinos mediante conciliación",
    description:
      "Guía sobre qué hacer cuando una obra o remodelación genera daños entre vecinos y cómo buscar una solución mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/obras-remodelaciones-danos-vecinos-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué puedo hacer si la remodelación de mi vecino causó daños en mi vivienda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable documentar los daños, reunir la información relacionada con la obra y comunicar la situación a la persona responsable. Dependiendo del caso, las partes pueden intentar llegar a un acuerdo directo o evaluar la posibilidad de acudir a conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden conciliar los daños causados por una obra o remodelación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo de la naturaleza del conflicto y de que el asunto sea susceptible de conciliación, las partes pueden acudir a un centro de conciliación para intentar construir un acuerdo sobre la reparación de los daños, el pago de los perjuicios u otras soluciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pruebas sirven para demostrar daños causados por una obra vecina?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden ser útiles fotografías, videos, comunicaciones, cotizaciones, informes técnicos, facturas, presupuestos y otros documentos que permitan demostrar la existencia de los daños y su relación con los hechos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo pedir que reparen los daños causados por una remodelación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La reparación de los daños puede ser una de las soluciones que las partes discutan y acuerden, dependiendo de las circunstancias particulares del conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si mi vecino no acepta reparar los daños?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando no es posible resolver el conflicto directamente, puede evaluarse la posibilidad de acudir a un mecanismo como la conciliación o analizar las demás alternativas que correspondan según las circunstancias del caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿La administración del edificio debe intervenir en un conflicto por daños causados durante una remodelación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La participación de la administración puede depender de las circunstancias del caso, del reglamento de propiedad horizontal y de la relación del conflicto con las normas internas o con elementos comunes del edificio o conjunto.",
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

      <ObrasRemodelacionesDanosVecinosConciliacionContent />
    </>
  );
}
