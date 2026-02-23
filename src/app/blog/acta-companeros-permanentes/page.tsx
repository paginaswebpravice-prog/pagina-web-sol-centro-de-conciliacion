import styles from "./Article.module.css";

export default function ActaCompanerosPermanentes() {
  return (
    <>
      <section className={styles.wrapper}>
        <article id="acta-companeros-permanentes" className={styles.card}>
          <h2 className={styles.title}>
            Acta de conciliación suscrita por los compañeros permanentes
          </h2>

          <p className={styles.text}>
            Una búsqueda frecuente es{" "}
            <strong>
              “acta de conciliación suscrita por los compañeros permanentes”
            </strong>
            . En la práctica, se usa para formalizar acuerdos derivados de la
            convivencia: cuotas de sostenimiento, responsabilidades con hijos,
            reparto de gastos, acuerdos de crianza, y reglas de
            comunicación/convivencia.
          </p>

          <p className={styles.note}>
            Clave: identificar plenamente a ambos compañeros permanentes y
            precisar el alcance del acuerdo (qué cubre y qué no).
          </p>

          <h3 className={styles.subTitle}>
            Modelo (enfoque familiar/convivencia)
          </h3>

          <pre className={styles.pre}>
            {`ACTA DE CONCILIACIÓN (COMPAÑEROS PERMANENTES) No. [●]

I. COMPARECIENTES
Compañero(a) Permanente A: [●] - CC [●]
Compañero(a) Permanente B: [●] - CC [●]

II. OBJETO
Las partes desean conciliar acuerdos relacionados con: [apoyo económico / gastos del hogar / acuerdos respecto de hijos / otros].

III. ACUERDOS
1) Aporte mensual de sostenimiento:
B aportará a A la suma de $[●] COP mensuales, el día [●] de cada mes, por transferencia a [cuenta/medio], destinada a: [arriendo/servicios/mercado].

2) Gastos extraordinarios (si aplica):
Los gastos extraordinarios de [salud/educación/otros] se asumirán así: [porcentajes] y se acreditarán con: [facturas/recibos].

3) Comunicación y cumplimiento:
La coordinación se realizará por [WhatsApp/correo] y se dejará constancia de cada pago con comprobante.

4) Vigencia:
Este acuerdo rige desde [fecha] hasta [fecha] o hasta nueva conciliación por cambio de circunstancias.

Firmas…`}
          </pre>
        </article>
      </section>
    </>
  );
}
