"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function PreguntasFrecuentes() {
  return (
    <>
      <section id="faq" className={styles.section}>
        <div className={styles.container}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            9) Preguntas frecuentes
          </motion.h2>

          <div className={styles.faqWrapper}>
            {[
              {
                q: "¿Qué es la conciliación en Colombia?",
                a: "Es un mecanismo para resolver conflictos con apoyo de un conciliador. Si se alcanza acuerdo, se deja por escrito en un acta con efectos jurídicos.",
              },
              {
                q: "¿Qué casos se pueden conciliar?",
                a: "En general, asuntos disponibles para las partes: conflictos civiles, comerciales, familiares y laborales conciliables, según el caso.",
              },
              {
                q: "¿Qué pasa si la otra parte no asiste?",
                a: "El centro puede expedir constancia según corresponda, lo cual permite acreditar que se intentó el trámite y continuar con otras vías cuando aplique.",
              },
              {
                q: "¿Se puede conciliar virtualmente?",
                a: "Sí. Es posible realizar audiencias virtuales con verificación de identidad, consentimiento y condiciones mínimas de participación.",
              },
              {
                q: "¿Cuánto se demora una conciliación?",
                a: "Depende de agenda, complejidad y documentos. Con preparación y voluntad real, puede resolverse en una sola audiencia.",
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
                whileHover={{ scale: 1.01 }}
              >
                <summary>{item.q}</summary>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.a}
                </motion.p>
              </motion.details>
            ))}
          </div>

          <motion.div
            className={styles.cta}
            aria-label="CTA final"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.strong
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              ¿Quieres revisar si tu caso es conciliable y qué ruta conviene?
            </motion.strong>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              Agenda una orientación y te indicamos documentos, estrategia y
              pasos para llegar a un acuerdo claro.
            </motion.p>

            <motion.a
              href="https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Ir a Contacto
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
