import styles from "./Article.module.css";

export default function AmigableComposicion() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <article id="amigable-composicion" className={styles.card}>
            <h2>
              Amigable composición en Colombia: qué es, características y
              amigable componedor
            </h2>

            <p>
              Además de conciliación, muchas personas buscan{" "}
              <strong>“amigable composición en Colombia”</strong> o{" "}
              <strong>“amigable componedor Colombia”</strong>. La amigable
              composición es un mecanismo en el que las partes, por acuerdo,{" "}
              <strong>delegan en un tercero</strong> (amigable componedor) la
              facultad de <strong>definir la solución</strong> del conflicto
              dentro de los límites pactados.
            </p>

            <h3>Amigable composición: definición práctica</h3>

            <p>
              Es un mecanismo <strong>predominantemente contractual</strong>:
              nace del acuerdo de las partes (cláusula o compromiso), quienes
              determinan el alcance, reglas, término y efectos de la decisión
              del componedor.
            </p>

            <h3>Características de la amigable composición</h3>

            <ul>
              <li>
                <strong>Autonomía de la voluntad</strong>: las reglas las fijan
                las partes (procedimiento, pruebas, plazos).
              </li>
              <li>
                <strong>Tercero imparcial</strong>: el amigable componedor debe
                actuar con independencia y neutralidad.
              </li>
              <li>
                <strong>Decisión vinculante</strong> (según pacto): la salida se
                entiende obligatoria dentro de lo acordado por las partes.
              </li>
              <li>
                <strong>Flexibilidad</strong>: permite procedimientos ágiles,
                centrados en el resultado.
              </li>
              <li>
                <strong>Enfoque técnico</strong>: útil en controversias de obra,
                contratos, prestaciones, calidad, liquidaciones, etc.
              </li>
            </ul>

            <h3>¿Cuándo conviene?</h3>

            <ul>
              <li>
                Cuando se necesita una decisión rápida de un tercero experto.
              </li>
              <li>
                Cuando negociar directamente es inviable, pero se busca evitar
                litigio largo.
              </li>
              <li>
                Cuando el conflicto es altamente técnico y requiere criterio
                especializado.
              </li>
            </ul>

            <p className={styles.note}>
              Diferencia rápida: en conciliación las partes construyen el
              acuerdo; en amigable composición, un tercero define la solución
              dentro del marco pactado.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
