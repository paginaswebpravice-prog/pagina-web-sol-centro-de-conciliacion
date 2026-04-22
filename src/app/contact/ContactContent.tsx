"use client";

import styles from "./contact.module.css";
import { motion } from "framer-motion";

export default function ContactContent() {
  const numeroWhatsApp = "573232904786";

  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent(
      "Hola, quiero agendar una consulta sobre conciliación legal en Bogotá.",
    );

    const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = esMovil
      ? `https://wa.me/${numeroWhatsApp}?text=${mensaje}`
      : `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;

    window.open(url, "_blank");
  };

  return (
    <section
      className={styles.contactSection}
      aria-labelledby="contact-title"
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Sol Centro de Conciliación",
            areaServed: "Colombia",
            description:
              "Consulta legal y conciliación extrajudicial en Bogotá con abogados especializados en resolución de conflictos.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bogotá",
              addressCountry: "CO",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+57 3232904786",
              contactType: "customer service",
            },
          }),
        }}
      />

      {/* ================= CONTENIDO ================= */}
      <div className={styles.container}>
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="contact-title" itemProp="name">
            Agenda tu consulta con abogados en Bogotá y resuelve tu caso sin ir
            a juicio
          </h2>

          <p className={styles.description} itemProp="description">
            Agenda tu consulta con abogados en Bogotá especializados en
            conciliación extrajudicial y resolución de conflictos en Colombia.
            Te ayudamos a encontrar soluciones legales rápidas, seguras y
            efectivas sin necesidad de procesos judiciales largos.
          </p>

          <p className={styles.subInfo}>
            📍 Bogotá, Colombia <br />
            🕒 Lunes a viernes · 8:00 a.m. - 5:00 p.m. <br />
            🌐 Atención presencial y virtual a nivel nacional
          </p>

          <motion.button
            className={styles.whatsappButton}
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Agendar consulta por WhatsApp ahora
          </motion.button>
        </motion.div>
      </div>

      {/* ================= MAPA ================= */}
      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.mapTitle}>
          Ubicación de nuestra oficina de conciliación en Bogotá
        </h2>

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
