import { Metadata } from "next";
import ErroresComunesYComoEvitarlosContent from "./ErroresComunesYComoEvitarlosContent";

export const metadata: Metadata = {
  title:
    "10 errores comunes en la conciliación laboral en Colombia y cómo evitarlos (Guía 2026)",
  description:
    "Descubre los errores más comunes durante una conciliación laboral en Colombia. Aprende qué no hacer, cómo preparar una audiencia, evitar acuerdos perjudiciales y proteger tus derechos como trabajador o empleador.",
  keywords: [
    "errores en la conciliación laboral",
    "errores comunes conciliación laboral Colombia",
    "cómo prepararse para una conciliación laboral",
    "qué no hacer en una conciliación laboral",
    "conciliación laboral Colombia",
    "conciliación laboral Bogotá",
    "acta de conciliación laboral",
    "audiencia de conciliación laboral",
    "trabajador conciliación laboral",
    "empleador conciliación laboral",
    "acuerdo laboral Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Errores comunes en la conciliación laboral en Colombia",
    description:
      "Guía práctica para evitar errores en conciliaciones laborales y lograr acuerdos legales seguros en Bogotá y Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/errores-comunes-y-como-evitarlos",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Errores comunes en conciliación laboral en Colombia",
    description:
      "Evita errores y negocia mejor en tu audiencia de conciliación laboral.",
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/errores-comunes-y-como-evitarlos",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "10 errores comunes en la conciliación laboral en Colombia y cómo evitarlos",
      description:
        "Guía práctica para trabajadores y empleadores sobre los errores más frecuentes durante una conciliación laboral en Colombia, cómo evitarlos y cómo llegar a acuerdos jurídicamente seguros.",
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
        "@id":
          "https://solcentrodeconciliacion.com/blog/errores-comunes-y-como-evitarlos",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuáles son los errores más comunes en una conciliación laboral en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los errores más frecuentes son asistir sin preparación, no llevar pruebas, aceptar acuerdos ambiguos, firmar el acta sin revisarla y desconocer los derechos laborales que pueden negociarse durante la conciliación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es obligatorio llegar a un acuerdo durante la conciliación laboral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. La conciliación es un espacio de negociación y las partes solo celebran un acuerdo cuando existe voluntad mutua. Si no hay consenso, podrán acudir a otras vías legales.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué documentos debo llevar a una conciliación laboral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es recomendable llevar el contrato de trabajo, desprendibles de nómina, comprobantes de pago, comunicaciones, correos electrónicos, certificados laborales y cualquier documento relacionado con el conflicto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si firmo un acta de conciliación laboral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El acta de conciliación tiene efectos jurídicos y obliga a las partes a cumplir lo pactado. En caso de incumplimiento, puede hacerse exigible por las vías legales correspondientes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo modificar un acuerdo después de firmarlo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solo si ambas partes están de acuerdo en celebrar un nuevo acuerdo. De lo contrario, el acta conserva plena validez jurídica.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito un abogado para asistir a una conciliación laboral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es obligatorio, pero recibir orientación jurídica antes de la audiencia puede ayudar a comprender mejor los derechos, calcular correctamente los valores y evitar errores durante la negociación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué ocurre si una de las partes incumple el acta de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La parte afectada podrá iniciar las acciones legales correspondientes para exigir el cumplimiento de las obligaciones pactadas en el acta de conciliación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo puedo prepararme para una conciliación laboral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es recomendable organizar todos los documentos, calcular correctamente las pretensiones económicas, revisar los hechos del conflicto y definir previamente los aspectos sobre los cuales se está dispuesto a negociar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué derechos laborales pueden discutirse durante una conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dependiendo del caso, pueden negociarse salarios pendientes, prestaciones sociales, vacaciones, indemnizaciones, liquidaciones, acuerdos de pago y otros asuntos derivados de la relación laboral que sean conciliables conforme a la ley.",
          },
        },
        {
          "@type": "Question",
          name: "¿Una conciliación laboral evita un proceso judicial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Cuando las partes alcanzan un acuerdo válido y lo cumplen, normalmente se evita la necesidad de iniciar un proceso judicial para resolver el conflicto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué errores pueden hacer fracasar una conciliación laboral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Llegar sin preparación, mantener posiciones inflexibles, desconocer los derechos laborales, no escuchar las propuestas de la otra parte o redactar acuerdos poco claros son algunos de los factores que dificultan alcanzar un acuerdo.",
          },
        },
        {
          "@type": "Question",
          name: "¿La conciliación laboral es válida en toda Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La conciliación laboral puede realizarse conforme a la legislación colombiana y constituye un mecanismo reconocido para solucionar conflictos entre trabajadores y empleadores en todo el país.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ErroresComunesYComoEvitarlosContent />
    </>
  );
}
