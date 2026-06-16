"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DespidoInjustificadoConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            Conciliación por despido injustificado en Colombia
          </h1>

          <p className={styles.heroText}>
            El despido injustificado es una de las causas más frecuentes de
            conflictos laborales en Colombia. Cuando un trabajador considera que
            su contrato fue terminado sin una causa válida o sin el debido
            procedimiento, puede surgir una controversia respecto a
            indemnizaciones, salarios pendientes o prestaciones sociales.
          </p>

          <p className={styles.heroText}>
            Antes de acudir a un proceso judicial laboral, las partes pueden
            intentar resolver la situación mediante conciliación, alcanzando
            acuerdos rápidos, seguros y con efectos jurídicos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se considera un despido injustificado?
          </h2>

          <p className={styles.paragraph}>
            Se entiende como despido injustificado la terminación unilateral del
            contrato de trabajo sin una causa legal válida o sin cumplir los
            requisitos exigidos por la legislación laboral colombiana.
          </p>

          <p className={styles.paragraph}>
            En estos casos, el trabajador puede reclamar indemnizaciones,
            salarios pendientes, prestaciones sociales y otros derechos que
            considere afectados.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo ayuda la conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            La conciliación permite que empleador y trabajador dialoguen con la
            intervención de un conciliador neutral para encontrar soluciones
            mutuamente aceptables.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo conciliatorio puede resolver la controversia en pocas
              semanas, evitando procesos judiciales que pueden extenderse
              durante meses o incluso años.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Aspectos que pueden conciliarse</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Indemnización</h3>
              <p>
                Acuerdos sobre el valor a reconocer por despido sin justa causa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Liquidación</h3>
              <p>
                Pago de prestaciones sociales, vacaciones y demás conceptos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Salarios pendientes</h3>
              <p>Reconocimiento de valores adeudados al trabajador.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Forma de pago</h3>
              <p>
                Posibilidad de establecer plazos y acuerdos de cumplimiento.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación frente a una demanda
          </h2>

          <ul className={styles.list}>
            <li>Reducción de tiempos de resolución.</li>
            <li>Menores costos para ambas partes.</li>
            <li>Mayor flexibilidad en los acuerdos.</li>
            <li>Evita largos procesos judiciales.</li>
            <li>Genera seguridad jurídica para empleador y trabajador.</li>
            <li>Permite soluciones personalizadas.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si se logra un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes llegan a un acuerdo, este queda consignado en un
            acta de conciliación que tiene validez jurídica y obliga a su
            cumplimiento.
          </p>

          <p className={styles.paragraph}>
            El documento puede servir como respaldo legal y brinda seguridad a
            ambas partes sobre los compromisos asumidos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación reemplaza una demanda laboral?</h3>

              <p>
                En muchos casos sí, siempre que las partes alcancen un acuerdo
                satisfactorio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar?</h3>

              <p>
                Depende del caso concreto, pero suele ser una alternativa
                altamente recomendable.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo tiene validez legal?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos y puede ser
                exigida legalmente.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto por despido injustificado?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación te orientamos para alcanzar acuerdos
            laborales seguros, rápidos y con respaldo jurídico.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
