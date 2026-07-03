"use client";

import Head from "next/head";
import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaCompanerosPermanentesContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acta de conciliación entre compañeros permanentes en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un documento legal mediante el cual los compañeros permanentes establecen acuerdos relacionados con obligaciones económicas, hijos, custodia, alimentos y convivencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En Colombia las actas de conciliación tienen efectos jurídicos y pueden exigirse judicialmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde hacer conciliación entre compañeros permanentes en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede realizarse en centros de conciliación autorizados, notarías y consultorios jurídicos habilitados en Bogotá y Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué acuerdos pueden incluirse en una conciliación de compañeros permanentes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden incluirse acuerdos sobre alimentos, sostenimiento, custodia, régimen de visitas, gastos del hogar, separación de bienes y obligaciones económicas.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Acta de conciliación suscrita por compañeros permanentes en Colombia",
    description:
      "Guía completa sobre conciliación entre compañeros permanentes en Bogotá y Colombia con modelo de acta, requisitos y efectos legales.",
    keywords:
      "acta compañeros permanentes Colombia, conciliación unión marital de hecho Bogotá, modelo acta conciliación compañeros permanentes",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    about: [
      "Conciliación familiar",
      "Unión marital de hecho",
      "Compañeros permanentes",
      "Conciliación en Bogotá",
      "Conciliación en Colombia",
    ],
  };

  return (
    <>
      <Head>
        <title>
          Acta de conciliación entre compañeros permanentes en Colombia | Guía
          2026
        </title>

        <meta
          name="description"
          content="Conoce cómo funciona el acta de conciliación entre compañeros permanentes en Bogotá y Colombia. Incluye modelo, requisitos y efectos legales."
        />

        <meta
          name="keywords"
          content="acta compañeros permanentes Colombia, conciliación unión marital de hecho Bogotá, conciliación familiar Colombia, modelo acta conciliación compañeros permanentes"
        />

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
      </Head>

      <section className={styles.wrapper}>
        <motion.article
          id="acta-companeros-permanentes"
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          itemScope
          itemType="https://schema.org/Article"
        >
          <motion.h1 className={styles.title} itemProp="headline">
            Acta de conciliación entre compañeros permanentes en Colombia:
            modelo, ejemplo, requisitos y efectos legales
          </motion.h1>

          <motion.p className={styles.text} itemProp="description">
            El{" "}
            <strong>
              acta de conciliación suscrita por compañeros permanentes en
              Colombia
            </strong>{" "}
            es un documento legal utilizado por personas que conforman una{" "}
            <strong>unión marital de hecho</strong> para establecer acuerdos
            relacionados con obligaciones económicas, convivencia, hijos,
            alimentos, custodia, visitas y responsabilidades compartidas.
          </motion.p>

          <motion.p className={styles.text}>
            En ciudades como <strong>Bogotá</strong>, Medellín, Cali,
            Barranquilla y otras regiones de Colombia, este tipo de conciliación
            es ampliamente utilizado para solucionar conflictos familiares de
            manera más rápida y menos desgastante que un proceso judicial.
          </motion.p>

          <motion.p className={styles.text}>
            Muchas parejas recurren a la conciliación extrajudicial en Colombia
            para formalizar acuerdos relacionados con separación, sostenimiento,
            gastos del hogar, cuidado de hijos y distribución de obligaciones
            económicas sin necesidad de iniciar inmediatamente un litigio ante
            los jueces de familia.
          </motion.p>

          <motion.div className={styles.highlightBox}>
            <p>
              En Bogotá y Colombia, las conciliaciones familiares permiten
              construir acuerdos claros y verificables, reduciendo conflictos
              futuros y brindando mayor seguridad jurídica para ambas partes.
            </p>
          </motion.div>

          <motion.h2 className={styles.subTitle}>
            ¿Qué es un acta de conciliación entre compañeros permanentes y para
            qué sirve?
          </motion.h2>

          <motion.p className={styles.text}>
            Este documento sirve para dejar por escrito acuerdos relacionados
            con derechos y obligaciones surgidos dentro de la convivencia o de
            la separación de compañeros permanentes en Colombia.
          </motion.p>

          <ul className={styles.list}>
            <li>Cuotas de sostenimiento.</li>
            <li>Gastos del hogar.</li>
            <li>Responsabilidades económicas.</li>
            <li>Acuerdos sobre hijos.</li>
            <li>Custodia y régimen de visitas.</li>
            <li>Pago de arriendo y servicios.</li>
            <li>Distribución de gastos familiares.</li>
            <li>Separación de bienes o acuerdos patrimoniales.</li>
            <li>Acuerdos de convivencia.</li>
            <li>Obligaciones futuras entre las partes.</li>
          </ul>

          <motion.p className={styles.text}>
            La conciliación familiar en Bogotá y Colombia es especialmente útil
            cuando las partes desean evitar conflictos prolongados y mantener
            una comunicación organizada respecto a hijos, dinero y
            responsabilidades compartidas.
          </motion.p>

          <motion.div className={styles.note}>
            <strong>Importante:</strong> En Colombia, el acta de conciliación
            presta mérito ejecutivo. Esto significa que si una persona incumple
            lo pactado, el acuerdo puede exigirse judicialmente ante un juez.
          </motion.div>

          <motion.h2 className={styles.subTitle}>
            Requisitos para realizar una conciliación entre compañeros
            permanentes en Colombia
          </motion.h2>

          <motion.p className={styles.text}>
            Para realizar una conciliación entre compañeros permanentes en
            Bogotá o en cualquier parte de Colombia, normalmente se requiere:
          </motion.p>

          <ul className={styles.list}>
            <li>Documento de identidad de ambas partes.</li>
            <li>Dirección y datos de contacto.</li>
            <li>Registro civil de hijos menores (si aplica).</li>
            <li>Soportes de ingresos y gastos.</li>
            <li>Información sobre obligaciones económicas.</li>
            <li>Propuesta inicial de acuerdo.</li>
            <li>Información sobre bienes o patrimonio común.</li>
          </ul>

          <h2 className={styles.subTitle}>
            ¿Qué asuntos pueden conciliar los compañeros permanentes?
          </h2>

          <p className={styles.text}>
            La conciliación permite resolver numerosos conflictos derivados de
            la convivencia o de la terminación de la unión marital de hecho,
            siempre que sean asuntos conciliables conforme a la legislación
            colombiana.
          </p>

          <ul className={styles.list}>
            <li>Cuotas de alimentos.</li>
            <li>Custodia de hijos.</li>
            <li>Régimen de visitas.</li>
            <li>Responsabilidades económicas.</li>
            <li>Distribución de gastos.</li>
            <li>Uso de la vivienda.</li>
            <li>Administración de bienes comunes.</li>
            <li>Separación de hecho.</li>
            <li>Acuerdos patrimoniales.</li>
          </ul>

          <motion.h2 className={styles.subTitle}>
            Formato del acta de conciliación entre compañeros permanentes:
            información obligatoria
          </motion.h2>

          <motion.p className={styles.text}>
            Un acta de conciliación entre compañeros permanentes en Colombia
            debe ser clara, específica y verificable. Los acuerdos ambiguos o
            incompletos suelen generar nuevos conflictos posteriormente.
          </motion.p>

          <ul className={styles.list}>
            <li>Identificación completa de las partes.</li>
            <li>Descripción clara del conflicto.</li>
            <li>Acuerdos detallados y medibles.</li>
            <li>Montos exactos y fechas de pago.</li>
            <li>Distribución de responsabilidades.</li>
            <li>Condiciones de incumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
          </ul>

          <motion.h2 className={styles.subTitle}>
            Modelo y ejemplo de acta de conciliación entre compañeros
            permanentes
          </motion.h2>

          <motion.pre className={styles.pre}>
            {`ACTA DE CONCILIACIÓN (COMPAÑEROS PERMANENTES) No. [●]

CIUDAD: Bogotá D.C., Colombia
FECHA: [●]

I. COMPARECIENTES

Compañero(a) Permanente A:
Nombre: [●]
CC: [●]

Compañero(a) Permanente B:
Nombre: [●]
CC: [●]

II. OBJETO

Las partes desean conciliar acuerdos relacionados con:
[apoyo económico / convivencia / alimentos / hijos / gastos del hogar / otros].

III. ACUERDOS

1. SOSTENIMIENTO ECONÓMICO
La parte B aportará a la parte A la suma de $[●] COP mensuales
el día [●] de cada mes.

2. GASTOS EXTRAORDINARIOS
Los gastos de salud, educación y necesidades extraordinarias
serán asumidos así: [●].

3. ACUERDOS SOBRE HIJOS
Las partes establecen el siguiente régimen de visitas:
[●].

4. COMUNICACIÓN
La coordinación y seguimiento de obligaciones se realizará
por WhatsApp o correo electrónico.

5. INCUMPLIMIENTO
En caso de incumplimiento, la parte cumplida podrá exigir
el cumplimiento judicial del presente acuerdo.

Firmas...`}
          </motion.pre>

          <h2 className={styles.subTitle}>
            ¿Cómo se realiza una conciliación entre compañeros permanentes paso
            a paso?
          </h2>

          <ol className={styles.list}>
            <li>Presentar la solicitud de conciliación.</li>
            <li>Citar a la otra parte.</li>
            <li>Celebrar la audiencia.</li>
            <li>Exponer los hechos.</li>
            <li>Negociar los acuerdos.</li>
            <li>Redactar el acta.</li>
            <li>Firmar el acuerdo.</li>
            <li>Cumplir las obligaciones pactadas.</li>
          </ol>

          <motion.h2 className={styles.subTitle}>
            Efectos legales del acta de conciliación entre compañeros
            permanentes
          </motion.h2>

          <motion.p className={styles.text}>
            En Colombia, las actas de conciliación tienen efectos jurídicos y
            pueden ser ejecutadas judicialmente en caso de incumplimiento. Por
            esta razón, es fundamental que los acuerdos sean claros y contengan
            obligaciones específicas.
          </motion.p>

          <motion.p className={styles.text}>
            En Bogotá y otras ciudades de Colombia, muchas conciliaciones
            familiares fracasan posteriormente debido a acuerdos mal redactados,
            obligaciones ambiguas o ausencia de fechas concretas.
          </motion.p>

          <motion.p className={styles.text}>
            Una conciliación bien estructurada ayuda a prevenir conflictos
            futuros y facilita el cumplimiento de las obligaciones pactadas
            entre compañeros permanentes.
          </motion.p>

          <h2 className={styles.subTitle}>
            Beneficios de realizar una conciliación entre compañeros permanentes
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales largos.</li>
            <li>Reduce costos legales.</li>
            <li>Protege los derechos de los hijos.</li>
            <li>Permite acuerdos voluntarios.</li>
            <li>Fortalece la comunicación entre las partes.</li>
            <li>Genera un documento con validez jurídica.</li>
            <li>Facilita el cumplimiento de las obligaciones.</li>
          </ul>

          <h2 className={styles.subTitle}>
            Errores frecuentes al elaborar un acta de conciliación
          </h2>

          <ul className={styles.list}>
            <li>No establecer fechas exactas.</li>
            <li>No definir montos.</li>
            <li>No regular los gastos extraordinarios.</li>
            <li>No especificar el régimen de visitas.</li>
            <li>Utilizar obligaciones ambiguas.</li>
            <li>No indicar consecuencias por incumplimiento.</li>
          </ul>

          <motion.h2 className={styles.subTitle}>
            Preguntas frecuentes sobre conciliación entre compañeros permanentes
          </motion.h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>
                ¿La conciliación entre compañeros permanentes es obligatoria?
              </h3>
              <p>
                Depende del caso. En muchos conflictos familiares en Colombia,
                la conciliación puede ser requisito antes de iniciar una
                demanda.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Dónde hacer conciliaciones familiares en Bogotá?</h3>
              <p>
                En centros de conciliación autorizados, notarías y entidades
                habilitadas en Bogotá y Colombia.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿La conciliación sirve para acuerdos sobre hijos?</h3>
              <p>
                Sí. Puede incluir alimentos, custodia, visitas y obligaciones
                relacionadas con menores.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Qué pasa si una persona incumple el acuerdo?</h3>
              <p>
                El acuerdo puede exigirse judicialmente mediante proceso
                ejecutivo.
              </p>
            </div>
          </div>

          <motion.div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas realizar una conciliación familiar en Bogotá o
              Colombia?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación entre compañeros
              permanentes, acuerdos familiares, alimentos, custodia y solución
              de conflictos en Colombia.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
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
