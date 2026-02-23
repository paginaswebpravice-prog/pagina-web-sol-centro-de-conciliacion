import styles from "./Article.module.css";

export default function CuandoConvieneConciliar() {
  return (
    <>
      <section id="cuando-conviene" className={styles.articleWrapper}>
        <div className={styles.articleBlock}>
          <h2 className={styles.title}>2) Cuándo conviene conciliar</h2>

          <p className={styles.paragraph}>
            La conciliación suele ser la mejor opción cuando:
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Existe relación entre las partes</strong> (familia,
              socios, vecinos, arrendador/arrendatario, proveedor/cliente) y
              conviene preservar un mínimo de comunicación.
            </li>

            <li>
              <strong>Hay interés real en cerrar el conflicto</strong> sin
              exponerse a tiempos judiciales.
            </li>

            <li>
              <strong>El caso requiere soluciones flexibles</strong> (planes de
              pago, entregas parciales, acuerdos progresivos, compensaciones).
            </li>

            <li>
              <strong>La evidencia está</strong>, pero prefieres una salida
              rápida: la conciliación es estratégica cuando el “costo de pelear”
              supera el beneficio.
            </li>
          </ul>

          <p className={styles.note}>
            Tip práctico: la conciliación funciona mejor cuando llegas con una
            propuesta concreta (mínimo aceptable, máximo cedible y
            alternativas).
          </p>
        </div>
      </section>
    </>
  );
}
