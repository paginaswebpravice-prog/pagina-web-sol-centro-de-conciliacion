"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ModeloActaConciliacion() {
  return (
    <>
      {/* SEO Schema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es un acta de conciliación en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El acta de conciliación es un documento con efectos legales donde las partes dejan por escrito un acuerdo para resolver un conflicto sin necesidad de juicio.",
                },
              },
              {
                "@type": "Question",
                name: "¿El acta de conciliación tiene validez legal en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, el acta de conciliación presta mérito ejecutivo, lo que significa que puede exigirse su cumplimiento ante un juez si una de las partes incumple.",
                },
              },
            ],
          }),
        }}
      />

      <motion.article
        id="modelo-acta-conciliacion"
        className={styles.modeloCard}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 className={styles.modeloTitle}>
          Modelo de acta de conciliación en Colombia (ejemplo y formato)
        </motion.h2>

        <motion.p className={styles.modeloText}>
          Si estás buscando un{" "}
          <strong>modelo de acta de conciliación en Colombia</strong>, aquí
          encontrarás un ejemplo general que puede utilizarse como referencia
          para conciliaciones civiles, comerciales o de conflictos entre
          particulares. En ciudades como <strong>Bogotá</strong>, Medellín, Cali
          o cualquier parte de Colombia, el acta de conciliación es el documento
          donde queda por escrito el acuerdo al que llegan las partes para
          resolver un conflicto sin necesidad de un proceso judicial.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Un acta de conciliación bien redactada debe dejar completamente claro:
          quién debe cumplir, qué debe cumplir, cuándo debe cumplir y cómo se
          verificará el cumplimiento. Cuando estos elementos no están claros, el
          acuerdo puede volverse difícil de ejecutar en caso de incumplimiento.
        </motion.p>

        <motion.p className={styles.modeloNote}>
          Importante: en Colombia, el acta de conciliación tiene efectos legales
          y puede prestar mérito ejecutivo. Por eso es importante que las
          obligaciones, valores, fechas y condiciones queden escritas de forma
          precisa.
        </motion.p>

        <motion.h3 className={styles.subTitle}>
          Modelo de acta de conciliación (copiar y pegar)
        </motion.h3>

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
          <strong>Checklist para que un acta de conciliación sea válida</strong>
          <ul>
            <li>Identificación completa de las partes.</li>
            <li>Descripción clara del conflicto.</li>
            <li>Obligaciones claras y medibles.</li>
            <li>Fechas exactas de cumplimiento.</li>
            <li>Forma de pago o forma de cumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
          </ul>
        </motion.div>

        <motion.p className={styles.modeloText}>
          Muchas personas en Bogotá y en toda Colombia buscan modelos de actas
          de conciliación para resolver conflictos de deudas, contratos,
          arrendamientos, conflictos entre socios, asuntos familiares y
          obligaciones civiles. Sin embargo, cada caso debe revisarse de manera
          particular para que el acuerdo realmente proteja a las partes.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Antes de firmar un acta de conciliación, es recomendable revisar que
          las obligaciones sean posibles de cumplir, que los plazos sean claros
          y que exista una forma de demostrar el cumplimiento. Un buen acuerdo
          evita futuros conflictos y permite cerrar el problema de manera
          definitiva.
        </motion.p>
      </motion.article>
    </>
  );
}
