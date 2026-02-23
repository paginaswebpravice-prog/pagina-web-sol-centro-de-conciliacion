import type { Metadata } from "next";
import styles from "./Article.module.css";

export const metadata: Metadata = {
  title: "Despido sin justa causa en Colombia: qué hacer y cómo reclamar",
  description:
    "Conoce qué hacer ante un despido sin justa causa en Colombia, cómo calcular tu indemnización y qué pasos legales seguir para proteger tus derechos laborales.",
};

export default function DespidoInjustificado() {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <span className={styles.category}>Derecho Laboral</span>
        <h1>
          Despido sin justa causa en Colombia: ¿Qué hacer y cómo reclamar?
        </h1>
        <p className={styles.intro}>
          El despido sin justa causa es una de las situaciones más frecuentes en
          el derecho laboral colombiano. Conocer tus derechos y actuar de forma
          estratégica puede marcar la diferencia entre aceptar una liquidación
          incorrecta o reclamar lo que realmente te corresponde.
        </p>
      </header>

      <section>
        <h2>¿Qué es un despido sin justa causa?</h2>
        <p>
          Se configura cuando el empleador termina el contrato de trabajo sin
          que exista una razón válida establecida en la ley. En estos casos, el
          trabajador tiene derecho a recibir una indemnización adicional a su
          liquidación final.
        </p>
      </section>

      <section>
        <h2>¿Qué derechos tiene el trabajador?</h2>
        <ul>
          <li>Pago completo de la liquidación laboral.</li>
          <li>Indemnización según tipo de contrato.</li>
          <li>Pago de salarios y prestaciones pendientes.</li>
          <li>Certificación laboral.</li>
        </ul>
      </section>

      <section>
        <h2>¿Cómo se calcula la indemnización?</h2>
        <p>
          El cálculo depende del tipo de contrato (término fijo o indefinido) y
          del tiempo trabajado. Cada caso debe analizarse de forma individual
          para evitar errores que puedan afectar el monto final.
        </p>
      </section>

      <section className={styles.ctaSection}>
        <h3>¿Consideras que tu despido fue injustificado?</h3>
        <p>
          Una asesoría oportuna puede ayudarte a proteger tus derechos y
          reclamar lo que legalmente te corresponde.
        </p>
        <a
          href="https://wa.me/XXXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Solicitar asesoría
        </a>
      </section>
    </article>
  );
}
