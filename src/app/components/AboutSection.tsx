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
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            id="about-sol-title"
            className={styles.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Centro de Conciliación en Bogotá y Colombia especializado en
            Conciliación Extrajudicial en Derecho
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            En <strong>SOL Centro de Conciliación y Arbitraje</strong> ayudamos
            a personas, familias, empresas y organizaciones a resolver
            conflictos mediante{" "}
            <strong>conciliación extrajudicial en derecho</strong> y otros
            mecanismos alternativos de solución de controversias, ofreciendo una
            alternativa eficiente frente a los procesos judiciales
            tradicionales.
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Nuestro equipo de conciliadores acompaña cada caso con
            imparcialidad, confidencialidad y respaldo jurídico, facilitando la
            construcción de acuerdos que protejan los derechos e intereses de
            todas las partes involucradas.
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Prestamos nuestros servicios de manera presencial en Bogotá y
            virtual para usuarios de cualquier ciudad de Colombia, permitiendo
            desarrollar audiencias de conciliación con la misma seguridad
            jurídica sin importar la ubicación de las partes.
          </motion.p>

          <motion.h3
            className={styles.subtitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            ¿Qué asuntos podemos ayudar a conciliar?
          </motion.h3>

          <motion.ul
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {[
              "Conciliación civil para conflictos patrimoniales, contratos, responsabilidad civil y obligaciones económicas.",
              "Conciliación familiar en alimentos, custodia, visitas, regulación de cuotas, separación y liquidación de sociedad conyugal.",
              "Conciliación comercial entre empresas, socios, proveedores, clientes y contratistas.",
              "Conciliación laboral para resolver diferencias entre empleadores y trabajadores.",
              "Conflictos derivados de arrendamientos, deudas, incumplimientos contractuales y otros asuntos conciliables.",
              "Audiencias presenciales y virtuales con acuerdos que tienen plena validez jurídica en Colombia.",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 12,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}.</span>

                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <h3>¿Por qué elegir SOL Centro de Conciliación?</h3>

            <p>
              Nuestro objetivo es ofrecer soluciones jurídicas ágiles, seguras y
              efectivas que permitan resolver conflictos sin acudir a largos
              procesos judiciales. Cada audiencia está orientada a construir
              acuerdos claros, equilibrados y con pleno respaldo legal.
            </p>
          </motion.div>
        </motion.div>

        {/* =======================
              COLUMNA DERECHA
        ======================== */}

        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/Equipo_Sol_4_3.webp"
            alt="Conciliadores y profesionales de SOL Centro de Conciliación y Arbitraje en Bogotá Colombia"
            width={500}
            height={650}
            className={styles.image}
            priority={false}
          />

          <div className={styles.infoBox}>
            <h3>¿Qué obtiene al acudir a nuestro Centro de Conciliación?</h3>

            <p>
              Buscamos que cada proceso permita alcanzar soluciones reales,
              evitando el desgaste económico, emocional y jurídico que suelen
              generar los litigios prolongados.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span>✔</span>
                <p>Conciliadores especializados.</p>
              </div>

              <div className={styles.infoItem}>
                <span>✔</span>
                <p>Atención presencial y virtual.</p>
              </div>

              <div className={styles.infoItem}>
                <span>✔</span>
                <p>Procesos confidenciales y transparentes.</p>
              </div>

              <div className={styles.infoItem}>
                <span>✔</span>
                <p>Acuerdos con plena validez jurídica.</p>
              </div>

              <div className={styles.infoItem}>
                <span>✔</span>
                <p>Menores tiempos frente a un proceso judicial.</p>
              </div>

              <div className={styles.infoItem}>
                <span>✔</span>
                <p>Atención para personas y empresas en toda Colombia.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
