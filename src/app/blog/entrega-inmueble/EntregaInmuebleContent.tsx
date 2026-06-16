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
        <div className={styles.heroContent}>
          <span className={styles.badge}>Restitución de Inmuebles</span>

          <h1 className={styles.title}>
            Entrega de inmueble por conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            La entrega de inmueble por conciliación es una alternativa legal que
            permite a arrendadores e inquilinos resolver de forma amistosa la
            restitución de una vivienda, local comercial u oficina sin acudir a
            largos procesos judiciales.
          </p>

          <p className={styles.heroText}>
            A través de la conciliación, las partes pueden establecer fechas,
            condiciones de entrega, pagos pendientes y demás compromisos
            relacionados con la finalización del contrato de arrendamiento.
          </p>

          <p className={styles.heroText}>
            Este mecanismo es ampliamente utilizado en Bogotá y Colombia para
            evitar conflictos mayores y facilitar una transición ordenada entre
            propietario y arrendatario.
          </p>
        </div>

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

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La entrega debe hacerse el mismo día de la audiencia?</h3>

              <p>
                No necesariamente. Las partes pueden fijar una fecha futura para
                la restitución del inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se pueden acordar pagos pendientes?</h3>

              <p>
                Sí. La conciliación permite establecer acuerdos sobre cánones y
                demás obligaciones económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo tiene validez legal?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos y obliga a
                las partes a cumplir lo pactado.
              </p>
            </div>
          </div>
        </div>

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
