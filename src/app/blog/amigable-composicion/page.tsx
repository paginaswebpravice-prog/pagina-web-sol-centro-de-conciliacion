"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function AmigableComposicion() {
  return (
    <>
      <Head>
        <title>
          Amigable composición en Colombia: qué es, amigable componedor y cómo
          funciona
        </title>

        <meta
          name="description"
          content="Aprende qué es la amigable composición en Colombia, cómo funciona el amigable componedor, diferencias con conciliación y cuándo usarla en Bogotá y Colombia."
        />

        <meta
          name="keywords"
          content="amigable composición Colombia, amigable componedor Colombia, amigable composición Bogotá, diferencia conciliación y amigable composición Colombia, mecanismos alternativos de solución de conflictos Colombia"
        />

        {/* Schema SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Amigable composición en Colombia: qué es, amigable componedor y cómo funciona",
              description:
                "Guía sobre la amigable composición en Colombia, características, amigable componedor, diferencias con conciliación y cuándo utilizar este mecanismo en Bogotá Colombia.",
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
                "Amigable composición Colombia",
                "Amigable componedor Bogotá",
                "Mecanismos alternativos de solución de conflictos Colombia",
              ],
            }),
          }}
        />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="amigable-composicion"
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
              Amigable composición en Colombia: qué es y cómo funciona
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              La <strong>amigable composición en Colombia</strong> es un
              mecanismo alternativo de solución de conflictos mediante el cual
              las partes delegan en un tercero denominado{" "}
              <strong>amigable componedor</strong> la facultad de definir la
              solución de una controversia. Este mecanismo es muy utilizado en
              contratos comerciales, contratos de obra, contratos civiles y
              conflictos empresariales en ciudades como Bogotá y en toda
              Colombia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              A diferencia de la conciliación, donde las partes construyen el
              acuerdo, en la amigable composición el tercero toma una decisión
              dentro de los límites que las partes hayan definido previamente en
              el contrato o en el acuerdo de amigable composición.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Amigable composición: definición práctica
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              La amigable composición es un mecanismo predominantemente
              contractual en Colombia. Esto significa que nace del acuerdo de
              las partes, quienes establecen el procedimiento, el alcance de la
              decisión, el término para decidir y los efectos de la decisión del
              amigable componedor.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Este mecanismo es muy común en contratos empresariales en Bogotá y
              Colombia porque permite resolver conflictos de forma más rápida
              que un proceso judicial y con la intervención de un experto en el
              tema del conflicto.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Características de la amigable composición en Colombia
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <li>
                <strong>Autonomía de la voluntad:</strong> las partes fijan las
                reglas del procedimiento.
              </li>
              <li>
                <strong>Tercero imparcial:</strong> el amigable componedor debe
                actuar con independencia.
              </li>
              <li>
                <strong>Decisión vinculante:</strong> la decisión obliga a las
                partes según lo pactado.
              </li>
              <li>
                <strong>Flexibilidad:</strong> el procedimiento es más ágil que
                un proceso judicial.
              </li>
              <li>
                <strong>Enfoque técnico:</strong> se usa mucho en contratos,
                construcción, liquidaciones y conflictos empresariales.
              </li>
            </motion.ul>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Diferencia entre conciliación y amigable composición
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              En la <strong>conciliación en Colombia</strong> las partes
              negocian y construyen el acuerdo con la ayuda de un conciliador.
              En la <strong>amigable composición en Colombia</strong>, en
              cambio, las partes delegan en un tercero la decisión final del
              conflicto.
            </motion.p>

            <motion.p
              className={styles.note}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Diferencia rápida: en conciliación las partes construyen el
              acuerdo; en amigable composición, un tercero define la solución
              dentro del marco pactado por las partes.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              ¿Cuándo conviene la amigable composición?
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <li>
                Cuando se necesita una decisión rápida de un tercero experto.
              </li>
              <li>
                Cuando se quiere evitar un proceso judicial largo en Colombia.
              </li>
              <li>Cuando el conflicto es técnico o empresarial.</li>
              <li>
                Cuando existe una cláusula de amigable composición en el
                contrato.
              </li>
              <li>Cuando las partes quieren una solución privada y rápida.</li>
            </motion.ul>
          </motion.article>
        </div>
      </div>
    </>
  );
}
