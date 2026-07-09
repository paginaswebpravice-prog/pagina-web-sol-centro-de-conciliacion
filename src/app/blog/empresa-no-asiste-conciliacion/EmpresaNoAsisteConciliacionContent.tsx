"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function EmpresaNoAsisteConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            ¿Qué pasa si la empresa no asiste a la conciliación laboral en
            Colombia? Consecuencias, constancia de inasistencia y qué puede
            hacer el trabajador
          </h1>

          <p className={styles.heroText}>
            En los conflictos laborales es común que un trabajador solicite una
            audiencia de conciliación para intentar resolver diferencias
            relacionadas con salarios, liquidaciones, despidos o prestaciones
            sociales. Sin embargo, una situación frecuente ocurre cuando el
            empleador o la empresa no asiste a la audiencia programada.
          </p>

          <p className={styles.heroText}>
            La inasistencia del empleador puede tener consecuencias importantes,
            ya que impide alcanzar un acuerdo conciliatorio y puede abrir la
            puerta a otras actuaciones legales.
          </p>

          <p className={styles.heroText}>
            Cuando el empleador no comparece a la audiencia, muchas personas
            creen que automáticamente el trabajador gana el caso o que la
            empresa recibe una sanción inmediata. Sin embargo, la realidad
            jurídica es diferente. La ausencia del empleador produce
            determinados efectos dentro del procedimiento conciliatorio, pero no
            implica por sí sola que el conflicto quede resuelto.
          </p>

          <p className={styles.heroText}>
            También es frecuente que surjan preguntas como:{" "}
            <strong>¿la empresa puede justificar la inasistencia?</strong>,{" "}
            <strong>¿es posible programar una nueva audiencia?</strong>,{" "}
            <strong>¿qué documento entrega el conciliador?</strong>,{" "}
            <strong>
              ¿el trabajador puede presentar una demanda posteriormente?
            </strong>{" "}
            o <strong>¿qué ocurre si quien falta es el trabajador?</strong>.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrará una explicación clara y actualizada sobre
            cada una de estas situaciones, los efectos de la inasistencia del
            empleador y las recomendaciones más importantes para proteger
            adecuadamente sus derechos durante un procedimiento de conciliación
            laboral en Colombia.
          </p>
        </div>

        {/* QUE ES UNA INASISTENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa cuando una empresa o empleador no asiste a una audiencia
            de conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            Si la empresa no asiste a la audiencia de conciliación, el
            conciliador dejará constancia de la inasistencia en el acta o
            documento correspondiente.
          </p>

          <p className={styles.paragraph}>
            Debido a la ausencia de una de las partes, no será posible construir
            un acuerdo conciliatorio que ponga fin al conflicto laboral.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La constancia de inasistencia puede convertirse en un documento
              relevante para futuras actuaciones legales relacionadas con el
              conflicto laboral.
            </p>
          </div>
        </div>

        {/* PUEDE LA EMPRESA JUSTIFICAR SU INASISTENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Puede la empresa justificar su inasistencia a la conciliación
            laboral?
          </h2>

          <p className={styles.paragraph}>
            Sí. Existen situaciones excepcionales en las que la empresa puede
            justificar su inasistencia, como eventos de fuerza mayor, problemas
            de salud de sus representantes o circunstancias que impidan su
            comparecencia.
          </p>

          <p className={styles.paragraph}>
            Dependiendo de la situación, podría solicitarse una nueva fecha para
            la audiencia de conciliación.
          </p>
        </div>

        {/* QUE CONSECUENCIAS TIENE PARA EL TRABAJADOR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué consecuencias tiene para el trabajador que la empresa no asista
            a la conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Constancia formal</h3>
              <p>
                Se registra oficialmente que la empresa fue citada y no asistió
                a la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Continuar reclamaciones</h3>
              <p>
                El trabajador podrá evaluar otras alternativas legales para la
                defensa de sus derechos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Intento de acuerdo demostrado</h3>
              <p>
                Queda evidencia de que se intentó resolver el conflicto de forma
                amistosa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor claridad jurídica</h3>
              <p>
                Se define que no fue posible alcanzar una solución negociada por
                falta de comparecencia.
              </p>
            </div>
          </div>
        </div>

        {/* PUEDE REALIZARSE LA CONCILIACION SIN EL EMPLEADOR? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Puede realizarse la conciliación sin el empleador?
          </h2>

          <p className={styles.paragraph}>
            No. La conciliación requiere la participación de ambas partes para
            construir un acuerdo válido y voluntario.
          </p>

          <p className={styles.paragraph}>
            Si una de las partes no asiste, la audiencia no puede producir un
            acuerdo conciliatorio definitivo.
          </p>
        </div>

        {/* POR QUE ES RECOMENDABLE QUE TANTO TRABAJADOR COMO EMPLEADOR ASISTAN A LA CONCILIACION? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué es recomendable que tanto trabajador como empleador asistan
            a la conciliación laboral?
          </h2>

          <ul className={styles.list}>
            <li>Permite resolver conflictos de manera rápida.</li>
            <li>Reduce costos para empleador y trabajador.</li>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Facilita acuerdos flexibles y voluntarios.</li>
            <li>Genera seguridad jurídica para ambas partes.</li>
            <li>Favorece soluciones negociadas y efectivas.</li>
          </ul>
        </div>

        {/* POR QUE ALGUNAS EMPRESAS NO ASISTEN A UNA AUDIENCIA DE CONCILIACION? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué algunas empresas no asisten a una audiencia de conciliación
            laboral?
          </h2>

          <p className={styles.paragraph}>
            No todas las inasistencias obedecen a la misma razón. En algunos
            casos la empresa decide no asistir porque considera que no existe
            fundamento para la reclamación presentada por el trabajador. En
            otros, la ausencia puede deberse a errores en la notificación,
            problemas de agenda, cambios de representante legal o situaciones
            excepcionales que impidieron la comparecencia.
          </p>

          <p className={styles.paragraph}>
            También existen casos en los que el empleador prefiere afrontar
            posteriormente el conflicto mediante otras vías en lugar de
            participar en una negociación conciliatoria. Por ello, cada
            situación debe analizarse individualmente y no es posible afirmar
            que toda inasistencia implique mala fe o falta de interés en
            resolver el conflicto.
          </p>
        </div>

        {/* QUE DOCUMENTO ENTREGA EL CONCILIADOR CUANDO LA EMPRESA NO ASISTE? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documento entrega el conciliador cuando la empresa no asiste?
          </h2>

          <p className={styles.paragraph}>
            Cuando el empleador no comparece a la audiencia, el conciliador
            normalmente deja constancia de lo ocurrido mediante el documento
            correspondiente, registrando la fecha de la audiencia, las personas
            asistentes y la inasistencia de la empresa cuando corresponda.
          </p>

          <p className={styles.paragraph}>
            Este documento permite acreditar que la audiencia fue programada y
            que no fue posible desarrollar una conciliación por ausencia de una
            de las partes, conservando así evidencia documental del
            procedimiento adelantado.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Conservar esta constancia puede resultar útil para mantener
              organizado el expediente relacionado con el conflicto laboral y
              acreditar posteriormente cómo concluyó la audiencia de
              conciliación.
            </p>
          </div>
        </div>

        {/* QUE DEBE HACER EL TRABAJADOR SI LA EMPRESA NO ASISTIO A LA CONCILIACION? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué debe hacer el trabajador si la empresa no asistió a la
            conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Solicitar la constancia</h3>

              <p>
                Conserve el documento expedido por el conciliador y verifique
                que toda la información registrada sea correcta.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Guardar todas las pruebas</h3>

              <p>
                Organice contratos, desprendibles de nómina, correos
                electrónicos, comunicaciones y cualquier otro documento
                relacionado con el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Analizar las alternativas disponibles</h3>

              <p>
                Dependiendo del caso concreto, podrá evaluar junto con un
                profesional cuáles son las actuaciones más convenientes para la
                protección de sus derechos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No perder los soportes</h3>

              <p>
                Mantenga una copia física y digital de toda la documentación
                relacionada con la audiencia.
              </p>
            </div>
          </div>
        </div>

        {/* ERRORES FRECUENTES CUANDO LA EMPRESA NO ASISTE A LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes cuando la empresa no asiste a la conciliación
          </h2>

          <ul className={styles.list}>
            <li>Creer que el trabajador gana automáticamente el conflicto.</li>

            <li>
              Pensar que la empresa recibe una sanción inmediata por no asistir.
            </li>

            <li>
              No solicitar copia de la constancia expedida por el conciliador.
            </li>

            <li>Perder los documentos relacionados con la relación laboral.</li>

            <li>
              Esperar demasiado tiempo antes de recibir orientación jurídica.
            </li>

            <li>
              Confundir la inasistencia con una aceptación de las pretensiones
              del trabajador.
            </li>

            <li>
              No verificar que la información contenida en la constancia sea
              correcta.
            </li>
          </ul>
        </div>

        {/* RECOMENDACIONES PARA LAS EMPRESAS ANTES DE UNA AUDIENCIA DE CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Recomendaciones para las empresas antes de una audiencia de
            conciliación laboral
          </h2>

          <p className={styles.paragraph}>
            La conciliación constituye una oportunidad para dialogar y explorar
            soluciones que permitan resolver un conflicto laboral de manera más
            rápida y menos costosa que un proceso judicial. Por ello, resulta
            recomendable que las empresas preparen previamente la documentación
            relacionada con el caso, designen un representante con capacidad
            para negociar y analicen con anticipación las posibles alternativas
            de acuerdo.
          </p>

          <p className={styles.paragraph}>
            Incluso cuando no sea posible alcanzar un acuerdo definitivo, la
            participación activa en la audiencia demuestra disposición al
            diálogo y permite aclarar aspectos relevantes del conflicto que
            podrían facilitar futuras negociaciones.
          </p>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la inasistencia de la empresa a una
            conciliación laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La empresa está obligada a asistir a la conciliación?</h3>

              <p>
                Aunque la conciliación busca que ambas partes participen para
                intentar resolver el conflicto mediante el diálogo, la
                comparecencia dependerá de las circunstancias de cada caso. Lo
                más recomendable es asistir para exponer la posición de la
                empresa y explorar una solución negociada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si el empleador no se presenta a la audiencia?</h3>

              <p>
                El conciliador dejará constancia de la inasistencia del
                empleador y no será posible celebrar un acuerdo conciliatorio
                durante esa audiencia por falta de participación de una de las
                partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La empresa puede justificar su ausencia?</h3>

              <p>
                Sí. Dependiendo de las circunstancias, el empleador puede
                explicar los motivos de su inasistencia y, cuando sea
                procedente, solicitar una nueva programación de la audiencia de
                conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación puede realizarse sin la empresa?</h3>

              <p>
                No. Para que exista un acuerdo conciliatorio es indispensable
                que ambas partes participen en la audiencia y manifiesten
                libremente su voluntad de negociar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La empresa recibe una sanción por no asistir?</h3>

              <p>
                La simple inasistencia no significa automáticamente la
                imposición de una sanción. Sus efectos dependerán de las
                circunstancias particulares del caso y de la normativa
                aplicable.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué documento entrega el conciliador?</h3>

              <p>
                Generalmente se expide una constancia o acta donde queda
                registrada la inasistencia de la empresa y el resultado de la
                audiencia de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede programarse una nueva audiencia?</h3>

              <p>
                Sí. Dependiendo de la voluntad de las partes y de las
                circunstancias que originaron la inasistencia, podría fijarse
                una nueva fecha para intentar nuevamente una conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué debe hacer el trabajador después de la audiencia?</h3>

              <p>
                Es recomendable conservar la constancia expedida por el
                conciliador, organizar todos los documentos relacionados con el
                conflicto laboral y evaluar las alternativas disponibles de
                acuerdo con las particularidades del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La empresa puede enviar un representante?</h3>

              <p>
                Sí. Cuando corresponda, el empleador podrá comparecer por medio
                de un representante o apoderado con las facultades necesarias
                para intervenir en la audiencia y participar en una eventual
                negociación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La inasistencia significa que el trabajador ganó el conflicto?
              </h3>

              <p>
                No. La ausencia del empleador no resuelve automáticamente el
                conflicto laboral. Simplemente impide que durante esa audiencia
                pueda alcanzarse un acuerdo conciliatorio entre las partes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto laboral pendiente?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación te orientamos sobre audiencias
            laborales, acuerdos entre empleadores y trabajadores y mecanismos de
            solución de conflictos en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
