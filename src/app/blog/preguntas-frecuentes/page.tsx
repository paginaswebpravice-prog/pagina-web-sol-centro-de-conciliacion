"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function PreguntasFrecuentes() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación en Colombia es un mecanismo de solución de conflictos donde las partes llegan a un acuerdo con ayuda de un conciliador sin necesidad de un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué casos se pueden conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se pueden conciliar asuntos civiles, comerciales, de familia y algunos laborales siempre que sean derechos disponibles para las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si la otra parte no asiste a la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si la otra parte no asiste, el centro de conciliación puede expedir una constancia de inasistencia que permite continuar con otras acciones legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar virtualmente en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, en Colombia se pueden realizar audiencias de conciliación virtuales con verificación de identidad y aceptación de las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto demora una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo depende del caso, pero muchas conciliaciones pueden resolverse en una sola audiencia.",
        },
      },
    ],
  };

  return (
    <>
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="faq" className={styles.section}>
        <div className={styles.container}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre la conciliación en Colombia
          </motion.h2>

          <p className={styles.paragraph}>
            A continuación respondemos algunas de las preguntas más frecuentes
            sobre conciliación en Colombia, centros de conciliación en Bogotá,
            audiencias de conciliación, requisitos y tiempos del proceso de
            conciliación.
          </p>

          <div className={styles.faqWrapper}>
            {[
              {
                q: "¿Qué es la conciliación en Colombia?",
                a: "Es un mecanismo para resolver conflictos con apoyo de un conciliador. Si se alcanza acuerdo, se deja por escrito en un acta con efectos jurídicos.",
              },
              {
                q: "¿Qué casos se pueden conciliar?",
                a: "En general, asuntos civiles, comerciales, familiares y laborales conciliables, según el caso.",
              },
              {
                q: "¿Qué pasa si la otra parte no asiste?",
                a: "El centro puede expedir constancia de inasistencia, lo cual permite continuar con otras acciones legales cuando aplique.",
              },
              {
                q: "¿Se puede conciliar virtualmente?",
                a: "Sí, es posible realizar audiencias virtuales con verificación de identidad y aceptación de las partes.",
              },
              {
                q: "¿Cuánto se demora una conciliación?",
                a: "Depende del caso, pero muchas conciliaciones pueden resolverse en una sola audiencia.",
              },
            ].map((item, index) => (
              <motion.details
                key={index}
                className={styles.faqItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              >
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </motion.details>
            ))}
          </div>

          <motion.div className={styles.cta}>
            <strong>
              ¿Quieres revisar si tu caso es conciliable en Bogotá o Colombia?
            </strong>
            <p>
              Agenda una orientación y te indicamos documentos, estrategia y
              pasos para llegar a un acuerdo.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              className={styles.ctaButton}
            >
              Ir a Contacto
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
