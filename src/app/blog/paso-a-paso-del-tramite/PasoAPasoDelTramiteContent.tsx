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
          la audiencia y el resultado final.
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
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>4</span>

            <div>
              <h4>Audiencia de conciliación</h4>

              <p>
                Durante la audiencia, el conciliador facilita el diálogo entre
                las partes para encontrar soluciones viables y equilibradas para
                ambos lados.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <span>5</span>

            <div>
              <h4>Resultado del trámite</h4>

              <p>
                Si existe acuerdo, se firma un acta de conciliación con plena
                validez jurídica. Si no hay acuerdo, se expide una constancia
                que permite acudir a otras vías legales.
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

        <h3 className={styles.subtitle}>
          ¿Qué documentos llevar a una conciliación?
        </h3>

        <ul className={styles.list}>
          <li>Contratos o acuerdos relacionados con el conflicto.</li>
          <li>Facturas, comprobantes o soportes de pago.</li>
          <li>Chats, correos o conversaciones relevantes.</li>
          <li>Documentos de identidad de las partes.</li>
          <li>Pruebas que ayuden a demostrar los hechos.</li>
        </ul>

        <div className={styles.tipBox}>
          Llegar preparado a una audiencia de conciliación aumenta
          considerablemente las posibilidades de alcanzar un acuerdo rápido y
          favorable.
        </div>

        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            Recomendación antes de iniciar una conciliación
          </strong>

          <p className={styles.ctaText}>
            Antes de asistir a una audiencia, define claramente qué deseas
            obtener, cuál es tu margen de negociación y qué alternativas
            estarías dispuesto a aceptar. Una estrategia clara facilita acuerdos
            más efectivos.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Agendar asesoría en conciliación
          </a>
        </div>
      </motion.div>
    </section>
  );
}
