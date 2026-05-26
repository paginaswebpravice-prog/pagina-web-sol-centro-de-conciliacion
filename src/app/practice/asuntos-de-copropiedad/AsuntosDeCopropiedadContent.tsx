"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosCopropiedadContent() {
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
            CONCILIACIÓN EN PROPIEDAD HORIZONTAL Y COPROPIEDAD EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación en copropiedad en Colombia: resuelva conflictos
            vecinales sin demanda
          </h1>

          <p className={styles.description}>
            La conciliación en asuntos de copropiedad permite resolver
            conflictos entre vecinos, administradores y copropietarios en
            conjuntos residenciales, edificios y condominios de forma rápida,
            legal y efectiva en Bogotá y Colombia, evitando procesos judiciales
            largos, costosos y desgastantes.
          </p>

          <p className={styles.description}>
            Este mecanismo facilita acuerdos relacionados con convivencia,
            cuotas de administración, reglamentos de propiedad horizontal y uso
            de zonas comunes, ayudando a mantener un ambiente más tranquilo y
            organizado dentro de la comunidad.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación en propiedad horizontal y cómo funciona?
            </h2>

            <p className={styles.text}>
              La conciliación en propiedad horizontal es un mecanismo legal que
              permite resolver conflictos dentro de conjuntos residenciales,
              edificios y condominios sin necesidad de acudir directamente a un
              proceso judicial.
            </p>

            <p className={styles.text}>
              En Colombia, este procedimiento tiene plena validez jurídica y es
              utilizado para solucionar conflictos entre vecinos,
              copropietarios, administradores y consejos de administración con
              la ayuda de un conciliador autorizado.
            </p>

            <p className={styles.text}>
              Durante la audiencia, las partes tienen la oportunidad de exponer
              su situación, presentar documentos o pruebas y construir acuerdos
              claros que permitan mejorar la convivencia y solucionar el
              conflicto de forma práctica y legal.
            </p>

            <p className={styles.text}>
              En muchos casos, una conciliación bien manejada evita que los
              problemas vecinales escalen a disputas más complejas que afecten
              la tranquilidad de toda la comunidad.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conflictos de copropiedad que se pueden conciliar en Colombia
            </h2>

            <p className={styles.text}>
              Los conflictos en propiedad horizontal son frecuentes y pueden
              surgir por incumplimientos económicos, diferencias de convivencia
              o desacuerdos frente al reglamento interno del conjunto.
            </p>

            <p className={styles.text}>
              La conciliación permite abordar este tipo de situaciones mediante
              acuerdos negociados y soluciones que beneficien tanto a las partes
              involucradas como a la comunidad en general.
            </p>

            <ul className={styles.list}>
              <li>Cuotas de administración en mora.</li>
              <li>Uso indebido de zonas comunes.</li>
              <li>Conflictos entre vecinos por ruido o convivencia.</li>
              <li>Problemas con mascotas dentro del conjunto.</li>
              <li>Incumplimiento del reglamento de propiedad horizontal.</li>
              <li>Disputas con la administración del conjunto.</li>
              <li>Decisiones de asamblea de copropietarios.</li>
              <li>Parqueaderos y uso de espacios comunes.</li>
              <li>Daños a bienes comunes o privados.</li>
              <li>Problemas relacionados con remodelaciones o adecuaciones.</li>
            </ul>

            <p className={styles.text}>
              Cada conflicto requiere un manejo diferente, por lo que contar con
              orientación adecuada puede ayudar a lograr acuerdos más claros y
              efectivos.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación en propiedad horizontal
            </h2>

            <p className={styles.text}>
              Resolver conflictos mediante conciliación ofrece ventajas
              importantes frente a los procesos judiciales tradicionales,
              especialmente en temas donde la convivencia diaria entre las
              partes continúa después del conflicto.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita demandas judiciales</h3>

                <p className={styles.cardText}>
                  Permite solucionar conflictos sin acudir a procesos judiciales
                  prolongados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Mejora la convivencia</h3>

                <p className={styles.cardText}>
                  Reduce tensiones entre vecinos, administración y
                  copropietarios.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones rápidas</h3>

                <p className={styles.cardText}>
                  Facilita acuerdos en menor tiempo frente a un litigio
                  tradicional.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>

                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos jurídicos en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor costo legal</h3>

                <p className={styles.cardText}>
                  Evita gastos elevados relacionados con procesos judiciales y
                  abogados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Proceso confidencial</h3>

                <p className={styles.cardText}>
                  Protege la privacidad de las partes y evita exposición pública
                  del conflicto.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda en propiedad horizontal?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales relacionados con propiedad horizontal
              pueden extenderse durante largos periodos y generar un desgaste
              constante entre vecinos y administraciones. Además de los costos
              legales, este tipo de conflictos suele afectar directamente la
              convivencia y el ambiente dentro de la comunidad.
            </p>

            <p className={styles.text}>
              La conciliación permite encontrar soluciones más rápidas y
              equilibradas, enfocándose en acuerdos prácticos que ayuden a
              restablecer la convivencia y prevenir nuevos conflictos.
            </p>

            <p className={styles.text}>
              En muchos casos, resolver el problema mediante diálogo evita
              tensiones innecesarias y facilita que las partes continúen
              compartiendo espacios comunes de manera más organizada y
              respetuosa.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación en copropiedad en Colombia?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la presentación de una solicitud ante un
              centro de conciliación autorizado en Colombia. Posteriormente, se
              cita a las partes a una audiencia donde podrán exponer el
              conflicto y presentar propuestas de solución.
            </p>

            <p className={styles.text}>
              Durante la audiencia, el conciliador facilita el diálogo y ayuda a
              construir acuerdos claros, verificables y ajustados a las normas
              de propiedad horizontal y convivencia.
            </p>

            <p className={styles.text}>
              Si las partes llegan a un acuerdo, este queda consignado en un
              acta con validez legal y obligatorio cumplimiento. En caso de no
              lograrse una solución, las partes conservan la posibilidad de
              acudir a otras vías legales.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos útiles para una conciliación de copropiedad
            </h2>

            <p className={styles.text}>
              Contar con documentos organizados puede facilitar el desarrollo de
              la audiencia y ayudar a demostrar la situación que originó el
              conflicto.
            </p>

            <ul className={styles.list}>
              <li>Reglamento de propiedad horizontal.</li>
              <li>Actas de asamblea o reuniones.</li>
              <li>Comunicaciones de administración.</li>
              <li>Recibos o estados de cuenta.</li>
              <li>Fotografías o videos relacionados con el conflicto.</li>
              <li>Quejas o requerimientos previos.</li>
              <li>Chats, correos electrónicos o mensajes.</li>
              <li>Soportes de pagos o compromisos adquiridos.</li>
            </ul>

            <p className={styles.text}>
              Una adecuada preparación documental puede ayudar a que la
              conciliación sea más clara, organizada y efectiva para todas las
              partes involucradas.
            </p>
          </div>

          {/* BLOQUE 7 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Asesoría para conciliaciones de propiedad horizontal en Bogotá y
              Colombia
            </h2>

            <p className={styles.text}>
              Recibir orientación antes de una audiencia de conciliación puede
              ayudarte a entender mejor tus derechos y obligaciones dentro de la
              copropiedad, así como preparar estrategias adecuadas para resolver
              el conflicto.
            </p>

            <p className={styles.text}>
              La asesoría también permite revisar reglamentos, actas,
              obligaciones económicas y posibles alternativas de solución para
              construir acuerdos más claros y sostenibles.
            </p>

            <p className={styles.text}>
              En Bogotá y diferentes ciudades de Colombia, muchas disputas entre
              vecinos y administraciones logran solucionarse exitosamente cuando
              las partes llegan preparadas y con disposición real para negociar.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
