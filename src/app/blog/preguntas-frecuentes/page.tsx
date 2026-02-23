import styles from "./Article.module.css";

export default function PreguntasFrecuentes() {
  return (
    <>
      <section id="faq" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>9) Preguntas frecuentes</h2>

          <div className={styles.faqWrapper}>
            <details className={styles.faqItem}>
              <summary>¿Qué es la conciliación en Colombia?</summary>
              <p>
                Es un mecanismo para resolver conflictos con apoyo de un
                conciliador. Si se alcanza acuerdo, se deja por escrito en un
                acta con efectos jurídicos.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Qué casos se pueden conciliar?</summary>
              <p>
                En general, asuntos disponibles para las partes: conflictos
                civiles, comerciales, familiares y laborales conciliables, según
                el caso.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Qué pasa si la otra parte no asiste?</summary>
              <p>
                El centro puede expedir constancia según corresponda, lo cual
                permite acreditar que se intentó el trámite y continuar con
                otras vías cuando aplique.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Se puede conciliar virtualmente?</summary>
              <p>
                Sí. Es posible realizar audiencias virtuales con verificación de
                identidad, consentimiento y condiciones mínimas de
                participación.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cuánto se demora una conciliación?</summary>
              <p>
                Depende de agenda, complejidad y documentos. Con preparación y
                voluntad real, puede resolverse en una sola audiencia.
              </p>
            </details>
          </div>

          <div className={styles.cta} aria-label="CTA final">
            <strong>
              ¿Quieres revisar si tu caso es conciliable y qué ruta conviene?
            </strong>
            <p>
              Agenda una orientación y te indicamos documentos, estrategia y
              pasos para llegar a un acuerdo claro.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Ir a Contacto
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
