"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

const conciliacionCategorias = [
  {
    title: "Conciliación civil",
    description:
      "La conciliación civil en Colombia permite resolver conflictos cotidianos entre personas naturales o jurídicas sin necesidad de acudir inmediatamente a un proceso judicial.",
    items: [
      "Deudas y acuerdos de pago",
      "Responsabilidad civil y daños",
      "Incumplimientos contractuales",
      "Problemas entre vecinos",
      "Conflictos de arrendamiento",
      "Obligaciones civiles",
      "Acuerdos económicos",
    ],
  },
  {
    title: "Conciliación de familia",
    description:
      "La conciliación de familia en Bogotá y Colombia es uno de los mecanismos más utilizados para solucionar conflictos familiares de forma rápida y legal.",
    items: [
      "Cuotas de alimentos",
      "Régimen de visitas",
      "Custodia y acuerdos de crianza",
      "Gastos del menor",
      "Separación de bienes",
      "Conflictos familiares",
      "Acuerdos parentales",
    ],
  },
  {
    title: "Conciliación laboral",
    description:
      "La conciliación laboral permite solucionar controversias entre trabajadores y empleadores mediante acuerdos legales verificables y con efectos jurídicos.",
    items: [
      "Liquidaciones laborales",
      "Pagos pendientes",
      "Acuerdos de terminación",
      "Prestaciones sociales",
      "Conciliaciones laborales",
      "Indemnizaciones",
      "Acuerdos entre trabajador y empresa",
    ],
  },
  {
    title: "Conciliación comercial",
    description:
      "Las empresas en Bogotá y Colombia utilizan la conciliación comercial para resolver conflictos financieros y contractuales de manera más eficiente.",
    items: [
      "Facturas y servicios prestados",
      "Acuerdos entre socios",
      "Incumplimientos contractuales",
      "Recuperación de cartera",
      "Negociación de obligaciones comerciales",
      "Acuerdos empresariales",
      "Cobro de obligaciones",
    ],
  },
];

export default function QueAsuntosSePuedenConciliarContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué asuntos se pueden conciliar en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Colombia pueden conciliarse asuntos civiles, comerciales, laborales y familiares, siempre que exista posibilidad legal de negociación entre las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Las deudas se pueden conciliar en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las deudas, acuerdos de pago y recuperación de cartera son algunos de los asuntos más conciliados en Bogotá y Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse judicialmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los conflictos familiares se pueden conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En Colombia es posible conciliar asuntos relacionados con alimentos, custodia, visitas y acuerdos familiares.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué asuntos se pueden conciliar en Colombia?",
    description:
      "Conoce qué asuntos se pueden conciliar en Bogotá y Colombia. Guía sobre conciliación civil, familiar, laboral y comercial con validez jurídica.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    articleSection: "Conciliación Extrajudicial",
    keywords:
      "qué asuntos se pueden conciliar en Colombia, conciliación en Bogotá, conciliación civil Colombia, conciliación familiar Bogotá, conciliación comercial Colombia",
    about: [
      "Conciliación en Colombia",
      "Conciliación civil",
      "Conciliación familiar",
      "Conciliación laboral",
      "Conciliación comercial",
    ],
  };

  return (
    <>
      <Head>
        <title>
          ¿Qué asuntos se pueden conciliar en Colombia? | Guía Bogotá 2026
        </title>

        <meta
          name="description"
          content="Descubre qué asuntos se pueden conciliar en Bogotá y Colombia. Conoce los principales conflictos conciliables en derecho civil, familiar, laboral y comercial."
        />

        <meta
          name="keywords"
          content="qué asuntos se pueden conciliar en Colombia, conciliación en Bogotá, conciliación civil Colombia, conciliación laboral Bogotá, conciliación familiar Colombia"
        />

        <meta
          property="og:title"
          content="¿Qué asuntos se pueden conciliar en Colombia?"
        />

        <meta
          property="og:description"
          content="Guía completa sobre asuntos conciliables en Bogotá y Colombia: conflictos civiles, familiares, laborales y comerciales."
        />

        <meta property="og:type" content="article" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <section id="casos" className={styles.articleWrapper}>
        <motion.article
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* HERO */}

          <div className={styles.heroContent}>
            <span className={styles.badge}>
              Guía legal de conciliación en Colombia
            </span>

            <h1 className={styles.title}>
              ¿Qué asuntos se pueden conciliar en Colombia?
            </h1>

            <p className={styles.heroText}>
              En Colombia, la conciliación permite resolver múltiples conflictos
              legales sin necesidad de acudir directamente a un proceso
              judicial. Este mecanismo es ampliamente utilizado en Bogotá y en
              todo el país para alcanzar acuerdos rápidos, prácticos y con plena
              validez jurídica.
            </p>

            <p className={styles.heroText}>
              La conciliación extrajudicial en derecho se ha convertido en una
              de las alternativas más importantes para solucionar conflictos
              civiles, comerciales, familiares y laborales en Bogotá y otras
              ciudades de Colombia.
            </p>

            <p className={styles.heroText}>
              Gracias a este mecanismo, miles de personas y empresas logran
              resolver conflictos mediante acuerdos legales sin enfrentar
              procesos judiciales extensos y costosos.
            </p>
          </div>

          {/* INTRO */}

          <div className={styles.contentSection}>
            <p className={styles.paragraph}>
              En un centro de conciliación en Bogotá o en cualquier ciudad de
              Colombia, normalmente se tramitan conflictos civiles, comerciales,
              laborales y de familia. La conciliación busca evitar litigios
              prolongados, reducir costos y facilitar soluciones más ágiles para
              ambas partes.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, no todos los conflictos son conciliables. La ley
              colombiana establece que únicamente pueden conciliarse aquellos
              asuntos donde las partes tengan capacidad legal para negociar y
              llegar voluntariamente a acuerdos.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación extrajudicial en Bogotá y Colombia es
                especialmente útil cuando existe disposición para negociar y
                construir soluciones que beneficien a las partes involucradas.
              </p>
            </div>
          </div>

          {/* CATEGORÍAS */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Principales asuntos que se pueden conciliar en Bogotá y Colombia
            </h2>

            <p className={styles.paragraph}>
              Los centros de conciliación en Colombia manejan diariamente
              conflictos relacionados con obligaciones económicas, acuerdos
              familiares, problemas contractuales y controversias comerciales.
            </p>

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

                  <p className={styles.cardDescription}>
                    {category.description}
                  </p>

                  <ul className={styles.list}>
                    {category.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* BENEFICIOS */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de la conciliación extrajudicial en Colombia
            </h2>

            <ul className={styles.list}>
              <li>Evita procesos judiciales prolongados.</li>
              <li>Reduce costos legales y procesales.</li>
              <li>Permite acuerdos rápidos y flexibles.</li>
              <li>Favorece el diálogo entre las partes.</li>
              <li>Brinda soluciones prácticas y legales.</li>
              <li>Puede realizarse de manera presencial o virtual.</li>
              <li>El acta de conciliación tiene fuerza ejecutiva.</li>
              <li>Ayuda a descongestionar los despachos judiciales.</li>
            </ul>
          </div>

          {/* IMPORTANTE */}

          <div className={styles.noteBox}>
            <h3>Importante</h3>

            <p>
              No todos los conflictos son conciliables en Colombia. Existen
              asuntos que requieren obligatoriamente una decisión judicial o
              involucran derechos que no pueden negociarse libremente.
            </p>

            <p>
              Por esta razón, es recomendable recibir orientación jurídica antes
              de iniciar una conciliación en Bogotá o cualquier ciudad del país.
            </p>
          </div>

          {/* FAQ */}

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
                  laborales y de familia, siempre que exista posibilidad legal
                  de llegar a acuerdos entre las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <p className={styles.faqQuestion}>
                  ¿Las deudas se pueden conciliar?
                </p>

                <p className={styles.faqAnswer}>
                  Sí. Las deudas, acuerdos de pago y recuperación de cartera son
                  algunos de los conflictos más frecuentes en conciliación en
                  Bogotá y Colombia.
                </p>
              </div>

              <div className={styles.faqItem}>
                <p className={styles.faqQuestion}>
                  ¿Los conflictos laborales son conciliables?
                </p>

                <p className={styles.faqAnswer}>
                  Sí. Liquidaciones, pagos pendientes y algunos acuerdos
                  laborales pueden resolverse mediante conciliación.
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

          {/* CTA */}

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas orientación sobre conciliación en Bogotá o Colombia?
            </h3>

            <p className={styles.ctaText}>
              Recibe asesoría sobre conciliación extrajudicial, acuerdos legales
              y resolución de conflictos civiles, comerciales, familiares y
              laborales en Bogotá y toda Colombia.
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
    </>
  );
}
