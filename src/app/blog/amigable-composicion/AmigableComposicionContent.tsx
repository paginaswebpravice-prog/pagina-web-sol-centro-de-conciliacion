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

          <div>
            <span>
              Mecanismos alternativos de solución de conflictos en Colombia
            </span>

            <motion.h1 itemProp="headline">
              ¿Qué es la amigable composición en Colombia? Cómo funciona,
              ejemplos y diferencias con la conciliación
            </motion.h1>

            <motion.p itemProp="description">
              La <strong>amigable composición en Colombia</strong> es un
              mecanismo alternativo de solución de conflictos mediante el cual
              dos o más partes delegan en un tercero imparcial denominado{" "}
              <strong>amigable componedor</strong> la facultad de definir la
              solución de una controversia.
            </motion.p>

            <motion.p>
              Este mecanismo es ampliamente utilizado en <strong>Bogotá</strong>
              , Medellín, Cali y otras ciudades de <strong>Colombia</strong>,
              especialmente en conflictos empresariales, contratos comerciales,
              construcción, acuerdos entre socios, contratos civiles y
              controversias contractuales complejas.
            </motion.p>

            <motion.p>
              A diferencia de la conciliación tradicional en Colombia, donde las
              partes construyen el acuerdo, en la amigable composición el
              tercero toma una decisión basada en las reglas previamente
              definidas por las partes dentro del contrato o acuerdo de amigable
              composición.
            </motion.p>

            <p>
              Cada vez más empresas y particulares utilizan la amigable
              composición como una alternativa eficiente para resolver
              controversias derivadas de contratos comerciales, civiles, de
              construcción, suministro, prestación de servicios y otras
              relaciones jurídicas. Este mecanismo ofrece una solución
              especializada, más rápida que un proceso judicial y con mayor
              flexibilidad que otros métodos de resolución de conflictos.
            </p>

            <p>
              Si estás buscando información sobre qué es un amigable componedor,
              cuándo puede utilizarse este mecanismo o cuáles son sus
              diferencias frente a la conciliación y el arbitraje, en esta guía
              encontrarás una explicación completa con ejemplos, ventajas y
              recomendaciones para comprender su funcionamiento en Colombia.
            </p>
          </div>

          {/* DEFINICION */}

          <section>
            <h2>
              ¿Qué es la amigable composición en Colombia y para qué sirve?
            </h2>

            <p>
              La amigable composición es un mecanismo reconocido en la
              legislación colombiana que permite resolver conflictos de manera
              privada, rápida y especializada. Generalmente se utiliza cuando
              las partes desean evitar procesos judiciales largos ante jueces en
              Colombia.
            </p>

            <p>
              En Bogotá y en muchas ciudades de Colombia, este mecanismo es muy
              utilizado en contratos empresariales porque permite que una
              persona experta en el tema del conflicto tome una decisión técnica
              y práctica.
            </p>

            <div className={styles.highlightBox}>
              <strong>Importante:</strong> la amigable composición en Colombia
              tiene un enfoque predominantemente contractual. Las partes son
              quienes determinan el alcance de la decisión, el procedimiento y
              las reglas aplicables.
            </div>
          </section>

          {/* COMO FUNCIONA */}
          <section>
            <h2>¿Cómo funciona la amigable composición paso a paso?</h2>

            <p>
              La amigable composición inicia cuando las partes acuerdan someter
              una controversia a la decisión de uno o varios amigables
              componedores. Este acuerdo puede encontrarse previamente
              establecido en una cláusula contractual o pactarse una vez surge
              el conflicto.
            </p>

            <p>
              Posteriormente se designa al amigable componedor, quien analiza
              los hechos, los documentos aportados y las posiciones de las
              partes para emitir una decisión dentro de los límites definidos
              por el acuerdo celebrado entre ellas.
            </p>

            <ul>
              <li>Designación del amigable componedor.</li>
              <li>Presentación del conflicto.</li>
              <li>Análisis de documentos.</li>
              <li>Audiencias si son necesarias.</li>
              <li>Emisión de la decisión.</li>
              <li>Cumplimiento de lo decidido.</li>
            </ul>
          </section>

          {/* FUNCIONES */}
          <section>
            <h2>¿Cuáles son las funciones del amigable componedor?</h2>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Analizar el conflicto</h3>

                <p>
                  Revisa los hechos, documentos y argumentos presentados por las
                  partes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Interpretar el contrato</h3>

                <p>
                  Evalúa las obligaciones asumidas por cada parte conforme al
                  acuerdo celebrado.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Emitir una decisión</h3>

                <p>
                  Formula una solución dentro del alcance autorizado por las
                  partes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Favorecer una solución especializada</h3>

                <p>
                  Aporta conocimientos técnicos o jurídicos para resolver
                  controversias complejas.
                </p>
              </div>
            </div>
          </section>

          {/* CARACTERISTICAS */}

          <section>
            <h2>
              ¿Cuáles son las principales características de la amigable
              composición?
            </h2>

            <div className={styles.infoGrid}>
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

          {/* VENTAJAS */}
          <section>
            <h2>Ventajas de utilizar la amigable composición en Colombia</h2>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Mayor rapidez</h3>

                <p>
                  Generalmente el procedimiento es más corto que un proceso
                  judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Especialización</h3>

                <p>
                  El conflicto puede ser resuelto por expertos en la materia
                  objeto del contrato.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Confidencialidad</h3>

                <p>Protege la información empresarial y contractual.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Flexibilidad</h3>

                <p>
                  Las partes definen gran parte del procedimiento y sus reglas.
                </p>
              </div>
            </div>
          </section>

          {/* DIFERENCIAS */}

          <section>
            <h2>
              Diferencias entre amigable composición, conciliación y arbitraje
              en Colombia
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
              <p>
                En Bogotá y Colombia, muchas empresas prefieren la amigable
                composición porque combina rapidez, flexibilidad y conocimiento
                técnico especializado.
              </p>
            </div>
          </section>

          {/* CUANDO CONVIENE */}

          <section>
            <h2>¿Cuándo conviene utilizar la amigable composición?</h2>

            <ul>
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

          {/* CASOS */}
          <section>
            <h2>¿En qué casos se utiliza la amigable composición?</h2>

            <ul>
              <li>Contratos de construcción.</li>
              <li>Contratos de obra.</li>
              <li>Prestación de servicios.</li>
              <li>Contratos comerciales.</li>
              <li>Acuerdos entre socios.</li>
              <li>Contratos de suministro.</li>
              <li>Contratos de infraestructura.</li>
              <li>Conflictos empresariales complejos.</li>
              <li>Interpretación contractual.</li>
              <li>Incumplimientos contractuales.</li>
            </ul>
          </section>

          {/* CLAUSULA */}
          <section>
            <h2>Ejemplo de cláusula de amigable composición para contratos</h2>

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
          </section>

          {/* ERRORES */}
          <section>
            <h2>
              Errores frecuentes al pactar una cláusula de amigable composición
            </h2>

            <ul>
              <li>No definir el alcance del amigable componedor.</li>
              <li>No establecer el procedimiento.</li>
              <li>No determinar la forma de designación.</li>
              <li>No precisar los conflictos cubiertos.</li>
              <li>Redactar cláusulas ambiguas.</li>
              <li>No definir el número de componedores.</li>
              <li>No establecer reglas sobre costos.</li>
            </ul>
          </section>

          {/* FAQ */}

          <section>
            <h2>
              Preguntas frecuentes sobre la amigable composición en Colombia
            </h2>

            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <button className={styles.faqQuestion}>
                  ¿La amigable composición es obligatoria en Colombia?
                </button>
                <div className={styles.faqAnswer}>
                  Solo cuando las partes la pactan previamente en un contrato o
                  acuerdo.
                </div>
              </div>

              <div className={styles.faqItem}>
                <button className={styles.faqQuestion}>
                  ¿La decisión del amigable componedor tiene efectos legales?
                </button>
                <div className={styles.faqAnswer}>
                  Sí. En Colombia, la decisión puede tener efectos vinculantes
                  según lo pactado por las partes.
                </div>
              </div>

              <div className={styles.faqItem}>
                <button className={styles.faqQuestion}>
                  ¿Cuál es la diferencia entre amigable composición y arbitraje?
                </button>
                <div className={styles.faqAnswer}>
                  El arbitraje funciona como un proceso judicial privado,
                  mientras que la amigable composición es más flexible y
                  contractual.
                </div>
              </div>

              <div className={styles.faqItem}>
                <button className={styles.faqQuestion}>
                  ¿Las empresas en Bogotá usan amigable composición?
                </button>
                <div className={styles.faqAnswer}>
                  Sí. Es muy utilizada en contratos comerciales, construcción y
                  conflictos empresariales en Bogotá y Colombia.
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}

          <section className={styles.cta}>
            <div className={styles.ctaTitle}>
              ¿Necesitas incluir una cláusula de amigable composición o resolver
              un conflicto contractual?
            </div>

            <p className={styles.ctaText}>
              Recibe orientación sobre amigable composición, conciliación,
              cláusulas contractuales, mecanismos alternativos de solución de
              conflictos y resolución de controversias civiles y comerciales en
              Bogotá y toda Colombia.
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
