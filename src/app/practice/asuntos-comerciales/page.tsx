import { Metadata } from "next";
import AsuntosComercialesContent from "./AsuntosComercialesContent";

const url = "https://solcentrodeconciliacion.com/practice/asuntos-comerciales";

export const metadata: Metadata = {
  title:
    "Conciliación comercial en Colombia: resuelva conflictos empresariales sin demanda",

  description:
    "Solicite una conciliación comercial en Colombia para resolver incumplimientos de contratos, conflictos entre socios, recuperación de cartera, acuerdos de pago, obligaciones comerciales y controversias empresariales con validez legal.",

  keywords: [
    "conciliación comercial Colombia",
    "abogados comerciales Bogotá",
    "conflictos empresariales Colombia",
    "incumplimiento de contratos comerciales",
    "conciliación empresarial Colombia",
    "resolver conflictos comerciales sin demanda",
    "conciliación de sociedades Colombia",
    "deudas comerciales Colombia",
    "obligaciones comerciales Colombia",
    "conciliación extrajudicial comercial",
    "abogados contratos comerciales",
    "problemas entre socios Colombia",
    "acuerdos comerciales legales",
    "centro de conciliación Bogotá",
    "demanda comercial Colombia",
  ],

  alternates: {
    canonical: url,
  },

  openGraph: {
    title:
      "Conciliación comercial en Colombia | Evite demandas y proteja su empresa",

    description:
      "Solucione conflictos comerciales, incumplimientos contractuales y problemas empresariales mediante conciliación legal en Colombia.",

    url,
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://solcentrodeconciliacion.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación comercial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Conciliación comercial en Colombia | Soluciones legales empresariales",

    description:
      "Evite procesos judiciales largos y resuelva conflictos comerciales mediante conciliación rápida y efectiva.",

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

      name: "Conciliación en asuntos comerciales en Colombia",

      description:
        "Servicio de conciliación comercial en Colombia enfocado en conflictos empresariales, contratos comerciales, incumplimientos y controversias societarias.",

      url,

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType: [
        "Conciliación comercial",
        "Conciliación empresarial",
        "Conflictos societarios",
        "Incumplimiento de contratos",
        "Obligaciones comerciales",
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
          name: "¿Qué conflictos comerciales se pueden resolver mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Se pueden conciliar conflictos relacionados con contratos comerciales, incumplimientos, deudas empresariales, obligaciones económicas y disputas entre socios.",
          },
        },

        {
          "@type": "Question",
          name: "¿La conciliación comercial tiene validez legal en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse legalmente en caso de incumplimiento.",
          },
        },

        {
          "@type": "Question",
          name: "¿Por qué usar conciliación en lugar de una demanda comercial?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "La conciliación permite resolver conflictos empresariales más rápido, reducir costos legales y proteger las relaciones comerciales.",
          },
        },

        {
          "@type": "Question",
          name: "¿Es obligatorio intentar conciliación antes de demandar?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "En muchos casos comerciales en Colombia, la conciliación extrajudicial puede ser un requisito previo antes de iniciar un proceso judicial.",
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
          name: "Asuntos comerciales",
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

      <AsuntosComercialesContent />
    </>
  );
}
