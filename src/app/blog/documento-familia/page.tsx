import styles from "./Article.module.css";

export default function DocumentoFamilia() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <article id="documento-familia" className={styles.card}>
            <h2>
              Documento de conciliación familiar / Acta de conciliación familiar
              (modelo)
            </h2>

            <p>
              La búsqueda <strong>“documento de conciliación familiar”</strong>{" "}
              o <strong>“acta de conciliación familiar”</strong>
              suele incluir acuerdos de alimentos, visitas, comunicación, gastos
              y responsabilidades parentales. Lo familiar exige lenguaje claro y
              reglas operativas para evitar conflictos recurrentes.
            </p>

            <h3>Modelo (familiar: visitas + acuerdos de crianza)</h3>

            <pre>
              {`ACTA DE CONCILIACIÓN (FAMILIA) No. [●]

I. PARTES
Progenitor(a) A: [●] - CC [●]
Progenitor(a) B: [●] - CC [●]
Menor: [●] - [RC/TI] - Nacimiento: [●]

II. OBJETO
Acuerdos de crianza: [visitas / comunicación / logística / gastos].

III. ACUERDOS
1) Régimen de visitas:
B compartirá con el menor así: [días/horarios]. Entrega: [lugar]. Retorno: [lugar/hora].
Cambios: deben avisarse con [●] horas/días.

2) Comunicación:
Se acuerda comunicación por [medio] en horarios [●], priorizando el bienestar del menor.

3) Gastos del menor:
Ordinarios: [●]. Extraordinarios: [●] con soportes y porcentaje [●].

4) No exposición al conflicto:
Las partes se comprometen a mantener trato respetuoso y no involucrar al menor en discusiones.

Firmas…`}
            </pre>
          </article>
        </div>
      </div>
    </>
  );
}
