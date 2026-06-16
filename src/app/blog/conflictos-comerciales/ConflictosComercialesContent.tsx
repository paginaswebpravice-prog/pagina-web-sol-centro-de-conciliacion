"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConflictosComercialesContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación comercial en Colombia
          </span>

          <h1 className={styles.title}>
            Conciliación para conflictos comerciales en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos comerciales son una realidad frecuente en el entorno
            empresarial. Diferencias relacionadas con pagos, contratos,
            prestación de servicios, suministro de productos o incumplimiento de
            obligaciones pueden afectar la operación de empresas y negocios.
          </p>

          <p className={styles.heroText}>
            La conciliación comercial permite resolver estas controversias de
            manera rápida, económica y eficiente, evitando procesos judiciales
            prolongados que pueden generar mayores costos y afectar las
            relaciones comerciales.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación comercial?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo alternativo de solución de conflictos mediante el
            cual las partes involucradas buscan alcanzar un acuerdo con la ayuda
            de un conciliador imparcial.
          </p>

          <p className={styles.paragraph}>
            Su objetivo principal es encontrar soluciones prácticas que permitan
            resolver la disputa sin necesidad de acudir a un juez.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Muchas empresas en Colombia utilizan la conciliación comercial
              para preservar relaciones de negocio y evitar los costos de un
              litigio.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos comerciales que pueden conciliarse
          </h2>

          <ul className={styles.list}>
            <li>Incumplimiento de contratos comerciales.</li>
            <li>Retrasos en pagos.</li>
            <li>Cobro de facturas pendientes.</li>
            <li>Conflictos entre socios.</li>
            <li>Problemas con proveedores.</li>
            <li>Disputas por prestación de servicios.</li>
            <li>Incumplimientos en entregas de productos.</li>
            <li>Obligaciones económicas entre empresas.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de la conciliación empresarial
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ahorro de tiempo</h3>

              <p>
                La solución suele alcanzarse en menor tiempo que un proceso
                judicial ordinario.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reducción de costos</h3>

              <p>
                Se disminuyen gastos relacionados con litigios y trámites
                judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Relaciones comerciales</h3>

              <p>
                Favorece la continuidad de relaciones empresariales y
                comerciales entre las partes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué acuerdos pueden lograrse?</h2>

          <p className={styles.paragraph}>
            Durante una conciliación comercial es posible acordar planes de
            pago, reestructuración de obligaciones, entrega de productos,
            cumplimiento de contratos o cualquier solución que sea legalmente
            viable para ambas partes.
          </p>

          <p className={styles.paragraph}>
            La flexibilidad es una de las principales ventajas de este
            mecanismo, ya que permite diseñar soluciones adaptadas a las
            necesidades específicas de cada negocio.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Validez jurídica de los acuerdos comerciales
          </h2>

          <p className={styles.paragraph}>
            Los acuerdos alcanzados mediante conciliación pueden formalizarse en
            un acta con efectos legales. Esto proporciona seguridad jurídica y
            mecanismos de exigibilidad en caso de incumplimiento.
          </p>

          <p className={styles.paragraph}>
            Gracias a ello, la conciliación comercial se ha convertido en una
            herramienta ampliamente utilizada por empresarios y comerciantes en
            Colombia.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puede participar una empresa?</h3>

              <p>
                Sí. Las empresas pueden acudir a conciliación a través de sus
                representantes legales o apoderados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Sirve para cobrar facturas?</h3>

              <p>
                Sí. Muchas controversias relacionadas con pagos y facturas se
                resuelven mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>

              <p>
                Las partes conservan la posibilidad de acudir posteriormente a
                la vía judicial.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto comercial o empresarial?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación comercial, cobro de
            obligaciones, conflictos entre empresas, proveedores, clientes y
            socios en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
