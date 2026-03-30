"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ActaCompanerosPermanentes() {
  return (
    <>
      <Head>
        <title>
          Acta de conciliación compañeros permanentes en Colombia | Modelo y
          guía legal
        </title>
        <meta
          name="description"
          content="Acta de conciliación suscrita por los compañeros permanentes en Colombia. Modelo, requisitos, efectos legales y guía jurídica en Bogotá y Colombia."
        />
        <meta
          name="keywords"
          content="acta de conciliacion compañeros permanentes Colombia, union marital de hecho Colombia, conciliacion familiar Bogota, modelo acta conciliacion Colombia, acuerdos compañeros permanentes"
        />
        <link
          rel="canonical"
          href="https://www.tusitio.com/acta-companeros-permanentes"
        />

        {/* SCHEMA ARTICLE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Acta de conciliación suscrita por los compañeros permanentes en Colombia",
            description:
              "Guía legal sobre el acta de conciliación entre compañeros permanentes en Colombia, modelo, requisitos y efectos legales.",
            author: {
              "@type": "Organization",
              name: "Abogados en Bogotá Colombia",
            },
            publisher: {
              "@type": "Organization",
              name: "Abogados en Bogotá Colombia",
            },
            mainEntityOfPage:
              "https://www.tusitio.com/acta-companeros-permanentes",
          })}
        </script>

        {/* SCHEMA FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es el acta de conciliación entre compañeros permanentes en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Es un acuerdo legal realizado ante un centro de conciliación en Colombia donde los compañeros permanentes establecen obligaciones económicas, acuerdos sobre hijos, convivencia o reparto de gastos.",
                },
              },
              {
                "@type": "Question",
                name: "¿El acta de conciliación tiene validez legal en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, el acta de conciliación en Colombia tiene efectos legales y presta mérito ejecutivo, lo que significa que puede exigirse su cumplimiento ante un juez.",
                },
              },
            ],
          })}
        </script>
      </Head>

      <section className={styles.wrapper}>
        <motion.article
          id="acta-companeros-permanentes"
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h1 className={styles.title}>
            Acta de conciliación suscrita por los compañeros permanentes en
            Colombia
          </motion.h1>

          <motion.p className={styles.text}>
            El{" "}
            <strong>
              acta de conciliación suscrita por los compañeros permanentes en
              Colombia
            </strong>
            es un documento legal mediante el cual dos personas que conforman
            una
            <strong> unión marital de hecho</strong> pueden establecer acuerdos
            sobre obligaciones económicas, convivencia, gastos del hogar,
            acuerdos respecto de hijos, custodia, visitas, alimentos y reparto
            de responsabilidades.
          </motion.p>

          <motion.p className={styles.text}>
            En ciudades como <strong>Bogotá</strong>, Medellín, Cali y otras
            ciudades de Colombia, este tipo de conciliaciones se realizan ante
            centros de conciliación, notarías o consultorios jurídicos de
            universidades, y tienen plena validez legal.
          </motion.p>

          <motion.h2 className={styles.subTitle}>
            ¿Para qué sirve un acta de conciliación entre compañeros
            permanentes?
          </motion.h2>

          <motion.p className={styles.text}>
            Este documento sirve para dejar por escrito acuerdos relacionados
            con:
          </motion.p>

          <ul className={styles.list}>
            <li>Cuotas de sostenimiento</li>
            <li>Gastos del hogar</li>
            <li>Responsabilidades económicas</li>
            <li>Acuerdos sobre hijos</li>
            <li>Custodia y régimen de visitas</li>
            <li>Pago de arriendo o servicios</li>
            <li>Separación de bienes o acuerdos económicos</li>
          </ul>

          <motion.p className={styles.note}>
            Importante: En Colombia, el acta de conciliación presta mérito
            ejecutivo, lo que significa que si una persona incumple, el acuerdo
            puede exigirse judicialmente ante un juez.
          </motion.p>

          <motion.h2 className={styles.subTitle}>
            Requisitos del acta de conciliación en Colombia
          </motion.h2>

          <motion.p className={styles.text}>
            Para realizar una conciliación entre compañeros permanentes en
            Bogotá o en cualquier parte de Colombia, normalmente se requiere:
          </motion.p>

          <ul className={styles.list}>
            <li>Documento de identidad de ambos compañeros permanentes</li>
            <li>Dirección y datos de contacto</li>
            <li>Registro civil de los hijos (si hay hijos)</li>
            <li>Soportes de ingresos o gastos</li>
            <li>Propuesta de acuerdo</li>
          </ul>

          <motion.h2 className={styles.subTitle}>
            Modelo de acta de conciliación compañeros permanentes
          </motion.h2>

          <motion.pre className={styles.pre}>
            {`ACTA DE CONCILIACIÓN (COMPAÑEROS PERMANENTES) No. [●]

I. COMPARECIENTES
Compañero(a) Permanente A: [●] - CC [●]
Compañero(a) Permanente B: [●] - CC [●]

II. OBJETO
Las partes desean conciliar acuerdos relacionados con: 
[apoyo económico / gastos del hogar / acuerdos respecto de hijos / otros].

III. ACUERDOS

1) Aporte mensual de sostenimiento:
B aportará a A la suma de $[●] COP mensuales, el día [●] de cada mes.

2) Gastos extraordinarios:
Los gastos extraordinarios de salud y educación se asumirán así: [porcentajes].

3) Comunicación:
La coordinación se realizará por WhatsApp o correo electrónico.

4) Vigencia:
Este acuerdo rige desde [fecha] hasta [fecha].

Firmas…`}
          </motion.pre>

          <motion.h2 className={styles.subTitle}>
            Validez legal del acta de conciliación en Colombia
          </motion.h2>

          <motion.p className={styles.text}>
            En Colombia, las actas de conciliación tienen efectos legales y
            pueden ser ejecutadas judicialmente en caso de incumplimiento. Por
            esta razón, es importante que el acuerdo sea claro, específico y que
            establezca montos, fechas y obligaciones concretas.
          </motion.p>

          <motion.p className={styles.text}>
            Si necesita realizar una conciliación entre compañeros permanentes
            en Bogotá o en cualquier ciudad de Colombia, es recomendable recibir
            asesoría legal para redactar correctamente el acuerdo y evitar
            problemas futuros.
          </motion.p>
        </motion.article>
      </section>
    </>
  );
}
