import styles from "./Article.module.css";

export default function ActaDeConciliacionEfectosYCumplimiento() {
  return (
    <>
      <section id="acta" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            7) Acta de conciliación: efectos y cumplimiento
          </h2>

          <p className={styles.paragraph}>
            El objetivo final es un acuerdo claro. Un acta bien redactada debe
            responder, sin ambigüedades:
            <strong> quién</strong> cumple, <strong> qué</strong> cumple,{" "}
            <strong> cuándo</strong> cumple y <strong> cómo</strong> cumple.
          </p>

          <p className={styles.paragraph}>Un acta robusta suele incluir:</p>

          <ul className={styles.list}>
            <li>
              <span>Identificación completa de las partes.</span>
            </li>
            <li>
              <span>Descripción breve del conflicto.</span>
            </li>
            <li>
              <span>
                Obligaciones exactas (valores, plazos, forma de pago, entregas).
              </span>
            </li>
            <li>
              <span>Soportes anexos o referenciados.</span>
            </li>
            <li>
              <span>
                Cláusulas de verificación: por ejemplo, cómo se acredita un pago
                o una entrega.
              </span>
            </li>
          </ul>

          <p className={styles.note}>
            Consejo: evita frases genéricas (“se compromete a pagar pronto”).
            Exige fechas y montos. Lo que no se mide, no se ejecuta.
          </p>
        </div>
      </section>
    </>
  );
}
