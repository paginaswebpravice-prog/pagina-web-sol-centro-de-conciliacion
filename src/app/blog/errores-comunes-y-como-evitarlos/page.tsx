import styles from "./Article.module.css";

export default function ErroresComunes() {
  return (
    <>
      <section id="errores" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>8) Errores comunes y cómo evitarlos</h2>

          <div className={styles.card}>
            <ul className={styles.list}>
              <li>
                <span>
                  <strong>Llegar sin propuesta</strong>: trae números, plazos y
                  un plan alterno.
                </span>
              </li>
              <li>
                <span>
                  <strong>No llevar soportes</strong>: el acuerdo se facilita
                  cuando hay evidencia clara.
                </span>
              </li>
              <li>
                <span>
                  <strong>Confundir “perdonar” con “negociar”</strong>:
                  conciliar es conseguir una solución viable, no ceder sin
                  estrategia.
                </span>
              </li>
              <li>
                <span>
                  <strong>Actas ambiguas</strong>: si no hay fechas, montos y
                  forma de cumplimiento, el acuerdo se vuelve frágil.
                </span>
              </li>
              <li>
                <span>
                  <strong>Ir a “ganar”</strong>: la conciliación no es juicio;
                  es una negociación con marco legal.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
