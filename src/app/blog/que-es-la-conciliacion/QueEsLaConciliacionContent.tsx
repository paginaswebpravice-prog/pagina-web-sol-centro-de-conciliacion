"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function QueEsLaConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ================= HERO ARTÍCULO ================= */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>Guía de conciliación en Colombia</span>

          <h1 className={styles.title}>
            ¿Qué es la conciliación en Colombia y para qué sirve realmente?
          </h1>

          <p className={styles.heroText}>
            La conciliación en Colombia es un mecanismo alternativo de solución
            de conflictos mediante el cual dos o más personas intentan resolver
            una controversia con la ayuda de un conciliador autorizado, evitando
            acudir directamente a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Este procedimiento es ampliamente utilizado en Bogotá y en todo el
            país para resolver conflictos civiles, comerciales, familiares y
            laborales de forma más rápida, económica y eficiente, permitiendo
            que las partes lleguen a acuerdos con plena validez jurídica.
          </p>
        </div>

        {/* ================= INTRO ================= */}
        <div className={styles.contentSection}>
          <p className={styles.paragraph}>
            A diferencia de un juicio tradicional, la conciliación busca que las
            partes construyan conjuntamente una solución al conflicto. Cuando se
            alcanza un acuerdo, este queda plasmado en un{" "}
            <strong>acta de conciliación</strong>, documento que tiene efectos
            legales y puede ser exigido judicialmente en caso de incumplimiento.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, la conciliación extrajudicial en derecho se ha
            convertido en uno de los mecanismos más utilizados en Colombia para
            solucionar conflictos sin necesidad de procesos judiciales largos y
            costosos.
          </p>
        </div>

        {/* ================= PARA QUÉ SIRVE ================= */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Para qué sirve la conciliación?</h2>

          <p className={styles.paragraph}>
            La conciliación sirve para resolver conflictos legales de manera más
            ágil y práctica, evitando en muchos casos acudir a un juez. Este
            mecanismo permite ahorrar tiempo, reducir costos legales y encontrar
            soluciones flexibles adaptadas a las necesidades de las partes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá, muchas personas y empresas utilizan la conciliación
              para resolver conflictos relacionados con contratos,
              arrendamientos, deudas, conflictos familiares, obligaciones
              comerciales y problemas laborales.
            </p>
          </div>
        </div>

        {/* ================= TIPOS ================= */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Tipos de conciliación en Colombia</h2>

          <p className={styles.paragraph}>
            En Colombia existen principalmente dos tipos de conciliación:
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación extrajudicial</h3>

              <p>
                Se realiza antes de iniciar un proceso judicial y generalmente
                se lleva a cabo en centros de conciliación autorizados. En
                muchos casos es un requisito previo para demandar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliación judicial</h3>

              <p>
                Se desarrolla dentro de un proceso ante un juez, quien busca que
                las partes lleguen a un acuerdo antes de continuar con el
                litigio.
              </p>
            </div>
          </div>
        </div>

        {/* ================= BENEFICIOS ================= */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación en Bogotá y Colombia
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Reduce costos legales y gastos procesales.</li>
            <li>Permite acuerdos rápidos y personalizados.</li>
            <li>El acta de conciliación tiene validez jurídica.</li>
            <li>Favorece el diálogo y mejora las relaciones.</li>
            <li>Brinda soluciones prácticas y confidenciales.</li>
            <li>Puede realizarse de forma presencial o virtual.</li>
          </ul>
        </div>

        {/* ================= CÓMO SOLICITAR ================= */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo solicitar una conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Para solicitar una conciliación en Bogotá o en cualquier ciudad de
            Colombia, normalmente se presenta una solicitud ante un centro de
            conciliación autorizado. Posteriormente se programa una audiencia en
            la que las partes intentan llegar a un acuerdo con la ayuda del
            conciliador.
          </p>

          <p className={styles.paragraph}>
            Si las partes logran conciliar, se firma un acta con efectos
            jurídicos obligatorios. Si no existe acuerdo, se expide una
            constancia que puede permitir iniciar un proceso judicial.
          </p>
        </div>

        {/* ================= CTA ================= */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas iniciar una conciliación en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación extrajudicial, audiencias,
            acuerdos legales y solución de conflictos en Bogotá y a nivel
            nacional.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría por WhatsApp
          </a>
        </div>
      </motion.article>
    </section>
  );
}
