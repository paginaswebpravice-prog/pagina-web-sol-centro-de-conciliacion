import { Metadata } from "next";
import AsuntosDeCopropiedadContent from "./AsuntosDeCopropiedadContent";

export const metadata: Metadata = {
  title:
    "Conciliación en Propiedad Horizontal en Colombia | Conflictos entre Vecinos, Administración y Copropietarios",

  description:
    "Resuelva conflictos de propiedad horizontal y copropiedad en Colombia mediante conciliación. Solucione problemas entre vecinos, cuotas de administración, zonas comunes, parqueaderos, ruido, mascotas, administración del conjunto y reglamentos sin procesos judiciales largos.",

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
    "propiedad horizontal Colombia",
    "conflictos propiedad horizontal",
    "conflictos entre vecinos",
    "problemas entre vecinos",
    "administración de conjuntos",
    "administración edificios",
    "administración propiedad horizontal",
    "cuotas administración en mora",
    "cobro cuotas administración",
    "parqueaderos propiedad horizontal",
    "zonas comunes",
    "reglamento propiedad horizontal",
    "ley propiedad horizontal Colombia",
    "problemas ruido vecinos",
    "problemas mascotas conjunto",
    "conciliación administrador edificio",
    "conciliación consejo administración",
    "conciliación asamblea copropietarios",
    "conflictos copropietarios",
    "daños zonas comunes",
    "filtraciones apartamentos",
    "propiedad horizontal Bogotá",
    "conciliación edificios",
    "conciliación condominios",
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
      "Conciliación en Propiedad Horizontal en Colombia | Solución Legal para Conflictos entre Vecinos",

    description:
      "Resuelva conflictos entre vecinos, administración, cuotas de administración, zonas comunes, parqueaderos y reglamentos mediante conciliación con plena validez legal.",

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
        "Servicio de conciliación especializado en conflictos de propiedad horizontal relacionados con cuotas de administración, convivencia entre vecinos, reglamentos, zonas comunes, parqueaderos, administración de edificios, consejos de administración, asambleas de copropietarios y conflictos de copropiedad en Colombia.",

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
        "Conciliación en copropiedad",
        "Conflictos entre vecinos",
        "Conciliación de cuotas de administración",
        "Conciliación por uso de zonas comunes",
        "Conflictos con la administración",
        "Problemas de convivencia",
        "Conciliación de parqueaderos",
        "Conflictos por mascotas",
        "Conciliación por ruido",
        "Conciliación de reglamento de propiedad horizontal",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué conflictos de propiedad horizontal pueden resolverse mediante conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mediante conciliación pueden resolverse conflictos relacionados con cuotas de administración, convivencia entre vecinos, uso de zonas comunes, parqueaderos, mascotas, ruidos, reglamento de propiedad horizontal, administración del conjunto y otros asuntos conciliables.",
          },
        },

        {
          "@type": "Question",
          name: "¿La conciliación en propiedad horizontal tiene validez legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación tiene plena validez jurídica en Colombia y, cuando contiene obligaciones claras, puede exigirse legalmente en caso de incumplimiento.",
          },
        },

        {
          "@type": "Question",
          name: "¿Es obligatorio intentar una conciliación antes de presentar una demanda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dependiendo del tipo de conflicto y de la legislación aplicable, la conciliación extrajudicial puede ser un requisito previo antes de acudir a un proceso judicial.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué pasa si un vecino no asiste a la audiencia de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si una de las partes no asiste sin justificación, el centro de conciliación puede expedir una constancia de inasistencia, la cual puede utilizarse para continuar con las actuaciones legales que correspondan.",
          },
        },

        {
          "@type": "Question",
          name: "¿Se pueden conciliar conflictos por ruido entre vecinos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Los conflictos por ruido, fiestas, música, actividades que afecten la tranquilidad o problemas de convivencia pueden abordarse mediante conciliación para buscar acuerdos que beneficien a todas las partes.",
          },
        },

        {
          "@type": "Question",
          name: "¿Es posible conciliar conflictos relacionados con mascotas en conjuntos residenciales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Cuando existen diferencias relacionadas con la tenencia de mascotas, el cumplimiento del reglamento o la convivencia entre residentes, la conciliación permite buscar soluciones concertadas.",
          },
        },

        {
          "@type": "Question",
          name: "¿Se pueden resolver conflictos por parqueaderos mediante conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La conciliación es un mecanismo adecuado para resolver desacuerdos relacionados con parqueaderos, uso de espacios comunes, asignación de cupos o incumplimiento de normas internas.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué hacer si un propietario no paga las cuotas de administración?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Antes de iniciar un proceso judicial, las partes pueden acudir a una conciliación para negociar acuerdos de pago, establecer nuevos plazos y buscar soluciones que permitan normalizar la obligación.",
          },
        },

        {
          "@type": "Question",
          name: "¿Cuánto tiempo tarda una conciliación en asuntos de copropiedad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La duración depende de la complejidad del caso y de la disposición de las partes para negociar. Generalmente, la conciliación es mucho más rápida que un proceso judicial tradicional.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué documentos debo llevar a una audiencia de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es recomendable presentar documentos como el reglamento de propiedad horizontal, comunicaciones entre las partes, actas de asamblea, fotografías, videos, estados de cuenta, comprobantes de pago y cualquier otra prueba relacionada con el conflicto.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué ocurre si no se logra un acuerdo durante la conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cuando no es posible llegar a un acuerdo, el centro de conciliación deja constancia del resultado de la audiencia y las partes conservan la posibilidad de acudir a otras acciones legales cuando corresponda.",
          },
        },

        {
          "@type": "Question",
          name: "¿Por qué elegir la conciliación para resolver conflictos de propiedad horizontal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La conciliación permite resolver conflictos de forma más rápida, económica y confidencial, favorece el diálogo entre las partes, ayuda a preservar la convivencia y evita, en muchos casos, procesos judiciales largos y costosos.",
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
