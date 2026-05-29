"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ModeloActaConciliacionContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acta de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación en Colombia es el documento legal donde quedan registrados los acuerdos alcanzados entre las partes durante una conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En Colombia el acta de conciliación tiene efectos jurídicos y presta mérito ejecutivo en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué debe incluir un acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debe incluir identificación de las partes, descripción del conflicto, obligaciones claras, fechas de cumplimiento, forma de pago y firmas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde se puede hacer una conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación puede realizarse en centros de conciliación autorizados, cámaras de comercio y entidades habilitadas en Bogotá y Colombia.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Modelo de acta de conciliación en Colombia (ejemplo y formato)",
    description:
      "Conoce un modelo de acta de conciliación en Colombia con ejemplo completo para conciliaciones civiles, comerciales y familiares en Bogotá y Colombia.",
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
      "modelo de acta de conciliación en Colombia, ejemplo acta de conciliación Bogotá, formato acta conciliación Colombia, conciliación extrajudicial Bogotá",
    about: [
      "Acta de conciliación",
      "Conciliación extrajudicial",
      "Conciliación en Colombia",
      "Conciliación en Bogotá",
      "Modelo legal",
    ],
  };

  return (
    <>
      <Head>
        <title>
          Modelo de acta de conciliación en Colombia | Ejemplo completo 2026
        </title>

        <meta
          name="description"
          content="Descubre un modelo de acta de conciliación en Colombia con ejemplo completo para conciliaciones civiles, comerciales y familiares en Bogotá y todo el país."
        />

        <meta
          name="keywords"
          content="modelo de acta de conciliación en Colombia, ejemplo acta conciliación Bogotá, formato conciliación Colombia, conciliación extrajudicial Bogotá"
        />

        <meta
          property="og:title"
          content="Modelo de acta de conciliación en Colombia"
        />

        <meta
          property="og:description"
          content="Guía completa con ejemplo de acta de conciliación en Bogotá y Colombia para acuerdos civiles, comerciales y familiares."
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

      <motion.article
        id="modelo-acta-conciliacion"
        className={styles.modeloCard}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        itemScope
        itemType="https://schema.org/Article"
      >
        <motion.h1 className={styles.modeloTitle} itemProp="headline">
          Modelo de acta de conciliación en Colombia (ejemplo y formato)
        </motion.h1>

        <motion.p className={styles.modeloText} itemProp="description">
          Si estás buscando un{" "}
          <strong>modelo de acta de conciliación en Colombia</strong>, aquí
          encontrarás un ejemplo general que puede utilizarse como referencia
          para conciliaciones civiles, comerciales o conflictos entre
          particulares.
        </motion.p>

        <motion.p className={styles.modeloText}>
          En ciudades como <strong>Bogotá</strong>, Medellín, Cali o cualquier
          parte de Colombia, el acta de conciliación es el documento donde queda
          registrado oficialmente el acuerdo al que llegan las partes para
          resolver un conflicto sin necesidad de acudir a un proceso judicial.
        </motion.p>

        <motion.p className={styles.modeloText}>
          La conciliación extrajudicial en Colombia se ha convertido en uno de
          los mecanismos más utilizados para solucionar conflictos civiles,
          familiares y comerciales de manera más rápida, económica y eficiente.
          Por esta razón, muchas personas buscan ejemplos y formatos de actas de
          conciliación que sirvan como referencia para entender cómo deben
          estructurarse correctamente.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Un acta de conciliación bien redactada debe dejar completamente claro:
          quién debe cumplir, qué debe cumplir, cuándo debe cumplir y cómo se
          verificará el cumplimiento. Cuando estos elementos no están claros, el
          acuerdo puede volverse difícil de ejecutar en caso de incumplimiento.
        </motion.p>

        <motion.div className={styles.highlightBox}>
          <p>
            En Bogotá y Colombia, las actas de conciliación son utilizadas para
            resolver conflictos relacionados con deudas, contratos,
            arrendamientos, recuperación de cartera, conflictos familiares,
            obligaciones civiles y acuerdos comerciales.
          </p>
        </motion.div>

        <motion.p className={styles.modeloNote}>
          Importante: en Colombia, el acta de conciliación tiene efectos legales
          y puede prestar mérito ejecutivo. Por eso es importante que las
          obligaciones, valores, fechas y condiciones queden escritas de forma
          clara y precisa.
        </motion.p>

        <motion.h2 className={styles.subTitle}>
          ¿Qué debe contener un acta de conciliación en Colombia?
        </motion.h2>

        <motion.p className={styles.modeloText}>
          Un acta de conciliación válida en Bogotá y Colombia normalmente debe
          contener:
        </motion.p>

        <ul className={styles.list}>
          <li>Nombre del centro de conciliación.</li>
          <li>Ciudad y fecha de la audiencia.</li>
          <li>Datos completos de las partes.</li>
          <li>Descripción clara del conflicto.</li>
          <li>Obligaciones precisas y verificables.</li>
          <li>Valores y fechas de cumplimiento.</li>
          <li>Cláusulas de incumplimiento.</li>
          <li>Firma de las partes y del conciliador.</li>
        </ul>

        <motion.h2 className={styles.subTitle}>
          Modelo de acta de conciliación en Colombia (copiar y pegar)
        </motion.h2>

        <motion.div className={styles.documentBox}>
          <div className={styles.documentHeader}>
            <span>DOCUMENTO MODELO</span>
            <span>Uso referencial</span>
          </div>

          <pre>
            {`ACTA DE CONCILIACIÓN No. [●]

CENTRO DE CONCILIACIÓN: [Nombre del Centro]
CIUDAD: Bogotá, Colombia
FECHA: [dd/mm/aaaa]
HORA INICIO: [●]
HORA FIN: [●]
MODALIDAD: [Presencial / Virtual]

CONCILIADOR(A):
Nombre: [●]
Documento: [●]

I. COMPARECIENTES

PARTE SOLICITANTE:
Nombre: [●]
Identificación: [●]
Dirección: [●]
Teléfono/Correo: [●]

PARTE CITADA:
Nombre: [●]
Identificación: [●]
Dirección: [●]
Teléfono/Correo: [●]

II. OBJETO DE LA CONCILIACIÓN
Las partes manifiestan que el conflicto consiste en:
[Describir el problema en pocas líneas].

III. ACUERDO CONCILIATORIO

PRIMERA. OBLIGACIÓN
[Detalle exacto de la obligación].

SEGUNDA. VALOR Y FORMA DE PAGO
Valor total: $[●]
Forma de pago:
- Cuota 1: $[●] el [fecha]
- Cuota 2: $[●] el [fecha]

TERCERA. INCUMPLIMIENTO
En caso de incumplimiento, la parte cumplida podrá exigir el cumplimiento
por las vías legales correspondientes.

IV. FIRMA

Conciliador: _______________________

Parte A: ___________________________

Parte B: ___________________________`}
          </pre>
        </motion.div>

        <motion.div className={styles.modeloCTA}>
          <strong>
            Checklist para que un acta de conciliación sea válida en Colombia
          </strong>

          <ul>
            <li>Identificación completa de las partes.</li>
            <li>Descripción clara del conflicto.</li>
            <li>Obligaciones específicas y medibles.</li>
            <li>Fechas exactas de cumplimiento.</li>
            <li>Forma de pago o forma de cumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
            <li>Redacción clara y sin ambigüedades.</li>
          </ul>
        </motion.div>

        <motion.h2 className={styles.subTitle}>
          ¿Para qué sirve un acta de conciliación?
        </motion.h2>

        <motion.p className={styles.modeloText}>
          El acta de conciliación sirve para dejar constancia legal del acuerdo
          alcanzado entre las partes durante una audiencia de conciliación en
          Bogotá o cualquier ciudad de Colombia.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Este documento permite formalizar acuerdos relacionados con pagos,
          obligaciones económicas, conflictos familiares, contratos,
          arrendamientos y otras controversias conciliables.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Además, en caso de incumplimiento, el acta puede utilizarse como base
          para exigir judicialmente el cumplimiento del acuerdo alcanzado.
        </motion.p>

        <motion.h2 className={styles.subTitle}>
          Recomendaciones antes de firmar un acta de conciliación
        </motion.h2>

        <motion.p className={styles.modeloText}>
          Antes de firmar un acta de conciliación en Bogotá o Colombia, es
          recomendable revisar cuidadosamente que las obligaciones sean posibles
          de cumplir y que los plazos queden completamente definidos.
        </motion.p>

        <motion.p className={styles.modeloText}>
          También es importante verificar que exista una forma clara de probar
          el cumplimiento, especialmente cuando se trata de pagos, entregas,
          obligaciones comerciales o acuerdos familiares.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Un buen acuerdo conciliatorio evita futuros conflictos y permite que
          las partes cierren el problema de forma definitiva, clara y segura.
        </motion.p>

        <motion.div className={styles.faqSection}>
          <h2 className={styles.subTitle}>
            Preguntas frecuentes sobre actas de conciliación
          </h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>¿El acta de conciliación tiene validez legal?</h3>

              <p>
                Sí. En Colombia el acta tiene efectos jurídicos y puede exigirse
                judicialmente.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Qué pasa si una parte incumple?</h3>

              <p>
                La parte afectada puede iniciar acciones legales para exigir el
                cumplimiento del acuerdo conciliatorio.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿El modelo sirve para cualquier conciliación?</h3>

              <p>
                El formato es referencial y puede adaptarse a conciliaciones
                civiles, comerciales y familiares en Colombia.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Dónde hacer conciliaciones en Bogotá?</h3>

              <p>
                En centros de conciliación autorizados, cámaras de comercio y
                entidades habilitadas en Colombia.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas orientación sobre conciliación en Bogotá o Colombia?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación extrajudicial, elaboración de
            acuerdos legales y resolución de conflictos civiles, comerciales y
            familiares en Bogotá y todo Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría por WhatsApp
          </a>
        </motion.div>
      </motion.article>
    </>
  );
}
