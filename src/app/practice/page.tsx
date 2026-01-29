"use client";

import styles from "./practice.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faBriefcase,
  faBuilding,
  faUsers,
  faChild,
  faClipboardList,
  faHouse,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import { motion, Variants } from "framer-motion";

const areas = [
  {
    title: "Asuntos Comerciales",
    desc: "Conciliación en conflictos empresariales, contratos, sociedades y relaciones comerciales.",
    icon: faMoneyBillWave,
  },
  {
    title: "Asuntos Civiles",
    desc: "Resolución de disputas civiles relacionadas con contratos, daños, obligaciones y derechos.",
    icon: faScaleBalanced,
  },
  {
    title: "Asuntos de Copropiedad",
    desc: "Mediación en conflictos de propiedad horizontal y convivencia entre copropietarios.",
    icon: faBuilding,
  },
  {
    title: "Asuntos Laborales",
    desc: "Gestión de conflictos laborales entre empleadores y trabajadores de forma conciliada.",
    icon: faBriefcase,
  },
  {
    title: "Alimentos para Menores",
    desc: "Acompañamiento en acuerdos de cuota alimentaria que protegen los derechos del menor.",
    icon: faChild,
  },
  {
    title: "Custodia y Régimen de Visitas",
    desc: "Orientación legal para definir custodia y visitas priorizando el bienestar familiar.",
    icon: faClipboardList,
  },
  {
    title: "Asuntos Vecinales",
    desc: "Mediación en conflictos de convivencia, uso de espacios comunes y normas comunitarias.",
    icon: faUsers,
  },
  {
    title: "Liquidación de Sociedad Conyugal",
    desc: "Conciliación para la distribución justa de bienes tras la disolución del vínculo.",
    icon: faHouse,
  },
];

// Variants tipados correctamente para TypeScript
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // easeOut suave compatible con TS
    },
  },
};

export default function Practice() {
  return (
    <section className={styles.section}>
      {/* HEADER */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <span className={styles.subtitle}>ÁREAS DE PRÁCTICA</span>
        <h2 className={styles.title}>Conciliación Extrajudicial en Derecho</h2>
        <p className={styles.description}>
          Ofrecemos conciliación extrajudicial en derecho para resolver
          conflictos de forma ágil, confidencial y efectiva, priorizando el
          diálogo y los acuerdos duraderos.
        </p>
      </motion.div>

      {/* GRID con animación STAGGER */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={cardVariants}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
            }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={area.icon} />
            </div>

            <h3 className={styles.cardTitle}>{area.title}</h3>
            <p className={styles.cardDesc}>{area.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
