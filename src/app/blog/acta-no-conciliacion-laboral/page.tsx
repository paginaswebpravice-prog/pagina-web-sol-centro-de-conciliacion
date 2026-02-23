import styles from "./Article.module.css";

export default function ActaNoConciliacionLaboral() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <article id="acta-no-conciliacion-laboral" className={styles.card}>
            <h2>Acta de no conciliación laboral (modelo)</h2>

            <p>
              La búsqueda <strong>“acta de no conciliación laboral”</strong>{" "}
              suele referirse a una <strong>constancia</strong> donde se deja
              registro de que <strong>no hubo acuerdo</strong> o de que una
              parte <strong>no compareció</strong>. El texto debe reflejar con
              claridad: (i) quiénes fueron citados, (ii) si asistieron, (iii) si
              hubo o no acuerdo, y (iv) cierre formal.
            </p>

            <h3>Modelo (sin acuerdo)</h3>

            <pre>
              {`ACTA/CONSTANCIA DE NO CONCILIACIÓN (LABORAL) No. [●]

Entidad/Centro: [●]
Fecha: [dd/mm/aaaa]   Hora: [●]   Ciudad: [●]
Asunto: Conciliación laboral solicitada por [Trabajador(a)] contra [Empleador(a)]

Comparecen:
- Solicitante: [●] - CC [●]
- Citado(a): [●] - [representante legal / apoderado] - CC/NIT [●]

Hechos/pretensiones (breve):
[●]

Resultado de la diligencia:
Luego de escuchadas las partes y exploradas alternativas, manifiestan no llegar a acuerdo. En consecuencia,
se deja constancia de NO CONCILIACIÓN respecto de las pretensiones indicadas.

Se firma para constancia.

Firmas…`}
            </pre>

            <h3>Modelo (inasistencia)</h3>

            <pre>
              {`CONSTANCIA POR INASISTENCIA No. [●]

Dejamos constancia de que el(la) citado(a) [●] no compareció a la audiencia programada para el día [●] a las [●],
pese a haber sido citado(a) en debida forma según constancias del expediente interno del Centro/Entidad.

Se expide la presente constancia para los fines pertinentes.

Firmas…`}
            </pre>
          </article>
        </div>
      </div>
    </>
  );
}
