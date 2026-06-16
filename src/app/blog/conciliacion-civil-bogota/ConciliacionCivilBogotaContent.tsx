"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionCivilBogotaContent() {
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
          <span className={styles.badge}>Conciliación civil en Colombia</span>

          <h1 className={styles.title}>Conciliación civil en Bogotá</h1>

          <p className={styles.heroText}>
            La conciliación civil en Bogotá es un mecanismo legal que permite
            resolver conflictos entre particulares sin necesidad de acudir a un
            proceso judicial.
          </p>

          <p className={styles.heroText}>
            Es una alternativa rápida, económica y con plena validez jurídica en
            Colombia.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es la conciliación civil?</h2>

          <p className={styles.paragraph}>
            Es un mecanismo de solución de conflictos en el que dos o más
            personas buscan llegar a un acuerdo voluntario con ayuda de un
            conciliador autorizado.
          </p>

          <p className={styles.paragraph}>
            Se utiliza principalmente para resolver conflictos de carácter
            patrimonial o contractual.
          </p>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos más comunes en conciliación civil
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Deudas entre particulares</h3>
              <p>Acuerdos de pago por obligaciones económicas pendientes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimiento de contratos</h3>
              <p>Solución de conflictos por contratos civiles incumplidos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos patrimoniales</h3>
              <p>Disputas sobre bienes o derechos económicos.</p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación civil
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales largos y costosos.</li>
            <li>Permite acuerdos rápidos entre las partes.</li>
            <li>Reduce gastos legales.</li>
            <li>Tiene validez jurídica en Colombia.</li>
            <li>Promueve soluciones amigables.</li>
          </ul>
        </div>

        {/* DONDE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Dónde se realiza en Bogotá?</h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías con funciones conciliatorias.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas habilitadas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá puedes acceder a múltiples entidades autorizadas para
              resolver conflictos civiles de forma legal.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Bogotá</h2>

          <p className={styles.paragraph}>
            La conciliación civil ayuda a descongestionar los juzgados y permite
            resolver conflictos de forma más eficiente.
          </p>

          <p className={styles.paragraph}>
            Además, fomenta la cultura del acuerdo y la solución pacífica de
            conflictos.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar cualquier deuda?</h3>
              <p>Sí, siempre que sea un conflicto entre particulares.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar antes de demandar?</h3>
              <p>En muchos casos sí es requisito previo.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es legal?</h3>
              <p>Sí, tiene plena validez jurídica en Colombia.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto civil en Bogotá?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolverlo mediante conciliación de forma rápida,
            legal y sin procesos judiciales largos.
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
