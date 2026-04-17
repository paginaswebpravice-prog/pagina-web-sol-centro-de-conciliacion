"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaCivilContent() {
  return (
    <div
      className={styles.wrapper}
      itemScope
      itemType="https://schema.org/Article"
    >
      <div className={styles.container}>
        <motion.article
          id="acta-civil"
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h1 className={styles.title} itemProp="headline">
            Acta de conciliación civil en Colombia: modelo, ejemplos y guía
            completa
          </motion.h1>

          <motion.p className={styles.text} itemProp="description">
            El <strong>acta de conciliación civil en Colombia</strong> es uno de
            los mecanismos más utilizados para resolver conflictos relacionados
            con{" "}
            <strong>
              deudas, contratos, incumplimientos, pagos pendientes y
              obligaciones civiles
            </strong>
            , especialmente en ciudades como <strong>Bogotá</strong>, Medellín o
            Cali.
          </motion.p>

          <motion.p className={styles.text}>
            Este tipo de conciliación permite que las partes lleguen a un
            acuerdo sin necesidad de iniciar un proceso judicial largo, dejando
            todo por escrito en un documento que tiene
            <strong> validez legal y puede ejecutarse ante un juez</strong>.
          </motion.p>

          <motion.h2 className={styles.subtitle}>
            ¿Para qué sirve un acta de conciliación civil?
          </motion.h2>

          <motion.p className={styles.text}>
            En Colombia, la conciliación civil se usa principalmente para:
          </motion.p>

          <ul className={styles.list}>
            <li>Acuerdos de pago de deudas</li>
            <li>Incumplimientos de contratos</li>
            <li>Entrega de bienes o servicios</li>
            <li>Conflictos entre particulares</li>
            <li>Responsabilidad civil</li>
          </ul>

          <motion.h2 className={styles.subtitle}>
            Claves para que un acta de conciliación sea válida en Colombia
          </motion.h2>

          <ul className={styles.list}>
            <li>Debe identificar claramente a las partes</li>
            <li>Debe establecer obligaciones concretas</li>
            <li>Debe incluir fechas exactas de cumplimiento</li>
            <li>Debe definir medios de pago o entrega</li>
            <li>Debe firmarse ante un conciliador autorizado</li>
          </ul>

          <motion.div className={styles.note}>
            Consejo clave en Bogotá y Colombia: un acta mal redactada puede ser
            difícil de ejecutar. Siempre incluye montos, fechas y pruebas de
            cumplimiento.
          </motion.div>

          <motion.h2 className={styles.subtitle}>
            Efectos legales del acta de conciliación civil en Colombia
          </motion.h2>

          <motion.p className={styles.text}>
            El acta tiene efectos legales importantes:
          </motion.p>

          <ul className={styles.list}>
            <li>Hace tránsito a cosa juzgada</li>
            <li>Presta mérito ejecutivo</li>
            <li>Obliga legalmente a las partes</li>
            <li>Permite iniciar proceso ejecutivo si no se cumple</li>
          </ul>

          <motion.h2 className={styles.subtitle}>
            Modelo de acta de conciliación civil (Colombia)
          </motion.h2>

          <motion.pre className={styles.pre}>
            {`ACTA DE CONCILIACIÓN (CIVIL) No. [●]

Ciudad: Bogotá, Colombia
Fecha: [●]

I. PARTES
Conciliantes A (Acreedor): [●]
Conciliantes B (Deudor): [●]

II. OBJETO
Conciliación por incumplimiento de obligación derivada de contrato.

III. ACUERDOS

1) Reconocimiento:
El deudor reconoce adeudar la suma de $[●] COP.

2) Forma de pago:
Se pagará en [●] cuotas mensuales de $[●], los días [●].

3) Medio de pago:
Transferencia bancaria a la cuenta [●].

4) Cumplimiento:
Cada pago se acreditará con comprobante.

5) Cierre:
Una vez cumplido el acuerdo, se declara paz y salvo.

Firmas…`}
          </motion.pre>

          <motion.h2 className={styles.subtitle}>
            ¿Qué pasa si no cumplen el acta de conciliación en Colombia?
          </motion.h2>

          <motion.p className={styles.text}>
            Si una de las partes incumple el acuerdo, la otra puede iniciar un
            <strong> proceso ejecutivo en Colombia</strong>, lo que permite
            exigir el pago mediante embargo de bienes o cuentas.
          </motion.p>

          <motion.p className={styles.text}>
            Por eso, en ciudades como <strong>Bogotá</strong>, es clave que el
            acta esté bien redactada y estructurada.
          </motion.p>
        </motion.article>
      </div>
    </div>
  );
}
