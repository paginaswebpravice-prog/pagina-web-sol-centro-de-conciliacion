"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ArrendamientoComercialContent() {
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
            Conciliación en arrendamientos en Colombia
          </span>

          <h1 className={styles.title}>
            Arrendamiento comercial y conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            El arrendamiento comercial en Colombia es una figura clave para el
            desarrollo de negocios en locales, oficinas y establecimientos de
            comercio. Sin embargo, este tipo de contratos suele generar
            conflictos entre arrendadores y arrendatarios.
          </p>

          <p className={styles.heroText}>
            La conciliación es una herramienta efectiva para resolver estos
            conflictos de manera rápida, legal y sin necesidad de procesos
            judiciales extensos.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es el arrendamiento comercial?
          </h2>

          <p className={styles.paragraph}>
            El arrendamiento comercial es el contrato mediante el cual se
            alquila un inmueble destinado a actividades económicas como tiendas,
            oficinas, restaurantes o cualquier negocio.
          </p>

          <p className={styles.paragraph}>
            En Colombia, este tipo de contratos está regulado por normas civiles
            y comerciales que establecen derechos y obligaciones para ambas
            partes.
          </p>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos comunes en arrendamiento comercial
          </h2>

          <ul className={styles.list}>
            <li>Incumplimiento en el pago del canon de arrendamiento.</li>
            <li>Terminación anticipada del contrato.</li>
            <li>Problemas con la entrega del local comercial.</li>
            <li>Daños en el inmueble o adecuaciones no autorizadas.</li>
            <li>Incrementos en el canon de arrendamiento.</li>
            <li>Uso indebido del inmueble comercial.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, la conciliación permite resolver estos conflictos sin
              necesidad de iniciar procesos judiciales largos y costosos.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación en arrendamiento comercial
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Continuidad del negocio</h3>
              <p>
                Permite evitar cierres o interrupciones de actividades
                comerciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Solución rápida</h3>
              <p>Resuelve conflictos sin procesos judiciales prolongados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdo legal</h3>
              <p>
                El acta de conciliación tiene plena validez jurídica en
                Colombia.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación en Colombia
            para resolver sus diferencias relacionadas con el contrato de
            arrendamiento comercial.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia se revisan las obligaciones contractuales y se
            buscan acuerdos que beneficien a ambas partes.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Acuerdos de pago de cánones vencidos.</li>
            <li>Terminación anticipada del contrato.</li>
            <li>Reducción o ajuste del canon de arrendamiento.</li>
            <li>Entrega voluntaria del local comercial.</li>
            <li>Compensaciones por mejoras o daños.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede negociar un local comercial?</h3>
              <p>
                Sí, mediante conciliación se pueden acordar pagos, plazos o
                terminación del contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>
              <p>
                No, pero es una alternativa muy efectiva para evitar litigios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es legalmente válido?</h3>
              <p>
                Sí, el acta de conciliación tiene plena validez en Colombia.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes conflictos en un local comercial?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolver conflictos de arrendamiento comercial en
            Colombia mediante conciliación rápida y legal.
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
