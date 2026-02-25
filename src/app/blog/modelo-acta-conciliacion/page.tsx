"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ModeloActaConciliacion() {
  return (
    <>
      <motion.article
        id="modelo-acta-conciliacion"
        className={styles.modeloCard}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className={styles.modeloTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Modelo de acta de conciliación (general)
        </motion.h2>

        <motion.p
          className={styles.modeloText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Si estás buscando un <strong>modelo de acta de conciliación</strong>,
          lo esencial es que el documento deje sin ambigüedades:{" "}
          <strong>quién</strong> cumple, <strong>qué</strong> cumple,{" "}
          <strong>cuándo</strong> y <strong>cómo</strong>. El acuerdo debe ser
          medible (montos, fechas, obligaciones verificables) y anexar soportes
          cuando aplique.
        </motion.p>

        <motion.p
          className={styles.modeloNote}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nota: ajusta este modelo a tu centro, reglamento interno y formato.
          Evita frases genéricas como “pagará pronto”.
        </motion.p>

        <motion.h3
          className={styles.subTitle}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Modelo (copiar y pegar)
        </motion.h3>

        <motion.div
          className={styles.documentBox}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
        >
          <div className={styles.documentHeader}>
            <span>DOCUMENTO MODELO</span>
            <span>Uso referencial</span>
          </div>
          <pre>
            {`ACTA DE CONCILIACIÓN No. [●]

CENTRO DE CONCILIACIÓN: [Nombre del Centro]
CIUDAD: [●]     FECHA: [dd/mm/aaaa]     HORA INICIO: [●]     HORA FIN: [●]
MODALIDAD: [Presencial / Virtual]
CONCILIADOR(A): [Nombre completo] - [Documento] - [Registro/Designación si aplica]

I. COMPARECIENTES
1. PARTE SOLICITANTE (CONCILIANTE A):
   Nombre: [●]  Identificación: [●]  Dirección/Correo/Teléfono: [●]
   Calidad: [Persona natural / Representante legal de ●]

2. PARTE CITADA (CONCILIANTE B):
   Nombre: [●]  Identificación: [●]  Dirección/Correo/Teléfono: [●]
   Calidad: [Persona natural / Representante legal de ●]

II. OBJETO DE LA CONCILIACIÓN
Las partes manifiestan que el conflicto se origina en:
[Describir en 3-6 líneas el hecho y la pretensión].

IV. ACUERDO CONCILIATORIO
CLÁUSULA 1. OBLIGACIÓN PRINCIPAL
[Detalle exacto].

CLÁUSULA 2. MONTO / PRESTACIÓN
Valor total: $[●] COP.
Forma de pago:
- Cuota 1: $[●] el [dd/mm/aaaa]
- Cuota 2: $[●] el [dd/mm/aaaa]

CLÁUSULA 4. INCUMPLIMIENTO
En caso de incumplimiento, la parte cumplida podrá exigir lo acordado por las vías legales pertinentes.

V. FIRMA
Firma Conciliador(a): _______________________
Conciliantes A: _____________________________
Conciliantes B: _____________________________`}
          </pre>
        </motion.div>

        <motion.div
          className={styles.modeloCTA}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <strong>Checklist rápido para un acta “ejecutable”</strong>
          <ul>
            <motion.li
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
            >
              Monto exacto + fechas exactas + medio de pago/entrega.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
            >
              Cómo se acredita el cumplimiento (soporte verificable).
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
            >
              Identificación completa de partes.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
            >
              Anexos clave relacionados.
            </motion.li>
          </ul>
        </motion.div>
      </motion.article>
    </>
  );
}
