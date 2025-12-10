"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank"
  );
};

export default function About() {
  return (
    <section className={styles.section}>
      {/* BLOQUE 1 */}
      <motion.div
        className={styles.profile}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.name}>Dr. Harrison Calderon</h2>
          <span className={styles.role}>Abogado</span>

          <p className={styles.description}>
            Abogado egresado de la Universidad del Rosario ...
          </p>

          <motion.button
            className={styles.button}
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
          >
            Programa tu consulta →
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.imageBox}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/doc-harrison.jpg" alt="Dr Harrison" />
        </motion.div>
      </motion.div>

      {/* BLOQUE 2 - INVERTIDO */}
      <motion.div
        className={`${styles.profile} ${styles.reverse}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.imageBox}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/doc-leidy.jpg" alt="Dra Leidy" />
        </motion.div>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.name}>Dra. Leidy Tirado</h2>
          <span className={styles.role}>CCO & Abogada</span>

          <p className={styles.description}>
            Abogada y conciliadora en derecho, formada en la Universidad
            Militar, especializada en la gestión profesional de conflictos...
          </p>

          <motion.button
            className={styles.button}
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
          >
            Programa tu consulta →
          </motion.button>
        </motion.div>
      </motion.div>

      {/* BLOQUE 3 */}
      <motion.div
        className={styles.profile}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.name}>Dra. Angie Rivera</h2>
          <span className={styles.role}>CCO & Abogada</span>

          <p className={styles.description}>
            Abogado egresado de la Universidad del Rosario ...
          </p>

          <motion.button
            className={styles.button}
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
          >
            Programa tu consulta →
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.imageBox}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/doc-angie.jpg" alt="Dra. Angie" />
        </motion.div>
      </motion.div>
    </section>
  );
}
