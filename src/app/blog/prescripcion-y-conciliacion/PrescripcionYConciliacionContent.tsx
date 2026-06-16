"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PrescripcionYConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Aspectos legales de la conciliación
          </span>

          <h1 className={styles.title}>
            Prescripción y conciliación en Colombia: aspectos legales
            importantes
          </h1>

          <p className={styles.heroText}>
            La relación entre la prescripción y la conciliación en Colombia es
            uno de los temas jurídicos más relevantes para quienes buscan
            resolver un conflicto sin acudir inmediatamente a un proceso
            judicial.
          </p>

          <p className={styles.heroText}>
            Conocer los términos legales puede marcar la diferencia entre
            conservar un derecho o perder la posibilidad de reclamarlo por el
            paso del tiempo.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la prescripción en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La prescripción es una figura jurídica mediante la cual el paso del
            tiempo puede extinguir el derecho de una persona para exigir una
            obligación o presentar determinadas acciones judiciales.
          </p>

          <p className={styles.paragraph}>
            Cada tipo de reclamación tiene plazos específicos establecidos por
            la ley. Por ello, es importante actuar oportunamente cuando existe
            un conflicto económico, contractual, familiar o civil.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Esperar demasiado tiempo para reclamar un derecho puede generar la
              pérdida de la posibilidad de exigirlo judicialmente.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo influye la conciliación en la prescripción?
          </h2>

          <p className={styles.paragraph}>
            En diversos asuntos, la solicitud de conciliación extrajudicial
            puede producir efectos sobre los términos de prescripción mientras
            se desarrolla el procedimiento conciliatorio.
          </p>

          <p className={styles.paragraph}>
            Esto busca proteger a las partes que intentan resolver el conflicto
            de manera amistosa antes de acudir a un juez.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, los efectos concretos pueden variar según la naturaleza
            del asunto y las normas aplicables al caso.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Diferencia entre prescripción y caducidad
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Prescripción</h3>

              <p>
                Se relaciona con la pérdida del derecho a reclamar una
                obligación por el transcurso del tiempo establecido por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Caducidad</h3>

              <p>
                Corresponde al vencimiento definitivo del plazo para ejercer una
                acción judicial específica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Importancia jurídica</h3>

              <p>
                Ambas figuras pueden afectar la posibilidad de acudir a los
                tribunales si no se actúa oportunamente.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene iniciar una conciliación?
          </h2>

          <ul className={styles.list}>
            <li>Cuando existe una deuda pendiente de pago.</li>
            <li>Ante incumplimientos contractuales.</li>
            <li>En conflictos civiles o comerciales.</li>
            <li>En controversias familiares conciliables.</li>
            <li>Antes de iniciar determinadas demandas judiciales.</li>
            <li>Cuando se busca una solución rápida y económica.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Riesgos de dejar pasar demasiado tiempo
          </h2>

          <p className={styles.paragraph}>
            Muchas personas esperan varios años antes de reclamar una deuda o un
            incumplimiento contractual. En algunos casos esto puede provocar que
            los términos legales se agoten.
          </p>

          <p className={styles.paragraph}>
            Por esa razón, acudir tempranamente a un centro de conciliación en
            Bogotá o Colombia puede ayudar a buscar soluciones antes de que se
            presenten dificultades relacionadas con los plazos legales.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre prescripción y conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación siempre suspende términos?</h3>

              <p>
                Depende del tipo de asunto y de las normas aplicables a cada
                caso concreto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si no hay acuerdo?</h3>

              <p>
                La parte interesada puede continuar con las acciones legales que
                correspondan.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es recomendable actuar rápidamente?</h3>

              <p>
                Sí. Mientras más pronto se gestione el conflicto, mayores serán
                las posibilidades de proteger los derechos involucrados.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas orientación sobre conciliación en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Recibe acompañamiento para analizar tu caso, conocer los términos
            legales aplicables y explorar alternativas de solución mediante
            conciliación extrajudicial.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
