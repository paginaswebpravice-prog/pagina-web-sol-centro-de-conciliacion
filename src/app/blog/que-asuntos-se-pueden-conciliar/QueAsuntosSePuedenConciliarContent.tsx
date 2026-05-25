"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

const conciliacionCategorias = [
  {
    title: "Conciliación civil",
    description:
      "La conciliación civil permite resolver conflictos cotidianos entre personas naturales o jurídicas sin acudir a un proceso judicial.",
    items: [
      "Deudas y acuerdos de pago",
      "Responsabilidad civil y daños",
      "Incumplimientos contractuales",
      "Problemas entre vecinos",
      "Conflictos de arrendamiento",
    ],
  },
  {
    title: "Conciliación de familia",
    description:
      "Los conflictos familiares son uno de los asuntos más conciliados en Colombia debido a la importancia de llegar a acuerdos rápidos y estables.",
    items: [
      "Cuotas de alimentos",
      "Régimen de visitas",
      "Custodia y acuerdos de crianza",
      "Gastos del menor",
      "Separación de bienes",
    ],
  },
  {
    title: "Conciliación laboral",
    description:
      "La conciliación laboral permite solucionar controversias entre trabajadores y empleadores mediante acuerdos legales y verificables.",
    items: [
      "Liquidaciones laborales",
      "Pagos pendientes",
      "Acuerdos de terminación",
      "Prestaciones sociales",
      "Conciliaciones ante conflictos laborales",
    ],
  },
  {
    title: "Conciliación comercial",
    description:
      "Las empresas utilizan la conciliación comercial para resolver conflictos financieros y contractuales de manera más eficiente.",
    items: [
      "Facturas y servicios prestados",
      "Acuerdos entre socios",
      "Incumplimientos contractuales",
      "Recuperación de cartera",
      "Negociación de obligaciones comerciales",
    ],
  },
];

export default function QueAsuntosSePuedenConciliarContent() {
  return (
    <section id="casos" className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ================= HERO ================= */}

        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Guía legal de conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            ¿Qué asuntos se pueden conciliar en Colombia?
          </h1>

          <p className={styles.heroText}>
            En Colombia, la conciliación permite resolver múltiples conflictos
            legales sin necesidad de acudir directamente a un proceso judicial.
            Este mecanismo es ampliamente utilizado en Bogotá y en todo el país
            para alcanzar acuerdos rápidos, prácticos y con plena validez
            jurídica.
          </p>

          <p className={styles.heroText}>
            Sin embargo, no todos los conflictos pueden conciliarse. La ley
            establece que únicamente son conciliables aquellos asuntos donde las
            partes tengan capacidad de negociación sobre sus derechos y puedan
            llegar libremente a un acuerdo.
          </p>
        </div>

        {/* ================= INTRO ================= */}

        <div className={styles.contentSection}>
          <p className={styles.paragraph}>
            En un centro de conciliación en Bogotá o en cualquier ciudad de
            Colombia, normalmente se tramitan conflictos civiles, comerciales,
            laborales y de familia. La conciliación busca evitar litigios
            prolongados, reducir costos y facilitar soluciones más ágiles para
            ambas partes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación extrajudicial en derecho es especialmente útil
              cuando existe disposición para negociar y construir acuerdos que
              beneficien a las partes involucradas.
            </p>
          </div>
        </div>

        {/* ================= CATEGORÍAS ================= */}

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales asuntos que se pueden conciliar
          </h2>

          <div className={styles.cardsGrid}>
            {conciliacionCategorias.map((category, index) => (
              <motion.div
                key={index}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.12,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
              >
                <h3>{category.title}</h3>

                <p className={styles.cardDescription}>{category.description}</p>

                <ul className={styles.list}>
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= IMPORTANTE ================= */}

        <div className={styles.noteBox}>
          <h3>Importante</h3>

          <p>
            No todos los conflictos son conciliables. Existen asuntos que
            requieren obligatoriamente una decisión judicial o involucran
            derechos que no pueden negociarse libremente. Por esta razón, es
            recomendable recibir orientación previa antes de iniciar una
            conciliación.
          </p>
        </div>

        {/* ================= FAQ ================= */}

        <div className={styles.divider}></div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre asuntos conciliables
          </h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <p className={styles.faqQuestion}>
                ¿Qué asuntos se pueden conciliar en Colombia?
              </p>

              <p className={styles.faqAnswer}>
                Generalmente se pueden conciliar asuntos civiles, comerciales,
                laborales y de familia, siempre que exista posibilidad legal de
                llegar a acuerdos entre las partes.
              </p>
            </div>

            <div className={styles.faqItem}>
              <p className={styles.faqQuestion}>
                ¿Las deudas se pueden conciliar?
              </p>

              <p className={styles.faqAnswer}>
                Sí. Las deudas, acuerdos de pago y recuperación de cartera son
                algunos de los conflictos más frecuentes en conciliación.
              </p>
            </div>

            <div className={styles.faqItem}>
              <p className={styles.faqQuestion}>
                ¿Los conflictos laborales son conciliables?
              </p>

              <p className={styles.faqAnswer}>
                Sí. Liquidaciones, pagos pendientes y algunos acuerdos laborales
                pueden resolverse mediante conciliación.
              </p>
            </div>

            <div className={styles.faqItem}>
              <p className={styles.faqQuestion}>
                ¿La conciliación tiene validez legal?
              </p>

              <p className={styles.faqAnswer}>
                Sí. El acuerdo logrado queda registrado en un acta de
                conciliación con efectos jurídicos y fuerza ejecutiva.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas orientación sobre conciliación?
          </h3>

          <p className={styles.ctaText}>
            Recibe asesoría sobre conciliación extrajudicial, acuerdos legales y
            resolución de conflictos en Bogotá y toda Colombia.
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
