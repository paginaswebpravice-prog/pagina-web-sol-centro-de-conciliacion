"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosLaboralesContent() {
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
            CONCILIACIÓN LABORAL EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Resuelve conflictos laborales sin demanda en Colombia
          </h1>

          <p className={styles.description}>
            La conciliación laboral permite resolver conflictos entre
            empleadores y trabajadores de forma rápida, legal y efectiva en
            Bogotá y Colombia, evitando procesos judiciales largos, costosos y
            desgastantes para ambas partes.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación laboral en Colombia?
            </h2>

            <p className={styles.text}>
              Es un mecanismo legal mediante el cual empleadores y trabajadores
              pueden resolver sus conflictos sin necesidad de acudir a un juez
              laboral.
            </p>

            <p className={styles.text}>
              En Colombia, este proceso tiene plena validez jurídica y permite
              llegar a acuerdos justos con la intervención de un conciliador
              autorizado.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué conflictos laborales se pueden conciliar?
            </h2>

            <p className={styles.text}>
              La conciliación laboral aplica a múltiples situaciones entre
              trabajadores y empleadores.
            </p>

            <ul className={styles.list}>
              <li>Despido sin justa causa.</li>
              <li>Liquidación de contratos laborales.</li>
              <li>Salarios y prestaciones sociales adeudadas.</li>
              <li>Horas extras y recargos laborales.</li>
              <li>Incumplimiento de contratos de trabajo.</li>
              <li>Conflictos por terminación laboral.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación laboral
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita demandas</h3>
                <p className={styles.cardText}>
                  Soluciona conflictos sin procesos judiciales laborales largos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Pago rápido</h3>
                <p className={styles.cardText}>
                  Permite acuerdos de pago más rápidos para el trabajador.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor costo legal</h3>
                <p className={styles.cardText}>
                  Reduce gastos en abogados y procesos judiciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Validez jurídica</h3>
                <p className={styles.cardText}>
                  El acta de conciliación tiene fuerza legal en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones rápidas</h3>
                <p className={styles.cardText}>
                  Acuerdos en menor tiempo que un juicio laboral.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Relaciones menos conflictivas
                </h3>
                <p className={styles.cardText}>
                  Permite cerrar conflictos sin mayor confrontación.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar un proceso laboral judicial?
            </h2>

            <p className={styles.text}>
              Los procesos laborales pueden tardar meses o incluso años en
              resolverse, generando incertidumbre económica tanto para el
              trabajador como para el empleador.
            </p>

            <p className={styles.text}>
              La conciliación permite llegar a acuerdos rápidos, claros y con
              seguridad jurídica para ambas partes.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación laboral?
            </h2>

            <p className={styles.text}>
              El proceso inicia con una solicitud ante un centro de conciliación
              autorizado en Colombia. Posteriormente se cita a las partes a una
              audiencia para intentar llegar a un acuerdo.
            </p>

            <p className={styles.text}>
              Si hay acuerdo, este queda consignado en un acta con validez legal
              y obligatorio cumplimiento.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
