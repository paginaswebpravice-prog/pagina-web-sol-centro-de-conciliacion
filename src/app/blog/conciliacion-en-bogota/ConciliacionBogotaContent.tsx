"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionBogotaContent() {
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
          <span className={styles.badge}>Conciliación en Colombia</span>

          <h1 className={styles.title}>
            Conciliación en Bogotá: guía completa
          </h1>

          <p className={styles.heroText}>
            La conciliación en Bogotá es uno de los mecanismos más utilizados
            para resolver conflictos legales sin necesidad de acudir a un juez.
          </p>

          <p className={styles.heroText}>
            Permite llegar a acuerdos rápidos, legales y con plena validez
            jurídica dentro del sistema colombiano.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo alternativo de solución de conflictos donde las
            partes buscan un acuerdo con la ayuda de un conciliador autorizado.
          </p>

          <p className={styles.paragraph}>
            En Bogotá, este proceso se realiza en centros de conciliación,
            notarías y entidades habilitadas.
          </p>
        </div>

        {/* DONDE CONCILIAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Dónde se puede conciliar en Bogotá?
          </h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías con funciones conciliatorias.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas habilitadas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Bogotá cuenta con una amplia red de entidades autorizadas para
              realizar conciliaciones de forma legal y segura.
            </p>
          </div>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos comunes de conciliación en Bogotá
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>
              <p>Conflictos entre arrendadores e inquilinos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Laborales</h3>
              <p>Liquidaciones, salarios y prestaciones sociales.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Civiles</h3>
              <p>Deudas, contratos y obligaciones.</p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Beneficios de conciliar en Bogotá</h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales largos.</li>
            <li>Reduce costos legales.</li>
            <li>Solución rápida del conflicto.</li>
            <li>Validez jurídica del acuerdo.</li>
            <li>Mayor flexibilidad entre las partes.</li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Bogotá</h2>

          <p className={styles.paragraph}>
            La conciliación en Bogotá es clave para descongestionar los
            despachos judiciales y mejorar el acceso a la justicia.
          </p>

          <p className={styles.paragraph}>
            Además, promueve la solución pacífica de conflictos en una ciudad
            con alta demanda de servicios legales.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es gratis conciliar en Bogotá?</h3>
              <p>
                Depende de la entidad; algunos centros ofrecen servicios
                gratuitos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto dura el proceso?</h3>
              <p>Generalmente puede resolverse en una sola audiencia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, si se firma acta de conciliación tiene fuerza legal.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>¿Necesitas conciliar en Bogotá?</h3>

          <p className={styles.ctaText}>
            Recibe asesoría para iniciar tu proceso de conciliación en Bogotá de
            forma rápida y segura.
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
