"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function LiquidacionDeSociedadConyugalContent() {
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
            LIQUIDACIÓN DE SOCIEDAD CONYUGAL EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Divide bienes tras separación sin demanda en Colombia
          </h1>

          <p className={styles.description}>
            La liquidación de sociedad conyugal permite repartir los bienes
            adquiridos durante el matrimonio o unión marital de forma legal,
            rápida y sin necesidad de procesos judiciales en Bogotá y Colombia.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la liquidación de sociedad conyugal?
            </h2>

            <p className={styles.text}>
              Es el proceso mediante el cual se reparten los bienes, deudas y
              obligaciones adquiridas durante el matrimonio o unión marital una
              vez finaliza la relación.
            </p>

            <p className={styles.text}>
              En Colombia, este proceso puede hacerse mediante conciliación sin
              necesidad de acudir a un juez.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué bienes se pueden liquidar?
            </h2>

            <p className={styles.text}>
              En la liquidación se incluyen todos los bienes adquiridos durante
              la sociedad conyugal.
            </p>

            <ul className={styles.list}>
              <li>Bienes inmuebles (casas, apartamentos, terrenos).</li>
              <li>Vehículos.</li>
              <li>Dinero y cuentas bancarias.</li>
              <li>Deudas adquiridas durante el matrimonio.</li>
              <li>Inversiones y activos financieros.</li>
              <li>Bienes muebles de valor.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación en la liquidación de bienes
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita juicio largo</h3>
                <p className={styles.cardText}>
                  Reduce procesos judiciales complejos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Solución rápida</h3>
                <p className={styles.cardText}>Acuerdos en menor tiempo.</p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ahorro económico</h3>
                <p className={styles.cardText}>
                  Menores costos legales y notariales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdo legal</h3>
                <p className={styles.cardText}>
                  Tiene validez jurídica en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menos conflicto</h3>
                <p className={styles.cardText}>
                  Evita confrontaciones entre las partes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones flexibles</h3>
                <p className={styles.cardText}>
                  Permite acuerdos personalizados.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar un proceso judicial de liquidación?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales pueden tardar años y generar altos costos
              emocionales y económicos.
            </p>

            <p className={styles.text}>
              La conciliación permite resolver el conflicto de manera más rápida
              y con mayor control sobre los acuerdos.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar la liquidación de sociedad conyugal?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la solicitud ante un centro de conciliación
              en Colombia. Luego se realiza una audiencia para definir el
              reparto de bienes.
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
