"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosComercialesContent() {
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
            CONCILIACIÓN COMERCIAL Y EMPRESARIAL EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación comercial en Colombia para resolver contratos, deudas y
            conflictos empresariales
          </h1>

          <p className={styles.description}>
            La conciliación comercial en Colombia es uno de los mecanismos más
            utilizados por empresas, comerciantes, emprendedores y prestadores
            de servicios para resolver conflictos de manera rápida, estratégica
            y legal sin acudir inmediatamente a una demanda judicial. A través
            de este procedimiento, las partes pueden construir acuerdos con
            plena validez jurídica, evitando largos procesos judiciales,
            reduciendo costos y protegiendo las relaciones comerciales.
          </p>

          <p className={styles.description}>
            En Bogotá y diferentes ciudades de Colombia, la conciliación
            empresarial se utiliza frecuentemente para solucionar conflictos
            relacionados con incumplimientos contractuales, deudas, conflictos
            entre socios, reclamaciones económicas, prestación de servicios,
            cartera pendiente y controversias derivadas de relaciones
            comerciales continuas.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación comercial y cómo funciona en Colombia?
            </h2>

            <p className={styles.text}>
              La conciliación comercial es un mecanismo alternativo de
              resolución de conflictos mediante el cual dos o más partes buscan
              llegar a un acuerdo con la ayuda de un conciliador autorizado. En
              Colombia, este procedimiento tiene efectos legales y permite
              solucionar disputas empresariales sin necesidad de acudir
              inicialmente a un juez.
            </p>

            <p className={styles.text}>
              Durante la audiencia de conciliación, el conciliador facilita el
              diálogo entre las partes, ayuda a identificar puntos de acuerdo y
              orienta la construcción de soluciones viables para ambas partes.
              El objetivo principal no es determinar ganadores o perdedores,
              sino encontrar acuerdos prácticos que permitan resolver el
              conflicto de manera eficiente.
            </p>

            <p className={styles.text}>
              Muchas empresas en Colombia utilizan este mecanismo para proteger
              relaciones comerciales, recuperar cartera, renegociar obligaciones
              o solucionar incumplimientos sin afectar la continuidad de sus
              operaciones comerciales.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué conflictos comerciales y empresariales pueden resolverse
              mediante conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación comercial puede aplicarse en múltiples conflictos
              empresariales siempre que el asunto sea conciliable y exista
              disposición de las partes para negociar soluciones.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento de contratos comerciales.</li>
              <li>Retrasos o incumplimientos en pagos.</li>
              <li>Recuperación de cartera y obligaciones pendientes.</li>
              <li>Conflictos entre socios o accionistas.</li>
              <li>Disputas por prestación de servicios.</li>
              <li>Controversias entre proveedores y clientes.</li>
              <li>Incumplimientos en entregas o suministros.</li>
              <li>Reclamaciones por daños o perjuicios económicos.</li>
              <li>Conflictos derivados de alianzas comerciales.</li>
              <li>Discusiones sobre acuerdos de pago.</li>
              <li>Controversias en relaciones comerciales continuas.</li>
              <li>
                Negociaciones relacionadas con obligaciones contractuales.
              </li>
            </ul>

            <p className={styles.text}>
              En muchos casos, la conciliación permite evitar el deterioro total
              de la relación comercial y facilita acuerdos que benefician la
              continuidad del negocio.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Ventajas de la conciliación comercial frente a una demanda
              judicial
            </h2>

            <p className={styles.text}>
              La conciliación empresarial ofrece múltiples ventajas frente a los
              procesos judiciales tradicionales, especialmente para empresas que
              buscan soluciones ágiles, confidenciales y financieramente más
              eficientes.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ahorro de tiempo</h3>

                <p className={styles.cardText}>
                  Evita procesos judiciales que pueden tardar meses o incluso
                  años, permitiendo soluciones mucho más rápidas.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Reducción de costos legales
                </h3>

                <p className={styles.cardText}>
                  Disminuye gastos asociados a demandas, procesos judiciales,
                  honorarios y trámites prolongados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>

                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos jurídicos y puede
                  exigirse judicialmente en caso de incumplimiento.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Conservación de relaciones comerciales
                </h3>

                <p className={styles.cardText}>
                  Facilita mantener relaciones empresariales, alianzas
                  estratégicas y vínculos comerciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Proceso confidencial</h3>

                <p className={styles.cardText}>
                  Ayuda a evitar la exposición pública de conflictos
                  empresariales o financieros.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones flexibles</h3>

                <p className={styles.cardText}>
                  Las partes pueden acordar condiciones adaptadas a sus
                  necesidades reales y capacidad económica.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué acudir primero a una conciliación comercial?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales comerciales en Colombia suelen implicar
              tiempos prolongados, costos elevados y desgaste operativo para las
              empresas. Además del impacto económico, una demanda puede afectar
              relaciones comerciales importantes, generar tensiones entre socios
              o perjudicar negociaciones futuras.
            </p>

            <p className={styles.text}>
              En muchos casos, las empresas prefieren soluciones rápidas y
              estratégicas que permitan continuar operando sin destinar recursos
              excesivos a litigios prolongados. La conciliación comercial ofrece
              precisamente esa posibilidad: resolver conflictos mediante
              acuerdos prácticos y legalmente válidos.
            </p>

            <p className={styles.text}>
              También permite construir acuerdos más flexibles que los que
              normalmente se obtienen dentro de un proceso judicial, incluyendo
              acuerdos de pago, renegociaciones, cronogramas de cumplimiento o
              compromisos comerciales específicos.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación comercial paso a paso?
            </h2>

            <p className={styles.text}>
              El proceso normalmente inicia con la presentación de una solicitud
              de conciliación ante un centro autorizado en Bogotá o Colombia.
              Allí se identifican las partes involucradas, el conflicto y las
              pretensiones que se desean negociar.
            </p>

            <p className={styles.text}>
              Posteriormente, el centro de conciliación realiza la citación a
              audiencia para que ambas partes participen en el proceso. Durante
              la audiencia, el conciliador escucha a las partes, revisa la
              documentación presentada y facilita la negociación.
            </p>

            <p className={styles.text}>
              Si se logra un acuerdo, este queda consignado en un acta de
              conciliación con plena validez legal. Si no existe acuerdo, las
              partes conservan la posibilidad de acudir posteriormente a otras
              vías legales.
            </p>

            <ul className={styles.list}>
              <li>Presentación de la solicitud de conciliación.</li>
              <li>Revisión y admisión del caso.</li>
              <li>Citación de las partes.</li>
              <li>Audiencia de conciliación.</li>
              <li>Negociación de propuestas.</li>
              <li>Firma del acta de conciliación si existe acuerdo.</li>
            </ul>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos necesarios para una conciliación comercial
            </h2>

            <p className={styles.text}>
              La preparación documental es clave para facilitar acuerdos claros
              y evitar discusiones innecesarias durante la audiencia de
              conciliación.
            </p>

            <ul className={styles.list}>
              <li>Contratos comerciales o acuerdos firmados.</li>
              <li>Facturas, cuentas de cobro y soportes contables.</li>
              <li>Comprobantes de pago o transferencias.</li>
              <li>Correos electrónicos y conversaciones relevantes.</li>
              <li>Órdenes de servicio o entregas realizadas.</li>
              <li>Requerimientos o comunicaciones previas.</li>
              <li>Documentos que acrediten incumplimientos.</li>
            </ul>

            <p className={styles.text}>
              Una documentación organizada facilita que el conciliador comprenda
              el conflicto y ayuda a construir acuerdos más sólidos y
              ejecutables.
            </p>
          </div>

          {/* BLOQUE 7 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Acta de conciliación comercial y efectos legales
            </h2>

            <p className={styles.text}>
              Cuando las partes alcanzan un acuerdo, este queda consignado en un
              acta de conciliación que tiene efectos legales en Colombia. El
              documento puede prestar mérito ejecutivo, lo que significa que
              puede exigirse judicialmente en caso de incumplimiento.
            </p>

            <p className={styles.text}>
              Por esta razón, es importante que el acuerdo quede redactado con
              claridad, especificando valores, plazos, obligaciones, formas de
              pago y condiciones de cumplimiento.
            </p>

            <p className={styles.text}>
              Una conciliación bien estructurada no solo ayuda a resolver el
              conflicto actual, sino que también brinda mayor seguridad jurídica
              para ambas partes en el futuro.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Recuperación de cartera mediante conciliación comercial en
              Colombia
            </h2>

            <p className={styles.text}>
              La conciliación comercial es una alternativa eficaz para recuperar
              cartera vencida sin acudir inmediatamente a un proceso judicial.
              Empresas, comerciantes y prestadores de servicios pueden utilizar
              este mecanismo para negociar el pago de obligaciones pendientes,
              definir nuevas fechas de pago y alcanzar acuerdos que beneficien a
              ambas partes.
            </p>

            <p className={styles.text}>
              En muchos casos, la recuperación de cartera mediante conciliación
              permite disminuir los costos asociados al cobro judicial,
              conservar relaciones comerciales y obtener soluciones más rápidas
              para mejorar el flujo de caja de la empresa.
            </p>

            <ul className={styles.list}>
              <li>Cobro de facturas vencidas.</li>
              <li>Negociación de acuerdos de pago.</li>
              <li>Recuperación de cartera empresarial.</li>
              <li>Renegociación de obligaciones comerciales.</li>
              <li>Definición de cronogramas de pago.</li>
              <li>Prevención de procesos judiciales.</li>
            </ul>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conciliación por incumplimiento de contratos comerciales
            </h2>

            <p className={styles.text}>
              El incumplimiento de contratos comerciales es una de las
              principales causas de conflicto entre empresas. Cuando una de las
              partes no cumple las obligaciones pactadas, la conciliación
              permite renegociar condiciones, establecer nuevos plazos o acordar
              compensaciones económicas sin necesidad de iniciar inmediatamente
              una demanda.
            </p>

            <p className={styles.text}>
              Este mecanismo puede aplicarse en contratos de prestación de
              servicios, compraventa, suministro, distribución, franquicia,
              transporte, consultoría y otros acuerdos comerciales donde exista
              un incumplimiento susceptible de negociación.
            </p>

            <p className={styles.text}>
              Alcanzar un acuerdo mediante conciliación ayuda a reducir riesgos
              financieros, preservar relaciones comerciales y garantizar mayor
              seguridad jurídica para las partes involucradas.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo resolver conflictos entre socios mediante conciliación?
            </h2>

            <p className={styles.text}>
              Las diferencias entre socios pueden afectar seriamente el
              funcionamiento de una empresa. La conciliación ofrece un espacio
              neutral para discutir desacuerdos relacionados con la
              administración del negocio, distribución de utilidades,
              participación societaria, cumplimiento de obligaciones y toma de
              decisiones estratégicas.
            </p>

            <p className={styles.text}>
              Resolver estos conflictos mediante acuerdos negociados permite
              proteger la estabilidad de la empresa y evitar procesos judiciales
              que pueden afectar la operación y la reputación del negocio.
            </p>

            <ul className={styles.list}>
              <li>Distribución de utilidades.</li>
              <li>Incumplimiento de acuerdos entre socios.</li>
              <li>Administración de la empresa.</li>
              <li>Salida o retiro de socios.</li>
              <li>Participación accionaria.</li>
              <li>Decisiones corporativas.</li>
            </ul>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conciliación de conflictos entre proveedores y clientes
            </h2>

            <p className={styles.text}>
              Las relaciones comerciales pueden generar desacuerdos relacionados
              con entregas, pagos, calidad de productos, prestación de servicios
              o incumplimientos contractuales. La conciliación facilita que
              proveedores y clientes negocien soluciones antes de acudir a un
              proceso judicial.
            </p>

            <p className={styles.text}>
              En la audiencia pueden acordarse nuevos plazos de cumplimiento,
              compensaciones económicas, devoluciones, descuentos comerciales o
              acuerdos de pago que permitan mantener la relación comercial y
              proteger los intereses de ambas partes.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué ocurre si no se logra un acuerdo durante la conciliación
              comercial?
            </h2>

            <p className={styles.text}>
              Aunque el objetivo principal de la conciliación es alcanzar un
              acuerdo, no todos los conflictos empresariales terminan con una
              solución negociada. Si las partes no logran conciliar, el centro
              de conciliación deja constancia de la audiencia realizada.
            </p>

            <p className={styles.text}>
              Dependiendo del caso, esta constancia puede servir para iniciar un
              proceso judicial cuando la legislación lo exija como requisito
              previo. No obstante, muchas negociaciones continúan incluso
              después de la audiencia y permiten alcanzar acuerdos posteriores.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cuándo es recomendable acudir a una conciliación comercial?
            </h2>

            <p className={styles.text}>
              La conciliación puede utilizarse desde las primeras etapas del
              conflicto, antes de que la controversia afecte la continuidad del
              negocio o genere un litigio de mayor complejidad. Actuar de manera
              oportuna suele facilitar la negociación y aumentar las
              posibilidades de alcanzar acuerdos beneficiosos.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento de contratos comerciales.</li>
              <li>Retrasos en pagos.</li>
              <li>Recuperación de cartera.</li>
              <li>Conflictos entre socios.</li>
              <li>Problemas con proveedores.</li>
              <li>Incumplimiento en prestación de servicios.</li>
              <li>Disputas por suministros.</li>
              <li>Negociación de obligaciones económicas.</li>
            </ul>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Errores frecuentes durante una conciliación comercial
            </h2>

            <p className={styles.text}>
              Preparar adecuadamente la audiencia incrementa las posibilidades
              de lograr un acuerdo exitoso. Muchos conflictos no se resuelven
              porque las partes no presentan la documentación suficiente o no
              definen claramente sus pretensiones.
            </p>

            <ul className={styles.list}>
              <li>No presentar contratos o anexos.</li>
              <li>No llevar soportes contables.</li>
              <li>No demostrar los incumplimientos.</li>
              <li>No calcular correctamente las obligaciones.</li>
              <li>Negarse completamente a negociar.</li>
              <li>No establecer plazos claros de cumplimiento.</li>
              <li>No definir consecuencias por incumplimiento.</li>
            </ul>

            <p className={styles.text}>
              Una adecuada preparación documental y jurídica facilita acuerdos
              más completos, disminuye el riesgo de futuros conflictos y brinda
              mayor seguridad para ambas partes.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué empresas pueden beneficiarse de la conciliación comercial?
            </h2>

            <p className={styles.text}>
              La conciliación comercial puede ser utilizada por empresas de
              cualquier tamaño, emprendedores, comerciantes, sociedades,
              profesionales independientes y organizaciones que mantengan
              relaciones contractuales o comerciales con terceros.
            </p>

            <p className={styles.text}>
              Este mecanismo resulta especialmente útil para prevenir litigios,
              recuperar cartera, renegociar obligaciones y proteger relaciones
              comerciales de largo plazo, independientemente del sector
              económico en el que opere la empresa.
            </p>

            <ul className={styles.list}>
              <li>Microempresas y pequeñas empresas.</li>
              <li>Medianas y grandes compañías.</li>
              <li>Sociedades comerciales.</li>
              <li>Empresas familiares.</li>
              <li>Prestadores de servicios.</li>
              <li>Comerciantes independientes.</li>
              <li>Startups y emprendimientos.</li>
              <li>Distribuidores y proveedores.</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className={styles.faqSection}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre conciliación comercial en Colombia
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación comercial tiene validez legal en Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene efectos jurídicos y puede
                  exigirse legalmente en caso de incumplimiento de los acuerdos
                  pactados entre las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una de las partes no asiste a la audiencia?
                </h3>

                <p className={styles.faqAnswer}>
                  Si una de las partes no asiste sin justificación, el proceso
                  puede cerrarse o dejar constancia de inasistencia, permitiendo
                  posteriormente acudir a otras vías legales.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Cuánto tiempo puede tardar una conciliación comercial?
                </h3>

                <p className={styles.faqAnswer}>
                  El tiempo puede variar según el caso y la disposición de las
                  partes, pero normalmente es mucho más rápido que un proceso
                  judicial comercial tradicional.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Es obligatorio tener abogado para una conciliación comercial?
                </h3>

                <p className={styles.faqAnswer}>
                  No siempre es obligatorio, pero recibir asesoría jurídica
                  puede ayudar a proteger los intereses de la empresa y
                  construir acuerdos más claros y seguros.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué ventajas tiene conciliar antes de demandar?
                </h3>

                <p className={styles.faqAnswer}>
                  La conciliación permite ahorrar tiempo, reducir costos,
                  proteger relaciones comerciales y construir soluciones más
                  flexibles sin necesidad de iniciar inmediatamente un litigio.
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
