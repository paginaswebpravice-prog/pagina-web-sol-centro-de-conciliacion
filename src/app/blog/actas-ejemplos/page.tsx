"use client";

import styles from "./Article.module.css";

export default function ActasEjemplos() {
  return (
    <section className={styles.wrapper}>
      <article id="actas-ejemplos" className={styles.card}>
        <h2 className={styles.title}>
          Actas de conciliación: ejemplos y recomendaciones
        </h2>

        <p className={styles.text}>
          Muchas búsquedas como{" "}
          <strong>“actas de conciliación ejemplos”</strong> apuntan a lo mismo:
          ver cómo se redacta un acuerdo claro. La buena práctica es convertir
          el conflicto en obligaciones medibles:
        </p>

        <div className={styles.grid}>
          <section className={styles.innerCard}>
            <h3 className={styles.subTitle}>
              Ejemplo 1: Acuerdo de pago (deuda)
            </h3>
            <pre className={styles.pre}>
              {`Conciliantes B reconoce(n) deber a Conciliantes A la suma de $[●] COP, y se obliga(n) a pagarla en [●] cuotas
mensuales de $[●] cada una, los días [●] de cada mes, mediante transferencia a la cuenta [●].
El pago se acredita con el comprobante de la entidad bancaria enviado al correo [●].`}
            </pre>
          </section>

          <section className={styles.innerCard}>
            <h3 className={styles.subTitle}>
              Ejemplo 2: Entrega de bien / servicio
            </h3>
            <pre className={styles.pre}>
              {`Conciliantes B se obliga(n) a entregar el bien [●] el día [●] en la dirección [●], con estas características: [●].
La entrega se formaliza con acta de entrega firmada por ambas partes y registro fotográfico.`}
            </pre>
          </section>
        </div>

        <details className={styles.details}>
          <summary className={styles.summary}>
            Errores típicos que hacen débil un acta
          </summary>
          <ul className={styles.detailsList}>
            <li className={styles.detailsItem}>
              No poner fechas (“a la mayor brevedad”).
            </li>
            <li className={styles.detailsItem}>
              No definir medio de pago/entrega.
            </li>
            <li className={styles.detailsItem}>
              No aclarar quién representa a quién (y sin poder).
            </li>
            <li className={styles.detailsItem}>
              No anexar soportes clave que sustentan el acuerdo.
            </li>
          </ul>
        </details>
      </article>
    </section>
  );
}
