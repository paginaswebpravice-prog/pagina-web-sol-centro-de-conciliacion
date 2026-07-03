"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ActaAlimentosContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿El acta de conciliación de alimentos tiene validez legal en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación en Colombia tiene efectos jurídicos y presta mérito ejecutivo, lo que significa que puede exigirse judicialmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde se puede hacer una conciliación de alimentos en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación de alimentos puede realizarse en centros de conciliación autorizados, consultorios jurídicos y entidades habilitadas en Bogotá y otras ciudades de Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el padre o madre incumple la cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El incumplimiento de la cuota alimentaria puede generar procesos ejecutivos, embargos y otras acciones legales en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación de alimentos requiere abogado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No siempre. En Colombia es posible adelantar conciliaciones de alimentos sin abogado en centros autorizados.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede modificar una cuota alimentaria acordada en conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando cambian las condiciones económicas o las necesidades del menor, las partes pueden solicitar una nueva conciliación.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Acta de conciliación de alimentos en Colombia: ejemplo completo, requisitos y guía legal 2026",
    description:
      "Conoce cómo hacer un acta de conciliación de alimentos en Colombia y Bogotá. Ejemplo completo, requisitos legales, cuotas alimentarias y preguntas frecuentes.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/acta-conciliacion-alimentos",
    articleSection: "Derecho de Familia",
    keywords:
      "acta de conciliación de alimentos Colombia, ejemplo cuota alimentaria Bogotá, conciliación alimentos Colombia, cuota alimentaria Bogotá, conciliación familiar Colombia",
    about: [
      "Conciliación de alimentos",
      "Derecho de familia",
      "Cuota alimentaria",
      "Acta de conciliación en Colombia",
    ],
  };

  return (
    <>
      <Head>
        <title>
          Acta de conciliación de alimentos en Colombia | Ejemplo y guía 2026
        </title>

        <meta
          name="description"
          content="Aprende cómo hacer un acta de conciliación de alimentos en Colombia y Bogotá. Incluye ejemplo completo, requisitos legales, cuotas alimentarias y preguntas frecuentes."
        />

        <meta
          name="keywords"
          content="acta de conciliación de alimentos Colombia, ejemplo cuota alimentaria Bogotá, conciliación alimentos Bogotá, conciliación familiar Colombia, cuota alimentaria en Colombia"
        />

        <meta
          property="og:title"
          content="Acta de conciliación de alimentos en Colombia (guía completa 2026)"
        />

        <meta
          property="og:description"
          content="Conoce cómo redactar correctamente un acta de conciliación de alimentos en Colombia y Bogotá con ejemplo completo y requisitos legales."
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

      <div
        className={styles.wrapper}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className={styles.container}>
          <motion.article
            id="acta-alimentos"
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h1 className={styles.title} itemProp="headline">
              Acta de conciliación de alimentos en Colombia: formato, ejemplo
              completo, requisitos y efectos legales
            </motion.h1>

            <p className={styles.text} itemProp="description">
              Si estás buscando información sobre una{" "}
              <strong>acta de conciliación de alimentos en Colombia</strong>, un{" "}
              <strong>ejemplo de cuota alimentaria en Bogotá</strong> o cómo
              realizar correctamente una conciliación familiar, esta guía te
              explica paso a paso cómo funciona este procedimiento, qué
              requisitos exige la ley colombiana y qué debe contener un acuerdo
              válido y ejecutable.
            </p>

            <p className={styles.text}>
              En ciudades como <strong>Bogotá</strong>, Medellín, Cali y otras
              regiones de <strong>Colombia</strong>, la conciliación de
              alimentos se ha convertido en uno de los mecanismos más utilizados
              para resolver conflictos familiares sin necesidad de acudir a un
              proceso judicial largo y costoso.
            </p>

            <p className={styles.text}>
              Este mecanismo permite establecer acuerdos relacionados con:
            </p>

            <ul className={styles.list}>
              <li>Cuotas alimentarias mensuales.</li>
              <li>Gastos escolares y educativos.</li>
              <li>Gastos médicos y de salud.</li>
              <li>Vestuario y manutención.</li>
              <li>Obligaciones compartidas entre padres.</li>
            </ul>

            <h2 className={styles.subTitle}>
              ¿Qué es un acta de conciliación de alimentos en Colombia?
            </h2>

            <p className={styles.text}>
              El acta de conciliación de alimentos es un documento legal
              mediante el cual las partes llegan a un acuerdo voluntario sobre
              el pago de alimentos para menores de edad o personas con derecho a
              recibir apoyo económico.
            </p>

            <p className={styles.text}>
              En Colombia, este documento tiene efectos jurídicos importantes,
              ya que presta mérito ejecutivo. Esto significa que, si una de las
              partes incumple, el acuerdo puede ser exigido judicialmente.
            </p>

            <h2 className={styles.subTitle}>
              ¿Qué establece el artículo 411 del Código Civil colombiano?
            </h2>

            <p className={styles.text}>
              El artículo 411 del Código Civil colombiano establece quiénes
              tienen la obligación legal de suministrar alimentos y en qué casos
              puede exigirse esta responsabilidad.
            </p>

            <ul className={styles.list}>
              <li>Capacidad económica del obligado.</li>
              <li>Necesidades reales del menor.</li>
              <li>Principio de proporcionalidad.</li>
              <li>Condiciones de vida del beneficiario.</li>
            </ul>

            <div className={styles.note}>
              En Colombia es recomendable anexar soportes de ingresos, gastos y
              certificados laborales para fortalecer la validez del acuerdo.
            </div>

            <h2 className={styles.subTitle}>
              Ventajas de realizar una conciliación de alimentos antes de
              iniciar una demanda judicial
            </h2>

            <ul className={styles.list}>
              <li>Evita procesos judiciales largos y costosos.</li>
              <li>Permite llegar a acuerdos voluntarios entre las partes.</li>
              <li>El acta de conciliación tiene plena validez jurídica.</li>
              <li>Protege el interés superior del menor.</li>
              <li>Reduce el desgaste emocional de la familia.</li>
              <li>
                Facilita el cumplimiento de las obligaciones alimentarias.
              </li>
              <li>
                Puede servir como requisito antes de acudir a un juez cuando la
                ley lo exige.
              </li>
              <li>
                Permite modificar posteriormente los acuerdos mediante una nueva
                conciliación.
              </li>
            </ul>

            <h2 className={styles.subTitle}>
              ¿Qué debe contener un acta de conciliación de alimentos?
            </h2>

            <ul className={styles.list}>
              <li>Identificación completa de las partes.</li>
              <li>Datos del menor o beneficiario.</li>
              <li>Valor exacto de la cuota alimentaria.</li>
              <li>Periodicidad de los pagos.</li>
              <li>Forma de pago acordada.</li>
              <li>Distribución de gastos extraordinarios.</li>
              <li>Cláusulas de incumplimiento.</li>
            </ul>

            <h2 className={styles.subTitle}>
              Ejemplo de acta de conciliación de alimentos en Colombia
            </h2>

            <pre className={styles.pre}>
              {`ACTA DE CONCILIACIÓN DE ALIMENTOS – COLOMBIA

Ciudad: Bogotá D.C.
Fecha: [●]

I. PARTES

Solicitante: [●]
Cédula: [●]

Citado: [●]
Cédula: [●]

II. BENEFICIARIO

Nombre del menor: [●]
Registro civil: [●]

III. ACUERDOS

1. Cuota alimentaria:
El obligado pagará la suma de $[●] COP mensuales.

2. Forma de pago:
Transferencia bancaria dentro de los primeros cinco días de cada mes.

3. Educación y salud:
Las partes asumirán proporcionalmente gastos extraordinarios.

4. Incumplimiento:
El presente acuerdo presta mérito ejecutivo conforme a la legislación colombiana.`}
            </pre>

            <h2 className={styles.subTitle}>
              Documentos necesarios para una conciliación de alimentos en
              Colombia
            </h2>

            <p className={styles.text}>
              Antes de asistir a una audiencia de conciliación es recomendable
              reunir la documentación que permita identificar a las partes y
              demostrar la capacidad económica del obligado y las necesidades
              del beneficiario.
            </p>

            <ul className={styles.list}>
              <li>Cédula de ciudadanía de las partes.</li>
              <li>Registro civil del menor.</li>
              <li>Pruebas de ingresos o certificados laborales.</li>
              <li>Soportes de gastos escolares.</li>
              <li>Facturas médicas si existen.</li>
              <li>Comprobantes de vivienda y alimentación.</li>
              <li>
                Cualquier documento que ayude a determinar una cuota justa.
              </li>
            </ul>

            <h2 className={styles.subTitle}>
              ¿Cómo se calcula la cuota alimentaria en Colombia?
            </h2>

            <p className={styles.text}>
              En Colombia no existe una tabla fija para calcular la cuota
              alimentaria. El valor depende de las necesidades del menor, la
              capacidad económica de quien debe suministrar los alimentos y el
              principio de proporcionalidad establecido por la legislación
              colombiana.
            </p>

            <p className={styles.text}>
              Durante la conciliación las partes pueden acordar libremente el
              valor de la cuota siempre que se protejan los derechos del
              beneficiario. También es común definir la forma en que se asumirán
              gastos extraordinarios relacionados con educación, salud,
              recreación y transporte.
            </p>

            <h2 className={styles.subTitle}>
              ¿Qué ocurre si una de las partes incumple el acta de conciliación?
            </h2>

            <p className={styles.text}>
              Cuando una persona incumple las obligaciones pactadas en un acta
              de conciliación de alimentos, la otra parte puede acudir ante un
              juez para exigir su cumplimiento mediante un proceso ejecutivo, ya
              que el acta presta mérito ejecutivo conforme a la legislación
              colombiana.
            </p>

            <p className={styles.text}>
              Dependiendo del caso también podrán solicitarse medidas
              cautelares, embargos u otras actuaciones judiciales destinadas a
              garantizar el pago de la cuota alimentaria y proteger los derechos
              del menor.
            </p>

            <h2 className={styles.subTitle}>
              ¿Dónde hacer una conciliación de alimentos en Colombia?
            </h2>

            <p className={styles.text}>
              Las conciliaciones de alimentos pueden realizarse en centros de
              conciliación autorizados por el Ministerio de Justicia,
              consultorios jurídicos de universidades y otras entidades
              habilitadas para adelantar este procedimiento.
            </p>

            <p className={styles.text}>
              En Bogotá y otras ciudades del país es posible realizar
              conciliaciones tanto presenciales como virtuales, dependiendo de
              la entidad que conozca del caso.
            </p>

            <h2 className={styles.subTitle}>
              Errores frecuentes al elaborar un acta de conciliación de
              alimentos
            </h2>

            <ul className={styles.list}>
              <li>No establecer claramente el valor de la cuota.</li>
              <li>No indicar la fecha exacta de pago.</li>
              <li>No definir la forma de consignación.</li>
              <li>No regular los gastos extraordinarios.</li>
              <li>No identificar correctamente a las partes.</li>
              <li>No establecer consecuencias frente al incumplimiento.</li>
              <li>
                No actualizar la cuota cuando cambian las circunstancias
                económicas.
              </li>
            </ul>

            <h2 className={styles.subTitle}>
              Preguntas frecuentes sobre conciliación de alimentos en Colombia
            </h2>

            <div className={styles.faq}>
              <h4>
                ¿El acta de conciliación de alimentos tiene validez legal?
              </h4>

              <p>
                Sí. En Colombia el acta tiene efectos jurídicos y puede ser
                ejecutada judicialmente.
              </p>

              <h4>¿Se puede hacer conciliación sin abogado?</h4>

              <p>
                Sí. Muchas conciliaciones de alimentos en Bogotá y Colombia se
                realizan directamente en centros autorizados.
              </p>

              <h4>¿Qué pasa si no se paga la cuota alimentaria?</h4>

              <p>
                Puede iniciarse un proceso ejecutivo o acciones judiciales por
                incumplimiento de obligaciones alimentarias.
              </p>

              <h4>¿Se puede modificar una cuota alimentaria?</h4>

              <p>
                Sí. Cuando cambian las condiciones económicas o las necesidades
                del menor, es posible solicitar una nueva conciliación.
              </p>
            </div>

            <h2 className={styles.subTitle}>
              ¿Por qué la conciliación de alimentos es una de las mejores
              alternativas para proteger los derechos del menor?
            </h2>

            <p className={styles.text}>
              La conciliación familiar en Colombia se ha consolidado como uno de
              los mecanismos más importantes para proteger los derechos de los
              menores y promover acuerdos responsables entre las partes.
            </p>

            <p className={styles.text}>
              Además de reducir la congestión judicial en ciudades como Bogotá,
              este mecanismo permite alcanzar soluciones más rápidas y efectivas
              para las familias colombianas.
            </p>
          </motion.article>

          <h2 className={styles.subTitle}>
            ¿Necesitas realizar una conciliación de alimentos en Bogotá o en
            cualquier lugar de Colombia?
          </h2>

          <p className={styles.text}>
            Si necesitas iniciar una conciliación de alimentos, modificar una
            cuota alimentaria existente o elaborar un acta con plena validez
            jurídica, en Sol Centro de Conciliación podemos orientarte durante
            todo el procedimiento.
          </p>

          <p className={styles.text}>
            Nuestro equipo acompaña conciliaciones familiares, civiles y
            comerciales para que las partes puedan alcanzar acuerdos legales de
            manera rápida, segura y evitando procesos judiciales innecesarios.
          </p>
        </div>
      </div>
    </>
  );
}
