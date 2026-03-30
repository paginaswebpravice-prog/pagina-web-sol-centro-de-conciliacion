"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaDeConciliacionEfectosYCumplimiento() {
  return (
    <>
      {/* ================= SEO SCHEMA ARTICLE ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Acta de conciliación efectos y cumplimiento en Colombia",
            description:
              "Efectos legales del acta de conciliación en Colombia, cumplimiento, qué pasa si no cumplen un acta de conciliación en Bogotá y Colombia.",
            author: {
              "@type": "Organization",
              name: "Conciliación Colombia",
            },
            publisher: {
              "@type": "Organization",
              name: "Conciliación Colombia",
            },
          }),
        }}
      />

      {/* ================= SEO FAQ SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿El acta de conciliación presta mérito ejecutivo en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, el acta de conciliación presta mérito ejecutivo en Colombia, lo que significa que puede exigirse su cumplimiento ante un juez.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pasa si no cumplen un acta de conciliación?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si una parte no cumple el acta de conciliación, la otra puede iniciar un proceso ejecutivo para exigir el cumplimiento.",
                },
              },
              {
                "@type": "Question",
                name: "¿El acta de conciliación tiene efectos legales?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, el acta de conciliación tiene efectos de cosa juzgada y mérito ejecutivo en Colombia.",
                },
              },
            ],
          }),
        }}
      />

      <section id="acta" className={styles.section}>
        <div className={styles.container}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Acta de conciliación: efectos legales y cumplimiento en Colombia
          </motion.h2>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            El <strong>acta de conciliación en Colombia</strong> es el documento
            más importante dentro de un proceso de conciliación, ya sea en{" "}
            <strong>Bogotá</strong> o en cualquier ciudad de Colombia, porque el
            acuerdo que queda allí escrito tiene{" "}
            <strong>efectos legales</strong> y puede exigirse judicialmente si
            no se cumple.
          </motion.p>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            En términos simples, el acta debe responder sin ambigüedades:
            <strong> quién cumple</strong>, <strong> qué cumple</strong>,{" "}
            <strong> cuándo cumple</strong> y <strong> cómo cumple</strong>. Si
            estas cuatro cosas están claras, el acta puede ejecutarse fácilmente
            en Colombia.
          </motion.p>

          <motion.h3 className={styles.subtitle}>
            Qué debe tener un acta de conciliación bien redactada
          </motion.h3>

          <motion.ul className={styles.list}>
            <li>Identificación completa de las partes.</li>
            <li>Descripción breve del conflicto.</li>
            <li>Obligaciones exactas (valores, plazos, forma de pago).</li>
            <li>Direcciones, cuentas o lugares de entrega.</li>
            <li>Soportes anexos o referenciados.</li>
            <li>Cláusulas de verificación de cumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
          </motion.ul>

          <motion.h3 className={styles.subtitle}>
            Efectos legales del acta de conciliación en Colombia
          </motion.h3>

          <motion.p className={styles.paragraph}>
            El <strong>acta de conciliación en Colombia</strong> tiene efectos
            jurídicos muy importantes. No es solo un acuerdo informal. Tiene
            efectos similares a una sentencia judicial.
          </motion.p>

          <motion.ul className={styles.list}>
            <li>Hace tránsito a cosa juzgada.</li>
            <li>Presta mérito ejecutivo.</li>
            <li>Obliga legalmente a las partes.</li>
            <li>Puede exigirse ante un juez si no se cumple.</li>
          </motion.ul>

          <motion.h3 className={styles.subtitle}>
            Qué pasa si no cumplen un acta de conciliación
          </motion.h3>

          <motion.p className={styles.paragraph}>
            Si una persona no cumple el acuerdo firmado en un{" "}
            <strong>acta de conciliación en Bogotá o Colombia</strong>, la otra
            parte puede iniciar un <strong>proceso ejecutivo</strong> ante un
            juez para exigir el pago o el cumplimiento de la obligación. Esto
            significa que el juez puede ordenar embargos, pagos o cumplimiento
            de lo pactado.
          </motion.p>

          <motion.p className={styles.paragraph}>
            Por esta razón, la redacción del acta es muy importante. Un acta mal
            redactada puede ser difícil de ejecutar judicialmente en Colombia,
            mientras que un acta clara facilita el proceso ejecutivo.
          </motion.p>

          <motion.div className={styles.note}>
            Consejo práctico: evita frases como “pagará pronto” o “entregará lo
            antes posible”. En Colombia, las obligaciones deben tener fecha,
            valor y forma de cumplimiento para que el acta pueda ejecutarse.
          </motion.div>

          <motion.h3 className={styles.subtitle}>
            Preguntas frecuentes sobre el acta de conciliación en Colombia
          </motion.h3>

          <motion.p className={styles.paragraph}>
            <strong>¿El acta de conciliación presta mérito ejecutivo?</strong>
            <br />
            Sí, en Colombia el acta de conciliación presta mérito ejecutivo.
          </motion.p>

          <motion.p className={styles.paragraph}>
            <strong>¿El acta de conciliación tiene efectos legales?</strong>
            <br />
            Sí, tiene efectos de cosa juzgada y obliga a las partes.
          </motion.p>

          <motion.p className={styles.paragraph}>
            <strong>¿Qué pasa si no cumplen el acuerdo?</strong>
            <br />
            Se puede iniciar un proceso ejecutivo ante un juez en Colombia.
          </motion.p>
        </div>
      </section>
    </>
  );
}
