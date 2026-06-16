"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionExtrajudicialColombiaContent() {
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
            Mecanismos alternativos en Colombia
          </span>

          <h1 className={styles.title}>
            Conciliación extrajudicial en Colombia
          </h1>

          <p className={styles.heroText}>
            La conciliación extrajudicial en Colombia es un mecanismo
            alternativo de solución de conflictos que permite resolver disputas
            sin necesidad de acudir a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Es uno de los pilares del sistema de justicia alternativa en el
            país.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación extrajudicial?
          </h2>

          <p className={styles.paragraph}>
            Es un procedimiento en el que dos o más partes intentan resolver un
            conflicto con la ayuda de un conciliador autorizado, antes de acudir
            a un juez.
          </p>

          <p className={styles.paragraph}>
            Su objetivo es promover acuerdos voluntarios con efectos legales.
          </p>
        </div>

        {/* DONDE APLICA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿En qué casos aplica?</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos civiles</h3>
              <p>Deudas, contratos y obligaciones entre particulares.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos laborales</h3>
              <p>Salarios, liquidaciones y prestaciones sociales.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos familiares</h3>
              <p>Alimentos, custodia y régimen de visitas.</p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación extrajudicial
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales largos.</li>
            <li>Reduce costos legales.</li>
            <li>Agiliza la solución de conflictos.</li>
            <li>Tiene validez jurídica en Colombia.</li>
            <li>Promueve acuerdos voluntarios.</li>
          </ul>
        </div>

        {/* QUIENES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Quiénes pueden realizarla?</h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías habilitadas.</li>
            <li>Consultorios jurídicos.</li>
            <li>Entidades públicas competentes.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Solo los conciliadores autorizados por la ley pueden dirigir
              audiencias de conciliación extrajudicial en Colombia.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Importancia en el sistema jurídico colombiano
          </h2>

          <p className={styles.paragraph}>
            La conciliación extrajudicial ayuda a descongestionar los despachos
            judiciales y promueve una cultura de resolución pacífica de
            conflictos.
          </p>

          <p className={styles.paragraph}>
            Además, permite que las partes tengan mayor control sobre la
            solución de su conflicto.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar antes de demandar?</h3>
              <p>En muchos casos sí es requisito de procedibilidad.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Tiene validez legal?</h3>
              <p>Sí, el acta de conciliación tiene efectos jurídicos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede hacer virtual?</h3>
              <p>Sí, en Colombia también existe conciliación virtual.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas iniciar una conciliación en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolver tu conflicto mediante conciliación
            extrajudicial de forma rápida, legal y efectiva.
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
