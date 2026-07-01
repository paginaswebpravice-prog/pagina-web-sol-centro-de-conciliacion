"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosLaboralesContent() {
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
            CONCILIACIÓN LABORAL Y CONFLICTOS DE TRABAJO EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación laboral en Colombia: resuelva conflictos entre
            trabajadores y empleadores sin proceso judicial
          </h1>

          <p className={styles.description}>
            La conciliación laboral en Colombia es un mecanismo legal que
            permite resolver conflictos entre trabajadores y empleadores de
            forma rápida, segura y efectiva, evitando procesos judiciales largos
            y costosos. En Bogotá y diferentes ciudades de Colombia, miles de
            conflictos laborales relacionados con despidos, liquidaciones,
            salarios, prestaciones sociales y terminación de contratos pueden
            solucionarse mediante acuerdos con plena validez jurídica.
          </p>

          <p className={styles.description}>
            A través de la conciliación laboral, las partes pueden negociar
            acuerdos de pago, reconocimiento de derechos laborales y soluciones
            prácticas que reduzcan el desgaste emocional, financiero y jurídico
            que normalmente implica un proceso ante un juez laboral.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación laboral en Colombia y cuándo conviene
              utilizarla?
            </h2>

            <p className={styles.text}>
              La conciliación laboral es un mecanismo alternativo de resolución
              de conflictos mediante el cual empleadores y trabajadores buscan
              llegar a un acuerdo con la ayuda de un conciliador autorizado, sin
              necesidad de acudir inmediatamente a una demanda judicial.
            </p>

            <p className={styles.text}>
              En Colombia, este procedimiento tiene plena validez legal y puede
              realizarse antes, durante o incluso después de ciertos procesos
              judiciales laborales. El objetivo principal es encontrar
              soluciones equilibradas que permitan resolver el conflicto de
              manera más ágil y menos confrontativa.
            </p>

            <p className={styles.text}>
              Durante la audiencia, las partes pueden presentar documentos,
              soportes laborales, liquidaciones, contratos, comprobantes de pago
              y propuestas de acuerdo para intentar construir una solución
              satisfactoria para ambas partes.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué conflictos laborales pueden resolverse mediante conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación laboral aplica a múltiples conflictos derivados de
              relaciones de trabajo, contratos laborales y obligaciones entre
              trabajadores y empleadores.
            </p>

            <ul className={styles.list}>
              <li>Despido sin justa causa.</li>
              <li>Liquidación de contratos laborales.</li>
              <li>Salarios pendientes de pago.</li>
              <li>Prestaciones sociales adeudadas.</li>
              <li>Horas extras y recargos nocturnos.</li>
              <li>Indemnizaciones laborales.</li>
              <li>Vacaciones no pagadas.</li>
              <li>Incumplimiento de contratos de trabajo.</li>
              <li>Acuerdos de retiro laboral.</li>
              <li>Conflictos por terminación laboral.</li>
              <li>Reconocimiento de derechos laborales.</li>
              <li>Acuerdos de pago entre trabajador y empresa.</li>
            </ul>

            <p className={styles.text}>
              Muchos de estos conflictos pueden resolverse en una sola audiencia
              cuando las partes asisten con disposición de negociar y con la
              documentación laboral organizada correctamente.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación laboral frente a una demanda
              judicial
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Evita demandas laborales prolongadas
                </h3>

                <p className={styles.cardText}>
                  Permite solucionar conflictos sin iniciar procesos judiciales
                  que pueden tardar meses o incluso años.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos de pago rápidos</h3>

                <p className={styles.cardText}>
                  Facilita pagos, indemnizaciones y acuerdos económicos en menor
                  tiempo para el trabajador.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Reducción de costos legales
                </h3>

                <p className={styles.cardText}>
                  Disminuye gastos asociados a procesos judiciales, honorarios y
                  trámites prolongados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Acuerdos con validez jurídica
                </h3>

                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos legales y puede exigirse
                  judicialmente en caso de incumplimiento.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones más flexibles</h3>

                <p className={styles.cardText}>
                  Las partes pueden negociar plazos, cuotas, fechas y
                  condiciones adaptadas a sus necesidades.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor desgaste emocional</h3>

                <p className={styles.cardText}>
                  Reduce confrontaciones y permite cerrar conflictos laborales
                  de manera más tranquila y práctica.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos necesarios para una audiencia de conciliación laboral
            </h2>

            <p className={styles.text}>
              La preparación documental es clave dentro de cualquier
              conciliación laboral en Colombia. Tener soportes organizados ayuda
              a sustentar reclamaciones, verificar pagos y facilitar acuerdos
              claros durante la audiencia.
            </p>

            <ul className={styles.list}>
              <li>Contrato de trabajo.</li>
              <li>Desprendibles de nómina.</li>
              <li>Liquidaciones laborales.</li>
              <li>Certificaciones laborales.</li>
              <li>Correos electrónicos y chats.</li>
              <li>Comprobantes de pago.</li>
              <li>Cartas de despido o renuncia.</li>
              <li>Acuerdos previos entre las partes.</li>
              <li>Soportes de horas extras o recargos.</li>
            </ul>

            <p className={styles.text}>
              Llevar documentos claros y bien organizados permite que el
              conciliador comprenda mejor el conflicto y ayuda a construir
              acuerdos más precisos y seguros jurídicamente.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué intentar una conciliación antes de presentar una demanda
              laboral?
            </h2>

            <p className={styles.text}>
              Los procesos laborales pueden extenderse durante largos periodos y
              generar incertidumbre económica tanto para trabajadores como para
              empresas. Además, las demandas suelen implicar costos legales,
              tiempos de espera y desgaste emocional para ambas partes.
            </p>

            <p className={styles.text}>
              La conciliación laboral permite enfocarse en soluciones rápidas y
              prácticas, priorizando acuerdos claros sobre pagos, obligaciones y
              compromisos sin necesidad de acudir inmediatamente a un litigio
              judicial.
            </p>

            <p className={styles.text}>
              En muchos casos, una conciliación bien manejada permite preservar
              relaciones laborales, proteger la reputación empresarial y evitar
              conflictos mayores en el futuro.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo solicitar una conciliación laboral en Colombia paso a paso?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la presentación de una solicitud ante un
              centro de conciliación autorizado en Colombia. Posteriormente, se
              cita a las partes a una audiencia donde podrán exponer el
              conflicto y buscar un acuerdo con la intervención de un
              conciliador.
            </p>

            <p className={styles.text}>
              Durante la audiencia se revisan documentos, reclamaciones,
              liquidaciones, pagos pendientes y posibles propuestas de solución.
              Si las partes llegan a un acuerdo, este queda consignado en un
              acta de conciliación con plena validez jurídica.
            </p>

            <p className={styles.text}>
              En caso de no lograrse un acuerdo, las partes conservan la
              posibilidad de acudir a otras vías legales en Colombia.
            </p>
          </div>

          {/* BLOQUE 7 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Asesoría jurídica para conciliación laboral en Bogotá y toda
              Colombia
            </h2>

            <p className={styles.text}>
              Contar con orientación antes de una audiencia laboral puede marcar
              una gran diferencia durante la negociación. Una adecuada revisión
              de documentos, liquidaciones y propuestas ayuda a evitar errores y
              facilita acuerdos más claros y seguros.
            </p>

            <p className={styles.text}>
              La asesoría en conciliación laboral puede ayudarte a preparar tu
              caso, organizar evidencia, revisar acuerdos de pago y comprender
              los efectos legales del acta de conciliación en Colombia.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cuándo conviene solicitar una conciliación laboral en Colombia?
            </h2>

            <p className={styles.text}>
              La conciliación laboral es una excelente alternativa cuando un
              trabajador o un empleador desean resolver un conflicto de forma
              rápida y con plena seguridad jurídica, evitando un proceso
              judicial que puede extenderse durante meses o incluso años.
            </p>

            <p className={styles.text}>
              Este mecanismo resulta especialmente útil cuando ambas partes
              mantienen disposición para negociar y buscan llegar a un acuerdo
              sobre pagos, liquidaciones, indemnizaciones o cualquier otra
              obligación derivada de la relación laboral.
            </p>

            <ul className={styles.list}>
              <li>Despidos con o sin justa causa.</li>
              <li>Liquidaciones laborales pendientes.</li>
              <li>Pago de salarios atrasados.</li>
              <li>Horas extras y recargos.</li>
              <li>Prestaciones sociales.</li>
              <li>Vacaciones no disfrutadas o no pagadas.</li>
              <li>Indemnizaciones laborales.</li>
              <li>Terminación de contratos de trabajo.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué derechos laborales pueden negociarse mediante conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación laboral permite construir acuerdos sobre
              diferentes derechos y obligaciones derivados de la relación
              laboral, siempre que la ley permita su conciliación y las partes
              manifiesten libremente su voluntad de llegar a un acuerdo.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Salarios pendientes</h3>
                <p className={styles.cardText}>
                  Pago de salarios adeudados y diferencias salariales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Prestaciones sociales</h3>
                <p className={styles.cardText}>
                  Cesantías, intereses, primas y vacaciones.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Horas extras</h3>
                <p className={styles.cardText}>
                  Reconocimiento de recargos nocturnos, dominicales y festivos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Indemnizaciones</h3>
                <p className={styles.cardText}>
                  Acuerdos derivados de despidos o terminación del contrato.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué sucede si no se logra un acuerdo durante la conciliación
              laboral?
            </h2>

            <p className={styles.text}>
              No todas las conciliaciones concluyen con un acuerdo. Cuando las
              partes no logran resolver sus diferencias, el proceso termina
              dejando constancia de la audiencia realizada.
            </p>

            <p className={styles.text}>
              La falta de acuerdo no significa que el trabajador o el empleador
              pierdan sus derechos. Dependiendo del caso, podrán acudir
              posteriormente a las autoridades competentes o iniciar el proceso
              judicial correspondiente para que el conflicto sea resuelto por un
              juez.
            </p>

            <p className={styles.text}>
              Sin embargo, en muchos casos la conciliación permite aclarar
              posiciones y facilitar futuras negociaciones entre las partes.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Errores que debes evitar durante una conciliación laboral
            </h2>

            <p className={styles.text}>
              Una adecuada preparación aumenta considerablemente las
              probabilidades de alcanzar un acuerdo beneficioso para ambas
              partes.
            </p>

            <ul className={styles.list}>
              <li>Asistir sin revisar previamente la liquidación.</li>
              <li>No llevar contratos o soportes laborales.</li>
              <li>No calcular correctamente los valores reclamados.</li>
              <li>No presentar pruebas suficientes.</li>
              <li>Negarse completamente al diálogo.</li>
              <li>Aceptar acuerdos sin comprender sus efectos legales.</li>
              <li>
                No dejar claramente establecidos plazos y condiciones de pago.
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué la conciliación laboral beneficia tanto a trabajadores
              como a empleadores?
            </h2>

            <p className={styles.text}>
              La conciliación laboral busca proteger los intereses de ambas
              partes, promoviendo soluciones equilibradas que permitan cerrar el
              conflicto de forma rápida y con seguridad jurídica.
            </p>

            <p className={styles.text}>
              Para el trabajador representa una oportunidad de obtener el
              reconocimiento oportuno de sus derechos, mientras que para el
              empleador puede significar una reducción importante de costos
              judiciales, riesgos económicos y tiempos de litigio.
            </p>

            <p className={styles.text}>
              Además, cuando existe una relación laboral vigente, la
              conciliación ayuda a preservar un ambiente de trabajo más sano y
              evita que el conflicto continúe escalando.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cuánto tiempo tarda una conciliación laboral en Colombia?
            </h2>

            <p className={styles.text}>
              La duración depende de la complejidad del conflicto, la
              disponibilidad de las partes y la cantidad de documentación que
              deba analizarse durante la audiencia.
            </p>

            <p className={styles.text}>
              No obstante, la conciliación suele resolverse en un tiempo
              considerablemente menor que un proceso judicial laboral,
              permitiendo a las partes encontrar soluciones rápidas y con
              efectos legales inmediatos cuando se alcanza un acuerdo.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cuánto cuesta una conciliación laboral en Colombia?
            </h2>

            <p className={styles.text}>
              El costo de una conciliación laboral puede variar dependiendo del
              centro de conciliación, la naturaleza del conflicto y las
              características del caso.
            </p>

            <p className={styles.text}>
              En comparación con un proceso judicial, la conciliación suele
              representar una alternativa mucho más económica, ya que reduce
              gastos relacionados con honorarios, trámites y tiempos prolongados
              de litigio.
            </p>

            <p className={styles.text}>
              Solicitar información previa sobre los costos y requisitos permite
              planear adecuadamente el proceso y evitar inconvenientes durante
              su desarrollo.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Casos en los que la conciliación laboral suele ser más efectiva
            </h2>

            <p className={styles.text}>
              La conciliación resulta especialmente efectiva cuando ambas partes
              desean evitar un litigio y existe disposición para negociar
              soluciones que beneficien a trabajador y empleador.
            </p>

            <ul className={styles.list}>
              <li>Pago de liquidaciones laborales.</li>
              <li>Reconocimiento de salarios pendientes.</li>
              <li>Indemnizaciones por despido.</li>
              <li>Horas extras y recargos.</li>
              <li>Prestaciones sociales.</li>
              <li>Acuerdos para finalizar el contrato.</li>
              <li>Reclamaciones por incumplimientos laborales.</li>
              <li>Negociación de cronogramas de pago.</li>
            </ul>

            <p className={styles.text}>
              En este tipo de situaciones, una audiencia bien preparada puede
              permitir resolver el conflicto de manera rápida, disminuir el
              desgaste emocional y evitar la incertidumbre propia de un proceso
              judicial.
            </p>
          </div>

          {/* FAQ */}
          <div className={styles.faqSection}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre conciliación laboral en Colombia
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación laboral reemplaza una demanda?
                </h3>

                <p className={styles.faqAnswer}>
                  La conciliación permite intentar resolver el conflicto sin
                  acudir inicialmente a una demanda judicial. Si no existe
                  acuerdo, las partes aún pueden acudir a un juez laboral.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si el empleador no cumple el acuerdo?
                </h3>

                <p className={styles.faqAnswer}>
                  El acta de conciliación tiene validez legal en Colombia y
                  puede exigirse judicialmente en caso de incumplimiento por
                  alguna de las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se pueden negociar pagos en cuotas durante la conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Durante la audiencia las partes pueden acordar plazos,
                  cronogramas de pago y condiciones adaptadas a sus necesidades
                  y posibilidades económicas.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Cuánto tiempo tarda una conciliación laboral?
                </h3>

                <p className={styles.faqAnswer}>
                  El tiempo puede variar según el caso y la disposición de las
                  partes, aunque normalmente es mucho más rápido que un proceso
                  judicial laboral tradicional.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Es obligatorio llevar documentos a la conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Aunque no siempre es obligatorio, llevar contratos,
                  liquidaciones, comprobantes de pago y demás soportes laborales
                  facilita la negociación y ayuda a construir acuerdos más
                  claros.
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
