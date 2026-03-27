"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ErroresComunes() {
  return (
    <>
      <Head>
        <title>
          Errores comunes en conciliación laboral en Colombia | Guía legal
        </title>
        <meta
          name="description"
          content="Conoce los errores más comunes en la conciliación laboral en Colombia y Bogotá. Aprende cómo negociar acuerdos laborales, evitar demandas y proteger tus derechos laborales."
        />
        <meta
          name="keywords"
          content="conciliación laboral Colombia, conciliación laboral Bogotá, errores conciliación laboral, abogado laboral Bogotá, derecho laboral Colombia, acuerdo laboral conciliación"
        />
        <meta name="robots" content="index, follow" />

        {/* Schema SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Errores comunes en la conciliación laboral en Colombia",
              description:
                "Errores más comunes en conciliaciones laborales en Colombia y cómo evitarlos para lograr acuerdos legales seguros.",
              author: {
                "@type": "Organization",
                name: "Sol Centro de Conciliación",
              },
              publisher: {
                "@type": "Organization",
                name: "Sol Centro de Conciliación",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://www.solcentrodeconciliacion.com/blog/errores-conciliacion-laboral-colombia",
              },
            }),
          }}
        />
      </Head>

      <section id="errores" className={styles.section}>
        <div className={styles.container}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            8) Errores comunes en la conciliación laboral y cómo evitarlos
          </motion.h2>

          {/* Párrafos SEO */}
          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La conciliación laboral en Colombia, especialmente en ciudades como
            Bogotá, es un mecanismo legal muy utilizado para resolver conflictos
            entre empleadores y trabajadores sin necesidad de llegar a un
            proceso judicial. Sin embargo, muchas personas cometen errores
            durante la audiencia de conciliación que pueden afectar el acuerdo
            final, los pagos, las indemnizaciones o incluso sus derechos
            laborales.
          </motion.p>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Conocer los errores más comunes en conciliaciones laborales permite
            negociar mejor, evitar pérdidas económicas y lograr acuerdos legales
            seguros. A continuación, te explicamos los errores más frecuentes en
            conciliación laboral en Colombia y cómo puedes evitarlos antes de
            firmar un acuerdo.
          </motion.p>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ul className={styles.list}>
              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span>
                  <strong>Llegar sin propuesta económica:</strong> Muchas
                  personas asisten a la conciliación sin tener claro cuánto
                  dinero van a solicitar, cómo se debe pagar o en qué plazos.
                  Siempre es recomendable llevar una propuesta clara con
                  valores, fechas y forma de pago.
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span>
                  <strong>No llevar soportes o pruebas:</strong> Contratos,
                  desprendibles de nómina, mensajes, correos electrónicos o
                  cualquier documento laboral puede facilitar el acuerdo y
                  demostrar la existencia de la relación laboral.
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.39, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span>
                  <strong>Firmar acuerdos sin leer:</strong> En Colombia muchas
                  personas firman el acta de conciliación sin revisar montos,
                  fechas o condiciones. Una vez firmada el acta, tiene efectos
                  legales y puede ser difícil modificarla.
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.46, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span>
                  <strong>Actas ambiguas o incompletas:</strong> Si el acuerdo
                  no establece claramente valores, fechas de pago y forma de
                  cumplimiento, el acuerdo puede generar nuevos conflictos
                  legales en el futuro.
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.53, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span>
                  <strong>Pensar que la conciliación es un juicio:</strong> La
                  conciliación laboral no es para ganar o perder, sino para
                  negociar y llegar a un acuerdo legal que beneficie a ambas
                  partes y evite procesos judiciales largos.
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Párrafo final SEO */}
          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Si vas a asistir a una conciliación laboral en Bogotá o cualquier
            ciudad de Colombia, lo más recomendable es recibir asesoría legal
            antes de la audiencia. Un abogado laboral puede ayudarte a calcular
            liquidaciones, indemnizaciones y valores reales para lograr un
            acuerdo justo y legal.
          </motion.p>
        </div>
      </section>
    </>
  );
}
