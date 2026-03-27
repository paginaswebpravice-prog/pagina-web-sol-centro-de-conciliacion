"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function CartaConciliacion() {
  return (
    <>
      <Head>
        <title>
          Carta de conciliación en Colombia (Modelo) | Centro de Conciliación
          Bogotá
        </title>
        <meta
          name="description"
          content="Modelo de carta de conciliación en Colombia. Aprende cómo hacer una invitación a conciliación extrajudicial en Bogotá y Colombia con formato listo para usar."
        />
        <meta
          name="keywords"
          content="carta de conciliacion Colombia, modelo carta conciliacion Bogotá, conciliacion extrajudicial Colombia, centro de conciliacion Bogotá, invitacion conciliacion formato"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Carta de conciliación en Colombia (Modelo)",
              description:
                "Modelo de carta de conciliación en Colombia y Bogotá. Formato de invitación a conciliación extrajudicial.",
              author: {
                "@type": "Organization",
                name: "Centro de Conciliación",
              },
              publisher: {
                "@type": "Organization",
                name: "Centro de Conciliación",
              },
              mainEntityOfPage: "https://www.solcentrodeconciliacion.com/",
              articleSection: "Conciliación en Colombia",
              inLanguage: "es-CO",
            }),
          }}
        />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="carta-conciliacion"
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2>Carta de conciliación en Colombia (modelo)</motion.h2>

            <motion.p>
              La <strong>carta de conciliación en Colombia</strong> es un
              documento mediante el cual una persona o empresa invita a otra a
              resolver un conflicto de manera voluntaria antes de iniciar un
              proceso judicial. Este documento es muy utilizado en{" "}
              <strong>Bogotá</strong> y en todo
              <strong> Colombia</strong> para conflictos civiles, comerciales,
              familiares y de arrendamiento.
            </motion.p>

            <motion.p>
              En muchos casos, enviar una{" "}
              <strong>invitación a conciliación</strong>
              permite llegar a un acuerdo sin necesidad de demandar, lo que
              reduce costos, tiempo y desgaste jurídico. Además, demuestra la
              buena fe de quien intenta resolver el conflicto de manera
              pacífica.
            </motion.p>

            <motion.h3>¿Para qué sirve una carta de conciliación?</motion.h3>

            <motion.p>
              La carta de conciliación sirve como una comunicación formal donde
              se propone una solución al conflicto y se invita a la otra parte a
              asistir a un{" "}
              <strong>centro de conciliación en Bogotá o Colombia</strong>. Este
              documento puede utilizarse en conflictos por deudas, contratos,
              incumplimientos, arrendamientos, problemas entre socios, entre
              otros.
            </motion.p>

            <motion.p>
              Muchas empresas en Colombia utilizan este documento antes de
              iniciar procesos judiciales, ya que la{" "}
              <strong>conciliación extrajudicial en Colombia</strong> es un
              mecanismo legal reconocido que permite llegar a acuerdos con
              validez jurídica.
            </motion.p>

            <motion.h3>Modelo de carta de conciliación (invitación)</motion.h3>

            <motion.pre>
              {`[Ciudad], [dd] de [mes] de [aaaa]

Señor(a): [Nombre]
[Documento/NIT]
[Dirección / Correo]
Asunto: Invitación a conciliación / propuesta de arreglo

Cordial saludo,

Por medio de la presente, me permito invitarle formalmente a una conciliación con el fin de resolver de manera
directa y eficiente el conflicto relacionado con: [descripción breve].

Propuesta base (opcional):
- [Pago/entrega/obligación] por valor de $[●] COP, en [●] cuotas / en fecha [●]
- Medio: [●]
- Condiciones: [●]

La intención es evitar mayores costos y tiempos, y dejar un acuerdo claro por escrito. Quedo atento(a) a su confirmación
para programar la audiencia en un Centro de Conciliación en Bogotá o Colombia, o acordar una fecha para radicar la solicitud.

Atentamente,

[Firma]
[Nombre]
[CC]
[Teléfono]
[Correo]`}
            </motion.pre>

            <motion.h3>
              Recomendaciones para enviar la carta de conciliación
            </motion.h3>

            <motion.p>
              Es recomendable enviar la carta por correo electrónico o por
              correo certificado para dejar constancia del envío. En Colombia,
              especialmente en Bogotá, muchas conciliaciones inician con esta
              carta antes de radicar formalmente la solicitud en un centro de
              conciliación.
            </motion.p>

            <motion.p>
              La carta debe ser clara, respetuosa y contener una propuesta
              concreta de solución. Esto aumenta las probabilidades de llegar a
              un acuerdo antes de iniciar un proceso legal.
            </motion.p>

            <motion.h3>Conciliación extrajudicial en Colombia</motion.h3>

            <motion.p>
              La conciliación extrajudicial en Colombia es un mecanismo mediante
              el cual dos personas resuelven un conflicto con la ayuda de un
              conciliador autorizado. El acuerdo al que se llegue tiene efectos
              legales y puede prestar mérito ejecutivo, lo que significa que se
              puede exigir su cumplimiento legalmente.
            </motion.p>

            <motion.p>
              En ciudades como Bogotá, la conciliación es muy utilizada para
              resolver conflictos civiles, comerciales, de familia y
              arrendamientos sin necesidad de acudir a un juez.
            </motion.p>
          </motion.article>
        </div>
      </div>
    </>
  );
}
