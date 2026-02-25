"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function Audiencia() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="audiencia"
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Audiencia de conciliación: cómo es y cómo prepararte
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              La búsqueda <strong>“audiencia de conciliación”</strong> suele
              responder a una inquietud práctica: ¿qué pasa ese día? La
              audiencia normalmente tiene cinco momentos: identificación,
              exposición, precisión de pretensiones, negociación y cierre (acta
              o constancia).
            </motion.p>

            <motion.div
              className={styles.grid}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.section
                className={styles.innerCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <h3>Qué llevar</h3>
                <ul>
                  {[
                    "Documento de identidad.",
                    "Soportes: contratos, facturas, chats, consignaciones, actas, certificaciones.",
                    "Propuesta escrita (monto/plazos) y dos alternativas.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                className={styles.innerCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <h3>Qué NO hacer</h3>
                <ul>
                  {[
                    "Ir sin números/fechas.",
                    "Discutir hechos sin soportes.",
                    "Firmar un acuerdo ambiguo (“después miramos”).",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </>
  );
}
