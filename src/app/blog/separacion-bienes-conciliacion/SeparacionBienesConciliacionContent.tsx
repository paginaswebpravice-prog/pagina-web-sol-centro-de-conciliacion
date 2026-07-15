"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function SeparacionBienesConciliacionContent() {
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
              Conciliación patrimonial en Colombia
            </span>

            <h1 className={styles.title}>
              Separación de bienes mediante conciliación en Colombia: cómo
              repartir el patrimonio sin llegar a juicio
            </h1>

            <p className={styles.heroText}>
              La separación de bienes mediante conciliación es una alternativa
              rápida, legal y eficiente para que las partes definan la
              distribución de su patrimonio sin necesidad de acudir
              inmediatamente a un proceso judicial.
            </p>

            <p className={styles.heroText}>
              Este mecanismo es utilizado frecuentemente por cónyuges, ex
              cónyuges y compañeros permanentes que desean resolver asuntos
              patrimoniales de forma consensuada y con respaldo jurídico.
            </p>

            <p className={styles.heroText}>
              En Bogotá y otras ciudades de Colombia, la conciliación se ha
              convertido en una herramienta eficaz para evitar conflictos
              prolongados relacionados con bienes y obligaciones económicas.
            </p>
          </div>

          {/* CASOS EN LOS QUE SE PUEDE REALIZAR UNA SEPARACION DE BIENES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿En qué casos es posible realizar una separación de bienes
              mediante conciliación?
            </h2>

            <p className={styles.paragraph}>
              La conciliación resulta especialmente útil cuando ambas partes
              desean resolver la distribución del patrimonio sin iniciar un
              proceso judicial. No significa que exista una relación perfecta
              entre ellas, sino que todavía conservan la disposición de dialogar
              con la ayuda de un conciliador imparcial.
            </p>

            <p className={styles.paragraph}>
              En Colombia este mecanismo suele utilizarse cuando existen bienes
              adquiridos durante el matrimonio o la unión marital de hecho y
              ambas personas buscan una solución rápida que les permita definir
              la titularidad de esos activos y las obligaciones económicas
              pendientes.
            </p>

            <ul className={styles.list}>
              <li>Separación de bienes entre esposos.</li>
              <li>Liquidación de sociedad conyugal.</li>
              <li>
                Liquidación de sociedad patrimonial entre compañeros
                permanentes.
              </li>
              <li>Distribución de deudas comunes.</li>
              <li>Acuerdos sobre vehículos e inmuebles.</li>
              <li>Repartición de inversiones y cuentas bancarias.</li>
            </ul>
          </div>

          {/* QUE ES LA SEPARACION DE BIENES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la separación de bienes y cuándo puede hacerse mediante
              conciliación?
            </h2>

            <p className={styles.paragraph}>
              La separación de bienes consiste en definir qué activos,
              propiedades, inversiones y obligaciones corresponden a cada una de
              las partes una vez finaliza una relación o se decide reorganizar
              el patrimonio común.
            </p>

            <p className={styles.paragraph}>
              Cuando existe voluntad de diálogo, la conciliación permite llegar
              a acuerdos equilibrados y formalizarlos mediante un acta con
              efectos jurídicos.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación ayuda a reducir costos, tiempos y desgaste
                emocional frente a los procesos judiciales relacionados con la
                distribución de bienes.
              </p>
            </div>
          </div>

          {/* ES OBLIGATORIO ACUDIR A UN JUZGADO? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Es obligatorio acudir a un juez para repartir los bienes?
            </h2>

            <p className={styles.paragraph}>
              No necesariamente. Cuando ambas partes están de acuerdo en la
              forma como se distribuirán los bienes y las obligaciones
              económicas, la conciliación puede convertirse en una alternativa
              mucho más rápida que un proceso judicial.
            </p>

            <p className={styles.paragraph}>
              El conciliador facilita el diálogo para que el acuerdo sea claro,
              equilibrado y pueda quedar consignado en un acta con efectos
              jurídicos, evitando largos litigios que suelen extenderse durante
              meses o incluso años.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación no reemplaza todos los trámites notariales o
                judiciales que puedan ser necesarios según el caso, pero sí
                permite construir acuerdos que reducen significativamente el
                conflicto y facilitan la distribución del patrimonio.
              </p>
            </div>
          </div>

          {/* DOCUMENTOS QUE FACILITAN UNA CONCILIACION SOBRE SEPARACION DE BIENES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que facilitan una conciliación sobre separación de
              bienes
            </h2>

            <p className={styles.paragraph}>
              Contar con información completa permite que la audiencia sea mucho
              más eficiente y que ambas partes conozcan con claridad cuál es el
              patrimonio que será objeto del acuerdo.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Inmuebles</h3>

                <p>
                  Escrituras, certificados de tradición, avalúos y demás
                  documentos que acrediten la propiedad.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Vehículos</h3>

                <p>
                  Licencias de tránsito, tarjetas de propiedad y soportes de
                  adquisición.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Productos financieros</h3>

                <p>
                  Extractos bancarios, certificados de inversiones, CDT y demás
                  activos financieros.
                </p>
              </div>
            </div>
          </div>

          {/* BIENES QUE PUEDEN INCLUIRSE EN LA SEPARACION DE BIENES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué bienes pueden repartirse mediante una conciliación?
            </h2>

            <ul className={styles.list}>
              <li>Casas y apartamentos.</li>
              <li>Lotes y bienes rurales.</li>
              <li>Vehículos.</li>
              <li>Cuentas bancarias.</li>
              <li>Inversiones.</li>
              <li>Negocios y establecimientos comerciales.</li>
              <li>Deudas compartidas.</li>
              <li>Muebles y enseres.</li>
            </ul>
          </div>

          {/* PORQUE HACER LA SEPARACION DE BIENES MEDIANTE CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué hacer la separación de bienes mediante conciliación y no
              por demanda?
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Mayor rapidez</h3>

                <p>
                  Los acuerdos pueden alcanzarse en mucho menos tiempo que un
                  litigio judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menores costos</h3>

                <p>
                  Reduce gastos asociados a procesos judiciales prolongados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdos voluntarios</h3>

                <p>
                  Las partes participan activamente en la construcción de las
                  soluciones.
                </p>
              </div>
            </div>
          </div>

          {/* ERRORES FRECUENTES DURANTE UNA SEPARACION DE BIENES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores frecuentes durante una separación de bienes
            </h2>

            <p className={styles.paragraph}>
              Muchas controversias patrimoniales se prolongan porque las partes
              omiten información importante o llegan a la audiencia sin haber
              identificado todos los bienes y obligaciones existentes.
            </p>

            <ul className={styles.list}>
              <li>No informar la totalidad del patrimonio.</li>
              <li>Olvidar incluir deudas compartidas.</li>
              <li>No presentar documentos de soporte.</li>
              <li>Valorar incorrectamente los bienes.</li>
              <li>Firmar acuerdos ambiguos.</li>
              <li>No definir fechas ni forma de entrega.</li>
            </ul>
          </div>

          {/* VENTAJAS DE LA CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ventajas ofrece la conciliación frente a un proceso judicial?
            </h2>

            <p className={styles.paragraph}>
              Cuando existe disposición para negociar, la conciliación permite
              proteger el patrimonio y disminuir considerablemente el desgaste
              emocional que suele generar un litigio prolongado.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Menor desgaste familiar</h3>

                <p>
                  Favorece acuerdos construidos por las propias partes mediante
                  el diálogo.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor control</h3>

                <p>
                  Son las partes quienes deciden cómo repartir el patrimonio y
                  no un juez.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor agilidad</h3>

                <p>
                  El conflicto puede solucionarse en mucho menos tiempo que un
                  proceso judicial tradicional.
                </p>
              </div>
            </div>
          </div>

          {/* INCUMPLIMIENTO DEL ACUERDO DE CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pasa si después de firmar el acuerdo una persona no cumple?
            </h2>

            <p className={styles.paragraph}>
              El incumplimiento de un acuerdo de conciliación puede generar
              consecuencias jurídicas importantes. Dependiendo del contenido del
              acta, la parte afectada podrá acudir ante las autoridades
              competentes para exigir el cumplimiento de las obligaciones
              asumidas.
            </p>

            <p className={styles.paragraph}>
              Por esta razón es fundamental que el acuerdo describa claramente
              qué bienes corresponden a cada persona, los plazos para realizar
              las entregas y la forma como deberán cumplirse los compromisos
              económicos establecidos durante la audiencia.
            </p>
          </div>

          {/* COMO FUNCIONA EL PROCESO DE CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Paso a paso para realizar una separación de bienes mediante
              conciliación
            </h2>

            <p className={styles.paragraph}>
              Las partes presentan la información relacionada con los bienes y
              obligaciones que desean distribuir.
            </p>

            <p className={styles.paragraph}>
              Durante la audiencia, el conciliador facilita la comunicación y
              promueve acuerdos que resulten beneficiosos para ambas partes.
            </p>

            <p className={styles.paragraph}>
              Si se alcanza un acuerdo, este queda consignado en un acta de
              conciliación con validez legal.
            </p>
          </div>

          {/* DOCUMENTOS RECOMENDADOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Documentos recomendados</h2>

            <ul className={styles.list}>
              <li>Documentos de identidad.</li>
              <li>Escrituras o certificados de tradición.</li>
              <li>Tarjetas de propiedad de vehículos.</li>
              <li>Extractos financieros.</li>
              <li>Soportes de inversiones.</li>
              <li>Información sobre obligaciones y deudas.</li>
            </ul>
          </div>

          {/* QUE PASA SI NO HAY ACUERDO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Qué pasa si no hay acuerdo?</h2>

            <p className={styles.paragraph}>
              Cuando no se logra una conciliación, las partes conservan el
              derecho de acudir ante las autoridades judiciales para resolver la
              controversia patrimonial.
            </p>

            <p className={styles.paragraph}>
              No obstante, la conciliación suele representar una oportunidad
              importante para alcanzar soluciones rápidas y satisfactorias.
            </p>
          </div>

          {/* PREGUNTAS FREQUENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La conciliación es obligatoria?</h3>

                <p>
                  Depende del caso específico, aunque suele ser una alternativa
                  altamente recomendable.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Se pueden repartir inmuebles?</h3>

                <p>
                  Sí. Los acuerdos pueden incluir bienes inmuebles y otros
                  activos patrimoniales.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Tiene validez jurídica?</h3>

                <p>
                  Sí. El acta de conciliación produce efectos legales y puede
                  hacerse exigible.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas asesoría para una separación de bienes?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación patrimonial, acuerdos de
              distribución de bienes y soluciones legales para conflictos
              económicos en Bogotá y Colombia.
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
