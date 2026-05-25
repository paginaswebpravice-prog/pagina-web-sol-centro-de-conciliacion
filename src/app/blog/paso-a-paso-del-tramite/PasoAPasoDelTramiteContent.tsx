"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function PasoAPasoDelTramiteContent() {
  return (
    <section id="paso-a-paso" className={styles.articleWrapper}>
      <motion.div
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className={styles.topTag}>
          Guía práctica de conciliación en Colombia
        </span>

        <h2 className={styles.title}>
          Paso a paso del trámite de conciliación en Colombia y Bogotá
        </h2>

        <p className={styles.paragraph}>
          La conciliación en Colombia es uno de los mecanismos más utilizados
          para resolver conflictos sin necesidad de iniciar un proceso judicial.
          A través de este procedimiento, las partes pueden llegar a acuerdos
          rápidos, legales y ejecutables con la ayuda de un conciliador.
        </p>

        <p className={styles.paragraph}>
          En Bogotá y en otras ciudades del país, la conciliación es utilizada
          para resolver conflictos civiles, comerciales, familiares y algunos
          asuntos laborales, permitiendo ahorrar tiempo, costos y desgaste
          emocional frente a un litigio tradicional.
        </p>

        <p className={styles.paragraph}>
          Muchas personas recurren a la conciliación cuando necesitan solucionar
          conflictos relacionados con deudas, incumplimientos de contratos,
          conflictos de arrendamiento, cuotas de alimentos, acuerdos familiares,
          pagos pendientes o desacuerdos comerciales. En la práctica, este
          mecanismo busca que las partes encuentren soluciones negociadas sin
          tener que esperar largos procesos judiciales en Colombia.
        </p>

        <div className={styles.highlightBox}>
          <strong>Importante:</strong> un acta de conciliación tiene efectos
          legales y puede prestar mérito ejecutivo, lo que significa que el
          acuerdo puede exigirse judicialmente si una de las partes incumple.
        </div>

        <h3 className={styles.subtitle}>
          ¿Cómo funciona el trámite de conciliación?
        </h3>

        <p className={styles.paragraph}>
          Aunque cada caso puede tener particularidades, la mayoría de procesos
          de conciliación siguen una estructura similar desde la solicitud hasta
          la audiencia y el resultado final. Conocer cada etapa permite llegar
          mejor preparado y aumentar las posibilidades de alcanzar un acuerdo
          favorable.
        </p>

        <div className={styles.stepsWrapper}>
          <div className={styles.stepCard}>
            <span>1</span>

            <div>
              <h4>Solicitud de conciliación</h4>

              <p>
                Debes presentar tu caso ante un centro de conciliación
                autorizado explicando los hechos, las partes involucradas y lo
                que deseas solucionar mediante el acuerdo.
              </p>

              <p>
                En esta etapa normalmente se incluyen datos de contacto, una
                descripción clara del conflicto y las pretensiones económicas o
                jurídicas que deseas negociar. Mientras más clara sea la
                información presentada, más fácil será avanzar en el trámite.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>2</span>

            <div>
              <h4>Revisión del caso</h4>

              <p>
                El centro de conciliación analiza si el asunto es conciliable y
                verifica que se cumplan los requisitos legales para admitir el
                trámite.
              </p>

              <p>
                Durante esta revisión también se valida que el conflicto pueda
                resolverse mediante conciliación conforme a la ley colombiana.
                Algunos asuntos requieren procesos judiciales obligatorios y no
                pueden tramitarse por esta vía.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>3</span>

            <div>
              <h4>Citación a audiencia</h4>

              <p>
                La otra parte recibe una citación con la fecha, hora y modalidad
                de la audiencia, la cual puede realizarse de forma presencial o
                virtual.
              </p>

              <p>
                Actualmente, muchos centros de conciliación en Bogotá permiten
                audiencias virtuales, facilitando la participación de personas
                que se encuentran en otras ciudades o que tienen dificultades de
                desplazamiento.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>4</span>

            <div>
              <h4>Preparación previa a la audiencia</h4>

              <p>
                Antes de la audiencia es recomendable organizar documentos,
                pruebas, contratos, conversaciones y cualquier soporte
                relacionado con el conflicto.
              </p>

              <p>
                También es importante definir objetivos claros, valores,
                propuestas de pago, fechas y posibles alternativas de acuerdo.
                Una conciliación preparada adecuadamente suele tener mayores
                probabilidades de éxito.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>5</span>

            <div>
              <h4>Audiencia de conciliación</h4>

              <p>
                Durante la audiencia, el conciliador facilita el diálogo entre
                las partes para encontrar soluciones viables y equilibradas para
                ambos lados.
              </p>

              <p>
                El conciliador no actúa como juez ni impone decisiones. Su
                función principal es ayudar a construir acuerdos voluntarios,
                promover la comunicación y buscar alternativas que permitan
                resolver el conflicto de manera práctica.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>6</span>

            <div>
              <h4>Negociación de propuestas</h4>

              <p>
                En esta fase las partes presentan alternativas de solución,
                formas de pago, plazos de cumplimiento y compromisos específicos
                para resolver el conflicto.
              </p>

              <p>
                La conciliación permite acuerdos flexibles que muchas veces no
                serían posibles dentro de un proceso judicial tradicional en
                Colombia.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>7</span>

            <div>
              <h4>Resultado del trámite</h4>

              <p>
                Si existe acuerdo, se firma un acta de conciliación con plena
                validez jurídica. Si no hay acuerdo, se expide una constancia
                que permite acudir a otras vías legales.
              </p>

              <p>
                El documento final debe contener obligaciones claras, fechas,
                montos y condiciones específicas para evitar futuros conflictos
                relacionados con el cumplimiento del acuerdo.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <h3 className={styles.subtitle}>
          ¿Cuánto puede durar una conciliación?
        </h3>

        <p className={styles.paragraph}>
          El tiempo puede variar dependiendo de la complejidad del caso y de la
          disponibilidad de las partes. Sin embargo, muchos conflictos pueden
          resolverse en una sola audiencia cuando existe disposición real para
          negociar.
        </p>

        <p className={styles.paragraph}>
          En algunos casos complejos pueden requerirse varias sesiones de
          conciliación, especialmente cuando existen múltiples obligaciones,
          desacuerdos económicos importantes o necesidad de revisar documentos
          adicionales antes de llegar a un acuerdo definitivo.
        </p>

        <h3 className={styles.subtitle}>
          ¿Qué documentos llevar a una conciliación?
        </h3>

        <p className={styles.paragraph}>
          Llevar documentación organizada ayuda a que el conciliador comprenda
          rápidamente el conflicto y facilita las negociaciones entre las
          partes.
        </p>

        <ul className={styles.list}>
          <li>Contratos o acuerdos relacionados con el conflicto.</li>
          <li>Facturas, comprobantes o soportes de pago.</li>
          <li>Chats, correos o conversaciones relevantes.</li>
          <li>Documentos de identidad de las partes.</li>
          <li>Pruebas que ayuden a demostrar los hechos.</li>
          <li>Requerimientos o comunicaciones previas.</li>
          <li>Liquidaciones, cotizaciones o cálculos económicos.</li>
          <li>Actas, certificados o documentos complementarios.</li>
        </ul>

        <div className={styles.tipBox}>
          Llegar preparado a una audiencia de conciliación aumenta
          considerablemente las posibilidades de alcanzar un acuerdo rápido,
          claro y favorable para ambas partes.
        </div>

        <h3 className={styles.subtitle}>
          Ventajas de la conciliación en Colombia
        </h3>

        <p className={styles.paragraph}>
          Uno de los principales beneficios de la conciliación es que permite
          evitar procesos judiciales largos y costosos. Además, brinda a las
          partes mayor control sobre el resultado del conflicto, ya que los
          acuerdos se construyen mediante negociación.
        </p>

        <p className={styles.paragraph}>
          La conciliación también ayuda a conservar relaciones familiares,
          comerciales o laborales, algo especialmente importante cuando las
          partes deben seguir interactuando después del conflicto.
        </p>

        <div className={styles.stepsWrapper}>
          <div className={styles.stepCard}>
            <span>✓</span>

            <div>
              <h4>Mayor rapidez</h4>

              <p>
                Muchos conflictos pueden solucionarse en semanas o incluso en
                una sola audiencia, evitando años de litigio judicial.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>✓</span>

            <div>
              <h4>Menores costos</h4>

              <p>
                Reduce gastos procesales, honorarios prolongados y otros costos
                asociados a procesos judiciales tradicionales.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>✓</span>

            <div>
              <h4>Acuerdos flexibles</h4>

              <p>
                Permite establecer pagos por cuotas, plazos especiales,
                compromisos graduales y soluciones adaptadas al caso concreto.
              </p>
            </div>
          </div>
        </div>

        <h3 className={styles.subtitle}>
          Recomendaciones antes de asistir a una audiencia
        </h3>

        <p className={styles.paragraph}>
          Antes de iniciar un trámite de conciliación en Bogotá o cualquier
          ciudad de Colombia, es recomendable evaluar el conflicto de manera
          objetiva y definir qué resultado deseas obtener.
        </p>

        <ul className={styles.list}>
          <li>Define claramente qué estás dispuesto a negociar.</li>
          <li>Organiza la evidencia de manera cronológica.</li>
          <li>Evita asistir sin conocer los valores del conflicto.</li>
          <li>Revisa cuidadosamente cualquier acuerdo antes de firmarlo.</li>
          <li>Mantén una actitud abierta al diálogo y la negociación.</li>
        </ul>

        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Recomendación antes de iniciar una conciliación
          </strong>

          <p className={styles.ctaText}>
            Antes de asistir a una audiencia, define claramente qué deseas
            obtener, cuál es tu margen de negociación y qué alternativas
            estarías dispuesto a aceptar. Una estrategia clara facilita acuerdos
            más efectivos y reduce riesgos legales futuros.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agendar asesoría en conciliación
          </a>
        </div>
      </motion.div>
    </section>
  );
}
