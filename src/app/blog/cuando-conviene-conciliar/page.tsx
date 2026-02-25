"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CuandoConvieneConciliar() {
  return (
    <>
      <section id="cuando-conviene" className={styles.articleWrapper}>
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
            2) Cuándo conviene conciliar
          </motion.h2>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            La conciliación suele ser la mejor opción cuando:
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
                <strong>Existe relación entre las partes</strong> (familia,
                socios, vecinos, arrendador/arrendatario, proveedor/cliente) y
                conviene preservar un mínimo de comunicación.
              </>,
              <>
                <strong>Hay interés real en cerrar el conflicto</strong> sin
                exponerse a tiempos judiciales.
              </>,
              <>
                <strong>El caso requiere soluciones flexibles</strong> (planes
                de pago, entregas parciales, acuerdos progresivos,
                compensaciones).
              </>,
              <>
                <strong>La evidencia está</strong>, pero prefieres una salida
                rápida: la conciliación es estratégica cuando el “costo de
                pelear” supera el beneficio.
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

          <motion.p
            className={styles.note}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Tip práctico: la conciliación funciona mejor cuando llegas con una
            propuesta concreta (mínimo aceptable, máximo cedible y
            alternativas).
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
