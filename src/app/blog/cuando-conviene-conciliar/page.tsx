"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CuandoConvieneConciliar() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cuándo conviene conciliar en Colombia: guía práctica en Bogotá",
    description:
      "Descubre cuándo es recomendable acudir a conciliación en Colombia y Bogotá. Casos, ventajas y recomendaciones prácticas.",
    author: {
      "@type": "Organization",
      name: "Centro de Conciliación",
    },
    contentLocation: {
      "@type": "Place",
      name: "Bogotá, Colombia",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuándo es recomendable conciliar en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable cuando existe voluntad de acuerdo, se busca rapidez y se desea evitar un proceso judicial largo.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, especialmente como requisito previo antes de acudir a un proceso judicial.",
        },
      },
    ],
  };

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="cuando-conviene" className={styles.articleWrapper}>
        <motion.div
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Cuándo conviene conciliar en Colombia y Bogotá
          </h2>

          <p className={styles.paragraph}>
            La <strong>conciliación en Colombia</strong> es uno de los
            mecanismos más eficientes para resolver conflictos sin acudir a un
            proceso judicial. En ciudades como <strong>Bogotá</strong>, donde
            los tiempos judiciales pueden ser largos, la conciliación se
            convierte en una herramienta estratégica para lograr acuerdos
            rápidos y efectivos.
          </p>

          <p className={styles.paragraph}>
            Saber <strong>cuándo conviene conciliar</strong> puede marcar la
            diferencia entre un conflicto prolongado y una solución práctica,
            económica y legalmente válida.
          </p>

          <h3 className={styles.subtitle}>
            Casos en los que conviene conciliar en Colombia
          </h3>

          <ul className={styles.list}>
            <li>
              <strong>Relación entre las partes:</strong> cuando existe vínculo
              familiar, comercial o contractual (ej: arrendamientos en Bogotá,
              proveedores, socios).
            </li>
            <li>
              <strong>Interés en una solución rápida:</strong> ideal si quieres
              evitar procesos judiciales largos en Colombia.
            </li>
            <li>
              <strong>Necesidad de acuerdos flexibles:</strong> como planes de
              pago, acuerdos parciales o compromisos progresivos.
            </li>
            <li>
              <strong>Evidencia suficiente:</strong> pero buscas evitar el costo
              emocional y económico de un juicio.
            </li>
            <li>
              <strong>Conflictos familiares:</strong> alimentos, visitas o
              custodia, muy comunes en conciliación en Bogotá.
            </li>
          </ul>

          <h3 className={styles.subtitle}>Cuándo NO conviene conciliar</h3>

          <ul className={styles.list}>
            <li>
              Cuando una de las partes no tiene intención real de negociar.
            </li>
            <li>Cuando se requiere una decisión judicial obligatoria.</li>
            <li>
              Cuando hay derechos no conciliables según la ley colombiana.
            </li>
          </ul>

          <div className={styles.note}>
            En Bogotá y Colombia, la conciliación funciona mejor cuando ambas
            partes tienen disposición real de llegar a un acuerdo. Sin voluntad,
            el proceso pierde efectividad.
          </div>

          <h3 className={styles.subtitle}>
            Ventajas de conciliar en Bogotá y Colombia
          </h3>

          <ul className={styles.list}>
            <li>Proceso más rápido que un juicio.</li>
            <li>Menor costo económico.</li>
            <li>Confidencialidad.</li>
            <li>Acuerdos personalizados.</li>
            <li>Validez legal del acta de conciliación.</li>
          </ul>

          <div className={styles.cta}>
            <strong className={styles.ctaTitle}>
              Recomendación estratégica
            </strong>

            <p className={styles.paragraph}>
              Si estás considerando iniciar un proceso de conciliación en Bogotá
              o Colombia, lo más importante es llegar con una propuesta clara:
              define tu mínimo aceptable, tu margen de negociación y posibles
              alternativas.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              className={styles.ctaButton}
            >
              Asesoría en conciliación en Bogotá
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
