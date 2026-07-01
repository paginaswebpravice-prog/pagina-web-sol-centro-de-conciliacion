import { Metadata } from "next";
import AlimentosParaMenoresContent from "./AlimentosParaMenoresContent";

const url =
  "https://solcentrodeconciliacion.com/practice/alimentos-para-menores";

export const metadata: Metadata = {
  title:
    "Cuota alimentaria en Colombia: conciliación para fijar, modificar o exigir el pago",

  description:
    "Solicite la conciliación de cuota alimentaria en Colombia para fijar, aumentar, disminuir o exigir el pago de alimentos para menores. Acta con validez legal y acompañamiento especializado.",

  keywords: [
    "cuota alimentaria Colombia",
    "alimentos para menores Colombia",
    "abogados cuota alimentaria Bogotá",
    "conciliación alimentos menores",
    "pensión alimentaria Colombia",
    "demanda de alimentos Colombia",
    "modificación cuota alimentaria",
    "incumplimiento cuota alimentaria",
    "custodia y alimentos Colombia",
    "conciliación familiar Bogotá",
    "abogados de familia Colombia",
    "acuerdo de alimentos hijos",
    "alimentos hijos menores",
    "cuota alimentaria Bogotá",
    "conciliación extrajudicial familia",
  ],

  alternates: {
    canonical: url,
  },

  openGraph: {
    title:
      "Cuota alimentaria en Colombia | Conciliación legal para alimentos de menores",

    description:
      "Resuelva conflictos de cuota alimentaria mediante conciliación en Colombia. Acuerdos legales sobre alimentos, custodia y obligaciones de padres sin procesos judiciales largos.",

    url,
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://solcentrodeconciliacion.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación de cuota alimentaria en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cuota alimentaria en Colombia | Conciliación y acuerdos legales",

    description:
      "Fije, modifique o concilie cuota alimentaria para menores en Colombia con respaldo legal y soluciones rápidas.",

    images: ["https://solcentrodeconciliacion.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Legal Services",
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",

      name: "Conciliación de cuota alimentaria en Colombia",

      description:
        "Servicio de conciliación en alimentos para menores, fijación de cuota alimentaria, modificación de obligaciones y acuerdos familiares en Colombia.",

      url,

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType: [
        "Conciliación en alimentos para menores",
        "Cuota alimentaria",
        "Conciliación familiar",
        "Custodia y visitas",
      ],

      provider: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
        url: "https://solcentrodeconciliacion.com",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué incluye la cuota alimentaria en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La cuota alimentaria puede incluir alimentación, educación, salud, vivienda, transporte, vestuario y demás necesidades del menor.",
          },
        },

        {
          "@type": "Question",
          name: "¿Se puede conciliar la cuota alimentaria sin demanda judicial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. En Colombia es posible fijar o modificar acuerdos de alimentos mediante conciliación extrajudicial con validez legal.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué pasa si no pagan la cuota alimentaria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El incumplimiento puede generar procesos judiciales, embargos e investigaciones relacionadas con inasistencia alimentaria.",
          },
        },

        {
          "@type": "Question",
          name: "¿La conciliación de alimentos tiene validez legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación tiene efectos legales y puede exigirse en caso de incumplimiento.",
          },
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://solcentrodeconciliacion.com",
        },

        {
          "@type": "ListItem",
          position: 2,
          name: "Áreas de práctica",
          item: "https://solcentrodeconciliacion.com/practice",
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "Alimentos para menores",
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <AlimentosParaMenoresContent />
    </>
  );
}
