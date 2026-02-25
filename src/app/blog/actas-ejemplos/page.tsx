"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActasEjemplos() {
  return (
    <section className={styles.wrapper}>
      <motion.article
        id="actas-ejemplos"
        className={styles.card}
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
          Actas de conciliación: ejemplos y recomendaciones
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Muchas búsquedas como{" "}
          <strong>“actas de conciliación ejemplos”</strong> apuntan a lo mismo:
          ver cómo se redacta un acuerdo claro. La buena práctica es convertir
          el conflicto en obligaciones medibles:
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
            <h3 className={styles.subTitle}>
              Ejemplo 1: Acuerdo de pago (deuda)
            </h3>
            <motion.pre
              className={styles.pre}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {`Conciliantes B reconoce(n) deber a Conciliantes A la suma de $[●] COP, y se obliga(n) a pagarla en [●] cuotas
mensuales de $[●] cada una, los días [●] de cada mes, mediante transferencia a la cuenta [●].
El pago se acredita con el comprobante de la entidad bancaria enviado al correo [●].`}
            </motion.pre>
          </motion.section>

          <motion.section
            className={styles.innerCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <h3 className={styles.subTitle}>
              Ejemplo 2: Entrega de bien / servicio
            </h3>
            <motion.pre
              className={styles.pre}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {`Conciliantes B se obliga(n) a entregar el bien [●] el día [●] en la dirección [●], con estas características: [●].
La entrega se formaliza con acta de entrega firmada por ambas partes y registro fotográfico.`}
            </motion.pre>
          </motion.section>
        </motion.div>

        <motion.details
          className={styles.details}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <summary className={styles.summary}>
            Errores típicos que hacen débil un acta
          </summary>
          <ul className={styles.detailsList}>
            <motion.li
              className={styles.detailsItem}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              viewport={{ once: true }}
            >
              No poner fechas (“a la mayor brevedad”).
            </motion.li>
            <motion.li
              className={styles.detailsItem}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              viewport={{ once: true }}
            >
              No definir medio de pago/entrega.
            </motion.li>
            <motion.li
              className={styles.detailsItem}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              No aclarar quién representa a quién (y sin poder).
            </motion.li>
            <motion.li
              className={styles.detailsItem}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              No anexar soportes clave que sustentan el acuerdo.
            </motion.li>
          </ul>
        </motion.details>
      </motion.article>
    </section>
  );
}
