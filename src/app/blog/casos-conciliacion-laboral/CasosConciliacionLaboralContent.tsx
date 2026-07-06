"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CasosConciliacionLaboralContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Ejemplos reales de conciliación laboral
          </span>

          <h1 className={styles.title}>
            Casos de conciliación laboral en Colombia: ejemplos reales y cuándo
            sí funciona
          </h1>

          <p className={styles.heroText}>
            La conciliación laboral es una de las herramientas más efectivas
            para resolver conflictos entre trabajadores y empleadores sin
            necesidad de acudir a largos procesos judiciales. Aunque no todos
            los casos terminan con un acuerdo, existen numerosos escenarios en
            los que la conciliación permite alcanzar soluciones rápidas y
            satisfactorias para ambas partes.
          </p>

          <p className={styles.heroText}>
            En Colombia, miles de controversias laborales relacionadas con
            salarios, liquidaciones, prestaciones sociales, indemnizaciones y
            terminación de contratos se solucionan cada año mediante acuerdos
            conciliatorios.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué la conciliación laboral funciona para resolver conflictos
            entre trabajadores y empleadores?
          </h2>

          <p className={styles.paragraph}>
            La conciliación funciona porque permite que las partes dialoguen con
            la orientación de un conciliador imparcial. En lugar de esperar una
            decisión judicial, trabajador y empleador pueden construir
            conjuntamente una solución.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo reduce tiempos, costos y desgaste emocional,
            permitiendo resolver controversias de forma más eficiente.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cuando existe voluntad de negociación, la conciliación laboral
              suele ser la alternativa más rápida para resolver conflictos
              relacionados con derechos laborales.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos laborales pueden resolverse mediante conciliación en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación laboral puede utilizarse para resolver una gran
            variedad de conflictos entre trabajadores y empleadores, siempre que
            las partes tengan disposición para negociar y el asunto sea
            conciliable conforme a la ley.
          </p>

          <p className={styles.paragraph}>
            En Colombia, este mecanismo es ampliamente utilizado para solucionar
            diferencias relacionadas con salarios, prestaciones sociales,
            indemnizaciones, liquidaciones, acuerdos de pago y otros conflictos
            derivados de la relación laboral.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Pago de salarios atrasados o sueldos pendientes</h3>

              <p>
                Reclamos por sueldos, horas extras, recargos nocturnos,
                dominicales y festivos no pagados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestaciones sociales no pagadas</h3>

              <p>
                Diferencias sobre cesantías, intereses, primas de servicios y
                vacaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Liquidaciones</h3>

              <p>
                Revisión del cálculo de la liquidación al finalizar el contrato
                de trabajo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Indemnización por despido</h3>

              <p>
                Acuerdos derivados de despidos, terminaciones anticipadas o
                conflictos sobre la finalización del contrato.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Caso 1: Conciliación laboral por salarios pendientes o sueldos no
            pagados
          </h2>

          <p className={styles.paragraph}>
            Uno de los casos más frecuentes ocurre cuando un trabajador reclama
            salarios que no han sido pagados oportunamente.
          </p>

          <p className={styles.paragraph}>
            Mediante conciliación, las partes pueden acordar pagos inmediatos,
            cronogramas de cumplimiento o mecanismos para saldar la obligación
            sin necesidad de una demanda laboral.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Caso 2: Conciliación por liquidación laboral mal liquidada o
            incompleta
          </h2>

          <p className={styles.paragraph}>
            Es común que existan desacuerdos sobre el cálculo de cesantías,
            primas, vacaciones o indemnizaciones.
          </p>

          <p className={styles.paragraph}>
            La conciliación permite revisar las cifras y alcanzar acuerdos
            respecto a los valores reconocidos y las formas de pago.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Caso 3: Conciliación laboral por despido, terminación del contrato e
            indemnización
          </h2>

          <p className={styles.paragraph}>
            Cuando existe controversia por la finalización de una relación
            laboral, la conciliación puede facilitar acuerdos relacionados con
            indemnizaciones, pagos pendientes o condiciones de cierre de la
            relación contractual.
          </p>

          <p className={styles.paragraph}>
            Esto permite evitar litigios prolongados y preservar una salida
            negociada para ambas partes.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ejemplos de casos donde la conciliación laboral suele dar buenos
            resultados
          </h2>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.step}>1</span>

              <div>
                <h3>Pago de una liquidación pendiente</h3>

                <p>
                  Un trabajador considera que la empresa calculó incorrectamente
                  su liquidación. Durante la audiencia ambas partes revisan la
                  documentación y acuerdan un pago adicional.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.step}>2</span>

              <div>
                <h3>Acuerdo por salarios atrasados</h3>

                <p>
                  La empresa reconoce la deuda, pero no puede pagar
                  inmediatamente. Mediante conciliación se establece un
                  cronograma de pagos aceptado por ambas partes.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.step}>3</span>

              <div>
                <h3>Prestaciones sociales</h3>

                <p>
                  Después de revisar soportes y comprobantes, las partes
                  acuerdan el valor definitivo correspondiente a cesantías,
                  intereses y primas.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.step}>4</span>

              <div>
                <h3>Terminación del contrato</h3>

                <p>
                  Empleador y trabajador negocian una compensación económica y
                  finalizan el conflicto sin necesidad de acudir a un proceso
                  judicial.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación laboral para trabajadores y
            empleadores
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Para el trabajador</h3>

              <ul>
                <li>Obtiene una solución más rápida.</li>
                <li>Reduce gastos judiciales.</li>
                <li>Puede recibir pagos en menor tiempo.</li>
                <li>Evita largos procesos ante los jueces.</li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>Para el empleador</h3>

              <ul>
                <li>Disminuye riesgos de litigio.</li>
                <li>Reduce costos procesales.</li>
                <li>Permite acuerdos flexibles.</li>
                <li>Favorece una solución negociada.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de una conciliación laboral en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso presenta particularidades, la mayoría de
            conciliaciones laborales siguen una serie de etapas que permiten a
            las partes exponer sus posiciones y buscar un acuerdo.
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.step}>1</span>

              <div>
                <h3>Solicitud de conciliación</h3>

                <p>
                  Una de las partes presenta la solicitud ante un centro de
                  conciliación autorizado.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.step}>2</span>

              <div>
                <h3>Citación</h3>

                <p>
                  Se convoca al trabajador y al empleador para asistir a la
                  audiencia.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.step}>3</span>

              <div>
                <h3>Audiencia</h3>

                <p>
                  Cada parte presenta sus argumentos y el conciliador facilita
                  el diálogo.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.step}>4</span>

              <div>
                <h3>Acuerdo o constancia</h3>

                <p>
                  Si existe acuerdo se firma el acta de conciliación; de lo
                  contrario se deja constancia de que no fue posible conciliar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que pueden facilitar una conciliación laboral
          </h2>

          <p className={styles.paragraph}>
            Llevar la documentación adecuada permite sustentar las pretensiones
            y facilita que las partes lleguen a un acuerdo durante la audiencia.
          </p>

          <div className={styles.infoBox}>
            <h3>Documentos recomendados</h3>

            <ul className={styles.list}>
              <li>Contrato de trabajo.</li>
              <li>Liquidación laboral.</li>
              <li>Desprendibles de nómina.</li>
              <li>Comprobantes de pago.</li>
              <li>Certificaciones laborales.</li>
              <li>Correos electrónicos.</li>
              <li>Chats relacionados con el conflicto.</li>
              <li>Pruebas de horas extras o recargos.</li>
              <li>Cálculos realizados por las partes.</li>
              <li>Cualquier documento que respalde la reclamación.</li>
            </ul>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Otros casos que pueden resolverse mediante conciliación laboral en
            Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Prestaciones sociales</h3>

              <p>
                Reclamos relacionados con cesantías, intereses, vacaciones y
                primas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Indemnizaciones</h3>

              <p>
                Acuerdos sobre compensaciones derivadas de conflictos laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos de pago</h3>

              <p>
                Soluciones para obligaciones laborales que no pueden ser
                canceladas inmediatamente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Empleadas domésticas</h3>

              <p>
                Controversias relacionadas con liquidaciones y derechos
                laborales del trabajo doméstico.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de resolver un conflicto laboral mediante conciliación en
            Colombia
          </h2>

          <ul className={styles.list}>
            <li>Menor duración frente a una demanda laboral.</li>
            <li>Reducción de costos legales.</li>
            <li>Acuerdos personalizados.</li>
            <li>Mayor rapidez en los pagos.</li>
            <li>Menor desgaste emocional.</li>
            <li>Seguridad jurídica para ambas partes.</li>
            <li>Posibilidad de soluciones flexibles.</li>
            <li>Evita procesos judiciales extensos.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué casos la conciliación laboral no es suficiente y cuándo
            acudir a un juez?
          </h2>

          <p className={styles.paragraph}>
            Aunque la conciliación es muy efectiva, existen casos en los que no
            es posible alcanzar un acuerdo debido a posiciones completamente
            opuestas o a la negativa de alguna de las partes para negociar.
          </p>

          <p className={styles.paragraph}>
            En estas situaciones, la vía judicial continúa siendo una
            alternativa para la protección de los derechos laborales.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes que dificultan una conciliación laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No llevar documentos</h3>

              <p>
                La falta de soportes dificulta demostrar las reclamaciones
                realizadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No calcular correctamente los valores</h3>

              <p>
                Presentar cifras sin fundamento puede retrasar o impedir un
                acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No estar dispuesto a negociar</h3>

              <p>
                La conciliación requiere voluntad de ambas partes para construir
                una solución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Firmar sin leer el acuerdo</h3>

              <p>
                Es importante revisar cuidadosamente todas las obligaciones
                antes de suscribir el acta.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación laboral en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación laboral es obligatoria?</h3>

              <p>
                Dependiendo del caso, puede ser una etapa recomendable antes de
                acudir a un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Los acuerdos tienen validez legal?</h3>

              <p>
                Sí. Los acuerdos conciliatorios producen efectos jurídicos y son
                obligatorios para las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si una parte incumple?</h3>

              <p>
                El acuerdo puede hacerse valer mediante los mecanismos legales
                correspondientes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>¿Tienes un conflicto laboral?</h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, acuerdos entre
            trabajador y empleador, liquidaciones, salarios, prestaciones
            sociales e indemnizaciones en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
