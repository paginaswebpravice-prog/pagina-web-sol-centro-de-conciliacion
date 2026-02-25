"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ErroresComunes() {
  return (
    <>
      <section id="errores" className={styles.section}>
        <div className={styles.container}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            8) Errores comunes y cómo evitarlos
          </motion.h2>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ul className={styles.list}>
              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                <span>
                  <strong>Llegar sin propuesta</strong>: trae números, plazos y
                  un plan alterno.
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                <span>
                  <strong>No llevar soportes</strong>: el acuerdo se facilita
                  cuando hay evidencia clara.
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.39, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                <span>
                  <strong>Confundir “perdonar” con “negociar”</strong>:
                  conciliar es conseguir una solución viable, no ceder sin
                  estrategia.
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.46, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                <span>
                  <strong>Actas ambiguas</strong>: si no hay fechas, montos y
                  forma de cumplimiento, el acuerdo se vuelve frágil.
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.53, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                <span>
                  <strong>Ir a “ganar”</strong>: la conciliación no es juicio;
                  es una negociación con marco legal.
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
