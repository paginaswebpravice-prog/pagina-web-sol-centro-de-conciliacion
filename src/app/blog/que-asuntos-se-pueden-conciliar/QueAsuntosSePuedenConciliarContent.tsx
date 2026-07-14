"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

const conciliacionCategorias = [
  {
    title: "Conciliación civil",
    description:
      "La conciliación civil en Colombia permite resolver conflictos cotidianos entre personas naturales o jurídicas sin necesidad de acudir inmediatamente a un proceso judicial.",
    items: [
      "Deudas y acuerdos de pago",
      "Responsabilidad civil y daños",
      "Incumplimientos contractuales",
      "Problemas entre vecinos",
      "Conflictos de arrendamiento",
      "Obligaciones civiles",
      "Acuerdos económicos",
    ],
  },
  {
    title: "Conciliación de familia",
    description:
      "La conciliación de familia en Bogotá y Colombia es uno de los mecanismos más utilizados para solucionar conflictos familiares de forma rápida y legal.",
    items: [
      "Cuotas de alimentos",
      "Régimen de visitas",
      "Custodia y acuerdos de crianza",
      "Gastos del menor",
      "Separación de bienes",
      "Conflictos familiares",
      "Acuerdos parentales",
    ],
  },
  {
    title: "Conciliación laboral",
    description:
      "La conciliación laboral permite solucionar controversias entre trabajadores y empleadores mediante acuerdos legales verificables y con efectos jurídicos.",
    items: [
      "Liquidaciones laborales",
      "Pagos pendientes",
      "Acuerdos de terminación",
      "Prestaciones sociales",
      "Conciliaciones laborales",
      "Indemnizaciones",
      "Acuerdos entre trabajador y empresa",
    ],
  },
  {
    title: "Conciliación comercial",
    description:
      "Las empresas en Bogotá y Colombia utilizan la conciliación comercial para resolver conflictos financieros y contractuales de manera más eficiente.",
    items: [
      "Facturas y servicios prestados",
      "Acuerdos entre socios",
      "Incumplimientos contractuales",
      "Recuperación de cartera",
      "Negociación de obligaciones comerciales",
      "Acuerdos empresariales",
      "Cobro de obligaciones",
    ],
  },
];

export default function QueAsuntosSePuedenConciliarContent() {
  return (
    <>
      <section id="casos" className={styles.articleWrapper}>
        <motion.article
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* HERO */}
          {/* HERO */}
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              Guía práctica sobre conciliación en Colombia
            </span>

            <h1 className={styles.title}>
              ¿Qué asuntos se pueden conciliar en Colombia? Guía completa con
              ejemplos reales, requisitos y casos más frecuentes
            </h1>

            <p className={styles.heroText}>
              Una de las preguntas más comunes antes de iniciar un proceso
              conciliatorio es{" "}
              <strong>
                qué conflictos pueden resolverse mediante conciliación en
                Colombia
              </strong>
              . Aunque muchas personas asocian este mecanismo únicamente con
              deudas o problemas entre vecinos, la realidad es que la
              legislación colombiana permite conciliar una gran variedad de
              asuntos civiles, comerciales, familiares y, en determinados casos,
              laborales.
            </p>

            <p className={styles.heroText}>
              Conocer qué casos son conciliables permite ahorrar tiempo, evitar
              procesos judiciales extensos y encontrar soluciones mediante
              acuerdos construidos por las propias partes. Además, en algunos
              conflictos la conciliación constituye un requisito previo antes de
              presentar una demanda.
            </p>

            <p className={styles.heroText}>
              En esta guía encontrarás los principales asuntos que pueden
              resolverse ante un centro de conciliación, cuándo procede este
              mecanismo, cuáles son sus límites y qué beneficios ofrece frente a
              un proceso judicial tradicional.
            </p>
          </div>

          {/* INTRO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué asuntos se pueden conciliar según la legislación colombiana?
            </h2>

            <p className={styles.paragraph}>
              La conciliación es un mecanismo alternativo de solución de
              conflictos que permite a las partes llegar a acuerdos con el
              acompañamiento de un conciliador imparcial. Su finalidad consiste
              en resolver controversias de manera voluntaria, evitando en muchos
              casos un proceso judicial más largo y costoso.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, no todos los conflictos pueden someterse a
              conciliación. En términos generales, únicamente pueden conciliarse
              aquellos asuntos en los que las personas tengan la facultad legal
              de disponer de sus derechos. Por esta razón existen materias
              expresamente conciliables y otras que, por su naturaleza, deben
              ser resueltas exclusivamente por un juez o por una autoridad
              competente.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Antes de iniciar cualquier trámite es recomendable verificar si
                el asunto admite conciliación, pues esto evita pérdida de tiempo
                y permite escoger el procedimiento jurídico más adecuado para
                proteger los derechos de las partes.
              </p>
            </div>
          </div>

          {/* CATEGORÍAS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Principales asuntos que se pueden conciliar en Colombia
            </h2>

            <p className={styles.paragraph}>
              Los centros de conciliación atienden diariamente conflictos
              relacionados con obligaciones económicas, relaciones familiares,
              contratos, actividades comerciales y algunas diferencias
              laborales. La posibilidad de llegar a un acuerdo dependerá de que
              el asunto sea legalmente conciliable y de la voluntad de las
              partes para negociar.
            </p>

            <p className={styles.paragraph}>
              A continuación encontrarás las materias que con mayor frecuencia
              son resueltas mediante conciliación extrajudicial en Colombia.
            </p>

            <div className={styles.cardsGrid}>
              {conciliacionCategorias.map((category, index) => (
                <motion.div
                  key={index}
                  className={styles.categoryCard}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + index * 0.12,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                >
                  <h3>{category.title}</h3>

                  <p className={styles.cardDescription}>
                    {category.description}
                  </p>

                  <ul className={styles.list}>
                    {category.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EJEMPLOS DE CONFLICTOS QUE SE PUEDEN CONCILIAR */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ejemplos de conflictos que normalmente pueden resolverse mediante
              conciliación
            </h2>

            <p className={styles.paragraph}>
              Aunque cada caso debe analizarse individualmente, existen
              situaciones que con frecuencia llegan a los centros de
              conciliación porque las partes prefieren encontrar una solución
              negociada antes de iniciar un proceso judicial.
            </p>

            <ul className={styles.list}>
              <li>Acuerdos de pago por deudas entre particulares.</li>
              <li>
                Incumplimiento de contratos de compraventa o prestación de
                servicios.
              </li>
              <li>Problemas relacionados con arrendamientos urbanos.</li>
              <li>
                Conflictos entre vecinos por ruidos, daños o uso de zonas
                comunes.
              </li>
              <li>Discrepancias entre socios o empresas.</li>
              <li>Pago de facturas y recuperación de cartera.</li>
              <li>
                Liquidaciones laborales y prestaciones sociales pendientes.
              </li>
              <li>
                Cuotas alimentarias para hijos menores o mayores beneficiarios.
              </li>
              <li>Custodia, visitas y acuerdos de crianza.</li>
              <li>Acuerdos relacionados con separación de bienes.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                En muchos de estos casos, un acuerdo logrado mediante
                conciliación puede evitar meses o incluso años de litigio,
                además de reducir costos y preservar la relación entre las
                partes cuando existe interés en continuar con ella.
              </p>
            </div>
          </div>

          {/* REQUISITOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué requisitos debe cumplir un asunto para poder conciliarse?
            </h2>

            <p className={styles.paragraph}>
              No basta con que exista un conflicto para acudir a un centro de
              conciliación. La controversia debe reunir ciertos requisitos
              establecidos por la legislación colombiana para que el
              procedimiento pueda adelantarse.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.categoryCard}>
                <h3>Derechos disponibles</h3>

                <p className={styles.cardDescription}>
                  Las partes deben tener la posibilidad legal de negociar el
                  derecho objeto del conflicto.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3>Voluntad de negociar</h3>

                <p className={styles.cardDescription}>
                  La conciliación funciona cuando existe disposición para
                  dialogar y construir un acuerdo que beneficie a ambas partes.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3>Conflicto determinado</h3>

                <p className={styles.cardDescription}>
                  Debe existir una controversia concreta y claramente
                  identificable para que el conciliador pueda orientar la
                  audiencia.
                </p>
              </div>
            </div>
          </div>

          {/* ASUNTOS NO CONCILIABLES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué asuntos no pueden resolverse mediante conciliación en
              Colombia?
            </h2>

            <p className={styles.paragraph}>
              Aunque la conciliación es un mecanismo muy amplio, la ley
              colombiana establece ciertos límites. Existen conflictos que no
              pueden solucionarse mediante un acuerdo entre las partes porque
              involucran derechos irrenunciables, asuntos de orden público o
              materias cuya decisión depende exclusivamente de una autoridad
              judicial o administrativa.
            </p>

            <p className={styles.paragraph}>
              Antes de iniciar el trámite es recomendable verificar si el
              conflicto es conciliable. De esta manera se evita invertir tiempo
              en un procedimiento que legalmente no puede prosperar y se
              identifica la vía adecuada para proteger los derechos
              involucrados.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.categoryCard}>
                <h3>Procesos penales</h3>

                <p className={styles.cardDescription}>
                  Determinados delitos deben ser conocidos directamente por la
                  autoridad competente y no pueden solucionarse mediante
                  conciliación extrajudicial.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3>Derechos irrenunciables</h3>

                <p className={styles.cardDescription}>
                  Algunos derechos protegidos por la Constitución o por normas
                  especiales no pueden ser objeto de negociación entre las
                  partes.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3>Asuntos expresamente excluidos por la ley</h3>

                <p className={styles.cardDescription}>
                  Existen materias que únicamente pueden ser resueltas mediante
                  decisión judicial o administrativa según lo dispuesto por la
                  legislación colombiana.
                </p>
              </div>
            </div>

            <div className={styles.highlightBox}>
              <p>
                Cada conflicto tiene características particulares. Por ello,
                antes de solicitar una audiencia de conciliación es conveniente
                recibir orientación para confirmar si el asunto puede tramitarse
                por este mecanismo.
              </p>
            </div>
          </div>

          {/* NO SE ALCANZA UN ACUERDO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si durante la conciliación no se alcanza un acuerdo?
            </h2>

            <p className={styles.paragraph}>
              No todas las audiencias terminan con un acuerdo entre las partes.
              En ocasiones las posiciones son muy diferentes o simplemente no
              existe la disposición necesaria para negociar. Sin embargo, esto
              no significa que la persona pierda automáticamente la posibilidad
              de ejercer sus derechos.
            </p>

            <p className={styles.paragraph}>
              Cuando la conciliación finaliza sin acuerdo, dependiendo del tipo
              de conflicto y de la normatividad aplicable, la parte interesada
              podrá acudir posteriormente a la jurisdicción competente para que
              sea un juez quien resuelva la controversia.
            </p>

            <p className={styles.paragraph}>
              Incluso cuando no se logra conciliar, la audiencia suele ser útil
              porque permite identificar con mayor claridad los puntos de
              desacuerdo, conocer la posición de la otra parte y, en algunos
              casos, abrir la posibilidad de una negociación futura.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.categoryCard}>
                <h3>No se pierde el derecho a reclamar</h3>

                <p className={styles.cardDescription}>
                  Si la ley lo permite, la persona podrá acudir posteriormente
                  ante la autoridad judicial competente.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3>Quedan claros los desacuerdos</h3>

                <p className={styles.cardDescription}>
                  La audiencia permite identificar exactamente cuáles son los
                  puntos que impiden llegar a un acuerdo.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3>Puede intentarse una nueva negociación</h3>

                <p className={styles.cardDescription}>
                  En algunos conflictos las partes retoman el diálogo tiempo
                  después y consiguen resolver sus diferencias mediante un nuevo
                  acercamiento.
                </p>
              </div>
            </div>
          </div>

          {/* BENEFICIOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué muchas personas prefieren intentar una conciliación antes
              de demandar?
            </h2>

            <p className={styles.paragraph}>
              En los últimos años la conciliación se ha convertido en una de las
              alternativas más utilizadas para solucionar conflictos civiles,
              comerciales, familiares y laborales. Esto se debe a que permite
              encontrar soluciones mediante el diálogo, evitando en muchos casos
              procesos judiciales largos y costosos.
            </p>

            <p className={styles.paragraph}>
              Además del ahorro de tiempo, la conciliación ofrece un espacio
              neutral en el que ambas partes pueden construir acuerdos adaptados
              a sus necesidades, algo que normalmente no ocurre dentro de un
              proceso judicial tradicional.
            </p>

            <ul className={styles.list}>
              <li>
                Reduce significativamente el tiempo para resolver el conflicto.
              </li>

              <li>Disminuye los costos asociados a un proceso judicial.</li>

              <li>Favorece acuerdos personalizados entre las partes.</li>

              <li>
                Ayuda a conservar relaciones familiares, comerciales o
                vecinales.
              </li>

              <li>Brinda mayor confidencialidad durante la negociación.</li>

              <li>
                Permite soluciones flexibles que un juez normalmente no podría
                ordenar.
              </li>

              <li>
                El acuerdo alcanzado puede tener plenos efectos jurídicos.
              </li>

              <li>
                Contribuye a descongestionar la administración de justicia.
              </li>
            </ul>
          </div>

          {/* PREPARARSE */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo prepararse antes de asistir a una audiencia de conciliación?
            </h2>

            <p className={styles.paragraph}>
              Una conciliación suele ser más efectiva cuando las partes llegan
              preparadas y con claridad sobre el conflicto que desean resolver.
              Aunque el procedimiento es menos formal que un proceso judicial,
              presentar la información organizada facilita el diálogo y aumenta
              las probabilidades de alcanzar un acuerdo satisfactorio.
            </p>

            <p className={styles.paragraph}>
              Antes de la audiencia conviene revisar los hechos, identificar
              cuáles son las pretensiones, recopilar los documentos relevantes y
              definir cuál sería una solución razonable para ambas partes. Esto
              permite que la conversación sea más productiva y evita discusiones
              innecesarias.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.categoryCard}>
                <h3>Organiza la documentación</h3>

                <p className={styles.cardDescription}>
                  Reúne contratos, facturas, recibos, comprobantes de pago,
                  mensajes, correos electrónicos o cualquier documento
                  relacionado con el conflicto.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3>Define tu propuesta</h3>

                <p className={styles.cardDescription}>
                  Tener una propuesta clara facilita la negociación y permite
                  encontrar puntos de encuentro durante la audiencia.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3>Mantén una actitud abierta</h3>

                <p className={styles.cardDescription}>
                  La conciliación busca construir soluciones mediante el
                  diálogo, por lo que escuchar a la otra parte resulta
                  fundamental.
                </p>
              </div>
            </div>
          </div>

          {/* ERRORES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores frecuentes que pueden dificultar una conciliación
            </h2>

            <p className={styles.paragraph}>
              Muchas conciliaciones no fracasan por falta de fundamento
              jurídico, sino porque las partes llegan sin preparación o con
              expectativas poco realistas. Evitar estos errores mejora
              considerablemente las posibilidades de alcanzar un acuerdo
              beneficioso para todos.
            </p>

            <ul className={styles.list}>
              <li>Asistir sin conocer exactamente cuál es el conflicto.</li>

              <li>No llevar documentos que respalden la reclamación.</li>

              <li>
                Pretender obtener únicamente beneficios para una de las partes.
              </li>

              <li>Negarse completamente a escuchar propuestas diferentes.</li>

              <li>
                Esperar hasta el último momento cuando los términos legales
                están por vencer.
              </li>

              <li>
                No buscar orientación jurídica cuando el caso presenta mayor
                complejidad.
              </li>

              <li>
                Confundir la conciliación con un juicio donde necesariamente
                existe un ganador y un perdedor.
              </li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                La mayoría de los acuerdos exitosos se construyen cuando ambas
                partes llegan con disposición para dialogar, conocen sus
                derechos y entienden cuáles son los beneficios de alcanzar una
                solución voluntaria.
              </p>
            </div>
          </div>

          {/* IMPORTANTE */}
          <div className={styles.noteBox}>
            <h3>
              Antes de iniciar una conciliación, verifica si tu caso realmente
              puede tramitarse por este mecanismo
            </h3>

            <p>
              Aunque la conciliación es una de las herramientas más utilizadas
              para la solución de conflictos en Colombia, no todas las
              controversias admiten este procedimiento. La posibilidad de
              conciliar depende de la naturaleza del derecho involucrado y de
              las normas aplicables a cada caso.
            </p>

            <p>
              Una orientación jurídica previa permite determinar si el asunto
              puede resolverse mediante conciliación, cuáles documentos conviene
              presentar y cuál estrategia puede resultar más conveniente para
              proteger tus derechos.
            </p>

            <p>
              Analizar estos aspectos antes de solicitar una audiencia suele
              evitar retrasos y aumenta las probabilidades de obtener un acuerdo
              útil y con plenos efectos legales.
            </p>
          </div>

          {/* FAQ */}
          <div className={styles.contentSection}>
            <div className={styles.divider}></div>

            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre los asuntos que se pueden conciliar en
              Colombia
            </h2>

            <p className={styles.paragraph}>
              Estas son algunas de las dudas más comunes de las personas que
              desean acudir a un centro de conciliación para resolver un
              conflicto sin iniciar inmediatamente un proceso judicial.
            </p>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué conflictos pueden resolverse mediante conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Generalmente pueden conciliarse numerosos conflictos civiles,
                  comerciales, familiares y algunos asuntos laborales, siempre
                  que la ley permita a las partes disponer del derecho en
                  discusión.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Es obligatorio llegar a un acuerdo?
                </h3>

                <p className={styles.faqAnswer}>
                  No. La conciliación busca facilitar el diálogo entre las
                  partes, pero ninguna está obligada a aceptar una propuesta con
                  la que no esté de acuerdo.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación tiene validez jurídica?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Cuando las partes alcanzan un acuerdo, este queda
                  consignado en un acta de conciliación que produce efectos
                  jurídicos conforme a la legislación colombiana.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Puedo conciliar una deuda?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Las obligaciones económicas, acuerdos de pago y
                  recuperación de cartera hacen parte de los asuntos que con
                  mayor frecuencia se resuelven mediante conciliación.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si la otra persona no quiere conciliar?
                </h3>

                <p className={styles.faqAnswer}>
                  Si no existe acuerdo o alguna de las partes decide no
                  conciliar, según el tipo de conflicto y la normatividad
                  aplicable, podrá acudirse a la autoridad competente para
                  continuar con el trámite correspondiente.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Necesito abogado para asistir a una conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Dependerá del caso concreto. Aunque en muchos asuntos la
                  conciliación puede adelantarse directamente por las partes,
                  contar con orientación jurídica suele brindar mayor seguridad
                  al momento de negociar un acuerdo.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              ¿No sabes si tu conflicto puede resolverse mediante conciliación?
            </h2>

            <p className={styles.ctaText}>
              En Sol Centro de Conciliación analizamos tu caso para determinar
              si el asunto puede tramitarse mediante conciliación extrajudicial
              y te orientamos sobre el procedimiento, los documentos necesarios
              y las alternativas disponibles para alcanzar una solución rápida,
              segura y con plenos efectos jurídicos.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Solicitar orientación sobre mi caso
            </a>
          </div>
        </motion.article>
      </section>
    </>
  );
}
