"use client";

import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Video de fondo */}
      <video className={styles.videoBg} autoPlay muted loop playsInline>
        <source src="/video-intro2.mp4" type="video/mp4" />
      </video>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.mainTitle}>
          SOL Centro de Conciliación y Arbitraje
        </h1>

        <p className={styles.paragraph}>
          En SOL ofrecemos soluciones legales ágiles y efectivas para resolver
          tus conflictos mediante conciliación y arbitraje. Nuestro equipo de
          profesionales te acompaña en cada etapa del proceso para alcanzar
          acuerdos justos y duraderos.
        </p>

        {/**
         * 
        <p className={styles.finalPhrase}>
          No dejes tu caso en manos de cualquiera.
          <br />
          <strong>Déjalo en manos de especialistas.</strong>
        </p>
        */}

        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </motion.div>
    </section>
  );
}
