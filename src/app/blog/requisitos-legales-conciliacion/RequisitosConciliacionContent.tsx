"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RequisitosConciliacionContent() {
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
            Guía actualizada de conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            Requisitos legales para conciliar en Colombia: documentos,
            condiciones y paso a paso (Guía 2026)
          </h1>

          <p className={styles.heroText}>
            Si deseas resolver un conflicto mediante conciliación, es importante
            conocer cuáles son los requisitos legales exigidos en Colombia, qué
            documentos debes presentar y en qué casos este mecanismo puede
            utilizarse. Cumplir estas condiciones facilita que el trámite avance
            sin inconvenientes y aumenta las posibilidades de lograr un acuerdo
            con plena validez jurídica.
          </p>

          <p className={styles.heroText}>
            La conciliación es uno de los mecanismos de resolución de conflictos
            más utilizados en el país porque permite que las partes encuentren
            soluciones rápidas, económicas y voluntarias, evitando en muchos
            casos procesos judiciales largos y costosos.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás quiénes pueden solicitar una conciliación,
            cuáles son los requisitos legales, qué asuntos pueden conciliarse,
            qué documentos suelen solicitar los centros de conciliación y cuáles
            son los errores más comunes que retrasan el procedimiento.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuáles son los requisitos para iniciar una conciliación en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            Aunque los requisitos específicos pueden variar dependiendo del tipo
            de conflicto, existen unas condiciones generales establecidas por la
            legislación colombiana para que una conciliación pueda desarrollarse
            de manera válida.
          </p>

          <p className={styles.paragraph}>
            El conflicto debe ser susceptible de conciliación, las partes deben
            tener capacidad para llegar a acuerdos y el asunto no puede
            involucrar derechos que la ley considere irrenunciables o
            indisponibles.
          </p>

          <p className={styles.paragraph}>
            Además, quien presenta la solicitud debe aportar información
            suficiente para identificar el conflicto, las personas involucradas
            y, cuando sea posible, anexar documentos que permitan comprender
            mejor la controversia.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no exige presentar un expediente complejo. Sin
              embargo, mientras más clara sea la información y mayores soportes
              existan, más fácil será que las partes encuentren una solución
              durante la audiencia.
            </p>
          </div>
        </div>

        {/* REQUISITOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales requisitos legales para que una conciliación sea válida
          </h2>

          <ul className={styles.list}>
            <li>Existencia de un conflicto real entre dos o más personas.</li>

            <li>Que el asunto sea legalmente conciliable.</li>

            <li>Capacidad legal de quienes participan.</li>

            <li>Voluntad de asistir a la audiencia de conciliación.</li>

            <li>Presentación de una solicitud con información suficiente.</li>

            <li>Identificación de las partes involucradas.</li>

            <li>
              Presentación de documentos cuando existan soportes del conflicto.
            </li>

            <li>
              Comparecencia personal o mediante representante autorizado cuando
              la ley lo permita.
            </li>
          </ul>

          <p className={styles.paragraph}>
            Estos requisitos buscan garantizar que el conciliador pueda
            comprender el conflicto y que cualquier acuerdo alcanzado produzca
            efectos jurídicos para ambas partes.
          </p>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que normalmente solicitan los centros de conciliación
          </h2>

          <p className={styles.paragraph}>
            No existe un único listado obligatorio para todos los casos, ya que
            los documentos dependen del tipo de conflicto. Sin embargo, es
            frecuente que se soliciten algunos de los siguientes soportes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Documento de identidad</h3>

              <p>
                Permite acreditar plenamente la identidad de quien presenta la
                solicitud de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Contratos</h3>

              <p>
                Son especialmente importantes en conflictos civiles,
                comerciales, laborales y de arrendamiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pruebas del conflicto</h3>

              <p>
                Correos electrónicos, mensajes, facturas, recibos, fotografías,
                comprobantes de pago u otros documentos relacionados.
              </p>
            </div>
          </div>
        </div>

        {/* QUIENES PUEDEN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién puede solicitar una conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede ser solicitada por personas naturales,
            empresas, entidades privadas e incluso organizaciones que necesiten
            resolver un conflicto susceptible de acuerdo. Lo importante es que
            quien participe tenga capacidad legal para asumir compromisos y que
            el asunto pueda resolverse por este mecanismo.
          </p>

          <p className={styles.paragraph}>
            En algunos casos también es posible comparecer mediante apoderado o
            representante legal, especialmente cuando intervienen personas
            jurídicas o cuando una de las partes no puede asistir personalmente.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Personas naturales</h3>

              <p>
                Ciudadanos que desean resolver conflictos familiares, civiles,
                laborales, comerciales o de arrendamiento mediante acuerdos
                conciliatorios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Empresas</h3>

              <p>
                Las sociedades pueden acudir a conciliación para solucionar
                incumplimientos contractuales, cobros de cartera, conflictos con
                proveedores o clientes y otras controversias comerciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Representantes legales</h3>

              <p>
                Cuando la ley lo permite, es posible actuar mediante apoderados,
                representantes legales o personas autorizadas para negociar en
                nombre de otra.
              </p>
            </div>
          </div>
        </div>

        {/* CASOS NO CONCILIABLES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué asuntos no pueden resolverse mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Aunque la conciliación tiene un amplio campo de aplicación, existen
            materias que la legislación colombiana reserva exclusivamente para
            decisión de los jueces o de otras autoridades competentes.
          </p>

          <ul className={styles.list}>
            <li>Derechos que la ley considera irrenunciables.</li>

            <li>Procesos penales que no admiten mecanismos alternativos.</li>

            <li>Asuntos relacionados con el estado civil de las personas.</li>

            <li>
              Controversias expresamente excluidas por la legislación
              colombiana.
            </li>

            <li>
              Conflictos en los que no exista capacidad legal para transigir.
            </li>
          </ul>

          <p className={styles.paragraph}>
            Cuando existen dudas sobre si un caso puede ser conciliado, es
            recomendable consultar previamente con un centro de conciliación
            para verificar la viabilidad del trámite antes de presentar la
            solicitud.
          </p>
        </div>

        {/* CASOS QUE SI PUEDEN CONCILIARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos que sí pueden solucionarse mediante conciliación
          </h2>

          <p className={styles.paragraph}>
            En Colombia una gran cantidad de controversias pueden resolverse
            mediante conciliación siempre que las partes tengan la posibilidad
            legal de llegar a acuerdos voluntarios.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos familiares</h3>

              <p>
                Cuota alimentaria, régimen de visitas, custodia, separación de
                bienes y otros asuntos de familia permitidos por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos civiles</h3>

              <p>
                Incumplimientos de contratos, deudas, responsabilidad civil,
                arrendamientos y controversias entre particulares.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos comerciales</h3>

              <p>
                Diferencias entre empresas, proveedores, clientes, socios
                comerciales y obligaciones derivadas de relaciones mercantiles.
              </p>
            </div>
          </div>
        </div>

        {/* ERRORES FRECUENTES AL SOLICITAR UNA CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al solicitar una conciliación
          </h2>

          <p className={styles.paragraph}>
            Muchas personas retrasan innecesariamente su proceso por presentar
            solicitudes incompletas o llegar a la audiencia sin preparación.
            Evitar estos errores facilita el desarrollo de la conciliación.
          </p>

          <ul className={styles.list}>
            <li>No identificar correctamente a la otra parte.</li>

            <li>No llevar documentos que respalden el conflicto.</li>

            <li>Solicitar acuerdos imposibles de cumplir.</li>

            <li>No asistir a la audiencia programada.</li>

            <li>
              Desconocer cuáles derechos pueden ser objeto de conciliación.
            </li>

            <li>
              No buscar orientación previa cuando el caso presenta mayor
              complejidad.
            </li>
          </ul>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo iniciar una conciliación en Colombia paso a paso?
          </h2>

          <p className={styles.paragraph}>
            Una vez se verifica que el conflicto puede resolverse mediante
            conciliación, el siguiente paso consiste en presentar la solicitud
            ante un centro de conciliación autorizado. A partir de allí se
            desarrolla un procedimiento sencillo cuyo objetivo es facilitar el
            diálogo entre las partes y alcanzar un acuerdo voluntario.
          </p>

          <p className={styles.paragraph}>
            Aunque cada caso tiene particularidades, el procedimiento suele ser
            similar para asuntos civiles, familiares, comerciales y, en algunos
            eventos, laborales.
          </p>

          <ul className={styles.list}>
            <li>Presentar la solicitud de conciliación.</li>

            <li>Identificar correctamente a la otra parte.</li>

            <li>Adjuntar los documentos que soportan el conflicto.</li>

            <li>Esperar la programación de la audiencia.</li>

            <li>Asistir a la audiencia con disposición para negociar.</li>

            <li>
              Firmar el acta de conciliación en caso de llegar a un acuerdo.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Entre más organizada esté la documentación y más claras sean las
              pretensiones, mayores posibilidades existen de alcanzar un acuerdo
              durante la primera audiencia.
            </p>
          </div>
        </div>

        {/* DOCUMENTOS QUE AYUDAN A QUE LA CONCILIACIÓN SEA MÁS EFECTIVA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos ayudan a que la conciliación sea más efectiva?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada conflicto requiere documentos diferentes, contar con
            soportes suficientes facilita que el conciliador comprenda el caso y
            permite que las partes negocien sobre hechos verificables.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Documentos de identidad</h3>

              <p>
                Permiten identificar plenamente a quienes participan en la
                audiencia de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Contratos y acuerdos</h3>

              <p>
                Son fundamentales cuando el conflicto surge por incumplimientos,
                obligaciones económicas o prestación de servicios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pruebas del conflicto</h3>

              <p>
                Correos electrónicos, mensajes, facturas, recibos, fotografías,
                comprobantes de pago o cualquier documento relacionado con la
                controversia.
              </p>
            </div>
          </div>
        </div>

        {/* TIEMPO DE CONCILIACIÓN EN COLOMBIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuánto tiempo tarda una conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Uno de los principales beneficios de acudir a un centro de
            conciliación es la rapidez del procedimiento. Mientras un proceso
            judicial puede prolongarse durante meses o incluso años, una
            conciliación suele desarrollarse en un plazo considerablemente
            menor.
          </p>

          <p className={styles.paragraph}>
            El tiempo dependerá de factores como la complejidad del conflicto,
            la disponibilidad de las partes y la programación de la audiencia,
            pero cuando existe voluntad de diálogo es posible alcanzar un
            acuerdo en una sola sesión.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Resolver el conflicto oportunamente permite reducir costos, evitar
              desgastes emocionales y conservar relaciones personales o
              comerciales que podrían deteriorarse durante un litigio
              prolongado.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de cumplir correctamente los requisitos para conciliar
          </h2>

          <p className={styles.paragraph}>
            Preparar adecuadamente la solicitud de conciliación aumenta las
            probabilidades de que el procedimiento avance sin contratiempos y
            permite que la audiencia se concentre en encontrar soluciones, en
            lugar de corregir errores de forma.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor agilidad</h3>

              <p>
                Una solicitud completa evita requerimientos adicionales y
                facilita la programación de la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mejores acuerdos</h3>

              <p>
                Cuando las partes presentan información clara resulta más
                sencillo construir soluciones equilibradas y duraderas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                El cumplimiento de los requisitos fortalece la validez del acta
                de conciliación y brinda mayor tranquilidad a quienes
                participan.
              </p>
            </div>
          </div>
        </div>

        {/* ERRORES QUE DEBES EVITAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que debes evitar antes de asistir a una audiencia de
            conciliación
          </h2>

          <p className={styles.paragraph}>
            Una buena preparación puede marcar la diferencia entre alcanzar un
            acuerdo satisfactorio o tener que acudir posteriormente a un proceso
            judicial. Existen errores frecuentes que pueden dificultar el
            desarrollo de la audiencia y reducir las posibilidades de éxito.
          </p>

          <ul className={styles.list}>
            <li>Presentar información incompleta sobre el conflicto.</li>

            <li>No llevar documentos que respalden las pretensiones.</li>

            <li>
              Asistir con expectativas poco realistas o sin disposición para
              dialogar.
            </li>

            <li>
              Desconocer cuáles derechos pueden negociarse mediante
              conciliación.
            </li>

            <li>No identificar correctamente a la otra parte involucrada.</li>

            <li>
              Omitir información relevante que pueda facilitar un acuerdo.
            </li>
          </ul>

          <p className={styles.paragraph}>
            La conciliación busca construir soluciones mediante el diálogo. Por
            ello, llegar preparado y con una actitud abierta suele incrementar
            las probabilidades de resolver el conflicto durante la primera
            audiencia.
          </p>
        </div>

        {/* CUANDO ES RECOMENDABLE BUSCAR ORIENTACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable buscar orientación antes de iniciar una
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            Aunque muchas conciliaciones pueden adelantarse sin grandes
            dificultades, existen situaciones en las que recibir orientación
            previa permite preparar mejor la audiencia y evitar errores que
            puedan retrasar el procedimiento.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cuando existen altas sumas de dinero</h3>

              <p>
                Si el conflicto involucra obligaciones económicas importantes,
                conviene revisar previamente la documentación disponible.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cuando hay varios involucrados</h3>

              <p>
                Los casos con múltiples personas o empresas suelen requerir una
                mejor organización para facilitar el desarrollo de la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cuando existen dudas jurídicas</h3>

              <p>
                Si no tienes claridad sobre si el conflicto puede conciliarse,
                una orientación previa permite verificar la viabilidad del
                procedimiento.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre los requisitos para conciliar en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito abogado para presentar una conciliación?</h3>

              <p>
                No siempre. Dependiendo del caso, las personas pueden presentar
                la solicitud directamente, aunque recibir orientación puede
                facilitar el procedimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar aunque no tenga todas las pruebas?</h3>

              <p>
                Sí. Sin embargo, contar con documentos y soportes suele
                facilitar la negociación y ayuda al conciliador a comprender
                mejor el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La otra parte está obligada a aceptar un acuerdo?</h3>

              <p>
                No. La conciliación es un mecanismo voluntario y los acuerdos
                solamente se producen cuando ambas partes llegan a un consenso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo modificar posteriormente un acuerdo conciliatorio?</h3>

              <p>
                Cuando cambian las circunstancias que dieron origen al
                conflicto, generalmente es posible celebrar una nueva
                conciliación para actualizar los compromisos asumidos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto dura una audiencia?</h3>

              <p>
                La duración depende de la complejidad del conflicto y de la
                disposición de las partes para negociar, aunque muchas
                audiencias concluyen el mismo día.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acta de conciliación tiene efectos legales?</h3>

              <p>
                Sí. Cuando se alcanza un acuerdo, este queda consignado en un
                acta que produce efectos jurídicos y puede exigirse conforme a
                la legislación colombiana.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas conocer los requisitos para iniciar una conciliación?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación te orientamos sobre los documentos
            necesarios, la viabilidad de tu caso, el procedimiento aplicable y
            los requisitos para adelantar conciliaciones civiles, familiares,
            comerciales y laborales en Colombia. Recibe información clara antes
            de iniciar el trámite y resuelve tus dudas con el acompañamiento de
            nuestro equipo.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un asesor
          </a>
        </div>
      </motion.article>
    </section>
  );
}
