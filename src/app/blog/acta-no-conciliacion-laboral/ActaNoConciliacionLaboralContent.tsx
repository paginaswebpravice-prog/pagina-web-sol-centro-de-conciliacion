"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaNoConciliacionLaboral() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.article
          id="acta-no-conciliacion-laboral"
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h1 className={styles.title}>
            Acta de no conciliación laboral en Colombia (modelo y guía completa)
          </motion.h1>

          <p className={styles.text}>
            El <strong>acta de no conciliación laboral en Colombia</strong> es
            un documento que deja constancia de que una audiencia terminó{" "}
            <strong>sin acuerdo</strong> o que una de las partes{" "}
            <strong>no asistió</strong>.
          </p>

          <p className={styles.text}>
            En ciudades como <strong>Bogotá</strong>, este documento es clave,
            ya que en muchos casos es un{" "}
            <strong>requisito previo para presentar una demanda laboral</strong>
            .
          </p>

          <h2 className={styles.subTitle}>
            ¿Qué debe contener un acta de no conciliación laboral?
          </h2>

          <ul className={styles.list}>
            <li>Nombre del centro de conciliación</li>
            <li>Ciudad (ej: Bogotá, Colombia)</li>
            <li>Fecha y hora de la audiencia</li>
            <li>Datos del trabajador y del empleador</li>
            <li>Resumen del conflicto</li>
            <li>Constancia de no acuerdo o inasistencia</li>
            <li>Firma del conciliador</li>
          </ul>

          <h2 className={styles.subTitle}>
            Modelo de acta de no conciliación laboral
          </h2>

          <pre className={styles.pre}>
            {`ACTA DE NO CONCILIACIÓN LABORAL No. [●]

Ciudad: Bogotá, Colombia
Fecha: [●]

Solicitante: [Trabajador]
Citado: [Empleador]

Resultado:
Las partes manifiestan no llegar a un acuerdo.

Se deja constancia de NO CONCILIACIÓN.

Firmas…`}
          </pre>

          <h2 className={styles.subTitle}>
            Modelo de constancia por inasistencia
          </h2>

          <pre className={styles.pre}>
            {`CONSTANCIA POR INASISTENCIA

Se deja constancia de que el citado no asistió a la audiencia
de conciliación programada.

Firmas…`}
          </pre>

          <h2 className={styles.subTitle}>
            ¿Para qué sirve la no conciliación laboral?
          </h2>

          <p className={styles.text}>
            La constancia permite demostrar que se intentó resolver el conflicto
            antes de acudir a un juez. En muchos procesos laborales en Colombia,
            este documento es necesario para poder demandar.
          </p>

          <h2 className={styles.subTitle}>¿Qué pasa si no hay acuerdo?</h2>

          <p className={styles.text}>
            Las partes pueden acudir a la{" "}
            <strong>jurisdicción laboral en Colombia</strong> para que un juez
            resuelva el conflicto.
          </p>

          <div className={styles.note}>
            Consejo clave: guarda siempre el acta o constancia, ya que es
            fundamental para iniciar procesos judiciales en Colombia.
          </div>

          <h2 className={styles.subTitle}>Preguntas frecuentes</h2>

          <div className={styles.faq}>
            <h4>¿Sirve para demandar?</h4>
            <p>Sí, en muchos casos es requisito previo.</p>

            <h4>¿Qué pasa si el empleador no asiste?</h4>
            <p>
              Se deja constancia por inasistencia y puedes continuar el proceso.
            </p>

            <h4>¿Tiene efectos legales?</h4>
            <p>
              Sí, sirve como soporte dentro de un proceso judicial laboral en
              Colombia.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
