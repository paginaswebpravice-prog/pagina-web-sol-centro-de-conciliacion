"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionFamiliarBogotaContent() {
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
            Conciliación familiar en Colombia
          </span>

          <h1 className={styles.title}>Conciliación familiar en Bogotá</h1>

          <p className={styles.heroText}>
            La conciliación familiar en Bogotá es un mecanismo legal que permite
            resolver conflictos entre miembros de una familia sin necesidad de
            acudir a un juez.
          </p>

          <p className={styles.heroText}>
            Es una herramienta clave dentro de los procesos de familia en
            Colombia.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es la conciliación familiar?</h2>

          <p className={styles.paragraph}>
            Es un proceso en el que las partes buscan resolver conflictos
            familiares con la ayuda de un conciliador autorizado.
          </p>

          <p className={styles.paragraph}>
            El objetivo es llegar a acuerdos que protejan el bienestar de la
            familia, especialmente de niños y adolescentes.
          </p>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Casos más frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Custodia de hijos</h3>
              <p>Acuerdos sobre quién tendrá el cuidado de los menores.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cuota alimentaria</h3>
              <p>Fijación o ajuste de alimentos para hijos o familiares.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Régimen de visitas</h3>
              <p>Organización del tiempo de convivencia con los hijos.</p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación familiar
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos largos en juzgados de familia.</li>
            <li>Reduce el impacto emocional en la familia.</li>
            <li>Permite acuerdos flexibles y personalizados.</li>
            <li>Tiene validez legal en Colombia.</li>
            <li>Protege el interés superior de los menores.</li>
          </ul>
        </div>

        {/* DONDE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Dónde se realiza en Bogotá?</h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías habilitadas.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas de familia.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá existen múltiples entidades autorizadas para resolver
              conflictos familiares de forma legal y segura.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Bogotá</h2>

          <p className={styles.paragraph}>
            La conciliación familiar ayuda a descongestionar los juzgados de
            familia en Bogotá y promueve soluciones más humanas.
          </p>

          <p className={styles.paragraph}>
            Además, permite acuerdos más rápidos y menos traumáticos para las
            partes.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar la custodia?</h3>
              <p>Sí, siempre que se proteja el bienestar del menor.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar antes de demandar?</h3>
              <p>En muchos casos sí es requisito previo.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es legal?</h3>
              <p>Sí, tiene plena validez jurídica.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas conciliación familiar en Bogotá?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolver conflictos familiares de forma rápida, legal
            y sin procesos judiciales largos.
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
