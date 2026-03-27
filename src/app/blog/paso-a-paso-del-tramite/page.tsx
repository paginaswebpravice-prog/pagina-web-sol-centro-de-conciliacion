"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function PasoAPasoDelTramite() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Paso a paso del trámite de conciliación en Colombia y Bogotá",
    description:
      "Conoce cómo es el proceso de conciliación en Colombia paso a paso: solicitud, citación, audiencia y acta de conciliación en Bogotá.",
    author: {
      "@type": "Organization",
      name: "Pravice Abogados",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo es el proceso de conciliación en Colombia",
    step: [
      { name: "Solicitud de conciliación" },
      { name: "Revisión y admisión del caso" },
      { name: "Citación a audiencia" },
      { name: "Audiencia de conciliación" },
      { name: "Acta o constancia final" },
    ],
  };

  return (
    <>
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section id="paso-a-paso" className={styles.articleWrapper}>
        <motion.div
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Paso a paso del trámite de conciliación en Colombia y Bogotá
          </h2>

          {/* INTRO SEO */}
          <p className={styles.paragraph}>
            El proceso de conciliación en Colombia es un mecanismo rápido y
            efectivo para resolver conflictos sin necesidad de acudir a un juez.
            En ciudades como Bogotá, los centros de conciliación permiten
            solucionar disputas civiles, comerciales, familiares e incluso
            algunos conflictos laborales de forma ágil.
          </p>

          <p className={styles.paragraph}>
            A continuación te explicamos el paso a paso de una conciliación en
            Colombia, desde la solicitud hasta la firma del acta de
            conciliación, para que entiendas cómo funciona este trámite y cómo
            prepararte correctamente.
          </p>

          {/* LISTA */}
          <ol className={styles.orderedList}>
            <li>
              <strong>Solicitud de conciliación:</strong> debes presentar tu
              caso ante un centro de conciliación en Bogotá o en cualquier
              ciudad de Colombia, explicando qué ocurrió, qué solicitas y cuáles
              son tus pretensiones.
            </li>

            <li>
              <strong>Revisión y admisión:</strong> el centro de conciliación
              verifica que el caso sea conciliable, revisa la información básica
              y valida que se cumplan los requisitos legales.
            </li>

            <li>
              <strong>Citación a la audiencia:</strong> se notifica a la otra
              parte indicando fecha, hora, modalidad (presencial o virtual) y
              lugar donde se realizará la audiencia de conciliación.
            </li>

            <li>
              <strong>Audiencia de conciliación:</strong> las partes exponen su
              posición, el conciliador facilita el diálogo y se buscan acuerdos
              que beneficien a ambas partes.
            </li>

            <li>
              <strong>Resultado del trámite:</strong> si hay acuerdo, se firma
              un acta de conciliación con efectos legales. Si no hay acuerdo, se
              expide una constancia que permite acudir a otras vías legales en
              Colombia.
            </li>
          </ol>

          {/* BLOQUE SEO EXTRA */}
          <h3 className={styles.subtitle}>
            ¿Cuánto dura una conciliación en Colombia?
          </h3>

          <p className={styles.paragraph}>
            El tiempo de una conciliación en Colombia puede variar dependiendo
            del caso y de la disponibilidad del centro de conciliación en
            Bogotá. Sin embargo, muchos procesos pueden resolverse en una sola
            audiencia si las partes llegan preparadas y con disposición para
            negociar.
          </p>

          <h3 className={styles.subtitle}>
            ¿Dónde hacer una conciliación en Bogotá?
          </h3>

          <p className={styles.paragraph}>
            Puedes realizar una conciliación en centros de conciliación
            autorizados, notarías, cámaras de comercio y consultorios jurídicos
            en Bogotá y en todo Colombia. También existen opciones de
            conciliación virtual que facilitan el acceso al servicio.
          </p>

          {/* CTA */}
          <motion.div className={styles.cta}>
            <strong className={styles.ctaTitle}>
              Checklist para prepararte antes de una conciliación en Colombia
            </strong>

            <ul className={styles.ctaList}>
              <li>Define claramente qué quieres lograr.</li>
              <li>Prepara una propuesta con valores y fechas.</li>
              <li>Organiza documentos (contratos, chats, facturas).</li>
              <li>Piensa alternativas de negociación.</li>
            </ul>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              className={styles.ctaButton}
            >
              Agendar asesoría
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
