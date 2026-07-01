"use client";

import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank",
  );
};

export default function Hero() {
  return (
    <>
      {/* Schema Video */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "SOL Centro de Conciliación y Arbitraje en Colombia",
            description:
              "Centro de conciliación y arbitraje en Colombia especializado en conciliación extrajudicial, resolución de conflictos y servicios legales.",
            thumbnailUrl:
              "https://solcentrodeconciliacion.com/thumbnail-video.jpg",
            uploadDate: "2025-12-31",
            contentUrl: "https://solcentrodeconciliacion.com/video-intro2.mp4",
            embedUrl: "https://solcentrodeconciliacion.com/",
            publisher: {
              "@type": "Organization",
              name: "SOL Centro de Conciliación y Arbitraje",
              logo: {
                "@type": "ImageObject",
                url: "https://solcentrodeconciliacion.com/logo.png",
              },
            },
          }),
        }}
      />

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
            Centro de Conciliación en Bogotá y Colombia | Conciliación
            Extrajudicial en Derecho
          </h1>

          <p className={styles.paragraph}>
            En <strong>SOL Centro de Conciliación</strong> ayudamos a personas,
            empresas y familias a solucionar conflictos de manera rápida,
            confidencial y conforme a la legislación colombiana. Nuestro
            servicio de conciliación extrajudicial en derecho permite alcanzar
            acuerdos con efectos legales, evitando en muchos casos procesos
            judiciales largos y costosos.
          </p>

          <p className={styles.paragraph}>
            Ofrecemos atención presencial y virtual para asuntos civiles,
            comerciales, familiares y laborales, acompañándolo durante todo el
            proceso con conciliadores especializados.
          </p>

          <button className={styles.ctaButton} onClick={handleClick}>
            Consulta legal por WhatsApp
          </button>
        </motion.div>
      </section>
    </>
  );
}
