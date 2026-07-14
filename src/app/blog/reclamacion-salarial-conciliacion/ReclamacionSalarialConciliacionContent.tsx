"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ReclamacionSalarialConciliacionContent() {
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
            Conciliación laboral • Reclamación de salarios y prestaciones
          </span>

          <h1 className={styles.title}>
            ¿Cómo reclamar salarios pendientes mediante conciliación laboral en
            Colombia? Guía completa para trabajadores y empleadores
          </h1>

          <p className={styles.heroText}>
            Cuando un trabajador deja de recibir su salario completo, no le
            pagan las horas extras, las comisiones, los recargos o cualquier
            otro concepto derivado de la relación laboral, la{" "}
            <strong>conciliación laboral</strong>
            representa una de las alternativas más rápidas para buscar una
            solución antes de acudir a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            A través de este mecanismo, trabajador y empleador pueden reunirse
            con la intervención de un conciliador imparcial para analizar las
            diferencias, revisar la documentación disponible y construir un
            acuerdo que permita solucionar el conflicto sin necesidad de
            enfrentar un juicio que puede prolongarse durante meses o incluso
            años.
          </p>

          <p className={styles.heroText}>
            En Colombia, este procedimiento es utilizado para reclamar salarios
            atrasados, prestaciones sociales, horas extras, recargos nocturnos,
            dominicales, comisiones, bonificaciones, diferencias salariales y
            otros derechos laborales susceptibles de conciliación, ofreciendo
            seguridad jurídica para ambas partes mediante un acta con efectos
            legales.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás cuándo procede una reclamación salarial
            mediante conciliación, qué documentos conviene reunir, cómo se
            desarrolla la audiencia, qué acuerdos pueden alcanzarse y qué ocurre
            si finalmente no es posible llegar a un entendimiento.
          </p>
        </div>

        {/* QUE ES UNA RECLAMACION SALARIAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es una reclamación salarial y cuándo puede presentarse en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            Una reclamación salarial surge cuando el trabajador considera que el
            empleador incumplió total o parcialmente sus obligaciones económicas
            derivadas del contrato de trabajo. Esto puede ocurrir por la falta
            de pago del salario, descuentos que no estaban autorizados,
            liquidaciones incorrectas, horas extras no reconocidas o cualquier
            otra diferencia en los valores que legal o contractualmente debían
            cancelarse.
          </p>

          <p className={styles.paragraph}>
            Antes de acudir directamente a un juez laboral, muchas de estas
            controversias pueden discutirse mediante una audiencia de
            conciliación. El objetivo es que las partes revisen los hechos,
            analicen los soportes y exploren soluciones que permitan cerrar el
            conflicto de forma voluntaria y jurídicamente válida.
          </p>

          <p className={styles.paragraph}>
            La conciliación también puede resultar beneficiosa para el
            empleador, porque le permite aclarar diferencias, corregir errores
            de liquidación, acordar formas de pago y disminuir los riesgos
            asociados a un litigio laboral prolongado.
          </p>

          <div className={styles.highlightBox}>
            <p>
              No todas las reclamaciones salariales significan que exista mala
              fe por parte del empleador. En muchas ocasiones las diferencias
              provienen de interpretaciones distintas del contrato, errores
              administrativos o desacuerdos sobre determinados conceptos
              laborales, situaciones que pueden solucionarse mediante el diálogo
              y la conciliación.
            </p>
          </div>
        </div>

        {/* QUE DERECHOS LABORALES PUEDE RECLAMARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué derechos laborales pueden reclamarse mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación laboral puede utilizarse para resolver múltiples
            diferencias económicas entre trabajador y empleador, siempre que el
            asunto sea susceptible de conciliación conforme a la legislación
            colombiana. En la práctica, este mecanismo permite discutir tanto
            obligaciones pendientes como diferencias en las liquidaciones
            realizadas al finalizar la relación laboral.
          </p>

          <p className={styles.paragraph}>
            Antes de acudir a un proceso judicial, muchas empresas y
            trabajadores prefieren revisar conjuntamente la documentación,
            identificar el origen del conflicto y construir un acuerdo que
            permita cumplir las obligaciones de manera voluntaria.
          </p>

          <ul className={styles.list}>
            <li>Salarios atrasados o completamente pendientes de pago.</li>
            <li>Diferencias en el valor del salario mensual.</li>
            <li>Horas extras diurnas y nocturnas.</li>
            <li>Recargos nocturnos, dominicales y festivos.</li>
            <li>Comisiones no liquidadas correctamente.</li>
            <li>Bonificaciones pactadas que no fueron canceladas.</li>
            <li>Auxilios económicos acordados en el contrato.</li>
            <li>Prestaciones sociales pendientes.</li>
            <li>Vacaciones causadas y no pagadas.</li>
            <li>Liquidaciones laborales con errores de cálculo.</li>
            <li>Indemnizaciones objeto de negociación.</li>
            <li>Acuerdos sobre formas y plazos de pago.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Cada caso debe analizarse de manera individual. La conciliación
              permite revisar los soportes de ambas partes y construir
              soluciones ajustadas a las circunstancias particulares del
              conflicto, evitando que pequeñas diferencias terminen
              convirtiéndose en procesos judiciales largos y costosos.
            </p>
          </div>
        </div>

        {/* CUANDO ES RECOMENDABLE INTENTAR UNA CONCILIACION POR SALARIOS PENDIENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable intentar una conciliación por salarios
            pendientes?
          </h2>

          <p className={styles.paragraph}>
            En la mayoría de los casos, intentar una conciliación constituye una
            alternativa conveniente cuando todavía existe disposición de las
            partes para dialogar y encontrar una solución. Un acuerdo alcanzado
            de manera temprana puede evitar el desgaste económico y emocional
            que normalmente implica un litigio laboral.
          </p>

          <p className={styles.paragraph}>
            También resulta útil cuando el empleador reconoce parcialmente la
            deuda, existen diferencias sobre los valores adeudados o ambas
            partes desean establecer un cronograma de pagos que permita cumplir
            las obligaciones sin afectar la continuidad de la empresa o la
            estabilidad económica del trabajador.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Existe voluntad de negociar</h3>

              <p>
                Si ambas partes están abiertas al diálogo, la conciliación puede
                finalizar el conflicto en una sola audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Hay diferencias en las liquidaciones</h3>

              <p>
                Cuando existen desacuerdos sobre cálculos de salarios,
                prestaciones o indemnizaciones, la conciliación facilita revisar
                los soportes y encontrar un punto de equilibrio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Se necesita una solución rápida</h3>

              <p>
                Muchas reclamaciones salariales pueden resolverse mucho antes
                que un proceso judicial, permitiendo a las partes ahorrar tiempo
                y recursos.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de conciliar una reclamación salarial
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Rapidez</h3>

              <p>
                Permite resolver el conflicto en menos tiempo que un proceso
                judicial laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ahorro económico</h3>

              <p>
                Reduce costos asociados a litigios y representación judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Validez jurídica</h3>

              <p>
                El acuerdo alcanzado queda consignado en un acta con efectos
                legales.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA UNA CONCILIACION POR RECLAMACION SALARIAL EN COLOMBIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación por reclamación salarial en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            El procedimiento de conciliación busca que trabajador y empleador
            analicen conjuntamente el conflicto con la intervención de un
            conciliador imparcial. Durante la audiencia ninguna de las partes
            está obligada a aceptar condiciones con las que no esté de acuerdo;
            el propósito es construir una solución voluntaria que beneficie a
            ambos.
          </p>

          <p className={styles.paragraph}>
            Antes de la audiencia es recomendable recopilar contratos de
            trabajo, desprendibles de nómina, comprobantes de pago,
            comunicaciones entre las partes y cualquier documento que permita
            demostrar el origen de la reclamación. Esta información facilita el
            análisis del caso y ayuda a formular propuestas realistas.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Presentación de la solicitud</h3>

              <p>
                El trabajador o el empleador presenta la solicitud explicando
                cuáles son los pagos discutidos, los hechos relevantes y las
                pretensiones que desea resolver mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación de las partes</h3>

              <p>
                El centro de conciliación programa la audiencia e informa a las
                partes la fecha, hora y lugar donde se llevará a cabo la reunión
                para intentar solucionar el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Desarrollo de la audiencia</h3>

              <p>
                Cada parte expone su versión, presenta los documentos que
                considera pertinentes y escucha las propuestas formuladas por la
                otra parte con el acompañamiento del conciliador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Búsqueda de acuerdos</h3>

              <p>
                Se pueden negociar pagos inmediatos, pagos por cuotas,
                reconocimiento parcial de valores, compensaciones u otras
                alternativas permitidas por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>5. Firma del acta</h3>

              <p>
                Si existe acuerdo, este queda consignado en un acta de
                conciliación con efectos jurídicos, la cual establece claramente
                las obligaciones y los plazos de cumplimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>6. Cumplimiento del acuerdo</h3>

              <p>
                Una vez firmado el acuerdo, ambas partes deben cumplir los
                compromisos adquiridos. En caso de incumplimiento, el acta puede
                hacerse valer conforme a la legislación vigente.
              </p>
            </div>
          </div>
        </div>

        {/* POSIBLES ACUERDOS QUE PUEDE LOGRARSE DURANTE UNA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Posibles acuerdos que pueden lograrse durante una conciliación
            laboral
          </h2>

          <p className={styles.paragraph}>
            No todas las conciliaciones terminan con el mismo resultado.
            Dependiendo de las circunstancias del caso, las partes pueden
            construir acuerdos diferentes que permitan solucionar el conflicto
            de manera práctica y ajustada a sus necesidades.
          </p>

          <ul className={styles.list}>
            <li>Pago inmediato de los salarios adeudados.</li>

            <li>Pago parcial con reconocimiento del saldo pendiente.</li>

            <li>Acuerdos de pago por cuotas.</li>

            <li>Reconocimiento de horas extras y recargos.</li>

            <li>Corrección de errores en la liquidación laboral.</li>

            <li>Pago de prestaciones sociales pendientes.</li>

            <li>Reconocimiento de comisiones o bonificaciones.</li>

            <li>
              Acuerdos integrales para finalizar definitivamente el conflicto.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La flexibilidad es una de las principales ventajas de la
              conciliación. Mientras un juez debe decidir conforme al proceso
              judicial, durante la conciliación las partes pueden diseñar
              soluciones que respondan mejor a su situación económica y laboral.
            </p>
          </div>
        </div>

        {/* ¿QUE OCURRE SI NO SE LOGRA UN ACUERDO DURANTE LA CONCILIACION? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se logra un acuerdo durante la conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias concluyen con un acuerdo. Cuando las
            diferencias entre trabajador y empleador son muy amplias o alguna de
            las partes decide no aceptar las propuestas planteadas, la
            conciliación puede finalizar sin éxito.
          </p>

          <p className={styles.paragraph}>
            Esto no significa que el trabajador pierda sus derechos ni que el
            empleador quede liberado de sus obligaciones. Dependiendo del caso
            concreto, las partes podrán acudir a las acciones judiciales
            previstas por la legislación laboral colombiana para que sea un juez
            quien resuelva la controversia.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Incluso cuando no se alcanza un acuerdo total, la conciliación
              suele servir para aclarar los puntos de discusión, delimitar las
              diferencias y facilitar una eventual solución posterior.
            </p>
          </div>
        </div>

        {/* ¿QUE DOCUMENTOS CONVIENE LLEVAR A UNA CONCILIACION POR SALARIOS PENDIENTES? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos conviene llevar a una conciliación por salarios
            pendientes?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso tiene sus particularidades, contar con la mayor
            cantidad posible de soportes facilita que el conciliador comprenda
            la situación y que las partes puedan discutir sobre hechos
            verificables. Una buena preparación también aumenta las
            posibilidades de alcanzar un acuerdo durante la audiencia.
          </p>

          <p className={styles.paragraph}>
            No es indispensable que todos los documentos existan, pero sí es
            recomendable aportar aquellos que permitan demostrar la relación
            laboral, los pagos efectuados y los valores que continúan
            pendientes.
          </p>

          <ul className={styles.list}>
            <li>Contrato de trabajo o documento equivalente.</li>

            <li>Otrosíes o modificaciones al contrato.</li>

            <li>Desprendibles de nómina.</li>

            <li>Comprobantes de consignaciones bancarias.</li>

            <li>Extractos donde aparezcan los pagos recibidos.</li>

            <li>Liquidación final del contrato, si existe.</li>

            <li>Correos electrónicos o comunicaciones con el empleador.</li>

            <li>Mensajes donde se reconozca la deuda salarial.</li>

            <li>Planillas de horas extras, turnos o asistencia.</li>

            <li>Soportes de comisiones, bonificaciones o incentivos.</li>

            <li>Cualquier otro documento relacionado con el conflicto.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Si alguno de estos documentos no está disponible, el conciliador
              podrá orientar a las partes sobre la información necesaria para
              analizar el caso durante la audiencia.
            </p>
          </div>
        </div>

        {/* ERRORES FRECUENTES AL RECLAMAR SALARIOS MEDIANTE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al reclamar salarios mediante conciliación
          </h2>

          <p className={styles.paragraph}>
            Muchas reclamaciones laborales no avanzan por falta de preparación o
            porque las partes llegan a la audiencia sin tener claridad sobre los
            valores discutidos. Evitar estos errores permite que la conciliación
            sea mucho más productiva.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No calcular correctamente la deuda</h3>

              <p>
                Es recomendable identificar previamente cuáles conceptos se
                reclaman y cuál es el valor aproximado de cada uno.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No llevar soportes</h3>

              <p>
                Aunque la conciliación es flexible, disponer de documentos
                facilita el análisis del conflicto y fortalece las propuestas de
                acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No escuchar las propuestas</h3>

              <p>
                En ocasiones existen alternativas de pago razonables que
                permiten resolver el conflicto sin necesidad de acudir
                posteriormente a un juez.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Confundir conciliación con una sentencia</h3>

              <p>
                El conciliador no decide quién tiene la razón. Su función
                consiste en facilitar el diálogo para que las propias partes
                construyan un acuerdo.
              </p>
            </div>
          </div>
        </div>

        {/* POR QUE MUCHAS RECLAMACIONES SALARIOS SE RESUELEN MEDIANTE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué muchas reclamaciones salariales se resuelven mediante
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cada vez más trabajadores y empleadores optan por la conciliación
            porque permite resolver diferencias de manera más rápida que un
            proceso judicial, conservando además espacios de diálogo que
            facilitan el cumplimiento voluntario de los acuerdos.
          </p>

          <p className={styles.paragraph}>
            Cuando ambas partes participan con disposición para negociar, es
            posible acordar pagos inmediatos, cronogramas por cuotas,
            reconocimiento parcial de valores o fórmulas que respondan a la
            capacidad económica del empleador sin desconocer los derechos del
            trabajador.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no pretende favorecer únicamente al trabajador o
              al empleador. Su finalidad consiste en encontrar soluciones
              equilibradas, legalmente válidas y que reduzcan la necesidad de
              acudir a procesos judiciales largos y costosos.
            </p>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la reclamación salarial mediante
            conciliación
          </h2>

          <p className={styles.paragraph}>
            Estas son algunas de las dudas más habituales que tienen
            trabajadores y empleadores cuando desean resolver un conflicto
            relacionado con salarios, prestaciones sociales u otras obligaciones
            laborales mediante conciliación.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Puedo reclamar varios meses de salario en una sola
                conciliación?
              </h3>

              <p>
                Sí. Es posible incluir dentro de la solicitud todos los
                salarios, prestaciones o conceptos laborales que se encuentren
                pendientes, siempre que hagan parte del mismo conflicto entre
                trabajador y empleador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio llegar a un acuerdo?</h3>

              <p>
                No. La conciliación es un mecanismo voluntario. Ninguna de las
                partes está obligada a aceptar propuestas con las que no esté de
                acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si el empleador no asiste a la audiencia?</h3>

              <p>
                Si el empleador no comparece, la audiencia finalizará conforme a
                las reglas aplicables al caso concreto y el trabajador podrá
                evaluar las alternativas legales disponibles para continuar con
                la reclamación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede acordarse un pago por cuotas?</h3>

              <p>
                Sí. Las partes pueden pactar cronogramas de pago, fechas
                específicas, cuotas mensuales u otras modalidades que permitan
                cumplir las obligaciones asumidas durante la conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación también sirve para reclamar prestaciones
                sociales?
              </h3>

              <p>
                En muchos casos sí. Dependiendo de las circunstancias, las
                partes pueden discutir diferencias relacionadas con prestaciones
                sociales, vacaciones, liquidaciones, horas extras y otros
                conceptos laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué valor tiene el acta de conciliación?</h3>

              <p>
                Cuando se alcanza un acuerdo, este queda consignado en un acta
                con efectos jurídicos, la cual establece claramente las
                obligaciones que cada parte deberá cumplir.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación es más rápida que un proceso judicial?</h3>

              <p>
                Generalmente sí. Aunque cada caso es diferente, la conciliación
                suele permitir que las partes intenten resolver el conflicto en
                un tiempo considerablemente menor que un litigio laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Necesito un abogado para asistir a una conciliación?</h3>

              <p>
                La participación de un abogado dependerá de las circunstancias
                de cada caso. Sin embargo, contar con orientación jurídica puede
                facilitar la comprensión de los derechos, obligaciones y
                posibles acuerdos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA BOX */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes salarios pendientes, prestaciones sin pagar o diferencias en
            tu liquidación laboral?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación orientamos a trabajadores y
            empleadores que buscan resolver conflictos laborales mediante
            conciliación. Si deseas reclamar salarios atrasados, horas extras,
            prestaciones sociales, comisiones o llegar a un acuerdo antes de
            iniciar un proceso judicial, podemos ayudarte a conocer las
            alternativas disponibles para tu caso.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un asesor especializado
          </a>
        </div>
      </motion.article>
    </section>
  );
}
