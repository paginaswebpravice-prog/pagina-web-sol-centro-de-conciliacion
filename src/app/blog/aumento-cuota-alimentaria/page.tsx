import type { Metadata } from "next";
import AumentoCuotaAlimentariaContent from "./AumentoCuotaAlimentariaContent";

export const metadata: Metadata = {
  title:
    "Aumento de cuota alimentaria en Colombia: requisitos, conciliación y cómo solicitarlo (Guía 2026)",

  description:
    "Descubre cuándo procede el aumento de la cuota alimentaria en Colombia, qué documentos necesitas, cómo solicitarlo mediante conciliación, qué pasa si no hay acuerdo y cuáles son los requisitos legales.",

  keywords: [
    "aumento cuota alimentaria",
    "incremento cuota alimentaria",
    "solicitar aumento cuota alimentaria",
    "cómo aumentar cuota alimentaria",
    "revisión cuota alimentaria",
    "modificar cuota alimentaria",
    "actualizar cuota alimentaria",
    "conciliación cuota alimentaria",
    "cuota alimentaria hijos",
    "cuota alimentaria Colombia",
    "conciliación familiar",
    "aumento alimentos menores",
    "demanda aumento cuota alimentaria",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/aumento-cuota-alimentaria",
  },
  openGraph: {
    title: "Aumento de cuota alimentaria por conciliación en Colombia",
    description:
      "Aprende cuándo y cómo solicitar el aumento de una cuota alimentaria mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/aumento-cuota-alimentaria",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Aumento de cuota alimentaria por conciliación en Colombia",
    description:
      "Guía sobre el incremento de la cuota alimentaria mediante conciliación familiar.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/aumento-cuota-alimentaria",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo solicitar un aumento de cuota alimentaria en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El aumento puede solicitarse mediante una audiencia de conciliación cuando existan cambios en las necesidades del beneficiario o en la capacidad económica de quien debe pagar la cuota alimentaria. Si las partes llegan a un acuerdo, este queda consignado en un acta con efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo procede el aumento de una cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente procede cuando aumentan las necesidades del menor, existen nuevos gastos de educación, salud, alimentación, transporte o vivienda, o cuando cambia la situación económica de alguna de las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede aumentar la cuota alimentaria mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite que las partes modifiquen voluntariamente una cuota alimentaria previamente acordada, evitando en muchos casos un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos se necesitan para solicitar un aumento de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable presentar el acta de conciliación anterior, registro civil del menor, soportes de gastos escolares, facturas médicas, comprobantes de ingresos y cualquier documento que permita demostrar el cambio de circunstancias.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede solicitar el aumento de la cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La solicitud puede ser presentada por quien represente legalmente al menor o por el beneficiario de la obligación alimentaria cuando existan razones que justifiquen modificar el valor establecido.",
        },
      },
      {
        "@type": "Question",
        name: "¿Existe un porcentaje fijo para aumentar la cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. En Colombia no existe un porcentaje obligatorio. Cada caso se analiza de forma individual teniendo en cuenta las necesidades del beneficiario y la capacidad económica del obligado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si la otra parte no acepta aumentar la cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si durante la conciliación no se alcanza un acuerdo, podrán utilizarse los mecanismos legales previstos por la legislación colombiana para solicitar la revisión de la cuota alimentaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿La nueva cuota alimentaria tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando el acuerdo se formaliza mediante un acta de conciliación, este produce efectos jurídicos y puede exigirse legalmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cada cuánto tiempo puede modificarse una cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La ley no establece un plazo específico. La cuota puede revisarse cuando existan cambios importantes en las necesidades del beneficiario o en la capacidad económica de quien debe cumplir la obligación alimentaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué gastos pueden justificar un aumento de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden justificar el incremento gastos relacionados con educación, salud, alimentación, vivienda, transporte, actividades extracurriculares, terapias, medicamentos y otras necesidades propias del beneficiario.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario contratar un abogado para solicitar un aumento de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, puede ser recomendable recibir asesoría jurídica para preparar adecuadamente la solicitud y los documentos que respalden la modificación de la cuota alimentaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede después de firmar el nuevo acuerdo de alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El nuevo acuerdo reemplaza o modifica las condiciones anteriores y las partes quedan obligadas a cumplir las nuevas obligaciones establecidas en el acta de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede aumentarse nuevamente la cuota alimentaria en el futuro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Siempre que existan nuevas circunstancias que justifiquen una modificación, las partes podrán solicitar otra conciliación o acudir a los mecanismos legales correspondientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ventajas tiene aumentar la cuota alimentaria mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación suele ser más rápida, menos costosa y más flexible que un proceso judicial, además permite que las partes construyan conjuntamente un acuerdo adaptado a sus necesidades.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si no se cumple el nuevo acuerdo de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando el acuerdo consta en un acta de conciliación, puede hacerse exigible por las vías legales previstas en Colombia en caso de incumplimiento.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <AumentoCuotaAlimentariaContent />
    </>
  );
}
