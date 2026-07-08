"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CuandoConvieneConciliarContent() {
  return (
    <section id="cuando-conviene" className={styles.articleWrapper}>
      <motion.div
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* ================= HERO ================= */}

        <div className={styles.hero}>
          <span className={styles.badge}>
            Conciliación Extrajudicial en Colombia
          </span>

          <h1 className={styles.title}>
            ¿Cuándo conviene acudir a una conciliación en Colombia? Casos,
            ventajas y cuándo no hacerlo
          </h1>

          <p className={styles.paragraph}>
            La <strong>conciliación en Colombia</strong> es uno de los
            mecanismos más eficientes para resolver conflictos sin necesidad de
            acudir a un proceso judicial. En ciudades como{" "}
            <strong>Bogotá</strong>, donde los procesos ante jueces pueden tomar
            meses o incluso años, la conciliación se convierte en una
            alternativa estratégica para lograr acuerdos rápidos, seguros y con
            efectos legales.
          </p>

          <p className={styles.paragraph}>
            Muchas personas creen que la conciliación únicamente sirve para
            evitar demandas, pero en realidad también permite reducir costos,
            conservar relaciones comerciales o familiares y encontrar soluciones
            flexibles que normalmente no se obtienen en un juicio tradicional.
          </p>

          <p className={styles.paragraph}>
            Saber <strong>cuándo conviene conciliar</strong> puede marcar la
            diferencia entre un conflicto prolongado y una solución práctica,
            económica y efectiva para ambas partes.
          </p>
        </div>

        {/* ================= INTRO ================= */}

        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Por qué cada vez más personas y empresas prefieren la conciliación
            antes de demandar?
          </h2>

          <p className={styles.paragraph}>
            La conciliación extrajudicial en Colombia se ha convertido en uno de
            los mecanismos más utilizados para resolver conflictos civiles,
            comerciales, familiares y laborales porque permite que las partes
            construyan soluciones mediante el diálogo, con la ayuda de un
            conciliador imparcial.
          </p>

          <p className={styles.paragraph}>
            A diferencia de un proceso judicial, donde un juez toma la decisión,
            en la conciliación son las partes quienes tienen control sobre el
            acuerdo. Esto facilita negociaciones más flexibles relacionadas con
            plazos, pagos, entregas, cuotas o compromisos específicos.
          </p>

          <p className={styles.paragraph}>
            En Bogotá, muchas personas utilizan la conciliación para resolver
            conflictos de arrendamiento, deudas, incumplimientos contractuales,
            alimentos, conflictos entre socios, pagos pendientes y problemas de
            convivencia sin necesidad de llegar a un litigio.
          </p>
        </div>

        {/* ================= CASOS ================= */}
        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Por qué cada vez más personas y empresas prefieren la conciliación
            antes de demandar?
          </h2>

          <p className={styles.paragraph}>
            Existen múltiples situaciones donde la conciliación puede ayudar a
            resolver conflictos de forma más rápida y eficiente que un proceso
            judicial tradicional:
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Cuando existe relación entre las partes:</strong> si hay
              vínculos familiares, comerciales, laborales o contractuales, la
              conciliación ayuda a mantener la comunicación y evitar rupturas
              definitivas.
            </li>

            <li>
              <strong>Cuando se busca una solución rápida:</strong> muchas
              conciliaciones en Bogotá pueden resolverse en una sola audiencia,
              evitando años de procesos judiciales.
            </li>

            <li>
              <strong>Cuando las partes quieren negociar:</strong> si existe
              disposición para dialogar, es posible construir acuerdos más
              favorables para ambos lados.
            </li>

            <li>
              <strong>Cuando se necesitan acuerdos flexibles:</strong> por
              ejemplo, planes de pago, acuerdos parciales, refinanciaciones o
              cronogramas de cumplimiento.
            </li>

            <li>
              <strong>Cuando hay evidencia suficiente:</strong> si existen
              contratos, chats, facturas, correos o soportes claros, la
              conciliación puede facilitar acuerdos rápidos.
            </li>

            <li>
              <strong>En conflictos familiares:</strong> alimentos, custodia,
              régimen de visitas, separación de bienes o acuerdos de crianza son
              casos frecuentes de conciliación.
            </li>

            <li>
              <strong>En conflictos comerciales:</strong> proveedores, facturas,
              incumplimientos contractuales y pagos pendientes suelen resolverse
              mediante conciliación extrajudicial.
            </li>

            <li>
              <strong>En conflictos civiles:</strong> daños, arrendamientos,
              préstamos de dinero o conflictos entre vecinos son asuntos que
              frecuentemente pueden conciliarse.
            </li>
          </ul>
        </div>

        {/* ================= BENEFICIOS ================= */}
        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            Señales de que una conciliación puede ser la mejor opción para tu
            caso
          </h2>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Existe disposición para dialogar</h3>

              <p>
                Cuando ambas partes aún están abiertas a conversar, la
                conciliación suele ofrecer excelentes resultados.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Quieres ahorrar tiempo</h3>

              <p>
                Resolver un conflicto mediante conciliación normalmente toma
                mucho menos tiempo que un proceso judicial.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Deseas conservar la relación</h3>

              <p>
                Es especialmente útil cuando existe una relación familiar,
                comercial, laboral o contractual que se desea mantener.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Buscas soluciones flexibles</h3>

              <p>
                Las partes pueden acordar plazos, formas de pago o compromisos
                personalizados que un juez normalmente no establecería.
              </p>
            </div>
          </div>
        </div>

        {/* ================= AUDIENCIA ================= */}
        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede después de una audiencia de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Al finalizar la audiencia pueden presentarse distintos escenarios.
            Si las partes llegan a un acuerdo, este queda consignado en un acta
            con efectos jurídicos. Si no existe acuerdo, las partes conservan la
            posibilidad de acudir posteriormente a la vía judicial cuando la ley
            lo permita.
          </p>

          <p className={styles.paragraph}>
            Independientemente del resultado, la audiencia suele ayudar a
            aclarar las posiciones de cada parte y facilita la toma de
            decisiones sobre los pasos a seguir.
          </p>
        </div>

        {/* ================= ERRORES ================= */}
        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            Errores frecuentes que dificultan una conciliación
          </h2>

          <ul className={styles.list}>
            <li>Asistir sin conocer claramente el problema.</li>
            <li>No llevar documentos que respalden la posición.</li>
            <li>Negarse completamente a escuchar propuestas.</li>
            <li>Confundir la conciliación con un juicio.</li>
            <li>Pretender imponer únicamente la propia solución.</li>
            <li>No cumplir posteriormente el acuerdo alcanzado.</li>
          </ul>
        </div>

        {/* ================= SABER SI ES CONCILIABLE ================= */}
        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Cómo saber si tu conflicto puede resolverse mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cada caso debe analizarse de manera individual. Aspectos como la
            naturaleza del conflicto, la voluntad de las partes y la normativa
            aplicable permiten determinar si la conciliación es el mecanismo más
            adecuado o si resulta necesario acudir directamente a otra vía
            legal.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Una orientación jurídica previa puede ayudarte a identificar si tu
              caso es conciliable, cuáles documentos debes reunir y cuál
              estrategia puede ofrecer mayores posibilidades de alcanzar un
              acuerdo.
            </p>
          </div>
        </div>

        {/* ================= EJEMPLOS ================= */}

        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            Ejemplos reales de conflictos que suelen resolverse mediante
            conciliación
          </h2>

          <div className={styles.examplesGrid}>
            <div className={styles.exampleCard}>
              <h3>Arrendamientos</h3>
              <p>
                Acuerdos por cánones pendientes, entrega de inmuebles,
                reparaciones o incumplimientos contractuales.
              </p>
            </div>

            <div className={styles.exampleCard}>
              <h3>Deudas y pagos</h3>
              <p>
                Negociación de cuotas, refinanciaciones y acuerdos de pago entre
                personas o empresas.
              </p>
            </div>

            <div className={styles.exampleCard}>
              <h3>Familia</h3>
              <p>
                Cuotas alimentarias, visitas, custodia y acuerdos relacionados
                con menores de edad.
              </p>
            </div>

            <div className={styles.exampleCard}>
              <h3>Conflictos laborales</h3>
              <p>
                Liquidaciones, pagos pendientes, indemnizaciones o terminación
                de contratos laborales.
              </p>
            </div>

            <div className={styles.exampleCard}>
              <h3>Problemas entre socios</h3>
              <p>
                Diferencias económicas, incumplimientos o desacuerdos
                comerciales dentro de empresas.
              </p>
            </div>

            <div className={styles.exampleCard}>
              <h3>Prestación de servicios</h3>
              <p>
                Incumplimientos de contratos, pagos atrasados o conflictos entre
                clientes y proveedores.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CUANDO NO ================= */}

        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Cuándo la conciliación puede no ser la mejor alternativa?
          </h2>

          <p className={styles.paragraph}>
            Aunque la conciliación es muy útil en muchos casos, existen
            situaciones donde puede no ser la mejor alternativa:
          </p>

          <p className={styles.paragraph}>
            Identificar si un asunto es conciliable desde el inicio permite
            ahorrar tiempo y elegir el mecanismo jurídico más adecuado. Aunque
            la conciliación resuelve una gran cantidad de controversias, existen
            casos en los que la ley exige acudir directamente ante una autoridad
            judicial o administrativa.
          </p>

          <ul className={styles.list}>
            <li>
              Cuando una de las partes no tiene intención real de negociar.
            </li>
            <li>
              Cuando existe mala fe evidente o intención de dilatar el proceso.
            </li>
            <li>
              Cuando se requiere una decisión judicial obligatoria conforme a la
              ley colombiana.
            </li>
            <li>Cuando el conflicto involucra derechos no conciliables.</li>
            <li>
              Cuando existe violencia, amenazas o situaciones que impidan una
              negociación equilibrada.
            </li>
            <li>
              Cuando se necesita una medida urgente que solo puede ordenar un
              juez.
            </li>
          </ul>

          <div className={styles.note}>
            En Bogotá y Colombia, la conciliación funciona mejor cuando ambas
            partes tienen disposición real de llegar a un acuerdo. Sin voluntad
            de negociación, el proceso pierde efectividad y puede terminar sin
            resultados concretos.
          </div>
        </div>

        {/* ================= BENEFICIOS ================= */}

        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de intentar una conciliación antes de iniciar un proceso
            judicial
          </h2>

          <p className={styles.paragraph}>
            La conciliación ofrece beneficios importantes tanto para personas
            naturales como para empresas que buscan resolver conflictos de forma
            eficiente:
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Mayor rapidez</h3>
              <p>
                Muchos conflictos pueden resolverse en menos tiempo que un
                proceso judicial tradicional.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Menor costo</h3>
              <p>
                Reduce gastos jurídicos, costos procesales y tiempos de espera
                ante despachos judiciales.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Confidencialidad</h3>
              <p>
                Las audiencias de conciliación son reservadas y protegen la
                información de las partes.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Acuerdos flexibles</h3>
              <p>
                Las partes pueden construir soluciones personalizadas según sus
                necesidades.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Menor desgaste emocional</h3>
              <p>
                Evita conflictos prolongados y reduce tensiones familiares,
                personales o comerciales.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Validez legal</h3>
              <p>
                El acta de conciliación tiene efectos jurídicos y puede exigirse
                legalmente en Colombia.
              </p>
            </div>
          </div>
        </div>

        {/* ================= RECOMENDACIONES ================= */}

        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Cómo prepararte para una audiencia de conciliación y aumentar las
            posibilidades de llegar a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Prepararse adecuadamente puede aumentar significativamente las
            probabilidades de alcanzar un acuerdo exitoso en una audiencia de
            conciliación.
          </p>

          <ul className={styles.list}>
            <li>
              Organiza documentos, contratos, chats, correos y soportes
              relacionados con el conflicto.
            </li>
            <li>
              Define claramente cuál es tu objetivo principal y cuál es tu
              mínimo aceptable.
            </li>
            <li>
              Lleva propuestas claras sobre pagos, fechas y formas de
              cumplimiento.
            </li>
            <li>Evalúa alternativas de negociación antes de la audiencia.</li>
            <li>
              Busca asesoría jurídica si el conflicto involucra valores altos o
              asuntos complejos.
            </li>
            <li>
              Mantén una actitud abierta al diálogo y evita convertir la
              audiencia en una discusión personal.
            </li>
          </ul>

          <p className={styles.paragraph}>
            Una buena preparación facilita que la audiencia sea productiva y
            aumenta las probabilidades de lograr un acuerdo satisfactorio para
            todas las partes, evitando posteriores incumplimientos o nuevos
            conflictos.
          </p>
        </div>

        {/* ================= CTA ================= */}

        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>
            ¿No sabes si tu conflicto puede resolverse mediante conciliación?
          </strong>

          <p className={styles.ctaText}>
            Nuestro equipo puede orientarte para determinar si tu caso es
            conciliable, explicarte los requisitos, resolver tus dudas y
            acompañarte durante todo el proceso para buscar una solución rápida,
            legal y efectiva.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Conocer si mi caso puede conciliarse
          </a>
        </div>
      </motion.div>
    </section>
  );
}
