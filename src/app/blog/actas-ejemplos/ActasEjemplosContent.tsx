"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ActasEjemplosContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acta de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación es el documento legal donde quedan registrados los acuerdos alcanzados entre las partes durante una conciliación en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En Colombia el acta de conciliación tiene efectos jurídicos y puede exigirse judicialmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué debe contener un acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debe contener identificación de las partes, descripción del conflicto, obligaciones claras, fechas de cumplimiento, forma de pago y firmas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde hacer conciliaciones en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las conciliaciones pueden realizarse en centros de conciliación autorizados, cámaras de comercio y entidades habilitadas en Bogotá y Colombia.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Actas de conciliación en Colombia: ejemplos y recomendaciones",
    description:
      "Guía completa sobre actas de conciliación en Bogotá y Colombia con ejemplos, formatos y recomendaciones legales.",
    keywords:
      "acta de conciliación ejemplo Colombia, formato acta conciliación Bogotá, conciliación Colombia, ejemplo acuerdo de pago conciliación",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    about: [
      "Conciliación en Colombia",
      "Acta de conciliación",
      "Conciliación extrajudicial",
      "Acuerdos legales",
      "Bogotá",
    ],
  };

  return (
    <>
      <Head>
        <title>
          Actas de conciliación en Colombia | Ejemplos y formatos 2026
        </title>

        <meta
          name="description"
          content="Conoce ejemplos de actas de conciliación en Bogotá y Colombia. Aprende cómo redactar acuerdos legales válidos y ejecutables."
        />

        <meta
          name="keywords"
          content="acta de conciliación ejemplo Colombia, formato acta conciliación Bogotá, acuerdo de pago conciliación Colombia, conciliación extrajudicial Bogotá"
        />

        <meta
          property="og:title"
          content="Actas de conciliación en Colombia: ejemplos y recomendaciones"
        />

        <meta
          property="og:description"
          content="Guía completa con ejemplos reales de actas de conciliación en Bogotá y Colombia."
        />

        <meta property="og:type" content="article" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
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
          itemScope
          itemType="https://schema.org/Article"
        >
          <motion.h1
            className={styles.title}
            itemProp="headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Actas de conciliación en Colombia: ejemplos y recomendaciones
          </motion.h1>

          <motion.p
            className={styles.text}
            itemProp="description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Muchas búsquedas como{" "}
            <strong>“acta de conciliación ejemplo Colombia”</strong>,{" "}
            <strong>“formato acta de conciliación Bogotá”</strong> o{" "}
            <strong>“acuerdo de pago conciliación Colombia”</strong> apuntan a
            lo mismo: entender cómo se redacta un acuerdo claro, válido
            jurídicamente y realmente ejecutable.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En Colombia, el acta de conciliación es uno de los documentos más
            importantes dentro de una conciliación extrajudicial, ya que presta
            mérito ejecutivo. Esto significa que, si una de las partes incumple
            el acuerdo, el documento puede utilizarse judicialmente para exigir
            el cumplimiento de las obligaciones pactadas.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En ciudades como <strong>Bogotá</strong>, Medellín, Cali,
            Barranquilla y otras regiones de Colombia, miles de personas y
            empresas utilizan la conciliación para resolver conflictos
            relacionados con deudas, arrendamientos, obligaciones civiles,
            conflictos comerciales y acuerdos familiares sin necesidad de acudir
            directamente a un juicio.
          </motion.p>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              La buena práctica en una conciliación en Bogotá o en cualquier
              parte de Colombia es convertir el conflicto en obligaciones
              claras, medibles y verificables: montos exactos, fechas, forma de
              pago, condiciones de entrega y consecuencias del incumplimiento.
            </p>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Qué es un acta de conciliación en Colombia?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            El acta de conciliación es el documento donde se registran los
            acuerdos alcanzados por las partes durante una audiencia de
            conciliación en Colombia.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Este documento debe contener información clara sobre las partes, el
            conflicto, las obligaciones pactadas y las condiciones de
            cumplimiento. Una redacción precisa evita problemas futuros y
            facilita exigir el cumplimiento en caso de incumplimiento.
          </motion.p>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ejemplos de actas de conciliación en Colombia
          </motion.h2>

          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Ejemplo 1: Acuerdo de pago (deuda)
              </h3>

              <p className={styles.cardText}>
                Este tipo de conciliación es frecuente en Bogotá y Colombia
                cuando existen obligaciones económicas pendientes entre personas
                o empresas.
              </p>

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
              <h3 className={styles.innerTitle}>
                Ejemplo 2: Entrega de bien o servicio
              </h3>

              <p className={styles.cardText}>
                Este formato puede utilizarse en conciliaciones comerciales,
                civiles o contractuales relacionadas con entrega de productos o
                prestación de servicios.
              </p>

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
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Qué debe tener un acta de conciliación válida en Colombia
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <li>Identificación completa de las partes.</li>
            <li>Descripción clara y concreta del conflicto.</li>
            <li>Obligaciones específicas y verificables.</li>
            <li>Fechas exactas de cumplimiento.</li>
            <li>Forma de pago o forma de entrega.</li>
            <li>Consecuencias jurídicas del incumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
            <li>Datos del centro de conciliación.</li>
          </motion.ul>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Recomendaciones para redactar acuerdos de conciliación
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En Bogotá y Colombia es recomendable que las obligaciones incluyan
            fechas exactas, montos claros y mecanismos verificables de
            cumplimiento. También es importante definir soportes como
            comprobantes de pago, actas de entrega o correos electrónicos.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Un acuerdo bien redactado reduce el riesgo de nuevos conflictos y
            permite que las partes tengan mayor seguridad jurídica frente al
            cumplimiento de lo pactado.
          </motion.p>

          <motion.details
            className={styles.details}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.6 }}
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
              <li>No especificar consecuencias del incumplimiento.</li>
              <li>No dejar evidencia verificable.</li>
            </ul>
          </motion.details>

          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.ctaTitle}>
              ¿Necesitas orientación sobre conciliación en Bogotá o Colombia?
            </h3>

            <p className={styles.ctaText}>
              Recibe asesoría sobre conciliación extrajudicial, acuerdos
              legales, recuperación de cartera y resolución de conflictos
              civiles, comerciales y familiares.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              className={styles.ctaButton}
            >
              Solicitar asesoría por WhatsApp
            </a>
          </motion.div>
        </motion.article>
      </section>
    </>
  );
}
