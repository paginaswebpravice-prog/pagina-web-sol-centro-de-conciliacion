"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function Poder() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="poder"
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
              Poder para asistir a audiencia de conciliación (modelo)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Si te piden{" "}
              <strong>“poder para asistir a audiencia de conciliación”</strong>,
              lo usual es autorizar a un apoderado para: (i) asistir, (ii)
              conciliar, (iii) suscribir el acta y (iv) aportar/recibir
              documentos. Ajusta el alcance según tu caso (general o especial).
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Modelo de poder (persona natural)
            </motion.h3>

            <motion.pre
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              style={{ transformOrigin: "center top" }}
            >
              {`PODER ESPECIAL

[Ciudad], [dd/mm/aaaa]

Yo, [Nombre completo], mayor de edad, identificado(a) con CC No. [●] de [●], confiero PODER ESPECIAL, amplio y suficiente
a [Nombre del apoderado(a)], identificado(a) con CC No. [●] y T.P. No. [●] (si aplica), para que en mi nombre y representación:

1) Comparezca a audiencia(s) de conciliación ante [Centro/Entidad] dentro del trámite solicitado por/contra [●].
2) Presente solicitudes, reciba citaciones, aporte y solicite documentos.
3) Concilié, transija y suscriba el acta de conciliación o constancias que se generen, dentro de los límites siguientes:
   - [Límite económico o condiciones: p. ej. hasta $● / plan de pago máximo ● cuotas / etc.]

Notificaciones: [correo] / [dirección].

Firma otorgante: _______________________
Nombre: [●]
CC: [●]

Firma apoderado(a) (aceptación): _______________________
Nombre: [●]
CC: [●] / T.P.: [●]`}
            </motion.pre>
          </motion.article>
        </div>
      </div>
    </>
  );
}
