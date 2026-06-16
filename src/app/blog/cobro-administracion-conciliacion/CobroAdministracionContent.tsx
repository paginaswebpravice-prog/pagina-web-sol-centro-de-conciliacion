"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CobroAdministracionContent() {
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
            Conciliación en propiedad horizontal
          </span>

          <h1 className={styles.title}>
            Cobro de administración mediante conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            El cobro de cuotas de administración es uno de los problemas más
            frecuentes en conjuntos residenciales en Colombia. Cuando los
            propietarios o residentes dejan de pagar, se generan deudas que
            afectan el funcionamiento de la copropiedad.
          </p>

          <p className={styles.heroText}>
            La conciliación es una alternativa efectiva para recuperar estas
            obligaciones de manera rápida, legal y sin procesos judiciales
            extensos.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es el cobro de administración?
          </h2>

          <p className={styles.paragraph}>
            Es el proceso mediante el cual la administración de un conjunto
            residencial cobra las cuotas de mantenimiento y funcionamiento a los
            propietarios o residentes.
          </p>

          <p className={styles.paragraph}>
            Estas cuotas son obligatorias y se destinan al sostenimiento de las
            zonas comunes y servicios del conjunto.
          </p>
        </div>

        {/* PROBLEMAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Problemas comunes en el cobro de administración
          </h2>

          <ul className={styles.list}>
            <li>Morosidad en el pago de cuotas.</li>
            <li>Desacuerdos sobre valores cobrados.</li>
            <li>Falta de acuerdos de pago.</li>
            <li>Acumulación de cartera en el conjunto.</li>
            <li>Conflictos entre administración y propietarios.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, la conciliación permite recuperar estas deudas sin
              necesidad de procesos judiciales largos y costosos.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios del cobro por conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Recuperación rápida</h3>
              <p>Permite llegar a acuerdos de pago sin procesos judiciales.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita demandas</h3>
              <p>
                Reduce la necesidad de procesos ejecutivos contra propietarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos legales</h3>
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
            La administración o el propietario pueden acudir a un centro de
            conciliación para buscar un acuerdo sobre las cuotas pendientes.
          </p>

          <p className={styles.paragraph}>
            Se pueden establecer plazos, descuentos o acuerdos de pago
            flexibles.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Acuerdos de pago en cuotas.</li>
            <li>Condonación parcial de intereses.</li>
            <li>Reestructuración de deuda.</li>
            <li>Pago inmediato con descuento.</li>
            <li>Compromisos formales de pago.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se pueden cobrar cuotas atrasadas?</h3>
              <p>Sí, mediante conciliación o procesos legales en Colombia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>Se puede iniciar un proceso judicial de cobro.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, el acta de conciliación tiene fuerza legal.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes cartera pendiente en tu conjunto?
          </h3>

          <p className={styles.ctaText}>
            Recupera cuotas de administración mediante conciliación rápida y
            efectiva en Colombia.
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
