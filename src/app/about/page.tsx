"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank",
  );
};

const lawyers = [
  {
    name: "Dr. Harrison Calderón",
    role: "Abogado conciliador",
    image: "/doc-harrison.jpg",
    description:
      "Abogado conciliador con amplia experiencia en resolución alternativa de conflictos y conciliación extrajudicial en Colombia. Acompaña a personas y empresas en la construcción de acuerdos claros, legales y eficientes, brindando asesoría jurídica estratégica orientada a la prevención de litigios y a la solución efectiva de controversias.",
  },
  {
    name: "Dra. Leidy Tirado",
    role: "CCO & Abogada conciliadora",
    image: "/doc-leidy.jpg",
    description:
      "Abogada y conciliadora en derecho, especializada en la gestión profesional de conflictos y en la dirección estratégica de procesos de conciliación. Cuenta con experiencia en la construcción de acuerdos jurídicos sólidos, garantizando seguridad jurídica, comunicación transparente y acompañamiento integral durante cada etapa del proceso conciliatorio.",
  },
  {
    name: "Dra. Angie Rivera",
    role: "Abogada conciliadora",
    image: "/doc-angie.jpg",
    description:
      "Abogada con experiencia en conciliación extrajudicial y mecanismos alternativos de resolución de conflictos. Su enfoque se caracteriza por el acompañamiento ético, humano y oportuno, orientado a facilitar acuerdos equilibrados, legalmente válidos y ajustados a las necesidades particulares de cada caso.",
  },
];

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuestro Equipo Jurídico</h2>

      <div className={styles.grid}>
        {lawyers.map((lawyer, index) => (
          <motion.article
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageBox}>
              <img src={lawyer.image} alt={lawyer.name} />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.name}>{lawyer.name}</h3>
              <span className={styles.role}>{lawyer.role}</span>

              <p className={styles.description}>{lawyer.description}</p>

              <button className={styles.button} onClick={handleClick}>
                Programar consulta
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
