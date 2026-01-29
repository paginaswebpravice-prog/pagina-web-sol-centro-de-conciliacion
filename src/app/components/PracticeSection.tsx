"use client";

import styles from "../styles/PracticeSection.module.css";
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
import { motion } from "framer-motion";

const areas = [
  {
    title: "Asuntos Comerciales",
    desc: "Conciliación en conflictos comerciales entre empresas, contratos mercantiles, sociedades y obligaciones económicas.",
    icon: faMoneyBillWave,
  },
  {
    title: "Asuntos Civiles",
    desc: "Resolución extrajudicial de conflictos civiles relacionados con contratos, daños, herencias y derechos personales.",
    icon: faScaleBalanced,
  },
  {
    title: "Asuntos de Copropiedad",
    desc: "Conciliación en propiedad horizontal sobre cuotas de administración, uso de zonas comunes y derechos de copropietarios.",
    icon: faBuilding,
  },
  {
    title: "Asuntos Laborales",
    desc: "Conciliación laboral entre empleadores y trabajadores en temas de despido, contratos y reclamaciones de derechos.",
    icon: faBriefcase,
  },
  {
    title: "Alimentos para Menores",
    desc: "Conciliación familiar orientada a garantizar el cumplimiento de obligaciones alimentarias de niños y adolescentes.",
    icon: faChild,
  },
  {
    title: "Custodia y Régimen de Visitas",
    desc: "Mecanismos de conciliación para definir custodia, cuidado personal y régimen de visitas de menores.",
    icon: faClipboardList,
  },
  {
    title: "Asuntos Vecinales",
    desc: "Mediación y conciliación en conflictos de convivencia, ruidos, uso de espacios comunes y normas comunitarias.",
    icon: faUsers,
  },
  {
    title: "Liquidación de Sociedad Conyugal",
    desc: "Conciliación para la distribución equitativa de bienes adquiridos durante el matrimonio o unión marital.",
    icon: faHouse,
  },
];

export default function PracticeSection() {
  return (
    <section className={styles.section} aria-labelledby="practice-title">
      {/* Encabezado */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className={styles.subtitle}>ÁREAS DE CONCILIACIÓN</span>

        <h2 id="practice-title" className={styles.title}>
          Áreas de conciliación extrajudicial en derecho para personas y
          empresas
        </h2>

        <p className={styles.description}>
          En <strong>SOL Centro de Conciliación y Arbitraje</strong> facilitamos
          la resolución alternativa de conflictos a través de la conciliación
          extrajudicial en distintas áreas del derecho, ofreciendo soluciones
          legales, humanas y eficaces conforme a la normativa vigente en
          Colombia.
        </p>
      </motion.div>

      {/* Grid de áreas */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
      >
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              transition: { duration: 0.25 },
            }}
            transition={{ duration: 0.45 }}
          >
            <div className={styles.icon} aria-hidden="true">
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
