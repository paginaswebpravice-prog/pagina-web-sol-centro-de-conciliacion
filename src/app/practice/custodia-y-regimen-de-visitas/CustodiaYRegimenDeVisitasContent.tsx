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
            CONCILIACIÓN DE CUSTODIA Y RÉGIMEN DE VISITAS EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Custodia y régimen de visitas en Colombia: acuerdos legales sin
            demanda judicial
          </h1>

          <p className={styles.description}>
            La conciliación en custodia y régimen de visitas permite que los
            padres lleguen a acuerdos legales sobre el cuidado, convivencia y
            bienestar de sus hijos en Bogotá y Colombia, evitando procesos
            judiciales largos y priorizando siempre el interés superior del
            menor. Este mecanismo facilita soluciones claras, organizadas y con
            plena validez jurídica para proteger la estabilidad emocional y
            familiar de los niños.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la custodia y el régimen de visitas en Colombia?
            </h2>

            <p className={styles.text}>
              La custodia es el derecho y deber de cuidar, educar, acompañar y
              convivir con un hijo menor de edad. Incluye decisiones
              relacionadas con la formación, bienestar, salud, educación y
              desarrollo integral del menor.
            </p>

            <p className={styles.text}>
              Por otro lado, el régimen de visitas regula el tiempo, la forma y
              las condiciones en que el padre o madre que no tiene la custodia
              principal puede compartir con el menor, garantizando el vínculo
              familiar y emocional.
            </p>

            <p className={styles.text}>
              En Colombia, estos acuerdos pueden definirse mediante conciliación
              sin necesidad de acudir inmediatamente a un juez de familia. La
              conciliación permite construir acuerdos organizados y adaptados a
              las necesidades específicas de cada familia.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Aspectos que se pueden acordar en conciliación de custodia y
              visitas
            </h2>

            <p className={styles.text}>
              La conciliación permite definir de forma clara múltiples aspectos
              relacionados con la crianza y convivencia de los hijos, evitando
              conflictos futuros y generando mayor estabilidad familiar.
            </p>

            <ul className={styles.list}>
              <li>Custodia compartida o custodia exclusiva.</li>
              <li>Régimen de visitas entre padres e hijos.</li>
              <li>Horarios y días de convivencia.</li>
              <li>Vacaciones, fechas especiales y celebraciones.</li>
              <li>Responsabilidades sobre educación y salud.</li>
              <li>Acuerdos sobre transporte y entrega del menor.</li>
              <li>Comunicación entre padres e hijos.</li>
              <li>Normas de convivencia y seguimiento.</li>
              <li>Distribución de gastos relacionados con el menor.</li>
              <li>Modificaciones futuras según necesidades familiares.</li>
            </ul>

            <p className={styles.text}>
              Un acuerdo claro y detallado ayuda a evitar discusiones
              posteriores y facilita el cumplimiento de las obligaciones de cada
              padre.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de conciliar custodia y régimen de visitas
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Protege al menor</h3>
                <p className={styles.cardText}>
                  Prioriza la estabilidad emocional, familiar y el bienestar del
                  niño o adolescente.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita procesos judiciales</h3>
                <p className={styles.cardText}>
                  Reduce conflictos legales largos, costosos y emocionalmente
                  desgastantes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos más rápidos</h3>
                <p className={styles.cardText}>
                  Permite soluciones en menor tiempo frente a un proceso
                  judicial de familia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Validez legal</h3>
                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos jurídicos y puede
                  exigirse legalmente.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Menor conflicto entre padres
                </h3>
                <p className={styles.cardText}>
                  Facilita el diálogo y disminuye tensiones familiares.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos personalizados</h3>
                <p className={styles.cardText}>
                  Permite construir soluciones adaptadas a las necesidades de
                  cada familia.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar un proceso judicial de custodia en Colombia?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales de familia pueden extenderse durante
              meses, generar confrontaciones constantes entre los padres y
              afectar emocionalmente a los hijos menores de edad.
            </p>

            <p className={styles.text}>
              Además del desgaste emocional, estos procesos suelen generar
              incertidumbre sobre horarios, convivencia, responsabilidades y
              decisiones relacionadas con el bienestar del menor.
            </p>

            <p className={styles.text}>
              La conciliación permite tomar decisiones de manera conjunta,
              organizada y menos conflictiva, priorizando siempre el interés del
              niño y promoviendo relaciones familiares más estables.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación de custodia y visitas en Colombia?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la solicitud de conciliación ante un centro
              autorizado en Colombia. Posteriormente, se cita a ambos padres a
              una audiencia donde pueden dialogar y construir acuerdos con ayuda
              de un conciliador.
            </p>

            <p className={styles.text}>
              Durante la audiencia se pueden presentar propuestas relacionadas
              con custodia, visitas, horarios, vacaciones, educación,
              comunicación y demás aspectos relacionados con el menor.
            </p>

            <p className={styles.text}>
              Si las partes llegan a un acuerdo, este queda consignado en un
              acta de conciliación con plena validez legal y obligatorio
              cumplimiento en Colombia.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Recomendaciones antes de asistir a una conciliación de custodia
            </h2>

            <p className={styles.text}>
              Prepararse adecuadamente antes de la audiencia puede facilitar un
              mejor acuerdo y reducir futuros conflictos familiares.
            </p>

            <ul className={styles.list}>
              <li>Definir horarios realistas para visitas y convivencia.</li>
              <li>Priorizar siempre el bienestar emocional del menor.</li>
              <li>Evitar discusiones personales durante la audiencia.</li>
              <li>
                Llevar documentos relacionados con educación o salud si son
                necesarios.
              </li>
              <li>
                Tener claridad sobre responsabilidades económicas y familiares.
              </li>
              <li>
                Proponer acuerdos claros, organizados y fáciles de cumplir.
              </li>
            </ul>

            <p className={styles.text}>
              Una conciliación bien estructurada ayuda a generar estabilidad,
              claridad y mejores relaciones familiares a largo plazo.
            </p>
          </div>

          {/* FAQ NUEVO */}
          <div className={styles.faqSection}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre custodia y régimen de visitas
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación de custodia tiene validez legal en Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene plena validez jurídica y
                  puede exigirse legalmente en caso de incumplimiento por alguna
                  de las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede modificar un acuerdo de visitas o custodia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Cuando cambian las necesidades del menor o las condiciones
                  familiares, los padres pueden realizar una nueva conciliación
                  para ajustar los acuerdos existentes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si uno de los padres incumple el acuerdo?
                </h3>

                <p className={styles.faqAnswer}>
                  El acuerdo puede ser exigido judicialmente debido a que el
                  acta de conciliación tiene efectos legales obligatorios en
                  Colombia.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Es posible acordar custodia compartida mediante conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Los padres pueden establecer acuerdos de custodia
                  compartida, horarios y responsabilidades siempre que se
                  priorice el bienestar y estabilidad del menor.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación evita acudir a un juez de familia?
                </h3>

                <p className={styles.faqAnswer}>
                  En muchos casos sí. Cuando ambas partes logran acuerdos claros
                  y voluntarios, la conciliación permite evitar procesos
                  judiciales largos y desgastantes.
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
