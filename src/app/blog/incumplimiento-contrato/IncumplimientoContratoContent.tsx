"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function IncumplimientoContratoContent() {
  return (
    <>
      <section className={styles.articleWrapper}>
        <motion.article
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* HERO */}
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              Conciliación contractual en Colombia
            </span>

            <h1 className={styles.title}>
              ¿Qué hacer ante un incumplimiento de contrato en Colombia? Guía
              sobre conciliación, derechos y soluciones legales
            </h1>

            <p className={styles.heroText}>
              El incumplimiento de contrato es una de las causas más frecuentes
              de conflictos entre personas, empresas, proveedores, clientes,
              arrendadores y contratistas. Cuando una de las partes no cumple lo
              pactado, pueden surgir perjuicios económicos y desacuerdos que
              afectan la relación contractual.
            </p>

            <p className={styles.heroText}>
              Antes de iniciar una demanda judicial, la conciliación se presenta
              como una alternativa eficiente para buscar soluciones, recuperar
              obligaciones pendientes y llegar a acuerdos que beneficien a ambas
              partes.
            </p>

            <p className={styles.heroText}>
              En Colombia, numerosos conflictos contractuales pueden resolverse
              mediante conciliación extrajudicial, reduciendo tiempos, costos y
              desgaste emocional.
            </p>
          </div>

          {/* CUANDO EXISTE UN INCUMPLIMIENTO DE CONTRATO SEGÚN LA LEGISLACIÓN */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo existe un incumplimiento de contrato según la legislación
              colombiana?
            </h2>

            <p className={styles.paragraph}>
              Un incumplimiento contractual ocurre cuando una de las partes deja
              de cumplir total o parcialmente las obligaciones que aceptó al
              firmar un contrato. Ese incumplimiento puede consistir en no
              entregar un bien, no prestar un servicio, no realizar un pago,
              entregar algo diferente a lo pactado o cumplir fuera del tiempo
              establecido.
            </p>

            <p className={styles.paragraph}>
              No todos los incumplimientos tienen la misma gravedad. Algunos
              pueden solucionarse mediante acuerdos entre las partes, mientras
              que otros generan perjuicios económicos importantes que hacen
              necesaria una conciliación o, incluso, un proceso judicial para
              obtener el cumplimiento o la indemnización correspondiente.
            </p>

            <p className={styles.paragraph}>
              En Colombia es frecuente encontrar conflictos derivados de
              contratos de compraventa, arrendamiento, prestación de servicios,
              construcción, suministro, transporte y relaciones comerciales
              entre empresas. Antes de acudir ante un juez, muchas de estas
              controversias pueden resolverse mediante conciliación
              extrajudicial.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación permite que las partes analicen el conflicto,
                identifiquen las obligaciones pendientes y construyan acuerdos
                orientados a solucionar la controversia sin necesidad de acudir
                inmediatamente a un juez.
              </p>
            </div>
          </div>

          {/* CASOS FRECUENTES DE INCUMPLIMIENTO CONTRACTUAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Casos frecuentes de incumplimiento contractual
            </h2>

            <ul className={styles.list}>
              <li>Incumplimiento en contratos de prestación de servicios.</li>
              <li>Retrasos en entregas de productos.</li>
              <li>Incumplimiento de pagos pactados.</li>
              <li>Problemas en contratos de arrendamiento.</li>
              <li>Incumplimiento de obligaciones comerciales.</li>
              <li>Entrega de bienes defectuosos.</li>
              <li>Incumplimiento de cronogramas contractuales.</li>
              <li>Controversias entre proveedores y clientes.</li>
            </ul>
          </div>

          {/* TIPOS DE CONTRATOS QUE PUEDEN RESOLVERSE MEDIANTE CONCILIACIÓN */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué tipos de contratos pueden resolverse mediante conciliación?
            </h2>

            <p className={styles.paragraph}>
              La conciliación no está limitada a un único tipo de contrato.
              Siempre que el conflicto verse sobre derechos conciliables, las
              partes pueden acudir a un centro de conciliación para buscar una
              solución voluntaria antes de iniciar un proceso judicial.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Contratos de prestación de servicios</h3>

                <p>
                  Incumplimientos relacionados con pagos, entregas, ejecución
                  del servicio o terminación anticipada.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Contratos comerciales</h3>

                <p>
                  Conflictos entre proveedores, distribuidores, comerciantes y
                  empresas por obligaciones económicas pendientes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Contratos civiles</h3>

                <p>
                  Compraventas, préstamos, promesas de compraventa, suministro y
                  demás acuerdos entre particulares.
                </p>
              </div>
            </div>

            <p className={styles.paragraph}>
              Cada caso debe analizarse de forma individual para determinar si
              es conciliable y cuál es el mejor mecanismo para proteger los
              derechos de las partes involucradas.
            </p>
          </div>

          {/* BENEFICIOS DE CONCILIACIÓN ANTES DE DEMANDAR */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de conciliar antes de demandar
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Ahorro de tiempo</h3>

                <p>
                  Los acuerdos conciliatorios suelen alcanzarse en menos tiempo
                  que un proceso judicial tradicional.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Reducción de costos</h3>

                <p>
                  Permite disminuir gastos asociados a litigios prolongados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conservación de relaciones</h3>

                <p>
                  Favorece soluciones colaborativas que pueden preservar las
                  relaciones comerciales entre las partes.
                </p>
              </div>
            </div>
          </div>

          {/* QUE PUEDE SOLICITAR LA PARTE AFFECTADA POR UN INCUMPLIMIENTO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué puede solicitar la parte afectada por un incumplimiento
              contractual?
            </h2>

            <p className={styles.paragraph}>
              Dependiendo del contrato y de las consecuencias generadas por el
              incumplimiento, durante la conciliación es posible negociar
              diferentes alternativas que permitan solucionar el conflicto sin
              necesidad de un proceso judicial prolongado.
            </p>

            <ul className={styles.list}>
              <li>Cumplimiento inmediato de la obligación pendiente.</li>

              <li>Pago de sumas adeudadas.</li>

              <li>Entrega del bien comprometido.</li>

              <li>Devolución del dinero entregado.</li>

              <li>Indemnización por perjuicios.</li>

              <li>Acuerdos de pago.</li>

              <li>Reestructuración del contrato.</li>

              <li>Terminación del contrato por mutuo acuerdo.</li>

              <li>Compensación económica entre las partes.</li>

              <li>Establecimiento de nuevos plazos de cumplimiento.</li>
            </ul>
          </div>

          {/* POSIBLES ACUERDOS EN UNA CONCILIACIÓN CONTRACTUAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Posibles acuerdos en una conciliación contractual
            </h2>

            <ul className={styles.list}>
              <li>Cumplimiento de obligaciones pendientes.</li>
              <li>Reestructuración de pagos.</li>
              <li>Plazos adicionales de cumplimiento.</li>
              <li>Compensaciones económicas.</li>
              <li>Terminación consensuada del contrato.</li>
              <li>Modificación de cláusulas contractuales.</li>
              <li>Acuerdos sobre indemnizaciones.</li>
            </ul>
          </div>

          {/* QUE DOCUMENTOS SON IMPORTANTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué documentos son importantes?
            </h2>

            <p className={styles.paragraph}>
              Para una conciliación contractual es recomendable contar con el
              contrato firmado, anexos, comunicaciones entre las partes,
              comprobantes de pago y cualquier evidencia relacionada con el
              incumplimiento.
            </p>

            <p className={styles.paragraph}>
              Estos documentos ayudan a identificar claramente las obligaciones
              asumidas y facilitan la construcción de acuerdos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pruebas ayudan a demostrar un incumplimiento de contrato?
            </h2>

            <p className={styles.paragraph}>
              Mientras más información se presente durante la conciliación,
              mayores serán las posibilidades de demostrar el incumplimiento y
              construir un acuerdo basado en hechos verificables.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Contrato firmado</h3>

                <p>
                  Es el documento principal para identificar las obligaciones
                  asumidas por cada una de las partes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Correos y mensajes</h3>

                <p>
                  Permiten demostrar conversaciones, requerimientos,
                  incumplimientos o solicitudes de cumplimiento.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Facturas y comprobantes</h3>

                <p>
                  Son útiles para acreditar pagos realizados, valores pendientes
                  y demás obligaciones económicas.
                </p>
              </div>
            </div>
          </div>

          {/* QUE SUCEDE SI NO SE LOGRA UNA CONCILIACIÓN */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si no se logra una conciliación?
            </h2>

            <p className={styles.paragraph}>
              Cuando no es posible alcanzar un acuerdo, las partes mantienen la
              posibilidad de acudir a los mecanismos judiciales previstos por la
              ley para resolver la controversia contractual.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, intentar una conciliación suele ser una alternativa
              valiosa para explorar soluciones antes de iniciar procesos más
              complejos.
            </p>
          </div>

          {/* ERRORES QUE DEBES EVITAR CUANDO EXISTE UN INCUMPLIMIENTO DE CONTRATO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores que debes evitar cuando existe un incumplimiento de
              contrato
            </h2>

            <p className={styles.paragraph}>
              Muchas personas toman decisiones apresuradas que terminan
              dificultando la solución del conflicto. Antes de iniciar cualquier
              actuación es recomendable conservar todas las pruebas y buscar
              orientación jurídica.
            </p>

            <ul className={styles.list}>
              <li>Destruir o perder el contrato original.</li>

              <li>No conservar conversaciones o correos electrónicos.</li>

              <li>Esperar demasiado tiempo para reclamar.</li>

              <li>No documentar los perjuicios ocasionados.</li>

              <li>Firmar nuevos acuerdos sin leer sus condiciones.</li>

              <li>
                Asumir que únicamente una demanda puede resolver el problema.
              </li>

              <li>No asistir a la audiencia de conciliación.</li>

              <li>Negociar verbalmente sin dejar evidencia escrita.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                En muchos conflictos contractuales, una conciliación bien
                preparada permite recuperar pagos, establecer nuevos plazos o
                finalizar el contrato mediante un acuerdo con efectos legales,
                evitando procesos judiciales más largos y costosos.
              </p>
            </div>
          </div>

          {/* PREGUNTAS FRECUENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Se puede conciliar cualquier contrato?</h3>

                <p>
                  Muchos contratos civiles y comerciales permiten acudir a
                  conciliación para resolver controversias.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿El acuerdo tiene validez legal?</h3>

                <p>
                  Sí. El acta de conciliación tiene efectos jurídicos y puede
                  hacerse cumplir conforme a la ley.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Debo demandar inmediatamente?</h3>

                <p>
                  No necesariamente. La conciliación puede ofrecer soluciones
                  rápidas antes de acudir a un proceso judicial.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Incumplieron un contrato y no sabes cómo reclamar tus derechos?
            </h3>

            <p className={styles.ctaText}>
              En Sol Centro de Conciliación te orientamos para iniciar un
              proceso de conciliación por incumplimiento de contrato, revisar
              las obligaciones pactadas, preparar la documentación necesaria y
              buscar una solución rápida, efectiva y con respaldo legal.
              Atendemos casos en Bogotá y en toda Colombia.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Solicitar asesoría por WhatsApp
            </a>
          </div>
        </motion.article>
      </section>
    </>
  );
}
