"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function QueAsuntosSePuedenConciliar() {
  return (
    <>
      <section id="casos" className={styles.articleWrapper}>
        <motion.div
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            3) ¿Qué asuntos se pueden conciliar?
          </motion.h2>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En términos generales, se concilian{" "}
            <strong>asuntos disponibles para las partes</strong>, es decir,
            materias en las que la ley permite llegar a un acuerdo. En un centro
            de conciliación, suelen tramitarse conflictos como:
          </motion.p>

          {[
            {
              title: "Conciliación civil",
              items: [
                "Deudas y acuerdos de pago",
                "Responsabilidad civil (daños y perjuicios) según el caso",
                "Incumplimientos contractuales",
                "Conflictos entre vecinos (convivencia y acuerdos)",
              ],
            },
            {
              title: "Conciliación de familia (según viabilidad del caso)",
              items: [
                "Cuotas de alimentos: fijación, reajustes y forma de pago",
                "Régimen de visitas y acuerdos de crianza",
                "Cuotas extraordinarias y gastos del menor",
              ],
            },
            {
              title: "Conciliación laboral (conciliable)",
              items: [
                "Acuerdos de terminación y pago (cuando aplica)",
                "Conflictos por liquidaciones y pagos pendientes (caso a caso)",
              ],
            },
            {
              title: "Conciliación comercial",
              items: [
                "Facturas, servicios prestados, proveedores",
                "Incumplimientos y renegociación de obligaciones",
                "Acuerdos entre socios o aliados (si es conciliable)",
              ],
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <h3>{category.title}</h3>
              <ul className={styles.list}>
                {category.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.15 + i * 0.05,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.p
            className={styles.note}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Importante: no todo es conciliable. La viabilidad depende de la
            naturaleza del derecho y del tipo de pretensión. Un buen diagnóstico
            inicial evita pérdidas de tiempo.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
