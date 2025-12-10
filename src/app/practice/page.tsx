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
    desc: "Asesoría en disputas entre empresas o sobre contratos comerciales, sociedades y operaciones mercantiles",
    icon: faMoneyBillWave,
    enlace: "/",
  },
  {
    title: "Asuntos Civiles",
    desc: "Resolución de conflictos relacionados con contratos, daños, herencias y derechos personales, entre otros temas civiles.",
    icon: faScaleBalanced,
    enlace: "/",
  },
  {
    title: "Asuntos de Copropiedad",
    desc: "Gestión de conflictos en propiedad horizontal, como cuotas de administración, mantenimiento y derechos de los copropietarios.",
    icon: faBuilding,
    enlace: "/",
  },
  {
    title: "Asuntos Laborales",
    desc: "Resolución en conflictos entre empleadores y empleados, incluyendo despidos, contratos y reclamaciones de derechos laborales.",
    icon: faBriefcase,
    enlace: "/",
  },
  {
    title: "Alimentos para Menores",
    desc: "Asesoría y gestión en procesos legales para garantizar el cumplimiento de la manutención económica de los hijos, cubriendo alimentación, educación y salud.",
    icon: faChild,
    enlace: "/",
  },
  {
    title: "Custodia y Régimen de Visitas",
    desc: "Orientación en disputas sobre la tenencia de los hijos y la definición de cronogramas que garantizan el derecho de ambos padres a compartir con ellos.",
    icon: faClipboardList,
    enlace: "/",
  },
  {
    title: "Asuntos Vecinales",
    desc: "Mediación en problemas de convivencia entre vecinos, uso de espacios comunes, ruidos y cumplimiento de normas comunitarias.",
    icon: faUsers,
    enlace: "/",
  },
  {
    title: "Liquidación de Sociedad Conyugal",
    desc: "Acompañamiento en la distribución equitativa de bienes adquiridos durante el matrimonio, garantizando un cierre justo y transparente.",
    icon: faHouse,
    enlace: "/",
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
          En SOL facilitamos soluciones legales y humanas priorizando acuerdos
          eficaces.
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
          <motion.a
            href={area.enlace}
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

            <span className={styles.link}>Saber más →</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
