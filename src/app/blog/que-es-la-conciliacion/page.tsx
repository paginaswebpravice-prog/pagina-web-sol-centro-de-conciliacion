import styles from "./Article.module.css";

export default function QueEsLaConciliacion() {
  return (
    <>
      <section className={styles.articleWrapper}>
        <div className={styles.articleBlock}>
          <h2 className={styles.title}>
            1) ¿Qué es la conciliación y para qué sirve?
          </h2>

          <p className={styles.paragraph}>
            La <strong>conciliación</strong> es un mecanismo de solución de
            conflictos en el que dos o más partes, acompañadas por un{" "}
            <strong>conciliador</strong>, buscan construir un{" "}
            <strong>acuerdo</strong> sin necesidad de llegar a un proceso
            judicial largo y costoso. Su enfoque es práctico: identificar el
            problema, ordenar las pretensiones y aterrizar compromisos
            verificables (fechas, valores, formas de pago, entregas,
            desistimientos).
          </p>

          <p className={styles.paragraph}>
            Cuando el acuerdo se formaliza en un{" "}
            <strong>acta de conciliación</strong>, esta suele tener efectos
            jurídicos relevantes. Por eso, conciliar no es “hablar por hablar”:
            es
            <strong> negociar con estructura</strong> y dejar todo por escrito
            con claridad.
          </p>
        </div>
      </section>
    </>
  );
}
