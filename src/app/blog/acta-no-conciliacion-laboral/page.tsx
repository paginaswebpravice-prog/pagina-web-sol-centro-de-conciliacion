"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaNoConciliacionLaboral() {
  return (
    <>
      {/* ================= SEO SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Acta de no conciliación laboral en Colombia (modelo y explicación)",
            description:
              "Modelo de acta de no conciliación laboral en Colombia. Ejemplos, explicación legal, inasistencia, constancia y procedimiento en Bogotá y Colombia.",
            author: {
              "@type": "Organization",
              name: "Conciliación Colombia",
            },
            publisher: {
              "@type": "Organization",
              name: "Conciliación Colombia",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tusitio.com/acta-no-conciliacion-laboral",
            },
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es un acta de no conciliación laboral en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Es una constancia que deja registro de que en la audiencia de conciliación laboral no se llegó a un acuerdo o que una de las partes no asistió.",
                },
              },
              {
                "@type": "Question",
                name: "¿Para qué sirve la constancia de no conciliación laboral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sirve como requisito previo para presentar una demanda laboral ante un juez en Colombia.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pasa si el empleador no asiste a la conciliación?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Se deja constancia por inasistencia y el trabajador puede continuar con la demanda laboral.",
                },
              },
            ],
          }),
        }}
      />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="acta-no-conciliacion-laboral"
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Acta de no conciliación laboral en Colombia (modelo)</h2>

            <p>
              El <strong>acta de no conciliación laboral en Colombia</strong> es
              un documento que deja constancia de que una audiencia de
              conciliación laboral terminó <strong>sin acuerdo</strong> o de que
              una de las partes <strong>no asistió</strong>. Este documento es
              muy importante en ciudades como <strong>Bogotá</strong>, Medellín,
              Cali y en general en toda <strong>Colombia</strong>, porque en
              muchos casos es un requisito antes de presentar una demanda
              laboral.
            </p>

            <p>
              Muchas personas buscan en internet términos como{" "}
              <strong>
                acta de no conciliación laboral Colombia, constancia de no
                conciliación Bogotá, modelo acta no conciliación laboral
              </strong>
              , porque necesitan un formato claro o entender qué debe contener
              el documento.
            </p>

            <h3>¿Qué debe contener un acta de no conciliación laboral?</h3>

            <ul>
              <li>Nombre del centro de conciliación o entidad.</li>
              <li>Ciudad (por ejemplo Bogotá, Colombia).</li>
              <li>Fecha y hora de la audiencia.</li>
              <li>Nombre del trabajador y del empleador.</li>
              <li>Resumen de las pretensiones.</li>
              <li>Indicación de que no hubo acuerdo o hubo inasistencia.</li>
              <li>Firma del conciliador o funcionario.</li>
            </ul>

            <h3>Modelo de acta de no conciliación laboral (sin acuerdo)</h3>

            <pre>
              {`ACTA/CONSTANCIA DE NO CONCILIACIÓN (LABORAL) No. [●]

Entidad/Centro de Conciliación: [●]
Ciudad: Bogotá, Colombia
Fecha: [dd/mm/aaaa]   Hora: [●]

Asunto: Conciliación laboral solicitada por [Trabajador(a)] contra [Empleador(a)]

Comparecen:
- Solicitante: [●] - CC [●]
- Citado(a): [●] - [representante legal / apoderado] - CC/NIT [●]

Hechos/pretensiones (breve):
[●]

Resultado de la diligencia:
Luego de escuchadas las partes y exploradas alternativas de arreglo,
las partes manifiestan no llegar a un acuerdo. En consecuencia,
se deja constancia de NO CONCILIACIÓN respecto de las pretensiones indicadas.

Se firma para constancia.

Firmas…`}
            </pre>

            <h3>Modelo de constancia por inasistencia</h3>

            <pre>
              {`CONSTANCIA POR INASISTENCIA No. [●]

Centro de Conciliación: [●]
Ciudad: Bogotá, Colombia
Fecha: [●]

Dejamos constancia de que el(la) citado(a) [●] no compareció a la audiencia
programada para el día [●] a las [●], pese a haber sido citado(a)
en debida forma según constancias del expediente del Centro de Conciliación.

Se expide la presente constancia para los fines pertinentes.

Firmas…`}
            </pre>

            <h3>
              ¿Para qué sirve el acta de no conciliación laboral en Colombia?
            </h3>

            <p>
              La{" "}
              <strong>constancia de no conciliación laboral en Colombia</strong>{" "}
              sirve principalmente como prueba de que se intentó resolver el
              conflicto antes de acudir a un proceso judicial. En muchos casos,
              especialmente en procesos laborales en{" "}
              <strong>Bogotá y Colombia</strong>, este documento permite
              presentar una demanda ante un juez laboral.
            </p>

            <p>
              También sirve como soporte de que una de las partes no asistió a
              la audiencia, lo cual puede ser relevante dentro de un proceso
              judicial laboral.
            </p>

            <h3>Preguntas frecuentes sobre la no conciliación laboral</h3>

            <p>
              <strong>
                ¿Qué pasa si no hay acuerdo en la conciliación laboral?
              </strong>
              <br />
              Se expide un acta de no conciliación y las partes pueden acudir a
              la jurisdicción laboral.
            </p>

            <p>
              <strong>
                ¿Qué pasa si el empleador no va a la conciliación?
              </strong>
              <br />
              Se deja constancia por inasistencia y el trabajador puede
              continuar con el proceso judicial laboral en Colombia.
            </p>

            <p>
              <strong>
                ¿El acta de no conciliación laboral sirve para demandar?
              </strong>
              <br />
              Sí, en muchos casos es requisito previo para presentar una demanda
              laboral ante un juez en Colombia.
            </p>
          </motion.article>
        </div>
      </div>
    </>
  );
}
