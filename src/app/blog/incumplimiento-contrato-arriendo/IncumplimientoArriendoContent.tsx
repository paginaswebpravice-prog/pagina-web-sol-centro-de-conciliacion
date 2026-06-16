"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function IncumplimientoArriendoContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación de arrendamiento en Colombia
          </span>

          <h1 className={styles.title}>
            Conciliación por incumplimiento de contrato de arriendo en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos derivados del incumplimiento de contratos de
            arrendamiento son frecuentes en ciudades como Bogotá y otras
            regiones de Colombia. Estos problemas pueden resolverse de manera
            eficiente mediante conciliación, evitando procesos judiciales largos
            y costosos.
          </p>

          <p className={styles.heroText}>
            La conciliación permite que arrendador y arrendatario lleguen a
            acuerdos sobre pagos pendientes, entrega del inmueble, daños o
            terminación del contrato de arriendo de forma voluntaria y con
            validez legal.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se considera incumplimiento de contrato de arriendo?
          </h2>

          <p className={styles.paragraph}>
            El incumplimiento ocurre cuando una de las partes no cumple con las
            obligaciones establecidas en el contrato de arrendamiento, como el
            pago del canon mensual, el uso adecuado del inmueble o la entrega en
            las condiciones acordadas.
          </p>

          <p className={styles.paragraph}>
            En Colombia, estos conflictos pueden gestionarse mediante
            conciliación antes de acudir a un proceso de restitución de
            inmueble.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos comunes de conflicto en arrendamiento
          </h2>

          <ul className={styles.list}>
            <li>Falta de pago del canon de arrendamiento.</li>
            <li>Incumplimiento en la entrega del inmueble.</li>
            <li>Daños al inmueble por parte del arrendatario.</li>
            <li>Negativa a desocupar el inmueble.</li>
            <li>Disputas por servicios públicos pendientes.</li>
            <li>Terminación anticipada del contrato.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación en Colombia permite evitar procesos de desalojo
              judicial, facilitando acuerdos rápidos entre las partes.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación en contratos de arriendo
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Solución rápida</h3>
              <p>
                Permite resolver conflictos de arrendamiento sin procesos
                judiciales extensos en Bogotá o cualquier ciudad de Colombia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita procesos legales</h3>
              <p>
                Reduce la necesidad de demandas de restitución de inmueble
                arrendado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos legales</h3>
              <p>
                Los acuerdos quedan en un acta con plena validez jurídica en
                Colombia.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona la conciliación en arriendos?
          </h2>

          <p className={styles.paragraph}>
            Una de las partes solicita una audiencia de conciliación ante un
            centro autorizado en Colombia. Durante la audiencia se revisan las
            obligaciones del contrato y se buscan acuerdos entre arrendador y
            arrendatario.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, se firma un acta de conciliación con efectos legales
            obligatorios para ambas partes.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Documentos recomendados</h2>

          <ul className={styles.list}>
            <li>Contrato de arrendamiento.</li>
            <li>Comprobantes de pago del canon.</li>
            <li>Inventario del inmueble.</li>
            <li>Comunicaciones entre las partes.</li>
            <li>Soportes de daños o reparaciones.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar si el inquilino no paga?</h3>
              <p>
                Sí, se pueden acordar pagos, plazos o incluso la entrega del
                inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación reemplaza un desalojo?</h3>
              <p>
                Puede evitarlo si las partes llegan a un acuerdo voluntario.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, el acta de conciliación tiene fuerza legal en Colombia.</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto de arrendamiento en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Recibe asesoría para resolver incumplimientos de contrato de
            arriendo en Bogotá y toda Colombia mediante conciliación rápida,
            legal y efectiva.
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
