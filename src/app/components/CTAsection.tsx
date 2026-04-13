"use client";

import styles from "../styles/CTAconciliacion.module.css";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Resuelva su conflicto de forma rápida y legal en Colombia</h2>

          <p>
            En <strong>SOL Centro de Conciliación</strong> le ayudamos a
            solucionar conflictos de manera ágil, económica y sin necesidad de
            procesos judiciales largos. Acceda a conciliación extrajudicial en
            derecho con respaldo legal y resultados efectivos.
          </p>

          <div className={styles.buttons}>
            <a href="/contacto" className={styles.primaryBtn}>
              Solicitar conciliación
            </a>

            <a
              href="https://wa.me/573000000000"
              target="_blank"
              className={styles.secondaryBtn}
            >
              Hablar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
