"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function AcuerdoPagoCanonesContent() {
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
            Acuerdos de pago para cánones vencidos en Colombia
          </h1>

          <p className={styles.heroText}>
            Cuando un arrendatario acumula deudas por cánones de arrendamiento
            vencidos, puede generarse un conflicto legal entre las partes. En
            Colombia, la conciliación permite negociar estos valores y evitar
            procesos judiciales costosos.
          </p>

          <p className={styles.heroText}>
            A través de acuerdos de pago, arrendador y arrendatario pueden
            establecer plazos, montos y condiciones para saldar la deuda de
            manera ordenada y con respaldo legal.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son los cánones de arrendamiento vencidos?
          </h2>

          <p className={styles.paragraph}>
            Los cánones vencidos son los valores del arriendo que no han sido
            pagados dentro de las fechas establecidas en el contrato de
            arrendamiento.
          </p>

          <p className={styles.paragraph}>
            Estas deudas pueden generar intereses, conflictos contractuales y
            eventualmente procesos de restitución del inmueble en Colombia.
          </p>
        </div>

        {/* CAUSAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Causas comunes de mora en el arriendo
          </h2>

          <ul className={styles.list}>
            <li>Pérdida de ingresos del arrendatario.</li>
            <li>Problemas financieros temporales.</li>
            <li>Desacuerdos contractuales.</li>
            <li>Retrasos en pagos laborales o ingresos variables.</li>
            <li>Falta de planeación financiera.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, la conciliación es una alternativa clave para evitar
              que las deudas de arrendamiento escalen a procesos judiciales.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Beneficios de un acuerdo de pago</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Evita procesos legales</h3>
              <p>
                Permite resolver la deuda sin necesidad de demanda judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Flexibilidad de pago</h3>
              <p>
                Se pueden establecer cuotas adaptadas a la capacidad económica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Relación contractual</h3>
              <p>
                Ayuda a mantener una relación más estable entre arrendador y
                arrendatario.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona un acuerdo de pago?
          </h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación en Colombia
            para establecer un acuerdo formal sobre la deuda de cánones
            vencidos.
          </p>

          <p className={styles.paragraph}>
            En la audiencia se definen montos, plazos y condiciones de pago que
            quedan consignados en un acta con valor legal.
          </p>
        </div>

        {/* CONTENIDO CLAVE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Elementos de un acuerdo de pago</h2>

          <ul className={styles.list}>
            <li>Valor total de la deuda.</li>
            <li>Plazos de pago establecidos.</li>
            <li>Cuotas mensuales o parciales.</li>
            <li>Intereses o condonaciones (si aplica).</li>
            <li>Consecuencias del incumplimiento.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede negociar la deuda de arriendo?</h3>
              <p>
                Sí, mediante conciliación es posible acordar pagos y plazos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>
                El arrendador puede iniciar un proceso judicial de cobro o
                restitución del inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, una vez firmado tiene fuerza legal en Colombia.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes deudas de arrendamiento en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a negociar cánones vencidos mediante acuerdos de pago y
            conciliación legal en Colombia.
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
