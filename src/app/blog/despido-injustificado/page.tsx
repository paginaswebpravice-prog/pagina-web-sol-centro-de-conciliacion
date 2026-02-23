"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function DespidoInjustificado() {
  return (
    <article className={styles.article}>
      {/* HEADER */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          className={styles.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Derecho Laboral
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Despido sin justa causa en Colombia: ¿Qué hacer y cómo reclamar?
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          El despido sin justa causa es una de las situaciones más frecuentes en
          el derecho laboral colombiano. Conocer tus derechos y actuar de forma
          estratégica puede marcar la diferencia entre aceptar una liquidación
          incorrecta o reclamar lo que realmente te corresponde.
        </motion.p>
      </motion.header>

      {/* SECCIÓN 1 */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>¿Qué es un despido sin justa causa?</h2>
        <p>
          Se configura cuando el empleador termina el contrato de trabajo sin
          que exista una razón válida establecida en la ley. En estos casos, el
          trabajador tiene derecho a recibir una indemnización adicional a su
          liquidación final.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>¿Qué derechos tiene el trabajador?</h2>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <li>Pago completo de la liquidación laboral.</li>
          <li>Indemnización según tipo de contrato.</li>
          <li>Pago de salarios y prestaciones pendientes.</li>
          <li>Certificación laboral.</li>
        </motion.ul>
      </motion.section>

      {/* SECCIÓN 3 */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>¿Cómo se calcula la indemnización?</h2>
        <p>
          El cálculo depende del tipo de contrato (término fijo o indefinido) y
          del tiempo trabajado. Cada caso debe analizarse de forma individual
          para evitar errores que puedan afectar el monto final.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3>¿Consideras que tu despido fue injustificado?</h3>
        <p>
          Una asesoría oportuna puede ayudarte a proteger tus derechos y
          reclamar lo que legalmente te corresponde.
        </p>

        <motion.a
          href="https://wa.me/XXXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          Solicitar asesoría
        </motion.a>
      </motion.section>
    </article>
  );
}
