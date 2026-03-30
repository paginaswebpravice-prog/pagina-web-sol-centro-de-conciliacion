"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaAlimentos() {
  return (
    <>
      {/* ================= SEO STRUCTURED DATA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Acta de conciliación de alimentos en Colombia (ejemplo y guía completa)",
              description:
                "Guía completa sobre el acta de conciliación de alimentos en Colombia, incluyendo ejemplo, requisitos legales, artículo 411 del Código Civil y recomendaciones prácticas en Bogotá.",
              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://www.cobrandoonline.com/conciliacion-alimentos-colombia",
              },
              about: [
                "conciliación en Colombia",
                "cuota alimentaria Bogotá",
                "derecho de familia Colombia",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es un acta de conciliación de alimentos en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un documento legal donde se fija la cuota alimentaria, forma de pago y obligaciones entre las partes, con efectos jurídicos exigibles en Colombia.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si no se cumple un acta de alimentos en Bogotá o Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El incumplimiento permite iniciar procesos legales para exigir el pago, incluyendo ejecución judicial y posibles sanciones.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Conciliación de alimentos en Colombia",
              areaServed: {
                "@type": "Place",
                name: "Bogotá, Colombia",
              },
            },
          ]),
        }}
      />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="acta-alimentos"
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h1 className={styles.title}>
              Acta de conciliación de alimentos en Colombia (ejemplo completo y
              guía 2026)
            </motion.h1>

            <p className={styles.text}>
              Si estás buscando{" "}
              <strong>“acta de conciliación de alimentos en Colombia”</strong> o
              <strong> “ejemplo de cuota alimentaria en Bogotá”</strong>, este
              contenido te explica cómo redactarla correctamente, qué exige la
              ley colombiana y cómo asegurar que el acuerdo sea realmente
              ejecutable.
            </p>

            <p className={styles.text}>
              En ciudades como <strong>Bogotá</strong>, este tipo de
              conciliación es uno de los mecanismos más utilizados en derecho de
              familia, ya que permite evitar procesos judiciales largos y
              establecer acuerdos claros sobre la manutención de hijos o
              personas dependientes.
            </p>

            {/* ================= CONTEXTO LEGAL ================= */}
            <h2 className={styles.subTitle}>
              ¿Qué establece el artículo 411 del Código Civil colombiano?
            </h2>

            <p className={styles.text}>
              El <strong>artículo 411 del Código Civil en Colombia</strong>{" "}
              define quiénes tienen la obligación de suministrar alimentos,
              incluyendo padres, hijos y otros familiares según el caso.
            </p>

            <p className={styles.text}>
              En la práctica, esto significa que una{" "}
              <strong>conciliación de alimentos en Bogotá o Colombia</strong>
              debe basarse en:
            </p>

            <ul className={styles.list}>
              <li>Capacidad económica del obligado.</li>
              <li>Necesidades reales del menor o beneficiario.</li>
              <li>Proporcionalidad y sostenibilidad del acuerdo.</li>
            </ul>

            <div className={styles.note}>
              Consejo SEO + legal: incluir soportes de ingresos y gastos aumenta
              la validez del acuerdo y su aceptación en centros de conciliación
              en Colombia.
            </div>

            {/* ================= CONTENIDO SEO PROFUNDO ================= */}
            <h2 className={styles.subTitle}>
              ¿Qué debe contener un acta de conciliación de alimentos bien
              hecha?
            </h2>

            <p className={styles.text}>
              Para que un acta tenga validez y sea ejecutable en Colombia, debe
              responder claramente: quién paga, cuánto paga, cuándo paga y cómo
              se verifica el cumplimiento.
            </p>

            <ul className={styles.list}>
              <li>Identificación completa de las partes.</li>
              <li>Datos del menor o beneficiario.</li>
              <li>Valor exacto de la cuota alimentaria.</li>
              <li>Forma de pago (transferencia, consignación, etc.).</li>
              <li>Fechas específicas de pago.</li>
              <li>Reglas sobre gastos extraordinarios.</li>
              <li>Cláusulas de incumplimiento.</li>
            </ul>

            {/* ================= MODELO ================= */}
            <h2 className={styles.subTitle}>
              Ejemplo de acta de conciliación de alimentos en Colombia
            </h2>

            <pre className={styles.pre}>
              {`ACTA DE CONCILIACIÓN (ALIMENTOS) – COLOMBIA

Ciudad: Bogotá D.C.
Fecha: [●]

I. PARTES
Solicitante: [●] - CC [●]
Citado: [●] - CC [●]

II. BENEFICIARIO
Menor: [Nombre] – Registro civil [●]

III. ACUERDOS

1. Cuota alimentaria:
El obligado pagará $[●] COP mensuales dentro de los primeros [●] días de cada mes.

2. Forma de pago:
Transferencia bancaria a la cuenta [●].

3. Gastos extraordinarios:
Serán asumidos en proporción [●] y soportados con facturas.

4. Incumplimiento:
Se podrá exigir el cumplimiento por vía legal en Colombia.

Firmas…`}
            </pre>

            {/* ================= FAQ SEO ================= */}
            <h2 className={styles.subTitle}>
              Preguntas frecuentes sobre conciliación de alimentos en Colombia
            </h2>

            <div className={styles.faq}>
              <h4>¿El acta de conciliación tiene validez legal?</h4>
              <p>
                Sí, tiene efectos jurídicos y puede ser ejecutada judicialmente.
              </p>

              <h4>¿Se puede hacer conciliación sin abogado en Bogotá?</h4>
              <p>Sí, en centros de conciliación autorizados en Colombia.</p>

              <h4>¿Qué pasa si no se paga la cuota?</h4>
              <p>
                Se puede iniciar proceso de ejecución o incluso acciones
                penales.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}
