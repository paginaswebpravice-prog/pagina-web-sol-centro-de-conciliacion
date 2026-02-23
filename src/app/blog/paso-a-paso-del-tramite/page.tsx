import styles from "./Article.module.css";

export default function PasoAPasoDelTramite() {
  return (
    <>
      <section id="paso-a-paso" className={styles.articleWrapper}>
        <div className={styles.articleBlock}>
          <h2 className={styles.title}>
            4) Paso a paso del trámite de conciliación
          </h2>

          <ol className={styles.orderedList}>
            <li>
              <strong>Solicitud</strong>: presentas tu caso con una narrativa
              breve y clara (qué pasó, qué pides y por qué).
            </li>

            <li>
              <strong>Revisión y admisión</strong>: el centro verifica datos
              básicos, competencia y requisitos mínimos.
            </li>

            <li>
              <strong>Citación</strong>: se convoca a la otra parte indicando
              fecha, modalidad (presencial/virtual) y documentos.
            </li>

            <li>
              <strong>Audiencia</strong>: se escuchan posiciones, se exploran
              alternativas y se redacta el acuerdo si hay voluntad.
            </li>

            <li>
              <strong>Cierre</strong>: se expide <em>acta de conciliación</em>{" "}
              si hay acuerdo, o constancia según corresponda.
            </li>
          </ol>

          <div
            className={styles.cta}
            role="note"
            aria-label="Llamado a la acción"
          >
            <strong className={styles.ctaTitle}>
              Checklist rápido para llegar preparado(a)
            </strong>

            <ul className={styles.ctaList}>
              <li>
                Define tu objetivo: ¿qué necesitas para cerrar el conflicto?
              </li>
              <li>Prepara una propuesta con números y fechas.</li>
              <li>
                Organiza soportes (contrato, chats, facturas, consignaciones,
                etc.).
              </li>
              <li>
                Piensa en 2 alternativas por si tu propuesta inicial no
                prospera.
              </li>
            </ul>

            <a
              href="https://wa.me/57XXXXXXXXXX"
              rel="noopener"
              target="_blank"
              className={styles.ctaButton}
            >
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
