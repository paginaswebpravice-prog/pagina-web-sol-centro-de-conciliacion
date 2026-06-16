"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DanosInmuebleContent() {
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
            Daños en inmueble arrendado en Colombia
          </h1>

          <p className={styles.heroText}>
            Los daños en un inmueble arrendado son una de las causas más
            frecuentes de conflicto entre arrendador y arrendatario en Colombia.
            Estas situaciones pueden generar desacuerdos sobre responsabilidad y
            costos de reparación.
          </p>

          <p className={styles.heroText}>
            La conciliación permite resolver estos conflictos de manera rápida y
            legal, evitando procesos judiciales y facilitando acuerdos entre las
            partes.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se consideran daños en un inmueble arrendado?
          </h2>

          <p className={styles.paragraph}>
            Son afectaciones al inmueble que van más allá del desgaste normal
            por uso, incluyendo daños en paredes, pisos, instalaciones o
            mobiliario cuando aplica.
          </p>

          <p className={styles.paragraph}>
            Estos daños pueden ser responsabilidad del arrendatario si se
            originan por mal uso o negligencia.
          </p>
        </div>

        {/* TIPOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Tipos de daños más comunes</h2>

          <ul className={styles.list}>
            <li>Daños en paredes o pintura.</li>
            <li>Desperfectos en pisos o puertas.</li>
            <li>Problemas en instalaciones eléctricas o hidráulicas.</li>
            <li>Daños en electrodomésticos incluidos en el arriendo.</li>
            <li>Roturas de vidrios o ventanas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, no todos los daños son responsabilidad del
              arrendatario; el desgaste natural es asumido por el arrendador.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo ayuda la conciliación?</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Define responsabilidades</h3>
              <p>
                Permite determinar quién debe asumir los costos de reparación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita conflictos legales</h3>
              <p>
                Reduce la necesidad de procesos judiciales por daños en el
                inmueble.
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
            ¿Cómo se resuelven los conflictos por daños?
          </h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación en Colombia
            para evaluar los daños y llegar a un acuerdo sobre reparaciones o
            compensaciones económicas.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, se firma un acta con valor legal obligatorio.
          </p>
        </div>

        {/* RESPONSABILIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Responsabilidad de los daños</h2>

          <ul className={styles.list}>
            <li>Arrendatario: daños por mal uso o negligencia.</li>
            <li>Arrendador: deterioro natural del inmueble.</li>
            <li>Ambos: acuerdos especiales en el contrato.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Quién paga los daños en un arriendo?</h3>
              <p>
                Depende del origen del daño: uso indebido o desgaste natural.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se pueden negociar los daños?</h3>
              <p>
                Sí, mediante conciliación se pueden acordar pagos o
                reparaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>
                Se puede iniciar un proceso judicial para definir
                responsabilidades.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto por daños en un inmueble?
          </h3>

          <p className={styles.ctaText}>
            Resuelve conflictos de arrendamiento mediante conciliación rápida y
            legal en Colombia.
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
