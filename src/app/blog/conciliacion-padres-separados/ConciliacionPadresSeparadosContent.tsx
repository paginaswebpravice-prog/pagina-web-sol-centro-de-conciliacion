"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ConciliacionPadresSeparadosContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación es útil para padres separados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Permite alcanzar acuerdos sobre hijos menores sin necesidad de iniciar procesos judiciales prolongados.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden acordar visitas y alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación familiar permite definir cuotas alimentarias, custodia y régimen de visitas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos son obligatorios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse legalmente.",
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
          {/* HERO */}
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              Conciliación familiar para padres separados
            </span>

            <h1 className={styles.title}>
              Conciliación entre padres separados en Colombia: acuerdos sobre
              custodia, visitas y cuota alimentaria
            </h1>

            <p className={styles.heroText}>
              Después de una separación es normal que surjan diferencias sobre
              la forma en que se ejercerá la crianza de los hijos, el pago de la
              cuota alimentaria, el régimen de visitas o la distribución de
              gastos extraordinarios. La conciliación entre padres separados
              ofrece un espacio neutral para dialogar y construir acuerdos que
              beneficien tanto a los menores como a los padres.
            </p>

            <p className={styles.heroText}>
              En Colombia este mecanismo permite resolver numerosos conflictos
              familiares sin iniciar inmediatamente un proceso judicial. Con la
              orientación de un conciliador imparcial, ambas partes pueden
              negociar soluciones prácticas, reducir el desgaste emocional y
              dejar constancia de los acuerdos mediante un acta con plena
              validez jurídica.
            </p>

            <p className={styles.heroText}>
              Si los padres viven en ciudades diferentes o incluso fuera del
              país, también es posible realizar conciliaciones virtuales en
              muchos casos, facilitando la participación de todos los
              involucrados.
            </p>
          </div>

          {/* QUE ES LA CONCILIACION ENTRE PADRES SEPARADOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la conciliación entre padres separados y cuándo conviene
              realizarla?
            </h2>

            <p className={styles.paragraph}>
              La conciliación entre padres separados es un mecanismo mediante el
              cual los padres buscan construir acuerdos relacionados con el
              cuidado y bienestar de sus hijos, contando con la intervención de
              un conciliador imparcial que facilita el diálogo sin favorecer a
              ninguna de las partes.
            </p>

            <p className={styles.paragraph}>
              Más que decidir quién tiene la razón, la conciliación busca que
              ambos padres encuentren soluciones que respondan a las necesidades
              reales de los menores y permitan reducir futuros conflictos
              familiares.
            </p>

            <p className={styles.paragraph}>
              Este procedimiento suele ser especialmente útil cuando existen
              desacuerdos sobre alimentos, custodia, visitas, gastos escolares,
              vacaciones, comunicación con los hijos o cualquier otra
              responsabilidad derivada del ejercicio de la parentalidad.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Un acuerdo construido entre los propios padres suele cumplirse
                con mayor facilidad que una decisión impuesta después de un
                largo proceso judicial, siempre priorizando el interés superior
                de los niños, niñas y adolescentes.
              </p>
            </div>
          </div>

          {/* QUE ACUERDOS PUEDE LOGRAR LA CONCILIACION ENTRE PADRES SEPARADOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué acuerdos pueden lograr los padres separados mediante
              conciliación?
            </h2>

            <ul className={styles.list}>
              <li>Custodia y cuidado personal de los hijos.</li>
              <li>Definición del régimen de visitas.</li>
              <li>Fijación o modificación de la cuota alimentaria.</li>
              <li>Distribución de gastos médicos extraordinarios.</li>
              <li>
                Pago de educación, transporte y actividades extracurriculares.
              </li>
              <li>Vacaciones, cumpleaños y fechas especiales.</li>
              <li>Autorizaciones relacionadas con viajes.</li>
              <li>Canales y horarios de comunicación con los hijos.</li>
              <li>Responsabilidades compartidas en la crianza.</li>
              <li>Modificación de acuerdos familiares anteriores.</li>
            </ul>
          </div>

          {/* BENEFICIOS DE ACUDIR A UNA CONCILIACION CUANDO LOS PADRES ESTAN SEPARADOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de acudir a una conciliación cuando los padres están
              separados
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Mayor estabilidad para los hijos</h3>

                <p>
                  Los acuerdos claros reducen la incertidumbre y brindan mayor
                  seguridad emocional a los menores.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menos conflictos entre los padres</h3>

                <p>
                  Favorece una comunicación más respetuosa y disminuye futuras
                  discusiones relacionadas con la crianza.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Plena validez jurídica</h3>

                <p>
                  El acta de conciliación produce efectos legales y puede
                  exigirse si una de las partes incumple los acuerdos.
                </p>
              </div>
            </div>
          </div>

          {/* COMO SE DESARROLLA LA AUDIENCIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo se desarrolla la audiencia?
            </h2>

            <p className={styles.paragraph}>
              Durante la audiencia, cada padre expone sus necesidades,
              expectativas y propuestas respecto a la crianza y cuidado de los
              hijos.
            </p>

            <p className={styles.paragraph}>
              El conciliador facilita la comunicación y ayuda a identificar
              puntos de acuerdo que permitan construir soluciones equilibradas.
            </p>

            <p className={styles.paragraph}>
              Si se logra un consenso, el acuerdo queda consignado en un acta
              con efectos jurídicos obligatorios.
            </p>
          </div>

          {/* DOCUMENTOS QUE SUELEN SOLICITARSE */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que suelen solicitarse
            </h2>

            <ul className={styles.list}>
              <li>Registro civil de nacimiento de los hijos.</li>
              <li>Documentos de identidad de los padres.</li>
              <li>Soportes de ingresos económicos.</li>
              <li>Acuerdos previos relacionados con los menores.</li>
              <li>Documentos escolares cuando sean relevantes.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si no se alcanza un acuerdo?
            </h2>

            <p className={styles.paragraph}>
              Cuando no es posible conciliar, las partes pueden acudir a las
              autoridades competentes para que el conflicto sea resuelto por la
              vía judicial.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, en muchos casos la conciliación permite encontrar
              soluciones satisfactorias evitando procesos más largos y
              desgastantes.
            </p>
          </div>

          {/* CUANDO ES RECOMENDABLE SOLICITAR UNA CONCILIACION ENTRE PADRES SEPARADOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo es recomendable solicitar una conciliación entre padres
              separados?
            </h2>

            <p className={styles.paragraph}>
              No es necesario esperar a que el conflicto se agrave. La
              conciliación puede solicitarse desde el momento en que surgen
              diferencias relacionadas con los hijos o cuando los acuerdos
              existentes ya no responden a la realidad familiar.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Después de la separación</h3>

                <p>
                  Para organizar custodia, alimentos y régimen de visitas desde
                  el comienzo.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Cambios económicos</h3>

                <p>
                  Cuando alguno de los padres modifica su capacidad económica o
                  las necesidades del menor aumentan.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Cambios de residencia</h3>

                <p>
                  Si alguno de los padres cambia de ciudad o de país y es
                  necesario ajustar los acuerdos existentes.
                </p>
              </div>
            </div>
          </div>

          {/* ERRORES QUE SUELEN COMETER LOS PADRES DESPUES DE UNA SEPARACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores que suelen cometer los padres después de una separación
            </h2>

            <p className={styles.paragraph}>
              Después de una ruptura es frecuente que las diferencias personales
              terminen afectando la comunicación relacionada con los hijos. En
              muchos casos las decisiones se toman de manera improvisada,
              generando nuevos conflictos que podrían evitarse mediante acuerdos
              claros.
            </p>

            <ul className={styles.list}>
              <li>Cambiar unilateralmente el régimen de visitas.</li>
              <li>Suspender el pago de alimentos sin acuerdo.</li>
              <li>Utilizar a los hijos como intermediarios.</li>
              <li>No definir responsabilidades económicas.</li>
              <li>No dejar los acuerdos por escrito.</li>
              <li>Incumplir horarios o compromisos establecidos.</li>
            </ul>

            <p className={styles.paragraph}>
              La conciliación permite prevenir estas situaciones y establecer
              reglas que faciliten la convivencia familiar después de la
              separación.
            </p>
          </div>

          {/* ES POSIBLE MODIFICAR UNA CONCILIACION ENTRE PADRES SEPARADOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Es posible modificar una conciliación entre padres separados?
            </h2>

            <p className={styles.paragraph}>
              Sí. Las necesidades de los hijos cambian con el tiempo y las
              condiciones de los padres también pueden variar. Por ello, cuando
              existen circunstancias nuevas, es posible realizar una nueva
              conciliación para actualizar aspectos como la cuota alimentaria,
              la custodia, el régimen de visitas o cualquier otro acuerdo
              relacionado con la crianza.
            </p>

            <p className={styles.paragraph}>
              Modificar un acuerdo mediante conciliación suele ser mucho más
              rápido y menos desgastante que iniciar un proceso judicial, además
              de permitir que ambos padres participen activamente en la
              construcción de nuevas soluciones.
            </p>
          </div>

          {/* PREGUNTAS FRECUENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre la conciliación entre padres separados
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La conciliación es obligatoria antes de demandar?</h3>

                <p>
                  Dependiendo del asunto y de la normativa aplicable, puede
                  constituir un requisito previo antes de acudir ante un juez.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Los acuerdos pueden modificarse en el futuro?</h3>

                <p>
                  Sí. Si cambian las necesidades del menor o las circunstancias
                  de los padres, es posible realizar una nueva conciliación.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿La audiencia puede realizarse de forma virtual?</h3>

                <p>
                  Sí. Muchos centros de conciliación ofrecen audiencias
                  virtuales para facilitar la participación de padres que viven
                  en distintas ciudades o incluso en el exterior.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas resolver un conflicto entre padres separados?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, custodia, visitas,
              alimentos y acuerdos relacionados con hijos menores en Bogotá y
              Colombia.
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
