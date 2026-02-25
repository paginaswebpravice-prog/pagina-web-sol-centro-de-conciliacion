"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaCivil() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.article
          id="acta-civil"
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Acta de conciliación civil (modelo)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Si buscas <strong>“acta de conciliación civil”</strong>, normalmente
            es para deudas, incumplimientos contractuales, daños (según el
            caso), entregas, y acuerdos de pago. El éxito está en convertir el
            conflicto en un cronograma de cumplimiento.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Modelo (civil: deuda / contrato)
          </motion.h3>

          <motion.pre
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.preAnimated}
          >
            {`ACTA DE CONCILIACIÓN (CIVIL) No. [●]

I. PARTES
Conciliantes A (Acreedor/Contratante): [●]
Conciliantes B (Deudor/Contratista): [●]

II. OBJETO
Conciliación por [incumplimiento / saldo pendiente / ajuste de obligaciones] derivado de [contrato/orden/relación].

III. ACUERDOS
1) Reconocimiento:
B reconoce adeudar/cumplir la obligación consistente en: [●].

2) Pago/Entrega:
B pagará $[●] COP así: [cuotas/fechas], por [medio], a [cuenta], soporte: [comprobante].

3) Entregables (si aplica):
B entregará [●] el [●] en [●]. Se firma acta de entrega.

4) Desistimiento / cierre:
Una vez pagado/entregado lo acordado, A declara paz y salvo por el asunto conciliado.

Firmas…`}
          </motion.pre>
        </motion.article>
      </div>
    </div>
  );
}
