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
          <span className={styles.badge}>
            CONSULTA JURÍDICA Y CONCILIACIÓN EN COLOMBIA
          </span>

          <h2 id="contact-title" itemProp="name">
            Agenda tu consulta con abogados expertos en conciliación
            extrajudicial y recibe asesoría jurídica en Bogotá y toda Colombia
          </h2>

          <p className={styles.description}>
            En Sol Centro de Conciliación ponemos a tu disposición un equipo de
            abogados especializados en conciliación extrajudicial, derecho
            civil, comercial, familiar y laboral para ayudarte a resolver
            conflictos de manera rápida, segura y conforme a la legislación
            colombiana. Brindamos asesoría jurídica personalizada para personas,
            empresas y organizaciones que buscan evitar procesos judiciales
            prolongados mediante acuerdos con plena validez legal. Nuestro
            acompañamiento incluye análisis del caso, orientación estratégica,
            negociación entre las partes y formalización de acuerdos
            ejecutables. Ofrecemos atención presencial en Bogotá y modalidades
            virtuales para usuarios ubicados en cualquier ciudad de Colombia.
          </p>

          <p className={styles.subInfo}>
            📍 Bogotá, Colombia <br />
            🕒 Lunes a viernes · 8:00 a.m. - 5:00 p.m. <br />
            🌐 Atención presencial y virtual a nivel nacional
          </p>

          {/* ================= BENEFICIOS ================= */}
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <strong>Respuesta rápida</strong>

              <span>
                Analizamos tu caso y te orientamos para iniciar el proceso
                adecuado.
              </span>
            </div>

            <div className={styles.benefitCard}>
              <strong>Abogados conciliadores especializados</strong>

              <span>
                Equipo jurídico con experiencia en conflictos civiles,
                familiares, comerciales y laborales.
              </span>
            </div>

            <div className={styles.benefitCard}>
              <strong>Atención presencial y virtual</strong>

              <span>
                Podemos atender procesos de conciliación en Bogotá y en
                cualquier ciudad de Colombia.
              </span>
            </div>

            <div className={styles.benefitCard}>
              <strong>Acuerdos con plena validez legal</strong>

              <span>
                Las actas de conciliación producen efectos jurídicos conforme a
                la ley colombiana.
              </span>
            </div>
          </div>

          <motion.button
            className={styles.whatsappButton}
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Agendar consulta jurídica por WhatsApp
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
          Nuestra oficina de conciliación en Bogotá y atención jurídica para
          toda Colombia
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

      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <h2>
            ¿En qué casos puedes solicitar una consulta con nuestros abogados
            conciliadores?
          </h2>

          <p>
            Atendemos conflictos susceptibles de conciliación en diferentes
            áreas del derecho, brindando orientación jurídica personalizada y
            acompañamiento durante todo el procedimiento.
          </p>

          <div className={styles.servicesGrid}>
            <article>
              <h3>Conciliación en asuntos civiles</h3>

              <p>
                Conflictos derivados de contratos, obligaciones,
                indemnizaciones, incumplimientos y responsabilidades civiles.
              </p>
            </article>

            <article>
              <h3>Conciliación comercial y empresarial</h3>

              <p>
                Controversias entre empresas, socios, proveedores, clientes y
                contratos comerciales.
              </p>
            </article>

            <article>
              <h3>Conciliación laboral</h3>

              <p>
                Liquidaciones, despidos, acreencias laborales, indemnizaciones y
                acuerdos entre empleadores y trabajadores.
              </p>
            </article>

            <article>
              <h3>Conciliación familiar</h3>

              <p>
                Cuota alimentaria, custodia, régimen de visitas, separación y
                conflictos familiares.
              </p>
            </article>

            <article>
              <h3>Arrendamientos</h3>

              <p>
                Conflictos entre arrendadores y arrendatarios relacionados con
                inmuebles, cánones y restitución.
              </p>
            </article>

            <article>
              <h3>Obligaciones económicas</h3>

              <p>
                Negociación de deudas, acuerdos de pago y conciliación de
                obligaciones económicas entre particulares y empresas.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2>Preguntas frecuentes sobre la consulta jurídica</h2>

          <div className={styles.faqItem}>
            <h3>
              ¿Debo tener todos los documentos para solicitar una consulta?
            </h3>

            <p>
              No. Durante la primera orientación nuestros abogados revisarán tu
              caso y te indicarán cuáles documentos son necesarios para iniciar
              el proceso de conciliación.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>¿Atienden únicamente en Bogotá?</h3>

            <p>
              No. Además de la atención presencial en Bogotá, ofrecemos atención
              virtual para usuarios de cualquier ciudad de Colombia.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>¿Qué conflictos pueden resolverse mediante conciliación?</h3>

            <p>
              Dependiendo del caso, es posible conciliar asuntos civiles,
              comerciales, laborales, familiares, contractuales, deudas,
              arrendamientos y muchas otras controversias permitidas por la ley.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>¿Cómo puedo agendar una consulta?</h3>

            <p>
              Puedes comunicarte mediante WhatsApp o utilizar nuestros canales
              de atención para programar una consulta jurídica con uno de
              nuestros abogados conciliadores.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
