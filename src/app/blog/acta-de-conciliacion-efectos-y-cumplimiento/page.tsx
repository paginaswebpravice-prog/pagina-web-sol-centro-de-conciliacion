"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaDeConciliacionEfectosYCumplimiento() {
  return (
    <>
      <section id="acta" className={styles.section}>
        <div className={styles.container}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            7) Acta de conciliación: efectos y cumplimiento
          </motion.h2>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            El objetivo final es un acuerdo claro. Un acta bien redactada debe
            responder, sin ambigüedades:
            <strong> quién</strong> cumple, <strong> qué</strong> cumple,{" "}
            <strong> cuándo</strong> cumple y <strong> cómo</strong> cumple.
          </motion.p>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Un acta robusta suele incluir:
          </motion.p>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Identificación completa de las partes.</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Descripción breve del conflicto.</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span>
                Obligaciones exactas (valores, plazos, forma de pago, entregas).
              </span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Soportes anexos o referenciados.</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span>
                Cláusulas de verificación: por ejemplo, cómo se acredita un pago
                o una entrega.
              </span>
            </motion.li>
          </motion.ul>

          <motion.p
            className={styles.note}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Consejo: evita frases genéricas (“se compromete a pagar pronto”).
            Exige fechas y montos. Lo que no se mide, no se ejecuta.
          </motion.p>
        </div>
      </section>
    </>
  );
}
