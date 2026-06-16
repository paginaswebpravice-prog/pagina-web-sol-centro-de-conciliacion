"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function IncumplimientoContratoContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué contratos pueden conciliarse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contratos civiles, comerciales, de prestación de servicios, arrendamiento y muchos otros acuerdos entre particulares.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los acuerdos conciliatorios tienen efectos jurídicos y pueden hacerse cumplir legalmente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se logra un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes conservan la posibilidad de acudir a otras vías legales para resolver la controversia.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

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
              Conciliación contractual en Colombia
            </span>

            <h1 className={styles.title}>
              Conciliación por incumplimiento de contrato
            </h1>

            <p className={styles.heroText}>
              El incumplimiento de contrato es una de las causas más frecuentes
              de conflictos entre personas, empresas, proveedores, clientes,
              arrendadores y contratistas. Cuando una de las partes no cumple lo
              pactado, pueden surgir perjuicios económicos y desacuerdos que
              afectan la relación contractual.
            </p>

            <p className={styles.heroText}>
              Antes de iniciar una demanda judicial, la conciliación se presenta
              como una alternativa eficiente para buscar soluciones, recuperar
              obligaciones pendientes y llegar a acuerdos que beneficien a ambas
              partes.
            </p>

            <p className={styles.heroText}>
              En Colombia, numerosos conflictos contractuales pueden resolverse
              mediante conciliación extrajudicial, reduciendo tiempos, costos y
              desgaste emocional.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué se considera un incumplimiento de contrato?
            </h2>

            <p className={styles.paragraph}>
              Existe incumplimiento cuando una de las partes deja de ejecutar
              las obligaciones acordadas o las cumple de forma parcial, tardía o
              defectuosa.
            </p>

            <p className={styles.paragraph}>
              Dependiendo del tipo de contrato, el incumplimiento puede generar
              pérdidas económicas, afectaciones comerciales o conflictos
              jurídicos que requieren una solución rápida.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación permite que las partes analicen el conflicto,
                identifiquen las obligaciones pendientes y construyan acuerdos
                orientados a solucionar la controversia sin necesidad de acudir
                inmediatamente a un juez.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Casos frecuentes de incumplimiento contractual
            </h2>

            <ul className={styles.list}>
              <li>Incumplimiento en contratos de prestación de servicios.</li>
              <li>Retrasos en entregas de productos.</li>
              <li>Incumplimiento de pagos pactados.</li>
              <li>Problemas en contratos de arrendamiento.</li>
              <li>Incumplimiento de obligaciones comerciales.</li>
              <li>Entrega de bienes defectuosos.</li>
              <li>Incumplimiento de cronogramas contractuales.</li>
              <li>Controversias entre proveedores y clientes.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de conciliar antes de demandar
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Ahorro de tiempo</h3>

                <p>
                  Los acuerdos conciliatorios suelen alcanzarse en menos tiempo
                  que un proceso judicial tradicional.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Reducción de costos</h3>

                <p>
                  Permite disminuir gastos asociados a litigios prolongados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conservación de relaciones</h3>

                <p>
                  Favorece soluciones colaborativas que pueden preservar las
                  relaciones comerciales entre las partes.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Posibles acuerdos en una conciliación contractual
            </h2>

            <ul className={styles.list}>
              <li>Cumplimiento de obligaciones pendientes.</li>
              <li>Reestructuración de pagos.</li>
              <li>Plazos adicionales de cumplimiento.</li>
              <li>Compensaciones económicas.</li>
              <li>Terminación consensuada del contrato.</li>
              <li>Modificación de cláusulas contractuales.</li>
              <li>Acuerdos sobre indemnizaciones.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué documentos son importantes?
            </h2>

            <p className={styles.paragraph}>
              Para una conciliación contractual es recomendable contar con el
              contrato firmado, anexos, comunicaciones entre las partes,
              comprobantes de pago y cualquier evidencia relacionada con el
              incumplimiento.
            </p>

            <p className={styles.paragraph}>
              Estos documentos ayudan a identificar claramente las obligaciones
              asumidas y facilitan la construcción de acuerdos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si no se logra una conciliación?
            </h2>

            <p className={styles.paragraph}>
              Cuando no es posible alcanzar un acuerdo, las partes mantienen la
              posibilidad de acudir a los mecanismos judiciales previstos por la
              ley para resolver la controversia contractual.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, intentar una conciliación suele ser una alternativa
              valiosa para explorar soluciones antes de iniciar procesos más
              complejos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Se puede conciliar cualquier contrato?</h3>

                <p>
                  Muchos contratos civiles y comerciales permiten acudir a
                  conciliación para resolver controversias.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿El acuerdo tiene validez legal?</h3>

                <p>
                  Sí. El acta de conciliación tiene efectos jurídicos y puede
                  hacerse cumplir conforme a la ley.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Debo demandar inmediatamente?</h3>

                <p>
                  No necesariamente. La conciliación puede ofrecer soluciones
                  rápidas antes de acudir a un proceso judicial.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Tienes un conflicto por incumplimiento de contrato?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación contractual, conflictos
              civiles y comerciales, acuerdos de pago y resolución de disputas
              en Bogotá y Colombia.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Solicitar asesoría por WhatsApp
            </a>
          </div>
        </motion.article>
      </section>
    </>
  );
}
