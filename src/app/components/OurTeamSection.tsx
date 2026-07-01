"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/OurTeamSection.module.css";

const team = [
  {
    name: "Harrison Calderón",
    role: "Abogado conciliador",
    image: "/doc-harrison.jpg",
  },
  {
    name: "Leidy Tirado",
    role: "CCO & Abogada conciliadora",
    image: "/doc-leidy.jpeg",
  },
  {
    name: "Angie Rivera",
    role: "Abogada conciliadora",
    image: "/doc-angie.jpg",
  },
];

export default function OurTeamSection() {
  return (
    <section className={styles.section} aria-labelledby="team-title">
      {/* Subtítulo */}
      <motion.span
        className={styles.smallTitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        EQUIPO DE ABOGADOS CONCILIADORES
      </motion.span>

      {/* Título SEO */}
      <motion.h2
        id="team-title"
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Abogados conciliadores especializados en conciliación extrajudicial en
        Bogotá y Colombia
      </motion.h2>

      {/* Descripción optimizada */}
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        En <strong>SOL Centro de Conciliación y Arbitraje</strong> contamos con
        un equipo de abogados conciliadores y profesionales del derecho
        especializados en mecanismos alternativos de solución de conflictos.
        Acompañamos a personas, familias y empresas durante todo el
        procedimiento conciliatorio, brindando orientación jurídica clara y
        objetiva.
      </motion.p>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nuestra experiencia en conciliación civil, familiar, comercial, laboral
        y otras áreas del derecho nos permite facilitar acuerdos con plena
        validez jurídica, buscando siempre soluciones eficientes que eviten
        procesos judiciales prolongados.
      </motion.p>

      {/* GRID */}
      <div className={styles.grid}>
        {team.map((member, index) => (
          <motion.article
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={member.image}
              className={styles.image}
              alt={`Abogado conciliador ${member.name} - SOL Centro de Conciliación y Arbitraje en Colombia`}
              loading="lazy"
              itemProp="image"
            />

            <div className={styles.cardText}>
              <h3 className={styles.name} itemProp="name">
                {member.name}
              </h3>
              <p className={styles.role} itemProp="jobTitle">
                {member.role}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className={styles.infoBox}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3>¿Por qué nuestro equipo marca la diferencia?</h3>

        <p>
          Cada procedimiento de conciliación requiere conocimientos jurídicos,
          imparcialidad y habilidades para facilitar el diálogo entre las
          partes. Nuestro equipo trabaja para construir acuerdos sólidos, claros
          y con seguridad jurídica, procurando siempre soluciones prácticas que
          protejan los intereses de todos los involucrados.
        </p>
      </motion.div>

      {/* CTA */}
      <Link
        href="/about"
        aria-label="Equipo jurídico de SOL Centro de Conciliación"
      >
        <motion.button
          className={styles.button}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          aria-label="Conocer más sobre el equipo jurídico de SOL"
        >
          Ver perfil del equipo jurídico
        </motion.button>
      </Link>

      <p className={styles.bottomText}>
        Nuestro equipo jurídico participa en procedimientos de conciliación
        extrajudicial en asuntos civiles, comerciales, familiares, laborales y
        de propiedad horizontal, ofreciendo acompañamiento legal durante todas
        las etapas del proceso.
      </p>
    </section>
  );
}
