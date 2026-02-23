import styles from "./Article.module.css";

export default function DocumentosYEvidenciaUtil() {
  return (
    <>
      <section id="documentos" className={styles.articleWrapper}>
        <div className={styles.articleBlock}>
          <h2 className={styles.title}>
            5) Documentos y evidencia útil (lo que más ayuda)
          </h2>

          <p className={styles.paragraph}>
            La calidad de la conciliación mejora cuando el caso está sustentado.
            Estos soportes suelen ser útiles:
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Contratos</strong>, órdenes de servicio, cotizaciones
              aceptadas.
            </li>

            <li>
              <strong>Facturas</strong>, cuentas de cobro, soportes de
              entrega/recibo.
            </li>

            <li>
              <strong>Comprobantes</strong> de pago, consignaciones, extractos.
            </li>

            <li>
              <strong>Conversaciones</strong> (WhatsApp/correos) donde se
              reconozca la obligación o se pacten términos.
            </li>

            <li>
              <strong>Pruebas del incumplimiento</strong>: fechas, mensajes,
              requerimientos, actas, reportes.
            </li>
          </ul>

          <p className={styles.note}>
            Recomendación: imprime o consolida en PDF lo esencial. Mucho archivo
            desordenado complica, pero soporte clave bien organizado acelera.
          </p>
        </div>
      </section>
    </>
  );
}
