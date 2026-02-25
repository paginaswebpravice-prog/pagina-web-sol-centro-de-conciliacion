"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function DocumentoFamilia() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="documento-familia"
            className={styles.card}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Documento de conciliación familiar / Acta de conciliación familiar
              (modelo)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              La búsqueda <strong>“documento de conciliación familiar”</strong>{" "}
              o <strong>“acta de conciliación familiar”</strong>
              suele incluir acuerdos de alimentos, visitas, comunicación, gastos
              y responsabilidades parentales. Lo familiar exige lenguaje claro y
              reglas operativas para evitar conflictos recurrentes.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Modelo (familiar: visitas + acuerdos de crianza)
            </motion.h3>

            <motion.pre
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.015 }}
            >
              {`ACTA DE CONCILIACIÓN (FAMILIA) No. [●]

I. PARTES
Progenitor(a) A: [●] - CC [●]
Progenitor(a) B: [●] - CC [●]
Menor: [●] - [RC/TI] - Nacimiento: [●]

II. OBJETO
Acuerdos de crianza: [visitas / comunicación / logística / gastos].

III. ACUERDOS
1) Régimen de visitas:
B compartirá con el menor así: [días/horarios]. Entrega: [lugar]. Retorno: [lugar/hora].
Cambios: deben avisarse con [●] horas/días.

2) Comunicación:
Se acuerda comunicación por [medio] en horarios [●], priorizando el bienestar del menor.

3) Gastos del menor:
Ordinarios: [●]. Extraordinarios: [●] con soportes y porcentaje [●].

4) No exposición al conflicto:
Las partes se comprometen a mantener trato respetuoso y no involucrar al menor en discusiones.

Firmas…`}
            </motion.pre>
          </motion.article>
        </div>
      </div>
    </>
  );
}
