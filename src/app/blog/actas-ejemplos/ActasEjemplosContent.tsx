"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ActasEjemplosContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acta de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación es el documento legal donde quedan registrados los acuerdos alcanzados entre las partes durante una conciliación en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En Colombia el acta de conciliación tiene efectos jurídicos y puede exigirse judicialmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué debe contener un acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debe contener identificación de las partes, descripción del conflicto, obligaciones claras, fechas de cumplimiento, forma de pago y firmas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde hacer conciliaciones en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las conciliaciones pueden realizarse en centros de conciliación autorizados, cámaras de comercio y entidades habilitadas en Bogotá y Colombia.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Actas de conciliación en Colombia: ejemplos y recomendaciones",
    description:
      "Guía completa sobre actas de conciliación en Bogotá y Colombia con ejemplos, formatos y recomendaciones legales.",
    keywords:
      "acta de conciliación ejemplo Colombia, formato acta conciliación Bogotá, conciliación Colombia, ejemplo acuerdo de pago conciliación",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    about: [
      "Conciliación en Colombia",
      "Acta de conciliación",
      "Conciliación extrajudicial",
      "Acuerdos legales",
      "Bogotá",
    ],
  };

  return (
    <>
      <Head>
        <title>
          Actas de conciliación en Colombia | Ejemplos y formatos 2026
        </title>

        <meta
          name="description"
          content="Conoce ejemplos de actas de conciliación en Bogotá y Colombia. Aprende cómo redactar acuerdos legales válidos y ejecutables."
        />

        <meta
          name="keywords"
          content="acta de conciliación ejemplo Colombia, formato acta conciliación Bogotá, acuerdo de pago conciliación Colombia, conciliación extrajudicial Bogotá"
        />

        <meta
          property="og:title"
          content="Actas de conciliación en Colombia: ejemplos y recomendaciones"
        />

        <meta
          property="og:description"
          content="Guía completa con ejemplos reales de actas de conciliación en Bogotá y Colombia."
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

      <section className={styles.wrapper}>
        <motion.article
          id="actas-ejemplos"
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          itemScope
          itemType="https://schema.org/Article"
        >
          <motion.h1
            className={styles.title}
            itemProp="headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Actas de conciliación en Colombia: ejemplos reales, modelos,
            formatos y guía completa para redactarlas correctamente (2026)
          </motion.h1>

          <motion.p
            className={styles.text}
            itemProp="description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Si estás buscando un{" "}
            <strong>ejemplo de acta de conciliación</strong>, un{" "}
            <strong>modelo de acuerdo conciliatorio</strong>, un
            <strong> formato de acta de conciliación</strong> o simplemente
            deseas conocer cómo debe redactarse correctamente este documento en
            Colombia, esta guía reúne ejemplos prácticos, recomendaciones
            jurídicas y los elementos indispensables que debe contener un acta
            para brindar mayor claridad y seguridad a las partes involucradas.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            El acta de conciliación constituye el documento mediante el cual se
            formalizan los acuerdos alcanzados durante una audiencia de
            conciliación. Allí quedan registradas las obligaciones asumidas por
            las partes, las condiciones para su cumplimiento, los plazos
            establecidos y todos los compromisos que permiten solucionar el
            conflicto de forma voluntaria sin necesidad de prolongar la
            controversia.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En Colombia este documento es utilizado en conciliaciones civiles,
            comerciales, familiares, de tránsito, de arrendamiento, conflictos
            entre particulares, acuerdos de pago y múltiples controversias
            susceptibles de conciliación. Una redacción adecuada resulta
            fundamental para evitar interpretaciones ambiguas y facilitar el
            cumplimiento de las obligaciones pactadas.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A lo largo de esta guía encontrarás modelos completos, ejemplos
            reales, recomendaciones para redactar correctamente un acta de
            conciliación, errores frecuentes que deben evitarse y respuestas a
            las dudas más comunes sobre este documento jurídico en Colombia.
          </motion.p>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              <strong>Consejo práctico:</strong> una buena acta de conciliación
              debe contener obligaciones claras, fechas específicas, valores
              exactos, mecanismos verificables de cumplimiento y compromisos
              redactados de forma precisa para reducir futuros conflictos.
            </p>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Qué es un acta de conciliación en Colombia?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            El acta de conciliación es el documento donde se registran los
            acuerdos alcanzados por las partes durante una audiencia de
            conciliación en Colombia.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Este documento debe contener información clara sobre las partes, el
            conflicto, las obligaciones pactadas y las condiciones de
            cumplimiento. Una redacción precisa evita problemas futuros y
            facilita exigir el cumplimiento en caso de incumplimiento.
          </motion.p>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Cómo redactar un acta de conciliación en Colombia paso a paso (Guía
            completa)
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Una de las dudas más frecuentes entre las personas que asisten a una
            audiencia de conciliación es{" "}
            <strong>cómo redactar correctamente un acta de conciliación</strong>
            . Aunque cada conflicto tiene características propias, todas las
            actas deben cumplir ciertos requisitos mínimos para dejar claramente
            definidos los compromisos asumidos por las partes.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Una buena redacción evita interpretaciones ambiguas, reduce el
            riesgo de nuevos conflictos y facilita el cumplimiento de lo
            acordado. Por ello, el documento debe escribirse utilizando un
            lenguaje claro, preciso y fácilmente comprensible para todas las
            personas involucradas.
          </motion.p>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              <strong>Recomendación:</strong> cada obligación incluida en el
              acta debe responder claramente cuatro preguntas:{" "}
              <strong>qué</strong> se debe hacer,
              <strong> quién</strong> debe cumplirla,
              <strong> cuándo</strong> debe ejecutarse y<strong> cómo</strong>{" "}
              podrá verificarse su cumplimiento.
            </p>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Estructura básica de un acta de conciliación
          </motion.h2>

          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                1. Identificación de las partes
              </h3>

              <p className={styles.cardText}>
                Deben incluirse nombres completos, documentos de identidad,
                dirección, teléfonos y demás datos que permitan identificar
                plenamente a quienes participan en la conciliación.
              </p>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                2. Descripción del conflicto
              </h3>

              <p className={styles.cardText}>
                Debe explicarse de manera objetiva cuál fue el origen de la
                controversia y cuáles fueron las pretensiones planteadas durante
                la audiencia.
              </p>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>3. Acuerdos alcanzados</h3>

              <p className={styles.cardText}>
                Constituye la parte más importante del documento. Allí se
                consignan todas las obligaciones asumidas por cada una de las
                partes.
              </p>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>4. Forma de cumplimiento</h3>

              <p className={styles.cardText}>
                Deben establecerse fechas, valores, lugares, medios de pago,
                entregas, plazos y cualquier condición necesaria para ejecutar
                el acuerdo.
              </p>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>5. Firmas</h3>

              <p className={styles.cardText}>
                El documento debe ser firmado por las partes y por el
                conciliador para dejar constancia del acuerdo alcanzado.
              </p>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>6. Fecha de elaboración</h3>

              <p className={styles.cardText}>
                Es indispensable indicar el lugar y la fecha en la que se
                celebró la audiencia de conciliación.
              </p>
            </motion.section>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Características de una buena acta de conciliación
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <li>Redacción clara y fácil de interpretar.</li>
            <li>Obligaciones específicas para cada una de las partes.</li>
            <li>Fechas exactas de cumplimiento.</li>
            <li>Valores correctamente definidos.</li>
            <li>Forma de pago claramente establecida.</li>
            <li>Mecanismos para verificar el cumplimiento.</li>
            <li>Datos completos de los conciliantes.</li>
            <li>Descripción precisa del conflicto.</li>
            <li>Ausencia de términos ambiguos.</li>
            <li>Firmas de todos los intervinientes.</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mientras más específico sea el contenido del acta, menores serán las
            posibilidades de que surjan nuevas diferencias sobre la
            interpretación del acuerdo. Por ello resulta aconsejable evitar
            expresiones generales como "próximamente", "cuando sea posible" o
            "más adelante", sustituyéndolas por fechas concretas, valores
            determinados y obligaciones perfectamente identificables.
          </motion.p>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ejemplos de actas de conciliación en Colombia
          </motion.h2>

          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Ejemplo 1: Acuerdo de pago (deuda)
              </h3>

              <p className={styles.cardText}>
                Este tipo de conciliación es frecuente en Bogotá y Colombia
                cuando existen obligaciones económicas pendientes entre personas
                o empresas.
              </p>

              <motion.pre className={styles.pre}>
                {`Conciliantes B reconoce(n) deber a Conciliantes A la suma de $[●] COP, 
y se obliga(n) a pagarla en [●] cuotas mensuales de $[●] cada una, 
los días [●] de cada mes, mediante transferencia a la cuenta [●].

El pago se acredita con el comprobante de la entidad bancaria 
enviado al correo [●]. En caso de incumplimiento de una cuota, 
se hará exigible el saldo total de la obligación.`}
              </motion.pre>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Ejemplo 2: Entrega de bien o servicio
              </h3>

              <p className={styles.cardText}>
                Este formato puede utilizarse en conciliaciones comerciales,
                civiles o contractuales relacionadas con entrega de productos o
                prestación de servicios.
              </p>

              <motion.pre className={styles.pre}>
                {`Conciliantes B se obliga(n) a entregar el bien [●] el día [●] 
en la dirección [●], con estas características: [●].

La entrega se formaliza con acta de entrega firmada por ambas partes 
y registro fotográfico. Con la entrega se entenderá cumplida la obligación.`}
              </motion.pre>
            </motion.section>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Modelos de actas de conciliación según el tipo de conflicto
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            No existe un único modelo de acta de conciliación aplicable a todos
            los casos. La estructura básica suele ser similar, pero las
            obligaciones y compromisos varían dependiendo del conflicto que se
            busca solucionar.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            A continuación encontrarás algunos de los ejemplos más consultados
            por personas y empresas que buscan resolver controversias mediante
            conciliación en Colombia.
          </motion.p>

          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Acta de conciliación por deuda entre particulares
              </h3>

              <p className={styles.cardText}>
                Utilizada cuando una persona reconoce una obligación económica
                pendiente y acuerda un plan de pago con el acreedor.
              </p>

              <ul className={styles.list}>
                <li>Valor total adeudado.</li>
                <li>Número de cuotas.</li>
                <li>Fechas de pago.</li>
                <li>Medio de pago.</li>
                <li>Consecuencias del incumplimiento.</li>
              </ul>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Acta de conciliación por arrendamiento
              </h3>

              <p className={styles.cardText}>
                Frecuente en conflictos entre arrendadores e inquilinos
                relacionados con cánones pendientes, restitución de inmuebles o
                daños locativos.
              </p>

              <ul className={styles.list}>
                <li>Pago de cánones adeudados.</li>
                <li>Fecha de entrega del inmueble.</li>
                <li>Estado de entrega.</li>
                <li>Servicios públicos pendientes.</li>
                <li>Inventarios y soportes.</li>
              </ul>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Acta de conciliación comercial
              </h3>

              <p className={styles.cardText}>
                Utilizada por empresas, proveedores, contratistas y comerciantes
                para solucionar controversias derivadas de relaciones
                comerciales.
              </p>

              <ul className={styles.list}>
                <li>Facturas pendientes.</li>
                <li>Incumplimientos contractuales.</li>
                <li>Entrega de productos.</li>
                <li>Prestación de servicios.</li>
                <li>Compensaciones económicas.</li>
              </ul>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Acta de conciliación familiar
              </h3>

              <p className={styles.cardText}>
                Se utiliza para formalizar acuerdos relacionados con
                obligaciones familiares y responsabilidades entre las partes.
              </p>

              <ul className={styles.list}>
                <li>Cuotas alimentarias.</li>
                <li>Régimen de visitas.</li>
                <li>Distribución de gastos.</li>
                <li>Compromisos familiares.</li>
                <li>Fechas de cumplimiento.</li>
              </ul>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Acta de conciliación por daños y perjuicios
              </h3>

              <p className={styles.cardText}>
                Utilizada cuando una persona reconoce la obligación de reparar
                daños ocasionados a otra persona o empresa.
              </p>

              <ul className={styles.list}>
                <li>Descripción del daño.</li>
                <li>Valor acordado.</li>
                <li>Forma de indemnización.</li>
                <li>Fechas de pago.</li>
                <li>Condiciones de cumplimiento.</li>
              </ul>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Acta de conciliación por conflictos vecinales
              </h3>

              <p className={styles.cardText}>
                Muy utilizada para resolver diferencias relacionadas con
                convivencia, ruido, uso de zonas comunes o afectaciones entre
                vecinos.
              </p>

              <ul className={styles.list}>
                <li>Compromisos de convivencia.</li>
                <li>Horarios permitidos.</li>
                <li>Uso de espacios comunes.</li>
                <li>Medidas correctivas.</li>
                <li>Seguimiento del acuerdo.</li>
              </ul>
            </motion.section>
          </motion.div>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Aunque los conflictos son diferentes, todas las actas de
              conciliación comparten una característica fundamental: las
              obligaciones deben quedar redactadas de manera clara, verificable
              y específica para facilitar su cumplimiento y reducir futuras
              controversias.
            </p>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Qué efectos legales tiene un acta de conciliación en Colombia?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Una vez las partes alcanzan un acuerdo durante la audiencia y este
            queda consignado en el acta de conciliación, el documento adquiere
            importantes efectos jurídicos previstos por la legislación
            colombiana. Por esta razón, resulta fundamental que todas las
            obligaciones queden redactadas de manera clara, precisa y
            verificable.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Muchas personas consideran que el acta es simplemente un documento
            donde se registran los acuerdos alcanzados durante la audiencia. Sin
            embargo, su importancia va mucho más allá, ya que constituye el
            soporte jurídico del compromiso asumido voluntariamente por las
            partes.
          </motion.p>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Una conciliación correctamente documentada proporciona mayor
              seguridad jurídica, disminuye la posibilidad de nuevos conflictos
              y facilita la ejecución de las obligaciones pactadas cuando alguna
              de las partes incumple el acuerdo.
            </p>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Principales efectos jurídicos del acta de conciliación
          </motion.h2>

          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Constituye un acuerdo formal
              </h3>

              <p className={styles.cardText}>
                El documento deja constancia escrita de todas las obligaciones
                aceptadas por las partes durante la audiencia de conciliación.
              </p>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>Brinda seguridad jurídica</h3>

              <p className={styles.cardText}>
                Las condiciones del acuerdo quedan claramente definidas,
                reduciendo interpretaciones ambiguas o desacuerdos posteriores.
              </p>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>Facilita el cumplimiento</h3>

              <p className={styles.cardText}>
                Al establecer fechas, valores y obligaciones específicas, las
                partes conocen exactamente cuáles son los compromisos
                adquiridos.
              </p>
            </motion.section>

            <motion.section className={styles.innerCard}>
              <h3 className={styles.innerTitle}>
                Sirve como soporte documental
              </h3>

              <p className={styles.cardText}>
                El acta permite demostrar cuáles fueron los acuerdos alcanzados
                durante la conciliación y las condiciones pactadas para su
                ejecución.
              </p>
            </motion.section>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Por qué es importante redactar correctamente el acta?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            La calidad de la redacción influye directamente en la claridad del
            acuerdo. Cuando las obligaciones se describen de manera imprecisa,
            pueden surgir interpretaciones diferentes respecto de lo que
            realmente se comprometieron a cumplir las partes.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Por esta razón, cada obligación debe indicar de forma expresa quién
            debe cumplirla, qué debe hacer, cuándo debe hacerlo, dónde debe
            ejecutarse, cuál es el valor involucrado —si existe— y cómo podrá
            verificarse su cumplimiento.
          </motion.p>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Qué ocurre si una de las partes incumple el acta de conciliación?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Uno de los aspectos que más preocupa a quienes participan en una
            audiencia de conciliación es el posible incumplimiento de los
            compromisos adquiridos. Por ello, resulta indispensable que el
            documento describa con precisión todas las obligaciones, los plazos
            y la forma en que estas deberán ejecutarse.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Una adecuada redacción facilita identificar cuándo una obligación ha
            sido cumplida y cuándo existe un incumplimiento, evitando
            discusiones derivadas de cláusulas ambiguas o poco específicas.
          </motion.p>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Antes de firmar el acta es recomendable revisar cuidadosamente
              cada una de las cláusulas, confirmar que las fechas sean
              correctas, verificar los valores pactados y asegurarse de que
              todas las obligaciones puedan comprenderse sin necesidad de
              realizar interpretaciones adicionales.
            </p>
          </motion.div>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Buenas prácticas para elaborar un acta de conciliación
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <li>Utilizar lenguaje sencillo y preciso.</li>
            <li>Evitar términos ambiguos.</li>
            <li>Definir fechas exactas.</li>
            <li>Precisar valores y obligaciones.</li>
            <li>Establecer mecanismos verificables de cumplimiento.</li>
            <li>Identificar plenamente a las partes.</li>
            <li>Revisar el documento antes de firmarlo.</li>
            <li>Conservar copias del acta y de sus anexos.</li>
          </motion.ul>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Qué debe tener un acta de conciliación válida en Colombia
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <li>Identificación completa de las partes.</li>
            <li>Descripción clara y concreta del conflicto.</li>
            <li>Obligaciones específicas y verificables.</li>
            <li>Fechas exactas de cumplimiento.</li>
            <li>Forma de pago o forma de entrega.</li>
            <li>Consecuencias jurídicas del incumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
            <li>Datos del centro de conciliación.</li>
          </motion.ul>

          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Recomendaciones para redactar acuerdos de conciliación
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En Bogotá y Colombia es recomendable que las obligaciones incluyan
            fechas exactas, montos claros y mecanismos verificables de
            cumplimiento. También es importante definir soportes como
            comprobantes de pago, actas de entrega o correos electrónicos.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Un acuerdo bien redactado reduce el riesgo de nuevos conflictos y
            permite que las partes tengan mayor seguridad jurídica frente al
            cumplimiento de lo pactado.
          </motion.p>

          <motion.details
            className={styles.details}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <summary className={styles.summary}>
              Errores típicos que hacen débil un acta de conciliación
            </summary>

            <ul className={styles.detailsList}>
              <li>No poner fechas exactas.</li>
              <li>No definir medio de pago o entrega.</li>
              <li>No anexar soportes.</li>
              <li>No identificar correctamente a las partes.</li>
              <li>Dejar obligaciones ambiguas.</li>
              <li>No especificar consecuencias del incumplimiento.</li>
              <li>No dejar evidencia verificable.</li>
            </ul>
          </motion.details>

          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.ctaTitle}>
              ¿Necesitas orientación sobre conciliación en Bogotá o Colombia?
            </h3>

            <p className={styles.ctaText}>
              Recibe asesoría sobre conciliación extrajudicial, acuerdos
              legales, recuperación de cartera y resolución de conflictos
              civiles, comerciales y familiares.
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
      </section>
    </>
  );
}
