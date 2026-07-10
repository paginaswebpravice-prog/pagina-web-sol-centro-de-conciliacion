"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function IncumplimientoAlimentosContent() {
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
              Cuota alimentaria y conciliación familiar
            </span>

            <h1 className={styles.title}>
              Incumplimiento de conciliación de alimentos: ¿qué hacer si no
              pagan la cuota alimentaria en Colombia?
            </h1>

            <p className={styles.heroText}>
              Cuando una persona incumple un acuerdo de cuota alimentaria
              firmado mediante conciliación, existen mecanismos legales para
              exigir su cumplimiento y proteger los derechos de los menores o
              beneficiarios de la obligación.
            </p>

            <p className={styles.heroText}>
              En Colombia, las conciliaciones sobre alimentos tienen efectos
              jurídicos y constituyen una herramienta fundamental para
              garantizar el bienestar económico de los hijos y demás personas
              con derecho a recibir alimentos.
            </p>

            <p className={styles.heroText}>
              Conocer las alternativas disponibles frente al incumplimiento
              permite actuar de forma oportuna y evitar que la situación afecte
              la estabilidad familiar.
            </p>
          </div>

          {/* QUE OCURRE CUANDO SE INCUMPLE UNA CONCILIACION DE ALIMENTOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ocurre cuando se incumple una conciliación de alimentos?
            </h2>

            <p className={styles.paragraph}>
              El incumplimiento se presenta cuando la persona obligada deja de
              realizar los pagos acordados, realiza pagos incompletos o no
              cumple otras obligaciones establecidas en el acta de conciliación.
            </p>

            <p className={styles.paragraph}>
              Debido a que el acuerdo tiene validez jurídica, el beneficiario
              puede acudir a diferentes mecanismos para exigir su cumplimiento.
            </p>

            <div className={styles.highlightBox}>
              <p>
                El acta de conciliación sobre alimentos presta mérito ejecutivo,
                lo que significa que puede servir como base para iniciar
                acciones legales orientadas a obtener el pago de las sumas
                adeudadas.
              </p>
            </div>
          </div>

          {/* COMO SABER SI REALMENTE EXISTE UN INCUMPLIMIENTO DE LA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo saber si realmente existe un incumplimiento de la cuota
              alimentaria?
            </h2>

            <p className={styles.paragraph}>
              El incumplimiento no ocurre únicamente cuando el obligado deja de
              pagar por completo. También puede presentarse cuando realiza
              consignaciones por un valor inferior al acordado, efectúa pagos de
              manera esporádica, omite cubrir gastos extraordinarios pactados o
              incumple otras obligaciones establecidas en el acta de
              conciliación.
            </p>

            <p className={styles.paragraph}>
              En muchos casos los conflictos comienzan con pequeños retrasos
              que, con el paso de los meses, generan una deuda considerable.
              Actuar oportunamente permite proteger los derechos del menor y
              facilita la recuperación de las cuotas pendientes.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Conservar recibos de pago, consignaciones, conversaciones y el
                acta de conciliación facilita demostrar el incumplimiento cuando
                sea necesario.
              </p>
            </div>
          </div>

          {/* SEÑALES DE INCUMPLIMIENTO FRECUENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Señales de incumplimiento frecuentes
            </h2>

            <ul className={styles.list}>
              <li>Retrasos constantes en los pagos.</li>
              <li>Suspensión total de la cuota alimentaria.</li>
              <li>Pagos inferiores a los acordados.</li>
              <li>Incumplimiento de gastos educativos.</li>
              <li>Incumplimiento de gastos médicos.</li>
              <li>Falta de pago de gastos extraordinarios pactados.</li>
            </ul>
          </div>

          {/* OPCIONES PARA EXIGIR EL CUMPLIMIENTO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Opciones para exigir el cumplimiento
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Requerimiento directo</h3>

                <p>
                  En algunos casos es posible intentar una solución amistosa
                  antes de acudir a otras instancias.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Nueva conciliación</h3>

                <p>
                  Las partes pueden intentar renegociar condiciones cuando han
                  cambiado las circunstancias económicas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acciones judiciales</h3>

                <p>
                  El beneficiario puede acudir a los mecanismos legales para
                  exigir el cumplimiento del acuerdo.
                </p>
              </div>
            </div>
          </div>

          {/* DOCUMENTOS IMPORTANTES PARA RECLAMAR */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos importantes para reclamar
            </h2>

            <ul className={styles.list}>
              <li>Acta de conciliación de alimentos.</li>
              <li>Comprobantes de pagos realizados.</li>
              <li>Pruebas de los pagos incumplidos.</li>
              <li>Documentos de identificación.</li>
              <li>Soportes de gastos del menor o beneficiario.</li>
            </ul>
          </div>

          {/* PASOS RECOMENDADOS ANTES DE INICIAR UN PROCESO JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Pasos recomendados antes de iniciar un proceso judicial
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Verificar el acta</h3>

                <p>
                  Revisa cuidadosamente las obligaciones pactadas, los valores
                  acordados, las fechas de pago y cualquier condición especial
                  establecida durante la conciliación.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Organizar las pruebas</h3>

                <p>
                  Reúne comprobantes de consignaciones, extractos bancarios,
                  mensajes y demás documentos que permitan demostrar los pagos
                  realizados o el incumplimiento.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Buscar orientación jurídica</h3>

                <p>
                  Un análisis previo permite determinar cuál es el mecanismo más
                  adecuado para exigir el cumplimiento del acuerdo según las
                  particularidades del caso.
                </p>
              </div>
            </div>
          </div>

          {/* PUEDE MODIFICARSE LA CUOTA ALIMENTARIA? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Puede modificarse la cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Sí. Cuando existen cambios importantes en la situación económica
              de alguna de las partes, puede solicitarse una nueva conciliación
              para revisar el valor de la cuota alimentaria.
            </p>

            <p className={styles.paragraph}>
              Lo recomendable es formalizar cualquier modificación mediante los
              mecanismos legales correspondientes para evitar futuros
              conflictos.
            </p>
          </div>

          {/* CONSECUENCIAS DEL INCUMPLIMIENTO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Consecuencias del incumplimiento
            </h2>

            <ul className={styles.list}>
              <li>Acumulación de obligaciones pendientes.</li>
              <li>Procesos para exigir el pago de las cuotas adeudadas.</li>
              <li>Posibles medidas judiciales de cumplimiento.</li>
              <li>Afectación de los derechos del menor beneficiario.</li>
              <li>Incremento de conflictos familiares.</li>
            </ul>
          </div>

          {/* ERRORES FRECUENTES CUANDO EXISTE INCUMPLIMIENTO DE UNA CONCILIACION DE ALIMENTOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores frecuentes cuando existe incumplimiento de una
              conciliación de alimentos
            </h2>

            <ul className={styles.list}>
              <li>Esperar varios años antes de reclamar el incumplimiento.</li>

              <li>
                No conservar comprobantes de consignaciones o transferencias.
              </li>

              <li>
                Modificar verbalmente el acuerdo sin dejar constancia escrita.
              </li>

              <li>No guardar copia del acta de conciliación.</li>

              <li>Asumir que los retrasos constantes son normales.</li>

              <li>
                No solicitar asesoría cuando el incumplimiento comienza a
                repetirse.
              </li>

              <li>
                Realizar acuerdos informales que después resultan difíciles de
                probar.
              </li>

              <li>
                Desconocer que el acta de conciliación tiene efectos jurídicos
                importantes.
              </li>
            </ul>
          </div>

          {/* PREGUNTAS FRECUENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La conciliación tiene validez legal?</h3>

                <p>
                  Sí. El acta de conciliación tiene efectos jurídicos en
                  Colombia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puedo exigir los pagos atrasados?</h3>

                <p>
                  Existen mecanismos legales para reclamar el cumplimiento de
                  las obligaciones alimentarias incumplidas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Debo hacer otra conciliación?</h3>

                <p>
                  Dependiendo del caso, una nueva conciliación puede ayudar a
                  encontrar soluciones antes de acudir a otras instancias.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Tienes problemas por incumplimiento de alimentos?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, cuotas
              alimentarias, cumplimiento de acuerdos y mecanismos legales
              disponibles en Bogotá y Colombia.
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
