"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosVecinalesContent() {
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
            CONCILIACIÓN Y CONFLICTOS VECINALES EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación entre vecinos en Colombia: soluciones legales para
            conflictos de convivencia
          </h1>

          <p className={styles.description}>
            La conciliación en asuntos vecinales en Colombia permite resolver
            conflictos de convivencia entre vecinos de manera rápida, legal y
            efectiva, evitando procesos judiciales largos, costosos y
            desgastantes. En Bogotá y diferentes ciudades de Colombia, este
            mecanismo es utilizado para solucionar problemas relacionados con
            ruido, zonas comunes, parqueaderos, límites de propiedad y
            convivencia dentro de conjuntos residenciales o barrios.
          </p>

          <p className={styles.description}>
            A través de la conciliación, las partes pueden dialogar con la ayuda
            de un conciliador autorizado y construir acuerdos claros que
            permitan recuperar la tranquilidad, mejorar la convivencia y evitar
            que el conflicto continúe escalando.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué son los conflictos vecinales y cómo resolverlos en Colombia?
            </h2>

            <p className={styles.text}>
              Los conflictos vecinales son problemas que surgen entre vecinos,
              residentes, copropietarios o administraciones debido a situaciones
              que afectan la convivencia, la tranquilidad o el uso adecuado de
              espacios comunes y privados.
            </p>

            <p className={styles.text}>
              En Colombia, muchos de estos conflictos pueden resolverse mediante
              conciliación antes de acudir a una demanda judicial. Este proceso
              permite que las partes expongan sus diferencias, presenten
              propuestas y construyan acuerdos prácticos con respaldo legal.
            </p>

            <p className={styles.text}>
              La conciliación vecinal busca evitar confrontaciones mayores y
              facilitar soluciones rápidas que permitan conservar un ambiente de
              respeto y convivencia dentro de edificios, conjuntos residenciales
              y comunidades.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conflictos entre vecinos que se pueden conciliar en Colombia
            </h2>

            <p className={styles.text}>
              Muchos conflictos vecinales pueden solucionarse mediante diálogo y
              acuerdos formales sin necesidad de acudir a procesos judiciales.
            </p>

            <ul className={styles.list}>
              <li>Ruido excesivo o fiestas frecuentes.</li>
              <li>Uso indebido de zonas comunes.</li>
              <li>Problemas de convivencia en conjuntos residenciales.</li>
              <li>Conflictos por mascotas.</li>
              <li>Disputas por parqueaderos o depósitos.</li>
              <li>Mal manejo de basuras o espacios compartidos.</li>
              <li>Límites de propiedad o invasión de espacios.</li>
              <li>Filtraciones, humedades o daños entre inmuebles.</li>
              <li>Incumplimiento de normas de convivencia.</li>
              <li>Conflictos entre vecinos y administración.</li>
              <li>Uso inadecuado de áreas sociales.</li>
              <li>
                Problemas derivados del reglamento de propiedad horizontal.
              </li>
            </ul>

            <p className={styles.text}>
              En muchos casos, una conciliación bien manejada permite resolver
              el conflicto en una sola audiencia y evitar que la situación
              continúe deteriorando la convivencia.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación para conflictos vecinales
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita demandas judiciales</h3>

                <p className={styles.cardText}>
                  Permite solucionar conflictos sin acudir a procesos judiciales
                  largos y desgastantes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Mejora la convivencia</h3>

                <p className={styles.cardText}>
                  Facilita acuerdos que ayudan a restablecer relaciones entre
                  vecinos y comunidades.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones rápidas</h3>

                <p className={styles.cardText}>
                  Los acuerdos suelen lograrse en mucho menos tiempo que un
                  proceso judicial tradicional.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor costo legal</h3>

                <p className={styles.cardText}>
                  Reduce gastos relacionados con abogados, procesos judiciales y
                  trámites prolongados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>

                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos jurídicos y puede
                  exigirse legalmente en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ambiente más tranquilo</h3>

                <p className={styles.cardText}>
                  Ayuda a recuperar la tranquilidad y mejorar la calidad de vida
                  dentro del conjunto o barrio.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda entre vecinos en Colombia?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales entre vecinos suelen aumentar las
              tensiones, afectar la convivencia diaria y prolongar el conflicto
              durante meses o incluso años. Además, pueden generar desgaste
              emocional, costos legales y problemas permanentes dentro de la
              comunidad.
            </p>

            <p className={styles.text}>
              La conciliación permite resolver los problemas mediante diálogo,
              negociación y acuerdos prácticos que beneficien a ambas partes sin
              deteriorar completamente las relaciones vecinales.
            </p>

            <p className={styles.text}>
              En conflictos de convivencia, mantener canales de comunicación y
              lograr soluciones razonables suele ser más efectivo que entrar en
              confrontaciones judiciales prolongadas.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué documentos o pruebas pueden servir en una conciliación
              vecinal?
            </h2>

            <p className={styles.text}>
              Aunque la conciliación busca principalmente el diálogo entre las
              partes, contar con soportes claros puede ayudar a demostrar el
              conflicto y facilitar acuerdos más precisos.
            </p>

            <ul className={styles.list}>
              <li>Fotografías o videos.</li>
              <li>Chats o correos electrónicos.</li>
              <li>Reportes de administración.</li>
              <li>Actas de convivencia.</li>
              <li>Reglamento de propiedad horizontal.</li>
              <li>Quejas previas o llamados de atención.</li>
              <li>Soportes de daños materiales.</li>
              <li>Testimonios o comunicaciones de vecinos.</li>
            </ul>

            <p className={styles.text}>
              La organización de la evidencia ayuda al conciliador a entender
              mejor la situación y orientar una solución más clara y efectiva.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación vecinal paso a paso?
            </h2>

            <p className={styles.text}>
              El proceso inicia con una solicitud ante un centro de conciliación
              autorizado en Colombia. Posteriormente, las partes son citadas a
              una audiencia donde podrán explicar el conflicto y buscar un
              acuerdo con la ayuda de un conciliador.
            </p>

            <p className={styles.text}>
              Durante la audiencia se analizan las situaciones de convivencia,
              las posibles soluciones y las propuestas de ambas partes. El
              objetivo es construir acuerdos claros, razonables y de obligatorio
              cumplimiento.
            </p>

            <p className={styles.text}>
              Si las partes llegan a un acuerdo, este queda consignado en un
              acta de conciliación con plena validez legal en Colombia.
            </p>
          </div>

          {/* BLOQUE 7 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Asesoría para conciliaciones vecinales en Bogotá y Colombia
            </h2>

            <p className={styles.text}>
              Recibir orientación antes de una conciliación vecinal puede ayudar
              a organizar pruebas, preparar propuestas y evitar acuerdos poco
              claros o difíciles de cumplir.
            </p>

            <p className={styles.text}>
              La asesoría en conciliación permite comprender mejor los derechos,
              obligaciones y posibles soluciones dentro de conflictos de
              convivencia, propiedad horizontal y relaciones vecinales en
              Colombia.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
