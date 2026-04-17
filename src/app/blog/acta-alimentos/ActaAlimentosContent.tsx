"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaAlimentosContent() {
  return (
    <div
      className={styles.wrapper}
      itemScope
      itemType="https://schema.org/Article"
    >
      <div className={styles.container}>
        <motion.article
          id="acta-alimentos"
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h1 className={styles.title} itemProp="headline">
            Acta de conciliación de alimentos en Colombia (ejemplo completo y
            guía 2026)
          </motion.h1>

          <p className={styles.text} itemProp="description">
            Si estás buscando{" "}
            <strong>“acta de conciliación de alimentos en Colombia”</strong> o
            <strong> “ejemplo de cuota alimentaria en Bogotá”</strong>, este
            contenido te explica cómo redactarla correctamente, qué exige la ley
            colombiana y cómo asegurar que el acuerdo sea realmente ejecutable.
          </p>

          <p className={styles.text}>
            En ciudades como <strong>Bogotá</strong>, este tipo de conciliación
            es uno de los mecanismos más utilizados en derecho de familia, ya
            que permite evitar procesos judiciales largos y establecer acuerdos
            claros sobre la manutención de hijos o personas dependientes.
          </p>

          <h2 className={styles.subTitle}>
            ¿Qué establece el artículo 411 del Código Civil colombiano?
          </h2>

          <p className={styles.text}>
            El <strong>artículo 411 del Código Civil en Colombia</strong> define
            quiénes tienen la obligación de suministrar alimentos.
          </p>

          <ul className={styles.list}>
            <li>Capacidad económica del obligado.</li>
            <li>Necesidades reales del menor o beneficiario.</li>
            <li>Proporcionalidad y sostenibilidad del acuerdo.</li>
          </ul>

          <div className={styles.note}>
            Consejo SEO + legal: incluir soportes de ingresos y gastos aumenta
            la validez del acuerdo.
          </div>

          <h2 className={styles.subTitle}>
            ¿Qué debe contener un acta de conciliación de alimentos bien hecha?
          </h2>

          <ul className={styles.list}>
            <li>Identificación completa de las partes.</li>
            <li>Datos del menor o beneficiario.</li>
            <li>Valor exacto de la cuota alimentaria.</li>
            <li>Forma de pago.</li>
            <li>Fechas de pago.</li>
            <li>Gastos extraordinarios.</li>
            <li>Cláusulas de incumplimiento.</li>
          </ul>

          <h2 className={styles.subTitle}>
            Ejemplo de acta de conciliación de alimentos en Colombia
          </h2>

          <pre className={styles.pre}>
            {`ACTA DE CONCILIACIÓN (ALIMENTOS) – COLOMBIA

Ciudad: Bogotá D.C.
Fecha: [●]

I. PARTES
Solicitante: [●] - CC [●]
Citado: [●] - CC [●]

II. BENEFICIARIO
Menor: [Nombre] – Registro civil [●]

III. ACUERDOS

1. Cuota alimentaria:
El obligado pagará $[●] COP mensuales dentro de los primeros [●] días.

2. Forma de pago:
Transferencia bancaria.

3. Gastos extraordinarios:
Serán asumidos en proporción.

4. Incumplimiento:
Se podrá exigir cumplimiento por vía legal.`}
          </pre>

          <h2 className={styles.subTitle}>
            Preguntas frecuentes sobre conciliación de alimentos en Colombia
          </h2>

          <div className={styles.faq}>
            <h4>¿El acta de conciliación tiene validez legal?</h4>
            <p>Sí, tiene efectos jurídicos ejecutables.</p>

            <h4>¿Se puede hacer conciliación sin abogado?</h4>
            <p>Sí, en centros autorizados en Colombia.</p>

            <h4>¿Qué pasa si no se paga la cuota?</h4>
            <p>Se puede iniciar un proceso judicial.</p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
