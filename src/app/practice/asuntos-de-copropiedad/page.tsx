import { Metadata } from "next";
import AsuntosDeCopropiedadContent from "./AsuntosDeCopropiedadContent";

export const metadata: Metadata = {
  title:
    "Conciliación en copropiedad en Colombia | Propiedad horizontal y conflictos vecinales en Bogotá",

  description:
    "Resuelva conflictos de copropiedad y propiedad horizontal en Colombia sin procesos judiciales largos. Conciliación en Bogotá para cuotas de administración, convivencia, zonas comunes, vecinos y administración de conjuntos.",

  keywords: [
    "conciliación copropiedad Colombia",
    "propiedad horizontal Bogotá",
    "conflictos conjuntos residenciales Colombia",
    "conciliación vecinos Bogotá",
    "problemas propiedad horizontal",
    "cuotas administración edificios",
    "conflictos zonas comunes",
    "conciliación administración copropiedad",
    "problemas convivencia conjuntos residenciales",
    "abogados propiedad horizontal Colombia",
    "conciliación propiedad horizontal Bogotá",
    "centro de conciliación copropiedad",
  ],

  authors: [
    {
      name: "Sol Centro de Conciliación",
    },
  ],

  creator: "Sol Centro de Conciliación",

  publisher: "Sol Centro de Conciliación",

  metadataBase: new URL("https://solcentrodeconciliacion.com"),

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/asuntos-de-copropiedad",
  },

  openGraph: {
    title:
      "Conciliación en copropiedad en Colombia | Solucione conflictos en propiedad horizontal",

    description:
      "Evite demandas y procesos largos en conjuntos residenciales. Conciliación legal y rápida para conflictos de copropiedad, convivencia y administración en Bogotá y Colombia.",

    url: "https://solcentrodeconciliacion.com/practice/asuntos-de-copropiedad",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Conciliación en copropiedad en Colombia | Propiedad horizontal",

    description:
      "Resuelva conflictos entre vecinos, administración y copropietarios mediante conciliación legal en Colombia.",
  },

  category: "Legal Services",

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
};

export default function Page() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",

      name: "Conciliación en copropiedad y propiedad horizontal en Colombia",

      url: "https://solcentrodeconciliacion.com/practice/asuntos-de-copropiedad",

      description:
        "Servicio de conciliación en propiedad horizontal y copropiedad para resolver conflictos relacionados con convivencia, cuotas de administración, zonas comunes y decisiones administrativas en Colombia.",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      provider: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
        url: "https://solcentrodeconciliacion.com",
      },

      serviceType: [
        "Conciliación en propiedad horizontal",
        "Conciliación entre vecinos",
        "Conflictos de copropiedad",
        "Conciliación en conjuntos residenciales",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",

          name: "¿Qué conflictos de copropiedad se pueden conciliar en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "En Colombia pueden conciliarse conflictos relacionados con cuotas de administración, convivencia entre vecinos, uso de zonas comunes, parqueaderos, ruido, mascotas, decisiones de asamblea y administración de propiedad horizontal.",
          },
        },

        {
          "@type": "Question",

          name: "¿La conciliación en propiedad horizontal tiene validez legal?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Los acuerdos logrados mediante conciliación tienen validez jurídica y pueden ser exigidos legalmente en Colombia.",
          },
        },

        {
          "@type": "Question",

          name: "¿Es necesario demandar para resolver conflictos entre vecinos?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "No. Muchos conflictos vecinales y de copropiedad pueden resolverse mediante conciliación sin necesidad de acudir a un proceso judicial.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué beneficios tiene la conciliación en conjuntos residenciales?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La conciliación permite solucionar conflictos de forma más rápida, económica y menos desgastante, ayudando a preservar la convivencia y evitar procesos judiciales largos.",
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
          name: "Asuntos de copropiedad",
          item: "https://solcentrodeconciliacion.com/practice/asuntos-de-copropiedad",
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
          __html: JSON.stringify(schemaData),
        }}
      />

      <AsuntosDeCopropiedadContent />
    </>
  );
}
