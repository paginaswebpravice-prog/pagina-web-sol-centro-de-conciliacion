"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Citacion() {
  return (
    <>
      <Head>
        <title>
          Citación a audiencia de conciliación laboral en Colombia | Modelo
        </title>
        <meta
          name="description"
          content="Aprenda cómo hacer una citación a audiencia de conciliación laboral en Colombia. Modelo de citación, requisitos legales, conciliación en Bogotá y normativa laboral."
        />
        <meta
          name="keywords"
          content="citación audiencia conciliación laboral Colombia, conciliación laboral Bogotá, derecho laboral Colombia, modelo citación conciliación, audiencia conciliación trabajo"
        />

        {/* Schema SEO para Google e IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Citación a audiencia de conciliación laboral en Colombia (Modelo)",
              description:
                "Modelo de citación a audiencia de conciliación laboral en Colombia, requisitos legales, procedimiento y normativa en Bogotá y Colombia.",
              author: {
                "@type": "Organization",
                name: "Sol Centro de Conciliación",
              },
              publisher: {
                "@type": "Organization",
                name: "Sol Centro de Conciliación",
              },
              mainEntityOfPage:
                "https://www.solcentrodeconciliacion.com/blog/citacion-audiencia-conciliacion",
              articleSection: "Derecho laboral",
              keywords:
                "conciliación laboral Colombia, citación audiencia conciliación Bogotá, derecho laboral Colombia",
            }),
          }}
        />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="citacion"
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Citación a audiencia de conciliación laboral en Colombia (modelo)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              La citación a audiencia de conciliación laboral en Colombia es un
              documento mediante el cual un centro de conciliación, abogado o
              entidad autorizada convoca a las partes a una audiencia con el fin
              de resolver un conflicto laboral de manera voluntaria y sin acudir
              a un proceso judicial. Este procedimiento es muy utilizado en
              ciudades como Bogotá, Medellín, Cali y otras ciudades de Colombia
              para resolver conflictos entre empleadores y trabajadores.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              viewport={{ once: true }}
            >
              En el derecho laboral colombiano, la conciliación permite resolver
              conflictos relacionados con liquidaciones laborales, despidos,
              salarios pendientes, prestaciones sociales, contratos de trabajo,
              indemnizaciones laborales y otros conflictos derivados de la
              relación laboral. La citación debe contener información clara
              sobre la fecha, hora, modalidad de la audiencia y los documentos
              que deben aportar las partes.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              ¿Qué debe contener una citación a audiencia de conciliación
              laboral?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Una citación a audiencia de conciliación laboral en Colombia debe
              contener la identificación de las partes, el asunto del conflicto
              laboral, la fecha y hora de la audiencia, la modalidad (virtual o
              presencial), los documentos que deben aportar las partes y los
              datos de contacto del centro de conciliación. Este documento es
              fundamental para garantizar que la audiencia se realice de manera
              organizada y conforme a la normativa de conciliación en Colombia.
            </motion.p>

            <motion.div
              className={styles.note}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              En Bogotá y en toda Colombia, la conciliación laboral es un
              mecanismo alternativo de solución de conflictos que permite
              resolver problemas laborales sin necesidad de iniciar un proceso
              judicial ante un juez laboral.
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Modelo de citación a audiencia de conciliación laboral
            </motion.h3>

            <motion.pre
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              {`CITACIÓN A AUDIENCIA DE CONCILIACIÓN LABORAL No. [●]

Centro de Conciliación: [●]
Ciudad: Bogotá D.C.
Asunto: Conflicto laboral

Señor(a): [Nombre del citado]
Identificación: [●]
Dirección/Correo: [●]

Por medio de la presente se cita a AUDIENCIA DE CONCILIACIÓN LABORAL dentro del trámite solicitado por [Trabajador/Empleador]
relacionado con: [Liquidación laboral, despido, salarios pendientes, prestaciones sociales, etc.]

FECHA: [dd/mm/aaaa]
HORA: [●]
MODALIDAD: [Presencial / Virtual]

Si es VIRTUAL:
Enlace: [●]
Requisitos: conexión estable, documento de identidad.

Documentos sugeridos:
- Contrato de trabajo
- Liquidación laboral
- Desprendibles de nómina
- Correos o comunicaciones
- Otros documentos relacionados

En caso de no poder asistir, comuníquese con el Centro de Conciliación.

Atentamente,

[Nombre]
[Cargo]
[Centro de Conciliación]
[Firma]`}
            </motion.pre>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              viewport={{ once: true }}
            >
              La conciliación laboral en Colombia es una herramienta jurídica
              muy importante dentro del derecho laboral, ya que permite resolver
              conflictos laborales de forma rápida, económica y sin necesidad de
              acudir a un proceso judicial. En ciudades como Bogotá, la
              conciliación es ampliamente utilizada para resolver conflictos
              entre empleadores y trabajadores relacionados con contratos de
              trabajo, despidos, indemnizaciones, liquidaciones y prestaciones
              sociales.
            </motion.p>
          </motion.article>
        </div>
      </div>
    </>
  );
}
