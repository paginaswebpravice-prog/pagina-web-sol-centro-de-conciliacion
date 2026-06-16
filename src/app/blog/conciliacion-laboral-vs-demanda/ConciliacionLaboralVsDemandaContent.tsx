"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionLaboralVsDemandaContent() {
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
          <span className={styles.badge}>Guía laboral en Colombia</span>

          <h1 className={styles.title}>
            Conciliación laboral vs demanda laboral en Colombia
          </h1>

          <p className={styles.heroText}>
            Cuando surge un conflicto entre trabajador y empleador, muchas
            personas se preguntan si es mejor acudir a una conciliación laboral
            o presentar directamente una demanda laboral. Ambas alternativas
            buscan proteger los derechos laborales, pero funcionan de manera
            diferente.
          </p>

          <p className={styles.heroText}>
            La conciliación laboral permite que las partes lleguen a acuerdos
            voluntarios con la ayuda de un conciliador, mientras que la demanda
            laboral implica que un juez tome una decisión mediante un proceso
            judicial.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es la conciliación laboral?</h2>

          <p className={styles.paragraph}>
            La conciliación laboral es un mecanismo de resolución de conflictos
            mediante el cual trabajador y empleador intentan llegar a un acuerdo
            sobre salarios, liquidaciones, indemnizaciones, prestaciones
            sociales u otras obligaciones derivadas de la relación laboral.
          </p>

          <p className={styles.paragraph}>
            El conciliador facilita el diálogo y ayuda a construir una solución
            que beneficie a ambas partes sin necesidad de un juicio.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es una demanda laboral?</h2>

          <p className={styles.paragraph}>
            La demanda laboral es un proceso judicial presentado ante un juez
            laboral cuando las partes no logran resolver el conflicto mediante
            negociación o conciliación.
          </p>

          <p className={styles.paragraph}>
            En este escenario será el juez quien analice las pruebas, escuche
            los argumentos y emita una decisión obligatoria para las partes.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Principales diferencias</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Tiempo</h3>
              <p>
                La conciliación suele resolverse en semanas, mientras que una
                demanda puede extenderse durante meses o años.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Costos</h3>
              <p>
                Generalmente la conciliación implica menores costos que un
                proceso judicial completo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Resultado</h3>
              <p>
                En conciliación el acuerdo es voluntario. En la demanda la
                decisión es impuesta por un juez.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de la conciliación laboral
          </h2>

          <ul className={styles.list}>
            <li>Resolución más rápida del conflicto.</li>
            <li>Menor desgaste emocional.</li>
            <li>Reducción de costos legales.</li>
            <li>Posibilidad de acuerdos flexibles.</li>
            <li>Protección de relaciones laborales.</li>
            <li>Validez jurídica de los acuerdos.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación laboral suele ser la primera alternativa
              recomendada cuando existe disposición de diálogo entre trabajador
              y empleador.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene presentar una demanda?
          </h2>

          <p className={styles.paragraph}>
            La demanda laboral puede ser necesaria cuando el empleador niega los
            derechos reclamados, existe incumplimiento grave de obligaciones
            laborales o no se logra ningún acuerdo durante la conciliación.
          </p>

          <p className={styles.paragraph}>
            También es una opción cuando la controversia requiere una decisión
            judicial para garantizar el cumplimiento de los derechos del
            trabajador.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>

              <p>
                Depende del caso concreto y de los requisitos establecidos por
                la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Un acuerdo conciliatorio puede exigirse?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos y puede
                hacerse cumplir legalmente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>

              <p>
                La persona podrá acudir posteriormente a la jurisdicción laboral
                para presentar una demanda.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>¿Tienes un conflicto laboral?</h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, acuerdos entre
            trabajador y empleador, liquidaciones, salarios e indemnizaciones en
            Colombia.
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
