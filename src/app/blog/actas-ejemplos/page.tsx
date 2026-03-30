"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ActasEjemplos() {
  return (
    <>
      <Head>
        <title>
          Actas de conciliación en Colombia: ejemplos, formatos y
          recomendaciones
        </title>

        <meta
          name="description"
          content="Ejemplos de actas de conciliación en Colombia, formatos de acuerdos de pago, entrega de bienes y recomendaciones para redactar un acta válida en Bogotá y Colombia."
        />

        <meta
          name="keywords"
          content="acta de conciliación ejemplo Colombia, formato acta de conciliación Colombia, acuerdo de pago conciliación Colombia, modelo acta conciliación Bogotá"
        />

        {/* Schema SEO Article + FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Article",
                headline:
                  "Actas de conciliación en Colombia: ejemplos y recomendaciones",
                description:
                  "Ejemplos de actas de conciliación en Colombia, acuerdos de pago, entrega de bienes y cómo redactar un acta válida.",
                author: {
                  "@type": "Organization",
                  name: "Cobrando Online",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Cobrando Online",
                },
                areaServed: {
                  "@type": "Country",
                  name: "Colombia",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿Qué debe contener un acta de conciliación en Colombia?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Debe contener identificación de las partes, obligaciones claras, fechas, forma de pago o entrega, soportes y firmas.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿El acta de conciliación presta mérito ejecutivo en Colombia?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sí, el acta de conciliación en Colombia presta mérito ejecutivo y puede cobrarse judicialmente si no se cumple.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </Head>

      <section className={styles.wrapper}>
        <motion.article
          id="actas-ejemplos"
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Actas de conciliación en Colombia: ejemplos y recomendaciones
          </motion.h1>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Muchas búsquedas como{" "}
            <strong>“acta de conciliación ejemplo Colombia”</strong>,{" "}
            <strong>“formato acta de conciliación Bogotá”</strong> o{" "}
            <strong>“acuerdo de pago conciliación Colombia”</strong> apuntan a
            lo mismo: entender cómo se redacta un acuerdo claro y válido
            jurídicamente. En Colombia, el acta de conciliación es muy
            importante porque presta mérito ejecutivo, lo que significa que
            puede cobrarse judicialmente si no se cumple.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            La buena práctica en una conciliación en Bogotá o en cualquier parte
            de Colombia es convertir el conflicto en obligaciones claras,
            medibles y verificables: montos exactos, fechas, forma de pago,
            condiciones de entrega y consecuencias del incumplimiento.
          </motion.p>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ejemplos de actas de conciliación en Colombia
          </motion.h2>

          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.section className={styles.innerCard}>
              <h3 className={styles.subTitle}>
                Ejemplo 1: Acuerdo de pago (deuda)
              </h3>
              <motion.pre className={styles.pre}>
                {`Conciliantes B reconoce(n) deber a Conciliantes A la suma de $[●] COP, 
y se obliga(n) a pagarla en [●] cuotas mensuales de $[●] cada una, 
los días [●] de cada mes, mediante transferencia a la cuenta [●].

El pago se acredita con el comprobante de la entidad bancaria 
enviado al correo [●]. En caso de incumplimiento de una cuota, 
se hará exigible el saldo total de la obligación.`}
              </motion.pre>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.subTitle}>
                Ejemplo 2: Entrega de bien / servicio
              </h3>
              <motion.pre className={styles.pre}>
                {`Conciliantes B se obliga(n) a entregar el bien [●] el día [●] 
en la dirección [●], con estas características: [●].

La entrega se formaliza con acta de entrega firmada por ambas partes 
y registro fotográfico. Con la entrega se entenderá cumplida la obligación.`}
              </motion.pre>
            </motion.section>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Qué debe tener un acta de conciliación en Colombia
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <li>Identificación completa de las partes.</li>
            <li>Descripción clara del conflicto.</li>
            <li>Obligaciones claras y medibles.</li>
            <li>Fechas exactas de cumplimiento.</li>
            <li>Forma de pago o forma de entrega.</li>
            <li>Consecuencias del incumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
          </motion.ul>

          <motion.details
            className={styles.details}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <summary className={styles.summary}>
              Errores típicos que hacen débil un acta de conciliación
            </summary>
            <ul className={styles.detailsList}>
              <li>No poner fechas exactas.</li>
              <li>No definir medio de pago o entrega.</li>
              <li>No anexar soportes.</li>
              <li>No identificar correctamente a las partes.</li>
              <li>Dejar obligaciones ambiguas.</li>
            </ul>
          </motion.details>
        </motion.article>
      </section>
    </>
  );
}
