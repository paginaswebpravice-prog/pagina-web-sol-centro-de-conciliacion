"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function LiquidacionSociedadPatrimonialContent() {
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
              Conciliación familiar • Unión marital de hecho • Liquidación de
              bienes
            </span>

            <h1 className={styles.title}>
              Liquidación de sociedad patrimonial por conciliación en Colombia:
              cómo repartir bienes sin ir a juicio
            </h1>

            <p className={styles.heroText}>
              La{" "}
              <strong>
                liquidación de la sociedad patrimonial entre compañeros
                permanentes
              </strong>
              es el procedimiento mediante el cual se distribuyen los bienes,
              derechos, obligaciones y deudas adquiridos durante una unión
              marital de hecho. En Colombia, este proceso puede realizarse
              mediante <strong>conciliación</strong>, permitiendo que ambas
              partes lleguen a acuerdos voluntarios sin iniciar un proceso
              judicial largo y costoso.
            </p>

            <p className={styles.heroText}>
              Cuando existe disposición para dialogar, la conciliación se
              convierte en una alternativa rápida, segura y con plenos efectos
              legales. En una audiencia es posible acordar la distribución de
              inmuebles, vehículos, cuentas bancarias, negocios, inversiones,
              deudas y demás bienes que conforman el patrimonio construido
              durante la convivencia.
            </p>

            <p className={styles.heroText}>
              Esta guía explica{" "}
              <strong>
                qué es la sociedad patrimonial, cuándo nace, qué bienes pueden
                liquidarse, cuáles documentos suelen solicitarse, cómo funciona
                la conciliación y qué ocurre si las partes no logran un acuerdo
              </strong>
              , para que conozcas el procedimiento antes de iniciar el trámite.
            </p>
          </div>

          {/* QUE ES UNA SOCIEDAD PATRIMONIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la sociedad patrimonial entre compañeros permanentes?
            </h2>

            <p className={styles.paragraph}>
              La{" "}
              <strong>sociedad patrimonial entre compañeros permanentes</strong>{" "}
              es la figura jurídica mediante la cual se reconocen los bienes,
              derechos y obligaciones adquiridos durante la convivencia de una
              pareja que conformó una unión marital de hecho, siempre que se
              cumplan los requisitos previstos por la legislación colombiana.
            </p>

            <p className={styles.paragraph}>
              Su finalidad es proteger el patrimonio construido conjuntamente
              durante la relación, garantizando que, al finalizar la
              convivencia, ambas personas tengan la posibilidad de definir de
              manera justa cómo serán distribuidos los bienes obtenidos con el
              esfuerzo común.
            </p>

            <p className={styles.paragraph}>
              Aunque muchas personas creen que únicamente aplica para viviendas,
              la sociedad patrimonial puede comprender diferentes activos
              económicos, inversiones e incluso determinadas obligaciones
              adquiridas durante la unión, dependiendo de cada caso particular.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación permite que los compañeros permanentes
                construyan un acuerdo sobre la distribución de su patrimonio sin
                necesidad de acudir inicialmente a un proceso judicial,
                reduciendo tiempos, costos y el desgaste emocional que suele
                generar un litigio.
              </p>
            </div>
          </div>

          {/* QUE PUEDE INCLUIRSE EN LA LIQUIDACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo nace la sociedad patrimonial entre compañeros permanentes?
            </h2>

            <p className={styles.paragraph}>
              La sociedad patrimonial no surge simplemente por convivir durante
              algunos meses. La legislación colombiana establece determinados
              requisitos para que pueda reconocerse jurídicamente, razón por la
              cual cada situación debe ser analizada de forma individual.
            </p>

            <p className={styles.paragraph}>
              Una vez configurada, los bienes adquiridos durante la convivencia
              pueden hacer parte del patrimonio común, salvo las excepciones
              previstas por la ley o aquellas derivadas de acuerdos celebrados
              entre las partes.
            </p>

            <p className={styles.paragraph}>
              Cuando la relación termina, la conciliación ofrece un espacio
              donde ambas personas pueden revisar el patrimonio construido
              durante los años de unión y definir la forma en que será
              distribuido mediante un acuerdo legalmente válido.
            </p>
          </div>

          {/* CUANDO NACE LA SOCIEDAD PATRIMONIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo nace la sociedad patrimonial entre compañeros permanentes
              en Colombia?
            </h2>

            <p className={styles.paragraph}>
              Muchas personas creen que la sociedad patrimonial surge
              automáticamente al iniciar una relación sentimental; sin embargo,
              la legislación colombiana establece requisitos específicos para
              que exista esta figura jurídica. Generalmente, se requiere una
              convivencia permanente y singular durante el tiempo previsto por
              la ley, siempre que no existan impedimentos legales.
            </p>

            <p className={styles.paragraph}>
              Una vez configurada la sociedad patrimonial, los bienes adquiridos
              durante la convivencia pueden formar parte del patrimonio común,
              motivo por el cual, cuando la relación termina, resulta
              recomendable realizar una liquidación ordenada para evitar
              conflictos posteriores.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Determinar correctamente cuándo nació la sociedad patrimonial es
                uno de los aspectos más importantes para definir qué bienes
                hacen parte de la liquidación y cuáles permanecen como
                patrimonio individual.
              </p>
            </div>
          </div>

          {/* BIENES QUE NO HACEN PARTE DE LA SOCIEDAD PATRIMONIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Bienes que normalmente no hacen parte de la sociedad patrimonial
            </h2>

            <p className={styles.paragraph}>
              No todos los bienes pertenecen automáticamente a la sociedad
              patrimonial. Dependiendo de las circunstancias de cada caso,
              existen activos que pueden conservar su carácter personal y, por
              tanto, no entrar en la repartición.
            </p>

            <ul className={styles.list}>
              <li>Bienes adquiridos antes del inicio de la convivencia.</li>

              <li>
                Herencias recibidas por uno de los compañeros permanentes.
              </li>

              <li>Donaciones hechas exclusivamente a uno de ellos.</li>

              <li>
                Bienes cuya naturaleza jurídica permita demostrar propiedad
                exclusiva.
              </li>

              <li>
                Otros activos que la ley excluya expresamente del patrimonio
                común.
              </li>
            </ul>

            <p className={styles.paragraph}>
              Precisar qué bienes integran realmente la sociedad patrimonial
              evita desacuerdos durante la conciliación y facilita que las
              partes alcancen un acuerdo equilibrado.
            </p>
          </div>

          {/* VENTAJAS DE LA CONCILIACION PATRIMONIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ventajas de la conciliación patrimonial
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Menor costo</h3>

                <p>
                  Evita los gastos asociados a procesos judiciales extensos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor rapidez</h3>

                <p>Permite alcanzar acuerdos en menos tiempo que un litigio.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdos personalizados</h3>

                <p>
                  Las partes pueden diseñar soluciones adaptadas a su situación
                  patrimonial.
                </p>
              </div>
            </div>
          </div>

          {/* POR QUE INTENTAR PRIMERO UNA CONCILIACION ANTES DE INICIAR UN PROCESO JUDICIAL? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué intentar primero una conciliación antes de iniciar un
              proceso judicial?
            </h2>

            <p className={styles.paragraph}>
              En numerosos casos, acudir primero a una audiencia de conciliación
              permite resolver diferencias sin llegar a un litigio. Además de
              disminuir tiempos y costos, brinda a los compañeros permanentes la
              posibilidad de construir soluciones adaptadas a su realidad
              económica y familiar.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Mayor control del acuerdo</h3>

                <p>
                  Son las propias partes quienes deciden cómo distribuir los
                  bienes y las obligaciones, sin que un tercero imponga la
                  decisión.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Protección de la relación familiar</h3>

                <p>
                  Favorece el diálogo y reduce el nivel de confrontación,
                  especialmente cuando existen hijos o proyectos comunes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Seguridad jurídica</h3>

                <p>
                  Los acuerdos logrados mediante conciliación producen efectos
                  legales y ofrecen mayor tranquilidad para ambas partes.
                </p>
              </div>
            </div>
          </div>

          {/* COMO SE DESARROLLA LA CONCILIACION? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo se desarrolla la conciliación?
            </h2>

            <p className={styles.paragraph}>
              Los compañeros permanentes presentan la información relacionada
              con los bienes y obligaciones que desean incluir dentro de la
              liquidación patrimonial.
            </p>

            <p className={styles.paragraph}>
              Durante la audiencia, el conciliador facilita el diálogo y ayuda a
              construir acuerdos sobre la distribución de activos y pasivos.
            </p>

            <p className={styles.paragraph}>
              Una vez alcanzado el acuerdo, este queda consignado en un acta de
              conciliación con efectos jurídicos.
            </p>
          </div>

          {/* PASO A PASO PARA LIQUIDAR UNA SOCIEDAD PATRIMONIAL MEDIANTE CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Paso a paso para liquidar una sociedad patrimonial mediante
              conciliación
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>1. Solicitud de conciliación</h3>

                <p>
                  Uno de los compañeros permanentes presenta la solicitud ante
                  un centro de conciliación autorizado.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>2. Citación de las partes</h3>

                <p>
                  Ambas personas son convocadas para participar en una audiencia
                  donde podrán exponer su posición.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>3. Identificación del patrimonio</h3>

                <p>
                  Se revisan los bienes, las deudas y los demás activos que
                  podrían hacer parte de la sociedad patrimonial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>4. Negociación</h3>

                <p>
                  Con la orientación del conciliador se buscan alternativas que
                  beneficien a ambas partes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>5. Firma del acuerdo</h3>

                <p>
                  Si existe consenso, se suscribe un acta de conciliación con
                  plenos efectos jurídicos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>6. Cumplimiento</h3>

                <p>
                  Cada parte ejecuta los compromisos asumidos respecto de
                  bienes, pagos, transferencias o cualquier otra obligación
                  pactada.
                </p>
              </div>
            </div>
          </div>

          {/* DOCUMENTOS QUE SUELEN SOLICITARSE */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que suelen solicitarse
            </h2>

            <ul className={styles.list}>
              <li>Documentos de identidad.</li>
              <li>Pruebas de la unión marital de hecho.</li>
              <li>Certificados de tradición de inmuebles.</li>
              <li>Tarjetas de propiedad de vehículos.</li>
              <li>Extractos bancarios o soportes financieros.</li>
              <li>Información relacionada con deudas vigentes.</li>
            </ul>
          </div>

          {/* ERRORES MAS COMUNES AL LIQUIDAR UNA SOCIEDAD PATRIMONIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores más comunes al liquidar una sociedad patrimonial
            </h2>

            <p className={styles.paragraph}>
              En muchos casos, las diferencias entre compañeros permanentes no
              se deben a la existencia de los bienes, sino a la falta de
              información sobre cuáles hacen parte de la sociedad patrimonial y
              cómo deben distribuirse. Conocer los errores más frecuentes
              permite prevenir conflictos y facilita la construcción de acuerdos
              durante la conciliación.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>No identificar todos los bienes</h3>

                <p>
                  Omitir inmuebles, vehículos, inversiones o cuentas bancarias
                  puede generar nuevos conflictos incluso después de firmar un
                  acuerdo.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Olvidar las obligaciones</h3>

                <p>
                  La liquidación no solo comprende activos. También pueden
                  existir deudas y obligaciones que deben analizarse para lograr
                  una distribución equilibrada.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>No reunir los soportes</h3>

                <p>
                  Contar con certificados, escrituras, extractos bancarios y
                  demás documentos facilita la conciliación y reduce las
                  discusiones sobre la propiedad de los bienes.
                </p>
              </div>
            </div>
          </div>

          {/* ¿QUE OCURRE SI UNO DE LOS COMPANEROS PERMANENTES OCULTA BIENES? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ocurre si uno de los compañeros permanentes oculta bienes?
            </h2>

            <p className={styles.paragraph}>
              La transparencia es uno de los principios más importantes durante
              una conciliación patrimonial. Para alcanzar acuerdos justos es
              indispensable que ambas partes informen de manera completa los
              bienes, derechos, inversiones y obligaciones que puedan hacer
              parte de la sociedad patrimonial.
            </p>

            <p className={styles.paragraph}>
              Si durante la negociación se identifican activos que inicialmente
              no fueron informados, las partes pueden revisar nuevamente la
              distribución propuesta para evitar acuerdos que resulten
              desequilibrados o que generen nuevos conflictos posteriormente.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Entre mayor sea la información disponible sobre el patrimonio,
                más fácil será construir un acuerdo estable, claro y beneficioso
                para ambas partes.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuánto tiempo puede tomar una conciliación para liquidar una
              sociedad patrimonial?
            </h2>

            <p className={styles.paragraph}>
              El tiempo necesario depende principalmente de la cantidad de
              bienes, el nivel de acuerdo entre las partes y la complejidad del
              patrimonio que será objeto de liquidación.
            </p>

            <p className={styles.paragraph}>
              Cuando los compañeros permanentes tienen claridad sobre los bienes
              que desean distribuir y cuentan con la documentación necesaria, el
              trámite suele desarrollarse con mayor agilidad que un proceso
              judicial.
            </p>

            <p className={styles.paragraph}>
              En cambio, cuando existen desacuerdos importantes sobre la
              existencia de los bienes, su valoración o la forma de repartirlos,
              pueden requerirse nuevas reuniones para intentar construir un
              acuerdo satisfactorio para ambas partes.
            </p>
          </div>

          {/* ¿QUE SUCEDE SI NO EXISTE ACUERDO? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si no existe acuerdo?
            </h2>

            <p className={styles.paragraph}>
              Si las partes no logran conciliar, podrán acudir a los mecanismos
              judiciales correspondientes para que la situación patrimonial sea
              resuelta por un juez competente.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, la conciliación suele representar una oportunidad
              efectiva para encontrar soluciones rápidas y satisfactorias para
              ambas partes.
            </p>
          </div>

          {/* ¿EN QUE CASOS ES RECOMENDABLE ACUDIR PRIMERO A UNA CONCILIACION? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿En qué casos es recomendable acudir primero a una conciliación?
            </h2>

            <p className={styles.paragraph}>
              La conciliación resulta especialmente útil cuando ambos compañeros
              permanentes desean evitar un proceso judicial y conservan
              disposición para dialogar sobre la distribución de los bienes
              adquiridos durante la unión marital de hecho.
            </p>

            <ul className={styles.list}>
              <li>Cuando existe voluntad de llegar a un acuerdo.</li>

              <li>
                Cuando ambas partes conocen los bienes que integran el
                patrimonio.
              </li>

              <li>
                Cuando buscan una solución más rápida que un proceso judicial.
              </li>

              <li>Cuando desean reducir costos legales.</li>

              <li>
                Cuando quieren conservar una relación respetuosa después de la
                separación.
              </li>

              <li>
                Cuando necesitan formalizar la distribución del patrimonio
                mediante un acuerdo con efectos jurídicos.
              </li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                La conciliación no solo busca repartir bienes. También pretende
                disminuir el conflicto entre las partes y brindar seguridad
                jurídica mediante un acuerdo construido por quienes mejor
                conocen su situación patrimonial.
              </p>
            </div>
          </div>

          {/* PREGUNTAS FREQUENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre la liquidación de sociedad patrimonial
              en Colombia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>
                  ¿La sociedad patrimonial y la sociedad conyugal son lo mismo?
                </h3>

                <p>
                  No. La sociedad patrimonial surge entre compañeros permanentes
                  cuando se cumplen los requisitos establecidos por la ley,
                  mientras que la sociedad conyugal está relacionada con el
                  matrimonio.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>
                  ¿Es obligatorio acudir a un juez para repartir los bienes?
                </h3>

                <p>
                  No siempre. Cuando existe voluntad de diálogo, la conciliación
                  permite llegar a acuerdos sobre la distribución del patrimonio
                  sin iniciar un proceso judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Qué bienes pueden incluirse en la conciliación?</h3>

                <p>
                  Dependiendo de cada caso, pueden incluirse inmuebles,
                  vehículos, cuentas bancarias, negocios, inversiones, muebles y
                  otros activos que hagan parte de la sociedad patrimonial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>
                  ¿Qué sucede si uno de los compañeros no quiere conciliar?
                </h3>

                <p>
                  Si no es posible alcanzar un acuerdo mediante conciliación,
                  las partes conservan la posibilidad de acudir a los mecanismos
                  judiciales previstos por la legislación colombiana.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿El acta de conciliación tiene efectos legales?</h3>

                <p>
                  Sí. Cuando las partes llegan a un acuerdo, este queda
                  consignado en un acta de conciliación que produce efectos
                  jurídicos y es obligatoria para quienes la suscriben.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Cuánto tiempo tarda una conciliación?</h3>

                <p>
                  Depende de la complejidad del patrimonio y de la disposición
                  de las partes para negociar. En muchos casos resulta
                  considerablemente más rápida que un proceso judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Pueden incluirse las deudas dentro del acuerdo?</h3>

                <p>
                  Sí. Además de los bienes, la conciliación puede abordar la
                  forma en que las partes asumirán determinadas obligaciones
                  económicas relacionadas con la sociedad patrimonial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Es posible modificar un acuerdo posteriormente?</h3>

                <p>
                  Dependiendo de las circunstancias y de la voluntad de las
                  partes, pueden celebrarse nuevos acuerdos cuando sea
                  jurídicamente procedente.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas liquidar una sociedad patrimonial entre compañeros
              permanentes?
            </h3>

            <p className={styles.ctaText}>
              Si tu unión marital de hecho terminó y deseas llegar a un acuerdo
              sobre la distribución de bienes, la conciliación puede ayudarte a
              resolver el conflicto de manera más rápida, económica y con plenos
              efectos legales. Nuestro equipo puede orientarte durante todo el
              procedimiento para que conozcas las alternativas disponibles según
              tu caso.
            </p>

            <p className={styles.ctaText}>
              Recibe información sobre conciliación para la liquidación de
              sociedad patrimonial, reparto de bienes, unión marital de hecho y
              acuerdos entre compañeros permanentes en Bogotá y cualquier lugar
              de Colombia.
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
