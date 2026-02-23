import styles from "./Article.module.css";

export default function Poder() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <article id="poder" className={styles.card}>
            <h2>Poder para asistir a audiencia de conciliación (modelo)</h2>

            <p>
              Si te piden{" "}
              <strong>“poder para asistir a audiencia de conciliación”</strong>,
              lo usual es autorizar a un apoderado para: (i) asistir, (ii)
              conciliar, (iii) suscribir el acta y (iv) aportar/recibir
              documentos. Ajusta el alcance según tu caso (general o especial).
            </p>

            <h3>Modelo de poder (persona natural)</h3>

            <pre>
              {`PODER ESPECIAL

[Ciudad], [dd/mm/aaaa]

Yo, [Nombre completo], mayor de edad, identificado(a) con CC No. [●] de [●], confiero PODER ESPECIAL, amplio y suficiente
a [Nombre del apoderado(a)], identificado(a) con CC No. [●] y T.P. No. [●] (si aplica), para que en mi nombre y representación:

1) Comparezca a audiencia(s) de conciliación ante [Centro/Entidad] dentro del trámite solicitado por/contra [●].
2) Presente solicitudes, reciba citaciones, aporte y solicite documentos.
3) Concilié, transija y suscriba el acta de conciliación o constancias que se generen, dentro de los límites siguientes:
   - [Límite económico o condiciones: p. ej. hasta $● / plan de pago máximo ● cuotas / etc.]

Notificaciones: [correo] / [dirección].

Firma otorgante: _______________________
Nombre: [●]
CC: [●]

Firma apoderado(a) (aceptación): _______________________
Nombre: [●]
CC: [●] / T.P.: [●]`}
            </pre>
          </article>
        </div>
      </div>
    </>
  );
}
