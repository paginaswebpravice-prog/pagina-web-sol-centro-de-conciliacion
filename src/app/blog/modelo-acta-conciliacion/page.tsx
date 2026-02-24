import styles from "./Article.module.css";

export default function ModeloActaConciliacion() {
  return (
    <>
      <article id="modelo-acta-conciliacion" className={styles.modeloCard}>
        <h2 className={styles.modeloTitle}>
          Modelo de acta de conciliación (general)
        </h2>

        <p className={styles.modeloText}>
          Si estás buscando un <strong>modelo de acta de conciliación</strong>,
          lo esencial es que el documento deje sin ambigüedades:{" "}
          <strong>quién</strong> cumple, <strong>qué</strong> cumple,{" "}
          <strong>cuándo</strong> y <strong>cómo</strong>. El acuerdo debe ser
          medible (montos, fechas, obligaciones verificables) y anexar soportes
          cuando aplique.
        </p>

        <p className={styles.modeloNote}>
          Nota: ajusta este modelo a tu centro, reglamento interno y formato.
          Evita frases genéricas como “pagará pronto”.
        </p>

        <h3 className={styles.subTitle}>Modelo (copiar y pegar)</h3>

        <div className={styles.documentBox}>
          <div className={styles.documentHeader}>
            <span>DOCUMENTO MODELO</span>
            <span>Uso referencial</span>
          </div>
          <pre>
            {`ACTA DE CONCILIACIÓN No. [●]

CENTRO DE CONCILIACIÓN: [Nombre del Centro]
CIUDAD: [●]     FECHA: [dd/mm/aaaa]     HORA INICIO: [●]     HORA FIN: [●]
MODALIDAD: [Presencial / Virtual]
CONCILIADOR(A): [Nombre completo] - [Documento] - [Registro/Designación si aplica]

I. COMPARECIENTES
1. PARTE SOLICITANTE (CONCILIANTE A):
   Nombre: [●]  Identificación: [●]  Dirección/Correo/Teléfono: [●]
   Calidad: [Persona natural / Representante legal de ●]

2. PARTE CITADA (CONCILIANTE B):
   Nombre: [●]  Identificación: [●]  Dirección/Correo/Teléfono: [●]
   Calidad: [Persona natural / Representante legal de ●]

II. OBJETO DE LA CONCILIACIÓN
Las partes manifiestan que el conflicto se origina en:
[Describir en 3-6 líneas el hecho y la pretensión].

IV. ACUERDO CONCILIATORIO
CLÁUSULA 1. OBLIGACIÓN PRINCIPAL
[Detalle exacto].

CLÁUSULA 2. MONTO / PRESTACIÓN
Valor total: $[●] COP.
Forma de pago:
- Cuota 1: $[●] el [dd/mm/aaaa]
- Cuota 2: $[●] el [dd/mm/aaaa]

CLÁUSULA 4. INCUMPLIMIENTO
En caso de incumplimiento, la parte cumplida podrá exigir lo acordado por las vías legales pertinentes.

V. FIRMA
Firma Conciliador(a): _______________________
Conciliantes A: _____________________________
Conciliantes B: _____________________________`}
          </pre>
        </div>

        <div className={styles.modeloCTA}>
          <strong>Checklist rápido para un acta “ejecutable”</strong>
          <ul>
            <li>Monto exacto + fechas exactas + medio de pago/entrega.</li>
            <li>Cómo se acredita el cumplimiento (soporte verificable).</li>
            <li>Identificación completa de partes.</li>
            <li>Anexos clave relacionados.</li>
          </ul>
        </div>
      </article>
    </>
  );
}
