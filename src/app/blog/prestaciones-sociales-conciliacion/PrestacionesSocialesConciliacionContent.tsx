"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PrestacionesSocialesConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Derecho laboral en Colombia</span>

          <h1 className={styles.title}>
            Conciliación sobre prestaciones sociales en Colombia: cómo reclamar
            cesantías, primas, vacaciones y otros pagos laborales sin demanda
          </h1>

          <p className={styles.heroText}>
            Cuando un trabajador considera que su empleador no pagó
            correctamente las prestaciones sociales, no siempre es necesario
            iniciar un proceso judicial para buscar una solución. En muchos
            casos, la conciliación laboral permite dialogar entre las partes,
            revisar la liquidación, aclarar diferencias y alcanzar acuerdos con
            plena validez jurídica.
          </p>

          <p className={styles.heroText}>
            Este mecanismo puede utilizarse para resolver controversias
            relacionadas con cesantías, intereses a las cesantías, primas de
            servicios, vacaciones, indemnizaciones, liquidaciones finales y
            otros derechos laborales conciliables. En esta guía encontrarás
            cuándo conviene acudir a un centro de conciliación, qué documentos
            preparar y cuáles son los beneficios frente a un proceso judicial.
          </p>
        </div>

        {/* QUE SON LAS PRESTACIONES SOCIALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son las prestaciones sociales y por qué generan tantos
            conflictos laborales?
          </h2>

          <p className={styles.paragraph}>
            Las prestaciones sociales son derechos económicos reconocidos por la
            legislación laboral colombiana que buscan proteger al trabajador
            durante la relación laboral y al finalizarla. Su pago no constituye
            un beneficio opcional del empleador, sino una obligación legal cuyo
            incumplimiento puede generar reclamaciones administrativas o
            judiciales.
          </p>

          <p className={styles.paragraph}>
            Los conflictos aparecen cuando existen diferencias en la
            liquidación, errores en los cálculos, pagos incompletos, retrasos en
            las consignaciones o interpretaciones distintas sobre el contrato de
            trabajo. Antes de acudir a un juez, muchas de estas controversias
            pueden solucionarse mediante una audiencia de conciliación.
          </p>
        </div>

        {/* PRESTACIONES QUE PUEDEN SER OBJETO DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Prestaciones sociales que pueden reclamarse mediante conciliación
            laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cesantías</h3>
              <p>
                Valores acumulados que deben consignarse anualmente a favor del
                trabajador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Intereses a las cesantías</h3>
              <p>
                Pago adicional que corresponde al trabajador sobre el valor de
                las cesantías causadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prima de servicios</h3>
              <p>
                Prestación económica obligatoria que debe pagarse en los
                periodos establecidos por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Vacaciones</h3>
              <p>
                Compensaciones relacionadas con periodos de descanso no
                disfrutados o pendientes de pago.
              </p>
            </div>
          </div>
        </div>

        {/* PRESTACIONES QUE PUEDEN SER OBJETO DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué prestaciones sociales pueden incluirse en un acuerdo
            conciliatorio?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo del caso concreto, durante una audiencia de conciliación
            las partes pueden negociar el reconocimiento de uno o varios
            conceptos laborales, revisar la liquidación realizada por el
            empleador y acordar la forma en que se realizará el pago.
          </p>

          <ul className={styles.list}>
            <li>Cesantías.</li>
            <li>Intereses sobre las cesantías.</li>
            <li>Prima de servicios.</li>
            <li>Vacaciones pendientes.</li>
            <li>Salarios adeudados.</li>
            <li>Auxilios reconocidos en el contrato.</li>
            <li>Liquidación definitiva del contrato.</li>
            <li>Diferencias salariales.</li>
            <li>Horas extras.</li>
            <li>Recargos nocturnos.</li>
            <li>Dominicales y festivos.</li>
            <li>Acuerdos de pago.</li>
          </ul>
        </div>

        {/* CUANDO CONVIENE ACUDIR A CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene acudir a conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación resulta especialmente útil cuando existen
            desacuerdos sobre valores adeudados, errores en la liquidación o
            retrasos en el pago de prestaciones sociales.
          </p>

          <p className={styles.paragraph}>
            En lugar de iniciar inmediatamente una demanda laboral, las partes
            pueden buscar una solución consensuada mediante un procedimiento más
            rápido y flexible.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Muchos conflictos laborales relacionados con prestaciones sociales
              pueden resolverse mediante acuerdos de pago, reconocimientos
              parciales o conciliaciones integrales con plena validez jurídica.
            </p>
          </div>
        </div>

        {/* DOCUMENTOS QUE CONVIENE LLEVAR A UNA AUDIENCIA DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que conviene llevar a una audiencia de conciliación
            laboral
          </h2>

          <p className={styles.paragraph}>
            Entre mayor sea la información disponible, más sencillo será
            determinar si existen diferencias económicas y construir una
            propuesta de acuerdo entre trabajador y empleador.
          </p>

          <ul className={styles.list}>
            <li>Contrato de trabajo.</li>
            <li>Liquidación laboral.</li>
            <li>Desprendibles de nómina.</li>
            <li>Consignaciones de cesantías.</li>
            <li>Comprobantes de pago.</li>
            <li>Correos electrónicos.</li>
            <li>Mensajes relacionados con el conflicto.</li>
            <li>Certificaciones laborales.</li>
          </ul>
        </div>

        {/* BENEFICIOS DE LA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación laboral
          </h2>

          <ul className={styles.list}>
            <li>Reduce tiempos de resolución del conflicto.</li>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Permite acuerdos flexibles entre las partes.</li>
            <li>Disminuye costos legales y administrativos.</li>
            <li>Favorece el diálogo y la negociación.</li>
            <li>Tiene efectos jurídicos obligatorios.</li>
            <li>Puede incluir acuerdos de pago por cuotas.</li>
            <li>Brinda seguridad jurídica para ambas partes.</li>
          </ul>
        </div>

        {/* QUE SUCEDE SI SE ALCANZA UN ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si se alcanza un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando trabajador y empleador llegan a un acuerdo durante la
            conciliación, este queda plasmado en un acta con efectos legales.
          </p>

          <p className={styles.paragraph}>
            El documento establece las obligaciones de cada parte y puede
            ejecutarse judicialmente en caso de incumplimiento.
          </p>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo reclamar cesantías mediante conciliación?</h3>

              <p>
                Sí. Las cesantías pendientes son uno de los conceptos laborales
                que con frecuencia se resuelven mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La prima de servicios puede conciliarse?</h3>

              <p>
                Sí. Es posible llegar a acuerdos relacionados con primas
                pendientes o diferencias en su liquidación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si el empleador incumple?</h3>

              <p>
                El acuerdo conciliatorio puede exigirse legalmente ante las
                autoridades competentes.
              </p>
            </div>
          </div>
        </div>

        {/* ¿QUE VENTAJAS OFRECE LA CONCILIACION FRENTE A UNA DEMANDA LABORAL? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ventajas ofrece la conciliación frente a una demanda laboral?
          </h2>

          <p className={styles.paragraph}>
            La conciliación no reemplaza todos los procesos judiciales, pero sí
            permite resolver un alto número de conflictos sin esperar varios
            meses o incluso años para obtener una decisión judicial. Además, las
            partes mantienen el control sobre la negociación y pueden construir
            soluciones adaptadas a su situación.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Más rápida</h3>
              <p>
                Muchas controversias pueden solucionarse en una o pocas
                audiencias.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>
              <p>
                Reduce gastos asociados con procesos judiciales prolongados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos flexibles</h3>
              <p>
                Las partes pueden pactar cronogramas de pago y condiciones
                específicas según sus necesidades.
              </p>
            </div>
          </div>
        </div>

        {/* ERRORES FRECUENTES AL RECLAMAR PRESTACIONES SOCIALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al reclamar prestaciones sociales
          </h2>

          <ul className={styles.list}>
            <li>Esperar demasiado tiempo para reclamar.</li>
            <li>No conservar soportes de pago.</li>
            <li>Firmar documentos sin leer su contenido.</li>
            <li>No revisar la liquidación final.</li>
            <li>Asistir a la audiencia sin una propuesta clara.</li>
            <li>No buscar asesoría cuando existen diferencias importantes.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas reclamar prestaciones sociales mediante conciliación
            laboral?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre cesantías, intereses, primas de servicios,
            vacaciones, liquidaciones laborales, acuerdos de pago y demás
            prestaciones sociales. Analizamos tu caso y te acompañamos durante
            todo el proceso de conciliación para buscar una solución rápida,
            segura y con respaldo jurídico.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
