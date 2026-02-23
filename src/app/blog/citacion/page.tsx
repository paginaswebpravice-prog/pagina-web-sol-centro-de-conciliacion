import styles from "./Article.module.css";

export default function Citacion() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <article id="citacion" className={styles.card}>
            <h2>Citación a audiencia de conciliación (modelo)</h2>

            <p>
              La <strong>“citación audiencia de conciliación”</strong> debe ser
              muy clara: fecha, hora, modalidad, enlace (si es virtual),
              documentos a aportar y canales de contacto. Esto reduce
              inasistencias y evita suspensiones.
            </p>

            <h3>Modelo de citación</h3>

            <pre>
              {`CITACIÓN A AUDIENCIA DE CONCILIACIÓN No. [●]

Centro/Entidad: [●]
Ciudad: [●]
Asunto/Expediente interno: [●]

Señor(a): [Nombre del citado]
Identificación/NIT: [●]
Dirección/Correo: [●]

Por medio de la presente se cita a AUDIENCIA DE CONCILIACIÓN dentro del trámite solicitado por [Solicitante] contra [Citado],
relacionado con: [descripción breve del conflicto].

FECHA: [dd/mm/aaaa]
HORA: [●]
MODALIDAD: [Presencial / Virtual]

Si es VIRTUAL:
Enlace: [●]
Requisitos: conexión estable, documento de identidad, cámara/micrófono (si aplica).

Documentos sugeridos:
- [Contrato/facturas/soportes de pago/chats/otros]
- Poder (si actúa apoderado)

En caso de no poder asistir, comuníquese con el Centro al [teléfono/correo] con antelación.

Atentamente,

[Nombre]
[Cargo]
[Centro/Entidad]
[Firma]`}
            </pre>
          </article>
        </div>
      </div>
    </>
  );
}
