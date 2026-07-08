"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConflictosEntreVecinosContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Solución de conflictos vecinales en Colombia
          </span>

          <h1 className={styles.title}>
            Conflictos entre vecinos en Colombia: cómo resolverlos mediante
            conciliación sin llegar a un juicio
          </h1>

          <p className={styles.heroText}>
            Los conflictos entre vecinos pueden surgir por ruido excesivo,
            mascotas, parqueaderos, filtraciones, linderos, zonas comunes o
            incumplimiento de las normas de convivencia. Cuando estas
            situaciones no se manejan a tiempo, suelen afectar la tranquilidad
            de las familias y deteriorar la relación entre quienes comparten un
            mismo entorno.
          </p>

          <p className={styles.heroText}>
            Antes de iniciar un proceso judicial, la conciliación ofrece una
            alternativa rápida, económica y con plena validez jurídica para que
            las partes dialoguen, encuentren soluciones y lleguen a acuerdos que
            permitan restablecer la convivencia de manera pacífica.
          </p>
        </div>

        {/* QUE ES LA CONCILIACION ENTRE VECINOS  */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación entre vecinos y cuándo puede utilizarse?
          </h2>

          <p className={styles.paragraph}>
            La conciliación entre vecinos es un mecanismo alternativo de
            solución de conflictos mediante el cual las personas involucradas
            exponen sus diferencias ante un conciliador imparcial que facilita
            el diálogo y ayuda a construir acuerdos mutuamente aceptados.
          </p>

          <p className={styles.paragraph}>
            Este procedimiento resulta especialmente útil cuando existen
            desacuerdos que afectan la convivencia diaria, pero las partes
            desean evitar procesos judiciales largos, costosos o que puedan
            deteriorar aún más la relación vecinal.
          </p>

          <p className={styles.paragraph}>
            Cuando se alcanza un acuerdo, este queda consignado en un acta de
            conciliación con efectos jurídicos, lo que brinda seguridad para
            ambas partes y favorece el cumplimiento de los compromisos
            adquiridos.
          </p>
        </div>

        {/* PROBLEMAS QUE PUEDEN CONCILIARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Problemas vecinales que pueden conciliarse
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ruidos molestos</h3>

              <p>
                Música, fiestas, obras o actividades que afecten la tranquilidad
                de los vecinos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mascotas</h3>

              <p>
                Situaciones relacionadas con comportamiento, ruido o manejo
                inadecuado de animales domésticos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Zonas comunes</h3>

              <p>Uso indebido de áreas compartidas en edificios o conjuntos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Linderos y cerramientos</h3>

              <p>
                Diferencias relacionadas con límites de propiedades y
                construcciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Filtraciones y daños</h3>

              <p>
                Perjuicios ocasionados a inmuebles vecinos por humedades o
                reparaciones deficientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Parqueaderos</h3>

              <p>
                Conflictos por ocupación de espacios o incumplimiento de normas
                internas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Olores y residuos</h3>

              <p>
                Conflictos ocasionados por malos olores, acumulación de basura o
                manejo inadecuado de residuos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Árboles y jardines</h3>

              <p>
                Diferencias relacionadas con árboles, ramas, raíces o jardines
                que afectan propiedades vecinas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Obras y remodelaciones</h3>

              <p>
                Inconvenientes derivados de construcciones, remodelaciones o
                trabajos que generan afectaciones a otros residentes.
              </p>
            </div>
          </div>
        </div>

        {/* POR QUE INTENTAR UNA CONCILIACION ANTES DE DEMANDAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué intentar una conciliación antes de demandar?
          </h2>

          <ul className={styles.list}>
            <li>Permite resolver conflictos rápidamente.</li>
            <li>Reduce gastos jurídicos.</li>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Promueve el diálogo y la convivencia.</li>
            <li>Ayuda a preservar relaciones vecinales.</li>
            <li>Genera acuerdos claros y verificables.</li>
            <li>Puede realizarse presencial o virtualmente.</li>
            <li>Brinda seguridad jurídica a las partes.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Muchos conflictos vecinales no tienen su origen en problemas
              jurídicos complejos, sino en la falta de comunicación. Una
              audiencia de conciliación permite que las partes expongan sus
              posiciones en un ambiente neutral y encuentren soluciones
              prácticas que beneficien a todos, evitando que la situación
              continúe deteriorándose.
            </p>
          </div>
        </div>

        {/* QUE ACUERDOS PUEDEN ALCANZARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué acuerdos pueden alcanzarse?</h2>

          <p className={styles.paragraph}>
            Los acuerdos pueden adaptarse a las necesidades de cada caso. No
            existe un único modelo de solución, ya que el conciliador ayuda a
            construir compromisos que realmente sean viables para ambas partes.
          </p>

          <p className={styles.paragraph}>
            En muchos casos también es posible establecer mecanismos de
            seguimiento, plazos para cumplir los compromisos y formas de
            comunicación que permitan prevenir nuevos conflictos en el futuro.
          </p>

          <ul className={styles.list}>
            <li>Horarios para actividades que generen ruido.</li>
            <li>Compromisos sobre manejo de mascotas.</li>
            <li>Uso adecuado de zonas comunes.</li>
            <li>Reparación de daños ocasionados.</li>
            <li>Respeto de límites y cerramientos.</li>
            <li>Cumplimiento de reglamentos internos.</li>
          </ul>
        </div>

        {/* VALIDEZ LEGAL DEL ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿El acuerdo de conciliación tiene validez jurídica?
          </h2>

          <p className={styles.paragraph}>
            Sí. Cuando el procedimiento se realiza ante un centro de
            conciliación autorizado, el acuerdo alcanzado queda consignado en un
            acta con efectos legales. Esto significa que las obligaciones
            asumidas pueden exigirse en caso de incumplimiento conforme a la
            normativa colombiana.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, muchas personas prefieren acudir primero a la
            conciliación, ya que les permite resolver el problema de manera más
            rápida sin renunciar a la seguridad jurídica que ofrece un acuerdo
            formal.
          </p>
        </div>

        {/* QUE HACER ANTES DE SOLICITAR UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer antes de solicitar una conciliación con un vecino?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Identifica el problema</h3>
              <p>
                Define claramente cuál es el conflicto y desde cuándo se
                presenta.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reúne pruebas</h3>
              <p>
                Fotografías, videos, mensajes, actas de administración o
                cualquier otro elemento que permita explicar la situación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ten disposición al diálogo</h3>
              <p>
                La conciliación busca construir acuerdos voluntarios que
                beneficien a ambas partes.
              </p>
            </div>
          </div>
        </div>

        {/* CASOS EN LOS QUE LA CONCILIACION SUELE SER UNA SOLUCION EFECTIVA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos en los que la conciliación suele ser una solución efectiva
          </h2>

          <p className={styles.paragraph}>
            La experiencia demuestra que la conciliación puede ofrecer
            excelentes resultados cuando las partes desean preservar la
            convivencia y están dispuestas a dialogar. Es especialmente útil en
            conflictos derivados de ruidos constantes, diferencias por
            parqueaderos, problemas con mascotas, uso de zonas comunes,
            filtraciones entre apartamentos, cerramientos, linderos y otras
            situaciones que afectan la vida cotidiana.
          </p>

          <p className={styles.paragraph}>
            En estos casos, un acuerdo oportuno no solo evita procesos
            judiciales, sino que también contribuye a mantener relaciones
            vecinales más respetuosas y a prevenir nuevos inconvenientes.
          </p>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar problemas por ruido?</h3>

              <p>
                Sí. Los conflictos relacionados con ruido son de los asuntos más
                frecuentes en conciliación vecinal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación sirve para conflictos de propiedad horizontal?
              </h3>

              <p>
                Sí. Muchos conflictos en conjuntos residenciales pueden
                resolverse mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si incumplen el acuerdo?</h3>

              <p>
                El acta conciliatoria puede utilizarse para exigir el
                cumplimiento de los compromisos adquiridos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Debo contratar un abogado?</h3>

              <p>
                No siempre. Dependiendo del caso, las partes pueden asistir
                directamente al procedimiento de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar si vivo en propiedad horizontal?</h3>

              <p>
                Sí. Muchos conflictos relacionados con conjuntos residenciales y
                edificios pueden solucionarse mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto puede durar una conciliación?</h3>

              <p>
                El tiempo depende del caso y de la disponibilidad de las partes,
                pero suele ser mucho menor que el de un proceso judicial.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Buscas resolver un conflicto con un vecino de forma rápida y legal?
          </h3>

          <p className={styles.ctaText}>
            Si tienes inconvenientes relacionados con ruidos molestos, mascotas,
            parqueaderos, zonas comunes, filtraciones, linderos o cualquier otro
            problema de convivencia, podemos orientarte sobre el procedimiento
            de conciliación y ayudarte a encontrar una solución antes de acudir
            a un proceso judicial.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Recibir orientación sobre conciliación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
