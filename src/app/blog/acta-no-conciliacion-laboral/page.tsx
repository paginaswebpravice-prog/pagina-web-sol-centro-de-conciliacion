"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaNoConciliacionLaboral() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="acta-no-conciliacion-laboral"
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
              Acta de no conciliación laboral (modelo)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              La búsqueda <strong>“acta de no conciliación laboral”</strong>{" "}
              suele referirse a una <strong>constancia</strong> donde se deja
              registro de que <strong>no hubo acuerdo</strong> o de que una
              parte <strong>no compareció</strong>. El texto debe reflejar con
              claridad: (i) quiénes fueron citados, (ii) si asistieron, (iii) si
              hubo o no acuerdo, y (iv) cierre formal.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Modelo (sin acuerdo)
            </motion.h3>

            <motion.pre
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {`ACTA/CONSTANCIA DE NO CONCILIACIÓN (LABORAL) No. [●]

Entidad/Centro: [●]
Fecha: [dd/mm/aaaa]   Hora: [●]   Ciudad: [●]
Asunto: Conciliación laboral solicitada por [Trabajador(a)] contra [Empleador(a)]

Comparecen:
- Solicitante: [●] - CC [●]
- Citado(a): [●] - [representante legal / apoderado] - CC/NIT [●]

Hechos/pretensiones (breve):
[●]

Resultado de la diligencia:
Luego de escuchadas las partes y exploradas alternativas, manifiestan no llegar a acuerdo. En consecuencia,
se deja constancia de NO CONCILIACIÓN respecto de las pretensiones indicadas.

Se firma para constancia.

Firmas…`}
            </motion.pre>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Modelo (inasistencia)
            </motion.h3>

            <motion.pre
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {`CONSTANCIA POR INASISTENCIA No. [●]

Dejamos constancia de que el(la) citado(a) [●] no compareció a la audiencia programada para el día [●] a las [●],
pese a haber sido citado(a) en debida forma según constancias del expediente interno del Centro/Entidad.

Se expide la presente constancia para los fines pertinentes.

Firmas…`}
            </motion.pre>
          </motion.article>
        </div>
      </div>
    </>
  );
}
