"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaNoConciliacionLaboral() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acta de no conciliación laboral en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un documento que deja constancia de que una audiencia de conciliación laboral terminó sin acuerdo o que una de las partes no asistió.",
        },
      },
      {
        "@type": "Question",
        name: "¿La constancia de no conciliación sirve para demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos casos en Colombia, la constancia de no conciliación laboral sirve como requisito previo para iniciar un proceso judicial laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el empleador no asiste a la audiencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador deja constancia de inasistencia y el trabajador puede continuar con el proceso judicial correspondiente.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Acta de no conciliación laboral en Colombia: modelo, formato y guía legal",
    description:
      "Guía completa sobre el acta de no conciliación laboral en Colombia y Bogotá. Incluye ejemplos, formato, requisitos, constancia de inasistencia y efectos legales.",
    author: {
      "@type": "Organization",
      name: "Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/acta-no-conciliacion-laboral",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <section className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="acta-no-conciliacion-laboral"
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>Guía legal laboral en Colombia</span>

            <motion.h1 className={styles.title}>
              Acta de no conciliación laboral en Colombia: modelo, formato y
              guía completa 2026
            </motion.h1>

            <p className={styles.text}>
              El <strong>acta de no conciliación laboral en Colombia</strong> es
              un documento mediante el cual un conciliador deja constancia de
              que una audiencia de conciliación terminó sin acuerdo entre las
              partes o que alguna de ellas no asistió a la diligencia
              programada.
            </p>

            <p className={styles.text}>
              En ciudades como <strong>Bogotá</strong>, Medellín, Cali,
              Barranquilla y otras regiones de Colombia, este documento es
              especialmente importante porque puede convertirse en un requisito
              previo para presentar una demanda laboral ante la jurisdicción
              ordinaria laboral.
            </p>

            <p className={styles.text}>
              Muchas búsquedas en Google relacionadas con{" "}
              <strong>“modelo de acta de no conciliación laboral”</strong>,{" "}
              <strong>“constancia de no conciliación en Bogotá”</strong> o{" "}
              <strong>
                “qué pasa si no hay acuerdo en conciliación laboral”
              </strong>{" "}
              tienen como objetivo entender cuáles son los efectos legales del
              documento y cómo puede utilizarse posteriormente dentro de un
              proceso judicial.
            </p>

            <div className={styles.note}>
              Importante: la conciliación laboral en Colombia busca resolver el
              conflicto antes de llegar a un juez. Cuando no existe acuerdo, la
              constancia demuestra que sí se intentó solucionar el problema por
              vía conciliatoria.
            </div>

            <h2 className={styles.subTitle}>
              ¿Qué es una no conciliación laboral?
            </h2>

            <p className={styles.text}>
              La no conciliación ocurre cuando trabajador y empleador no logran
              llegar a un acuerdo durante la audiencia de conciliación. Esto
              puede suceder porque:
            </p>

            <ul className={styles.list}>
              <li>Las partes no aceptan las condiciones propuestas.</li>
              <li>No existe disposición para negociar.</li>
              <li>Hay desacuerdo sobre valores o liquidaciones.</li>
              <li>El empleador niega la obligación reclamada.</li>
              <li>Alguna de las partes no asiste a la audiencia.</li>
              <li>No se presentan soportes suficientes.</li>
            </ul>

            <p className={styles.text}>
              En Bogotá y en toda Colombia, estas situaciones son frecuentes en
              conflictos relacionados con salarios pendientes, liquidaciones,
              despidos, prestaciones sociales, indemnizaciones y reclamaciones
              laborales.
            </p>

            <h2 className={styles.subTitle}>
              ¿Qué debe contener un acta de no conciliación laboral en Colombia?
            </h2>

            <p className={styles.text}>
              Un acta correctamente elaborada debe contener información clara y
              verificable sobre la audiencia realizada. Entre los elementos más
              importantes están:
            </p>

            <ul className={styles.list}>
              <li>Nombre del centro de conciliación.</li>
              <li>Ciudad y fecha de la audiencia.</li>
              <li>Hora de inicio y finalización.</li>
              <li>Nombre del conciliador.</li>
              <li>Datos completos del trabajador.</li>
              <li>Datos del empleador o empresa citada.</li>
              <li>Resumen breve del conflicto laboral.</li>
              <li>Constancia de no acuerdo o inasistencia.</li>
              <li>Firma del conciliador.</li>
              <li>Firma de las partes asistentes.</li>
            </ul>

            <h2 className={styles.subTitle}>
              Modelo de acta de no conciliación laboral
            </h2>

            <pre className={styles.pre}>
              {`ACTA DE NO CONCILIACIÓN LABORAL No. [●]

CENTRO DE CONCILIACIÓN: [●]
CIUDAD: Bogotá, Colombia
FECHA: [●]
HORA: [●]

CONCILIADOR:
Nombre: [●]

PARTES

TRABAJADOR:
Nombre: [●]
Documento: [●]

EMPLEADOR:
Empresa: [●]
Representante: [●]

OBJETO DEL CONFLICTO

El trabajador manifiesta reclamaciones relacionadas con:
[salarios / liquidación / prestaciones / despido / otros].

RESULTADO DE LA AUDIENCIA

Las partes manifiestan que no fue posible llegar
a un acuerdo conciliatorio respecto de las pretensiones discutidas.

En consecuencia, se deja constancia de NO CONCILIACIÓN.

FIRMAS

Conciliador: ___________________

Trabajador: ___________________

Empleador: ___________________`}
            </pre>

            <h2 className={styles.subTitle}>
              Modelo de constancia por inasistencia
            </h2>

            <pre className={styles.pre}>
              {`CONSTANCIA DE INASISTENCIA

En la ciudad de Bogotá, Colombia, siendo las [●],
se deja constancia de que la parte citada no compareció
a la audiencia de conciliación laboral programada.

Por lo anterior, se expide la presente constancia
para los fines legales correspondientes.

FIRMAS

Conciliador: ___________________`}
            </pre>

            <h2 className={styles.subTitle}>
              ¿Para qué sirve el acta de no conciliación laboral?
            </h2>

            <p className={styles.text}>
              En Colombia, este documento tiene múltiples utilidades jurídicas.
              Principalmente, permite demostrar que las partes intentaron
              resolver el conflicto antes de acudir a la vía judicial.
            </p>

            <p className={styles.text}>
              En muchas reclamaciones laborales en Bogotá y otras ciudades de
              Colombia, la constancia puede utilizarse como soporte procesal
              dentro de una demanda laboral.
            </p>

            <div className={styles.highlight}>
              <h3 className={styles.highlightTitle}>
                Casos laborales donde suele utilizarse
              </h3>

              <ul className={styles.highlightList}>
                <li>Despidos sin justa causa.</li>
                <li>Liquidaciones laborales pendientes.</li>
                <li>Prestaciones sociales no pagadas.</li>
                <li>Horas extras y recargos.</li>
                <li>Indemnizaciones laborales.</li>
                <li>Conflictos entre trabajador y empleador.</li>
                <li>Terminaciones de contrato.</li>
              </ul>
            </div>

            <h2 className={styles.subTitle}>
              ¿Qué pasa después de una no conciliación laboral?
            </h2>

            <p className={styles.text}>
              Cuando no existe acuerdo, cualquiera de las partes puede acudir a
              la jurisdicción laboral colombiana para que un juez resuelva el
              conflicto.
            </p>

            <p className={styles.text}>
              Por esta razón, es importante conservar el acta original o la
              constancia expedida por el centro de conciliación, especialmente
              en procesos laborales en Bogotá y Colombia donde se requiera
              demostrar el agotamiento del intento conciliatorio.
            </p>

            <div className={styles.note}>
              Consejo práctico: conservar correos, comprobantes de citación,
              liquidaciones, contratos y soportes laborales puede fortalecer el
              proceso judicial posterior.
            </div>

            <h2 className={styles.subTitle}>
              Preguntas frecuentes sobre no conciliación laboral en Colombia
            </h2>

            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h4>¿La no conciliación laboral sirve para demandar?</h4>

                <p>
                  Sí. En muchos casos en Colombia, la constancia sirve como
                  soporte previo para iniciar una demanda laboral.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿Qué pasa si el empleador no asiste?</h4>

                <p>
                  El conciliador deja constancia de inasistencia y el trabajador
                  puede continuar con las acciones judiciales correspondientes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿El acta tiene efectos legales?</h4>

                <p>
                  Sí. La constancia emitida por el centro de conciliación tiene
                  validez jurídica dentro del proceso laboral colombiano.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿La conciliación laboral es obligatoria en Colombia?</h4>

                <p>
                  Depende del caso concreto. En algunos conflictos puede ser un
                  requisito previo antes de acudir a un juez laboral.
                </p>
              </div>
            </div>

            <div className={styles.cta}>
              <h3 className={styles.ctaTitle}>
                ¿Necesitas orientación sobre conciliación laboral en Colombia?
              </h3>

              <p className={styles.ctaText}>
                Recibe acompañamiento sobre conciliaciones laborales,
                reclamaciones, liquidaciones y conflictos entre trabajador y
                empleador en Bogotá y toda Colombia.
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
        </div>
      </section>
    </>
  );
}
