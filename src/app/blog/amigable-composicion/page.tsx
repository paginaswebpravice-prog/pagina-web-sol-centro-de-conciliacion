"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function AmigableComposicion() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="amigable-composicion"
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
              Amigable composición en Colombia: qué es, características y
              amigable componedor
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Además de conciliación, muchas personas buscan{" "}
              <strong>“amigable composición en Colombia”</strong> o{" "}
              <strong>“amigable componedor Colombia”</strong>. La amigable
              composición es un mecanismo en el que las partes, por acuerdo,{" "}
              <strong>delegan en un tercero</strong> (amigable componedor) la
              facultad de <strong>definir la solución</strong> del conflicto
              dentro de los límites pactados.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Amigable composición: definición práctica
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Es un mecanismo <strong>predominantemente contractual</strong>:
              nace del acuerdo de las partes (cláusula o compromiso), quienes
              determinan el alcance, reglas, término y efectos de la decisión
              del componedor.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Características de la amigable composición
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                <>
                  <strong>Autonomía de la voluntad</strong>: las reglas las
                  fijan las partes (procedimiento, pruebas, plazos).
                </>,
                <>
                  <strong>Tercero imparcial</strong>: el amigable componedor
                  debe actuar con independencia y neutralidad.
                </>,
                <>
                  <strong>Decisión vinculante</strong> (según pacto): la salida
                  se entiende obligatoria dentro de lo acordado por las partes.
                </>,
                <>
                  <strong>Flexibilidad</strong>: permite procedimientos ágiles,
                  centrados en el resultado.
                </>,
                <>
                  <strong>Enfoque técnico</strong>: útil en controversias de
                  obra, contratos, prestaciones, calidad, liquidaciones, etc.
                </>,
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              ¿Cuándo conviene?
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                "Cuando se necesita una decisión rápida de un tercero experto.",
                "Cuando negociar directamente es inviable, pero se busca evitar litigio largo.",
                "Cuando el conflicto es altamente técnico y requiere criterio especializado.",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className={styles.note}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Diferencia rápida: en conciliación las partes construyen el
              acuerdo; en amigable composición, un tercero define la solución
              dentro del marco pactado.
            </motion.p>
          </motion.article>
        </div>
      </div>
    </>
  );
}
