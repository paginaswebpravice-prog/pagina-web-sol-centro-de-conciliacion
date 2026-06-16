"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DesocupacionInmuebleContent() {
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
            Desocupación de inmueble mediante conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            La desocupación de un inmueble arrendado puede convertirse en un
            proceso conflictivo cuando el arrendatario no entrega el bien en la
            fecha acordada. En Colombia, la conciliación es una herramienta
            eficaz para lograr la entrega voluntaria del inmueble sin acudir a
            un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Este mecanismo permite a las partes llegar a acuerdos sobre la
            entrega del inmueble, pagos pendientes o compensaciones, evitando
            procesos largos de restitución de inmueble arrendado.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la desocupación de inmueble?
          </h2>

          <p className={styles.paragraph}>
            La desocupación de inmueble se refiere al proceso mediante el cual
            el arrendatario entrega el bien inmueble al arrendador una vez
            finalizado el contrato o cuando existe incumplimiento del mismo.
          </p>

          <p className={styles.paragraph}>
            En Colombia, este proceso puede realizarse de manera voluntaria o
            mediante mecanismos legales como la conciliación.
          </p>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos en los que aplica la conciliación
          </h2>

          <ul className={styles.list}>
            <li>Finalización del contrato de arrendamiento.</li>
            <li>Incumplimiento en el pago del canon.</li>
            <li>Negativa a entregar el inmueble.</li>
            <li>Daños o deterioro del inmueble.</li>
            <li>Acuerdos anticipados de terminación de contrato.</li>
            <li>Conflictos por servicios públicos o deudas asociadas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite acordar la entrega del inmueble sin
              necesidad de iniciar un proceso de restitución judicial en
              Colombia.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación en la desocupación de inmuebles
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Entrega rápida</h3>
              <p>
                Permite recuperar el inmueble en menor tiempo frente a un
                proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita litigios</h3>
              <p>
                Reduce la necesidad de iniciar procesos de restitución de
                inmueble arrendado.
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
            ¿Cómo funciona el proceso de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Una de las partes solicita una audiencia de conciliación ante un
            centro autorizado en Colombia. Durante la audiencia se revisa el
            contrato de arrendamiento y las condiciones de entrega del inmueble.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, se firma un acta de conciliación donde se establecen
            las condiciones y plazos para la desocupación del inmueble.
          </p>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Documentos recomendados</h2>

          <ul className={styles.list}>
            <li>Contrato de arrendamiento.</li>
            <li>Comprobantes de pago del canon.</li>
            <li>Inventario del inmueble.</li>
            <li>Comunicación entre arrendador y arrendatario.</li>
            <li>Soportes de daños o reparaciones.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación obliga a entregar el inmueble?</h3>
              <p>
                Sí, si se firma un acuerdo, este tiene efectos legales en
                Colombia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>
                Se puede iniciar un proceso judicial de restitución de inmueble
                arrendado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es más rápido que un proceso judicial?</h3>
              <p>
                Sí, la conciliación es significativamente más rápida y menos
                costosa.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas recuperar un inmueble en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolver conflictos de arrendamiento mediante
            conciliación rápida, legal y efectiva en Colombia.
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
