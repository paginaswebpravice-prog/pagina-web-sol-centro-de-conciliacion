"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosCivilesContent() {
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
            CONCILIACIÓN CIVIL Y SOLUCIÓN DE CONFLICTOS EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación civil en Colombia: resuelva conflictos sin demanda
            judicial
          </h1>

          <p className={styles.description}>
            La conciliación en asuntos civiles permite solucionar conflictos
            relacionados con obligaciones, contratos, deudas y derechos
            patrimoniales de forma rápida, legal y efectiva en Bogotá y
            Colombia, evitando procesos judiciales largos, costosos y
            desgastantes. A través de este mecanismo, las partes pueden llegar a
            acuerdos con plena validez jurídica sin necesidad de acudir a un
            litigio tradicional.
          </p>

          <p className={styles.description}>
            En muchos casos, la conciliación civil permite resolver conflictos
            en una sola audiencia, protegiendo el tiempo, los recursos
            económicos y las relaciones entre las partes. Además, brinda la
            posibilidad de construir soluciones más flexibles y prácticas que
            las que normalmente podrían obtenerse dentro de un proceso judicial.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación civil y para qué sirve en Colombia?
            </h2>

            <p className={styles.text}>
              La conciliación civil es un mecanismo alternativo de resolución de
              conflictos que permite a las personas llegar a acuerdos sin acudir
              directamente a un juez. En Colombia, este procedimiento tiene
              plena validez jurídica y es ampliamente utilizado para resolver
              disputas relacionadas con obligaciones económicas, contratos,
              incumplimientos y responsabilidades civiles.
            </p>

            <p className={styles.text}>
              Durante la audiencia, un conciliador imparcial orienta a las
              partes para facilitar el diálogo y ayudar a construir soluciones
              claras y equilibradas. El objetivo no es determinar ganadores o
              perdedores, sino encontrar acuerdos prácticos que permitan
              solucionar el conflicto de forma rápida y segura.
            </p>

            <p className={styles.text}>
              Muchas personas y empresas en Bogotá y diferentes ciudades de
              Colombia utilizan la conciliación civil para evitar el desgaste
              emocional y financiero que suele implicar un proceso judicial
              prolongado.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conflictos civiles que se pueden conciliar en Colombia
            </h2>

            <p className={styles.text}>
              La conciliación civil aplica a múltiples situaciones donde existe
              un conflicto entre particulares o empresas con contenido económico
              o patrimonial. En la mayoría de casos donde las partes tienen la
              posibilidad de negociar, la conciliación puede convertirse en una
              alternativa efectiva para evitar demandas judiciales.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento de contratos civiles.</li>
              <li>Deudas entre particulares.</li>
              <li>Responsabilidad civil y daños y perjuicios.</li>
              <li>Conflictos por arrendamientos y cánones pendientes.</li>
              <li>Obligaciones económicas no cumplidas.</li>
              <li>Disputas por prestación de servicios.</li>
              <li>Acuerdos verbales o compromisos informales.</li>
              <li>Conflictos derivados de préstamos de dinero.</li>
              <li>Problemas relacionados con entregas o incumplimientos.</li>
              <li>Disputas patrimoniales entre particulares.</li>
            </ul>

            <p className={styles.text}>
              Cada caso puede requerir estrategias diferentes, por lo que una
              adecuada preparación documental y una propuesta clara suelen ser
              factores importantes para lograr acuerdos exitosos.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de resolver conflictos mediante conciliación civil
            </h2>

            <p className={styles.text}>
              La conciliación civil ofrece ventajas importantes frente a los
              procesos judiciales tradicionales, especialmente cuando las partes
              buscan soluciones rápidas, económicas y con respaldo legal.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Proceso rápido y efectivo</h3>

                <p className={styles.cardText}>
                  Permite resolver conflictos en menor tiempo frente a procesos
                  judiciales que pueden tardar meses o años.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ahorro en gastos legales</h3>

                <p className={styles.cardText}>
                  Reduce costos relacionados con demandas, honorarios y trámites
                  judiciales prolongados.
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
                <h3 className={styles.cardTitle}>Soluciones flexibles</h3>

                <p className={styles.cardText}>
                  Las partes pueden acordar plazos, pagos y condiciones
                  adaptadas a sus necesidades reales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor desgaste emocional</h3>

                <p className={styles.cardText}>
                  Evita conflictos prolongados y reduce tensiones personales o
                  comerciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Confidencialidad del proceso
                </h3>

                <p className={styles.cardText}>
                  Protege la información y evita la exposición pública del
                  conflicto.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda civil en Colombia?
            </h2>

            <p className={styles.text}>
              Los procesos civiles en Colombia pueden implicar largos tiempos de
              espera, gastos importantes y un desgaste constante para las partes
              involucradas. Además, durante un litigio existe incertidumbre
              sobre el resultado final y muchas veces las relaciones personales
              o comerciales terminan deteriorándose completamente.
            </p>

            <p className={styles.text}>
              La conciliación permite enfocarse en soluciones concretas y
              negociadas, evitando etapas procesales extensas y facilitando
              acuerdos más rápidos y funcionales. Incluso en conflictos donde ya
              existe tensión entre las partes, una audiencia bien preparada
              puede abrir espacios de negociación efectivos.
            </p>

            <p className={styles.text}>
              En muchos casos, llegar a un acuerdo temprano permite reducir
              riesgos financieros, recuperar cartera, establecer cronogramas de
              pago y evitar mayores consecuencias legales en el futuro.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación civil paso a paso?
            </h2>

            <p className={styles.text}>
              Para iniciar un proceso de conciliación civil en Colombia, se debe
              presentar una solicitud ante un centro de conciliación autorizado.
              Posteriormente, se programa una audiencia donde las partes tienen
              la oportunidad de exponer el conflicto y presentar propuestas de
              solución.
            </p>

            <p className={styles.text}>
              Durante la audiencia, el conciliador facilita el diálogo, organiza
              la negociación y ayuda a estructurar acuerdos claros, verificables
              y jurídicamente válidos.
            </p>

            <p className={styles.text}>
              Si las partes llegan a un acuerdo, este queda consignado en un
              acta de conciliación con efectos legales. En caso de no lograrse
              una solución, las partes conservan la posibilidad de acudir a
              otras vías legales o judiciales.
            </p>

            <p className={styles.text}>
              Contar con documentos organizados, soportes claros y una propuesta
              razonable suele aumentar significativamente las posibilidades de
              alcanzar acuerdos exitosos en conciliación civil.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos útiles para una conciliación civil
            </h2>

            <p className={styles.text}>
              La preparación documental es una parte fundamental dentro de la
              conciliación civil. Tener soportes claros facilita la comprensión
              del conflicto y permite construir acuerdos más sólidos y seguros.
            </p>

            <ul className={styles.list}>
              <li>Contratos y acuerdos firmados.</li>
              <li>Facturas, cuentas de cobro o pagarés.</li>
              <li>Chats, correos electrónicos y conversaciones.</li>
              <li>Comprobantes de pago o transferencias.</li>
              <li>Requerimientos enviados previamente.</li>
              <li>Fotografías, reportes o evidencia relacionada.</li>
              <li>Extractos o soportes financieros.</li>
            </ul>

            <p className={styles.text}>
              Una carpeta organizada y cronológica suele facilitar el desarrollo
              de la audiencia y permite negociar con mayor claridad.
            </p>
          </div>

          {/* BLOQUE 7 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Asesoría en conciliación civil en Bogotá y Colombia
            </h2>

            <p className={styles.text}>
              Recibir orientación antes de una audiencia de conciliación puede
              ayudarte a comprender tus derechos, preparar correctamente la
              documentación y estructurar propuestas de negociación más
              efectivas.
            </p>

            <p className={styles.text}>
              La asesoría también permite revisar posibles riesgos legales,
              analizar alternativas de solución y redactar acuerdos más claros y
              seguros para evitar futuros incumplimientos.
            </p>

            <p className={styles.text}>
              En Bogotá y diferentes ciudades de Colombia, muchas conciliaciones
              civiles logran resolverse exitosamente cuando las partes llegan
              preparadas y con disposición real para negociar.
            </p>
          </div>

          {/* FAQ */}
          <div className={styles.faqSection}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre conciliación civil en Colombia
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación civil es obligatoria antes de demandar en
                  Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  En muchos asuntos civiles, la conciliación extrajudicial es un
                  requisito previo antes de presentar una demanda judicial. Esto
                  depende del tipo de conflicto y de las pretensiones del caso.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una de las partes no asiste a la audiencia de
                  conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Cuando una de las partes no asiste sin justificación, puede
                  generarse constancia de inasistencia y la otra parte podría
                  continuar con acciones judiciales o legales según corresponda.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿El acuerdo de conciliación tiene validez legal?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene efectos jurídicos en
                  Colombia y puede exigirse legalmente en caso de incumplimiento
                  por alguna de las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Cuánto tiempo tarda una conciliación civil en Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  El tiempo puede variar según el caso y la disponibilidad de
                  las partes, pero normalmente la conciliación resulta mucho más
                  rápida que un proceso judicial tradicional.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué tipos de conflictos pueden resolverse mediante
                  conciliación civil?
                </h3>

                <p className={styles.faqAnswer}>
                  La conciliación civil puede utilizarse para resolver
                  conflictos por deudas, incumplimientos contractuales,
                  arrendamientos, daños y perjuicios, obligaciones económicas y
                  diferentes disputas patrimoniales.
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
