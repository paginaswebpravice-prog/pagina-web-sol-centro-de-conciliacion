"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function QueEsLaConciliacion() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué es la conciliación en Colombia y para qué sirve?",
    description:
      "Conoce qué es la conciliación en Colombia, cómo funciona en Bogotá y para qué sirve la conciliación extrajudicial.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://www.solcentrodeconciliacion.com/blog/que-es-la-conciliacion",
    keywords:
      "conciliación en Colombia, conciliación en Bogotá, centro de conciliación Bogotá, conciliación extrajudicial Colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación en Colombia es un mecanismo de solución de conflictos donde las partes llegan a un acuerdo con la ayuda de un conciliador sin necesidad de un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos procesos civiles, comerciales y de familia en Colombia, la conciliación extrajudicial es un requisito antes de presentar una demanda.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué validez tiene un acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación tiene validez legal y presta mérito ejecutivo, lo que significa que se puede exigir su cumplimiento ante un juez.",
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

      <section className={styles.articleWrapper}>
        <motion.div
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            ¿Qué es la conciliación en Colombia y para qué sirve?
          </h2>

          <p className={styles.paragraph}>
            La conciliación en Colombia es un mecanismo alternativo de solución
            de conflictos mediante el cual dos o más personas resuelven una
            disputa con la ayuda de un conciliador, evitando acudir a un proceso
            judicial. Este procedimiento es muy utilizado en Bogotá y en todo el
            país para resolver conflictos civiles, comerciales, laborales y de
            familia de manera rápida y efectiva.
          </p>

          <p className={styles.paragraph}>
            La conciliación permite que las partes construyan un acuerdo que
            solucione el conflicto, dejando constancia en un acta de
            conciliación que tiene efectos legales. Por esta razón, la
            conciliación en Bogotá y Colombia es uno de los mecanismos más
            utilizados para la solución de conflictos legales.
          </p>

          <h3 className={styles.subtitle}>¿Para qué sirve la conciliación?</h3>

          <p className={styles.paragraph}>
            La conciliación sirve para resolver conflictos sin necesidad de
            iniciar un proceso judicial, lo que permite ahorrar tiempo, dinero y
            evitar procesos largos. Muchas empresas en Bogotá utilizan la
            conciliación para resolver problemas de contratos, deudas,
            arrendamientos, conflictos laborales y problemas entre socios.
          </p>

          <h3 className={styles.subtitle}>Tipos de conciliación en Colombia</h3>

          <p className={styles.paragraph}>
            En Colombia existen la conciliación judicial y la conciliación
            extrajudicial. La conciliación extrajudicial se realiza antes de un
            proceso judicial en centros de conciliación autorizados, mientras
            que la conciliación judicial se realiza dentro de un proceso ante un
            juez.
          </p>

          <h3 className={styles.subtitle}>
            Beneficios de la conciliación en Bogotá y Colombia
          </h3>

          <ul className={styles.list}>
            <li>Evita procesos judiciales largos</li>
            <li>Reduce costos legales</li>
            <li>Permite acuerdos rápidos</li>
            <li>El acuerdo tiene validez jurídica</li>
            <li>Mejora la relación entre las partes</li>
            <li>Solución rápida de conflictos en Bogotá</li>
          </ul>

          <h3 className={styles.subtitle}>
            ¿Cómo solicitar una conciliación en Bogotá?
          </h3>

          <p className={styles.paragraph}>
            Para solicitar una conciliación en Bogotá o en cualquier ciudad de
            Colombia, se debe presentar una solicitud ante un centro de
            conciliación autorizado. Posteriormente se programa una audiencia de
            conciliación donde las partes intentan llegar a un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Si se llega a un acuerdo, se firma un acta de conciliación. Si no
            hay acuerdo, se expide una constancia que permite iniciar un proceso
            judicial.
          </p>
        </motion.div>
      </section>
    </>
  );
}
