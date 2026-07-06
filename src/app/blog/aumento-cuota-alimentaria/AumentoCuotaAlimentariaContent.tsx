"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function AumentoCuotaAlimentariaContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo solicitar un aumento de cuota alimentaria en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El aumento puede solicitarse mediante una audiencia de conciliación cuando existan cambios en las necesidades del beneficiario o en la capacidad económica de quien debe pagar la cuota alimentaria. Si las partes llegan a un acuerdo, este queda consignado en un acta con efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo procede el aumento de una cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente procede cuando aumentan las necesidades del menor, existen nuevos gastos de educación, salud, alimentación, transporte o vivienda, o cuando cambia la situación económica de alguna de las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede aumentar la cuota alimentaria mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite que las partes modifiquen voluntariamente una cuota alimentaria previamente acordada, evitando en muchos casos un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos se necesitan para solicitar un aumento de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable presentar el acta de conciliación anterior, registro civil del menor, soportes de gastos escolares, facturas médicas, comprobantes de ingresos y cualquier documento que permita demostrar el cambio de circunstancias.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede solicitar el aumento de la cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La solicitud puede ser presentada por quien represente legalmente al menor o por el beneficiario de la obligación alimentaria cuando existan razones que justifiquen modificar el valor establecido.",
        },
      },
      {
        "@type": "Question",
        name: "¿Existe un porcentaje fijo para aumentar la cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. En Colombia no existe un porcentaje obligatorio. Cada caso se analiza de forma individual teniendo en cuenta las necesidades del beneficiario y la capacidad económica del obligado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si la otra parte no acepta aumentar la cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si durante la conciliación no se alcanza un acuerdo, podrán utilizarse los mecanismos legales previstos por la legislación colombiana para solicitar la revisión de la cuota alimentaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿La nueva cuota alimentaria tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando el acuerdo se formaliza mediante un acta de conciliación, este produce efectos jurídicos y puede exigirse legalmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cada cuánto tiempo puede modificarse una cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La ley no establece un plazo específico. La cuota puede revisarse cuando existan cambios importantes en las necesidades del beneficiario o en la capacidad económica de quien debe cumplir la obligación alimentaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué gastos pueden justificar un aumento de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden justificar el incremento gastos relacionados con educación, salud, alimentación, vivienda, transporte, actividades extracurriculares, terapias, medicamentos y otras necesidades propias del beneficiario.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario contratar un abogado para solicitar un aumento de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, puede ser recomendable recibir asesoría jurídica para preparar adecuadamente la solicitud y los documentos que respalden la modificación de la cuota alimentaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede después de firmar el nuevo acuerdo de alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El nuevo acuerdo reemplaza o modifica las condiciones anteriores y las partes quedan obligadas a cumplir las nuevas obligaciones establecidas en el acta de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede aumentarse nuevamente la cuota alimentaria en el futuro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Siempre que existan nuevas circunstancias que justifiquen una modificación, las partes podrán solicitar otra conciliación o acudir a los mecanismos legales correspondientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ventajas tiene aumentar la cuota alimentaria mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación suele ser más rápida, menos costosa y más flexible que un proceso judicial, además permite que las partes construyan conjuntamente un acuerdo adaptado a sus necesidades.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si no se cumple el nuevo acuerdo de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando el acuerdo consta en un acta de conciliación, puede hacerse exigible por las vías legales previstas en Colombia en caso de incumplimiento.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <section className={styles.articleWrapper}>
        <motion.article
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              Conciliación familiar en Colombia
            </span>

            <h1 className={styles.title}>
              ¿Cómo solicitar el aumento de la cuota alimentaria en Colombia?
              Requisitos, conciliación y proceso paso a paso
            </h1>

            <p className={styles.heroText}>
              Las necesidades de los hijos cambian con el paso del tiempo.
              Gastos de educación, salud, transporte, vivienda y recreación
              pueden aumentar significativamente, haciendo necesario revisar la
              cuota alimentaria previamente acordada.
            </p>

            <p className={styles.heroText}>
              En Colombia, una de las alternativas más rápidas y efectivas para
              actualizar una cuota alimentaria es acudir a un proceso de
              conciliación familiar.
            </p>

            <p className={styles.heroText}>
              La conciliación permite que las partes revisen el acuerdo
              existente y establezcan nuevas condiciones de forma voluntaria,
              evitando procesos judiciales más extensos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo procede el aumento de la cuota alimentaria en Colombia?
            </h2>

            <p className={styles.paragraph}>
              El aumento puede solicitarse cuando existen cambios importantes
              respecto a las condiciones que dieron origen al acuerdo inicial.
            </p>

            <p className={styles.paragraph}>
              Lo más importante es demostrar que las necesidades del
              beneficiario han aumentado o que existen nuevas circunstancias que
              justifican revisar el valor establecido anteriormente.
            </p>

            <div className={styles.highlightBox}>
              <p>
                El crecimiento del menor, nuevos gastos educativos, tratamientos
                médicos o cambios económicos pueden motivar una solicitud de
                aumento de cuota alimentaria.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Casos en los que un juez o un conciliador pueden aprobar el
              aumento de la cuota alimentaria
            </h2>

            <ul className={styles.list}>
              <li>Incremento de gastos escolares.</li>
              <li>Ingreso a educación superior.</li>
              <li>Nuevos gastos médicos o terapias.</li>
              <li>Aumento del costo de vida.</li>
              <li>Incremento en gastos de transporte.</li>
              <li>Cambios en las condiciones económicas familiares.</li>
              <li>Necesidades especiales del menor.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo solicitar el aumento de la cuota alimentaria mediante
              conciliación?
            </h2>

            <p className={styles.paragraph}>
              Las partes son citadas a una audiencia donde pueden exponer las
              razones que justifican la modificación del acuerdo anterior.
            </p>

            <p className={styles.paragraph}>
              El conciliador facilita el diálogo y ayuda a construir un acuerdo
              equilibrado que tenga en cuenta tanto las necesidades del menor
              como la capacidad económica de quien realiza los aportes.
            </p>

            <p className={styles.paragraph}>
              Si existe acuerdo, se firma una nueva acta que reemplaza o
              modifica las condiciones previamente pactadas.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Paso a paso para solicitar el aumento de la cuota alimentaria
            </h2>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <span className={styles.step}>1</span>

                <div>
                  <h3>Reunir la documentación</h3>

                  <p>
                    Organiza los documentos que demuestren las nuevas
                    necesidades del menor y los soportes económicos necesarios
                    para justificar la solicitud.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.step}>2</span>

                <div>
                  <h3>Solicitar la conciliación</h3>

                  <p>
                    Presenta la solicitud ante un centro de conciliación
                    autorizado para citar a la otra parte.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.step}>3</span>

                <div>
                  <h3>Asistir a la audiencia</h3>

                  <p>
                    Durante la audiencia ambas partes podrán exponer sus
                    argumentos, presentar pruebas y plantear propuestas de
                    solución.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.step}>4</span>

                <div>
                  <h3>Firma del nuevo acuerdo</h3>

                  <p>
                    Si existe consenso, el nuevo valor de la cuota alimentaria
                    quedará consignado en un acta de conciliación con efectos
                    jurídicos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ventajas de aumentar la cuota alimentaria mediante conciliación y
              no mediante demanda
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Rapidez</h3>
                <p>
                  Permite actualizar la cuota en menos tiempo que un proceso
                  judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menor conflicto</h3>
                <p>
                  Favorece acuerdos construidos mediante diálogo y cooperación.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Validez jurídica</h3>
                <p>
                  El nuevo acuerdo tiene efectos legales y puede exigirse en
                  caso de incumplimiento.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos necesarios para solicitar el aumento de la cuota
              alimentaria
            </h2>

            <ul className={styles.list}>
              <li>Acta de conciliación anterior.</li>
              <li>Registro civil del menor.</li>
              <li>Soportes de gastos escolares.</li>
              <li>Facturas médicas o tratamientos.</li>
              <li>Documentación relacionada con ingresos y egresos.</li>
              <li>Pruebas de nuevas necesidades económicas.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué hacer si no hay acuerdo sobre el aumento de la cuota
              alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Cuando las partes no logran llegar a un consenso durante la
              conciliación, pueden existir otras alternativas legales para
              solicitar la revisión de la cuota alimentaria.
            </p>

            <p className={styles.paragraph}>
              Cada situación debe analizarse individualmente teniendo en cuenta
              las circunstancias particulares del caso.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo se calcula el aumento de la cuota alimentaria en Colombia?
            </h2>

            <p className={styles.paragraph}>
              No existe una fórmula única para determinar el aumento de una
              cuota alimentaria. Cada caso debe analizarse de manera individual
              teniendo en cuenta las necesidades actuales del menor y la
              capacidad económica de la persona obligada a suministrar los
              alimentos.
            </p>

            <p className={styles.paragraph}>
              Durante la conciliación o en un eventual proceso judicial se
              evalúan las circunstancias particulares de la familia para
              establecer un valor que sea proporcional, razonable y suficiente
              para garantizar el bienestar del beneficiario.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Necesidades del menor</h3>

                <p>
                  Se revisan gastos relacionados con alimentación, vivienda,
                  salud, educación, transporte, vestuario, recreación y demás
                  necesidades propias de su desarrollo.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Capacidad económica</h3>

                <p>
                  También se analiza la situación económica de quien debe pagar
                  la cuota, incluyendo ingresos, patrimonio, obligaciones y
                  demás circunstancias financieras relevantes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Cambios en las condiciones</h3>

                <p>
                  El aumento puede justificarse cuando existen nuevos gastos o
                  cuando han cambiado significativamente las condiciones
                  económicas de cualquiera de las partes.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pruebas ayudan a justificar el aumento de la cuota
              alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Entre mayor sea la evidencia presentada, más sencillo será
              demostrar que las circunstancias han cambiado y que existe la
              necesidad de revisar el valor de la cuota alimentaria.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Gastos educativos</h3>

                <p>
                  Matrículas, pensiones, útiles escolares, uniformes, transporte
                  y demás costos relacionados con la educación.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Gastos médicos</h3>

                <p>
                  Fórmulas, tratamientos, terapias, medicamentos, consultas y
                  demás soportes relacionados con la salud.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Ingresos y egresos</h3>

                <p>
                  Certificados laborales, desprendibles de pago, declaraciones y
                  otros documentos que permitan acreditar la situación
                  económica.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pasa si el otro padre no acepta aumentar la cuota
              alimentaria?
            </h2>

            <p className={styles.paragraph}>
              No siempre es posible llegar a un acuerdo durante la conciliación.
              Cuando una de las partes considera que no existen razones
              suficientes para modificar la cuota, el conciliador dejará
              constancia del resultado de la audiencia.
            </p>

            <p className={styles.paragraph}>
              Dependiendo de las circunstancias del caso, posteriormente podrá
              acudirse a las autoridades competentes para solicitar la revisión
              judicial del valor de la cuota alimentaria.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación representa una oportunidad para alcanzar
                acuerdos de manera voluntaria, evitando un proceso judicial más
                largo y costoso para ambas partes.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿La cuota alimentaria puede modificarse más de una vez?
            </h2>

            <p className={styles.paragraph}>
              Sí. La cuota alimentaria puede revisarse nuevamente cuando existan
              cambios importantes en las necesidades del beneficiario o en la
              capacidad económica de quien realiza los aportes.
            </p>

            <p className={styles.paragraph}>
              El crecimiento de los hijos, el ingreso a la universidad,
              tratamientos médicos, variaciones en el costo de vida o cambios
              laborales son algunas de las circunstancias que podrían justificar
              nuevas modificaciones mediante conciliación o por los mecanismos
              legales correspondientes.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Conciliación o demanda: ¿cuál es la mejor opción para aumentar la
              cuota alimentaria?
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Conciliación</h3>

                <ul className={styles.list}>
                  <li>Proceso generalmente más rápido.</li>
                  <li>Menores costos.</li>
                  <li>Las partes construyen el acuerdo.</li>
                  <li>Favorece el diálogo.</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>Proceso judicial</h3>

                <ul className={styles.list}>
                  <li>Interviene un juez.</li>
                  <li>Puede tomar más tiempo.</li>
                  <li>Existe una decisión judicial.</li>
                  <li>Se utiliza cuando no hay acuerdo.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de actualizar oportunamente la cuota alimentaria
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Protección del menor</h3>

                <p>
                  Permite cubrir adecuadamente las necesidades actuales de
                  alimentación, educación, salud y bienestar.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Evita conflictos futuros</h3>

                <p>
                  Mantener los acuerdos actualizados disminuye las diferencias
                  entre las partes y facilita el cumplimiento de las
                  obligaciones.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor seguridad jurídica</h3>

                <p>
                  Los acuerdos formalizados mediante conciliación generan
                  certeza para ambas partes y pueden exigirse legalmente en caso
                  de incumplimiento.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Quién puede solicitar un aumento de la cuota alimentaria en
              Colombia?
            </h2>

            <p className={styles.paragraph}>
              La solicitud de aumento de cuota alimentaria puede ser presentada
              por la persona que representa al menor de edad o al beneficiario
              de la obligación alimentaria cuando considere que el valor fijado
              anteriormente ya no cubre adecuadamente sus necesidades.
            </p>

            <p className={styles.paragraph}>
              En muchos casos, el incremento se solicita porque han aumentado
              los gastos de educación, alimentación, salud, transporte,
              vivienda, actividades extracurriculares o cualquier otra necesidad
              relacionada con el desarrollo integral del menor.
            </p>

            <p className={styles.paragraph}>
              Antes de iniciar un proceso judicial, es posible acudir a un
              centro de conciliación para intentar modificar el acuerdo
              existente mediante una nueva audiencia de conciliación.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Siempre será necesario analizar las necesidades actuales del
                beneficiario y la capacidad económica de quien debe pagar la
                cuota alimentaria para determinar si resulta procedente
                solicitar su incremento.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Factores que se analizan para aumentar una cuota alimentaria
            </h2>

            <p className={styles.paragraph}>
              No existe un porcentaje fijo para incrementar una cuota
              alimentaria en Colombia. Cada caso se estudia individualmente
              teniendo en cuenta las circunstancias particulares del menor y de
              los padres.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Necesidades del menor</h3>

                <p>
                  Se revisan gastos de alimentación, educación, salud, vivienda,
                  transporte, recreación, vestuario y demás necesidades propias
                  de su edad.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Capacidad económica</h3>

                <p>
                  También se analiza la capacidad económica actual del obligado
                  a pagar alimentos, incluyendo ingresos, patrimonio y demás
                  obligaciones.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Cambios posteriores</h3>

                <p>
                  Se valoran las variaciones ocurridas desde que se fijó la
                  cuota alimentaria, tanto en los gastos del menor como en la
                  situación económica de las partes.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cada cuánto puede modificarse una cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              La legislación colombiana no establece un plazo específico para
              solicitar el aumento de una cuota alimentaria. La modificación
              puede solicitarse siempre que existan cambios relevantes que
              justifiquen revisar el acuerdo previamente celebrado.
            </p>

            <p className={styles.paragraph}>
              Por ejemplo, el ingreso del menor a una nueva etapa educativa,
              tratamientos médicos permanentes, incrementos importantes en el
              costo de vida o mejoras significativas en la capacidad económica
              del alimentante pueden justificar una nueva conciliación.
            </p>

            <p className={styles.paragraph}>
              Cada solicitud debe evaluarse individualmente para determinar si
              existen fundamentos suficientes para modificar la obligación
              alimentaria.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede después de firmar el acuerdo de aumento de cuota
              alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Una vez las partes llegan a un acuerdo durante la conciliación, el
              nuevo valor de la cuota alimentaria queda consignado en un acta
              que produce efectos jurídicos.
            </p>

            <ul className={styles.list}>
              <li>La nueva cuota reemplaza o modifica la anterior.</li>

              <li>Las partes adquieren nuevas obligaciones de cumplimiento.</li>

              <li>
                El acuerdo puede exigirse legalmente en caso de incumplimiento.
              </li>

              <li>
                Se reducen las probabilidades de iniciar un proceso judicial.
              </li>

              <li>
                El acuerdo brinda mayor seguridad jurídica para ambas partes.
              </li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                Un acuerdo claro, con fechas, valores y forma de pago definidos,
                disminuye futuros conflictos y facilita su cumplimiento.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores frecuentes al solicitar un aumento de cuota alimentaria
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>No llevar soportes</h3>

                <p>
                  Solicitar el aumento sin documentos que demuestren las nuevas
                  necesidades del menor puede dificultar la negociación.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Pedir valores sin justificación</h3>

                <p>
                  Es importante que el incremento solicitado corresponda a
                  necesidades reales y verificables.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>No actualizar el acuerdo</h3>

                <p>
                  Aunque exista un acuerdo verbal entre las partes, es
                  recomendable formalizarlo mediante una nueva conciliación para
                  otorgarle efectos jurídicos.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre el aumento de la cuota alimentaria en
              Colombia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La cuota puede aumentar varias veces?</h3>
                <p>
                  Sí. Siempre que existan razones justificadas puede revisarse
                  nuevamente.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Es necesario un nuevo acuerdo?</h3>
                <p>
                  Sí. La modificación debe quedar formalmente registrada para
                  generar efectos jurídicos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede hacerse virtualmente?</h3>
                <p>
                  Muchos centros de conciliación ofrecen audiencias virtuales
                  para facilitar el trámite.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas modificar una cuota alimentaria?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, aumento de cuota
              alimentaria, acuerdos para menores de edad y procesos de
              conciliación en Bogotá y Colombia.
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
