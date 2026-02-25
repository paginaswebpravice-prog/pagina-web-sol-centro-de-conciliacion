"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ComoEsLaAudiencia() {
  return (
    <>
      <section id="audiencia" className={styles.articleWrapper}>
        <motion.div
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            6) Cómo es la audiencia: presencial o virtual
          </motion.h2>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            La audiencia está diseñada para{" "}
            <strong>ordenar el conflicto</strong> y conducirlo hacia un acuerdo
            verificable. Normalmente incluye:
          </motion.p>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              <>
                <strong>Instalación</strong>: identificación de las partes y
                reglas básicas (respeto, turno de palabra, enfoque en
                soluciones).
              </>,
              <>
                <strong>Exposición</strong>: cada parte presenta su versión y lo
                que busca.
              </>,
              <>
                <strong>Exploración</strong>: se aclaran hechos, se precisan
                pretensiones y se validan soportes.
              </>,
              <>
                <strong>Negociación</strong>: propuestas, contrapropuestas y
                alternativas.
              </>,
              <>
                <strong>Redacción</strong>: si hay acuerdo, se plasma con
                precisión (montos, fechas, obligaciones, consecuencias).
              </>,
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className={styles.categoryCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Audiencia virtual: lo mínimo para que salga bien
            </motion.h3>

            <motion.ul
              className={styles.list}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                "Buena conexión a internet y un lugar sin ruido.",
                "Documento de identidad a la mano.",
                "Soportes en PDF listos para compartir.",
                "Disposición a negociar: sin eso, no hay acuerdo.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
