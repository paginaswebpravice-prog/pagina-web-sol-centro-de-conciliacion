"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function DocumentoFamilia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Acta de conciliación familiar en Colombia: modelo, visitas, alimentos y custodia en Bogotá",
    description:
      "Guía completa sobre conciliación familiar en Colombia y Bogotá. Incluye modelo de acta, acuerdos de visitas, alimentos y recomendaciones legales.",
    author: {
      "@type": "Organization",
      name: "Centro de Conciliación",
    },
    contentLocation: {
      "@type": "Place",
      name: "Bogotá, Colombia",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acta de conciliación familiar en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un acuerdo legal entre las partes sobre temas familiares como alimentos, visitas y custodia, con efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación familiar es obligatoria en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, especialmente antes de iniciar procesos judiciales en temas de familia.",
        },
      },
    ],
  };

  return (
    <>
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="documento-familia"
            className={styles.card}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.title}>
              Acta de conciliación familiar en Colombia (modelo y guía completa)
            </h2>

            <p className={styles.paragraph}>
              La <strong>conciliación familiar en Colombia</strong> es uno de
              los mecanismos más utilizados para resolver conflictos
              relacionados con{" "}
              <strong>
                alimentos, visitas, custodia y acuerdos de crianza
              </strong>
              , especialmente en ciudades como <strong>Bogotá</strong>.
            </p>

            <p className={styles.paragraph}>
              Un <strong>acta de conciliación familiar</strong> bien
              estructurada no solo evita conflictos futuros, sino que también
              tiene <strong>validez legal</strong> y puede ser exigida en caso
              de incumplimiento.
            </p>

            <h3 className={styles.subtitle}>
              ¿Qué debe incluir un acta de conciliación familiar en Bogotá?
            </h3>

            <ul className={styles.list}>
              <li>Identificación completa de los padres o responsables.</li>
              <li>Información del menor (registro civil o documento).</li>
              <li>
                Acuerdos claros sobre <strong>custodia y visitas</strong>.
              </li>
              <li>
                Definición de <strong>cuota alimentaria</strong> y gastos.
              </li>
              <li>Reglas de comunicación y logística.</li>
              <li>Condiciones de modificación del acuerdo.</li>
            </ul>

            <div className={styles.note}>
              En Bogotá y Colombia, los acuerdos familiares deben ser claros,
              específicos y medibles. Evita frases ambiguas como “cuando se
              pueda” o “según disponibilidad”.
            </div>

            <h3 className={styles.subtitle}>
              Modelo de acta de conciliación familiar (Colombia)
            </h3>

            <pre className={styles.pre}>
              {`ACTA DE CONCILIACIÓN FAMILIAR No. [●]

CIUDAD: Bogotá, Colombia
FECHA: [dd/mm/aaaa]

I. PARTES
Progenitor(a) A: [●] - CC [●]
Progenitor(a) B: [●] - CC [●]

Menor: [●] - Registro Civil / TI

II. OBJETO
Acuerdos sobre alimentos, visitas y crianza.

III. ACUERDOS

1. CUSTODIA:
Se acuerda que el menor residirá con [●].

2. VISITAS:
El progenitor B compartirá con el menor:
- Fines de semana: [●]
- Vacaciones: [●]

3. CUOTA ALIMENTARIA:
Valor mensual: $[●]
Forma de pago: [transferencia/consignación]

4. GASTOS EXTRAORDINARIOS:
Se dividirán en un [●]% / [●]%.

5. COMUNICACIÓN:
Se realizará por [medio] en horarios definidos.

IV. INCUMPLIMIENTO
El incumplimiento podrá ser exigido por vía legal.

FIRMAS
_____________________
_____________________`}
            </pre>

            <div className={styles.cta}>
              <strong className={styles.ctaTitle}>
                Recomendaciones clave en conciliación familiar en Colombia
              </strong>

              <ul className={styles.ctaList}>
                <li>Define horarios exactos (evita ambigüedad).</li>
                <li>Incluye montos claros y fechas específicas.</li>
                <li>Prioriza siempre el bienestar del menor.</li>
                <li>Deja reglas para cambios o incumplimientos.</li>
              </ul>

              <a
                href="https://api.whatsapp.com/send/?phone=573232904786"
                target="_blank"
                className={styles.ctaButton}
              >
                Asesoría en conciliación familiar Bogotá
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}
