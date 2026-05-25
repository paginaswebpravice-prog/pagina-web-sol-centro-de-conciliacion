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
          <span className={styles.badge}>
            Guía completa de conciliación laboral
          </span>

          <h1 className={styles.title}>
            Errores comunes en la conciliación laboral y cómo evitarlos en
            Colombia
          </h1>

          <p className={styles.intro}>
            La conciliación laboral en Colombia es uno de los mecanismos más
            utilizados para resolver conflictos entre trabajadores y empleadores
            sin necesidad de acudir a un proceso judicial. En ciudades como
            Bogotá, donde los procesos ante jueces laborales pueden tardar meses
            o incluso años, la conciliación se ha convertido en una alternativa
            rápida, económica y jurídicamente válida para solucionar diferencias
            relacionadas con salarios, liquidaciones, indemnizaciones,
            prestaciones sociales, despidos y acuerdos de pago.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, aunque muchas personas asisten a conciliaciones
            laborales buscando una solución rápida, en la práctica es muy común
            cometer errores que afectan el resultado final del acuerdo. La falta
            de preparación, el desconocimiento de los derechos laborales o la
            presión del momento pueden llevar a aceptar condiciones poco claras
            o económicamente desfavorables.
          </p>

          <p className={styles.paragraph}>
            Conocer los errores más frecuentes antes de asistir a una audiencia
            de conciliación laboral en Bogotá o cualquier ciudad de Colombia
            puede ayudarte a negociar mejor, proteger tus derechos y evitar
            problemas legales posteriores. Una conciliación bien preparada no
            solo aumenta las probabilidades de alcanzar un acuerdo, sino que
            también permite reducir riesgos futuros relacionados con
            incumplimientos, pagos incompletos o conflictos posteriores.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> el acta de conciliación tiene efectos
            legales y puede prestar mérito ejecutivo. Esto significa que, una
            vez firmada, puede exigirse judicialmente si una de las partes
            incumple lo pactado.
          </div>
        </motion.div>

        <motion.div
          className={styles.sectionText}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Por qué ocurren errores en una conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            Muchas personas llegan a una audiencia de conciliación laboral sin
            preparación previa o pensando que se trata únicamente de una
            conversación informal. En realidad, aunque el ambiente suele ser más
            flexible que un proceso judicial, la conciliación sigue teniendo
            consecuencias jurídicas importantes.
          </p>

          <p className={styles.paragraph}>
            También es frecuente que trabajadores o empleadores asistan con
            desconocimiento sobre cálculos laborales, liquidaciones,
            indemnizaciones o derechos mínimos establecidos en la legislación
            colombiana. Esto puede generar negociaciones desequilibradas o
            acuerdos que no reflejan realmente la situación del conflicto.
          </p>

          <p className={styles.paragraph}>
            Otro factor común es la presión emocional. En muchos casos existen
            tensiones acumuladas entre las partes, especialmente cuando se trata
            de despidos, incumplimientos salariales o conflictos laborales de
            larga duración. Negociar bajo presión, enojo o ansiedad puede llevar
            a tomar decisiones apresuradas.
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
          className={styles.sectionText}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Cómo prepararse mejor para una conciliación laboral
          </h2>

          <p className={styles.paragraph}>
            Prepararse adecuadamente antes de asistir a una conciliación laboral
            puede marcar una gran diferencia en el resultado final. Lo ideal es
            llegar con claridad sobre los hechos, los documentos disponibles y
            las pretensiones económicas o jurídicas que se desean negociar.
          </p>

          <p className={styles.paragraph}>
            También es recomendable revisar previamente liquidaciones,
            prestaciones sociales, indemnizaciones o valores pendientes para
            evitar aceptar cifras incorrectas durante la audiencia. En muchos
            casos, pequeños errores de cálculo pueden representar diferencias
            económicas importantes.
          </p>

          <p className={styles.paragraph}>
            La organización documental también juega un papel fundamental.
            Llevar contratos, desprendibles de nómina, chats, correos,
            certificaciones laborales o comprobantes de pago facilita que el
            conciliador comprenda el conflicto y ayuda a respaldar la posición
            de cada parte durante la negociación.
          </p>

          <p className={styles.paragraph}>
            Además, es importante asistir con disposición real para dialogar. La
            conciliación laboral en Colombia busca construir acuerdos prácticos,
            por lo que mantener una actitud flexible y enfocada en soluciones
            suele generar mejores resultados que adoptar posiciones totalmente
            cerradas.
          </p>
        </motion.div>

        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <strong>Consejo importante:</strong> antes de asistir a una
          conciliación laboral, organiza tus documentos, define tu objetivo
          principal, calcula correctamente los posibles valores a negociar y
          revisa cuidadosamente cualquier propuesta antes de aceptarla. Una
          conciliación bien preparada suele generar acuerdos más claros, seguros
          y sostenibles para ambas partes.
        </motion.div>

        <motion.div
          className={styles.sectionText}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Ventajas de evitar errores en conciliación laboral
          </h2>

          <p className={styles.paragraph}>
            Cuando la conciliación laboral se realiza correctamente, las partes
            pueden obtener múltiples beneficios. Un acuerdo claro y bien
            redactado ayuda a reducir riesgos legales, evita discusiones futuras
            y facilita el cumplimiento de las obligaciones pactadas.
          </p>

          <p className={styles.paragraph}>
            Además, evitar errores permite ahorrar tiempo y dinero frente a un
            proceso judicial laboral tradicional. Muchas conciliaciones en
            Colombia logran resolverse en una sola audiencia cuando existe buena
            preparación y disposición para negociar.
          </p>

          <p className={styles.paragraph}>
            También es importante recordar que una conciliación exitosa puede
            preservar relaciones laborales o comerciales, especialmente cuando
            las partes necesitan mantener comunicación posterior o continuar
            colaborando de alguna manera.
          </p>
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
              actas, análisis de documentos y estrategias de negociación para
              conciliaciones laborales en Bogotá y Colombia.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </motion.div>
      </div>
    </section>
  );
}
