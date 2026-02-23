"use client";

import styles from "./Article.module.css";

export default function ActaAlimentos() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <article id="acta-alimentos" className={styles.card}>
          <h2>
            Acta de conciliación de alimentos (con ejemplo) y Artículo 411 del
            Código Civil colombiano
          </h2>

          <p>
            Si buscas <strong>“acta de conciliación de alimentos”</strong> o{" "}
            <strong>“ejemplo de conciliación de alimentos”</strong>, este tipo
            de acta debe ser especialmente precisa: monto, periodicidad,
            indexación (si se pacta), forma de pago, y gastos extraordinarios
            (salud/educación).
          </p>

          <h3>
            ¿Qué dice el Art. 411 del Código Civil colombiano (idea central)?
          </h3>

          <p>
            El <strong>artículo 411</strong> establece, de manera general,{" "}
            <strong>quiénes están obligados a suministrar alimentos</strong>
            según el vínculo familiar (p. ej., entre cónyuges/compañeros según
            el caso, ascendientes, descendientes y otros parientes en los
            eventos previstos). En conciliación, esto se traduce en que el
            acuerdo debe corresponder a un deber alimentario plausible y a la
            realidad económica de las partes.
          </p>

          <p className={styles.note}>
            Recomendación práctica: soporta ingresos y gastos del menor (o
            alimentario) para que el monto sea defendible y sostenible.
          </p>

          <h3>Modelo de acta (alimentos)</h3>

          <pre>
            {`ACTA DE CONCILIACIÓN (ALIMENTOS) No. [●]

I. COMPARECIENTES
Solicitante: [●] - CC [●] - en calidad de [madre/padre/representante del menor ●]
Citado(a): [●] - CC [●]

Menor/Alimentario: [Nombre] - [Registro Civil/TI] - Fecha de nacimiento: [●]

II. OBJETO
Fijación/ajuste de cuota alimentaria a favor de [●].

III. ACUERDOS
1) Cuota alimentaria ordinaria:
El(la) citado(a) pagará a favor de [menor/alimentario] la suma de $[●] COP mensuales, dentro de los primeros [●] días
de cada mes, mediante [transferencia/consignación] a la cuenta [●] a nombre de [●].

2) Gastos extraordinarios:
Se acuerda que los gastos extraordinarios de [salud no cubierta / útiles / matrículas / uniformes / terapias]
serán asumidos así: [porcentaje A] / [porcentaje B], previa entrega del soporte (factura/orden) por [medio].

3) Indexación (opcional):
La cuota se reajustará cada [enero] conforme a [IPC / incremento anual pactado] (si se decide pactarlo).

4) Régimen de entrega de soportes:
Los comprobantes de pago se enviarán a [correo/WhatsApp] dentro de las [●] horas siguientes al pago.

5) Incumplimiento:
En caso de incumplimiento, la parte cumplida podrá exigir lo acordado por las vías legales pertinentes.

Firmas…`}
          </pre>

          <details>
            <summary>
              Mini-checklist: alimentos (para que no quede débil)
            </summary>
            <ul>
              <li>
                Dejar claro si la cuota cubre alimentación, transporte,
                recreación, etc.
              </li>
              <li>
                Separar “ordinarios” vs “extraordinarios” y cómo se
                aprueban/pagan.
              </li>
              <li>
                Definir medio de pago y a nombre de quién queda la cuenta.
              </li>
              <li>Agregar regla de reajuste si la manejan en el centro.</li>
            </ul>
          </details>
        </article>
      </div>
    </div>
  );
}
