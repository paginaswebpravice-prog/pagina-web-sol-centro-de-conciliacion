"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AlimentosMenoresContent() {
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
            CUOTA ALIMENTARIA Y CONCILIACIÓN EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación de cuota alimentaria en Colombia: abogados para
            alimentos de menores
          </h1>

          <p className={styles.description}>
            La conciliación de cuota alimentaria en Colombia permite establecer,
            modificar o regular legalmente las obligaciones económicas de los
            padres frente a sus hijos menores de edad sin necesidad de iniciar
            inmediatamente un proceso judicial. Este mecanismo facilita acuerdos
            rápidos, legales y ejecutables, priorizando siempre la protección y
            el bienestar del menor.
          </p>

          <p className={styles.description}>
            En Bogotá y diferentes ciudades de Colombia, miles de familias
            utilizan la conciliación para resolver conflictos relacionados con
            alimentos, gastos escolares, salud, incumplimientos de cuota,
            modificación de obligaciones y acuerdos de manutención, evitando
            largos procesos judiciales y reduciendo tensiones familiares.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué son los alimentos para menores y qué cubren en Colombia?
            </h2>

            <p className={styles.text}>
              Los alimentos para menores son todas las obligaciones económicas
              que tienen los padres o responsables legales para garantizar el
              adecuado desarrollo, cuidado y bienestar de sus hijos menores de
              edad. En Colombia, esta obligación tiene carácter legal y busca
              asegurar condiciones dignas de vida para el menor.
            </p>

            <p className={styles.text}>
              La obligación alimentaria no se limita únicamente a la comida.
              También incluye diferentes necesidades fundamentales relacionadas
              con salud, educación, vivienda, recreación y desarrollo integral
              del niño, niña o adolescente.
            </p>

            <p className={styles.text}>
              En muchos casos, la conciliación permite organizar de manera clara
              las responsabilidades económicas de cada padre, evitando futuros
              conflictos y brindando mayor estabilidad al menor.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué incluye la cuota alimentaria de un menor?
            </h2>

            <p className={styles.text}>
              La cuota alimentaria puede incluir distintos gastos dependiendo de
              las necesidades del menor y de la capacidad económica de los
              padres. Cada caso puede variar, pero normalmente contempla
              aspectos esenciales para garantizar una adecuada calidad de vida.
            </p>

            <ul className={styles.list}>
              <li>Alimentación diaria del menor.</li>
              <li>Educación y matrícula escolar.</li>
              <li>Útiles, transporte y gastos académicos.</li>
              <li>Servicios médicos, salud y medicamentos.</li>
              <li>Vestuario y necesidades básicas.</li>
              <li>Vivienda y sostenimiento general.</li>
              <li>Recreación y bienestar integral.</li>
              <li>Actividades extracurriculares cuando aplique.</li>
            </ul>

            <p className={styles.text}>
              El valor de la cuota alimentaria normalmente se fija teniendo en
              cuenta las necesidades del menor y la capacidad económica de quien
              debe cumplir la obligación.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación de cuota alimentaria en Colombia
            </h2>

            <p className={styles.text}>
              La conciliación familiar permite encontrar soluciones más rápidas,
              menos desgastantes y legalmente seguras para ambas partes,
              priorizando siempre la protección de los derechos del menor.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Fijar una cuota legal</h3>

                <p className={styles.cardText}>
                  Permite establecer formalmente el valor, fechas y forma de
                  pago de la cuota alimentaria.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Modificar acuerdos previos</h3>

                <p className={styles.cardText}>
                  Facilita ajustar la cuota según cambios económicos o nuevas
                  necesidades del menor.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evitar procesos judiciales</h3>

                <p className={styles.cardText}>
                  Ayuda a resolver conflictos familiares sin acudir
                  inmediatamente a demandas judiciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Protección legal del menor</h3>

                <p className={styles.cardText}>
                  Garantiza mecanismos legales orientados al bienestar y
                  estabilidad del niño o adolescente.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acta con validez jurídica</h3>

                <p className={styles.cardText}>
                  El acuerdo firmado puede exigirse legalmente en caso de
                  incumplimiento.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Solución rápida y práctica</h3>

                <p className={styles.cardText}>
                  Reduce tiempos, desgaste emocional y conflictos prolongados
                  entre las partes.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué sucede si no pagan la cuota alimentaria?
            </h2>

            <p className={styles.text}>
              El incumplimiento de la cuota alimentaria puede generar
              importantes consecuencias legales en Colombia. Cuando una persona
              incumple las obligaciones pactadas, la otra parte puede acudir a
              mecanismos judiciales para exigir el pago y proteger los derechos
              del menor.
            </p>

            <p className={styles.text}>
              Dependiendo del caso, pueden iniciarse procesos ejecutivos,
              embargos, reportes de incumplimiento e incluso investigaciones
              relacionadas con inasistencia alimentaria.
            </p>

            <p className={styles.text}>
              Precisamente por eso, la conciliación funciona como una
              herramienta preventiva muy útil, ya que permite establecer
              obligaciones claras, fechas concretas y acuerdos realistas que
              faciliten el cumplimiento.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo solicitar una conciliación de alimentos en Colombia?
            </h2>

            <p className={styles.text}>
              El proceso normalmente inicia con la presentación de una solicitud
              ante un centro de conciliación autorizado. Allí se exponen los
              hechos, las necesidades del menor y las pretensiones relacionadas
              con la cuota alimentaria.
            </p>

            <p className={styles.text}>
              Posteriormente, ambas partes son citadas a una audiencia donde se
              busca construir un acuerdo con ayuda de un conciliador. Durante la
              audiencia pueden discutirse valores, fechas de pago, gastos
              adicionales, cuotas extraordinarias y otros aspectos relacionados
              con el bienestar del menor.
            </p>

            <p className={styles.text}>
              Si existe acuerdo, este queda consignado en un acta de
              conciliación con efectos legales y cumplimiento obligatorio en
              Colombia.
            </p>

            <ul className={styles.list}>
              <li>Presentación de la solicitud de conciliación.</li>
              <li>Citación de las partes involucradas.</li>
              <li>Audiencia de conciliación.</li>
              <li>Negociación de la cuota alimentaria.</li>
              <li>Firma del acta con validez legal.</li>
            </ul>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos importantes para una conciliación de alimentos
            </h2>

            <p className={styles.text}>
              Llevar documentación organizada facilita que el conciliador
              comprenda mejor la situación económica de las partes y ayuda a
              construir acuerdos más claros y sostenibles.
            </p>

            <ul className={styles.list}>
              <li>Documento de identidad de las partes.</li>
              <li>Registro civil del menor.</li>
              <li>Certificados de estudio o matrículas.</li>
              <li>Soportes médicos o gastos de salud.</li>
              <li>Pruebas de ingresos y gastos.</li>
              <li>Comprobantes de pagos anteriores.</li>
              <li>Conversaciones o acuerdos previos.</li>
            </ul>

            <p className={styles.text}>
              Una adecuada preparación documental puede facilitar acuerdos más
              rápidos y disminuir discusiones innecesarias durante la audiencia.
            </p>
          </div>

          {/* BLOQUE 7 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Modificación de cuota alimentaria en Colombia
            </h2>

            <p className={styles.text}>
              La cuota alimentaria puede modificarse cuando cambian las
              circunstancias económicas de alguna de las partes o las
              necesidades del menor aumentan con el tiempo.
            </p>

            <p className={styles.text}>
              Por ejemplo, puede solicitarse una modificación cuando existen
              cambios significativos en ingresos, desempleo, nuevos gastos
              médicos, cambio de colegio o nuevas necesidades del menor.
            </p>

            <p className={styles.text}>
              La conciliación permite renegociar estos aspectos de manera legal
              y organizada sin necesidad de iniciar inmediatamente un proceso
              judicial complejo.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
