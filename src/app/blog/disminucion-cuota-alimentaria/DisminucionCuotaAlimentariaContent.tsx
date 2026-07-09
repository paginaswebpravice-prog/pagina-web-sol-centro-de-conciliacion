"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DisminucionCuotaAlimentariaContent() {
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
          {/* HERO */}
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              Conciliación familiar para modificar la cuota alimentaria
            </span>

            <h1 className={styles.title}>
              ¿Cómo solicitar la disminución de la cuota alimentaria en
              Colombia? Requisitos, conciliación y proceso
            </h1>

            <p className={styles.heroText}>
              La disminución de la cuota alimentaria es una alternativa legal
              cuando la persona obligada a pagar alimentos enfrenta cambios
              importantes en su situación económica o personal. Sin embargo, la
              reducción del valor no puede realizarse de manera unilateral, ya
              que debe ser acordada entre las partes o autorizada mediante el
              mecanismo legal correspondiente.
            </p>

            <p className={styles.heroText}>
              En Colombia, la conciliación familiar es uno de los mecanismos más
              utilizados para revisar acuerdos de alimentos, permitiendo que
              ambas partes dialoguen con la intervención de un conciliador
              imparcial y encuentren una solución equilibrada que proteja tanto
              los derechos del beneficiario como la capacidad económica del
              obligado.
            </p>

            <p className={styles.heroText}>
              En esta guía encontrarás cuándo procede la disminución de la cuota
              alimentaria, qué documentos suelen solicitarse, cómo funciona una
              audiencia de conciliación y qué alternativas existen si no es
              posible llegar a un acuerdo.
            </p>
          </div>

          {/* EN QUÉ CASOS PUEDE SOLICITARSE LA DISMINUCIÓN DE LA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿En qué casos puede solicitarse la disminución de la cuota
              alimentaria en Colombia?
            </h2>

            <p className={styles.paragraph}>
              La cuota alimentaria puede revisarse cuando las circunstancias que
              dieron origen al acuerdo cambian de manera importante. Esto
              significa que no basta con manifestar dificultades económicas; es
              necesario que exista una variación real y demostrable que
              justifique modificar el valor inicialmente fijado.
            </p>

            <p className={styles.paragraph}>
              Cada situación debe analizarse individualmente, teniendo en cuenta
              la capacidad económica de quien paga la cuota y las necesidades
              actuales del beneficiario. El propósito de la conciliación no es
              eliminar la obligación, sino encontrar un equilibrio entre ambas
              partes.
            </p>

            <p className={styles.paragraph}>
              Cuando existe voluntad de diálogo, la conciliación familiar suele
              ser el camino más rápido para revisar el acuerdo, evitando
              procesos judiciales más largos y permitiendo construir soluciones
              ajustadas a la realidad económica de la familia.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La disminución de la cuota alimentaria no opera automáticamente.
                Para que tenga efectos legales debe quedar formalizada mediante
                un nuevo acuerdo o por la autoridad competente, según
                corresponda.
              </p>
            </div>
          </div>

          {/* SITUACIONES QUE PUEDE JUSTIFICAR UNA DISMINUCION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Principales situaciones que pueden justificar la disminución de
              una cuota alimentaria
            </h2>

            <p className={styles.paragraph}>
              Existen diferentes circunstancias que pueden justificar la
              revisión del monto de la cuota alimentaria. Lo importante es que
              estas situaciones puedan demostrarse mediante documentos o pruebas
              que evidencien el cambio frente a las condiciones existentes
              cuando se fijó la obligación.
            </p>

            <ul className={styles.list}>
              <li>Pérdida del empleo o terminación del contrato laboral.</li>
              <li>Reducción considerable de los ingresos mensuales.</li>
              <li>Incapacidad médica temporal o permanente.</li>
              <li>Enfermedades que generan gastos permanentes.</li>
              <li>
                Disminución de la actividad económica o del negocio propio.
              </li>
              <li>
                Nacimiento de nuevos hijos o nuevas obligaciones familiares.
              </li>
              <li>
                Cambios importantes en la situación financiera del obligado.
              </li>
              <li>
                Variaciones relevantes respecto al momento en que se fijó la
                cuota.
              </li>
            </ul>

            <p className={styles.paragraph}>
              Cada uno de estos escenarios debe evaluarse cuidadosamente durante
              la conciliación para determinar si existe fundamento suficiente
              para modificar el acuerdo inicialmente celebrado.
            </p>
          </div>

          {/* FUNCIONAMIENTO DE LA CONCILIACION PARA REDUCIR LA CUOTA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo funciona el proceso de conciliación para disminuir la cuota
              alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Cuando una persona considera que ya no puede asumir el valor de la
              cuota alimentaria en las mismas condiciones en que fue fijada,
              puede solicitar una audiencia de conciliación ante un centro de
              conciliación autorizado. Allí, tanto quien solicita la reducción
              como el beneficiario tienen la oportunidad de explicar su
              situación y presentar la documentación que consideren pertinente.
            </p>

            <p className={styles.paragraph}>
              El conciliador actúa como un tercero imparcial que facilita el
              diálogo entre las partes, ayuda a identificar posibles soluciones
              y promueve acuerdos que sean razonables para todos los
              involucrados. Su función no consiste en imponer una decisión, sino
              en crear un espacio donde pueda alcanzarse un acuerdo voluntario.
            </p>

            <p className={styles.paragraph}>
              Si las partes llegan a un consenso, se firma un acta de
              conciliación en la que queda establecida la nueva cuota
              alimentaria, la fecha desde la cual empezará a aplicarse, la forma
              de pago y cualquier otro compromiso acordado. Este documento tiene
              efectos jurídicos y brinda seguridad para ambas partes.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación suele ser una alternativa más rápida y flexible
                que acudir directamente a un proceso judicial, permitiendo
                ajustar la obligación alimentaria de acuerdo con la realidad
                económica actual.
              </p>
            </div>
          </div>

          {/* BENEFICIOS DE ACUDIR A CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ventajas de solicitar la disminución de la cuota alimentaria
              mediante conciliación
            </h2>

            <p className={styles.paragraph}>
              Antes de iniciar un proceso judicial, muchas familias optan por la
              conciliación porque permite encontrar soluciones en un ambiente de
              diálogo y colaboración. Además de ahorrar tiempo, este mecanismo
              facilita acuerdos adaptados a las necesidades particulares de cada
              caso.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Proceso más rápido</h3>

                <p>
                  Generalmente una conciliación puede resolverse en mucho menos
                  tiempo que un proceso judicial relacionado con alimentos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menores costos</h3>

                <p>
                  Reduce gastos asociados a litigios prolongados, honorarios y
                  múltiples actuaciones procesales.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdos personalizados</h3>

                <p>
                  Las partes pueden definir nuevas condiciones de pago que se
                  ajusten a su realidad económica y familiar.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Seguridad jurídica</h3>

                <p>
                  El acuerdo alcanzado queda consignado en un acta con efectos
                  legales y puede hacerse valer en caso de incumplimiento.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menor desgaste emocional</h3>

                <p>
                  Favorece el diálogo y reduce el impacto que suelen generar los
                  conflictos familiares prolongados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conserva la comunicación</h3>

                <p>
                  Ayuda a mantener una relación más colaborativa entre quienes
                  deben seguir tomando decisiones relacionadas con los hijos.
                </p>
              </div>
            </div>
          </div>

          {/* DOCUMENTOS QUE PUEDEN AYUDAR EN LA SOLICITUD */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué documentos pueden ayudar a solicitar la disminución de la
              cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Contar con documentos que demuestren el cambio en la situación
              económica facilita el análisis durante la audiencia de
              conciliación y permite que las partes adopten decisiones con mayor
              claridad.
            </p>

            <ul className={styles.list}>
              <li>
                Acta de conciliación o sentencia donde se fijó la cuota
                alimentaria.
              </li>
              <li>Certificados laborales recientes.</li>
              <li>Desprendibles de nómina o certificados de ingresos.</li>
              <li>Declaraciones de renta, cuando existan.</li>
              <li>
                Certificados de incapacidad médica o historia clínica
                pertinente.
              </li>
              <li>
                Documentos que acrediten desempleo o terminación del contrato
                laboral.
              </li>
              <li>
                Soportes de gastos extraordinarios o nuevas obligaciones
                económicas.
              </li>
              <li>
                Estados financieros o información contable si el obligado es
                independiente.
              </li>
              <li>
                Cualquier otro documento que evidencie la disminución de la
                capacidad económica.
              </li>
            </ul>

            <p className={styles.paragraph}>
              Entre mayor sea el respaldo documental, más fácil será explicar
              las razones que justifican la solicitud y construir un acuerdo que
              refleje la realidad económica de las partes.
            </p>
          </div>

          {/* QUE OCURRE SI NO HAY ACUERDO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si no se llega a un acuerdo durante la conciliación?
            </h2>

            <p className={styles.paragraph}>
              No siempre es posible alcanzar un consenso durante la audiencia de
              conciliación. En algunos casos, una de las partes considera que no
              existen razones suficientes para modificar la cuota alimentaria o
              las propuestas presentadas no satisfacen los intereses de ambas
              partes.
            </p>

            <p className={styles.paragraph}>
              Cuando esto ocurre, la conciliación termina sin acuerdo y cada
              persona conserva la posibilidad de acudir a los mecanismos legales
              previstos por la legislación colombiana para solicitar la revisión
              de la obligación alimentaria, siempre que existan fundamentos para
              ello.
            </p>

            <p className={styles.paragraph}>
              Aunque no se logre un acuerdo en la primera audiencia, muchas
              personas utilizan la conciliación como una oportunidad para
              aclarar diferencias, conocer la posición de la otra parte y
              explorar alternativas antes de acudir a un proceso judicial.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación busca privilegiar el diálogo y la construcción
                de acuerdos voluntarios. Cuando esto no es posible, existen
                otras vías legales que podrán analizarse según las
                circunstancias del caso.
              </p>
            </div>
          </div>

          {/* ERRORES FRECUENTES AL SOLICITAR LA DISMINUCIÓN DE LA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores frecuentes al solicitar la disminución de la cuota
              alimentaria
            </h2>

            <p className={styles.paragraph}>
              Muchas solicitudes fracasan porque las partes no presentan
              información suficiente o creen que basta con manifestar
              dificultades económicas para que automáticamente se reduzca la
              obligación.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>No aportar pruebas</h3>

                <p>
                  La falta de documentos que demuestren la disminución de
                  ingresos suele dificultar la negociación.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Suspender los pagos</h3>

                <p>
                  Dejar de pagar la cuota sin un nuevo acuerdo puede generar
                  consecuencias legales importantes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Esperar demasiado tiempo</h3>

                <p>
                  Solicitar la modificación apenas ocurre el cambio económico
                  facilita la búsqueda de soluciones oportunas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>No asistir preparado</h3>

                <p>
                  Llevar soportes financieros y conocer la situación económica
                  permite una negociación mucho más efectiva.
                </p>
              </div>
            </div>
          </div>

          {/* DIFERENCIA ENTRE DISMINUIR, SUSPENDER Y AUMENTAR UNA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Diferencia entre disminuir, suspender y aumentar una cuota
              alimentaria
            </h2>

            <p className={styles.paragraph}>
              Aunque suelen confundirse, estas tres figuras responden a
              situaciones completamente diferentes y producen efectos distintos
              sobre la obligación alimentaria.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Disminuir</h3>

                <p>
                  Se modifica el valor de la cuota porque cambió la capacidad
                  económica del obligado o las circunstancias del caso.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Suspender</h3>

                <p>
                  Solo puede ocurrir en situaciones específicas y conforme a las
                  circunstancias previstas por la legislación aplicable.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Aumentar</h3>

                <p>
                  Procede cuando las necesidades del beneficiario aumentan o
                  mejora la capacidad económica del obligado.
                </p>
              </div>
            </div>

            <p className={styles.paragraph}>
              Identificar correctamente cuál es la modificación que corresponde
              evita solicitudes equivocadas y facilita alcanzar acuerdos durante
              la audiencia de conciliación.
            </p>
          </div>

          {/* CASOS EN LOS QUE NORMALMENTE PUEDE SOLICITARSE LA DISMINUCIÓN DE LA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Casos en los que normalmente puede solicitarse la disminución de
              la cuota alimentaria
            </h2>

            <p className={styles.paragraph}>
              Cada situación debe analizarse individualmente; sin embargo,
              existen circunstancias que con frecuencia motivan solicitudes de
              modificación de la cuota alimentaria mediante conciliación.
            </p>

            <ul className={styles.list}>
              <li>Pérdida involuntaria del empleo.</li>
              <li>Reducción considerable del salario.</li>
              <li>
                Disminución permanente de ingresos como trabajador
                independiente.
              </li>
              <li>Incapacidad médica prolongada.</li>
              <li>Enfermedades que generan gastos extraordinarios.</li>
              <li>
                Nacimiento de nuevos hijos con obligación legal de alimentos.
              </li>
              <li>Cierre del negocio o actividad económica.</li>
              <li>Cambios relevantes en la situación financiera familiar.</li>
              <li>
                Otras circunstancias que afecten de manera demostrable la
                capacidad de pago.
              </li>
            </ul>

            <p className={styles.paragraph}>
              La existencia de una de estas situaciones no implica
              automáticamente que la cuota deba reducirse, pero sí puede
              constituir un fundamento para iniciar un proceso de conciliación y
              revisar las condiciones originalmente pactadas.
            </p>
          </div>

          {/* ¿CUÁNTO PUEDE TARDAR UNA CONCILIACIÓN PARA DISMINUIR LA CUOTA ALIMENTARIA? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuánto puede tardar una conciliación para disminuir la cuota
              alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Uno de los principales beneficios de la conciliación es que
              permite buscar una solución en un tiempo considerablemente menor
              al que suele requerir un proceso judicial. Aunque cada caso tiene
              particularidades, la audiencia normalmente puede programarse una
              vez presentada la solicitud y cumplidos los requisitos
              correspondientes.
            </p>

            <p className={styles.paragraph}>
              La duración dependerá de factores como la disponibilidad de las
              partes, la complejidad del caso y la facilidad para llegar a un
              acuerdo durante la audiencia. Cuando existe disposición para
              negociar, muchas controversias pueden resolverse en una sola
              sesión.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Resolver la modificación de la cuota mediante conciliación suele
                evitar meses de incertidumbre y permite que las partes cuenten
                rápidamente con un acuerdo claro y jurídicamente válido.
              </p>
            </div>
          </div>

          {/* ¿CUÁNTO CUESTA MODIFICAR UNA CUOTA ALIMENTARIA MEDIANTE CONCILIACIÓN? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuánto cuesta modificar una cuota alimentaria mediante
              conciliación?
            </h2>

            <p className={styles.paragraph}>
              El costo de una conciliación puede variar dependiendo del centro
              de conciliación, la naturaleza del asunto y las tarifas
              aplicables. Por ello, antes de iniciar el trámite es recomendable
              solicitar información sobre los valores, requisitos y documentos
              necesarios.
            </p>

            <p className={styles.paragraph}>
              Aun así, para muchas familias la conciliación representa una
              alternativa más económica que un proceso judicial prolongado, ya
              que reduce tiempos, actuaciones y otros gastos asociados al
              litigio.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Menor tiempo</h3>

                <p>
                  Al resolverse con mayor rapidez, normalmente disminuyen los
                  costos derivados del conflicto.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor flexibilidad</h3>

                <p>
                  Las partes pueden construir acuerdos adaptados a su realidad
                  económica actual.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Seguridad jurídica</h3>

                <p>
                  El acuerdo queda consignado en un acta con efectos legales y
                  fuerza obligatoria.
                </p>
              </div>
            </div>
          </div>

          {/* RECOMENDACIONES ANTES DE SOLICITAR LA DISMINUCION DE LA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Recomendaciones antes de solicitar la disminución de la cuota
              alimentaria
            </h2>

            <p className={styles.paragraph}>
              Prepararse adecuadamente para la audiencia facilita el diálogo y
              aumenta las posibilidades de alcanzar un acuerdo satisfactorio
              para ambas partes.
            </p>

            <ul className={styles.list}>
              <li>Reúne documentos que acrediten tus ingresos actuales.</li>
              <li>Organiza los soportes de gastos familiares relevantes.</li>
              <li>
                Conserva copia del acuerdo o acta de conciliación anterior.
              </li>
              <li>
                Calcula una propuesta de cuota que realmente puedas cumplir.
              </li>
              <li>
                Asiste con disposición para dialogar y escuchar alternativas.
              </li>
              <li>
                Expón tu situación económica con información clara y
                verificable.
              </li>
              <li>
                Evita asumir compromisos que posteriormente no puedas cumplir.
              </li>
            </ul>

            <p className={styles.paragraph}>
              Una negociación basada en información objetiva suele generar
              acuerdos más estables y disminuye la posibilidad de futuros
              incumplimientos.
            </p>
          </div>

          {/* PREGUNTAS FRECUENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre disminución de cuota alimentaria
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La cuota puede disminuirse varias veces?</h3>

                <p>
                  Sí, siempre que existan cambios justificables que soporten una
                  nueva revisión.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Es obligatorio un nuevo acuerdo?</h3>

                <p>
                  Sí. La modificación debe formalizarse para que tenga efectos
                  legales.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede hacerse virtualmente?</h3>

                <p>
                  Muchos centros de conciliación permiten realizar audiencias de
                  forma virtual.
                </p>
              </div>
            </div>
          </div>

          {/* LA CONCILIACION PUEDE SER LA MEJOR ALTERNATIVA PARA MODIFICAR UNA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              La conciliación puede ser la mejor alternativa para modificar una
              cuota alimentaria
            </h2>

            <p className={styles.paragraph}>
              Cuando las condiciones económicas cambian, mantener una cuota
              alimentaria que ya no refleja la realidad financiera puede afectar
              tanto al obligado como al beneficiario. En estos casos, la
              conciliación ofrece un espacio de diálogo que permite revisar el
              acuerdo existente y buscar una solución equilibrada para ambas
              partes.
            </p>

            <p className={styles.paragraph}>
              Además de ser un mecanismo reconocido por la legislación
              colombiana, la conciliación permite construir acuerdos con plena
              validez jurídica, reducir tiempos frente a un proceso judicial y
              promover soluciones adaptadas a las necesidades reales de la
              familia.
            </p>

            <p className={styles.paragraph}>
              Si estás considerando solicitar la disminución de una cuota
              alimentaria o necesitas responder a una solicitud de modificación,
              recibir orientación antes de iniciar el trámite puede ayudarte a
              tomar decisiones informadas y preparar adecuadamente la audiencia
              de conciliación.
            </p>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas modificar una cuota alimentaria?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, acuerdos de
              alimentos, disminución de cuota alimentaria y mecanismos legales
              para actualizar obligaciones familiares en Bogotá y Colombia.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Solicitar asesoría por WhatsApp
            </a>
          </div>
        </motion.article>
      </section>
    </>
  );
}
