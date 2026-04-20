"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ComoEsLaAudienciaContent() {
  return (
    <section id="audiencia" className={styles.articleWrapper}>
      <motion.div
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>
          Cómo es la audiencia de conciliación en Colombia: presencial o virtual
        </h2>

        <p className={styles.paragraph}>
          La <strong>audiencia de conciliación en Colombia</strong> es el
          espacio donde las partes, con la ayuda de un conciliador, buscan
          llegar a un acuerdo para resolver un conflicto sin necesidad de acudir
          a un juez. En ciudades como <strong>Bogotá</strong>, estas audiencias
          pueden realizarse de forma presencial o virtual, dependiendo del
          centro de conciliación y la disponibilidad de las partes.
        </p>

        <p className={styles.paragraph}>
          El objetivo de la audiencia no es determinar quién tiene la razón,
          sino construir un acuerdo legal que solucione el problema de manera
          rápida, económica y segura.
        </p>

        <h3 className={styles.subtitle}>
          Etapas de una audiencia de conciliación en Bogotá y Colombia
        </h3>

        <ul className={styles.list}>
          <li>
            <strong>Instalación:</strong> el conciliador verifica la identidad
            de las partes, explica las reglas de la audiencia y el objetivo de
            la conciliación.
          </li>
          <li>
            <strong>Exposición:</strong> cada parte explica su versión de los
            hechos y lo que pretende obtener en la conciliación.
          </li>
          <li>
            <strong>Exploración:</strong> se revisan documentos, soportes,
            contratos, facturas o pruebas relacionadas con el conflicto.
          </li>
          <li>
            <strong>Negociación:</strong> se presentan propuestas, acuerdos de
            pago, compromisos o soluciones al conflicto.
          </li>
          <li>
            <strong>Redacción del acuerdo:</strong> si las partes llegan a un
            acuerdo, se redacta el acta de conciliación con obligaciones,
            fechas, montos y compromisos.
          </li>
        </ul>

        <h3 className={styles.subtitle}>
          Audiencia presencial de conciliación
        </h3>

        <p className={styles.paragraph}>
          En la audiencia presencial, las partes asisten al centro de
          conciliación en Bogotá o en cualquier ciudad de Colombia. El
          conciliador dirige la reunión, organiza la conversación y ayuda a
          construir un acuerdo que quede por escrito.
        </p>

        <h3 className={styles.subtitle}>
          Audiencia virtual de conciliación en Colombia
        </h3>

        <div className={styles.categoryCard}>
          <h3>Audiencia virtual: lo mínimo para que salga bien</h3>

          <ul className={styles.list}>
            <li>Buena conexión a internet.</li>
            <li>Documento de identidad a la mano.</li>
            <li>Soportes en PDF listos para enviar.</li>
            <li>Estar en un lugar sin ruido.</li>
            <li>Disposición real para negociar.</li>
          </ul>
        </div>

        <p className={styles.paragraph}>
          Actualmente, muchas audiencias de conciliación en Bogotá se realizan
          de manera virtual, lo que permite ahorrar tiempo y desplazamientos. El
          acta de conciliación virtual tiene la misma validez legal que la
          presencial en Colombia.
        </p>

        <div className={styles.note}>
          La conciliación en Colombia no busca que una parte gane y la otra
          pierda, sino que ambas encuentren una solución práctica al conflicto.
        </div>

        <div className={styles.cta}>
          <span className={styles.ctaTitle}>
            Asesoría para audiencia de conciliación en Bogotá
          </span>

          <ul className={styles.ctaList}>
            <li>Preparación para audiencia de conciliación.</li>
            <li>Revisión de documentos.</li>
            <li>Estrategia de negociación.</li>
            <li>Redacción de acuerdos.</li>
          </ul>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            className={styles.ctaButton}
            target="_blank"
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.div>
    </section>
  );
}
