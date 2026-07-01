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
            Conciliación de cuota alimentaria en Colombia: cómo fijar, modificar
            o reclamar alimentos para menores
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
              ¿Qué es la cuota alimentaria en Colombia y cuándo debe pagarse?
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
              ¿Qué cubre la cuota alimentaria de un hijo menor de edad?
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
              ¿Por qué hacer una conciliación de cuota alimentaria antes de
              presentar una demanda?
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
              ¿Qué pasa si el padre o la madre incumple el pago de la cuota
              alimentaria?
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
              ¿Cómo iniciar una conciliación para fijar o modificar la cuota
              alimentaria?
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
              ¿Cuándo puede aumentarse o disminuirse la cuota alimentaria?
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

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo se calcula la cuota alimentaria en Colombia?
            </h2>

            <p className={styles.text}>
              Una de las preguntas más frecuentes es cómo se determina el valor
              de la cuota alimentaria. En Colombia no existe un porcentaje fijo
              establecido por la ley que aplique para todos los casos. El monto
              se analiza de manera individual teniendo en cuenta las necesidades
              del menor y la capacidad económica de cada uno de los padres.
            </p>

            <p className={styles.text}>
              Durante una conciliación, las partes pueden presentar información
              sobre sus ingresos, gastos y obligaciones económicas para
              construir un acuerdo justo, equilibrado y acorde con la realidad
              familiar. El conciliador orienta el diálogo para que la cuota
              cubra adecuadamente las necesidades del hijo sin generar cargas
              desproporcionadas para quien debe realizar el pago.
            </p>

            <p className={styles.text}>
              Entre los aspectos que normalmente se analizan se encuentran la
              edad del menor, los gastos de alimentación, educación, salud,
              vivienda, transporte, recreación y cualquier otra necesidad
              indispensable para su desarrollo integral.
            </p>

            <ul className={styles.list}>
              <li>Ingresos de ambos padres.</li>
              <li>Necesidades actuales del menor.</li>
              <li>Gastos de educación y transporte.</li>
              <li>Costos médicos y tratamientos.</li>
              <li>Capacidad económica de cada responsable.</li>
              <li>Gastos extraordinarios que puedan surgir.</li>
            </ul>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Hasta qué edad debe pagarse la cuota alimentaria en Colombia?
            </h2>

            <p className={styles.text}>
              La obligación alimentaria normalmente se mantiene mientras el hijo
              menor de edad requiera el apoyo económico de sus padres. Sin
              embargo, cumplir la mayoría de edad no implica automáticamente que
              desaparezca esta obligación, ya que cada caso debe analizarse
              según las circunstancias particulares.
            </p>

            <p className={styles.text}>
              Cuando el hijo continúa realizando estudios, depende
              económicamente de sus padres o presenta condiciones especiales de
              salud o discapacidad, la obligación alimentaria puede mantenerse
              por un tiempo adicional conforme a la legislación colombiana y a
              las decisiones adoptadas por las autoridades competentes.
            </p>

            <p className={styles.text}>
              Si existen dudas sobre la continuidad de la cuota alimentaria, es
              posible acudir a un proceso de conciliación para revisar las
              nuevas circunstancias familiares y establecer un acuerdo
              actualizado.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Casos en los que puede aumentarse o disminuirse la cuota
              alimentaria
            </h2>

            <p className={styles.text}>
              La cuota alimentaria no es definitiva. Cuando cambian las
              condiciones económicas de alguno de los padres o aumentan las
              necesidades del menor, es posible solicitar su modificación
              mediante conciliación o, si no existe acuerdo, por medio de un
              proceso judicial.
            </p>

            <p className={styles.text}>
              La finalidad de estos ajustes es garantizar que el menor continúe
              recibiendo el apoyo necesario para su desarrollo, mientras se
              mantiene un equilibrio frente a la capacidad económica de quien
              debe cumplir la obligación.
            </p>

            <ul className={styles.list}>
              <li>Disminución o pérdida del empleo.</li>
              <li>Aumento de ingresos de alguno de los padres.</li>
              <li>Nuevos gastos médicos del menor.</li>
              <li>Cambio de institución educativa.</li>
              <li>Incremento del costo de vida.</li>
              <li>Necesidades especiales del menor.</li>
              <li>Nacimiento de nuevos hijos.</li>
            </ul>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué ocurre si no se logra un acuerdo durante la conciliación?
            </h2>

            <p className={styles.text}>
              Aunque la conciliación busca que las partes lleguen
              voluntariamente a un acuerdo, existen situaciones en las que no es
              posible alcanzar un consenso. En estos casos, el centro de
              conciliación deja constancia de que la audiencia fue realizada sin
              éxito.
            </p>

            <p className={styles.text}>
              Esta constancia puede servir para continuar con las acciones
              legales que correspondan, incluyendo la presentación de una
              demanda ante la autoridad competente para que sea un juez quien
              determine el valor de la cuota alimentaria o resuelva el conflicto
              familiar.
            </p>

            <p className={styles.text}>
              Intentar primero una conciliación sigue siendo una alternativa
              recomendable, ya que puede ahorrar tiempo, costos y evitar un
              proceso judicial más largo.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Errores frecuentes durante una conciliación de cuota alimentaria
            </h2>

            <p className={styles.text}>
              Prepararse adecuadamente para una audiencia de conciliación
              aumenta las posibilidades de alcanzar un acuerdo estable y
              beneficioso para ambas partes. Algunos errores pueden dificultar
              la negociación o generar futuros conflictos relacionados con el
              cumplimiento de la cuota alimentaria.
            </p>

            <ul className={styles.list}>
              <li>No llevar soportes de ingresos y gastos.</li>
              <li>Ocultar información económica relevante.</li>
              <li>No incluir gastos extraordinarios del menor.</li>
              <li>Establecer cuotas imposibles de cumplir.</li>
              <li>No definir fechas claras de pago.</li>
              <li>
                Omitir la forma en que se asumirán gastos médicos o educativos.
              </li>
              <li>
                No dejar claramente establecidos los compromisos de cada padre.
              </li>
            </ul>

            <p className={styles.text}>
              Contar con una adecuada preparación documental y con orientación
              jurídica facilita acuerdos más completos, disminuye el riesgo de
              incumplimientos y brinda mayor seguridad para proteger los
              derechos del menor.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿En qué situaciones es recomendable solicitar una conciliación de
              alimentos?
            </h2>

            <p className={styles.text}>
              La conciliación puede utilizarse en diferentes momentos de la
              relación familiar, no únicamente cuando existe un conflicto grave.
              Muchas familias la emplean como un mecanismo preventivo para
              establecer reglas claras sobre las obligaciones económicas
              relacionadas con los hijos menores de edad.
            </p>

            <p className={styles.text}>
              También es una alternativa útil cuando las circunstancias
              familiares cambian y resulta necesario actualizar acuerdos
              previamente establecidos, evitando procesos judiciales más largos
              y costosos.
            </p>

            <ul className={styles.list}>
              <li>Separación o divorcio de los padres.</li>
              <li>Primera fijación de la cuota alimentaria.</li>
              <li>Incumplimiento de acuerdos anteriores.</li>
              <li>Solicitud de aumento o disminución de la cuota.</li>
              <li>Cambios importantes en los ingresos familiares.</li>
              <li>Nuevos gastos escolares, médicos o universitarios.</li>
              <li>
                Necesidad de definir la distribución de gastos extraordinarios.
              </li>
              <li>Conflictos relacionados con el sostenimiento del menor.</li>
            </ul>

            <p className={styles.text}>
              Resolver estas situaciones mediante conciliación permite obtener
              acuerdos con efectos legales, favoreciendo el bienestar del menor
              y reduciendo el desgaste emocional que suele implicar un proceso
              judicial.
            </p>
          </div>

          {/* FAQ */}
          <div className={styles.faqSection}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre cuota alimentaria y conciliación
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Es obligatoria la conciliación antes de demandar alimentos?
                </h3>

                <p className={styles.faqAnswer}>
                  En muchos casos sí. La conciliación puede ser un requisito
                  previo antes de iniciar ciertos procesos judiciales
                  relacionados con cuota alimentaria en Colombia.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una de las partes no asiste a la audiencia?
                </h3>

                <p className={styles.faqAnswer}>
                  Si una de las partes no asiste sin justificación, la otra
                  persona puede utilizar la constancia emitida por el centro de
                  conciliación para continuar con acciones legales.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La cuota alimentaria puede incluir gastos escolares y de
                  salud?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. La cuota alimentaria puede cubrir educación, salud,
                  alimentación, vivienda, transporte y otros gastos necesarios
                  para el bienestar del menor.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede modificar una cuota alimentaria ya establecida?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Cuando cambian las condiciones económicas de alguna de las
                  partes o aumentan las necesidades del menor, es posible
                  solicitar una modificación mediante conciliación o proceso
                  judicial.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿El acta de conciliación tiene validez legal en Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene efectos legales y puede ser
                  exigida judicialmente en caso de incumplimiento de los
                  acuerdos pactados.
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
