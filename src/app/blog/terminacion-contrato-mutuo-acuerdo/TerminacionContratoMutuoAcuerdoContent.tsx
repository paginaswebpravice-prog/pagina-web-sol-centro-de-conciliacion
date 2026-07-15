"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function TerminacionContratoMutuoAcuerdoContent() {
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
            Conciliación laboral • Terminación de contratos en Colombia
          </span>

          <h1 className={styles.title}>
            Terminación de contrato por mutuo acuerdo en Colombia: requisitos,
            derechos del trabajador y cómo formalizar el acuerdo
          </h1>

          <p className={styles.heroText}>
            La <strong>terminación de contrato por mutuo acuerdo</strong> es una
            de las formas legales mediante las cuales un empleador y un
            trabajador pueden dar por finalizada una relación laboral sin acudir
            a un despido o a una renuncia unilateral. Cuando ambas partes
            manifiestan libremente su voluntad, es posible construir un acuerdo
            que otorgue seguridad jurídica y reduzca la posibilidad de futuros
            conflictos.
          </p>

          <p className={styles.heroText}>
            Aunque este mecanismo parece sencillo, en la práctica es frecuente
            que surjan dudas sobre la liquidación, las prestaciones sociales,
            las indemnizaciones, la firma del acuerdo o la conveniencia de
            acudir a un centro de conciliación. Resolver estos aspectos desde el
            inicio permite que la terminación laboral sea transparente y
            beneficie tanto al trabajador como al empleador.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás cuándo procede la terminación por mutuo
            acuerdo, qué debe contener el documento, cuáles son los derechos de
            las partes y por qué la conciliación laboral se ha convertido en una
            herramienta útil para prevenir procesos judiciales posteriores.
          </p>
        </div>

        {/* QUE SIGNIFICA TERMINAR UN CONTRATO POR MUTUO ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la terminación de contrato por mutuo acuerdo y cuándo puede
            realizarse?
          </h2>

          <p className={styles.paragraph}>
            La terminación por mutuo acuerdo ocurre cuando trabajador y
            empleador manifiestan de forma libre, voluntaria y consciente su
            decisión de finalizar el contrato laboral. Ninguna de las partes
            impone la terminación, sino que ambas llegan a una solución
            consensuada respecto a la fecha de finalización y al cumplimiento de
            las obligaciones económicas pendientes.
          </p>

          <p className={styles.paragraph}>
            Esta modalidad puede utilizarse en contratos a término fijo,
            indefinido o por obra o labor, siempre que no exista presión, engaño
            o cualquier circunstancia que afecte el consentimiento de alguna de
            las partes.
          </p>

          <p className={styles.paragraph}>
            En muchas ocasiones la terminación por mutuo acuerdo permite
            preservar una buena relación laboral, facilitar la entrega del cargo
            y evitar procesos disciplinarios o reclamaciones posteriores.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo firmado libremente y correctamente documentado ofrece
              mayor tranquilidad jurídica tanto para el trabajador como para el
              empleador, especialmente cuando queda respaldado mediante un acta
              de conciliación.
            </p>
          </div>
        </div>

        {/* CUANDO ES RECOMENDABLE TERMINAR UN CONTRATO POR MUTUO ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable terminar un contrato por mutuo acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Existen diferentes situaciones en las que esta alternativa puede
            resultar conveniente para ambas partes. No se trata únicamente de
            finalizar una relación laboral, sino de hacerlo de manera organizada
            y minimizando riesgos legales.
          </p>

          <ul className={styles.list}>
            <li>Cierre o reorganización de la empresa.</li>

            <li>Cambio de proyectos laborales del trabajador.</li>

            <li>Acuerdos de retiro voluntario.</li>

            <li>Reestructuración empresarial.</li>

            <li>Disminución de conflictos laborales.</li>

            <li>Terminación anticipada de contratos.</li>

            <li>Acuerdos económicos entre las partes.</li>

            <li>Prevención de futuros litigios.</li>
          </ul>
        </div>

        {/* VENTAJAS DE LA TERMINACIÓN POR MUTUO ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de finalizar un contrato mediante mutuo acuerdo
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Evita procesos judiciales</h3>

              <p>
                Un acuerdo claro disminuye significativamente la posibilidad de
                demandas relacionadas con la terminación del contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor seguridad jurídica</h3>

              <p>
                Cuando el acuerdo queda adecuadamente documentado, ambas partes
                conocen con precisión sus derechos y obligaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Protege la relación laboral</h3>

              <p>
                Permite finalizar el vínculo de manera respetuosa, conservando
                una buena relación profesional entre trabajador y empleador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Flexibilidad</h3>

              <p>
                Las partes pueden acordar fechas de retiro, forma de pago,
                entrega del cargo y otros aspectos relevantes según las
                necesidades del caso.
              </p>
            </div>
          </div>
        </div>

        {/* DERECHOS DEL TRABAJADOR AL TERMINAR EL CONTRATO POR MUTUO ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Derechos del trabajador al terminar el contrato por mutuo acuerdo
          </h2>

          <p className={styles.paragraph}>
            La firma de un acuerdo no implica que el trabajador renuncie a los
            derechos laborales reconocidos por la legislación colombiana.
            Dependiendo de cada caso, continúan existiendo obligaciones
            económicas que deben cumplirse.
          </p>

          <ul className={styles.list}>
            <li>Pago de salarios pendientes.</li>

            <li>Vacaciones causadas.</li>

            <li>Cesantías.</li>

            <li>Intereses sobre cesantías.</li>

            <li>Prima de servicios.</li>

            <li>Certificación laboral.</li>

            <li>Liquidación definitiva.</li>
          </ul>

          <p className={styles.paragraph}>
            La forma de calcular estos valores dependerá del tipo de contrato,
            del tiempo laborado y de las condiciones particulares de cada
            relación laboral.
          </p>
        </div>

        {/* DERECHOS DEL EMPLEADOR AL TERMINAR EL CONTRATO POR MUTUO ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Derechos del trabajador al terminar el contrato por mutuo acuerdo
          </h2>

          <p className={styles.paragraph}>
            La firma de un acuerdo no implica que el trabajador renuncie a los
            derechos laborales reconocidos por la legislación colombiana.
            Dependiendo de cada caso, continúan existiendo obligaciones
            económicas que deben cumplirse.
          </p>

          <ul className={styles.list}>
            <li>Pago de salarios pendientes.</li>

            <li>Vacaciones causadas.</li>

            <li>Cesantías.</li>

            <li>Intereses sobre cesantías.</li>

            <li>Prima de servicios.</li>

            <li>Certificación laboral.</li>

            <li>Liquidación definitiva.</li>
          </ul>

          <p className={styles.paragraph}>
            La forma de calcular estos valores dependerá del tipo de contrato,
            del tiempo laborado y de las condiciones particulares de cada
            relación laboral.
          </p>
        </div>

        {/* PORQUÉ FORMALIZAR EL ACUERDO MEDIANTE CONCILIACIÓN? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué formalizar el acuerdo mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Aunque las partes pueden elaborar un documento privado, acudir a un
            centro de conciliación ofrece mayores garantías respecto a la
            autenticidad del consentimiento y a la claridad de los compromisos
            adquiridos.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia, el conciliador verifica que ninguna de las
            partes esté siendo presionada para aceptar el acuerdo y ayuda a que
            los términos queden redactados de manera clara, evitando
            interpretaciones ambiguas.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Una conciliación correctamente realizada suele convertirse en una
              de las mejores herramientas para prevenir reclamaciones laborales
              futuras.
            </p>
          </div>
        </div>

        {/* ERRORES FRECUENTES AL FIRMAR UN MUTUO ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al firmar un mutuo acuerdo
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No leer el documento</h3>

              <p>
                Firmar sin revisar cuidadosamente el contenido puede generar
                conflictos posteriores.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No calcular la liquidación</h3>

              <p>
                Es recomendable verificar previamente todos los valores que
                deben ser cancelados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No conservar soportes</h3>

              <p>
                Guardar copias del acuerdo, desprendibles y comprobantes
                facilita la resolución de cualquier eventualidad futura.
              </p>
            </div>
          </div>
        </div>

        {/* QUÉ DEBE INCLUIR EL ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué debe incluir el acuerdo?</h2>

          <ul className={styles.list}>
            <li>Identificación del empleador y trabajador.</li>
            <li>Manifestación expresa del mutuo consentimiento.</li>
            <li>Fecha de terminación del contrato.</li>
            <li>Liquidación de prestaciones sociales.</li>
            <li>Pago de salarios pendientes.</li>
            <li>Firma de ambas partes.</li>
          </ul>

          <p className={styles.paragraph}>
            Es recomendable que el acuerdo quede formalizado por escrito para
            brindar seguridad jurídica y claridad frente a las obligaciones de
            cada parte.
          </p>
        </div>

        {/* CONCILIACIÓN PARA FORMALIZAR LA TERMINACIÓN LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación para formalizar la terminación laboral
          </h2>

          <p className={styles.paragraph}>
            Aunque la ley permite realizar acuerdos privados, muchas empresas y
            trabajadores optan por acudir a un centro de conciliación para dejar
            constancia formal del acuerdo alcanzado.
          </p>

          <p className={styles.paragraph}>
            La conciliación permite verificar que el consentimiento sea libre,
            informado y voluntario, fortaleciendo la validez del acuerdo.
          </p>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La empresa puede obligar al trabajador a firmar?</h3>

              <p>
                No. El acuerdo debe surgir de la voluntad libre de ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se pagan prestaciones sociales?</h3>

              <p>
                Sí. Deben liquidarse y pagarse conforme a la legislación laboral
                colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación brinda más seguridad?</h3>

              <p>
                Sí. Ayuda a formalizar adecuadamente el acuerdo y prevenir
                futuras controversias.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas formalizar una terminación laboral por mutuo acuerdo?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, acuerdos entre
            empleadores y trabajadores y formalización de terminaciones
            contractuales en Colombia.
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
