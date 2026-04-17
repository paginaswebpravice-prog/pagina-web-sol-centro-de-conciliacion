import { Metadata } from "next";
import DocHarriContent from "./DocHarriContent";

export const metadata: Metadata = {
  title:
    "Harrison Perez | Abogado conciliador en Colombia | Derecho de familia, laboral y tributario",
  description:
    "Abogado conciliador en Colombia especializado en derecho de familia, laboral y tributario. Conciliación extrajudicial, resolución de conflictos y acuerdos legales.",
  keywords: [
    "abogado conciliador Colombia",
    "conciliación extrajudicial Colombia",
    "derecho de familia Colombia",
    "derecho laboral Colombia",
    "derecho tributario Colombia",
    "resolución de conflictos",
    "abogados en Bogotá",
  ],
  openGraph: {
    title: "Harrison Perez | Abogado conciliador en Colombia",
    description:
      "Especialista en conciliación extrajudicial, derecho de familia, laboral y tributario en Colombia.",
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
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harrison Perez",
    jobTitle: "Abogado Conciliador",
    image: "https://solcentrodeconciliacion.com/doc-harrison.jpg",
    url: "https://solcentrodeconciliacion.com/abogados/harrison-perez",
    worksFor: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
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
