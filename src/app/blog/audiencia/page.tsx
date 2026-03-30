"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Audiencia() {
  return (
    <>
      <Head>
        <title>Audiencia de conciliación en Colombia: cómo prepararse</title>
        <meta
          name="description"
          content="Guía completa sobre la audiencia de conciliación en Colombia. Aprende cómo funciona, qué llevar, qué pasa si no asisten y cómo prepararte en Bogotá y Colombia."
        />
        <meta
          name="keywords"
          content="audiencia de conciliación Colombia, audiencia de conciliación Bogotá, conciliación extrajudicial Colombia, abogado conciliación Bogotá, proceso de conciliación Colombia"
        />

        {/* Schema SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Audiencia de conciliación en Colombia: cómo prepararse",
              description:
                "Guía completa sobre la audiencia de conciliación en Colombia, qué pasa en la audiencia, qué llevar y cómo prepararse en Bogotá Colombia.",
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
              about: [
                "audiencia de conciliación Colombia",
                "conciliación extrajudicial Bogotá",
                "derecho civil Colombia",
              ],
            }),
          }}
        />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="audiencia"
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Audiencia de conciliación en Colombia: cómo es y cómo prepararte
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              La <strong>audiencia de conciliación en Colombia</strong> es un
              mecanismo legal utilizado para resolver conflictos sin necesidad
              de llegar a un proceso judicial. En ciudades como{" "}
              <strong>Bogotá</strong>, este procedimiento es muy común en
              conflictos civiles, comerciales, de arrendamiento, deudas y
              responsabilidad contractual.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Muchas personas buscan información sobre la audiencia de
              conciliación porque han recibido una citación y no saben qué
              ocurrirá ese día. La audiencia normalmente tiene cinco momentos:
              identificación de las partes, exposición de los hechos, precisión
              de las pretensiones, negociación y cierre mediante acta de acuerdo
              o constancia de no conciliación.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Cómo funciona la audiencia de conciliación en Colombia
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              En la audiencia, un conciliador imparcial escucha a las partes e
              intenta que lleguen a un acuerdo. Si se logra un acuerdo, este
              tiene efectos legales y presta mérito ejecutivo, lo que significa
              que puede exigirse judicialmente su cumplimiento en Colombia.
            </motion.p>

            <motion.div
              className={styles.grid}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.section
                className={styles.innerCard}
                whileHover={{ y: -6 }}
              >
                <h3>Qué llevar a la audiencia</h3>
                <ul>
                  <li>Documento de identidad.</li>
                  <li>
                    Soportes: contratos, facturas, chats, consignaciones,
                    certificaciones.
                  </li>
                  <li>Propuesta escrita con monto y plazos.</li>
                  <li>Dos alternativas de negociación.</li>
                  <li>Liquidación de la deuda o pretensión.</li>
                </ul>
              </motion.section>

              <motion.section
                className={styles.innerCard}
                whileHover={{ y: -6 }}
              >
                <h3>Qué NO hacer en la audiencia</h3>
                <ul>
                  <li>Ir sin cifras o sin fechas.</li>
                  <li>No llevar pruebas o soportes.</li>
                  <li>Firmar acuerdos ambiguos.</li>
                  <li>No leer el acta antes de firmar.</li>
                  <li>No proponer alternativas de pago.</li>
                </ul>
              </motion.section>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Qué pasa si no se llega a un acuerdo
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Si no hay acuerdo, el conciliador emitirá una constancia de no
              conciliación. Este documento normalmente permite iniciar un
              proceso judicial en Colombia. Por eso la audiencia de conciliación
              es un paso previo muy importante antes de demandar.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              En Bogotá y en toda Colombia, muchas disputas se resuelven en esta
              etapa porque permite acuerdos de pago, terminación de contratos,
              entrega de inmuebles o acuerdos comerciales sin necesidad de un
              juicio largo.
            </motion.p>
          </motion.article>
        </div>
      </div>
    </>
  );
}
