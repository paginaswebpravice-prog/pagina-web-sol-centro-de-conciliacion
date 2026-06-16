"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function AcuerdosCivilesContent() {
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
          <span className={styles.badge}>Conciliación y acuerdos civiles</span>

          <h1 className={styles.title}>
            Acuerdos civiles extrajudiciales en Colombia
          </h1>

          <p className={styles.heroText}>
            Los acuerdos civiles extrajudiciales son una alternativa eficaz para
            resolver conflictos sin necesidad de iniciar un proceso judicial.
            Mediante el diálogo y la conciliación, las partes pueden llegar a
            soluciones rápidas, económicas y con plena seguridad jurídica.
          </p>

          <p className={styles.heroText}>
            En Colombia, este mecanismo es ampliamente utilizado para resolver
            disputas relacionadas con deudas, incumplimientos de contratos,
            conflictos entre vecinos, arrendamientos y otras controversias de
            naturaleza civil.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un acuerdo civil extrajudicial?
          </h2>

          <p className={styles.paragraph}>
            Es un acuerdo voluntario celebrado entre dos o más personas para
            solucionar un conflicto civil sin acudir inicialmente a un juez.
          </p>

          <p className={styles.paragraph}>
            Cuando el acuerdo se logra mediante conciliación, puede quedar
            plasmado en un acta que genera efectos jurídicos y brinda seguridad
            a las partes involucradas.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite que las partes construyan soluciones
              adaptadas a sus necesidades, evitando los costos y tiempos de un
              proceso judicial tradicional.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos que pueden resolverse mediante acuerdos civiles
          </h2>

          <ul className={styles.list}>
            <li>Deudas entre particulares.</li>
            <li>Incumplimientos contractuales.</li>
            <li>Conflictos por arrendamiento.</li>
            <li>Daños y perjuicios.</li>
            <li>Responsabilidad civil.</li>
            <li>Problemas de convivencia vecinal.</li>
            <li>Obligaciones económicas pendientes.</li>
            <li>Conflictos comerciales de menor complejidad.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de los acuerdos civiles extrajudiciales
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menor tiempo</h3>

              <p>
                Los acuerdos pueden alcanzarse en semanas, mientras que un
                proceso judicial puede tardar meses o años.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Se reducen gastos asociados a litigios, trámites y actuaciones
                judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor flexibilidad</h3>

              <p>
                Las partes pueden construir soluciones personalizadas según sus
                necesidades particulares.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Validez legal de los acuerdos</h2>

          <p className={styles.paragraph}>
            Cuando un acuerdo es alcanzado mediante conciliación ante un centro
            autorizado, el acta resultante puede tener efectos jurídicos
            obligatorios para las partes.
          </p>

          <p className={styles.paragraph}>
            Esto significa que el compromiso adquirido puede exigirse en caso de
            incumplimiento, brindando seguridad jurídica a quienes participan en
            el proceso conciliatorio.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene intentar un acuerdo civil?
          </h2>

          <p className={styles.paragraph}>
            Siempre que exista disposición de diálogo entre las partes, la
            conciliación representa una excelente oportunidad para resolver el
            conflicto sin llegar a instancias judiciales.
          </p>

          <p className={styles.paragraph}>
            Además de ahorrar tiempo y dinero, los acuerdos civiles ayudan a
            preservar relaciones personales, familiares y comerciales que
            podrían deteriorarse durante un litigio prolongado.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es obligatorio demandar primero?</h3>

              <p>
                No. En muchos casos la conciliación puede intentarse antes de
                iniciar cualquier proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo queda por escrito?</h3>

              <p>
                Sí. Los acuerdos conciliatorios normalmente quedan consignados
                en un acta formal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Sirve para recuperar dinero?</h3>

              <p>
                Sí. Muchas obligaciones económicas pueden resolverse mediante
                acuerdos civiles extrajudiciales.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto civil?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, acuerdos
            extrajudiciales, obligaciones económicas y resolución de conflictos
            en Colombia.
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
