import { Metadata } from "next";
import DocHarriContent from "./DocHarriContent";

export const metadata: Metadata = {
  title:
    "Harrison Perez | Abogado Conciliador en Colombia | Familia, Laboral y Civil",

  description:
    "Conoce al abogado conciliador Harrison Perez. Especialista en conciliación extrajudicial en derecho de familia, laboral y civil. Agenda tu consulta con Sol Centro de Conciliación.",

  keywords: [
    "Harrison Perez",
    "abogado conciliador Colombia",
    "conciliador en derecho",
    "conciliación familiar",
    "conciliación laboral",
    "conciliación civil",
    "conciliación alimentos",
    "conciliación custodia",
    "conciliación liquidación laboral",
    "conciliación despidos",
    "conciliación extrajudicial",
    "Sol Centro de Conciliación",
  ],
  openGraph: {
    title: "Harrison Perez | Abogado Conciliador en Colombia",

    description:
      "Especialista en conciliación de familia, laboral y civil. Acuerdos legales rápidos, seguros y con plena validez jurídica.",

    url: "https://solcentrodeconciliacion.com/about/Doc_Harrison",
    siteName: "Sol Centro de Conciliación",
    images: [
      {
        url: "https://solcentrodeconciliacion.com/doc-harrison.jpg",
        width: 1200,
        height: 630,
        alt: "Harrison Perez abogado conciliador en Colombia",
      },
    ],
    locale: "es_CO",
    type: "profile",
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/abogados/harrison-perez",
  },
};

export default function Page() {
  const schema = {
    description:
      "Abogado conciliador en Colombia especializado en conciliación extrajudicial en asuntos de familia, laboral y conflictos civiles, facilitando acuerdos con plena validez jurídica.",
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harrison Perez",
    jobTitle: "Abogado Conciliador",
    image: "https://solcentrodeconciliacion.com/doc-harrison.jpg",
    url: "https://solcentrodeconciliacion.com/abogados/harrison-perez",
    worksFor: {
      "@type": "LegalService",
      name: "SOL Centro de Conciliación",
      url: "https://solcentrodeconciliacion.com",
    },
    knowsAbout: [
      "Conciliación extrajudicial en derecho",
      "Derecho de familia",
      "Derecho laboral",
      "Derecho tributario",
      "Resolución de conflictos",
      "Mecanismos alternativos de solución de conflictos",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Colombia",
    },
    sameAs: ["https://www.solcentrodeconciliacion.com"],

    hasOccupation: {
      "@type": "Occupation",
      name: "Abogado Conciliador",
      occupationLocation: {
        "@type": "Country",
        name: "Colombia",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <DocHarriContent />
    </>
  );
}
