"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function Ley2220Content() {
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
            Guía práctica de la Ley 2220 de 2022
          </span>

          <h1 className={styles.title}>
            Ley 2220 de 2022: ¿Qué cambió en la conciliación en Colombia y cómo
            te afecta?
          </h1>

          <p className={styles.heroText}>
            La <strong>Ley 2220 de 2022</strong> transformó el Sistema Nacional
            de Conciliación en Colombia, fortaleciendo los mecanismos
            alternativos de solución de conflictos (MASC) y facilitando que
            personas y empresas puedan resolver sus diferencias sin acudir
            inmediatamente a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Esta normativa no solamente reorganizó el funcionamiento de los
            centros de conciliación autorizados, sino que también impulsó el uso
            de medios tecnológicos, actualizó diversos procedimientos y
            consolidó la conciliación como una herramienta efectiva para lograr
            acuerdos con plena validez jurídica.
          </p>

          <p className={styles.heroText}>
            Si tienes dudas sobre cuándo la conciliación es obligatoria, qué
            cambió frente a la legislación anterior o cómo puede ayudarte esta
            ley a resolver un conflicto civil, comercial o de familia, en esta
            guía encontrarás una explicación clara, práctica y actualizada.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la Ley 2220 de 2022 y por qué es tan importante en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La <strong>Ley 2220 de 2022</strong> es la norma que regula el
            <strong> Sistema Nacional de Conciliación</strong> y fortalece los
            <strong>
              {" "}
              mecanismos alternativos de solución de conflictos (MASC)
            </strong>
            en Colombia. Su propósito principal es facilitar el acceso a la
            justicia mediante procedimientos más rápidos, económicos y
            colaborativos, evitando que muchos conflictos deban resolverse
            exclusivamente ante un juez.
          </p>

          <p className={styles.paragraph}>
            Esta ley modernizó la regulación existente sobre conciliación,
            incorporando herramientas tecnológicas, fortaleciendo el papel de
            los centros de conciliación autorizados y estableciendo reglas más
            claras para el desarrollo de las audiencias, la actuación de los
            conciliadores y la validez de los acuerdos alcanzados entre las
            partes.
          </p>

          <p className={styles.paragraph}>
            En la práctica, la Ley 2220 busca que ciudadanos, empresas,
            comerciantes, propietarios, arrendatarios y familias puedan resolver
            muchas de sus controversias de manera voluntaria, reduciendo
            tiempos, costos y el desgaste que normalmente implica un proceso
            judicial.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Más que crear un nuevo procedimiento, la Ley 2220 de 2022
              fortalece la conciliación como una herramienta para solucionar
              conflictos de forma rápida, segura y con efectos jurídicos,
              promoviendo una cultura del diálogo antes que el litigio.
            </p>
          </div>
        </div>

        {/* CAMBIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales cambios que introdujo la Ley 2220 de 2022
          </h2>

          <p className={styles.paragraph}>
            La Ley 2220 de 2022 no solo actualizó la regulación de la
            conciliación en Colombia, sino que también fortaleció el
            funcionamiento del Sistema Nacional de Conciliación y promovió el
            uso de mecanismos alternativos para solucionar conflictos de forma
            más eficiente. Su enfoque está orientado a facilitar el acceso a la
            justicia y fomentar una cultura de diálogo antes de acudir a un
            proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Entre las principales novedades se encuentran la incorporación de
            medios tecnológicos, el fortalecimiento de los centros de
            conciliación, la actualización del papel de los conciliadores y
            reglas más claras para el desarrollo de las audiencias y la validez
            de los acuerdos alcanzados.
          </p>

          <ul className={styles.list}>
            <li>
              Fortalecimiento del Sistema Nacional de Conciliación en todo el
              país.
            </li>

            <li>
              Impulso a la conciliación como mecanismo efectivo de acceso a la
              justicia.
            </li>

            <li>
              Mayor utilización de herramientas tecnológicas para realizar
              audiencias virtuales cuando la ley lo permita.
            </li>

            <li>
              Actualización de las funciones y responsabilidades de los centros
              de conciliación y de los conciliadores.
            </li>

            <li>
              Reglas más claras para el desarrollo de las audiencias y la
              elaboración de las actas de conciliación.
            </li>

            <li>
              Fortalecimiento de los mecanismos alternativos de solución de
              conflictos (MASC).
            </li>

            <li>
              Promoción de soluciones consensuadas antes de iniciar procesos
              judiciales.
            </li>

            <li>
              Mayor seguridad jurídica para las personas que alcanzan acuerdos
              conciliatorios.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Uno de los principales objetivos de la Ley 2220 de 2022 es
              incentivar que las personas resuelvan sus diferencias mediante el
              diálogo y la conciliación, reservando la intervención de los
              jueces para aquellos casos en los que realmente no sea posible
              alcanzar un acuerdo.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la Ley 2220 de 2022 para ciudadanos, empresas y
            entidades
          </h2>

          <p className={styles.paragraph}>
            Uno de los principales propósitos de la Ley 2220 de 2022 es que los
            conflictos puedan resolverse de manera más rápida y colaborativa,
            disminuyendo la necesidad de acudir a procesos judiciales largos. La
            norma busca que la conciliación sea una herramienta efectiva para
            proteger los derechos de las partes mientras se promueven soluciones
            construidas de común acuerdo.
          </p>

          <p className={styles.paragraph}>
            Aunque cada caso tiene sus particularidades, acudir a un centro de
            conciliación autorizado puede representar importantes ventajas tanto
            para personas naturales como para empresas, comerciantes,
            propietarios, arrendatarios y organizaciones que desean resolver sus
            diferencias de forma legal y eficiente.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Acceso más ágil a la justicia</h3>

              <p>
                La ley fortalece la conciliación como un mecanismo que permite
                buscar soluciones sin iniciar inmediatamente un proceso
                judicial, favoreciendo acuerdos voluntarios entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reducción de tiempos y costos</h3>

              <p>
                Resolver una controversia mediante conciliación suele ser más
                rápido que un litigio, lo que puede disminuir gastos asociados
                al conflicto y facilitar una solución oportuna.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos con efectos jurídicos</h3>

              <p>
                Cuando las partes llegan a un acuerdo, este queda consignado en
                un acta de conciliación que produce efectos legales y brinda
                seguridad jurídica para su cumplimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor uso de herramientas digitales</h3>

              <p>
                La Ley 2220 impulsó el empleo de medios tecnológicos para
                facilitar la realización de actuaciones y audiencias cuando la
                normativa lo permite, mejorando el acceso al servicio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conservación de las relaciones</h3>

              <p>
                En muchos conflictos civiles, comerciales o familiares, la
                conciliación ayuda a preservar las relaciones personales o
                comerciales, evitando que las diferencias escalen
                innecesariamente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor seguridad para las partes</h3>

              <p>
                Contar con reglas claras sobre el procedimiento y la validez de
                los acuerdos genera mayor confianza en quienes optan por
                resolver sus conflictos mediante conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona la conciliación según la Ley 2220 de 2022?
          </h2>

          <p className={styles.paragraph}>
            La Ley 2220 de 2022 fortalece un procedimiento que busca que las
            personas encuentren soluciones dialogadas antes de acudir a un
            proceso judicial. En lugar de que un juez imponga una decisión, las
            propias partes construyen un acuerdo con la ayuda de un conciliador
            imparcial, quien facilita el diálogo y orienta el desarrollo de la
            audiencia.
          </p>

          <p className={styles.paragraph}>
            Aunque cada caso puede tener particularidades dependiendo de la
            materia del conflicto, el procedimiento normalmente sigue varias
            etapas que permiten garantizar transparencia, participación y
            seguridad jurídica para todos los involucrados.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Presentación de la solicitud</h3>

              <p>
                La persona interesada presenta la solicitud ante un centro de
                conciliación autorizado, identificando el conflicto y las
                personas que participarán en la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación de las partes</h3>

              <p>
                El centro de conciliación programa la audiencia y comunica la
                citación a las personas involucradas para que puedan asistir y
                ejercer su derecho a participar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Desarrollo de la audiencia</h3>

              <p>
                Durante la audiencia, el conciliador escucha a cada parte,
                identifica los puntos de desacuerdo y facilita la construcción
                de posibles soluciones sin favorecer a ninguno de los
                participantes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Construcción del acuerdo</h3>

              <p>
                Si existe voluntad de las partes, se negocian compromisos que
                permitan resolver el conflicto de forma clara, equilibrada y
                ajustada a la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>5. Firma del acta de conciliación</h3>

              <p>
                Cuando se alcanza un acuerdo, este queda consignado en un acta
                de conciliación con efectos jurídicos, la cual obliga a las
                partes a cumplir los compromisos asumidos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>6. Si no existe acuerdo</h3>

              <p>
                Cuando no es posible conciliar, las partes conservan la
                posibilidad de acudir a las acciones judiciales que correspondan
                según la naturaleza del conflicto.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no consiste en determinar quién gana o quién
              pierde. Su finalidad es que las partes encuentren una solución
              mutuamente aceptable, con el acompañamiento de un conciliador y
              dentro del marco establecido por la Ley 2220 de 2022.
            </p>
          </div>
        </div>

        {/* APLICACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué casos se aplica la Ley 2220 de 2022?
          </h2>

          <p className={styles.paragraph}>
            La Ley 2220 de 2022 tiene un campo de aplicación amplio, ya que
            regula el funcionamiento de la conciliación y otros mecanismos
            alternativos de solución de conflictos en Colombia. Esto significa
            que puede ser relevante para numerosas controversias en las que la
            ley permite que las partes intenten alcanzar un acuerdo antes de
            acudir a un proceso judicial o durante el desarrollo del mismo,
            según corresponda.
          </p>

          <p className={styles.paragraph}>
            No todos los conflictos son conciliables, pero existe un gran número
            de asuntos civiles, comerciales y de familia que sí pueden
            resolverse mediante este mecanismo, siempre que se cumplan los
            requisitos legales aplicables a cada caso.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos civiles</h3>

              <p>
                Diferencias relacionadas con obligaciones económicas,
                incumplimientos contractuales, indemnizaciones, responsabilidad
                civil y otros asuntos entre particulares.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>

              <p>
                Controversias entre arrendadores e inquilinos por cánones de
                arrendamiento, entrega del inmueble, daños, terminación del
                contrato o acuerdos de pago.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Asuntos de familia</h3>

              <p>
                Dependiendo de la materia, la conciliación puede utilizarse en
                temas como cuota alimentaria, custodia, visitas, regulación de
                obligaciones familiares y otros asuntos permitidos por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos comerciales</h3>

              <p>
                Diferencias entre comerciantes, empresas, proveedores, clientes,
                contratistas o socios derivadas de relaciones comerciales o
                contratos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Propiedad horizontal</h3>

              <p>
                Situaciones relacionadas con convivencia, administración, cuotas
                de administración, uso de bienes comunes y conflictos entre
                copropietarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Otros asuntos conciliables</h3>

              <p>
                Existen diferentes materias en las que la conciliación puede ser
                una alternativa eficaz para solucionar conflictos, siempre que
                la ley permita disponer del derecho objeto de la controversia.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Antes de iniciar un proceso judicial, es recomendable verificar si
              el conflicto puede resolverse mediante conciliación y si este
              mecanismo es un requisito previo para acudir ante un juez. En
              muchos casos, alcanzar un acuerdo oportuno permite ahorrar tiempo,
              costos y preservar las relaciones entre las partes.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la Ley 2220 de 2022
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Qué es la Ley 2220 de 2022?</h3>

              <p>
                Es la norma que regula el Sistema Nacional de Conciliación y
                fortalece los mecanismos alternativos de solución de conflictos
                en Colombia. Establece reglas para la conciliación extrajudicial
                y promueve métodos que permitan resolver controversias de manera
                más ágil, colaborativa y con plena seguridad jurídica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La Ley 2220 reemplazó la Ley 640 de 2001?</h3>

              <p>
                La Ley 2220 de 2022 modernizó la regulación sobre conciliación e
                integró un nuevo marco normativo para los mecanismos
                alternativos de solución de conflictos. Su aplicación debe
                analizarse junto con las demás normas vigentes que regulan cada
                materia específica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación siempre es obligatoria?</h3>

              <p>
                No. La obligación de acudir previamente a una conciliación
                depende del tipo de conflicto y de lo que establezca la ley para
                cada caso. Existen asuntos en los que constituye un requisito
                antes de presentar una demanda y otros en los que las partes
                pueden acudir voluntariamente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Los acuerdos alcanzados tienen validez legal?</h3>

              <p>
                Sí. Cuando las partes llegan a un acuerdo y este queda
                consignado en un acta de conciliación, el documento produce
                efectos jurídicos y genera obligaciones para quienes
                participaron en la audiencia, de acuerdo con la legislación
                colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede realizar una conciliación de forma virtual?</h3>

              <p>
                La Ley 2220 impulsó el uso de herramientas tecnológicas para
                facilitar diferentes actuaciones dentro del procedimiento de
                conciliación, siempre que se cumplan las condiciones y
                requisitos previstos en la normativa aplicable.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué conflictos pueden resolverse mediante conciliación?</h3>

              <p>
                Dependiendo de la legislación vigente, pueden conciliarse
                numerosos conflictos civiles, comerciales, de familia,
                arrendamientos, propiedad horizontal y otros asuntos en los que
                las partes puedan llegar legalmente a un acuerdo sobre sus
                derechos y obligaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué sucede si las partes no llegan a un acuerdo?</h3>

              <p>
                Cuando no es posible conciliar, las partes conservan la
                posibilidad de acudir a los mecanismos judiciales que
                correspondan. Haber intentado la conciliación no impide ejercer
                posteriormente las acciones previstas por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Por qué la Ley 2220 es importante para el acceso a la justicia?
              </h3>

              <p>
                Porque fortalece mecanismos que permiten resolver muchos
                conflictos de manera más rápida y colaborativa, promoviendo
                soluciones dialogadas y reduciendo, cuando es posible, la
                necesidad de acudir a procesos judiciales prolongados.
              </p>
            </div>
          </div>
        </div>

        {/** CUANDO ES RECOMENDABLE ACUDIR A UN CENTRO DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable acudir a un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Muchas personas creen que la conciliación únicamente debe utilizarse
            cuando existe una demanda o un conflicto grave. Sin embargo, uno de
            los objetivos de la Ley 2220 de 2022 es promover soluciones
            tempranas que permitan evitar el escalamiento de las controversias.
          </p>

          <p className={styles.paragraph}>
            Acudir oportunamente a un centro de conciliación puede ayudar a las
            partes a encontrar alternativas de solución antes de que el
            conflicto genere mayores costos económicos, desgaste emocional o
            afectaciones en sus relaciones personales o comerciales.
          </p>

          <ul className={styles.list}>
            <li>
              Cuando existe un incumplimiento de una obligación económica.
            </li>
            <li>Ante conflictos derivados de contratos.</li>
            <li>Cuando surgen desacuerdos en arrendamientos.</li>
            <li>Frente a controversias familiares conciliables.</li>
            <li>En conflictos de propiedad horizontal.</li>
            <li>Cuando se busca evitar un proceso judicial prolongado.</li>
          </ul>
        </div>

        {/** PRINCIPIOS QUE FORTALECIO LA LEY 2220 DE 2022 */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principios que fortaleció la Ley 2220 de 2022
          </h2>

          <p className={styles.paragraph}>
            La norma no solamente actualizó aspectos procedimentales de la
            conciliación. También reforzó principios que buscan garantizar
            procesos más transparentes, accesibles y eficientes para los
            ciudadanos.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Acceso efectivo a la justicia</h3>

              <p>
                Busca acercar mecanismos de solución de conflictos a más
                personas en todo el territorio nacional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Autonomía de las partes</h3>

              <p>
                Permite que las personas participen activamente en la
                construcción de soluciones adaptadas a sus necesidades.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Buena fe</h3>

              <p>
                Promueve la participación honesta y colaborativa durante los
                procesos conciliatorios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                Garantiza que los acuerdos alcanzados tengan efectos legales y
                puedan generar confianza entre las partes.
              </p>
            </div>
          </div>
        </div>

        {/** DIFERENCIAS ENTRE CONCILIACION Y PROCESO JUDICIAL EN COLOMBIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Diferencias entre conciliación y proceso judicial en Colombia
          </h2>

          <p className={styles.paragraph}>
            Aunque ambos mecanismos buscan solucionar conflictos, existen
            diferencias importantes entre acudir a conciliación y presentar una
            demanda ante un juez.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>

              <p>
                Las partes participan activamente en la construcción de acuerdos
                y mantienen un mayor control sobre la solución del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Proceso judicial</h3>

              <p>
                La decisión final es adoptada por una autoridad judicial después
                del trámite correspondiente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Tiempo de resolución</h3>

              <p>
                En muchos casos, la conciliación permite alcanzar soluciones en
                menos tiempo que un proceso judicial tradicional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Relación entre las partes</h3>

              <p>
                La conciliación suele favorecer escenarios de diálogo y
                cooperación que ayudan a preservar relaciones personales o
                comerciales.
              </p>
            </div>
          </div>
        </div>

        {/** IMPACTO DE LA LEY 2220 DE 2022 PARA CIUDADANOS Y EMPRESAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Impacto de la Ley 2220 de 2022 para ciudadanos y empresas
          </h2>

          <p className={styles.paragraph}>
            La actualización normativa impulsada por la Ley 2220 beneficia tanto
            a las personas naturales como a las organizaciones que buscan
            mecanismos más ágiles para gestionar conflictos.
          </p>

          <p className={styles.paragraph}>
            Para las empresas, la conciliación puede representar una herramienta
            útil para solucionar controversias comerciales, recuperar
            obligaciones pendientes, preservar relaciones con clientes o
            proveedores y disminuir los riesgos asociados a litigios
            prolongados.
          </p>

          <p className={styles.paragraph}>
            Para los ciudadanos, la ley facilita el acceso a mecanismos que
            permiten buscar acuerdos en asuntos civiles, familiares, económicos
            e inmobiliarios, entre otros temas conciliables.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Uno de los propósitos centrales de la Ley 2220 es fomentar una
              cultura de diálogo que permita resolver conflictos mediante
              acuerdos voluntarios, seguros y jurídicamente válidos.
            </p>
          </div>
        </div>

        {/** ¿QUÉ DEBE CONTENER UN ACTA DE CONCILIACIÓN? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué debe contener un acta de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes alcanzan un acuerdo, este queda consignado en un
            acta de conciliación. Este documento es uno de los elementos más
            importantes dentro del procedimiento porque formaliza los
            compromisos asumidos.
          </p>

          <ul className={styles.list}>
            <li>Identificación de las partes.</li>
            <li>Descripción del conflicto conciliado.</li>
            <li>Términos del acuerdo alcanzado.</li>
            <li>Obligaciones asumidas por cada parte.</li>
            <li>Fechas o condiciones de cumplimiento.</li>
            <li>Firma de los participantes.</li>
            <li>Constancia de la intervención del conciliador.</li>
          </ul>

          <p className={styles.paragraph}>
            La adecuada elaboración del acta es fundamental para brindar
            claridad sobre los compromisos adquiridos y facilitar su
            cumplimiento posterior.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas conciliar un conflicto?
          </h3>

          <p className={styles.ctaText}>
            La Ley 2220 de 2022 facilita la resolución de conflictos en Colombia
            mediante conciliación moderna y efectiva.
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
