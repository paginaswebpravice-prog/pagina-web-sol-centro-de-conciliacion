"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function InasistenciaConciliacionContent() {
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
              Consecuencias legales de no asistir a una conciliación
            </span>

            <h1 className={styles.title}>
              ¿Qué pasa si una persona no asiste a una audiencia de conciliación
              en Colombia? Consecuencias, constancia y qué hacer
            </h1>

            <p className={styles.heroText}>
              Si recibiste una citación para asistir a una audiencia de
              conciliación y tienes dudas sobre qué ocurre si no compareces, es
              importante conocer las consecuencias legales antes de tomar una
              decisión. Aunque la inasistencia no significa automáticamente
              perder un proceso o aceptar las pretensiones de la otra parte, sí
              puede producir efectos jurídicos relevantes según el tipo de
              conflicto y la legislación aplicable.
            </p>

            <p className={styles.heroText}>
              En Colombia, la conciliación es uno de los principales mecanismos
              alternativos para resolver conflictos sin acudir inmediatamente a
              un juez. Por ello, cuando una de las partes no asiste, el
              conciliador debe dejar constancia de lo ocurrido y continuar el
              procedimiento conforme a la ley.
            </p>

            <p className={styles.heroText}>
              En esta guía encontrarás qué sucede cuando una persona no asiste a
              una conciliación, cuándo se expide la constancia de inasistencia,
              si después puede presentarse una demanda, cuándo es posible
              reprogramar la audiencia y cuáles son las recomendaciones para
              proteger tus derechos.
            </p>
          </div>

          {/* QUE OCURRE CUANDO UNA PERSONA NO COMPARECE */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ocurre cuando una persona no comparece?
            </h2>

            <p className={styles.paragraph}>
              Cuando una de las partes no asiste a la audiencia de conciliación,
              el conciliador deja constancia de lo sucedido y verifica que la
              citación haya sido realizada correctamente.
            </p>

            <p className={styles.paragraph}>
              Dependiendo de las circunstancias, el trámite puede finalizar o
              continuar conforme a las reglas aplicables al procedimiento.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La ausencia de una de las partes impide que se lleve a cabo la
                negociación y dificulta la posibilidad de alcanzar acuerdos
                voluntarios.
              </p>
            </div>
          </div>

          {/* LA CONCILIACION SE CANCELA SI UNA PERSONA NO ASISTE */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿La conciliación se cancela si una persona no asiste?
            </h2>

            <p className={styles.paragraph}>
              No necesariamente. La audiencia puede desarrollarse hasta donde
              sea posible para dejar constancia de la inasistencia de la parte
              citada. El conciliador verificará previamente que la citación haya
              sido enviada correctamente y que existan las condiciones para
              continuar con el trámite.
            </p>

            <p className={styles.paragraph}>
              Cuando se confirma que una de las partes fue debidamente citada y
              aun así decide no asistir sin justificación, normalmente se expide
              la constancia de inasistencia correspondiente, documento que puede
              tener importancia en actuaciones posteriores.
            </p>

            <div className={styles.highlightBox}>
              <p>
                No asistir a la conciliación no significa que el conflicto
                desaparezca. En la mayoría de los casos simplemente se pierde la
                oportunidad de llegar a un acuerdo rápido y evitar un proceso
                judicial.
              </p>
            </div>
          </div>

          {/* CONSTANCIA DE INASISTENCIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la constancia de inasistencia?
            </h2>

            <p className={styles.paragraph}>
              Cuando una persona no comparece a la audiencia, el centro de
              conciliación puede expedir una constancia donde se registra la
              ausencia de la parte citada.
            </p>

            <p className={styles.paragraph}>
              Este documento suele ser importante porque acredita que existió un
              intento formal de conciliación entre las partes.
            </p>

            <p className={styles.paragraph}>
              En muchos asuntos civiles, comerciales y familiares, esta
              constancia puede ser utilizada posteriormente dentro de otros
              procedimientos legales.
            </p>
          </div>

          {/* MOTIVOS VÁLIDOS POR LOS QUE UNA PERSONA PUEDA NO ASISTIR */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Motivos válidos por los que una persona podría no asistir
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Problemas de salud</h3>

                <p>
                  Enfermedades o incapacidades médicas pueden justificar la
                  ausencia, siempre que exista el soporte correspondiente.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Errores en la citación</h3>

                <p>
                  Si la persona nunca fue notificada correctamente, la ausencia
                  puede obedecer a un problema en la comunicación del proceso.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Fuerza mayor</h3>

                <p>
                  Accidentes, emergencias familiares u otras circunstancias
                  excepcionales pueden impedir la asistencia a la audiencia.
                </p>
              </div>
            </div>
          </div>

          {/* SE PUEDE DEMANDAR SI LA OTRA PARTE NO ASISTE */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Se puede demandar si la otra parte no asiste?
            </h2>

            <p className={styles.paragraph}>
              En numerosos casos sí. Cuando la conciliación constituye un
              requisito previo, la constancia expedida por el centro puede
              acreditar que se intentó resolver el conflicto de manera amistosa.
            </p>

            <p className={styles.paragraph}>
              Esto permite que la persona interesada continúe con las acciones
              legales correspondientes según la naturaleza del conflicto.
            </p>
          </div>

          {/* RAZONES FRECUENTES DE INASISTENCIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Razones frecuentes de inasistencia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Desconocimiento</h3>

                <p>
                  Algunas personas no reciben oportunamente la citación o no
                  conocen la importancia de la audiencia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Falta de interés</h3>

                <p>
                  Una de las partes puede no tener intención de negociar o
                  alcanzar acuerdos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Imposibilidad de asistir</h3>

                <p>
                  Situaciones personales, laborales o de salud pueden impedir la
                  comparecencia.
                </p>
              </div>
            </div>
          </div>

          {/* ¿QUE PASA SI QUIEN NO ASISTE ES EL SOLICITANTE DE LA CONCILIACIÓN? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pasa si quien no asiste es el solicitante de la conciliación?
            </h2>

            <p className={styles.paragraph}>
              Cuando quien promovió la conciliación no comparece a la audiencia,
              el procedimiento también puede finalizar dejando constancia de la
              ausencia. Dependiendo del caso, será necesario iniciar nuevamente
              el trámite si se desea intentar otra conciliación.
            </p>

            <p className={styles.paragraph}>
              Por esta razón es recomendable presentar la solicitud únicamente
              cuando se tenga la intención real de asistir a la audiencia y
              buscar una solución al conflicto.
            </p>
          </div>

          {/* CONSECUENCIAS DE NO ASISTIR A LA CONCILIACIÓN */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Consecuencias de no asistir a la conciliación
            </h2>

            <ul className={styles.list}>
              <li>Se pierde la oportunidad de negociar directamente.</li>
              <li>Puede generarse una constancia de inasistencia.</li>
              <li>El conflicto continúa sin solución inmediata.</li>
              <li>
                La otra parte puede continuar con las acciones legales
                correspondientes.
              </li>
              <li>
                Se incrementan las posibilidades de llegar a un proceso
                judicial.
              </li>
            </ul>
          </div>

          {/* ¿PUEDE REPROGRAMARSE LA AUDIENCIA? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Puede reprogramarse la audiencia?
            </h2>

            <p className={styles.paragraph}>
              Dependiendo de la situación específica, la audiencia podría ser
              reprogramada cuando exista una justificación válida y se cumplan
              las condiciones establecidas para ello.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, esto no ocurre automáticamente en todos los casos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Importancia de asistir a la audiencia
            </h2>

            <p className={styles.paragraph}>
              La conciliación representa una oportunidad para resolver el
              conflicto de manera rápida, económica y con efectos jurídicos.
            </p>

            <p className={styles.paragraph}>
              Asistir permite exponer argumentos, escuchar propuestas y explorar
              alternativas de solución que podrían evitar procesos judiciales
              más largos y costosos.
            </p>
          </div>

          {/* BENEFICIOS DE ASISTIR A LA CONCILIACIÓN */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de asistir a una audiencia de conciliación
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Evitar demandas</h3>

                <p>
                  Muchas controversias terminan mediante acuerdos sin necesidad
                  de acudir a un proceso judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Reducir costos</h3>

                <p>
                  Resolver el conflicto mediante conciliación suele ser mucho
                  más rápido y económico que un litigio.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conservar relaciones</h3>

                <p>
                  La conciliación facilita soluciones dialogadas que permiten
                  mantener una mejor relación entre las partes.
                </p>
              </div>
            </div>
          </div>

          {/* ERRORES FRECUENTES CUANDO UNA PERSONA RECIBE UNA CITACIÓN PARA CONCILIAR */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores frecuentes cuando una persona recibe una citación para
              conciliar
            </h2>

            <ul className={styles.list}>
              <li>Pensar que la citación puede ignorarse sin consecuencias.</li>

              <li>
                Creer que asistir significa aceptar automáticamente las
                pretensiones.
              </li>

              <li>No consultar previamente con un abogado o conciliador.</li>

              <li>No revisar la fecha, hora y modalidad de la audiencia.</li>

              <li>Asistir sin documentos que respalden su posición.</li>

              <li>
                No informar oportunamente cuando existe una causa que impide
                asistir.
              </li>

              <li>
                Esperar hasta el último momento para justificar la ausencia.
              </li>
            </ul>
          </div>

          {/* RECOMENDACIONES ANTES DE DECIDIR NO ASISTIR A UNA CONCILIACIÓN */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Recomendaciones antes de decidir no asistir a una conciliación
            </h2>

            <p className={styles.paragraph}>
              Antes de dejar pasar la fecha de la audiencia conviene analizar el
              caso con detenimiento. En muchas ocasiones asistir permite aclarar
              malentendidos, conocer la posición de la otra parte e incluso
              lograr un acuerdo que evite meses o años de un proceso judicial.
            </p>

            <p className={styles.paragraph}>
              Si existe un motivo serio que impida asistir, lo más recomendable
              es comunicarlo oportunamente al centro de conciliación para
              conocer si es posible reprogramar la diligencia o adoptar otra
              alternativa prevista por la normativa aplicable.
            </p>
          </div>

          {/* PREGUNTAS FRECUENTES SOBRE LA INASISTENCIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre la inasistencia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Puedo demandar después?</h3>

                <p>
                  En muchos casos sí, especialmente cuando existe constancia del
                  intento conciliatorio.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Pierdo automáticamente el caso?</h3>

                <p>
                  No. La inasistencia no implica automáticamente perder derechos
                  dentro del conflicto.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puedo justificar mi ausencia?</h3>

                <p>
                  Dependiendo de las circunstancias, es posible informar las
                  razones de la inasistencia ante el centro de conciliación.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Recibiste una citación a una audiencia de conciliación?
            </h3>

            <p className={styles.ctaText}>
              Antes de decidir si asistir o no, recibe orientación jurídica
              sobre las consecuencias legales de la inasistencia, la constancia
              de no comparecencia, la posibilidad de presentar una demanda y las
              alternativas para proteger tus derechos. Te ayudamos en Bogotá y
              en cualquier lugar de Colombia.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Hablar con un conciliador
            </a>
          </div>
        </motion.article>
      </section>
    </>
  );
}
