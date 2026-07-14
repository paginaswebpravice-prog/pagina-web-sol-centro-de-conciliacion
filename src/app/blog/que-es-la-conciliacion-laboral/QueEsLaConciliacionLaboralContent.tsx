"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function QueEsLaConciliacionLaboralContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Guía completa sobre conciliación laboral en Colombia
          </span>

          <h1 className={styles.title}>
            ¿Qué es la conciliación laboral en Colombia, cómo funciona y cuándo
            conviene utilizarla?
          </h1>

          <p className={styles.heroText}>
            La <strong>conciliación laboral en Colombia</strong> es uno de los
            mecanismos más utilizados para resolver conflictos entre
            trabajadores y empleadores sin necesidad de iniciar inmediatamente
            un proceso ante un juez laboral. A través del diálogo y con la
            intervención de un conciliador imparcial, las partes pueden alcanzar
            acuerdos con plena validez jurídica.
          </p>

          <p className={styles.heroText}>
            Este procedimiento resulta útil para solucionar diferencias
            relacionadas con salarios, liquidaciones, prestaciones sociales,
            indemnizaciones, vacaciones, contratos de trabajo, acuerdos de
            retiro y muchas otras obligaciones derivadas de la relación laboral.
          </p>

          <p className={styles.heroText}>
            Además de ahorrar tiempo y costos, la conciliación permite conservar
            una relación respetuosa entre las partes y evitar la incertidumbre
            que suele generar un proceso judicial que puede extenderse durante
            meses o incluso años.
          </p>
        </div>

        {/* INTRO */}
        <div className={styles.contentSection}>
          <p className={styles.paragraph}>
            En Colombia, miles de conflictos laborales se solucionan mediante
            conciliación cada año. En muchos casos, tanto trabajadores como
            empleadores prefieren llegar a un acuerdo antes que enfrentar un
            litigio prolongado, especialmente cuando existe disposición para
            negociar de buena fe.
          </p>

          <p className={styles.paragraph}>
            La conciliación no significa renunciar automáticamente a los
            derechos laborales. Por el contrario, busca que las partes
            encuentren una solución equilibrada dentro del marco legal,
            garantizando que los acuerdos sean válidos, claros y exigibles en
            caso de incumplimiento.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La finalidad principal de la conciliación laboral no es determinar
              quién tiene la razón, sino facilitar un acuerdo que permita
              terminar el conflicto de manera rápida, segura y con respaldo
              jurídico.
            </p>
          </div>
        </div>

        {/* CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación laboral en Colombia paso a paso?
          </h2>

          <p className={styles.paragraph}>
            La conciliación laboral comienza cuando una de las partes, ya sea el
            trabajador o el empleador, presenta una solicitud ante un centro de
            conciliación autorizado. Posteriormente se programa una audiencia en
            la que ambas partes tienen la oportunidad de exponer su versión de
            los hechos y plantear posibles soluciones al conflicto.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia interviene un conciliador imparcial, cuya
            función no consiste en decidir quién tiene la razón, sino facilitar
            la comunicación, promover el diálogo y ayudar a construir un acuerdo
            que respete la legislación laboral colombiana.
          </p>

          <p className={styles.paragraph}>
            Si las partes logran llegar a un acuerdo, este queda consignado en
            un acta de conciliación con efectos jurídicos. Si no es posible
            conciliar, las partes conservan la posibilidad de acudir
            posteriormente ante la jurisdicción laboral para que el conflicto
            sea resuelto por un juez.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Una audiencia de conciliación suele ser mucho más rápida que un
              proceso judicial y permite que trabajador y empleador participen
              activamente en la construcción de la solución, en lugar de esperar
              una decisión impuesta por un tercero.
            </p>
          </div>
        </div>

        {/* CUANDO CONVIENE ACUDIR A UNA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene acudir a una conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada conflicto tiene características particulares, la
            conciliación suele ser una excelente alternativa cuando ambas partes
            desean resolver la controversia de forma rápida y evitar un proceso
            judicial prolongado.
          </p>

          <p className={styles.paragraph}>
            También es recomendable cuando existen diferencias sobre la
            liquidación final, prestaciones sociales, salarios pendientes,
            indemnizaciones, vacaciones, horas extras o cualquier obligación
            económica derivada del contrato de trabajo.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Terminación del contrato</h3>

              <p>
                Cuando existen diferencias respecto a la liquidación,
                indemnización o pagos finales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestaciones sociales</h3>

              <p>
                Cesantías, intereses, primas, vacaciones y demás conceptos
                laborales pueden discutirse mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos de pago</h3>

              <p>
                Permite establecer fechas, cuotas y condiciones para cumplir las
                obligaciones pendientes entre trabajador y empleador.
              </p>
            </div>
          </div>
        </div>

        {/* CONFLICTOS QUE PUEDEN CONCILIARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales conflictos laborales que pueden resolverse mediante
            conciliación
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos laborales terminan necesariamente ante un
            juez. En muchos casos es posible alcanzar acuerdos satisfactorios
            mediante una audiencia de conciliación, especialmente cuando existe
            disposición para negociar.
          </p>

          <ul className={styles.list}>
            <li>Pago de salarios pendientes.</li>

            <li>Diferencias en la liquidación laboral.</li>

            <li>Prestaciones sociales.</li>

            <li>Vacaciones no disfrutadas o pendientes de pago.</li>

            <li>Horas extras, recargos y trabajo dominical.</li>

            <li>Bonificaciones y comisiones.</li>

            <li>Auxilios convencionales o contractuales.</li>

            <li>Indemnizaciones laborales.</li>

            <li>Terminación del contrato de trabajo.</li>

            <li>Acuerdos de pago entre trabajador y empleador.</li>
          </ul>
        </div>

        {/* BENEFICIOS DE UNA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué beneficios obtiene un trabajador al conciliar?
          </h2>

          <p className={styles.paragraph}>
            Para muchos trabajadores, la conciliación representa una oportunidad
            de obtener una solución más rápida que un proceso judicial. Además,
            permite recibir pagos, acordar fechas de cumplimiento y evitar la
            incertidumbre que puede generar un litigio prolongado.
          </p>

          <p className={styles.paragraph}>
            La conciliación también brinda la posibilidad de negociar
            condiciones que, en determinadas circunstancias, pueden resultar
            satisfactorias para ambas partes sin deteriorar completamente la
            relación laboral.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cada caso debe analizarse de manera individual para verificar qué
              derechos pueden ser objeto de conciliación y cuáles deben
              protegerse conforme a la legislación laboral vigente.
            </p>
          </div>
        </div>

        {/* VENTAJAS DE LA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación laboral para trabajadores y
            empleadores
          </h2>

          <p className={styles.paragraph}>
            Una de las principales razones por las que la conciliación laboral
            ha tomado tanta importancia en Colombia es porque ofrece soluciones
            mucho más ágiles que un proceso judicial. Tanto trabajadores como
            empleadores pueden participar activamente en la construcción del
            acuerdo, evitando largos periodos de incertidumbre.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Resolución más rápida</h3>

              <p>
                La conciliación normalmente permite solucionar el conflicto en
                mucho menos tiempo que un proceso ante un juez laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reducción de costos</h3>

              <p>
                Evita muchos de los gastos asociados a procesos judiciales
                prolongados, honorarios adicionales y trámites innecesarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos personalizados</h3>

              <p>
                Las partes pueden construir soluciones adaptadas a las
                circunstancias específicas del conflicto laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor seguridad jurídica</h3>

              <p>
                Cuando existe acuerdo, este queda contenido en un acta con
                efectos legales reconocidos por la legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mejor comunicación</h3>

              <p>
                Favorece el diálogo entre trabajador y empleador, disminuyendo
                la confrontación propia de un litigio judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cumplimiento voluntario</h3>

              <p>
                Al tratarse de acuerdos construidos entre las partes, suele
                existir una mayor disposición para cumplir los compromisos
                adquiridos.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS DE UNA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación laboral para trabajadores y
            empleadores
          </h2>

          <p className={styles.paragraph}>
            Una de las principales razones por las que la conciliación laboral
            ha tomado tanta importancia en Colombia es porque ofrece soluciones
            mucho más ágiles que un proceso judicial. Tanto trabajadores como
            empleadores pueden participar activamente en la construcción del
            acuerdo, evitando largos periodos de incertidumbre.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Resolución más rápida</h3>

              <p>
                La conciliación normalmente permite solucionar el conflicto en
                mucho menos tiempo que un proceso ante un juez laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reducción de costos</h3>

              <p>
                Evita muchos de los gastos asociados a procesos judiciales
                prolongados, honorarios adicionales y trámites innecesarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos personalizados</h3>

              <p>
                Las partes pueden construir soluciones adaptadas a las
                circunstancias específicas del conflicto laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor seguridad jurídica</h3>

              <p>
                Cuando existe acuerdo, este queda contenido en un acta con
                efectos legales reconocidos por la legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mejor comunicación</h3>

              <p>
                Favorece el diálogo entre trabajador y empleador, disminuyendo
                la confrontación propia de un litigio judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cumplimiento voluntario</h3>

              <p>
                Al tratarse de acuerdos construidos entre las partes, suele
                existir una mayor disposición para cumplir los compromisos
                adquiridos.
              </p>
            </div>
          </div>
        </div>

        {/* VALIDEZ LEGAL DE LA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué validez legal tiene una conciliación laboral en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Uno de los aspectos que más preocupa tanto a trabajadores como a
            empleadores es saber si los acuerdos alcanzados durante una
            conciliación realmente tienen efectos jurídicos. La respuesta es sí.
            Cuando la conciliación se realiza conforme a la ley y las partes
            llegan a un acuerdo, este queda consignado en un acta que produce
            importantes consecuencias legales.
          </p>

          <p className={styles.paragraph}>
            El acta de conciliación constituye un documento formal en el que
            quedan establecidas las obligaciones asumidas por cada parte. En
            caso de incumplimiento, quien resulte afectado podrá acudir a los
            mecanismos legales previstos para exigir su cumplimiento.
          </p>

          <p className={styles.paragraph}>
            Precisamente por esa seguridad jurídica, la conciliación laboral se
            ha convertido en una alternativa ampliamente utilizada para
            solucionar conflictos relacionados con contratos de trabajo,
            liquidaciones, prestaciones sociales, indemnizaciones y demás
            obligaciones laborales.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Alcanzar un acuerdo durante la conciliación brinda tranquilidad a
              ambas partes, ya que las obligaciones quedan claramente definidas
              y respaldadas por un documento con efectos jurídicos.
            </p>
          </div>
        </div>

        {/* QUIEN PUEDE SOLICITAR UNA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién puede solicitar una conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            La conciliación laboral puede ser solicitada tanto por trabajadores
            como por empleadores cuando exista una diferencia relacionada con la
            relación de trabajo y las partes tengan interés en intentar una
            solución mediante el diálogo.
          </p>

          <p className={styles.paragraph}>
            En muchos casos cualquiera de las partes toma la iniciativa de
            presentar la solicitud ante un centro de conciliación autorizado
            para convocar a la otra parte a una audiencia.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Trabajadores</h3>

              <p>
                Cuando consideran que existen salarios, prestaciones,
                liquidaciones, vacaciones u otras obligaciones pendientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Empleadores</h3>

              <p>
                Cuando desean resolver diferencias derivadas del contrato
                laboral de manera rápida y evitar procesos judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Representantes</h3>

              <p>
                Dependiendo del caso, las partes pueden actuar mediante
                apoderados o representantes debidamente autorizados.
              </p>
            </div>
          </div>
        </div>

        {/* CUANTO PUEDE TARDAR UNA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuánto puede tardar una conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            La duración del procedimiento depende de la disponibilidad de las
            partes, la complejidad del conflicto y la agenda del centro de
            conciliación. Sin embargo, normalmente este mecanismo resulta
            considerablemente más rápido que iniciar un proceso judicial
            laboral.
          </p>

          <p className={styles.paragraph}>
            Cuando existe disposición para negociar, muchas controversias pueden
            solucionarse en una única audiencia, permitiendo que trabajador y
            empleador obtengan una respuesta mucho más ágil.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Resolver un conflicto mediante conciliación suele representar un
              ahorro importante de tiempo, recursos y desgaste emocional para
              ambas partes.
            </p>
          </div>
        </div>

        {/* ERRORES FREQUENTES QUE DIFICULTAN UNA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes que dificultan una conciliación laboral
          </h2>

          <p className={styles.paragraph}>
            Aunque la conciliación busca facilitar acuerdos, existen situaciones
            que pueden impedir alcanzar una solución satisfactoria. Conocer
            estos errores permite preparar mejor la audiencia y aumentar las
            posibilidades de éxito.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No llevar documentos</h3>

              <p>
                La ausencia de soportes dificulta demostrar los hechos y limita
                las opciones de negociación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No escuchar a la otra parte</h3>

              <p>
                Mantener una posición completamente cerrada suele impedir
                cualquier acercamiento entre trabajador y empleador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Expectativas poco realistas</h3>

              <p>
                Buscar soluciones imposibles o contrarias a la ley puede hacer
                fracasar la audiencia.
              </p>
            </div>
          </div>
        </div>

        {/* NO SE LOGRA UN ACUERDO DURANTE LA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si no se logra un acuerdo durante la conciliación
            laboral?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias concluyen con un acuerdo. Cuando las partes
            no logran acercar sus posiciones, el procedimiento finaliza sin
            conciliación y cada una conserva los mecanismos legales que la
            legislación colombiana pone a su disposición para defender sus
            derechos.
          </p>

          <p className={styles.paragraph}>
            Esto significa que el trabajador o el empleador pueden acudir
            posteriormente ante la jurisdicción laboral para que el conflicto
            sea resuelto mediante un proceso judicial. Sin embargo, incluso en
            estos casos, la audiencia suele permitir identificar los puntos de
            desacuerdo y aclarar aspectos relevantes del conflicto.
          </p>

          <div className={styles.highlightBox}>
            <p>
              El hecho de que no exista conciliación no afecta el derecho de
              cualquiera de las partes para acudir posteriormente ante las
              autoridades competentes cuando la ley así lo permita.
            </p>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES SOBRE CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación laboral en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar antes de demandar?</h3>

              <p>
                Depende del tipo de conflicto y de lo previsto por la
                legislación aplicable para cada caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede hacerse de forma virtual?</h3>

              <p>
                Sí. Muchos centros de conciliación cuentan con audiencias
                virtuales para facilitar la participación de las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no existe acuerdo?</h3>

              <p>
                Las partes conservan la posibilidad de acudir posteriormente
                ante la jurisdicción laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El conciliador decide quién tiene la razón?</h3>

              <p>
                No. Su función consiste en facilitar el diálogo para que las
                partes construyan un acuerdo voluntario.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede incumplirse el acuerdo?</h3>

              <p>
                El acuerdo tiene efectos jurídicos y existen mecanismos legales
                para exigir su cumplimiento cuando corresponda.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Solo sirve para despidos?</h3>

              <p>
                No. También puede utilizarse para salarios, prestaciones,
                vacaciones, liquidaciones, indemnizaciones y otros conflictos
                laborales.
              </p>
            </div>
          </div>
        </div>

        {/* CTA BOX */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto laboral mediante conciliación?
          </h3>

          <p className={styles.ctaText}>
            Si eres trabajador o empleador y deseas buscar una solución rápida,
            legal y segura antes de iniciar un proceso judicial, nuestro Centro
            de Conciliación puede orientarte durante cada etapa del
            procedimiento y ayudarte a explorar alternativas que beneficien a
            ambas partes.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar orientación sobre conciliación laboral
          </a>
        </div>
      </motion.article>
    </section>
  );
}
