import { Metadata } from "next";
import DocAngieContent from "./DocAngieContent";

export const metadata: Metadata = {
  title:
    "Angie Rivera | Abogada conciliadora en Colombia | Gestión de cartera y derecho comercial",
  description:
    "Abogada conciliadora en Colombia especializada en gestión de cartera, recuperación de activos, conciliaciones empresariales y derecho comercial. Agenda tu consulta.",
  keywords: [
    "abogada conciliadora Colombia",
    "gestión de cartera Colombia",
    "recuperación de activos",
    "conciliación extrajudicial",
    "derecho comercial Colombia",
    "procesos ejecutivos",
    "abogados en Bogotá",
  ],
  openGraph: {
    title: "Angie Rivera | Abogada conciliadora en Colombia",
    description:
      "Especialista en conciliación, recuperación de cartera y derecho comercial en Colombia.",
    url: "https://solcentrodeconciliacion.com/about/Doc_Angie",
    siteName: "Sol Centro de Conciliación",
    images: [
      {
        url: "https://solcentrodeconciliacion.com/doc-angie.jpg",
        width: 1200,
        height: 630,
        alt: "Angie Rivera abogada conciliadora en Colombia",
      },
    ],
    locale: "es_CO",
    type: "profile",
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/about/Doc_Angie",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Angie Rivera",
    jobTitle: "Abogada Conciliadora",
    description:
      "Abogada conciliadora en Colombia especializada en gestión de cartera, recuperación de activos, conciliaciones empresariales y derecho comercial.",
    image: "https://solcentrodeconciliacion.com/doc-angie.jpg",
    url: "https://solcentrodeconciliacion.com/about/Doc_Angie",
    worksFor: {
      "@type": "LegalService",
      name: "Sol Centro de Conciliación",
      url: "https://solcentrodeconciliacion.com",
    },
    knowsAbout: [
      "Conciliación extrajudicial en derecho",
      "Gestión de cartera",
      "Recuperación de activos",
      "Derecho comercial",
      "Procesos ejecutivos",
      "Resolución de conflictos empresariales",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Colombia",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <DocAngieContent />
    </>
  );
}
