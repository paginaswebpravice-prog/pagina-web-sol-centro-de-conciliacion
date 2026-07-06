"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ComoSolicitarConciliacionColombiaContent() {
  return (
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
            Trámite de conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            Cómo solicitar una conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            Solicitar una conciliación en Colombia es uno de los mecanismos más
            utilizados para resolver conflictos de manera rápida, voluntaria y
            con plenos efectos legales, evitando en muchos casos acudir
            directamente a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Este procedimiento puede utilizarse para asuntos civiles,
            comerciales, familiares, de propiedad horizontal, arrendamientos,
            cobro de deudas y otros conflictos que la ley permite conciliar.
          </p>

          <p className={styles.heroText}>
            La solicitud puede presentarse ante un centro de conciliación
            autorizado, una notaría o un consultorio jurídico, dependiendo del
            tipo de conflicto y de la entidad competente.
          </p>

          <p className={styles.heroText}>
            En esta guía conocerás paso a paso cómo solicitar una conciliación
            en Colombia, cuáles son los requisitos, qué documentos debes
            presentar, cuánto puede tardar el trámite y qué sucede después de
            radicar la solicitud.
          </p>
        </div>

        {/* DONDE SOLICITAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Dónde se solicita la conciliación?
          </h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías habilitadas.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas con función conciliatoria.</li>
          </ul>

          <p className={styles.paragraph}>
            Antes de presentar la solicitud es recomendable verificar que el
            centro de conciliación esté legalmente autorizado para conocer el
            asunto. La elección de la entidad dependerá del tipo de conflicto,
            del lugar donde ocurrió y de las reglas aplicables a cada caso.
          </p>

          <p className={styles.paragraph}>
            Actualmente muchas entidades también permiten iniciar el trámite de
            manera virtual, facilitando la participación de personas que viven
            en otras ciudades o incluso fuera de Colombia.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Elegir correctamente el centro de conciliación desde el inicio
              ayuda a evitar retrasos y permite que el trámite avance con mayor
              agilidad.
            </p>
          </div>
        </div>

        {/* PASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Pasos para solicitar una conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Radicar solicitud</h3>
              <p>
                Presentar la solicitud de conciliación ante una entidad
                autorizada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Adjuntar documentos</h3>
              <p>Incluir soportes del conflicto y datos de las partes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Citación</h3>
              <p>Se notifica a la otra parte para asistir a la audiencia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Audiencia</h3>
              <p>Se desarrolla la conciliación con un conciliador neutral.</p>
            </div>
          </div>

          <p className={styles.paragraph}>
            Aunque el procedimiento puede variar ligeramente entre una entidad y
            otra, normalmente todas las solicitudes siguen las mismas etapas.
            Una vez radicada la solicitud, el centro revisa la información
            suministrada, programa la audiencia y realiza la citación a la otra
            parte.
          </p>

          <p className={styles.paragraph}>
            Si ambas personas asisten con disposición para dialogar, existe una
            alta probabilidad de alcanzar un acuerdo que permita solucionar el
            conflicto sin necesidad de iniciar un proceso judicial.
          </p>
        </div>

        {/* QUE SE NECESITA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Requisitos básicos</h2>

          <ul className={styles.list}>
            <li>Documento de identidad.</li>
            <li>Datos de la otra parte.</li>
            <li>Descripción clara del conflicto.</li>
            <li>Soportes o pruebas (si existen).</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En la mayoría de los casos no se requiere abogado para iniciar el
              trámite de conciliación.
            </p>
          </div>

          <p className={styles.paragraph}>
            Dependiendo del caso también pueden solicitarse contratos, facturas,
            comprobantes de pago, correos electrónicos, conversaciones,
            fotografías, certificaciones u otros documentos que permitan
            comprender el origen del conflicto.
          </p>

          <p className={styles.paragraph}>
            Presentar información completa desde el inicio facilita la labor del
            conciliador y contribuye a que las partes puedan negociar sobre
            bases claras y objetivas.
          </p>
        </div>

        {/* DURACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cuánto tarda el proceso?</h2>

          <p className={styles.paragraph}>
            La conciliación en Colombia puede resolverse en pocos días o incluso
            en una sola audiencia si las partes llegan a un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Depende del tipo de conflicto y la disponibilidad de las partes.
          </p>
        </div>

        {/* POSTERIORMENTE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede después de presentar la solicitud?
          </h2>

          <p className={styles.paragraph}>
            Una vez radicada la solicitud, el centro de conciliación verifica
            que el asunto sea conciliable y revisa que la información
            suministrada esté completa.
          </p>

          <p className={styles.paragraph}>
            Posteriormente se asigna un conciliador y se programa la audiencia,
            enviando la correspondiente citación a la otra parte con la fecha,
            hora y modalidad en que se desarrollará el procedimiento.
          </p>

          <p className={styles.paragraph}>
            Durante ese tiempo cualquiera de las partes puede complementar la
            documentación inicialmente presentada para facilitar el desarrollo
            de la audiencia.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se llega a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias terminan con un acuerdo. Cuando las partes
            no logran conciliar, el conciliador deja constancia del resultado
            conforme a la normativa aplicable.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del asunto, esa constancia puede permitir iniciar
            posteriormente un proceso judicial o acudir a otros mecanismos para
            proteger los derechos de quien presentó la solicitud.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La falta de acuerdo no significa perder el caso; simplemente
              indica que la controversia deberá resolverse por otra vía legal.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia de la conciliación</h2>

          <p className={styles.paragraph}>
            La conciliación constituye uno de los principales mecanismos
            alternativos de solución de conflictos en Colombia porque permite
            que las personas encuentren soluciones negociadas sin necesidad de
            acudir inmediatamente a un juez.
          </p>

          <p className={styles.paragraph}>
            Además de reducir tiempos y costos, promueve el diálogo entre las
            partes, disminuye la congestión judicial y facilita acuerdos
            adaptados a las necesidades específicas de cada conflicto.
          </p>

          <p className={styles.paragraph}>
            Cuando el proceso concluye exitosamente, el acta de conciliación
            tiene importantes efectos jurídicos y brinda seguridad para el
            cumplimiento de los compromisos asumidos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos para los que puedes solicitar una conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cobro de deudas</h3>

              <p>
                Recuperación de préstamos, obligaciones económicas y acuerdos de
                pago.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>

              <p>
                Incumplimientos del contrato, cánones pendientes y entrega del
                inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Propiedad horizontal</h3>

              <p>
                Cuotas de administración, convivencia y obligaciones de
                copropietarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos civiles y comerciales</h3>

              <p>
                Contratos, incumplimientos, compraventas, prestación de
                servicios y obligaciones entre particulares.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo solicitarla virtualmente?</h3>
              <p>Sí, en muchos centros ya existe conciliación virtual.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio asistir?</h3>
              <p>
                Sí, si eres citado a audiencia debes asistir o justificar
                ausencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, el acta tiene efectos legales en Colombia.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas solicitar una conciliación?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a iniciar tu proceso de conciliación en Colombia de
            forma rápida y segura.
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
