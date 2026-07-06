import { Metadata } from "next";
import CitacionContent from "./CitacionContent";

export const metadata: Metadata = {
  title:
    "Citación a Audiencia de Conciliación Laboral en Colombia: Modelo, Formato y Requisitos (2026)",
  description:
    "Descarga un modelo de citación a audiencia de conciliación laboral en Colombia. Conoce qué debe contener, cómo elaborarla, requisitos legales, ejemplos y el procedimiento paso a paso.",
  keywords: [
    "citación audiencia conciliación laboral Colombia",
    "conciliación laboral Bogotá",
    "derecho laboral Colombia",
    "modelo citación conciliación",
    "audiencia conciliación trabajo",
  ],
  openGraph: {
    title: "Citación a audiencia de conciliación laboral en Colombia (Modelo)",
    description:
      "Modelo de citación a audiencia de conciliación laboral en Colombia con requisitos y formato listo para usar.",
    url: "https://solcentrodeconciliacion.com/blog/citacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citación a audiencia de conciliación laboral en Colombia",
    description:
      "Formato y guía práctica para hacer una citación a conciliación laboral en Colombia.",
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/citacion",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Citación a audiencia de conciliación laboral en Colombia (Modelo)",
      description:
        "Modelo de citación a audiencia de conciliación laboral en Colombia, requisitos legales y procedimiento.",
      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      publisher: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://solcentrodeconciliacion.com/blog/citacion",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Conciliación laboral en Colombia",
      provider: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      areaServed: {
        "@type": "City",
        name: "Bogotá",
      },
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es una citación a audiencia de conciliación laboral en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el documento mediante el cual un centro de conciliación autorizado cita formalmente a las partes para asistir a una audiencia de conciliación con el fin de intentar resolver un conflicto laboral antes de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede enviar una citación a audiencia de conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La citación normalmente es expedida por un centro de conciliación autorizado, una autoridad competente o la entidad encargada de adelantar el trámite conciliatorio, según corresponda.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué debe contener una citación a audiencia de conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debe incluir la identificación de las partes, el motivo de la conciliación, la fecha, hora y lugar o enlace de la audiencia, el nombre del conciliador cuando corresponda y la información necesaria para asistir al procedimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿La citación a conciliación laboral puede realizarse de forma virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación autorizados realizan audiencias virtuales mediante plataformas digitales, siempre que se garantice la identificación de las partes y el cumplimiento de los requisitos legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una audiencia de conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, pueden solicitarse documentos como el contrato de trabajo, liquidación laboral, desprendibles de nómina, comunicaciones entre las partes, comprobantes de pago y cualquier otro soporte relacionado con el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si una de las partes no asiste a la audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si una de las partes no comparece, el conciliador dejará constancia de la inasistencia y el procedimiento continuará conforme a las normas aplicables al caso concreto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio asistir a una audiencia de conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La obligación de asistir depende del tipo de conflicto y de los requisitos establecidos por la legislación aplicable. En algunos casos la conciliación constituye un requisito previo antes de acudir a otras instancias.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos laborales pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación suele utilizarse para resolver conflictos relacionados con salarios, prestaciones sociales, liquidaciones laborales, indemnizaciones, acuerdos de pago, contratos de trabajo y otras diferencias entre trabajadores y empleadores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda una audiencia de conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la complejidad del caso y de la disposición de las partes para negociar. Muchas conciliaciones pueden resolverse en una sola audiencia cuando existe voluntad de llegar a un acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos alcanzados en una conciliación laboral tienen validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando las partes llegan a un acuerdo y este queda consignado en un acta de conciliación conforme a la ley, produce efectos jurídicos y puede ser exigible en los términos establecidos por la normativa.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede reprogramar una audiencia de conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En algunos casos es posible solicitar la reprogramación de la audiencia cuando exista una causa justificada y el centro de conciliación lo autorice conforme a sus procedimientos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde se realizan las audiencias de conciliación laboral en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las audiencias pueden realizarse en centros de conciliación autorizados, de forma presencial o virtual, dependiendo de las condiciones del trámite y de las políticas del centro encargado del procedimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario contratar un abogado para asistir a una audiencia de conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La necesidad de contar con un abogado depende del caso concreto. Aunque en algunos asuntos no es obligatorio, la asesoría jurídica puede ser útil para comprender el alcance de los acuerdos y proteger los derechos de las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué beneficios tiene resolver un conflicto mediante conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación permite buscar soluciones negociadas, reducir tiempos y costos frente a un proceso judicial, preservar la comunicación entre las partes y alcanzar acuerdos con efectos jurídicos cuando cumplen los requisitos legales.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <CitacionContent />
    </>
  );
}
