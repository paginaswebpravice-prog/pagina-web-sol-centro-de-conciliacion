import styles from "./Article.module.css";

export default function Audiencia() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <article id="audiencia" className={styles.card}>
            <h2>Audiencia de conciliación: cómo es y cómo prepararte</h2>

            <p>
              La búsqueda <strong>“audiencia de conciliación”</strong> suele
              responder a una inquietud práctica: ¿qué pasa ese día? La
              audiencia normalmente tiene cinco momentos: identificación,
              exposición, precisión de pretensiones, negociación y cierre (acta
              o constancia).
            </p>

            <div className={styles.grid}>
              <section className={styles.innerCard}>
                <h3>Qué llevar</h3>
                <ul>
                  <li>Documento de identidad.</li>
                  <li>
                    Soportes: contratos, facturas, chats, consignaciones, actas,
                    certificaciones.
                  </li>
                  <li>Propuesta escrita (monto/plazos) y dos alternativas.</li>
                </ul>
              </section>

              <section className={styles.innerCard}>
                <h3>Qué NO hacer</h3>
                <ul>
                  <li>Ir sin números/fechas.</li>
                  <li>Discutir hechos sin soportes.</li>
                  <li>Firmar un acuerdo ambiguo (“después miramos”).</li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
