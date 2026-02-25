"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function Citacion() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="citacion"
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
              Citación a audiencia de conciliación (modelo)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              La <strong>“citación audiencia de conciliación”</strong> debe ser
              muy clara: fecha, hora, modalidad, enlace (si es virtual),
              documentos a aportar y canales de contacto. Esto reduce
              inasistencias y evita suspensiones.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Modelo de citación
            </motion.h3>

            <motion.pre
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              {`CITACIÓN A AUDIENCIA DE CONCILIACIÓN No. [●]

Centro/Entidad: [●]
Ciudad: [●]
Asunto/Expediente interno: [●]

Señor(a): [Nombre del citado]
Identificación/NIT: [●]
Dirección/Correo: [●]

Por medio de la presente se cita a AUDIENCIA DE CONCILIACIÓN dentro del trámite solicitado por [Solicitante] contra [Citado],
relacionado con: [descripción breve del conflicto].

FECHA: [dd/mm/aaaa]
HORA: [●]
MODALIDAD: [Presencial / Virtual]

Si es VIRTUAL:
Enlace: [●]
Requisitos: conexión estable, documento de identidad, cámara/micrófono (si aplica).

Documentos sugeridos:
- [Contrato/facturas/soportes de pago/chats/otros]
- Poder (si actúa apoderado)

En caso de no poder asistir, comuníquese con el Centro al [teléfono/correo] con antelación.

Atentamente,

[Nombre]
[Cargo]
[Centro/Entidad]
[Firma]`}
            </motion.pre>
          </motion.article>
        </div>
      </div>
    </>
  );
}
