"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function ConflictosDeArrendamientoContent() {
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
            CONCILIACIÓN Y CONFLICTOS DE ARRENDAMIENTO EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación en arrendamientos en Colombia: resuelva conflictos sin
            demanda judicial
          </h1>

          <p className={styles.description}>
            La conciliación en conflictos de arrendamiento permite solucionar
            problemas entre arrendadores y arrendatarios de forma rápida, legal
            y efectiva en Bogotá y Colombia, evitando procesos judiciales largos
            como restitución de inmueble, demandas civiles o cobros ejecutivos.
            Este mecanismo facilita acuerdos claros sobre pagos, entrega del
            inmueble, reparación de daños y cumplimiento contractual con plena
            validez jurídica.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es un conflicto de arrendamiento y cómo resolverlo en
              Colombia?
            </h2>

            <p className={styles.text}>
              Un conflicto de arrendamiento surge cuando existe un desacuerdo
              entre arrendador y arrendatario relacionado con el contrato de
              arrendamiento, el pago del canon, la entrega del inmueble, el uso
              adecuado de la propiedad o las obligaciones pactadas entre las
              partes.
            </p>

            <p className={styles.text}>
              En Colombia, muchos de estos conflictos pueden resolverse mediante
              conciliación antes de acudir a procesos judiciales. La
              conciliación permite que las partes negocien soluciones prácticas
              con ayuda de un conciliador autorizado, evitando desgaste
              económico, demoras judiciales y mayores tensiones legales.
            </p>

            <p className={styles.text}>
              Además de ser un mecanismo rápido, la conciliación ayuda a
              conservar relaciones contractuales y facilita acuerdos de pago,
              entrega voluntaria del inmueble o reestructuración de obligaciones
              pendientes.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conflictos de arrendamiento que se pueden conciliar en Colombia
            </h2>

            <p className={styles.text}>
              La conciliación aplica para múltiples conflictos derivados de
              contratos de arrendamiento de vivienda, locales comerciales,
              oficinas, bodegas y otros inmuebles urbanos o comerciales.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento del pago del canon de arrendamiento.</li>
              <li>Deudas por servicios públicos o administración.</li>
              <li>Restitución o entrega del inmueble arrendado.</li>
              <li>Terminación anticipada del contrato.</li>
              <li>Daños al inmueble o incumplimiento de reparaciones.</li>
              <li>Conflictos por cláusulas del contrato.</li>
              <li>Incumplimiento de acuerdos de pago.</li>
              <li>Problemas relacionados con depósitos o garantías.</li>
              <li>Uso indebido del inmueble arrendado.</li>
              <li>Disputas por aumentos del canon de arrendamiento.</li>
            </ul>

            <p className={styles.text}>
              En muchos casos, una conciliación bien estructurada permite evitar
              procesos de restitución de inmueble y facilita acuerdos que
              benefician a ambas partes.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación en conflictos de arrendamiento
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita procesos judiciales</h3>
                <p className={styles.cardText}>
                  Reduce la necesidad de acudir a demandas de restitución o
                  procesos civiles largos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Recuperación rápida de dinero
                </h3>
                <p className={styles.cardText}>
                  Facilita acuerdos de pago claros para recuperar cánones o
                  deudas pendientes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>
                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos jurídicos y puede
                  exigirse legalmente.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor costo legal</h3>
                <p className={styles.cardText}>
                  Disminuye gastos asociados a abogados y procesos judiciales
                  prolongados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones más rápidas</h3>
                <p className={styles.cardText}>
                  Permite resolver conflictos en semanas en lugar de meses o
                  años.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Mayor claridad en obligaciones
                </h3>
                <p className={styles.cardText}>
                  Define fechas, pagos, entregas y compromisos de manera clara y
                  verificable.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda por arrendamiento en Colombia?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales por arrendamiento pueden tardar largos
              periodos y generar altos costos económicos tanto para el
              arrendador como para el arrendatario. Además del tiempo, estos
              procesos suelen generar desgaste emocional, dificultades para
              recuperar el inmueble y complicaciones financieras.
            </p>

            <p className={styles.text}>
              En algunos casos, mientras avanza el proceso judicial, continúan
              acumulándose cánones, servicios públicos, cuotas de administración
              y otros gastos relacionados con el inmueble.
            </p>

            <p className={styles.text}>
              La conciliación permite construir soluciones prácticas y rápidas,
              enfocadas en acuerdos de pago, entrega voluntaria del inmueble,
              refinanciación de obligaciones o terminación organizada del
              contrato de arrendamiento.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación por arrendamiento en Colombia?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la presentación de una solicitud ante un
              centro de conciliación autorizado en Colombia. Allí se identifican
              las partes, el conflicto y las pretensiones relacionadas con el
              contrato de arrendamiento.
            </p>

            <p className={styles.text}>
              Posteriormente, se programa una audiencia de conciliación donde
              arrendador y arrendatario pueden presentar documentos,
              comprobantes de pago, contratos, mensajes, estados de cuenta y
              demás soportes relacionados con el conflicto.
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
              Recomendaciones antes de asistir a una conciliación de
              arrendamiento
            </h2>

            <p className={styles.text}>
              Prepararse correctamente antes de la audiencia puede facilitar un
              mejor acuerdo y evitar nuevos conflictos posteriores.
            </p>

            <ul className={styles.list}>
              <li>Llevar copia del contrato de arrendamiento.</li>
              <li>Organizar recibos, pagos y comprobantes pendientes.</li>
              <li>Definir claramente qué solución se busca.</li>
              <li>Revisar cláusulas importantes del contrato.</li>
              <li>Llevar soportes relacionados con daños o incumplimientos.</li>
              <li>Verificar fechas exactas de pagos, entrega o terminación.</li>
            </ul>

            <p className={styles.text}>
              Un acuerdo claro y bien redactado puede evitar futuros procesos
              judiciales y facilitar el cumplimiento de las obligaciones por
              ambas partes.
            </p>
          </div>

          {/* FAQ */}
          <div className={`${styles.block} ${styles.faqSection}`}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre conciliación en arrendamientos
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación sirve para recuperar cánones atrasados?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. En Colombia es común utilizar conciliación para establecer
                  acuerdos de pago relacionados con cánones vencidos, servicios
                  públicos, administración y demás obligaciones pendientes del
                  contrato de arrendamiento.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación evita un proceso de restitución de inmueble?
                </h3>

                <p className={styles.faqAnswer}>
                  En muchos casos sí. La conciliación puede facilitar acuerdos
                  sobre fechas de entrega voluntaria, pagos pendientes o
                  terminación del contrato sin necesidad de acudir a un juez.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿El acta de conciliación tiene validez legal en Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene efectos jurídicos y puede
                  exigirse judicialmente en caso de incumplimiento por alguna de
                  las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede hacer conciliación en contratos comerciales y de
                  vivienda?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. La conciliación aplica tanto para arrendamientos de
                  vivienda como para locales comerciales, oficinas, bodegas y
                  otros inmuebles urbanos o comerciales.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una de las partes incumple el acuerdo?
                </h3>

                <p className={styles.faqAnswer}>
                  Si alguna de las partes incumple el acta de conciliación, la
                  otra puede acudir a mecanismos legales para exigir el
                  cumplimiento de las obligaciones pactadas en el acuerdo.
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
