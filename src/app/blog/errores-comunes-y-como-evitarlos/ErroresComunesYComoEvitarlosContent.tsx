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

  {
    title: "No escuchar las propuestas de la otra parte",
    text: "Algunas personas llegan convencidas de que solo existe una solución posible y rechazan cualquier alternativa. La conciliación requiere disposición para dialogar y evaluar opciones que beneficien a ambas partes.",
  },
  {
    title: "No calcular correctamente la liquidación laboral",
    text: "Aceptar o proponer cifras sin verificar salarios, prestaciones sociales, vacaciones, cesantías o indemnizaciones puede conducir a acuerdos injustos o alejados de la realidad.",
  },
  {
    title: "Dejar aspectos importantes únicamente de forma verbal",
    text: "Todo compromiso debe quedar consignado dentro del acta de conciliación. Los acuerdos verbales posteriores suelen generar confusiones y dificultades para exigir su cumplimiento.",
  },
  {
    title: "Asistir únicamente por obligación",
    text: "Cuando alguna de las partes participa sin intención de negociar, resulta mucho más difícil alcanzar un acuerdo. La conciliación funciona mejor cuando existe voluntad real de solucionar el conflicto.",
  },
  {
    title: "No solicitar aclaraciones antes de firmar",
    text: "Si existe alguna cláusula que no sea completamente clara, es recomendable solicitar explicaciones antes de firmar el acta. Una duda resuelta a tiempo puede evitar futuros inconvenientes.",
  },
];

export default function ErroresComunesContent() {
  return (
    <section id="errores" className={styles.section}>
      <div className={styles.container}>
        {/* HERO */}
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
            10 errores comunes en la conciliación laboral en Colombia y cómo
            evitarlos
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

          <p className={styles.paragraph}>
            Tanto trabajadores como empleadores pueden cometer errores que
            afectan el resultado de una conciliación. En muchos casos, pequeños
            descuidos terminan generando pérdidas económicas, acuerdos difíciles
            de cumplir o incluso nuevos procesos judiciales. Conocer estos
            errores antes de asistir a la audiencia permite negociar con mayor
            tranquilidad y tomar decisiones mejor informadas.
          </p>

          <p className={styles.paragraph}>
            En esta guía encontrarás recomendaciones prácticas, situaciones
            frecuentes y consejos que te ayudarán a aprovechar la conciliación
            como un mecanismo efectivo para resolver conflictos laborales de
            forma rápida, segura y con respaldo jurídico.
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

        <div className={styles.sectionText}>
          <h2 className={styles.subtitle}>
            ¿Qué consecuencias puede tener cometer estos errores?
          </h2>

          <p className={styles.paragraph}>
            Aunque la conciliación busca solucionar conflictos de manera
            amistosa, aceptar un acuerdo sin analizarlo adecuadamente puede
            traer consecuencias económicas y jurídicas importantes. Una vez
            firmada el acta, las obligaciones allí pactadas deberán cumplirse
            por ambas partes.
          </p>

          <p className={styles.paragraph}>
            Entre las consecuencias más frecuentes se encuentran aceptar pagos
            inferiores a los realmente adeudados, establecer fechas imposibles
            de cumplir, generar nuevas discusiones sobre la interpretación del
            acuerdo o incluso tener que acudir posteriormente a procesos
            judiciales para exigir el cumplimiento de lo pactado.
          </p>
        </div>

        <div className={styles.sectionText}>
          <h2 className={styles.subtitle}>
            Señales de que una conciliación está bien preparada
          </h2>

          <div className={styles.grid}>
            <article className={styles.card}>
              <h2>Documentos completos</h2>
              <p>
                Las partes cuentan con contratos, comprobantes, liquidaciones y
                demás soportes necesarios.
              </p>
            </article>

            <article className={styles.card}>
              <h2>Objetivos definidos</h2>
              <p>
                Existe claridad sobre qué se desea negociar y cuáles son los
                límites de la negociación.
              </p>
            </article>

            <article className={styles.card}>
              <h2>Acuerdos específicos</h2>
              <p>
                El documento establece valores, fechas, obligaciones y
                consecuencias frente a posibles incumplimientos.
              </p>
            </article>
          </div>
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

        <div className={styles.sectionText}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable solicitar orientación antes de una
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            Buscar orientación antes de asistir a una audiencia resulta
            especialmente útil cuando existen desacuerdos sobre liquidaciones,
            indemnizaciones, prestaciones sociales, pagos pendientes, despidos o
            cualquier otro aspecto cuya cuantía pueda generar discusión entre
            las partes.
          </p>

          <p className={styles.paragraph}>
            Una revisión previa del caso permite identificar riesgos, organizar
            la documentación y preparar propuestas de acuerdo más claras,
            aumentando las posibilidades de alcanzar una solución satisfactoria
            durante la audiencia.
          </p>
        </div>

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
