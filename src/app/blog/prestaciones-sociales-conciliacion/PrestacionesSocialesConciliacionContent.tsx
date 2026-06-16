"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PrestacionesSocialesConciliacionContent() {
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
          <span className={styles.badge}>Derecho laboral en Colombia</span>

          <h1 className={styles.title}>
            Conciliación sobre prestaciones sociales en Colombia
          </h1>

          <p className={styles.heroText}>
            Las prestaciones sociales representan derechos fundamentales de los
            trabajadores en Colombia. Sin embargo, en ocasiones pueden
            presentarse diferencias entre empleadores y trabajadores respecto al
            pago de cesantías, intereses, primas, vacaciones u otros conceptos
            laborales.
          </p>

          <p className={styles.heroText}>
            La conciliación laboral ofrece una alternativa rápida y efectiva
            para resolver estas controversias sin necesidad de iniciar una
            demanda judicial.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son las prestaciones sociales?
          </h2>

          <p className={styles.paragraph}>
            Las prestaciones sociales son beneficios económicos reconocidos por
            la legislación laboral colombiana a favor de los trabajadores como
            compensación por los servicios prestados.
          </p>

          <p className={styles.paragraph}>
            Estas prestaciones buscan brindar protección económica y bienestar
            al trabajador durante y después de la relación laboral.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Prestaciones que pueden ser objeto de conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cesantías</h3>
              <p>
                Valores acumulados que deben consignarse anualmente a favor del
                trabajador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Intereses a las cesantías</h3>
              <p>
                Pago adicional que corresponde al trabajador sobre el valor de
                las cesantías causadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prima de servicios</h3>
              <p>
                Prestación económica obligatoria que debe pagarse en los
                periodos establecidos por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Vacaciones</h3>
              <p>
                Compensaciones relacionadas con periodos de descanso no
                disfrutados o pendientes de pago.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene acudir a conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación resulta especialmente útil cuando existen
            desacuerdos sobre valores adeudados, errores en la liquidación o
            retrasos en el pago de prestaciones sociales.
          </p>

          <p className={styles.paragraph}>
            En lugar de iniciar inmediatamente una demanda laboral, las partes
            pueden buscar una solución consensuada mediante un procedimiento más
            rápido y flexible.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Muchos conflictos laborales relacionados con prestaciones sociales
              pueden resolverse mediante acuerdos de pago, reconocimientos
              parciales o conciliaciones integrales con plena validez jurídica.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación laboral
          </h2>

          <ul className={styles.list}>
            <li>Reduce tiempos de resolución del conflicto.</li>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Permite acuerdos flexibles entre las partes.</li>
            <li>Disminuye costos legales y administrativos.</li>
            <li>Favorece el diálogo y la negociación.</li>
            <li>Tiene efectos jurídicos obligatorios.</li>
            <li>Puede incluir acuerdos de pago por cuotas.</li>
            <li>Brinda seguridad jurídica para ambas partes.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si se alcanza un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando trabajador y empleador llegan a un acuerdo durante la
            conciliación, este queda plasmado en un acta con efectos legales.
          </p>

          <p className={styles.paragraph}>
            El documento establece las obligaciones de cada parte y puede
            ejecutarse judicialmente en caso de incumplimiento.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo reclamar cesantías mediante conciliación?</h3>

              <p>
                Sí. Las cesantías pendientes son uno de los conceptos laborales
                que con frecuencia se resuelven mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La prima de servicios puede conciliarse?</h3>

              <p>
                Sí. Es posible llegar a acuerdos relacionados con primas
                pendientes o diferencias en su liquidación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si el empleador incumple?</h3>

              <p>
                El acuerdo conciliatorio puede exigirse legalmente ante las
                autoridades competentes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes prestaciones sociales pendientes?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, reclamación de
            prestaciones sociales, cesantías, primas, vacaciones y acuerdos de
            pago en Colombia.
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
