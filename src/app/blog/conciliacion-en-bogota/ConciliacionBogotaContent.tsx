"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionBogotaContent() {
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
          <span className={styles.badge}>Conciliación en Colombia</span>

          <h1 className={styles.title}>
            Conciliación en Bogotá: cómo funciona, dónde realizarla, requisitos
            y beneficios
          </h1>

          <p className={styles.heroText}>
            La conciliación en Bogotá es uno de los mecanismos más utilizados
            para resolver conflictos legales sin necesidad de acudir a un juez.
          </p>

          <p className={styles.heroText}>
            Permite llegar a acuerdos rápidos, legales y con plena validez
            jurídica dentro del sistema colombiano.
          </p>

          <p className={styles.heroText}>
            En Bogotá, miles de personas recurren cada año a la conciliación
            para resolver conflictos civiles, familiares, comerciales, laborales
            y de arrendamiento sin necesidad de iniciar un proceso judicial.
            Gracias a este mecanismo es posible alcanzar acuerdos voluntarios
            con respaldo legal y reducir considerablemente el tiempo y los
            costos que implica un litigio.
          </p>

          <p className={styles.heroText}>
            Si deseas conocer dónde realizar una conciliación, qué documentos
            necesitas, cuáles son los asuntos que pueden conciliarse y qué
            ocurre durante una audiencia, en esta guía encontrarás información
            clara y actualizada para tomar una mejor decisión.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            La conciliación en Bogotá es un mecanismo alternativo de solución de
            conflictos mediante el cual dos o más personas intentan resolver una
            diferencia con la ayuda de un conciliador imparcial. Su finalidad es
            facilitar el diálogo y promover acuerdos voluntarios que permitan
            evitar, en muchos casos, un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Este procedimiento puede aplicarse en numerosos asuntos civiles,
            familiares, comerciales, laborales y de arrendamiento, siempre que
            la ley permita la conciliación sobre el tema objeto del conflicto.
          </p>

          <p className={styles.paragraph}>
            Cuando las partes alcanzan un acuerdo, este queda consignado en un
            acta de conciliación con efectos jurídicos, lo que brinda seguridad
            y genera obligaciones para quienes participan en el procedimiento.
          </p>
        </div>

        {/* DONDE CONCILIAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Dónde se puede conciliar en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Bogotá cuenta con diversas entidades autorizadas para adelantar
            audiencias de conciliación. La elección del lugar dependerá del tipo
            de conflicto, la naturaleza del asunto y las necesidades de las
            partes involucradas.
          </p>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías con funciones conciliatorias.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas habilitadas.</li>
          </ul>

          <p className={styles.paragraph}>
            Antes de presentar una solicitud es recomendable verificar que la
            entidad esté autorizada para prestar servicios de conciliación y que
            tenga competencia sobre el asunto que deseas resolver.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Bogotá cuenta con una amplia red de entidades autorizadas para
              realizar conciliaciones de forma legal y segura.
            </p>
          </div>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse mediante conciliación en Bogotá?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>
              <p>Conflictos entre arrendadores e inquilinos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Laborales</h3>
              <p>Liquidaciones, salarios y prestaciones sociales.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Civiles</h3>
              <p>Deudas, contratos y obligaciones.</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <h3>Conflictos familiares</h3>

            <p>
              Cuota alimentaria, custodia, visitas y demás asuntos conciliables
              del derecho de familia.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Conflictos comerciales</h3>

            <p>
              Incumplimientos contractuales entre empresas, comerciantes y
              proveedores.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Compraventa de bienes</h3>

            <p>
              Problemas derivados de la entrega, pago o cumplimiento de
              contratos de compraventa.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Responsabilidad civil</h3>

            <p>
              Reclamaciones por daños, perjuicios y obligaciones económicas
              entre particulares.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué cada vez más personas prefieren la conciliación en Bogotá
            antes que una demanda?
          </h2>

          <p className={styles.paragraph}>
            Para muchas personas, iniciar un proceso judicial representa meses o
            incluso años de espera, además de costos adicionales y una mayor
            incertidumbre. La conciliación ofrece una alternativa práctica que
            permite dialogar con la otra parte, construir soluciones y, cuando
            existe voluntad, llegar a acuerdos con efectos jurídicos.
          </p>

          <p className={styles.paragraph}>
            En Bogotá, este mecanismo es utilizado por ciudadanos, familias,
            propietarios, empresas y comerciantes para solucionar conflictos sin
            desgastar la relación entre las partes ni acudir inmediatamente ante
            un juez.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>

              <p>
                Muchos conflictos pueden resolverse en pocas semanas, evitando
                procesos judiciales prolongados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Generalmente implica menos gastos que un proceso judicial
                tradicional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos personalizados</h3>

              <p>
                Las partes tienen la posibilidad de construir soluciones
                adaptadas a su situación particular.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                El acta de conciliación tiene efectos legales y puede exigirse
                en caso de incumplimiento.
              </p>
            </div>
          </div>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse mediante conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Aunque muchas personas creen que la conciliación únicamente sirve
            para conflictos familiares, en realidad puede utilizarse para una
            amplia variedad de asuntos civiles, comerciales, laborales y de
            convivencia, siempre que la ley permita que las partes lleguen a un
            acuerdo.
          </p>

          <ul className={styles.list}>
            <li>Conflictos por incumplimiento de contratos.</li>
            <li>Problemas relacionados con arrendamientos.</li>
            <li>Deudas entre personas naturales o empresas.</li>
            <li>Compraventa de bienes.</li>
            <li>Conflictos laborales.</li>
            <li>Responsabilidad civil.</li>
            <li>Conciliaciones familiares cuando la ley lo permite.</li>
            <li>Acuerdos comerciales entre empresas.</li>
            <li>Indemnizaciones y obligaciones económicas.</li>
            <li>Otros conflictos susceptibles de conciliación.</li>
          </ul>
        </div>

        {/* PASO A PASO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de conciliación en Bogotá paso a paso?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud</h3>

              <p>
                Se presenta la solicitud indicando el conflicto y la información
                de las partes involucradas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>

              <p>
                El centro de conciliación programa la audiencia e invita
                formalmente a la otra parte.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>

              <p>
                El conciliador escucha a las partes y facilita el diálogo para
                encontrar soluciones viables.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Acta de conciliación</h3>

              <p>
                Si existe acuerdo, este queda consignado en un acta con efectos
                jurídicos.
              </p>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿La conciliación en Bogotá evita un proceso judicial?
          </h2>

          <p className={styles.paragraph}>
            En muchos casos sí. Cuando las partes logran un acuerdo durante la
            audiencia de conciliación, el conflicto puede resolverse sin
            necesidad de presentar una demanda ante un juez.
          </p>

          <p className={styles.paragraph}>
            Además del ahorro de tiempo y dinero, esta alternativa permite
            conservar relaciones familiares, comerciales o contractuales que
            podrían deteriorarse durante un litigio.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Intentar una conciliación no significa renunciar a los derechos.
              Por el contrario, permite buscar una solución legal, dialogada y
              respaldada por un acta con fuerza jurídica cuando las partes
              llegan a un acuerdo.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre conciliación en Bogotá
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Quién puede solicitar una conciliación?</h3>

              <p>
                Cualquier persona natural o jurídica que tenga un conflicto
                susceptible de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio asistir?</h3>

              <p>
                Dependiendo del caso, la conciliación puede constituir un
                requisito previo antes de presentar una demanda.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto dura una conciliación?</h3>

              <p>
                El tiempo depende del caso, aunque muchas controversias pueden
                resolverse en una sola audiencia cuando existe disposición para
                negociar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si la otra parte no asiste?</h3>

              <p>
                Dependiendo del procedimiento aplicable, podrán generarse las
                constancias correspondientes para continuar con las actuaciones
                legales que procedan.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo tiene validez legal?</h3>

              <p>
                Sí. El acta de conciliación produce efectos jurídicos y puede
                hacerse cumplir conforme a la legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación puede realizarse de forma virtual?</h3>

              <p>
                Muchos centros de conciliación ofrecen la posibilidad de
                desarrollar audiencias virtuales cuando las condiciones del caso
                lo permiten.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas iniciar una conciliación en Bogotá?
          </h3>

          <p className={styles.ctaText}>
            Si tienes un conflicto civil, familiar, comercial, laboral o
            relacionado con un contrato, recibe orientación sobre el proceso de
            conciliación, los documentos necesarios y las alternativas
            disponibles para buscar una solución rápida, legal y con plena
            validez jurídica.
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
  );
}
