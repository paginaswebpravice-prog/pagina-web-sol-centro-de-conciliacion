"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CentrosConciliacionBogotaContent() {
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
          <span className={styles.badge}>Conciliación en Bogotá</span>

          <h1 className={styles.title}>
            Centros de conciliación en Bogotá: guía completa para iniciar una
            conciliación en 2026
          </h1>

          <p className={styles.heroText}>
            Los centros de conciliación en Bogotá son entidades autorizadas por
            el Estado para facilitar la resolución de conflictos sin necesidad
            de acudir a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Allí se pueden resolver conflictos civiles, laborales, familiares y
            comerciales mediante acuerdos legales.
          </p>
        </div>

        {/* QUE SON */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son los centros de conciliación en Bogotá y cuál es su función?
          </h2>

          <p className={styles.paragraph}>
            Son entidades autorizadas por el Ministerio de Justicia donde un
            conciliador ayuda a las partes a llegar a un acuerdo voluntario y
            legalmente válido.
          </p>

          <p className={styles.paragraph}>
            En Bogotá, estos centros hacen parte del sistema de MASC (Mecanismos
            Alternativos de Solución de Conflictos).
          </p>
        </div>

        {/* DONDE ACUDIR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Dónde hacer una conciliación en Bogotá? Opciones autorizadas
            disponibles
          </h2>

          <ul className={styles.list}>
            <li>
              Centros de conciliación autorizados por el Ministerio de Justicia.
            </li>
            <li>Notarías con funciones conciliatorias.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas habilitadas para conciliación.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá existen múltiples opciones legales para iniciar un
              proceso de conciliación sin necesidad de acudir a un juez.
            </p>
          </div>
        </div>

        {/* TIPOS DE CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse en un centro de conciliación en
            Bogotá?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos civiles</h3>
              <p>Deudas, contratos y obligaciones.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos laborales</h3>
              <p>Salarios, liquidaciones y prestaciones sociales.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos de arrendamiento</h3>
              <p>Problemas entre arrendador e inquilino.</p>
            </div>
          </div>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de acudir a un centro de conciliación en Bogotá antes de
            presentar una demanda
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales largos.</li>
            <li>Reduce costos legales.</li>
            <li>Permite soluciones rápidas.</li>
            <li>Los acuerdos tienen validez jurídica.</li>
            <li>Promueve el diálogo entre las partes.</li>
          </ul>
        </div>

        {/* IMPORTANCIA BOGOTA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué acudir a un centro de conciliación en Bogotá puede
            ahorrarte tiempo y dinero?
          </h2>

          <p className={styles.paragraph}>
            Bogotá es una de las ciudades con mayor demanda de servicios
            legales, por lo que los centros de conciliación ayudan a
            descongestionar la justicia ordinaria.
          </p>

          <p className={styles.paragraph}>
            Además, facilitan el acceso a soluciones rápidas y efectivas para
            los ciudadanos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo elegir un centro de conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Elegir un centro de conciliación adecuado puede marcar la diferencia
            en la rapidez y efectividad con la que se resuelve un conflicto.
            Aunque todos los centros autorizados cumplen una función similar,
            existen diferencias en la experiencia de sus conciliadores, los
            tiempos de atención, las modalidades de audiencia y los servicios
            que ofrecen.
          </p>

          <p className={styles.paragraph}>
            Antes de presentar una solicitud, es recomendable verificar que el
            centro esté autorizado para prestar servicios de conciliación y que
            tenga experiencia en el tipo de conflicto que deseas resolver, ya
            sea civil, familiar, comercial, laboral o de arrendamiento.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Autorización</h3>
              <p>
                Verifica que el centro se encuentre autorizado para prestar
                servicios de conciliación conforme a la normatividad colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Experiencia</h3>
              <p>
                Es recomendable acudir a centros que tengan experiencia en el
                tipo de conflicto que deseas solucionar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Modalidad</h3>
              <p>
                Algunos centros ofrecen audiencias presenciales y virtuales para
                mayor comodidad de las partes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos debes llevar a un centro de conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Los documentos pueden variar dependiendo del tipo de conflicto, pero
            en la mayoría de los casos es recomendable presentar toda la
            información que permita al conciliador comprender claramente la
            situación y facilitar una negociación entre las partes.
          </p>

          <ul className={styles.list}>
            <li>Documento de identidad.</li>
            <li>Datos completos de la otra parte.</li>
            <li>Contratos o acuerdos existentes.</li>
            <li>Facturas, recibos o comprobantes.</li>
            <li>Correos electrónicos o conversaciones relacionadas.</li>
            <li>Soportes de pagos realizados.</li>
            <li>Cualquier prueba relacionada con el conflicto.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Llevar documentación organizada facilita la audiencia y aumenta
              las posibilidades de llegar a un acuerdo satisfactorio.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de conciliación en un centro de conciliación en
            Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso tiene particularidades, la mayoría de los centros
            de conciliación siguen un procedimiento similar para tramitar las
            solicitudes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud</h3>
              <p>La persona interesada presenta formalmente su solicitud.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Revisión</h3>
              <p>El centro verifica que el asunto sea conciliable.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Citación</h3>
              <p>Se convoca a la otra parte para asistir a la audiencia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Audiencia</h3>
              <p>El conciliador dirige el diálogo y facilita la negociación.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>5. Acuerdo</h3>
              <p>Si existe consenso, se redacta el acta correspondiente.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>6. Cierre</h3>
              <p>El acta produce efectos jurídicos para las partes.</p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuánto tarda un proceso de conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            La duración depende de la disponibilidad de las partes, la
            complejidad del conflicto y la agenda del centro de conciliación.
            Sin embargo, en muchos casos el procedimiento puede resolverse en
            una o pocas audiencias, lo que representa una alternativa mucho más
            rápida que un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Cuando ambas partes tienen disposición para negociar y presentan la
            documentación necesaria, es posible alcanzar un acuerdo en un tiempo
            considerablemente menor que el requerido en la jurisdicción
            ordinaria.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuánto cuesta acudir a un centro de conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            El costo de una conciliación puede variar según el centro elegido,
            la naturaleza del conflicto y la cuantía del asunto. Existen
            entidades que prestan el servicio de manera gratuita y otras que
            aplican tarifas establecidas conforme a la normatividad vigente.
          </p>

          <p className={styles.paragraph}>
            Antes de iniciar el trámite es recomendable consultar los costos,
            las modalidades de atención y los servicios incluidos para tomar una
            decisión informada.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si la otra parte no asiste a la audiencia de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Si la persona citada no comparece a la audiencia, el centro de
            conciliación dejará constancia de la situación conforme al
            procedimiento aplicable. En determinados casos, dicha constancia
            puede ser relevante para continuar con otras actuaciones legales
            cuando corresponda.
          </p>

          <p className={styles.paragraph}>
            La inasistencia no impide que la parte interesada conozca las
            alternativas jurídicas disponibles para la protección de sus
            derechos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Es posible realizar una conciliación virtual en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Sí. Actualmente muchos centros de conciliación ofrecen la
            posibilidad de realizar audiencias virtuales mediante plataformas
            digitales, facilitando la participación de personas que se
            encuentran en diferentes ciudades o que tienen dificultades para
            asistir presencialmente.
          </p>

          <p className={styles.paragraph}>
            Esta modalidad mantiene la misma finalidad del procedimiento
            presencial y busca garantizar la participación de las partes de
            forma segura y eficiente.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que debes evitar al solicitar una conciliación en Bogotá
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No llevar pruebas</h3>
              <p>
                Contar con documentos y soportes facilita la negociación durante
                la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Información incompleta</h3>
              <p>
                Es importante suministrar correctamente los datos de la otra
                parte para realizar la citación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No preparar una propuesta</h3>
              <p>
                Llegar con alternativas de solución aumenta las probabilidades
                de alcanzar un acuerdo.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre los centros de conciliación en Bogotá
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito abogado para conciliar?</h3>
              <p>
                No es obligatorio, aunque puede ser recomendable en casos
                complejos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto dura el proceso?</h3>
              <p>Generalmente se resuelve en una sola audiencia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, el acta de conciliación tiene fuerza legal en Colombia.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas un centro de conciliación en Bogotá?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a iniciar tu proceso de conciliación de forma rápida,
            legal y segura en Bogotá.
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
