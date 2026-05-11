"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function IncumplimientoDeContratosContent() {
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
            CONCILIACIÓN POR INCUMPLIMIENTO DE CONTRATOS EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Incumplimiento de contratos en Colombia: resuelva conflictos sin
            demanda
          </h1>

          <p className={styles.description}>
            La conciliación en incumplimiento de contratos permite resolver
            conflictos entre empresas o particulares de forma rápida, legal y
            efectiva en Bogotá y Colombia, evitando procesos judiciales largos y
            costosos.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es el incumplimiento de contrato y cómo resolverlo?
            </h2>

            <p className={styles.text}>
              Ocurre cuando una de las partes no cumple total o parcialmente las
              obligaciones establecidas en un contrato firmado entre las partes.
            </p>

            <p className={styles.text}>
              En Colombia, estos conflictos pueden resolverse mediante
              conciliación sin necesidad de acudir inmediatamente a un proceso
              judicial.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Tipos de incumplimiento contractual más comunes en Colombia
            </h2>

            <p className={styles.text}>
              Los incumplimientos pueden presentarse de diferentes formas según
              el tipo de obligación pactada.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento total del contrato.</li>
              <li>Incumplimiento parcial de obligaciones.</li>
              <li>Retrasos en entregas o pagos.</li>
              <li>Incumplimiento en calidad del servicio o producto.</li>
              <li>Terminación unilateral del contrato.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de resolver conflictos contractuales por conciliación
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Solución rápida y legal</h3>
                <p className={styles.cardText}>
                  Evita procesos judiciales largos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ahorro de costos</h3>
                <p className={styles.cardText}>
                  Reduce gastos legales y administrativos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita demandas judiciales</h3>
                <p className={styles.cardText}>
                  Soluciona conflictos sin acudir a un juez.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>
                <p className={styles.cardText}>
                  Tienen validez jurídica en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Protege relaciones comerciales
                </h3>
                <p className={styles.cardText}>
                  Permite mantener relaciones entre las partes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones flexibles</h3>
                <p className={styles.cardText}>
                  Permite renegociar condiciones del contrato.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda por incumplimiento de contrato?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales pueden ser costosos, lentos y afectar la
              relación comercial entre las partes.
            </p>

            <p className={styles.text}>
              La conciliación permite llegar a acuerdos sin desgaste legal ni
              pérdida de tiempo.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación por incumplimiento de contrato?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la solicitud ante un centro de conciliación
              en Colombia. Luego se cita a las partes para intentar llegar a un
              acuerdo.
            </p>

            <p className={styles.text}>
              Si hay acuerdo, se firma un acta con validez legal y obligatorio
              cumplimiento.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
