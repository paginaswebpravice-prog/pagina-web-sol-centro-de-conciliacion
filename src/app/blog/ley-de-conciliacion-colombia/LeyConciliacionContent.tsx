"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function LeyConciliacionContent() {
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
          <span className={styles.badge}>Marco legal en Colombia</span>

          <h1 className={styles.title}>Ley de conciliación en Colombia</h1>

          <p className={styles.heroText}>
            La ley de conciliación en Colombia establece el marco jurídico que
            regula la conciliación como mecanismo alternativo de solución de
            conflictos, permitiendo resolver disputas sin acudir a procesos
            judiciales.
          </p>

          <p className={styles.heroText}>
            Este mecanismo hace parte del sistema de justicia alternativa y
            busca promover acuerdos voluntarios entre las partes.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo alternativo de solución de conflictos en el que dos
            o más partes intentan resolver sus diferencias con la ayuda de un
            conciliador neutral.
          </p>

          <p className={styles.paragraph}>
            En Colombia, este proceso está regulado por normas específicas que
            le dan validez jurídica.
          </p>
        </div>

        {/* MARCO NORMATIVO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Marco normativo de la conciliación
          </h2>

          <ul className={styles.list}>
            <li>La Ley 640 de 2001 como norma principal.</li>
            <li>El Código General del Proceso.</li>
            <li>Normas del sistema de Mecanismos Alternativos (MASC).</li>
            <li>Regulación de centros de conciliación autorizados.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La Ley 640 de 2001 es la base principal que regula la conciliación
              extrajudicial en Colombia.
            </p>
          </div>
        </div>

        {/* BENEFICIOS LEGALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Importancia jurídica de la conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Validez legal</h3>
              <p>El acta de conciliación tiene fuerza de cosa juzgada.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita procesos judiciales</h3>
              <p>Permite resolver conflictos sin acudir a jueces.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acceso a justicia</h3>
              <p>Facilita soluciones rápidas y efectivas.</p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona legalmente?</h2>

          <p className={styles.paragraph}>
            Las partes acuden a un centro de conciliación autorizado en Colombia
            donde un conciliador facilita el diálogo.
          </p>

          <p className={styles.paragraph}>
            Si se llega a un acuerdo, este se formaliza en un acta con efectos
            jurídicos obligatorios.
          </p>
        </div>

        {/* TIPOS DE CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Conflictos que pueden conciliarse</h2>

          <ul className={styles.list}>
            <li>Conflictos civiles.</li>
            <li>Arrendamientos.</li>
            <li>Propiedad horizontal.</li>
            <li>Conflictos inmobiliarios.</li>
            <li>Obligaciones económicas.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>
              <p>No siempre, pero en algunos casos es requisito previo.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Quién regula la conciliación?</h3>
              <p>
                El Estado colombiano a través de la Ley 640 de 2001 y el sistema
                judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Tiene validez el acuerdo?</h3>
              <p>Sí, tiene efectos legales obligatorios.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto legal?
          </h3>

          <p className={styles.ctaText}>
            La conciliación es una alternativa legal rápida y efectiva en
            Colombia para resolver conflictos sin juicio.
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
