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
            Conciliación civil en Colombia para resolver deudas, contratos y
            conflictos entre particulares
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
              ¿Qué asuntos civiles pueden resolverse mediante conciliación en
              Colombia?
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
              Ventajas de la conciliación civil frente a un proceso judicial
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
              ¿Cuándo conviene acudir primero a una conciliación civil?
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
              Documentos necesarios para una conciliación civil
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

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué asuntos civiles no pueden resolverse mediante conciliación?
            </h2>

            <p className={styles.text}>
              Aunque la conciliación civil permite solucionar una gran cantidad
              de conflictos entre particulares y empresas, existen asuntos que,
              por su naturaleza, deben ser decididos directamente por un juez o
              por otra autoridad competente. La posibilidad de conciliar depende
              de que los derechos discutidos sean disponibles y susceptibles de
              negociación entre las partes.
            </p>

            <p className={styles.text}>
              Antes de iniciar una solicitud de conciliación es recomendable
              verificar si el conflicto puede resolverse mediante este mecanismo
              o si la legislación exige acudir directamente a un proceso
              judicial.
            </p>

            <ul className={styles.list}>
              <li>Conflictos sobre derechos indisponibles.</li>
              <li>Procesos que la ley reserva exclusivamente al juez.</li>
              <li>Asuntos donde no existe capacidad legal para conciliar.</li>
              <li>Controversias expresamente excluidas por la legislación.</li>
            </ul>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Se pueden cobrar deudas mediante conciliación civil?
            </h2>

            <p className={styles.text}>
              Sí. La conciliación es uno de los mecanismos más utilizados para
              recuperar deudas entre particulares o empresas sin necesidad de
              iniciar inmediatamente un proceso ejecutivo. Durante la audiencia
              es posible negociar el valor adeudado, establecer acuerdos de
              pago, definir fechas de cumplimiento e incluso pactar nuevas
              condiciones para facilitar el pago de la obligación.
            </p>

            <p className={styles.text}>
              Este procedimiento resulta especialmente útil cuando ambas partes
              desean evitar un litigio y conservar una relación comercial o
              personal, logrando soluciones rápidas y con respaldo jurídico.
            </p>

            <ul className={styles.list}>
              <li>Préstamos de dinero.</li>
              <li>Facturas pendientes.</li>
              <li>Cuentas por cobrar.</li>
              <li>Acuerdos de pago.</li>
              <li>Obligaciones económicas incumplidas.</li>
            </ul>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conciliación por incumplimiento de contratos en Colombia
            </h2>

            <p className={styles.text}>
              Cuando una de las partes incumple las obligaciones pactadas en un
              contrato, la conciliación permite buscar soluciones antes de
              acudir a un proceso judicial. Es posible renegociar plazos,
              modificar condiciones, acordar compensaciones económicas o definir
              nuevas formas de cumplimiento que beneficien a ambas partes.
            </p>

            <p className={styles.text}>
              Este mecanismo puede utilizarse en contratos civiles, prestación
              de servicios, compraventa, suministro, arrendamiento y otros
              acuerdos donde exista un incumplimiento susceptible de
              negociación.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué ocurre si no se logra un acuerdo durante la conciliación
              civil?
            </h2>

            <p className={styles.text}>
              No todas las conciliaciones finalizan con un acuerdo. Cuando las
              partes no logran resolver el conflicto, el centro de conciliación
              expide la correspondiente constancia, documento que puede ser
              necesario para iniciar posteriormente un proceso judicial cuando
              la ley así lo exige.
            </p>

            <p className={styles.text}>
              Aunque no exista conciliación, la audiencia permite conocer la
              posición de cada parte y, en muchas ocasiones, facilita futuras
              negociaciones incluso después de iniciado un proceso judicial.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Casos en los que es recomendable solicitar una conciliación civil
            </h2>

            <p className={styles.text}>
              La conciliación resulta especialmente útil cuando existe
              disposición para negociar y el conflicto puede resolverse mediante
              acuerdos entre las partes. En estos escenarios suele representar
              una alternativa más rápida y menos costosa que un proceso
              judicial.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento de contratos.</li>
              <li>Préstamos de dinero entre particulares.</li>
              <li>Cobro de deudas.</li>
              <li>Conflictos por arrendamientos.</li>
              <li>Prestación de servicios.</li>
              <li>Responsabilidad por daños.</li>
              <li>Acuerdos de pago.</li>
              <li>Obligaciones económicas pendientes.</li>
            </ul>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Errores frecuentes durante una conciliación civil
            </h2>

            <p className={styles.text}>
              Preparar adecuadamente la audiencia aumenta las posibilidades de
              alcanzar un acuerdo exitoso. Muchos conflictos no se resuelven
              porque las partes llegan sin documentación suficiente o con
              expectativas poco realistas.
            </p>

            <ul className={styles.list}>
              <li>No presentar pruebas del conflicto.</li>
              <li>No llevar contratos o documentos firmados.</li>
              <li>Negarse a escuchar propuestas.</li>
              <li>Solicitar condiciones imposibles de cumplir.</li>
              <li>No definir fechas de pago.</li>
              <li>No establecer consecuencias del incumplimiento.</li>
              <li>No dejar claramente redactado el acuerdo.</li>
            </ul>

            <p className={styles.text}>
              Una buena preparación permite aprovechar mejor la audiencia y
              construir acuerdos jurídicamente sólidos que reduzcan el riesgo de
              futuros conflictos.
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
                  En muchos asuntos civiles, la conciliación extrajudicial
                  constituye un requisito previo antes de presentar una demanda.
                  Sin embargo, esto depende del tipo de conflicto y de las
                  pretensiones que se pretendan reclamar, por lo que es
                  recomendable verificar cada caso en particular.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una de las partes no asiste a la audiencia de
                  conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Cuando una de las partes no asiste sin una justificación
                  válida, el centro de conciliación puede expedir una constancia
                  de inasistencia. En algunos casos, este documento permite
                  continuar posteriormente con las acciones judiciales
                  correspondientes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿El acta de conciliación tiene validez legal?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene plenos efectos jurídicos en
                  Colombia y constituye un documento obligatorio para las
                  partes. En caso de incumplimiento, puede hacerse valer
                  mediante los mecanismos legales establecidos.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Cuánto tiempo tarda una conciliación civil?
                </h3>

                <p className={styles.faqAnswer}>
                  El tiempo puede variar según la disponibilidad de las partes,
                  la complejidad del conflicto y la programación del centro de
                  conciliación. En la mayoría de los casos, la conciliación
                  resulta considerablemente más rápida que un proceso judicial.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué conflictos pueden resolverse mediante conciliación civil?
                </h3>

                <p className={styles.faqAnswer}>
                  Es posible conciliar asuntos relacionados con incumplimiento
                  de contratos, cobro de deudas, arrendamientos, responsabilidad
                  civil, daños y perjuicios, acuerdos de pago, obligaciones
                  económicas y otras controversias patrimoniales susceptibles de
                  negociación.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué documentos debo llevar a una conciliación civil?
                </h3>

                <p className={styles.faqAnswer}>
                  Lo recomendable es presentar contratos, pagarés, facturas,
                  comprobantes de pago, correos electrónicos, conversaciones,
                  fotografías, cotizaciones, requerimientos previos y cualquier
                  documento que permita demostrar el origen del conflicto o
                  respaldar las pretensiones.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede recuperar una deuda mediante conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. La conciliación es un mecanismo ampliamente utilizado para
                  negociar el pago de deudas entre particulares o empresas,
                  establecer acuerdos de pago, definir plazos y evitar procesos
                  judiciales más largos y costosos.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Puedo conciliar un contrato incumplido?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Los conflictos derivados del incumplimiento de contratos
                  civiles, comerciales o de prestación de servicios pueden
                  solucionarse mediante conciliación cuando la ley lo permita y
                  exista disposición de las partes para negociar un acuerdo.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué ocurre si no se logra un acuerdo durante la conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Si no se alcanza un acuerdo, el centro de conciliación deja
                  constancia del resultado de la audiencia. Dependiendo del
                  caso, esta constancia puede utilizarse para iniciar
                  posteriormente un proceso judicial ante la autoridad
                  competente.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Es necesario asistir con abogado a una conciliación civil?
                </h3>

                <p className={styles.faqAnswer}>
                  En muchos casos no es obligatorio, pero contar con asesoría
                  jurídica puede facilitar la preparación de la audiencia, la
                  revisión de la documentación y la elaboración de acuerdos más
                  claros y seguros para las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una persona incumple el acta de conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  El incumplimiento del acta de conciliación puede dar lugar a
                  acciones legales para exigir el cumplimiento de las
                  obligaciones pactadas, ya que este documento tiene fuerza
                  jurídica conforme a la legislación colombiana.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede conciliar una deuda sin contrato escrito?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Dependiendo del caso, pueden presentarse otros medios de
                  prueba como consignaciones, transferencias bancarias,
                  conversaciones, correos electrónicos, mensajes de texto o
                  cualquier evidencia que permita demostrar la existencia de la
                  obligación económica.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Cuáles son las principales ventajas de la conciliación civil?
                </h3>

                <p className={styles.faqAnswer}>
                  La conciliación permite resolver conflictos de forma más
                  rápida, disminuir costos, evitar procesos judiciales
                  prolongados, conservar las relaciones entre las partes y
                  obtener acuerdos con plena validez legal que pueden exigirse
                  en caso de incumplimiento.
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
