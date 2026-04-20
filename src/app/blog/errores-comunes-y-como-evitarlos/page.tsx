import { Metadata } from "next";
import ErroresComunesYComoEvitarlosContent from "./ErroresComunesYComoEvitarlosContent";

export const metadata: Metadata = {
  title:
    "Errores comunes en la conciliación laboral en Colombia | Guía completa en Bogotá",
  description:
    "Descubre los errores más comunes en la conciliación laboral en Colombia y Bogotá. Aprende cómo negociar acuerdos, evitar pérdidas económicas y proteger tus derechos laborales.",
  keywords: [
    "conciliación laboral Colombia",
    "errores conciliación laboral",
    "conciliación laboral Bogotá",
    "acuerdo laboral Colombia",
    "derecho laboral Colombia conciliación",
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
      headline: "Errores comunes en la conciliación laboral en Colombia",
      description:
        "Errores más comunes en conciliaciones laborales en Colombia y cómo evitarlos para lograr acuerdos legales seguros.",
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
          name: "¿Cuáles son los errores más comunes en la conciliación laboral en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los más comunes son no llevar propuesta económica, no presentar pruebas, firmar sin leer y redactar acuerdos ambiguos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es recomendable asesorarse antes de una conciliación laboral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, la asesoría legal permite calcular valores correctos y evitar errores que afecten el acuerdo.",
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
