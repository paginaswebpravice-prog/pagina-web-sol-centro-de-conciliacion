"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

const errores = [
  {
    title: "Llegar sin una propuesta económica clara",
    text: "Uno de los errores más comunes en conciliación laboral es asistir a la audiencia sin definir cuánto se va a solicitar, cuáles serían las condiciones mínimas aceptables o cómo debería realizarse el pago. Tener claridad sobre valores, fechas y formas de cumplimiento facilita la negociación y evita acuerdos improvisados.",
  },
  {
    title: "No llevar documentos o soportes laborales",
    text: "Contratos, desprendibles de nómina, conversaciones, certificados, correos electrónicos o comprobantes de pago pueden ser fundamentales durante la conciliación. La falta de soportes dificulta demostrar obligaciones, incumplimientos o acuerdos previos entre las partes.",
  },
  {
    title: "Firmar el acta sin revisar cada punto",
    text: "Muchas personas firman acuerdos rápidamente por presión o desconocimiento. Sin embargo, el acta de conciliación tiene efectos legales y puede prestar mérito ejecutivo. Por eso, es importante revisar cuidadosamente montos, fechas, obligaciones y condiciones antes de firmar.",
  },
  {
    title: "Aceptar acuerdos ambiguos o incompletos",
    text: "Cuando el acuerdo no especifica claramente valores, cuotas, fechas o consecuencias del incumplimiento, pueden surgir nuevos conflictos más adelante. Una conciliación efectiva debe dejar obligaciones concretas y verificables.",
  },
  {
    title: "Pensar que la conciliación funciona como un juicio",
    text: "La conciliación laboral no busca determinar ganadores o perdedores. Su objetivo principal es construir acuerdos que permitan solucionar el conflicto de manera rápida, legal y menos desgastante para ambas partes.",
  },
];

export default function ErroresComunesContent() {
  return (
    <section id="errores" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Guía de conciliación laboral</span>

          <h1 className={styles.title}>
            Errores comunes en la conciliación laboral y cómo evitarlos
          </h1>

          <p className={styles.intro}>
            La conciliación laboral en Colombia es uno de los mecanismos más
            utilizados para resolver conflictos entre trabajadores y empleadores
            sin acudir a un proceso judicial. Sin embargo, muchos acuerdos se
            complican por errores de preparación, desconocimiento o falta de
            claridad durante la audiencia.
          </p>

          <p className={styles.paragraph}>
            Conocer los errores más frecuentes antes de asistir a una
            conciliación laboral en Bogotá o cualquier ciudad de Colombia puede
            ayudarte a negociar mejor, proteger tus derechos y evitar problemas
            legales posteriores.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {errores.map((error, index) => (
            <motion.article
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className={styles.cardNumber}>0{index + 1}</div>

              <h2>{error.title}</h2>

              <p>{error.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <strong>Consejo importante:</strong> antes de asistir a una
          conciliación laboral, organiza tus documentos, define tu objetivo
          principal y revisa cuidadosamente cualquier propuesta antes de
          aceptarla.
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <strong className={styles.ctaTitle}>
              ¿Necesitas orientación antes de tu conciliación laboral?
            </strong>

            <p className={styles.ctaText}>
              Recibe asesoría sobre liquidaciones, acuerdos de pago, revisión de
              actas y estrategias de negociación en conciliaciones laborales en
              Bogotá y Colombia.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </motion.div>
      </div>
    </section>
  );
}
