import { Metadata } from "next";
import PracticeContent from "./PracticeContent";

export const metadata: Metadata = {
  title:
    "Áreas de práctica y conciliación extrajudicial en Colombia | Sol Centro de Conciliación",

  description:
    "Conozca nuestras áreas de práctica en conciliación extrajudicial en Bogotá y Colombia. Resolución de conflictos civiles, comerciales, familiares, laborales, arrendamientos, deudas, custodia, alimentos y más sin procesos judiciales largos.",

  keywords: [
    "conciliación extrajudicial Colombia",
    "centro de conciliación Bogotá",
    "áreas de práctica conciliación",
    "conciliación civil Colombia",
    "conciliación comercial Bogotá",
    "conciliación familiar Colombia",
    "conciliación laboral Bogotá",
    "conciliación arrendamientos Colombia",
    "conflictos vecinales conciliación",
    "custodia y alimentos Colombia",
    "resolver conflictos sin demanda",
    "acuerdos legales sin juicio",
    "servicios de conciliación Colombia",
  ],

  authors: [
    {
      name: "Sol Centro de Conciliación",
      url: "https://solcentrodeconciliacion.com",
    },
  ],

  creator: "Sol Centro de Conciliación",
  publisher: "Sol Centro de Conciliación",

  metadataBase: new URL("https://solcentrodeconciliacion.com"),

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/practice",
  },

  openGraph: {
    title:
      "Áreas de práctica y conciliación extrajudicial en Colombia | Sol Centro de Conciliación",

    description:
      "Resuelva conflictos civiles, familiares, comerciales y laborales sin demanda en Bogotá y Colombia mediante conciliación extrajudicial legal y efectiva.",

    url: "https://solcentrodeconciliacion.com/practice",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Áreas de práctica - Sol Centro de Conciliación",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Conciliación extrajudicial en Colombia | Áreas de práctica",

    description:
      "Conozca nuestras áreas de práctica y resuelva conflictos sin procesos judiciales largos en Colombia.",

    images: ["/og-image.jpg"],
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
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LegalService",

              name: "Sol Centro de Conciliación",

              url: "https://solcentrodeconciliacion.com",

              description:
                "Centro de conciliación extrajudicial en Bogotá y Colombia especializado en resolución de conflictos civiles, comerciales, familiares, laborales y contractuales.",

              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },

              serviceType: [
                "Conciliación civil",
                "Conciliación comercial",
                "Conciliación familiar",
                "Conciliación laboral",
                "Conciliación en arrendamientos",
                "Conciliación de obligaciones económicas",
                "Conciliación de custodia y alimentos",
              ],

              provider: {
                "@type": "Organization",
                name: "Sol Centro de Conciliación",
                url: "https://solcentrodeconciliacion.com",
              },
            },

            {
              "@context": "https://schema.org",
              "@type": "ItemList",

              name: "Áreas de práctica de conciliación",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Asuntos civiles",
                  url: "https://solcentrodeconciliacion.com/practice/asuntos-civiles",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Asuntos comerciales",
                  url: "https://solcentrodeconciliacion.com/practice/asuntos-comerciales",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Asuntos laborales",
                  url: "https://solcentrodeconciliacion.com/practice/asuntos-laborales",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Conflictos familiares",
                  url: "https://solcentrodeconciliacion.com/practice/conflictos-familiares",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Conflictos de arrendamiento",
                  url: "https://solcentrodeconciliacion.com/practice/conflictos-de-arrendamiento",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Custodia y régimen de visitas",
                  url: "https://solcentrodeconciliacion.com/practice/custodia-y-regimen-de-visitas",
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  name: "Alimentos para menores",
                  url: "https://solcentrodeconciliacion.com/practice/alimentos-para-menores",
                },
                {
                  "@type": "ListItem",
                  position: 8,
                  name: "Obligaciones económicas",
                  url: "https://solcentrodeconciliacion.com/practice/obligaciones-economicas",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué tipos de conflictos pueden resolverse mediante conciliación?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La conciliación permite resolver conflictos civiles, comerciales, familiares, laborales, contractuales, arrendamientos, deudas, custodia, alimentos y otros asuntos legales sin necesidad de acudir inmediatamente a un proceso judicial.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿La conciliación tiene validez legal en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Los acuerdos logrados mediante conciliación quedan consignados en un acta con efectos legales y cumplimiento obligatorio en Colombia.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Por qué elegir conciliación antes de demandar?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La conciliación puede reducir tiempos, costos y desgaste emocional, permitiendo soluciones más rápidas y flexibles sin procesos judiciales prolongados.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PracticeContent />
    </>
  );
}
