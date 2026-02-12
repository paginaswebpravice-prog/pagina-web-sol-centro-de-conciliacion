"use client";

import styles from "./contact.module.css";
import { motion } from "framer-motion";

export default function Contact() {
  const numeroWhatsApp = "573232904786";

  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent(
      "Hola, quiero agendar una consulta sobre conciliación legal.",
    );

    const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = esMovil
      ? `https://wa.me/${numeroWhatsApp}?text=${mensaje}`
      : `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;

    window.open(url, "_blank");
  };

  return (
    <section className={styles.contactSection} aria-labelledby="contact-title">
      {/* BLOQUE SUPERIOR */}
      <div className={styles.container}>
        {/* TEXTO + CTA */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="contact-title">Agenda tu consulta en conciliación legal</h2>

          <p className={styles.description}>
            Nuestro equipo de abogados conciliadores está preparado para
            acompañarte en la resolución de conflictos de manera ágil,
            estratégica y jurídicamente segura.
          </p>

          <p className={styles.subInfo}>
            📍 Bogotá, Colombia <br />
            🕒 Lunes a viernes · 8:00 a.m. – 5:00 p.m. <br />
            🌐 Atención presencial y virtual a nivel nacional
          </p>

          <motion.button
            className={styles.whatsappButton}
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Agendar por WhatsApp
          </motion.button>
        </motion.div>
      </div>

      {/* BLOQUE MAPA */}
      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={styles.mapTitle}>Oficina de conciliación en Bogotá</h3>

        <div className={styles.mapContainer}>
          <iframe
            title="Ubicación oficina de conciliación en Bogotá"
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}
