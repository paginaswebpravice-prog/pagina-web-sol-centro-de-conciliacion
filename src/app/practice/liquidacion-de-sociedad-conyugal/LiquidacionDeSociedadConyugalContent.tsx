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
            Liquidación de sociedad conyugal en Colombia sin procesos judiciales
            largos
          </h1>

          <p className={styles.description}>
            La liquidación de sociedad conyugal en Colombia permite repartir de
            forma legal los bienes, deudas y obligaciones adquiridas durante el
            matrimonio o unión marital de hecho. A través de conciliación, las
            partes pueden llegar a acuerdos rápidos, claros y con validez
            jurídica en Bogotá y Colombia, evitando procesos judiciales largos,
            conflictos familiares y altos costos legales.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la liquidación de sociedad conyugal y cómo funciona en
              Colombia?
            </h2>

            <p className={styles.text}>
              La sociedad conyugal es el patrimonio económico que se forma entre
              los cónyuges o compañeros permanentes durante la relación. Cuando
              ocurre una separación, divorcio o terminación de la unión marital,
              es necesario realizar la liquidación para definir cómo se
              distribuirán los bienes y obligaciones adquiridos durante ese
              tiempo.
            </p>

            <p className={styles.text}>
              En Colombia, este proceso puede desarrollarse mediante
              conciliación cuando existe voluntad de diálogo entre las partes.
              La conciliación permite llegar a acuerdos sobre el reparto de
              bienes sin necesidad de acudir inmediatamente a un juez,
              facilitando soluciones más rápidas y menos conflictivas.
            </p>

            <p className={styles.text}>
              Además de evitar largos procesos judiciales, la conciliación ayuda
              a proteger la estabilidad económica y emocional de las partes,
              especialmente cuando existen hijos o bienes compartidos que
              requieren decisiones claras y organizadas.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Bienes y obligaciones que pueden incluirse en la liquidación de
              sociedad conyugal
            </h2>

            <p className={styles.text}>
              Durante la conciliación se pueden identificar, valorar y repartir
              distintos bienes y obligaciones adquiridos durante la relación.
              Todo dependerá de las condiciones particulares de cada caso y de
              los acuerdos alcanzados entre las partes.
            </p>

            <ul className={styles.list}>
              <li>Casas, apartamentos, lotes y otros inmuebles.</li>
              <li>Vehículos y motocicletas.</li>
              <li>Cuentas bancarias y dinero ahorrado.</li>
              <li>Créditos y deudas adquiridas durante la relación.</li>
              <li>Negocios, inversiones o participaciones comerciales.</li>
              <li>Muebles, electrodomésticos y bienes de valor.</li>
              <li>Obligaciones financieras compartidas.</li>
              <li>Acuerdos relacionados con hipotecas o préstamos.</li>
            </ul>

            <p className={styles.text}>
              La claridad en la identificación de bienes y deudas es fundamental
              para evitar conflictos posteriores y lograr acuerdos equilibrados
              que puedan cumplirse adecuadamente.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de liquidar la sociedad conyugal mediante conciliación
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Evita procesos judiciales extensos
                </h3>
                <p className={styles.cardText}>
                  Reduce el tiempo y desgaste que puede generar un proceso ante
                  jueces de familia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Acuerdos rápidos y organizados
                </h3>
                <p className={styles.cardText}>
                  Permite definir el reparto de bienes de manera más ágil y
                  práctica.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menores costos legales</h3>
                <p className={styles.cardText}>
                  Disminuye gastos relacionados con litigios prolongados y
                  actuaciones judiciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Acuerdos con validez jurídica
                </h3>
                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos legales y puede exigirse
                  judicialmente.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor desgaste emocional</h3>
                <p className={styles.cardText}>
                  Reduce confrontaciones familiares y facilita acuerdos más
                  tranquilos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Soluciones flexibles y personalizadas
                </h3>
                <p className={styles.cardText}>
                  Las partes pueden pactar condiciones adaptadas a sus
                  necesidades económicas y familiares.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar un proceso judicial de liquidación de bienes en
              Colombia?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales de liquidación de sociedad conyugal pueden
              tardar largos periodos y generar altos costos económicos,
              emocionales y familiares. Además, cuando existe conflicto entre
              las partes, las decisiones suelen volverse más complejas y
              desgastantes.
            </p>

            <p className={styles.text}>
              La conciliación permite mantener mayor control sobre las
              decisiones relacionadas con el reparto de bienes, evitando que sea
              un juez quien determine completamente la forma de distribución del
              patrimonio.
            </p>

            <p className={styles.text}>
              También ayuda a preservar la comunicación entre las partes y
              facilita soluciones más equilibradas cuando existen hijos,
              propiedades compartidas o responsabilidades financieras en común.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una liquidación de sociedad conyugal en Colombia?
            </h2>

            <p className={styles.text}>
              El proceso inicia con una solicitud ante un centro de conciliación
              autorizado en Colombia. Posteriormente, las partes son citadas a
              una audiencia en la que se busca llegar a acuerdos sobre el
              reparto de bienes, deudas y demás obligaciones.
            </p>

            <p className={styles.text}>
              Durante la conciliación es importante contar con información clara
              sobre propiedades, documentos, certificados, estados financieros y
              demás soportes que permitan identificar correctamente el
              patrimonio de la sociedad conyugal.
            </p>

            <p className={styles.text}>
              Si las partes llegan a un acuerdo, este queda consignado en un
              acta de conciliación con validez legal y obligatorio cumplimiento
              en Colombia.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Importancia de una asesoría adecuada en la liquidación de bienes
            </h2>

            <p className={styles.text}>
              Cada sociedad conyugal tiene características diferentes. Por eso,
              recibir orientación adecuada puede ayudar a evitar errores en la
              distribución de bienes, omisiones patrimoniales o acuerdos poco
              claros que generen problemas posteriores.
            </p>

            <p className={styles.text}>
              Una conciliación bien estructurada permite organizar correctamente
              el reparto patrimonial, establecer obligaciones concretas y
              proteger los intereses de ambas partes dentro del marco legal
              colombiano.
            </p>
          </div>

          {/* BLOQUE 7 - FAQ */}
          <div className={`${styles.block} ${styles.faqSection}`}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre liquidación de sociedad conyugal
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La liquidación de sociedad conyugal puede hacerse por
                  conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Cuando existe disposición de diálogo entre las partes, la
                  conciliación permite llegar a acuerdos sobre bienes, deudas y
                  obligaciones sin acudir inmediatamente a un proceso judicial.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿El acuerdo de conciliación tiene validez legal en Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene efectos jurídicos y puede
                  exigirse judicialmente en caso de incumplimiento por alguna de
                  las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué bienes entran en la sociedad conyugal?
                </h3>

                <p className={styles.faqAnswer}>
                  Dependiendo del caso, pueden incluirse inmuebles, vehículos,
                  cuentas bancarias, negocios, inversiones, muebles y deudas
                  adquiridas durante el matrimonio o unión marital de hecho.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Es obligatorio acudir a un juez para repartir los bienes?
                </h3>

                <p className={styles.faqAnswer}>
                  No siempre. Si ambas partes logran acuerdos mediante
                  conciliación, es posible evitar procesos judiciales largos y
                  resolver el conflicto de forma más rápida.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una parte oculta bienes durante la liquidación?
                </h3>

                <p className={styles.faqAnswer}>
                  Es importante presentar información patrimonial completa y
                  verificable. Ocultar bienes puede generar conflictos legales y
                  afectar la validez o cumplimiento de los acuerdos alcanzados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
