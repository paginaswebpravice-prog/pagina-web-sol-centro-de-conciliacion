"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CartaConciliacion() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.article
          id="carta-conciliacion"
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
            Carta de conciliación (modelo)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            La <strong>carta de conciliación</strong> se usa como invitación
            formal previa (antes de radicar) o como comunicación de intención de
            arreglo. Es útil para abrir puerta a un acuerdo y, a nivel
            estratégico, dejar constancia de buena fe.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Modelo de carta (invitación a conciliar)
          </motion.h3>

          <motion.pre
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            {`[Ciudad], [dd] de [mes] de [aaaa]

Señor(a): [Nombre]
[Documento/NIT]
[Dirección / Correo]
Asunto: Invitación a conciliación / propuesta de arreglo

Cordial saludo,

Por medio de la presente, me permito invitarle formalmente a una conciliación con el fin de resolver de manera
directa y eficiente el conflicto relacionado con: [descripción breve].

Propuesta base (opcional):
- [Pago/entrega/obligación] por valor de $[●] COP, en [●] cuotas / en fecha [●]
- Medio: [●]
- Condiciones: [●]

La intención es evitar mayores costos y tiempos, y dejar un acuerdo claro por escrito. Quedo atento(a) a su confirmación
para programar la audiencia en [Centro de Conciliación ●] o acordar una fecha para radicar la solicitud.

Atentamente,

[Firma]
[Nombre]
[CC]
[Teléfono]
[Correo]`}
          </motion.pre>
        </motion.article>
      </div>
    </div>
  );
}
