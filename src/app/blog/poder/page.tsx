"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function Poder() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Poder para asistir a audiencia de conciliación en Colombia – Modelo de poder especial",
    description:
      "Modelo de poder para audiencia de conciliación en Colombia y Bogotá. Formato de poder especial para conciliación para abogados y apoderados.",
    author: {
      "@type": "Organization",
      name: "Pravice Abogados",
    },
    about: [
      "Poder para conciliación Colombia",
      "Modelo poder conciliación Bogotá",
      "Audiencia de conciliación Colombia",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un poder para conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un documento mediante el cual una persona autoriza a otra para representarla en una audiencia de conciliación en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se necesita abogado para conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No siempre es obligatorio, pero es recomendable otorgar poder a un abogado cuando el asunto tiene implicaciones jurídicas o económicas importantes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde se usa el poder para conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se utiliza en centros de conciliación, notarías, cámaras de comercio y conciliaciones virtuales en Colombia.",
        },
      },
    ],
  };

  return (
    <>
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="poder"
            className={styles.card}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>
              Poder para asistir a audiencia de conciliación en Colombia
              (modelo)
            </h2>

            <p>
              El poder para asistir a audiencia de conciliación en Colombia es
              un documento mediante el cual una persona autoriza a un abogado o
              apoderado para que la represente en una audiencia de conciliación
              ante un centro de conciliación, notaría, cámara de comercio o
              entidad autorizada. Este documento es muy utilizado en procesos de
              conciliación en Bogotá y en todo Colombia cuando la persona no
              puede asistir personalmente a la audiencia.
            </p>

            <p>
              En Colombia, la conciliación es un mecanismo alternativo de
              solución de conflictos mediante el cual las partes pueden llegar a
              un acuerdo sin necesidad de iniciar un proceso judicial. Por esta
              razón, muchas personas otorgan un poder especial para conciliación
              para que un abogado o apoderado pueda asistir a la audiencia,
              negociar acuerdos, presentar documentos y firmar el acta de
              conciliación.
            </p>

            <h3>¿Para qué sirve el poder para conciliación en Colombia?</h3>

            <p>
              El poder para audiencia de conciliación en Colombia sirve para que
              una persona pueda ser representada por otra en una audiencia de
              conciliación en Bogotá o en cualquier ciudad del país. Mediante
              este poder, el apoderado puede asistir a la audiencia, presentar
              fórmulas de arreglo, negociar acuerdos, firmar el acta de
              conciliación y recibir documentos relacionados con el trámite.
            </p>

            <div className={styles.grid}>
              <div className={styles.innerCard}>
                <h4>Puede autorizar para:</h4>
                <ul>
                  <li>Asistir a la audiencia de conciliación</li>
                  <li>Negociar acuerdos</li>
                  <li>Firmar el acta de conciliación</li>
                  <li>Presentar documentos</li>
                  <li>Recibir notificaciones</li>
                </ul>
              </div>

              <div className={styles.innerCard}>
                <h4>Dónde se usa este poder:</h4>
                <ul>
                  <li>Centros de conciliación en Bogotá</li>
                  <li>Notarías en Colombia</li>
                  <li>Cámaras de comercio</li>
                  <li>Consultorios jurídicos</li>
                  <li>Conciliaciones virtuales</li>
                </ul>
              </div>
            </div>

            <h3>Modelo de poder (persona natural)</h3>

            <pre>
              {`PODER ESPECIAL

[Ciudad], [dd/mm/aaaa]

Yo, [Nombre completo], mayor de edad, identificado(a) con CC No. [●] de [●], confiero PODER ESPECIAL, amplio y suficiente
a [Nombre del apoderado(a)], identificado(a) con CC No. [●] y T.P. No. [●] (si aplica), para que en mi nombre y representación:

1) Comparezca a audiencia(s) de conciliación ante [Centro/Entidad] dentro del trámite solicitado por/contra [●].
2) Presente solicitudes, reciba citaciones, aporte y solicite documentos.
3) Concilié, transija y suscriba el acta de conciliación o constancias que se generen, dentro de los límites siguientes:
   - [Límite económico o condiciones: p. ej. hasta $● / plan de pago máximo ● cuotas / etc.]

Notificaciones: [correo] / [dirección].

Firma otorgante: _______________________
Nombre: [●]
CC: [●]

Firma apoderado(a) (aceptación): _______________________
Nombre: [●]
CC: [●] / T.P.: [●]`}
            </pre>

            <h3>Recomendaciones antes de firmar un poder para conciliación</h3>

            <ul>
              <li>Verificar el alcance del poder.</li>
              <li>Establecer límites económicos para conciliar.</li>
              <li>Definir si el apoderado puede firmar el acta.</li>
              <li>Indicar correo y dirección para notificaciones.</li>
              <li>Revisar el documento antes de firmarlo.</li>
            </ul>

            <h3>Preguntas frecuentes</h3>

            <p>
              Muchas personas en Bogotá y Colombia tienen dudas sobre el poder
              para conciliación, especialmente sobre si es obligatorio, si debe
              ser autenticado o si puede ser virtual. En la mayoría de casos, el
              poder simple firmado es suficiente, pero algunas entidades pueden
              solicitar presentación personal o autenticación en notaría.
            </p>
          </motion.article>
        </div>
      </div>
    </>
  );
}
