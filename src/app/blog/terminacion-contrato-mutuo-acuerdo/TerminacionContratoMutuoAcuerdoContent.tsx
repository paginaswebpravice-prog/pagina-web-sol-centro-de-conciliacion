"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function TerminacionContratoMutuoAcuerdoContent() {
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
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            Terminación de contrato por mutuo acuerdo en Colombia
          </h1>

          <p className={styles.heroText}>
            La terminación de contrato por mutuo acuerdo es una alternativa
            legal mediante la cual empleador y trabajador deciden finalizar la
            relación laboral de manera voluntaria, evitando conflictos y
            reduciendo riesgos jurídicos para ambas partes.
          </p>

          <p className={styles.heroText}>
            En Colombia esta modalidad es ampliamente utilizada cuando existe
            voluntad conjunta de terminar el vínculo laboral sin necesidad de
            procesos disciplinarios, despidos o controversias judiciales.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué significa terminar un contrato por mutuo acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Consiste en que tanto el trabajador como el empleador manifiestan su
            consentimiento para finalizar el contrato laboral en una fecha
            determinada.
          </p>

          <p className={styles.paragraph}>
            A diferencia de una renuncia o un despido, ninguna de las partes
            impone unilateralmente la terminación, sino que esta surge de un
            acuerdo libre y voluntario.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La voluntad de ambas partes debe quedar claramente documentada
              para evitar futuras reclamaciones laborales.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de la terminación por mutuo acuerdo
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menor riesgo jurídico</h3>
              <p>
                Reduce controversias relacionadas con despidos y reclamaciones
                posteriores.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos personalizados</h3>
              <p>
                Permite pactar condiciones específicas según las necesidades de
                ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor tranquilidad</h3>
              <p>
                Favorece una terminación organizada y respetuosa de la relación
                laboral.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué debe incluir el acuerdo?</h2>

          <ul className={styles.list}>
            <li>Identificación del empleador y trabajador.</li>
            <li>Manifestación expresa del mutuo consentimiento.</li>
            <li>Fecha de terminación del contrato.</li>
            <li>Liquidación de prestaciones sociales.</li>
            <li>Pago de salarios pendientes.</li>
            <li>Firma de ambas partes.</li>
          </ul>

          <p className={styles.paragraph}>
            Es recomendable que el acuerdo quede formalizado por escrito para
            brindar seguridad jurídica y claridad frente a las obligaciones de
            cada parte.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación para formalizar la terminación laboral
          </h2>

          <p className={styles.paragraph}>
            Aunque la ley permite realizar acuerdos privados, muchas empresas y
            trabajadores optan por acudir a un centro de conciliación para dejar
            constancia formal del acuerdo alcanzado.
          </p>

          <p className={styles.paragraph}>
            La conciliación permite verificar que el consentimiento sea libre,
            informado y voluntario, fortaleciendo la validez del acuerdo.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La empresa puede obligar al trabajador a firmar?</h3>

              <p>
                No. El acuerdo debe surgir de la voluntad libre de ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se pagan prestaciones sociales?</h3>

              <p>
                Sí. Deben liquidarse y pagarse conforme a la legislación laboral
                colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación brinda más seguridad?</h3>

              <p>
                Sí. Ayuda a formalizar adecuadamente el acuerdo y prevenir
                futuras controversias.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas formalizar una terminación laboral por mutuo acuerdo?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, acuerdos entre
            empleadores y trabajadores y formalización de terminaciones
            contractuales en Colombia.
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
