"use client";

import styles from "../styles/AboutSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className={styles.section} aria-labelledby="about-sol-title">
      <div className={styles.container}>
        {/* =======================
            COLUMNA DE TEXTO
        ======================== */}
        <motion.div
          className={styles.textColumn}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            id="about-sol-title"
            className={styles.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Centro de Conciliación y Arbitraje comprometido con soluciones
            legales efectivas
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            En <strong>SOL Centro de Conciliación y Arbitraje</strong> brindamos
            mecanismos alternativos de resolución de conflictos a través de la
            conciliación extrajudicial y el arbitraje, ofreciendo soluciones
            jurídicas eficientes, transparentes y ajustadas a la normativa
            vigente en Colombia. Acompañamos a personas y empresas con un
            enfoque profesional, estratégico y orientado a resultados.
          </motion.p>

          {/* LISTA DE BENEFICIOS */}
          <motion.ul
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              "Tiempos de resolución más rápidos frente a procesos judiciales tradicionales.",
              "Estrategias jurídicas claras definidas desde la primera sesión de conciliación o arbitraje.",
              "Comunicación directa, transparente y profesional durante todo el proceso.",
              "Acompañamiento integral en cada etapa de la resolución del conflicto.",
              "Resultados verificables mediante acuerdos efectivos y soluciones legalmente seguras.",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span>{String(i + 1).padStart(2, "0")}.</span> {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* =======================
            COLUMNA DE IMAGEN
        ======================== */}
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/Equipo_Sol_4_3.webp"
            alt="Equipo profesional de SOL Centro de Conciliación y Arbitraje en Colombia"
            width={500}
            height={650}
            className={styles.image}
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
