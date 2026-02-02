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
            En <strong>SOL Centro de Conciliación y Arbitraje</strong> ofrecemos
            mecanismos alternativos de <strong>resolución de conflictos</strong>{" "}
            mediante procesos de conciliación extrajudicial y arbitraje,
            conforme a la normativa vigente en Colombia. Acompañamos a personas
            y empresas que buscan soluciones jurídicas eficientes, transparentes
            y legalmente seguras, evitando procesos judiciales extensos y
            costosos.
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
              "Procesos de conciliación y arbitraje con tiempos de resolución más ágiles que la vía judicial tradicional.",
              "Estrategias jurídicas claras y definidas desde la primera sesión.",
              "Comunicación directa, transparente y acompañamiento permanente durante todo el proceso.",
              "Asesoría integral en cada etapa de la resolución alternativa del conflicto.",
              "Acuerdos efectivos con respaldo legal y resultados verificables.",
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
