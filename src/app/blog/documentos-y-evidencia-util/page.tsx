"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function DocumentosYEvidenciaUtil() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Documentos y evidencia para conciliación en Colombia: qué llevar a una audiencia en Bogotá",
    description:
      "Guía completa sobre documentos y pruebas necesarias para conciliación en Colombia y Bogotá. Aprende qué evidencia presentar para lograr acuerdos efectivos.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    contentLocation: {
      "@type": "Place",
      name: "Bogotá, Colombia",
    },
    about: [
      "Conciliación en Colombia",
      "Documentos para conciliación",
      "Audiencias de conciliación en Bogotá",
    ],
  };

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section id="documentos" className={styles.articleWrapper}>
        <motion.div
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 className={styles.title}>
            5) Documentos y evidencia útil en conciliación en Colombia
          </motion.h2>

          <p className={styles.paragraph}>
            En cualquier proceso de <strong>conciliación en Colombia</strong>,
            especialmente en ciudades como <strong>Bogotá</strong>, uno de los
            factores que más influye en lograr un acuerdo efectivo es la calidad
            de la <strong>evidencia presentada</strong>.
          </p>

          <p className={styles.paragraph}>
            Aunque la conciliación no es un juicio, sí requiere{" "}
            <strong>soporte claro, verificable y organizado</strong>. Esto
            permite que el conciliador entienda el caso rápidamente y facilita
            que la otra parte reconozca obligaciones o llegue a acuerdos
            concretos.
          </p>

          <p className={styles.paragraph}>
            Si estás preparando una{" "}
            <strong>audiencia de conciliación en Bogotá o Colombia</strong>,
            estos son los documentos que más ayudan:
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Contratos:</strong> acuerdos firmados, órdenes de
              servicio, promesas o cualquier documento que establezca
              obligaciones.
            </li>

            <li>
              <strong>Facturas y cuentas de cobro:</strong> especialmente en
              casos comerciales o de prestación de servicios.
            </li>

            <li>
              <strong>Comprobantes de pago:</strong> consignaciones,
              transferencias, extractos bancarios o recibos.
            </li>

            <li>
              <strong>Conversaciones:</strong> chats de WhatsApp o correos donde
              se evidencie el acuerdo o el incumplimiento.
            </li>

            <li>
              <strong>Pruebas del incumplimiento:</strong> fechas,
              requerimientos, comunicaciones o actas previas.
            </li>

            <li>
              <strong>Documentos adicionales:</strong> fotos, reportes, entregas
              o cualquier soporte que respalde tu versión.
            </li>
          </ul>

          <p className={styles.paragraph}>
            En la práctica, los casos de conciliación en <strong>Bogotá</strong>{" "}
            que llegan mejor preparados suelen resolverse más rápido, incluso en
            una sola audiencia, porque las partes tienen claridad sobre lo que
            ocurrió y lo que se debe cumplir.
          </p>

          <div className={styles.note}>
            Consejo clave: no se trata de llevar muchos documentos, sino de
            llevar <strong>los correctos y bien organizados</strong>. Un PDF
            claro y estructurado puede ser más útil que cientos de archivos
            desordenados.
          </div>

          <div className={styles.cta}>
            <strong className={styles.ctaTitle}>
              Checklist rápido para tu audiencia en Colombia
            </strong>

            <ul className={styles.ctaList}>
              <li>Organiza tus documentos en orden cronológico.</li>
              <li>Resalta los puntos clave del incumplimiento.</li>
              <li>Prepara una propuesta clara (valores y fechas).</li>
              <li>Lleva copia digital o impresa de los soportes.</li>
            </ul>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              className={styles.ctaButton}
            >
              Agendar asesoría en Bogotá
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
