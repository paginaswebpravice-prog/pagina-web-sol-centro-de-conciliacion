"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function EmpresaNoAsisteConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            ¿Qué pasa si la empresa no asiste a la conciliación?
          </h1>

          <p className={styles.heroText}>
            En los conflictos laborales es común que un trabajador solicite una
            audiencia de conciliación para intentar resolver diferencias
            relacionadas con salarios, liquidaciones, despidos o prestaciones
            sociales. Sin embargo, una situación frecuente ocurre cuando el
            empleador o la empresa no asiste a la audiencia programada.
          </p>

          <p className={styles.heroText}>
            La inasistencia del empleador puede tener consecuencias importantes,
            ya que impide alcanzar un acuerdo conciliatorio y puede abrir la
            puerta a otras actuaciones legales.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre cuando la empresa no comparece?
          </h2>

          <p className={styles.paragraph}>
            Si la empresa no asiste a la audiencia de conciliación, el
            conciliador dejará constancia de la inasistencia en el acta o
            documento correspondiente.
          </p>

          <p className={styles.paragraph}>
            Debido a la ausencia de una de las partes, no será posible construir
            un acuerdo conciliatorio que ponga fin al conflicto laboral.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La constancia de inasistencia puede convertirse en un documento
              relevante para futuras actuaciones legales relacionadas con el
              conflicto laboral.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿La empresa puede justificar la ausencia?
          </h2>

          <p className={styles.paragraph}>
            Sí. Existen situaciones excepcionales en las que la empresa puede
            justificar su inasistencia, como eventos de fuerza mayor, problemas
            de salud de sus representantes o circunstancias que impidan su
            comparecencia.
          </p>

          <p className={styles.paragraph}>
            Dependiendo de la situación, podría solicitarse una nueva fecha para
            la audiencia de conciliación.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Consecuencias para el trabajador</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Constancia formal</h3>
              <p>
                Se registra oficialmente que la empresa fue citada y no asistió
                a la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Continuar reclamaciones</h3>
              <p>
                El trabajador podrá evaluar otras alternativas legales para la
                defensa de sus derechos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Intento de acuerdo demostrado</h3>
              <p>
                Queda evidencia de que se intentó resolver el conflicto de forma
                amistosa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor claridad jurídica</h3>
              <p>
                Se define que no fue posible alcanzar una solución negociada por
                falta de comparecencia.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Puede realizarse la conciliación sin el empleador?
          </h2>

          <p className={styles.paragraph}>
            No. La conciliación requiere la participación de ambas partes para
            construir un acuerdo válido y voluntario.
          </p>

          <p className={styles.paragraph}>
            Si una de las partes no asiste, la audiencia no puede producir un
            acuerdo conciliatorio definitivo.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de asistir a la conciliación
          </h2>

          <ul className={styles.list}>
            <li>Permite resolver conflictos de manera rápida.</li>
            <li>Reduce costos para empleador y trabajador.</li>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Facilita acuerdos flexibles y voluntarios.</li>
            <li>Genera seguridad jurídica para ambas partes.</li>
            <li>Favorece soluciones negociadas y efectivas.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La empresa está obligada a asistir?</h3>

              <p>
                Lo recomendable es asistir para intentar resolver el conflicto y
                evitar mayores controversias.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede programarse otra audiencia?</h3>

              <p>
                Dependiendo de las circunstancias y de la justificación
                presentada, podría fijarse una nueva fecha.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La inasistencia resuelve el conflicto?</h3>

              <p>
                No. La controversia continúa y las partes deberán evaluar otras
                alternativas para solucionarla.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto laboral pendiente?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación te orientamos sobre audiencias
            laborales, acuerdos entre empleadores y trabajadores y mecanismos de
            solución de conflictos en Colombia.
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
