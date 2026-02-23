"use client";

import styles from "./Article.module.css";

export default function CartaConciliacion() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <article id="carta-conciliacion" className={styles.card}>
          <h2>Carta de conciliación (modelo)</h2>

          <p>
            La <strong>carta de conciliación</strong> se usa como invitación
            formal previa (antes de radicar) o como comunicación de intención de
            arreglo. Es útil para abrir puerta a un acuerdo y, a nivel
            estratégico, dejar constancia de buena fe.
          </p>

          <h3>Modelo de carta (invitación a conciliar)</h3>

          <pre>
            {`[Ciudad], [dd] de [mes] de [aaaa]

Señor(a): [Nombre]
[Documento/NIT]
[Dirección / Correo]
Asunto: Invitación a conciliación / propuesta de arreglo

Cordial saludo,

Por medio de la presente, me permito invitarle formalmente a una conciliación con el fin de resolver de manera
directa y eficiente el conflicto relacionado con: [descripción breve].

Propuesta base (opcional):
- [Pago/entrega/obligación] por valor de $[●] COP, en [●] cuotas / en fecha [●]
- Medio: [●]
- Condiciones: [●]

La intención es evitar mayores costos y tiempos, y dejar un acuerdo claro por escrito. Quedo atento(a) a su confirmación
para programar la audiencia en [Centro de Conciliación ●] o acordar una fecha para radicar la solicitud.

Atentamente,

[Firma]
[Nombre]
[CC]
[Teléfono]
[Correo]`}
          </pre>
        </article>
      </div>
    </div>
  );
}
