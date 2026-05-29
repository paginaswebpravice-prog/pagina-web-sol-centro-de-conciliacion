"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function AmigableComposicionContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la amigable composición en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La amigable composición en Colombia es un mecanismo alternativo de solución de conflictos mediante el cual las partes delegan en un tercero imparcial la facultad de decidir una controversia contractual o civil.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre conciliación y amigable composición?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la conciliación las partes construyen el acuerdo. En la amigable composición, el amigable componedor toma la decisión dentro de los límites definidos por las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿La amigable composición tiene validez legal en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La decisión del amigable componedor tiene efectos vinculantes según el acuerdo celebrado entre las partes.",
        },
      },
    ],
  };

  return (
    <div
      className={styles.wrapper}
      itemScope
      itemType="https://schema.org/Article"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className={styles.container}>
        <motion.article
          id="amigable-composicion"
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* HERO */}

          <div className={styles.hero}>
            <span className={styles.badge}>
              Mecanismos alternativos de solución de conflictos en Colombia
            </span>

            <motion.h1 className={styles.title} itemProp="headline">
              Amigable composición en Colombia: qué es, cómo funciona y
              diferencias con la conciliación
            </motion.h1>

            <motion.p className={styles.paragraph} itemProp="description">
              La <strong>amigable composición en Colombia</strong> es un
              mecanismo alternativo de solución de conflictos mediante el cual
              dos o más partes delegan en un tercero imparcial denominado{" "}
              <strong>amigable componedor</strong> la facultad de definir la
              solución de una controversia.
            </motion.p>

            <motion.p className={styles.paragraph}>
              Este mecanismo es ampliamente utilizado en <strong>Bogotá</strong>
              , Medellín, Cali y otras ciudades de <strong>Colombia</strong>,
              especialmente en conflictos empresariales, contratos comerciales,
              construcción, acuerdos entre socios, contratos civiles y
              controversias contractuales complejas.
            </motion.p>

            <motion.p className={styles.paragraph}>
              A diferencia de la conciliación tradicional en Colombia, donde las
              partes construyen el acuerdo, en la amigable composición el
              tercero toma una decisión basada en las reglas previamente
              definidas por las partes dentro del contrato o acuerdo de amigable
              composición.
            </motion.p>
          </div>

          {/* DEFINICION */}

          <section className={styles.section}>
            <h2 className={styles.subtitle}>
              ¿Qué es la amigable composición en Colombia?
            </h2>

            <p className={styles.paragraph}>
              La amigable composición es un mecanismo reconocido en la
              legislación colombiana que permite resolver conflictos de manera
              privada, rápida y especializada. Generalmente se utiliza cuando
              las partes desean evitar procesos judiciales largos ante jueces en
              Colombia.
            </p>

            <p className={styles.paragraph}>
              En Bogotá y en muchas ciudades de Colombia, este mecanismo es muy
              utilizado en contratos empresariales porque permite que una
              persona experta en el tema del conflicto tome una decisión técnica
              y práctica.
            </p>

            <div className={styles.highlight}>
              <strong>Importante:</strong> la amigable composición en Colombia
              tiene un enfoque predominantemente contractual. Las partes son
              quienes determinan el alcance de la decisión, el procedimiento y
              las reglas aplicables.
            </div>
          </section>

          {/* CARACTERISTICAS */}

          <section className={styles.section}>
            <h2 className={styles.subtitle}>
              Características de la amigable composición
            </h2>

            <div className={styles.grid}>
              <div className={styles.infoCard}>
                <h3>Autonomía contractual</h3>

                <p>
                  Las partes pueden definir cómo funcionará el procedimiento,
                  quién será el amigable componedor y cuáles serán las reglas
                  aplicables.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Decisión especializada</h3>

                <p>
                  El amigable componedor normalmente tiene experiencia técnica o
                  jurídica relacionada con el conflicto.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Rapidez</h3>

                <p>
                  En Colombia, la amigable composición suele ser mucho más ágil
                  que un proceso judicial ordinario.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Confidencialidad</h3>

                <p>
                  Muchas empresas en Bogotá y Colombia utilizan este mecanismo
                  porque evita la exposición pública del conflicto.
                </p>
              </div>
            </div>
          </section>

          {/* DIFERENCIAS */}

          <section className={styles.section}>
            <h2 className={styles.subtitle}>
              Diferencia entre conciliación, arbitraje y amigable composición
            </h2>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Mecanismo</th>
                    <th>Quién toma la decisión</th>
                    <th>Enfoque</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Conciliación</td>
                    <td>Las partes</td>
                    <td>Negociación y acuerdo mutuo</td>
                  </tr>

                  <tr>
                    <td>Amigable composición</td>
                    <td>Amigable componedor</td>
                    <td>Decisión privada y contractual</td>
                  </tr>

                  <tr>
                    <td>Arbitraje</td>
                    <td>Tribunal arbitral</td>
                    <td>Proceso similar a un juicio</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.note}>
              En Bogotá y Colombia, muchas empresas prefieren la amigable
              composición porque combina rapidez, flexibilidad y conocimiento
              técnico especializado.
            </div>
          </section>

          {/* CUANDO CONVIENE */}

          <section className={styles.section}>
            <h2 className={styles.subtitle}>
              ¿Cuándo conviene usar amigable composición en Colombia?
            </h2>

            <ul className={styles.list}>
              <li>Cuando existe un conflicto contractual complejo.</li>

              <li>
                Cuando las partes desean evitar un proceso judicial largo en
                Colombia.
              </li>

              <li>Cuando el conflicto requiere conocimientos técnicos.</li>

              <li>
                Cuando existe una cláusula de amigable composición en el
                contrato.
              </li>

              <li>Cuando las empresas buscan una solución privada y rápida.</li>

              <li>
                Cuando se necesita una decisión más flexible que un arbitraje.
              </li>
            </ul>
          </section>

          {/* CLAUSULA */}

          <section className={styles.section}>
            <h2 className={styles.subtitle}>
              Ejemplo de cláusula de amigable composición
            </h2>

            <div className={styles.preWrapper}>
              <div className={styles.preHeader}>
                <span>MODELO REFERENCIAL</span>
                <span>Colombia</span>
              </div>

              <pre className={styles.pre}>
                {`CLÁUSULA DE AMIGABLE COMPOSICIÓN

Toda controversia o diferencia relacionada con este contrato,
su ejecución, interpretación, terminación o liquidación,
será resuelta mediante amigable composición en Colombia.

Las partes designarán de común acuerdo un amigable componedor,
quien decidirá dentro de los límites fijados en este contrato
y conforme a los principios de equidad y buena fe contractual.

La decisión del amigable componedor será obligatoria para las partes.`}
              </pre>
            </div>
          </section>

          {/* FAQ */}

          <section className={styles.section}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre amigable composición en Colombia
            </h2>

            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3>¿La amigable composición es obligatoria en Colombia?</h3>

                <p>
                  Solo cuando las partes la pactan previamente en un contrato o
                  acuerdo.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>
                  ¿La decisión del amigable componedor tiene efectos legales?
                </h3>

                <p>
                  Sí. En Colombia, la decisión puede tener efectos vinculantes
                  según lo pactado por las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>
                  ¿Cuál es la diferencia entre amigable composición y arbitraje?
                </h3>

                <p>
                  El arbitraje funciona como un proceso judicial privado,
                  mientras que la amigable composición es más flexible y
                  contractual.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>¿Las empresas en Bogotá usan amigable composición?</h3>

                <p>
                  Sí. Es muy utilizada en contratos comerciales, construcción y
                  conflictos empresariales en Bogotá y Colombia.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}

          <section className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Asesoría sobre amigable composición en Bogotá y Colombia
            </h2>

            <p className={styles.ctaText}>
              Reciba orientación sobre cláusulas de amigable composición,
              mecanismos alternativos de solución de conflictos y resolución de
              controversias contractuales en Colombia.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Solicitar asesoría
            </a>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
