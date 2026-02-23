import styles from "./Article.module.css";

export default function ComoEsLaAudiencia() {
  return (
    <>
      <section id="audiencia" className={styles.articleWrapper}>
        <div className={styles.articleBlock}>
          <h2 className={styles.title}>
            6) Cómo es la audiencia: presencial o virtual
          </h2>

          <p className={styles.paragraph}>
            La audiencia está diseñada para{" "}
            <strong>ordenar el conflicto</strong> y conducirlo hacia un acuerdo
            verificable. Normalmente incluye:
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Instalación</strong>: identificación de las partes y
              reglas básicas (respeto, turno de palabra, enfoque en soluciones).
            </li>

            <li>
              <strong>Exposición</strong>: cada parte presenta su versión y lo
              que busca.
            </li>

            <li>
              <strong>Exploración</strong>: se aclaran hechos, se precisan
              pretensiones y se validan soportes.
            </li>

            <li>
              <strong>Negociación</strong>: propuestas, contrapropuestas y
              alternativas.
            </li>

            <li>
              <strong>Redacción</strong>: si hay acuerdo, se plasma con
              precisión (montos, fechas, obligaciones, consecuencias).
            </li>
          </ul>

          <div className={styles.categoryCard}>
            <h3>Audiencia virtual: lo mínimo para que salga bien</h3>

            <ul className={styles.list}>
              <li>Buena conexión a internet y un lugar sin ruido.</li>
              <li>Documento de identidad a la mano.</li>
              <li>Soportes en PDF listos para compartir.</li>
              <li>Disposición a negociar: sin eso, no hay acuerdo.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
