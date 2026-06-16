"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionEmpleadasDomesticasContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Derecho laboral en Colombia</span>

          <h1 className={styles.title}>
            Conciliación con empleadas domésticas en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos laborales entre empleadores y empleadas domésticas
            son más comunes de lo que muchas personas imaginan. Diferencias
            sobre salarios, liquidaciones, prestaciones sociales, vacaciones o
            terminación del contrato pueden generar desacuerdos importantes.
          </p>

          <p className={styles.heroText}>
            La conciliación laboral permite resolver estas controversias
            mediante el diálogo y la construcción de acuerdos con plena validez
            jurídica, evitando procesos judiciales más largos y costosos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación con empleadas domésticas?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo mediante el cual empleador y trabajadora doméstica
            intentan solucionar un conflicto laboral con la ayuda de un
            conciliador imparcial.
          </p>

          <p className={styles.paragraph}>
            El objetivo es alcanzar acuerdos sobre obligaciones laborales
            pendientes sin necesidad de acudir directamente a un proceso
            judicial.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite encontrar soluciones rápidas, legales y
              menos traumáticas para ambas partes.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Conflictos más frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Liquidación laboral</h3>
              <p>
                Diferencias sobre cesantías, intereses, primas, vacaciones y
                otros conceptos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Salarios pendientes</h3>
              <p>Reclamaciones por pagos atrasados o valores no cancelados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Terminación del contrato</h3>
              <p>
                Acuerdos relacionados con renuncias, despidos o finalización de
                la relación laboral.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Temas que pueden conciliarse</h2>

          <ul className={styles.list}>
            <li>Pago de salarios pendientes.</li>
            <li>Prestaciones sociales.</li>
            <li>Vacaciones no disfrutadas.</li>
            <li>Liquidaciones laborales.</li>
            <li>Indemnizaciones.</li>
            <li>Acuerdos de pago.</li>
            <li>Terminación de contratos.</li>
            <li>Reconocimiento de derechos laborales.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación laboral
          </h2>

          <p className={styles.paragraph}>
            La conciliación ofrece ventajas importantes frente a un litigio
            judicial. Permite resolver conflictos en menor tiempo, reduce costos
            y facilita acuerdos adaptados a las necesidades de ambas partes.
          </p>

          <p className={styles.paragraph}>
            Además, evita el desgaste emocional y la incertidumbre que suele
            acompañar los procesos judiciales laborales.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si se alcanza un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes llegan a un acuerdo, este se formaliza mediante un
            acta de conciliación con efectos legales.
          </p>

          <p className={styles.paragraph}>
            El documento establece las obligaciones asumidas por cada parte y
            puede exigirse judicialmente en caso de incumplimiento.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación reemplaza una demanda?</h3>

              <p>
                En muchos casos sí, siempre que se logre un acuerdo
                satisfactorio para ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La empleada doméstica puede reclamar prestaciones?</h3>

              <p>
                Sí. Las prestaciones sociales forman parte de los derechos
                laborales reconocidos por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos y debe ser
                cumplida por las partes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto laboral?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, liquidaciones,
            prestaciones sociales y acuerdos entre empleadores y empleadas
            domésticas en Colombia.
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
