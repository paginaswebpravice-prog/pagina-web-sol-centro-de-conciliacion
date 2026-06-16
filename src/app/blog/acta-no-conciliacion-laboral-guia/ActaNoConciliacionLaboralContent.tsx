"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ActaNoConciliacionLaboralContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            Acta de no conciliación laboral: qué es y para qué sirve
          </h1>

          <p className={styles.heroText}>
            No todas las audiencias de conciliación laboral terminan con un
            acuerdo entre trabajador y empleador. Cuando las partes no logran
            llegar a una solución consensuada, el conciliador deja constancia de
            esta situación mediante un acta de no conciliación laboral.
          </p>

          <p className={styles.heroText}>
            Este documento tiene relevancia jurídica porque demuestra que se
            intentó resolver el conflicto de manera amistosa antes de acudir a
            otras vías legales.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un acta de no conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            Es un documento expedido por el conciliador cuando una audiencia
            laboral finaliza sin acuerdo entre las partes.
          </p>

          <p className={styles.paragraph}>
            El acta deja constancia de que la conciliación fue intentada pero
            que no fue posible alcanzar una solución satisfactoria para ambas
            partes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La no conciliación no significa que una de las partes tenga la
              razón. Simplemente evidencia que no fue posible construir un
              acuerdo voluntario durante la audiencia.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cuándo se emite este documento?</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Falta de acuerdo</h3>
              <p>
                Cuando empleador y trabajador mantienen posiciones opuestas y no
                alcanzan un consenso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Negociaciones fallidas</h3>
              <p>
                Cuando las propuestas planteadas durante la audiencia son
                rechazadas por alguna de las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflicto persistente</h3>
              <p>
                Cuando las diferencias laborales continúan sin posibilidad de
                solución mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cierre de audiencia</h3>
              <p>
                Cuando el conciliador determina que no existen condiciones para
                alcanzar un acuerdo.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Para qué sirve el acta de no conciliación?
          </h2>

          <p className={styles.paragraph}>
            Este documento sirve como evidencia formal de que se intentó una
            solución amigable del conflicto laboral mediante conciliación.
          </p>

          <p className={styles.paragraph}>
            Además, permite dejar registro de la participación de las partes,
            los temas discutidos y el resultado final de la audiencia.
          </p>

          <ul className={styles.list}>
            <li>Demuestra que se intentó conciliar.</li>
            <li>Formaliza el resultado de la audiencia.</li>
            <li>Brinda seguridad jurídica.</li>
            <li>Documenta la existencia del conflicto.</li>
            <li>Sirve como soporte documental posterior.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede después de una no conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando no existe acuerdo, las partes pueden analizar otras
            alternativas legales para resolver la controversia laboral.
          </p>

          <p className={styles.paragraph}>
            Dependiendo de las circunstancias del caso, el trabajador o el
            empleador podrán ejercer los mecanismos que consideren pertinentes
            para la defensa de sus derechos e intereses.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de intentar la conciliación laboral
          </h2>

          <ul className={styles.list}>
            <li>Favorece acuerdos rápidos.</li>
            <li>Reduce costos asociados al conflicto.</li>
            <li>Promueve el diálogo entre las partes.</li>
            <li>Permite soluciones flexibles.</li>
            <li>Evita procesos prolongados cuando existe acuerdo.</li>
            <li>Genera evidencia documental del intento conciliatorio.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La no conciliación significa perder el caso?</h3>
              <p>
                No. Simplemente indica que no fue posible alcanzar un acuerdo
                durante la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El documento tiene validez legal?</h3>
              <p>Sí. Es una constancia formal emitida por el conciliador.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede intentarse una nueva conciliación?</h3>
              <p>
                Dependiendo del caso y de la voluntad de las partes, podría
                evaluarse una nueva negociación.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto laboral pendiente?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación te orientamos sobre audiencias
            laborales, acuerdos entre empleadores y trabajadores y mecanismos
            alternativos para resolver conflictos en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
