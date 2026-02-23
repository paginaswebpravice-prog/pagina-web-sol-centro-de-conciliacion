import styles from "./Article.module.css";

export default function QueAsuntosSePuedenConciliar() {
  return (
    <>
      <section id="casos" className={styles.articleWrapper}>
        <div className={styles.articleBlock}>
          <h2 className={styles.title}>3) ¿Qué asuntos se pueden conciliar?</h2>

          <p className={styles.paragraph}>
            En términos generales, se concilian{" "}
            <strong>asuntos disponibles para las partes</strong>, es decir,
            materias en las que la ley permite llegar a un acuerdo. En un centro
            de conciliación, suelen tramitarse conflictos como:
          </p>

          <div className={styles.categoryCard}>
            <h3>Conciliación civil</h3>
            <ul className={styles.list}>
              <li>Deudas y acuerdos de pago</li>
              <li>Responsabilidad civil (daños y perjuicios) según el caso</li>
              <li>Incumplimientos contractuales</li>
              <li>Conflictos entre vecinos (convivencia y acuerdos)</li>
            </ul>
          </div>

          <div className={styles.categoryCard}>
            <h3>Conciliación de familia (según viabilidad del caso)</h3>
            <ul className={styles.list}>
              <li>Cuotas de alimentos: fijación, reajustes y forma de pago</li>
              <li>Régimen de visitas y acuerdos de crianza</li>
              <li>Cuotas extraordinarias y gastos del menor</li>
            </ul>
          </div>

          <div className={styles.categoryCard}>
            <h3>Conciliación laboral (conciliable)</h3>
            <ul className={styles.list}>
              <li>Acuerdos de terminación y pago (cuando aplica)</li>
              <li>
                Conflictos por liquidaciones y pagos pendientes (caso a caso)
              </li>
            </ul>
          </div>

          <div className={styles.categoryCard}>
            <h3>Conciliación comercial</h3>
            <ul className={styles.list}>
              <li>Facturas, servicios prestados, proveedores</li>
              <li>Incumplimientos y renegociación de obligaciones</li>
              <li>Acuerdos entre socios o aliados (si es conciliable)</li>
            </ul>
          </div>

          <p className={styles.note}>
            Importante: no todo es conciliable. La viabilidad depende de la
            naturaleza del derecho y del tipo de pretensión. Un buen diagnóstico
            inicial evita pérdidas de tiempo.
          </p>
        </div>
      </section>
    </>
  );
}
