import styles from "./Article.module.css";

export default function ActaCivil() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <article id="acta-civil" className={styles.card}>
            <h2>Acta de conciliación civil (modelo)</h2>

            <p>
              Si buscas <strong>“acta de conciliación civil”</strong>,
              normalmente es para deudas, incumplimientos contractuales, daños
              (según el caso), entregas, y acuerdos de pago. El éxito está en
              convertir el conflicto en un cronograma de cumplimiento.
            </p>

            <h3>Modelo (civil: deuda / contrato)</h3>

            <pre>
              {`ACTA DE CONCILIACIÓN (CIVIL) No. [●]

I. PARTES
Conciliantes A (Acreedor/Contratante): [●]
Conciliantes B (Deudor/Contratista): [●]

II. OBJETO
Conciliación por [incumplimiento / saldo pendiente / ajuste de obligaciones] derivado de [contrato/orden/relación].

III. ACUERDOS
1) Reconocimiento:
B reconoce adeudar/cumplir la obligación consistente en: [●].

2) Pago/Entrega:
B pagará $[●] COP así: [cuotas/fechas], por [medio], a [cuenta], soporte: [comprobante].

3) Entregables (si aplica):
B entregará [●] el [●] en [●]. Se firma acta de entrega.

4) Desistimiento / cierre:
Una vez pagado/entregado lo acordado, A declara paz y salvo por el asunto conciliado.

Firmas…`}
            </pre>
          </article>
        </div>
      </div>
    </>
  );
}
