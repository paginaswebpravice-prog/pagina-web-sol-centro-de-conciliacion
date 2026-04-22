"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function CustodiaYRegimenDeVisitasContent() {
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
            CUSTODIA Y RÉGIMEN DE VISITAS EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Acuerdos de custodia y visitas sin demanda en Colombia
          </h1>

          <p className={styles.description}>
            La conciliación en custodia y régimen de visitas permite a los
            padres llegar a acuerdos legales sobre el cuidado de sus hijos en
            Bogotá y Colombia, evitando procesos judiciales largos y priorizando
            siempre el bienestar del menor.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la custodia y el régimen de visitas?
            </h2>

            <p className={styles.text}>
              La custodia es el derecho y deber de cuidar, educar y convivir con
              un hijo. El régimen de visitas regula el tiempo y la forma en que
              el otro progenitor puede compartir con el menor.
            </p>

            <p className={styles.text}>
              En Colombia, estos acuerdos pueden definirse mediante conciliación
              sin necesidad de acudir a un juez.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué aspectos se pueden acordar en conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación permite definir de manera clara y legal todos los
              aspectos relacionados con los hijos.
            </p>

            <ul className={styles.list}>
              <li>Custodia compartida o exclusiva.</li>
              <li>Régimen de visitas entre padres e hijos.</li>
              <li>Horarios de convivencia.</li>
              <li>Vacaciones y fechas especiales.</li>
              <li>Responsabilidad en educación y salud.</li>
              <li>Acuerdos sobre comunicación y seguimiento.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación en custodia y visitas
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Protege al menor</h3>
                <p className={styles.cardText}>
                  Prioriza el bienestar emocional y estabilidad del niño.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Evita conflictos judiciales
                </h3>
                <p className={styles.cardText}>
                  Reduce procesos legales largos y desgastantes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos rápidos</h3>
                <p className={styles.cardText}>
                  Soluciones en menor tiempo que un juicio.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Validez legal</h3>
                <p className={styles.cardText}>
                  Los acuerdos tienen fuerza jurídica en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Menos conflicto entre padres
                </h3>
                <p className={styles.cardText}>
                  Reduce tensiones familiares y mejora la comunicación.
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
              ¿Por qué evitar un proceso judicial de custodia?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales de familia pueden generar conflictos
              prolongados entre los padres y afectar emocionalmente a los hijos.
            </p>

            <p className={styles.text}>
              La conciliación permite tomar decisiones en conjunto sin
              confrontación judicial.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación de custodia?
            </h2>

            <p className={styles.text}>
              El proceso inicia solicitando la conciliación en un centro
              autorizado en Colombia. Luego se cita a las partes para llegar a
              un acuerdo con acompañamiento legal.
            </p>

            <p className={styles.text}>
              Si se logra acuerdo, se firma un acta con validez legal y
              obligatorio cumplimiento.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
