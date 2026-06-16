"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CentrosConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación en Colombia</span>

          <h1 className={styles.title}>Centros de conciliación autorizados</h1>

          <p className={styles.heroText}>
            Los centros de conciliación autorizados en Colombia son las
            instituciones habilitadas legalmente para ofrecer servicios de
            conciliación y facilitar la resolución de conflictos entre las
            partes.
          </p>

          <p className={styles.heroText}>
            Estos centros son regulados por el Estado y garantizan que los
            acuerdos tengan validez jurídica.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Es una entidad pública o privada autorizada para administrar
            procesos de conciliación en Colombia.
          </p>

          <p className={styles.paragraph}>
            Su función es facilitar el diálogo entre las partes para resolver
            conflictos de manera legal y voluntaria.
          </p>
        </div>

        {/* QUIEN AUTORIZA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Quién autoriza estos centros?</h2>

          <ul className={styles.list}>
            <li>Ministerio de Justicia y del Derecho.</li>
            <li>Supervisión del Estado colombiano.</li>
            <li>Regulación bajo la Ley 640 de 2001 y la Ley 2220 de 2022.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Ningún centro puede operar sin autorización del Ministerio de
              Justicia en Colombia.
            </p>
          </div>
        </div>

        {/* TIPOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Tipos de centros de conciliación</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Públicos</h3>
              <p>Operados por entidades del Estado o instituciones públicas.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Privados</h3>
              <p>
                Funcionan en cámaras de comercio, universidades o entidades
                privadas autorizadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Institucionales</h3>
              <p>
                Asociados a organizaciones con programas de conciliación
                acreditados.
              </p>
            </div>
          </div>
        </div>

        {/* CONCILIADORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Quién puede ser conciliador?</h2>

          <ul className={styles.list}>
            <li>Abogados capacitados en conciliación.</li>
            <li>Personas acreditadas por el Ministerio de Justicia.</li>
            <li>Funcionarios de centros autorizados.</li>
            <li>Profesionales con formación en MASC.</li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Importancia de los centros autorizados
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Validez legal</h3>
              <p>Garantizan que los acuerdos tengan efectos jurídicos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad</h3>
              <p>Aseguran procesos regulados y transparentes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acceso a justicia</h3>
              <p>Facilitan la resolución de conflictos sin juicio.</p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Las partes presentan su conflicto ante el centro autorizado, donde
            un conciliador facilita el diálogo para lograr un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, este se formaliza en un acta con valor legal en
            Colombia.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Todos los centros son válidos?</h3>
              <p>No, solo los autorizados por el Ministerio de Justicia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Son gratuitos?</h3>
              <p>
                Algunos centros son gratuitos y otros pueden tener costos
                administrativos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, si se firma un acta de conciliación.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas conciliar un conflicto?
          </h3>

          <p className={styles.ctaText}>
            Acude a un centro de conciliación autorizado en Colombia y resuelve
            tu conflicto de forma legal y rápida.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
