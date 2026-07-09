"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un acta de conciliación familiar en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un documento legal donde las partes establecen acuerdos sobre alimentos, custodia, visitas y obligaciones familiares con validez jurídica en Colombia.",
      },
    },
    {
      "@type": "Question",
      name: "¿La conciliación familiar tiene validez legal en Bogotá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En Bogotá y Colombia, las actas de conciliación familiar tienen efectos legales y pueden exigirse judicialmente en caso de incumplimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué temas se pueden conciliar en familia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuota alimentaria, custodia, visitas, gastos escolares, comunicación entre padres y acuerdos de crianza.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Acta de conciliación familiar en Colombia: modelo, ejemplo y guía completa",
  description:
    "Modelo de acta de conciliación familiar en Colombia y Bogotá. Ejemplos sobre cuota alimentaria, custodia, visitas y acuerdos familiares con validez legal.",
  author: {
    "@type": "Organization",
    name: "Centro de Conciliación",
  },
  publisher: {
    "@type": "Organization",
    name: "Centro de Conciliación",
  },
};

export default function DocumentoFamiliaContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <div
        className={styles.wrapper}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className={styles.container}>
          <motion.article
            id="documento-familia"
            className={styles.card}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* HERO */}
            <h1 className={styles.title} itemProp="headline">
              Acta de conciliación familiar en Colombia: modelo, ejemplo,
              requisitos y cómo elaborar un acuerdo con validez legal
            </h1>

            <p className={styles.paragraph} itemProp="description">
              El <strong>acta de conciliación familiar en Colombia</strong> es
              uno de los documentos más utilizados para resolver conflictos
              relacionados con{" "}
              <strong>
                cuota alimentaria, custodia de hijos, régimen de visitas, gastos
                extraordinarios, responsabilidades parentales y otros acuerdos
                familiares
              </strong>{" "}
              sin necesidad de iniciar un proceso judicial. Su finalidad es
              permitir que las partes lleguen a soluciones voluntarias
              respaldadas por la ley.
            </p>

            <p className={styles.paragraph}>
              En ciudades como{" "}
              <strong>
                Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y el resto del
                país
              </strong>
              , miles de familias recurren cada año a los centros de
              conciliación para formalizar acuerdos que brinden estabilidad
              jurídica y protejan el interés superior de los niños, niñas y
              adolescentes.
            </p>

            <p className={styles.paragraph}>
              Además de explicar{" "}
              <strong>qué es un acta de conciliación familiar</strong>, en esta
              guía encontrarás un modelo de referencia, los elementos que debe
              contener, los efectos legales que produce, los errores más comunes
              al elaborarla y las situaciones en las que puede modificarse
              posteriormente.
            </p>

            <p className={styles.paragraph}>
              Si estás buscando un{" "}
              <strong>modelo de acta de conciliación familiar</strong> o deseas
              comprender cómo funciona este procedimiento en Colombia, aquí
              encontrarás una explicación práctica orientada tanto para padres
              como para cualquier persona que necesite formalizar acuerdos
              familiares de manera segura.
            </p>

            <div className={styles.highlightBox}>
              <p>
                En Bogotá y Colombia, una conciliación familiar bien redactada
                ayuda a prevenir conflictos futuros y protege especialmente los
                derechos de los menores de edad.
              </p>
            </div>

            {/* QUE ES UN ACTA DE CONCILIACION FAMILIAR */}
            <h2 className={styles.subtitle}>
              ¿Qué es un acta de conciliación familiar en Colombia y para qué
              sirve?
            </h2>

            <p className={styles.paragraph}>
              El <strong>acta de conciliación familiar</strong> es el documento
              que recoge los acuerdos alcanzados por las partes durante una
              audiencia de conciliación. En Colombia, este documento tiene
              efectos jurídicos y permite dejar claramente definidas las
              obligaciones y compromisos asumidos por cada persona, reduciendo
              el riesgo de nuevos conflictos y brindando mayor seguridad para
              todos los involucrados.
            </p>

            <p className={styles.paragraph}>
              Este tipo de conciliación busca que los integrantes de una familia
              encuentren soluciones mediante el diálogo y la negociación, con la
              orientación de un conciliador imparcial. Cuando se logra un
              acuerdo, las condiciones quedan consignadas en el acta, lo que
              facilita su cumplimiento y ofrece un respaldo legal frente a
              eventuales incumplimientos.
            </p>

            <p className={styles.paragraph}>
              En la práctica, una conciliación familiar evita que muchas
              controversias lleguen a un proceso judicial, permitiendo
              resolverlas en menos tiempo y con mayor flexibilidad. Esto resulta
              especialmente importante cuando existen hijos menores de edad, ya
              que favorece la construcción de acuerdos que prioricen su
              bienestar y estabilidad.
            </p>

            <p className={styles.paragraph}>
              Aunque suele asociarse principalmente con la cuota alimentaria,
              este documento puede regular diferentes aspectos de la relación
              familiar, siempre que el asunto sea legalmente conciliable y
              exista disposición de las partes para llegar a un acuerdo.
            </p>

            <h3 className={styles.smallSubtitle}>
              Los asuntos familiares que con mayor frecuencia se incluyen en un
              acta de conciliación son:
            </h3>

            <ul className={styles.list}>
              <li>
                Cuota alimentaria para hijos menores o mayores cuando
                corresponda.
              </li>
              <li>Custodia y cuidado personal.</li>
              <li>Régimen de visitas.</li>
              <li>
                Distribución de vacaciones, fines de semana y fechas especiales.
              </li>
              <li>Gastos médicos, odontológicos y escolares.</li>
              <li>Actividades extracurriculares.</li>
              <li>Forma de comunicación entre padres e hijos.</li>
              <li>Responsabilidades económicas extraordinarias.</li>
              <li>Acuerdos relacionados con la crianza compartida.</li>
              <li>Otros compromisos familiares permitidos por la ley.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                Un acta de conciliación bien elaborada no solo ayuda a
                solucionar el conflicto actual, sino que también previene
                futuros desacuerdos al dejar establecidos compromisos claros,
                fechas, valores, responsabilidades y la forma en que deberán
                cumplirse.
              </p>
            </div>

            {/* QUE DEBE INCLUIR UN ACTA DE CONCILIACION FAMILIAR */}
            <h2 className={styles.subtitle}>
              ¿Qué debe incluir un acta de conciliación familiar para que tenga
              validez legal?
            </h2>

            <p className={styles.paragraph}>
              Uno de los errores más frecuentes consiste en elaborar acuerdos
              demasiado generales o ambiguos. Para evitar futuras discusiones,
              el acta debe contener obligaciones claras, específicas y
              fácilmente verificables por ambas partes.
            </p>

            <p className={styles.paragraph}>
              Mientras más detallado sea el acuerdo, menor será la posibilidad
              de interpretaciones diferentes o nuevos conflictos. Por esta
              razón, es recomendable establecer fechas, valores, porcentajes,
              responsabilidades y mecanismos de cumplimiento.
            </p>

            <h3 className={styles.smallSubtitle}>
              Entre los elementos que normalmente hacen parte de un acta de
              conciliación familiar se encuentran:
            </h3>

            <ul className={styles.list}>
              <li>Identificación completa de las partes.</li>
              <li>Información del menor o de los beneficiarios.</li>
              <li>Objeto de la conciliación.</li>
              <li>Valor actualizado de la cuota alimentaria.</li>
              <li>Fecha, lugar y forma de pago.</li>
              <li>Distribución de gastos extraordinarios.</li>
              <li>Custodia y cuidado personal.</li>
              <li>Régimen de visitas con horarios definidos.</li>
              <li>Vacaciones, fechas especiales y celebraciones.</li>
              <li>Medios de comunicación con los hijos.</li>
              <li>Procedimiento para futuras modificaciones.</li>
              <li>Firma de las partes y del conciliador.</li>
            </ul>

            <div className={styles.note}>
              Entre más específico sea el acuerdo, mayor seguridad jurídica
              tendrán ambas partes y menores serán las posibilidades de nuevos
              conflictos familiares.
            </div>

            {/* MODELO DE ACTA DE CONCILIACION FAMILIAR EN COLOMBIA */}
            <h2 className={styles.subtitle}>
              Modelo de acta de conciliación familiar en Colombia (Ejemplo de
              referencia)
            </h2>

            <p className={styles.paragraph}>
              Muchas personas buscan un{" "}
              <strong>modelo de acta de conciliación familiar</strong>
              para comprender cómo se estructuran este tipo de documentos.
              Aunque cada caso debe adaptarse a las circunstancias particulares
              de la familia y a los acuerdos alcanzados durante la audiencia, la
              siguiente estructura sirve como una guía general sobre los
              elementos que normalmente contiene un acta de conciliación con
              efectos legales en Colombia.
            </p>

            <p className={styles.paragraph}>
              Este ejemplo no reemplaza el documento elaborado por un centro de
              conciliación, pero permite conocer cómo suelen organizarse las
              cláusulas, responsabilidades y compromisos que posteriormente
              serán exigibles para las partes.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Cada conciliación es diferente. Los valores, fechas,
                obligaciones y condiciones deben ajustarse a la realidad de cada
                familia y quedar completamente definidos para evitar
                interpretaciones futuras.
              </p>
            </div>

            <pre className={styles.pre}>
              {`ACTA DE CONCILIACIÓN FAMILIAR

Ciudad: _______________________

Fecha: ________________________

Centro de Conciliación: __________________

CONCILIADOR

Nombre: _______________________

PARTES

Padre / Madre:
Nombre:
Documento:
Dirección:
Teléfono:

Padre / Madre:
Nombre:
Documento:
Dirección:
Teléfono:

OBJETO DE LA CONCILIACIÓN

Las partes manifiestan su voluntad de llegar a un acuerdo respecto de las
obligaciones familiares relacionadas con alimentos, custodia, visitas y demás
aspectos derivados del cuidado del menor.

ACUERDOS

PRIMERO.
Custodia del menor.

SEGUNDO.
Régimen de visitas.

TERCERO.
Cuota alimentaria.

CUARTO.
Forma y fecha de pago.

QUINTO.
Gastos extraordinarios.

SEXTO.
Vacaciones y fechas especiales.

SÉPTIMO.
Comunicación entre padres e hijos.

OCTAVO.
Compromisos adicionales.

NOVENO.
Incumplimiento.

Las partes manifiestan haber leído el contenido del acta y aceptan cada uno de
los acuerdos aquí consignados.

_________________________
Firma Parte 1

_________________________
Firma Parte 2

_________________________
Conciliador`}
            </pre>

            <p className={styles.paragraph}>
              En la práctica, el contenido definitivo del acta dependerá de las
              circunstancias particulares del caso. Algunos acuerdos incluyen
              porcentajes para gastos extraordinarios, reglas sobre cambios de
              domicilio, autorización para viajes, comunicación virtual entre
              padres e hijos o mecanismos para revisar la cuota alimentaria
              cuando cambien las condiciones económicas.
            </p>

            <p className={styles.paragraph}>
              Lo más importante es que cada obligación quede redactada de manera
              clara, específica y verificable, evitando expresiones ambiguas que
              puedan generar nuevos conflictos con el paso del tiempo.
            </p>

            {/* EFECTOS LEGALES DEL ACTA DE CONCILIACION FAMILIAR EN COLOMBIA */}
            <h2 className={styles.subtitle}>
              ¿Qué efectos legales tiene un acta de conciliación familiar en
              Colombia?
            </h2>

            <p className={styles.paragraph}>
              Una de las principales ventajas de acudir a un centro de
              conciliación consiste en que los acuerdos alcanzados no son
              simples compromisos de palabra. Una vez suscrita por las partes y
              el conciliador, el acta adquiere efectos jurídicos reconocidos por
              la legislación colombiana.
            </p>

            <p className={styles.paragraph}>
              Esto significa que los compromisos relacionados con alimentos,
              custodia, visitas, gastos extraordinarios u otras obligaciones
              familiares pueden ser exigidos cuando alguna de las partes
              incumpla lo acordado.
            </p>

            <ul className={styles.list}>
              <li>Hace tránsito a cosa juzgada.</li>

              <li>Presta mérito ejecutivo cuando la ley lo permite.</li>

              <li>Sirve como prueba dentro de un proceso judicial.</li>

              <li>Formaliza las obligaciones asumidas por las partes.</li>

              <li>Brinda mayor seguridad jurídica para padres e hijos.</li>

              <li>Reduce la posibilidad de nuevos conflictos familiares.</li>

              <li>Permite demostrar claramente los compromisos adquiridos.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                Un acta de conciliación correctamente elaborada ofrece
                tranquilidad para las partes, ya que establece derechos y
                obligaciones claras, evitando futuras discusiones sobre aspectos
                que ya fueron acordados durante la audiencia.
              </p>
            </div>

            <p className={styles.paragraph}>
              Si con el paso del tiempo cambian las circunstancias económicas o
              familiares, las partes pueden volver a acudir a un proceso de
              conciliación para modificar los acuerdos existentes, siempre que
              exista fundamento para ello.
            </p>

            {/* ERRORES FREQUENTES EN CONCILIACIONES FAMILIARES EN BOGOTÁ */}
            <h2 className={styles.subtitle}>
              Errores más comunes al elaborar un acta de conciliación familiar
            </h2>

            <p className={styles.paragraph}>
              Una conciliación familiar puede evitar conflictos durante muchos
              años, siempre que los acuerdos queden redactados de manera clara y
              específica. En la práctica, buena parte de los inconvenientes
              posteriores se originan porque el documento contiene cláusulas
              ambiguas, fechas indefinidas o responsabilidades poco precisas.
            </p>

            <p className={styles.paragraph}>
              Antes de firmar un acta es recomendable revisar cada obligación,
              confirmar que ambas partes comprendan su alcance y verificar que
              todos los aspectos importantes hayan quedado incluidos.
            </p>

            <div className={styles.errorGrid}>
              <div className={styles.errorCard}>
                <h4>No definir horarios exactos de visitas</h4>

                <p>
                  Expresiones como "cuando sea posible" o "previo acuerdo"
                  suelen generar nuevas discusiones porque permiten diferentes
                  interpretaciones.
                </p>
              </div>

              <div className={styles.errorCard}>
                <h4>No establecer la forma de pago</h4>

                <p>
                  Es conveniente indicar el valor, la fecha límite, el medio de
                  pago y la cuenta donde deberá realizarse la consignación.
                </p>
              </div>

              <div className={styles.errorCard}>
                <h4>No regular los gastos extraordinarios</h4>

                <p>
                  Educación, salud, medicamentos, uniformes, actividades
                  extracurriculares y otros gastos deberían quedar claramente
                  distribuidos.
                </p>
              </div>

              <div className={styles.errorCard}>
                <h4>Utilizar acuerdos verbales</h4>

                <p>
                  Los compromisos que no quedan escritos son mucho más difíciles
                  de probar en caso de desacuerdo.
                </p>
              </div>

              <div className={styles.errorCard}>
                <h4>No prever cambios futuros</h4>

                <p>
                  Puede resultar útil definir cómo actuar cuando cambien los
                  ingresos, el domicilio del menor o las necesidades familiares.
                </p>
              </div>

              <div className={styles.errorCard}>
                <h4>Firmar sin resolver todas las dudas</h4>

                <p>
                  Antes de suscribir el acta, ambas partes deben comprender
                  completamente el alcance de cada obligación asumida.
                </p>
              </div>
            </div>

            <div className={styles.highlightBox}>
              <p>
                Mientras más claros sean los acuerdos, menores serán las
                posibilidades de que surjan nuevos conflictos familiares en el
                futuro.
              </p>
            </div>

            {/* PREGUNTAS FREQUENTES SOBRE CONCILIACION FAMILIAR EN COLOMBIA */}
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre el acta de conciliación familiar
            </h2>

            <div className={styles.faqContainer}>
              <div className={styles.faqItem}>
                <h4>
                  ¿El acta de conciliación familiar tiene validez jurídica en
                  Colombia?
                </h4>

                <p>
                  Sí. Una vez suscrita por las partes y el conciliador, el acta
                  produce los efectos previstos por la ley y puede servir como
                  fundamento para exigir el cumplimiento de las obligaciones
                  allí pactadas.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>
                  ¿Qué asuntos pueden resolverse mediante conciliación familiar?
                </h4>

                <p>
                  Es posible conciliar temas relacionados con cuota alimentaria,
                  custodia, régimen de visitas, distribución de gastos
                  extraordinarios, acuerdos de crianza, comunicación entre
                  padres e hijos y otras obligaciones familiares permitidas por
                  la ley.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿Puede modificarse un acta de conciliación familiar?</h4>

                <p>
                  Sí. Cuando cambian las circunstancias económicas o familiares,
                  las partes pueden celebrar una nueva conciliación para
                  actualizar los acuerdos previamente suscritos.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>
                  ¿Qué ocurre si una persona incumple el acta de conciliación?
                </h4>

                <p>
                  Dependiendo del contenido del acuerdo y de las normas
                  aplicables, el acta puede utilizarse para exigir el
                  cumplimiento por las vías legales correspondientes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿Es necesario contratar un abogado para conciliar?</h4>

                <p>
                  No siempre. Sin embargo, recibir orientación jurídica puede
                  facilitar la elaboración de acuerdos claros, completos y
                  ajustados a las necesidades de cada familia.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿Cuánto tiempo puede tardar una conciliación familiar?</h4>

                <p>
                  El tiempo varía según cada caso y la disponibilidad de las
                  partes, pero normalmente resulta mucho más ágil que un proceso
                  judicial de familia.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.cta}>
              <strong className={styles.ctaTitle}>
                Asesoría en conciliación familiar en Bogotá y Colombia
              </strong>

              <p className={styles.ctaText}>
                Recibe orientación sobre cuota alimentaria, custodia, visitas,
                acuerdos familiares y conciliación extrajudicial en Bogotá y
                cualquier ciudad de Colombia.
              </p>

              <ul className={styles.ctaList}>
                <li>Revisión de acuerdos familiares.</li>
                <li>Redacción de actas de conciliación.</li>
                <li>Asesoría en alimentos y custodia.</li>
                <li>Orientación jurídica en conflictos familiares.</li>
              </ul>

              <a
                href="https://api.whatsapp.com/send/?phone=573232904786"
                target="_blank"
                className={styles.ctaButton}
              >
                Solicitar asesoría por WhatsApp
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}
