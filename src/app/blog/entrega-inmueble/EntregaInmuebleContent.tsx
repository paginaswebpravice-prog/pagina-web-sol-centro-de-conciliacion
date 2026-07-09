"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function EntregaInmuebleContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>Restitución de Inmuebles</span>

          <h1 className={styles.title}>
            Entrega de inmueble por conciliación en Colombia: cómo devolver una
            vivienda o local sin llegar a un proceso judicial
          </h1>

          <p className={styles.heroText}>
            La entrega de un inmueble por conciliación es una alternativa
            jurídica que permite al arrendador y al arrendatario resolver de
            manera voluntaria la devolución de una vivienda, apartamento, casa,
            oficina o local comercial, evitando en muchos casos un proceso
            judicial de restitución del inmueble arrendado.
          </p>

          <p className={styles.heroText}>
            Durante la audiencia ambas partes pueden acordar la fecha exacta de
            entrega, el estado en el que será recibido el inmueble, el pago de
            cánones de arrendamiento pendientes, servicios públicos,
            reparaciones, depósito, inventarios y cualquier otra obligación
            derivada del contrato.
          </p>

          <p className={styles.heroText}>
            Cuando existe disposición para dialogar, la conciliación suele
            convertirse en una solución más rápida, económica y flexible que un
            litigio judicial, brindando seguridad jurídica para propietario e
            inquilino mediante un acta con plenos efectos legales.
          </p>

          <p className={styles.heroText}>
            En Colombia este mecanismo es utilizado tanto para inmuebles
            destinados a vivienda como para establecimientos comerciales,
            oficinas, bodegas y demás bienes entregados en arrendamiento.
          </p>
        </div>

        {/* QUE ES LA ENTREGA DE INMUEBLE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la entrega de inmueble mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Es un procedimiento mediante el cual las partes involucradas en un
            contrato de arrendamiento llegan a un acuerdo voluntario sobre la
            devolución del inmueble.
          </p>

          <p className={styles.paragraph}>
            El acuerdo puede incluir aspectos relacionados con la fecha de
            entrega, el estado del inmueble, obligaciones económicas pendientes
            y cualquier otro asunto derivado de la relación contractual.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite evitar procesos de restitución de inmueble
              más largos y costosos, promoviendo soluciones rápidas y seguras
              para ambas partes.
            </p>
          </div>
        </div>

        {/* CUANDO CONVIENE ENTREGAR UN INMUEBLE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene entregar un inmueble mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos relacionados con un contrato de
            arrendamiento necesitan terminar en un proceso judicial. Cuando
            existe voluntad de diálogo, la conciliación permite construir
            soluciones adaptadas a la situación de las partes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Terminación anticipada</h3>

              <p>
                Cuando el arrendatario necesita devolver el inmueble antes del
                plazo inicialmente pactado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mutuo acuerdo</h3>

              <p>
                Cuando propietario e inquilino desean finalizar el contrato sin
                acudir a un juez.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mora en cánones</h3>

              <p>
                Puede negociarse la forma de pago de las obligaciones pendientes
                antes de la entrega.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evitar demandas</h3>

              <p>
                Muchas controversias pueden resolverse mediante acuerdos
                voluntarios evitando largos procesos judiciales.
              </p>
            </div>
          </div>
        </div>

        {/* SITUACIONES DONDE SUELE UTILIZARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones donde suele utilizarse
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Terminación del contrato</h3>

              <p>
                Cuando las partes acuerdan finalizar la relación de
                arrendamiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Canon de arrendamiento pendiente</h3>

              <p>
                Permite pactar pagos antes de realizar la entrega del inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega voluntaria</h3>

              <p>
                El arrendatario se compromete a devolver el inmueble en una
                fecha determinada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños al inmueble</h3>

              <p>Las partes pueden acordar reparaciones o compensaciones.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Locales comerciales</h3>

              <p>
                También aplica para inmuebles destinados a actividades
                comerciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Servicios públicos</h3>

              <p>Se pueden definir responsabilidades sobre pagos pendientes.</p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS DE LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación para la entrega del inmueble
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales extensos.</li>
            <li>Reduce costos legales.</li>
            <li>Permite acuerdos personalizados.</li>
            <li>Facilita una entrega organizada.</li>
            <li>Brinda seguridad jurídica.</li>
            <li>Ayuda a conservar relaciones cordiales.</li>
            <li>Reduce tiempos de solución.</li>
            <li>Puede realizarse presencial o virtualmente.</li>
          </ul>
        </div>

        {/* ASPECTOS QUE SE PUEDEN NEGOCIAR DURANTE LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué aspectos se pueden negociar durante la conciliación?
          </h2>

          <p className={styles.paragraph}>
            Una de las principales ventajas de la conciliación consiste en que
            las partes pueden adaptar el acuerdo a las circunstancias
            particulares del contrato de arrendamiento.
          </p>

          <ul className={styles.list}>
            <li>Fecha definitiva para entregar el inmueble.</li>

            <li>Entrega de llaves.</li>

            <li>Estado físico del inmueble.</li>

            <li>Inventario de muebles o equipos.</li>

            <li>Pago de cánones pendientes.</li>

            <li>Acuerdo sobre depósitos o garantías.</li>

            <li>Servicios públicos.</li>

            <li>Reparaciones locativas.</li>

            <li>Condonación parcial de obligaciones.</li>

            <li>Forma de cumplimiento del acuerdo.</li>
          </ul>
        </div>

        {/* QUE PUEDE INCLUIR EL ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué puede incluir el acuerdo?</h2>

          <p className={styles.paragraph}>
            El acta de conciliación puede contener todas las condiciones
            necesarias para garantizar una restitución adecuada del inmueble.
          </p>

          <ul className={styles.list}>
            <li>Fecha exacta de entrega.</li>
            <li>Estado en que se devolverá el inmueble.</li>
            <li>Pagos pendientes de arrendamiento.</li>
            <li>Compromisos de reparación.</li>
            <li>Liquidación de servicios públicos.</li>
            <li>Entrega de llaves y documentación.</li>
          </ul>
        </div>

        {/* VALIDEZ LEGAL DEL ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Validez legal del acuerdo</h2>

          <p className={styles.paragraph}>
            Una vez firmado, el acta de conciliación tiene efectos jurídicos y
            constituye una prueba formal de los compromisos adquiridos por las
            partes.
          </p>

          <p className={styles.paragraph}>
            Esto proporciona seguridad tanto al arrendador como al arrendatario
            respecto de las obligaciones acordadas.
          </p>
        </div>

        {/* INCUMPLIMIENTO DEL ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si una de las partes incumple el acuerdo de
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            El acta de conciliación no es un simple compromiso verbal. Se trata
            de un documento con efectos jurídicos que refleja las obligaciones
            asumidas por las partes durante la audiencia.
          </p>

          <p className={styles.paragraph}>
            Si posteriormente alguna de las partes incumple lo pactado, la otra
            podrá hacer valer el acta utilizando los mecanismos legales
            previstos por la legislación colombiana, razón por la cual resulta
            fundamental que todos los compromisos queden claramente definidos
            desde la conciliación.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Entre más claro y detallado sea el acuerdo de conciliación,
              menores serán las posibilidades de que surjan nuevos conflictos
              después de la entrega del inmueble.
            </p>
          </div>
        </div>

        {/* RECOMENDACIONES ANTES DE ENTREGAR UN INMUEBLE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Recomendaciones antes de entregar un inmueble
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Documentar el estado del inmueble</h3>

              <p>
                Fotografías, videos e inventarios ayudan a evitar discusiones
                futuras.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Revisar el contrato</h3>

              <p>
                Verifica las obligaciones relacionadas con terminación y
                restitución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Liquidar obligaciones</h3>

              <p>
                Es recomendable identificar previamente cánones, administración
                y servicios públicos pendientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Formalizar el acuerdo</h3>

              <p>
                Todo lo pactado debe quedar consignado claramente dentro del
                acta de conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* DIFERENCIAS ENTRE ENTREGAR UN INMUEBLE POR CONCILIACIÓN Y ACUDIR A UN PROCESO JUDICIAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Diferencias entre entregar un inmueble por conciliación y acudir a
            un proceso judicial
          </h2>

          <p className={styles.paragraph}>
            Cuando existe disposición para dialogar, la conciliación suele
            ofrecer una solución más rápida que un proceso judicial de
            restitución de inmueble. Las partes conservan mayor control sobre
            las condiciones del acuerdo y pueden construir soluciones ajustadas
            a sus necesidades particulares.
          </p>

          <p className={styles.paragraph}>
            Por el contrario, cuando no existe voluntad de llegar a un acuerdo,
            será necesario acudir a los mecanismos judiciales previstos por la
            ley para resolver el conflicto derivado del contrato de
            arrendamiento.
          </p>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.infoCard}>
          <h3>¿Puede hacerse la conciliación de forma virtual?</h3>

          <p>
            Dependiendo del centro de conciliación y del caso concreto, existen
            procedimientos que permiten desarrollar la audiencia utilizando
            medios tecnológicos.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>¿Es obligatorio contratar un abogado?</h3>

          <p>
            No siempre es obligatorio, aunque recibir orientación jurídica puede
            ayudar a elaborar acuerdos más completos y prevenir futuros
            inconvenientes.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>¿También aplica para locales comerciales?</h3>

          <p>
            Sí. La conciliación puede utilizarse para contratos relacionados con
            viviendas, oficinas, locales comerciales, consultorios y otros
            inmuebles.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>¿Qué pasa con los servicios públicos pendientes?</h3>

          <p>
            Las partes pueden acordar quién asumirá los valores pendientes y la
            forma en que serán cancelados antes de la entrega definitiva.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>¿Qué documentos debo llevar a la conciliación?</h3>

          <p>
            Es recomendable presentar el contrato de arrendamiento, documentos
            de identificación, inventarios, comprobantes de pago y cualquier
            evidencia relacionada con el conflicto.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas acordar la entrega de un inmueble?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación de arrendamientos, restitución
            voluntaria de inmuebles y solución de conflictos entre propietarios
            e inquilinos en Colombia.
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
