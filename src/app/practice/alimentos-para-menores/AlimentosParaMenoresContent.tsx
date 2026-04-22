"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AlimentosMenoresContent() {
  return (
    <>
      <section className={styles.section}>
        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.subtitle}>
            ALIMENTOS PARA MENORES EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación de cuota alimentaria para hijos en Colombia
          </h1>

          <p className={styles.description}>
            La conciliación de alimentos para menores permite establecer,
            modificar o regular la cuota alimentaria de forma legal, rápida y
            sin procesos judiciales en Bogotá y Colombia, garantizando el
            bienestar de los niños.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué son los alimentos para menores?
            </h2>

            <p className={styles.text}>
              Son todas las obligaciones económicas que tienen los padres para
              garantizar la manutención, educación, salud, vivienda y bienestar
              de sus hijos menores de edad.
            </p>

            <p className={styles.text}>
              En Colombia, esta obligación es de carácter legal y no puede ser
              ignorada ni renunciada.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué incluye la cuota alimentaria?
            </h2>

            <ul className={styles.list}>
              <li>Alimentación diaria del menor.</li>
              <li>Educación y matrícula escolar.</li>
              <li>Servicios médicos y salud.</li>
              <li>Vestuario y necesidades básicas.</li>
              <li>Recreación y bienestar general.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Para qué sirve la conciliación de alimentos?
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Fijar cuota</h3>
                <p className={styles.cardText}>
                  Establecer el valor de la cuota alimentaria.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Modificar acuerdos</h3>
                <p className={styles.cardText}>
                  Ajustar la cuota según ingresos o necesidades.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evitar demandas</h3>
                <p className={styles.cardText}>
                  Resolver conflictos sin procesos judiciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Protección legal</h3>
                <p className={styles.cardText}>
                  Garantizar derechos del menor.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdo obligatorio</h3>
                <p className={styles.cardText}>El acta tiene fuerza legal.</p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Solución rápida</h3>
                <p className={styles.cardText}>
                  Evita procesos largos en juzgados.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué pasa si no se paga la cuota alimentaria?
            </h2>

            <p className={styles.text}>
              El incumplimiento puede generar procesos judiciales, embargos,
              sanciones legales e incluso consecuencias penales en Colombia.
            </p>

            <p className={styles.text}>
              Por eso la conciliación es una alternativa preventiva y legal muy
              efectiva.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación de alimentos?
            </h2>

            <p className={styles.text}>
              El proceso inicia con una solicitud en un centro de conciliación,
              donde se citan ambas partes para acordar la cuota alimentaria.
            </p>

            <p className={styles.text}>
              Si hay acuerdo, se firma un acta con valor jurídico obligatorio.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
