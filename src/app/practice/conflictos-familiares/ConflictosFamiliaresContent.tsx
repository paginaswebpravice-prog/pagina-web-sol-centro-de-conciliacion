"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function ConflictosFamiliaresContent() {
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
            CONCILIACIÓN Y CONFLICTOS FAMILIARES EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación familiar en Colombia: resuelva conflictos familiares
            sin demanda
          </h1>

          <p className={styles.description}>
            La conciliación en conflictos familiares permite resolver
            desacuerdos entre miembros de la familia de forma rápida, legal y
            respetuosa en Bogotá y Colombia, evitando procesos judiciales largos
            y desgastantes.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué son los conflictos familiares y cómo resolverlos?
            </h2>

            <p className={styles.text}>
              Son desacuerdos que surgen entre miembros de una familia por temas
              económicos, emocionales o legales como separaciones, custodia de
              hijos, responsabilidades o convivencia.
            </p>

            <p className={styles.text}>
              En Colombia, estos conflictos pueden resolverse mediante
              conciliación sin necesidad de acudir a un juez.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conflictos familiares que se pueden conciliar en Colombia
            </h2>

            <p className={styles.text}>
              Muchos conflictos familiares pueden resolverse de forma legal y
              pacífica mediante conciliación.
            </p>

            <ul className={styles.list}>
              <li>Separaciones o rupturas de pareja.</li>
              <li>Acuerdos sobre custodia de hijos.</li>
              <li>Régimen de visitas.</li>
              <li>Cuotas de alimentos.</li>
              <li>Conflictos por bienes familiares.</li>
              <li>Obligaciones económicas entre familiares.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación familiar en Colombia
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita conflictos mayores</h3>
                <p className={styles.cardText}>
                  Reduce tensiones y evita que el problema escale.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Protege a los hijos</h3>
                <p className={styles.cardText}>
                  Prioriza el bienestar de niños y adolescentes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Solución rápida y legal</h3>
                <p className={styles.cardText}>
                  Evita procesos judiciales largos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>
                <p className={styles.cardText}>
                  Tienen validez jurídica en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor desgaste emocional</h3>
                <p className={styles.cardText}>
                  Reduce el impacto emocional del conflicto.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones flexibles</h3>
                <p className={styles.cardText}>
                  Permite acuerdos adaptados a cada familia.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda por conflictos familiares?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales familiares pueden generar mayor distancia
              emocional, conflictos prolongados y afectar especialmente a los
              hijos.
            </p>

            <p className={styles.text}>
              La conciliación permite resolver los problemas con diálogo y sin
              confrontación judicial.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación familiar en Colombia?
            </h2>

            <p className={styles.text}>
              Se solicita la conciliación ante un centro autorizado en Colombia.
              Luego se cita a las partes a una audiencia para buscar un acuerdo
              con acompañamiento legal.
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
