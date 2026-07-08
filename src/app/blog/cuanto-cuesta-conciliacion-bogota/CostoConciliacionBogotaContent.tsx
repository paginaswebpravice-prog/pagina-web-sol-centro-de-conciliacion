"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CostoConciliacionBogotaContent() {
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
            Costos de la Conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            ¿Cuánto cuesta una conciliación en Bogotá? Factores, tarifas y
            cuándo puede ser gratuita
          </h1>

          <p className={styles.heroText}>
            Si estás pensando en resolver un conflicto mediante conciliación,
            una de las primeras preguntas que probablemente te hagas es cuánto
            cuesta este procedimiento. La respuesta depende de varios factores,
            como el tipo de conflicto, la cuantía del caso, la entidad donde se
            realice la audiencia y si se trata de un servicio público o privado.
          </p>

          <p className={styles.heroText}>
            Aunque la conciliación puede tener un costo, en la mayoría de los
            casos representa una alternativa mucho más económica que iniciar un
            proceso judicial. Además, existen situaciones en las que este
            mecanismo puede prestarse de manera gratuita a través de
            determinadas entidades autorizadas.
          </p>

          <p className={styles.heroText}>
            En esta guía conocerás qué aspectos influyen en el valor de una
            conciliación, quién asume los costos, cuándo puede accederse sin
            costo y por qué este mecanismo continúa siendo una de las mejores
            opciones para resolver conflictos en Colombia.
          </p>
        </div>

        {/* GENERAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿La conciliación en Bogotá tiene costo?
          </h2>

          <p className={styles.paragraph}>
            Sí. Dependiendo del centro de conciliación y del tipo de asunto, el
            trámite puede generar costos relacionados con la solicitud, la
            programación de la audiencia, la intervención del conciliador y la
            expedición del acta de conciliación.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, no todas las conciliaciones tienen el mismo valor.
            Algunas entidades públicas, consultorios jurídicos universitarios y
            programas de acceso a la justicia ofrecen este servicio de forma
            gratuita o con tarifas reducidas para determinados casos.
          </p>

          <p className={styles.paragraph}>
            Antes de iniciar el procedimiento es recomendable consultar
            directamente con el centro de conciliación para conocer las tarifas
            vigentes y los costos asociados al trámite.
          </p>
        </div>

        {/* FACTORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿De qué depende el costo de una conciliación?{" "}
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Tipo de conflicto</h3>

              <p>
                Los asuntos civiles, comerciales, familiares, de arrendamiento o
                empresariales pueden tener tratamientos y tarifas diferentes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cuantía económica</h3>

              <p>
                Cuando el conflicto involucra una obligación económica, el monto
                discutido puede influir en la tarifa aplicable.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Centro de conciliación</h3>

              <p>
                Las tarifas pueden variar según se trate de un centro privado,
                una entidad pública, una cámara de comercio o un consultorio
                jurídico.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Complejidad del caso</h3>

              <p>
                Algunos conflictos requieren varias sesiones o mayor
                preparación, lo que puede impactar el costo del procedimiento.
              </p>
            </div>
          </div>
        </div>

        {/* RANGOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Existen tarifas fijas para todas las conciliaciones?
          </h2>

          <p className={styles.paragraph}>
            No. En Colombia no todas las conciliaciones tienen un valor único.
            Las tarifas pueden variar dependiendo de la entidad donde se
            adelante el procedimiento y de las características particulares del
            caso.
          </p>

          <ul className={styles.list}>
            <li>Centros privados de conciliación.</li>
            <li>Centros de conciliación de cámaras de comercio.</li>
            <li>Consultorios jurídicos universitarios.</li>
            <li>Entidades públicas autorizadas.</li>
            <li>Centros especializados según el tipo de conflicto.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Más importante que buscar el menor precio es elegir un centro
              autorizado que garantice un procedimiento válido y un acta de
              conciliación con plena eficacia jurídica.
            </p>
          </div>
        </div>

        {/* QUIEN PAGA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Quién paga la conciliación?</h2>

          <p className={styles.paragraph}>
            Generalmente, las partes pueden acordar cómo asumir el costo del
            proceso.
          </p>

          <p className={styles.paragraph}>
            En algunos casos cada parte paga la mitad, o una sola parte asume el
            total según lo acordado.
          </p>
        </div>

        {/* VALE LA PENA PAGAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Vale la pena pagar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            En muchos casos sí. Aunque exista un costo inicial, la conciliación
            suele representar un ahorro importante frente a un proceso judicial
            que puede extenderse durante meses o incluso años.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menor inversión</h3>
              <p>Reduce gastos asociados a procesos judiciales prolongados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>
              <p>Muchos conflictos se resuelven en pocas audiencias.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>
              <p>
                El acuerdo puede formalizarse mediante un acta con efectos
                legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menor desgaste</h3>
              <p>
                Permite resolver el conflicto mediante diálogo y negociación.
              </p>
            </div>
          </div>
        </div>

        {/* RECOMENDACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Recomendaciones antes de solicitar una conciliación
          </h2>

          <ul className={styles.list}>
            <li>
              Identifica claramente el conflicto y el resultado que esperas
              obtener.
            </li>
            <li>
              Reúne contratos, facturas, recibos, mensajes o cualquier documento
              relacionado con el caso.
            </li>
            <li>
              Consulta previamente las tarifas del centro de conciliación.
            </li>
            <li>
              Verifica que la entidad esté autorizada para prestar el servicio.
            </li>
            <li>
              Prepara propuestas de solución que faciliten llegar a un acuerdo.
            </li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Importancia del costo en la conciliación
          </h2>

          <p className={styles.paragraph}>
            Uno de los principales beneficios de la conciliación es que sigue
            siendo mucho más económica que un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Además, permite resolver conflictos de forma rápida sin altos costos
            legales.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre el costo de una conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación siempre tiene costo?</h3>

              <p>
                No. Dependiendo de la entidad y del caso, el servicio puede ser
                gratuito o tener una tarifa establecida.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Quién debe asumir el pago?</h3>

              <p>
                Generalmente las partes acuerdan cómo distribuir los costos
                antes de iniciar el procedimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es más económica que un proceso judicial?</h3>

              <p>
                En la mayoría de los casos sí, ya que reduce tiempos, gastos y
                trámites asociados a un litigio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El costo incluye el acta de conciliación?</h3>

              <p>
                Esto depende de la entidad que preste el servicio. Por ello es
                importante consultar previamente las condiciones y tarifas
                aplicables.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Quieres saber cuánto podría costar la conciliación de tu caso?
          </h3>

          <p className={styles.ctaText}>
            Cuéntanos cuál es tu conflicto y recibe orientación sobre el
            procedimiento, los posibles costos, las alternativas disponibles y
            si tu caso puede acceder a un servicio de conciliación. Analizaremos
            tu situación para ayudarte a elegir la opción más adecuada.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar información sobre costos
          </a>
        </div>
      </motion.article>
    </section>
  );
}
