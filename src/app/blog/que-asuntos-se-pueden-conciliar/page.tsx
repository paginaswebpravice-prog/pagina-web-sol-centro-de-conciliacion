"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function QueAsuntosSePuedenConciliar() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué asuntos se pueden conciliar en Colombia?",
    description:
      "Conoce qué asuntos se pueden conciliar en Colombia en materia civil, laboral, comercial y de familia en centros de conciliación en Bogotá.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://www.solcentrodeconciliacion.com/blog/que-asuntos-se-pueden-conciliar",
    keywords:
      "qué asuntos se pueden conciliar, conciliación civil Colombia, conciliación laboral Colombia, conciliación familia Colombia, conciliación comercial Bogotá",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué asuntos se pueden conciliar en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Colombia se pueden conciliar asuntos civiles, comerciales, laborales y de familia siempre que sean derechos disponibles y las partes puedan llegar a un acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden conciliar deudas en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, las deudas, acuerdos de pago e incumplimientos contractuales son de los asuntos más comunes que se concilian en Bogotá y Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los conflictos laborales se pueden conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, algunos conflictos laborales como liquidaciones, pagos pendientes o acuerdos de terminación pueden resolverse mediante conciliación en Colombia.",
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

      <section id="casos" className={styles.articleWrapper}>
        <motion.div
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            ¿Qué asuntos se pueden conciliar en Colombia?
          </h2>

          <p className={styles.paragraph}>
            En Colombia, la conciliación es un mecanismo de solución de
            conflictos que permite resolver disputas sin necesidad de acudir a
            un proceso judicial. Sin embargo, no todos los conflictos se pueden
            conciliar, ya que la ley establece que únicamente se pueden
            conciliar los asuntos que sean derechos disponibles para las partes.
          </p>

          <p className={styles.paragraph}>
            En un centro de conciliación en Bogotá o en cualquier ciudad de
            Colombia, normalmente se tramitan conflictos civiles, comerciales,
            laborales y de familia, siempre que sea posible llegar a un acuerdo
            entre las partes.
          </p>

          {[
            {
              title: "Conciliación civil",
              items: [
                "Deudas y acuerdos de pago",
                "Responsabilidad civil (daños y perjuicios)",
                "Incumplimientos contractuales",
                "Conflictos entre vecinos",
              ],
            },
            {
              title: "Conciliación de familia",
              items: [
                "Cuotas de alimentos",
                "Régimen de visitas",
                "Acuerdos de crianza",
                "Gastos del menor",
              ],
            },
            {
              title: "Conciliación laboral",
              items: [
                "Acuerdos de terminación",
                "Liquidaciones laborales",
                "Pagos pendientes",
              ],
            },
            {
              title: "Conciliación comercial",
              items: [
                "Facturas y servicios prestados",
                "Incumplimientos contractuales",
                "Acuerdos entre socios",
              ],
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <ul className={styles.list}>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          <p className={styles.note}>
            Importante: no todos los asuntos son conciliables. La viabilidad de
            la conciliación depende del tipo de derecho y del caso concreto. Por
            eso, es recomendable recibir asesoría previa en un centro de
            conciliación en Bogotá o Colombia.
          </p>

          {/* FAQ visible */}
          <div className={styles.divider}></div>

          <h3 className={styles.subtitle}>
            Preguntas frecuentes sobre qué asuntos se pueden conciliar
          </h3>

          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>
              ¿Qué asuntos se pueden conciliar en Colombia?
            </p>
            <p className={styles.faqAnswer}>
              Se pueden conciliar asuntos civiles, comerciales, laborales y de
              familia siempre que las partes puedan llegar a un acuerdo.
            </p>
          </div>

          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>¿Se pueden conciliar deudas?</p>
            <p className={styles.faqAnswer}>
              Sí, las deudas y acuerdos de pago son uno de los asuntos más
              comunes que se concilian en Bogotá y Colombia.
            </p>
          </div>

          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>
              ¿Los conflictos laborales se pueden conciliar?
            </p>
            <p className={styles.faqAnswer}>
              Sí, algunos conflictos laborales como liquidaciones y pagos
              pendientes pueden resolverse mediante conciliación.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
