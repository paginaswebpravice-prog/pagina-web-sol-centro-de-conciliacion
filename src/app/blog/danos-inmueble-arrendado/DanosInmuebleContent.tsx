"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DanosInmuebleContent() {
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
            Conciliación en conflictos de arrendamiento en Colombia
          </span>

          <h1 className={styles.title}>
            Daños en un inmueble arrendado en Colombia: ¿quién responde y cómo
            resolver el conflicto mediante conciliación?
          </h1>

          <p className={styles.heroText}>
            Los conflictos por <strong>daños en un inmueble arrendado</strong>{" "}
            son una de las principales causas de desacuerdo entre propietarios y
            arrendatarios en Colombia. Cuando finaliza un contrato de arriendo
            es común que surjan diferencias sobre quién debe asumir los costos
            de determinadas reparaciones, si corresponden al desgaste normal del
            inmueble o si fueron ocasionadas por un uso inadecuado.
          </p>

          <p className={styles.heroText}>
            Estas situaciones pueden generar discusiones sobre la devolución del
            depósito, el cumplimiento del contrato o incluso dar lugar a
            procesos judiciales cuando no existe una solución negociada. Sin
            embargo, en muchos casos es posible resolver el conflicto mediante
            una audiencia de conciliación, donde ambas partes pueden llegar a
            acuerdos con plena validez jurídica.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás cuáles son las responsabilidades del
            arrendador y del arrendatario, qué pruebas conviene reunir, cuáles
            daños suelen generar mayores controversias y cómo la conciliación
            puede evitar largos procesos judiciales.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se consideran daños en un inmueble arrendado?
          </h2>

          <p className={styles.paragraph}>
            No todas las afectaciones que presenta un inmueble al finalizar un
            contrato de arrendamiento constituyen daños imputables al
            arrendatario. Es importante diferenciar entre el{" "}
            <strong>desgaste natural</strong>, producido por el uso normal y el
            paso del tiempo, y aquellos daños que fueron ocasionados por
            negligencia, descuido o utilización inadecuada del inmueble.
          </p>

          <p className={styles.paragraph}>
            Esta diferencia resulta determinante para establecer quién debe
            asumir el costo de las reparaciones y evitar reclamaciones
            injustificadas entre las partes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La existencia de un inventario de entrega, fotografías, videos y
              demás pruebas facilita determinar si realmente existió un daño y
              quién debe responder por él.
            </p>
          </div>
        </div>

        {/* TIPOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Daños más frecuentes que generan conflictos entre arrendador y
            arrendatario
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Paredes y pintura</h3>

              <p>
                Huecos excesivos, humedad ocasionada por descuido, rayones,
                perforaciones o deterioros que exceden el uso normal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pisos</h3>

              <p>
                Baldosas rotas, pisos laminados deteriorados por humedad o daños
                ocasionados durante mudanzas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Puertas y ventanas</h3>

              <p>
                Cerraduras dañadas, marcos deteriorados, vidrios rotos o puertas
                afectadas por golpes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Instalaciones</h3>

              <p>
                Daños en redes eléctricas, hidráulicas o sanitarias derivados de
                un uso inadecuado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Equipos incluidos</h3>

              <p>
                Averías en electrodomésticos, calentadores, campanas o equipos
                entregados con el inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Zonas comunes</h3>

              <p>
                En algunos casos también pueden presentarse daños ocasionados
                por el arrendatario en áreas compartidas del edificio o
                conjunto.
              </p>
            </div>
          </div>
        </div>

        {/* DESGASTE NORMAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué daños corresponden al desgaste normal del inmueble?
          </h2>

          <p className={styles.paragraph}>
            Uno de los aspectos que más genera discusiones es determinar cuándo
            un deterioro corresponde simplemente al uso habitual del inmueble y
            cuándo constituye un daño atribuible al arrendatario.
          </p>

          <ul className={styles.list}>
            <li>Desgaste normal de pintura por el paso del tiempo.</li>
            <li>Envejecimiento natural de instalaciones.</li>
            <li>Desgaste ordinario de cerraduras.</li>
            <li>Pequeñas marcas derivadas del uso cotidiano.</li>
            <li>Deterioro ocasionado por el paso de los años.</li>
          </ul>

          <p className={styles.paragraph}>
            Cada caso debe analizarse individualmente teniendo en cuenta el
            estado inicial del inmueble y las pruebas disponibles.
          </p>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo ayuda la conciliación?</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Define responsabilidades</h3>
              <p>
                Permite determinar quién debe asumir los costos de reparación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita conflictos legales</h3>
              <p>
                Reduce la necesidad de procesos judiciales por daños en el
                inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdo legal</h3>
              <p>
                El acta de conciliación tiene plena validez jurídica en
                Colombia.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo se resuelven los conflictos por daños?
          </h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación en Colombia
            para evaluar los daños y llegar a un acuerdo sobre reparaciones o
            compensaciones económicas.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, se firma un acta con valor legal obligatorio.
          </p>
        </div>

        {/* RESPONSABILIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién responde por los daños en un inmueble arrendado en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Una de las dudas más frecuentes entre propietarios e inquilinos es
            quién debe asumir el costo de una reparación cuando aparecen daños
            en un inmueble arrendado. La respuesta depende del origen del daño,
            de las obligaciones establecidas en el contrato de arrendamiento y
            de las pruebas disponibles.
          </p>

          <p className={styles.paragraph}>
            En términos generales, el arrendatario responde por los daños
            ocasionados por uso inadecuado, negligencia o incumplimiento de sus
            obligaciones, mientras que el arrendador suele asumir las
            reparaciones derivadas del desgaste normal del inmueble o de
            problemas estructurales.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Responsabilidad del arrendatario</h3>

              <p>
                Cuando los daños son consecuencia del mal uso del inmueble,
                falta de cuidado o incumplimiento de las obligaciones pactadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Responsabilidad del arrendador</h3>

              <p>
                Cuando las reparaciones corresponden al deterioro natural,
                problemas estructurales o mantenimientos que no dependen del uso
                del inquilino.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Responsabilidad compartida</h3>

              <p>
                Existen situaciones donde ambas partes pueden llegar a un
                acuerdo para distribuir los costos mediante conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* DETERMINAR RESPONSABILIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo determinar quién debe asumir el costo de una reparación?
          </h2>

          <p className={styles.paragraph}>
            Antes de reclamar el pago de un daño es importante analizar cómo
            ocurrió, cuándo apareció y si existen pruebas que permitan
            establecer la responsabilidad. Esto evita discusiones innecesarias y
            facilita una posible conciliación.
          </p>

          <ul className={styles.list}>
            <li>Revisar el contrato de arrendamiento.</li>
            <li>Comparar el estado inicial y final del inmueble.</li>
            <li>Verificar si existe inventario firmado.</li>
            <li>Analizar fotografías o videos del inmueble.</li>
            <li>Identificar si el daño corresponde al desgaste natural.</li>
            <li>Solicitar cotizaciones de reparación cuando sea necesario.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Mientras mayor sea la documentación disponible, más sencillo será
              llegar a un acuerdo entre propietario y arrendatario sin acudir a
              un proceso judicial.
            </p>
          </div>
        </div>

        {/* PRUEBAS QUE PUEDEN AYUDAR A DEMOSTRAR LA RESPONSABILIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Pruebas que pueden ayudar a demostrar la responsabilidad por los
            daños
          </h2>

          <p className={styles.paragraph}>
            En una conciliación resulta mucho más fácil llegar a un acuerdo
            cuando las partes cuentan con soportes que permitan establecer el
            estado del inmueble antes y después del arrendamiento.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Inventario del inmueble</h3>

              <p>
                Es uno de los documentos más importantes para comparar el estado
                del inmueble al inicio y al finalizar el contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Fotografías y videos</h3>

              <p>
                Permiten evidenciar el estado real de paredes, pisos, puertas,
                instalaciones y demás elementos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Chats y correos</h3>

              <p>
                Las comunicaciones entre las partes pueden servir para demostrar
                reportes oportunos de daños o compromisos de reparación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cotizaciones</h3>

              <p>
                Ayudan a establecer el valor aproximado de las reparaciones
                cuando las partes buscan negociar una compensación.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA UNA CONCILIACION POR DANOS EN UN INMUEBLE ARRENDADO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación por daños en un inmueble arrendado?
          </h2>

          <p className={styles.paragraph}>
            La conciliación busca que propietario y arrendatario dialoguen con
            el apoyo de un conciliador imparcial para encontrar una solución que
            beneficie a ambas partes y evite un proceso judicial.
          </p>

          <ol className={styles.list}>
            <li>Presentación de la solicitud de conciliación.</li>
            <li>Citación de las partes a la audiencia.</li>
            <li>Exposición de los hechos y presentación de pruebas.</li>
            <li>Negociación de las posibles soluciones.</li>
            <li>Firma del acta de conciliación si existe acuerdo.</li>
            <li>Cumplimiento de las obligaciones pactadas.</li>
          </ol>
        </div>

        {/* ERRORES FREQUENTES QUE GENERAN CONFLICTOS POR DANOS EN UN INMUEBLE ARRENDADO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes que generan conflictos por daños en un inmueble
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No elaborar inventario</h3>

              <p>
                Entregar el inmueble sin un inventario detallado dificulta
                demostrar el estado inicial de la vivienda.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No tomar fotografías</h3>

              <p>
                Las imágenes pueden convertirse en una prueba importante durante
                una conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Esperar hasta la entrega</h3>

              <p>
                Reportar los daños únicamente al finalizar el contrato suele
                aumentar los desacuerdos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No documentar las reparaciones</h3>

              <p>
                Guardar facturas, recibos y soportes facilita demostrar quién
                asumió los costos.
              </p>
            </div>
          </div>
        </div>

        {/* ¿QUE SUCEDE SI NO SE ALCANZA UN ACUERDO DURANTE LA CONCILIACION? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si no se alcanza un acuerdo durante la conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todas las conciliaciones terminan con un acuerdo. Cuando las
            partes no logran una solución consensuada, podrán acudir a los
            mecanismos legales que correspondan para que la controversia sea
            resuelta por la autoridad competente.
          </p>

          <p className={styles.paragraph}>
            Aunque esto ocurra, la conciliación sigue siendo una oportunidad
            valiosa para acercar posiciones, aclarar responsabilidades y reducir
            el alcance del conflicto antes de iniciar un proceso judicial que
            suele ser más largo y costoso.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Intentar una conciliación demuestra disposición para resolver el
              conflicto mediante el diálogo y, en muchos casos, evita gastos y
              tiempos propios de un litigio.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Quién paga los daños en un arriendo?</h3>
              <p>
                Depende del origen del daño: uso indebido o desgaste natural.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se pueden negociar los daños?</h3>
              <p>
                Sí, mediante conciliación se pueden acordar pagos o
                reparaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>
                Se puede iniciar un proceso judicial para definir
                responsabilidades.
              </p>
            </div>
          </div>
        </div>

        {/* RECOMENDACIONES ANTES DE ENTREGAR UN INMUEBLE ARRENDADO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Recomendaciones antes de entregar un inmueble arrendado
          </h2>

          <p className={styles.paragraph}>
            Una entrega organizada del inmueble puede prevenir discusiones sobre
            reparaciones y facilitar el cierre del contrato de arrendamiento.
          </p>

          <ul className={styles.list}>
            <li>Realiza una limpieza general del inmueble.</li>
            <li>Compara el estado actual con el inventario inicial.</li>
            <li>Toma fotografías de cada espacio antes de la entrega.</li>
            <li>Reporta oportunamente cualquier daño existente.</li>
            <li>Conserva facturas de las reparaciones realizadas.</li>
            <li>Solicita un acta de entrega firmada por ambas partes.</li>
            <li>
              Guarda copia de toda la documentación relacionada con el contrato.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto por daños en un inmueble?
          </h3>

          <p className={styles.ctaText}>
            Resuelve conflictos de arrendamiento mediante conciliación rápida y
            legal en Colombia.
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
