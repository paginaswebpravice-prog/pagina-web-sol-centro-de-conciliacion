"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function QueEsLaConciliacion() {
  return (
    <>
      <section className={styles.articleWrapper}>
        <motion.div
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            1) ¿Qué es la conciliación y para qué sirve?
          </motion.h2>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            La <strong>conciliación</strong> es un mecanismo de solución de
            conflictos en el que dos o más partes, acompañadas por un{" "}
            <strong>conciliador</strong>, buscan construir un{" "}
            <strong>acuerdo</strong> sin necesidad de llegar a un proceso
            judicial largo y costoso. Su enfoque es práctico: identificar el
            problema, ordenar las pretensiones y aterrizar compromisos
            verificables (fechas, valores, formas de pago, entregas,
            desistimientos).
          </motion.p>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Cuando el acuerdo se formaliza en un{" "}
            <strong>acta de conciliación</strong>, esta suele tener efectos
            jurídicos relevantes. Por eso, conciliar no es “hablar por hablar”:
            es
            <strong> negociar con estructura</strong> y dejar todo por escrito
            con claridad.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
