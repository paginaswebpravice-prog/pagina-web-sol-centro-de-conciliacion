"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function DocumentosYEvidenciaUtil() {
  return (
    <>
      <section id="documentos" className={styles.articleWrapper}>
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
            5) Documentos y evidencia útil (lo que más ayuda)
          </motion.h2>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            La calidad de la conciliación mejora cuando el caso está sustentado.
            Estos soportes suelen ser útiles:
          </motion.p>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
            >
              <strong>Contratos</strong>, órdenes de servicio, cotizaciones
              aceptadas.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
            >
              <strong>Facturas</strong>, cuentas de cobro, soportes de
              entrega/recibo.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
            >
              <strong>Comprobantes</strong> de pago, consignaciones, extractos.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
            >
              <strong>Conversaciones</strong> (WhatsApp/correos) donde se
              reconozca la obligación o se pacten términos.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
            >
              <strong>Pruebas del incumplimiento</strong>: fechas, mensajes,
              requerimientos, actas, reportes.
            </motion.li>
          </motion.ul>

          <motion.p
            className={styles.note}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            Recomendación: imprime o consolida en PDF lo esencial. Mucho archivo
            desordenado complica, pero soporte clave bien organizado acelera.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
