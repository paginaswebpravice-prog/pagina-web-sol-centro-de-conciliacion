"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function EntregaAnticipadaContent() {
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
            Entrega anticipada de inmueble arrendado en Colombia
          </h1>

          <p className={styles.heroText}>
            La entrega anticipada de un inmueble arrendado ocurre cuando el
            arrendatario decide finalizar el contrato antes de la fecha
            establecida. En Colombia, esta situación puede generar conflictos si
            no se maneja adecuadamente.
          </p>

          <p className={styles.heroText}>
            La conciliación permite llegar a acuerdos entre arrendador y
            arrendatario para evitar sanciones, penalidades o procesos
            judiciales derivados de la terminación anticipada del contrato.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la entrega anticipada de inmueble?
          </h2>

          <p className={styles.paragraph}>
            Es el acto mediante el cual el arrendatario entrega el inmueble al
            arrendador antes de la fecha de finalización del contrato de
            arrendamiento.
          </p>

          <p className={styles.paragraph}>
            Esta decisión puede ser voluntaria o derivarse de situaciones
            económicas, laborales o personales.
          </p>
        </div>

        {/* CAUSAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Causas comunes de entrega anticipada
          </h2>

          <ul className={styles.list}>
            <li>Cambios de ciudad o residencia.</li>
            <li>Dificultades económicas.</li>
            <li>Problemas con el inmueble.</li>
            <li>Incumplimientos contractuales.</li>
            <li>Acuerdos entre las partes.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, la conciliación permite formalizar la entrega
              anticipada evitando conflictos legales o penalidades innecesarias.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación en entrega anticipada
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Evita sanciones</h3>
              <p>
                Permite negociar posibles penalidades del contrato de forma
                amistosa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Salida ordenada</h3>
              <p>
                Facilita la entrega del inmueble sin conflictos entre las
                partes.
              </p>
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
          <h2 className={styles.subtitle}>
            ¿Cómo se realiza la entrega anticipada?
          </h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación en Colombia
            para acordar las condiciones de terminación anticipada del contrato.
          </p>

          <p className={styles.paragraph}>
            En la audiencia se definen aspectos como entrega del inmueble, pagos
            pendientes o compensaciones.
          </p>
        </div>

        {/* CONDICIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Elementos importantes del acuerdo</h2>

          <ul className={styles.list}>
            <li>Fecha de entrega del inmueble.</li>
            <li>Estado del inmueble al momento de entrega.</li>
            <li>Pagos pendientes o acuerdos económicos.</li>
            <li>Posibles penalidades o su condonación.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo entregar el inmueble antes del contrato?</h3>
              <p>
                Sí, siempre que exista acuerdo o se cumplan las condiciones del
                contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Debo pagar penalidad?</h3>
              <p>
                Depende del contrato, pero puede negociarse mediante
                conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>
              <p>
                No, pero es una forma efectiva de evitar conflictos legales.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas entregar un inmueble antes de tiempo?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolver la entrega anticipada de inmuebles mediante
            conciliación legal en Colombia, evitando conflictos y sanciones.
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
