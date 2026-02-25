"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaCompanerosPermanentes() {
  return (
    <section className={styles.wrapper}>
      <motion.article
        id="acta-companeros-permanentes"
        className={styles.card}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Acta de conciliación suscrita por los compañeros permanentes
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Una búsqueda frecuente es{" "}
          <strong>
            “acta de conciliación suscrita por los compañeros permanentes”
          </strong>
          . En la práctica, se usa para formalizar acuerdos derivados de la
          convivencia: cuotas de sostenimiento, responsabilidades con hijos,
          reparto de gastos, acuerdos de crianza, y reglas de
          comunicación/convivencia.
        </motion.p>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Clave: identificar plenamente a ambos compañeros permanentes y
          precisar el alcance del acuerdo (qué cubre y qué no).
        </motion.p>

        <motion.h3
          className={styles.subTitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Modelo (enfoque familiar/convivencia)
        </motion.h3>

        <motion.pre
          className={styles.pre}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {`ACTA DE CONCILIACIÓN (COMPAÑEROS PERMANENTES) No. [●]

I. COMPARECIENTES
Compañero(a) Permanente A: [●] - CC [●]
Compañero(a) Permanente B: [●] - CC [●]

II. OBJETO
Las partes desean conciliar acuerdos relacionados con: [apoyo económico / gastos del hogar / acuerdos respecto de hijos / otros].

III. ACUERDOS
1) Aporte mensual de sostenimiento:
B aportará a A la suma de $[●] COP mensuales, el día [●] de cada mes, por transferencia a [cuenta/medio], destinada a: [arriendo/servicios/mercado].

2) Gastos extraordinarios (si aplica):
Los gastos extraordinarios de [salud/educación/otros] se asumirán así: [porcentajes] y se acreditarán con: [facturas/recibos].

3) Comunicación y cumplimiento:
La coordinación se realizará por [WhatsApp/correo] y se dejará constancia de cada pago con comprobante.

4) Vigencia:
Este acuerdo rige desde [fecha] hasta [fecha] o hasta nueva conciliación por cambio de circunstancias.

Firmas…`}
        </motion.pre>
      </motion.article>
    </section>
  );
}
