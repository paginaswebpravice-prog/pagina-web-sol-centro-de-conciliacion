"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function VecinosPropiedadHorizontalContent() {
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
            Conciliación en propiedad horizontal y conflictos de convivencia
          </span>

          <h1 className={styles.title}>
            Conflictos entre vecinos en propiedad horizontal: cómo resolver
            problemas de convivencia en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos entre vecinos hacen parte de los problemas más
            comunes en edificios, conjuntos residenciales y copropiedades en
            Colombia. Situaciones relacionadas con ruidos excesivos, mascotas,
            parqueaderos, zonas comunes, filtraciones, fiestas, remodelaciones o
            incumplimiento del reglamento de propiedad horizontal pueden
            deteriorar la convivencia y generar tensiones permanentes entre
            residentes.
          </p>

          <p className={styles.heroText}>
            Aunque muchas personas consideran que la única solución es acudir a
            una demanda, en la práctica la <strong>conciliación</strong> suele
            ser una de las alternativas más rápidas, económicas y efectivas para
            alcanzar acuerdos con validez jurídica, evitando procesos largos y
            preservando la convivencia dentro de la comunidad.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación en propiedad horizontal y conflictos de convivencia
          </span>

          <h1 className={styles.title}>
            Conflictos entre vecinos en propiedad horizontal: cómo resolver
            problemas de convivencia en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos entre vecinos hacen parte de los problemas más
            comunes en edificios, conjuntos residenciales y copropiedades en
            Colombia. Situaciones relacionadas con ruidos excesivos, mascotas,
            parqueaderos, zonas comunes, filtraciones, fiestas, remodelaciones o
            incumplimiento del reglamento de propiedad horizontal pueden
            deteriorar la convivencia y generar tensiones permanentes entre
            residentes.
          </p>

          <p className={styles.heroText}>
            Aunque muchas personas consideran que la única solución es acudir a
            una demanda, en la práctica la <strong>conciliación</strong> suele
            ser una de las alternativas más rápidas, económicas y efectivas para
            alcanzar acuerdos con validez jurídica, evitando procesos largos y
            preservando la convivencia dentro de la comunidad.
          </p>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Problemas más frecuentes entre vecinos en Colombia
          </h2>

          <ul className={styles.list}>
            <li>Ruidos excesivos durante el día o la noche.</li>

            <li>Fiestas frecuentes y música con alto volumen.</li>

            <li>Mascotas que generan molestias constantes.</li>

            <li>Daños ocasionados por filtraciones o humedades.</li>

            <li>Uso indebido de ascensores y zonas comunes.</li>

            <li>Parqueo en lugares no autorizados.</li>

            <li>Basuras o malos olores.</li>

            <li>Incumplimiento del reglamento de propiedad horizontal.</li>

            <li>Amenazas, agresiones o faltas de respeto.</li>

            <li>Remodelaciones que afectan otros apartamentos.</li>
          </ul>

          <p className={styles.paragraph}>
            Aunque cada caso tiene particularidades, la mayoría de estos
            conflictos pueden resolverse mediante diálogo y conciliación antes
            de acudir a una autoridad judicial.
          </p>
        </div>

        {/* DERECHOS Y OBLIGACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué dice la Ley de Propiedad Horizontal sobre la convivencia?
          </h2>

          <p className={styles.paragraph}>
            La Ley 675 de 2001 establece derechos y obligaciones para
            propietarios, residentes y administraciones de propiedad horizontal.
            Su finalidad es garantizar una convivencia armónica dentro de los
            edificios y conjuntos residenciales.
          </p>

          <p className={styles.paragraph}>
            Además del reglamento interno de cada copropiedad, los residentes
            deben respetar horarios, zonas comunes, normas de seguridad y los
            derechos de los demás vecinos.
          </p>

          <p className={styles.paragraph}>
            Cuando estas reglas son desconocidas o incumplidas de manera
            reiterada, pueden surgir conflictos que, dependiendo del caso,
            pueden solucionarse mediante conciliación.
          </p>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué la conciliación suele ser la mejor alternativa?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Evita procesos judiciales largos</h3>

              <p>
                Resolver el conflicto mediante diálogo suele ahorrar tiempo,
                dinero y desgaste emocional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conserva la convivencia</h3>

              <p>
                Permite que las personas continúen compartiendo los espacios
                comunes sin mantener conflictos permanentes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos con respaldo jurídico</h3>

              <p>
                Cuando existe acuerdo, este queda consignado en un acta con
                efectos legales para las partes.
              </p>
            </div>
          </div>
        </div>

        {/* CASOS DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos que normalmente pueden resolverse mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ruidos excesivos</h3>

              <p>
                Horarios para fiestas, música, remodelaciones o actividades que
                generan molestias.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mascotas</h3>

              <p>
                Acuerdos sobre tenencia responsable, limpieza y control dentro
                de las zonas comunes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Parqueaderos</h3>

              <p>
                Solución de disputas por asignación, uso indebido o invasión de
                espacios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Zonas comunes</h3>

              <p>
                Definición de reglas para salones comunales, piscinas, jardines
                y demás espacios compartidos.
              </p>
            </div>
          </div>
        </div>

        {/* CUANDO ACUDIR AL ADMINISTRADOR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo acudir al administrador y cuándo solicitar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos requieren acudir inmediatamente a un centro
            de conciliación. En muchos casos, el administrador o el consejo de
            administración pueden intervenir inicialmente para intentar
            solucionar el problema mediante la aplicación del reglamento de
            propiedad horizontal.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, cuando las diferencias persisten, afectan la
            convivencia o involucran obligaciones entre vecinos, la conciliación
            se convierte en una alternativa idónea para construir acuerdos con
            efectos jurídicos sin acudir directamente a un proceso judicial.
          </p>
        </div>

        {/* PASO A PASO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Paso a paso para resolver un conflicto entre vecinos mediante
            conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Paso 1</h3>
              <p>
                Identificar claramente el problema y reunir la información
                necesaria.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 2</h3>
              <p>
                Solicitar una audiencia ante un centro de conciliación
                autorizado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 3</h3>
              <p>
                Asistir a la audiencia y exponer la situación ante el
                conciliador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 4</h3>
              <p>
                Si existe acuerdo, este queda consignado en un acta con efectos
                legales.
              </p>
            </div>
          </div>
        </div>

        {/* NO SE LOGRA UN ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se logra un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos terminan con una conciliación exitosa. Si
            las partes no alcanzan un acuerdo, cada una conserva la posibilidad
            de acudir a las autoridades administrativas o judiciales
            competentes, según la naturaleza del conflicto.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, intentar una solución dialogada suele demostrar buena
            fe y en muchos casos permite resolver el problema antes de llegar a
            un litigio.
          </p>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación en Colombia
            para exponer el conflicto y buscar una solución amigable.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, este queda registrado en un acta con efectos legales
            obligatorios.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Acuerdos de convivencia.</li>
            <li>Compromisos de respeto de horarios.</li>
            <li>Regulación del uso de zonas comunes.</li>
            <li>Compensaciones por daños o molestias.</li>
            <li>Acuerdos entre vecinos para resolver conflictos.</li>
          </ul>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que suelen empeorar los conflictos entre vecinos
          </h2>

          <ul className={styles.list}>
            <li>Responder con agresiones o amenazas.</li>

            <li>
              Intentar resolver el problema mediante discusiones públicas.
            </li>

            <li>
              No documentar los hechos cuando el conflicto es reiterativo.
            </li>

            <li>Ignorar el reglamento de propiedad horizontal.</li>

            <li>Esperar demasiado tiempo antes de buscar una solución.</li>

            <li>
              No asistir a las citaciones realizadas por el centro de
              conciliación.
            </li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación o demanda: ¿qué opción suele ser más conveniente?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>

              <p>
                Favorece el diálogo, reduce costos, toma menos tiempo y permite
                alcanzar acuerdos voluntarios entre los vecinos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Proceso judicial</h3>

              <p>
                Puede ser necesario cuando no existe acuerdo, aunque normalmente
                implica mayores tiempos, costos y desgaste para las partes.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre conflictos entre vecinos en propiedad
            horizontal
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es obligatorio asistir a una conciliación entre vecinos?</h3>

              <p>
                Depende del tipo de conflicto y de las normas aplicables al
                caso. En muchos asuntos de convivencia la conciliación es una
                alternativa altamente recomendable porque permite solucionar el
                problema de forma rápida y sin acudir inmediatamente a un
                proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si el vecino no asiste a la audiencia?</h3>

              <p>
                La inasistencia puede dejar constancia de que no fue posible
                lograr un acuerdo. Dependiendo del caso, esto puede permitir que
                la parte interesada continúe con otras acciones legales o
                administrativas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Los acuerdos alcanzados tienen validez jurídica?</h3>

              <p>
                Sí. Cuando las partes llegan a un acuerdo y este queda
                consignado en un acta de conciliación, el documento produce
                efectos jurídicos y resulta obligatorio para quienes lo
                suscribieron.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué conflictos pueden resolverse mediante conciliación?</h3>

              <p>
                Es frecuente conciliar diferencias relacionadas con ruidos
                excesivos, mascotas, parqueaderos, uso de zonas comunes,
                filtraciones, daños entre apartamentos, molestias reiteradas y
                otros problemas derivados de la convivencia en propiedad
                horizontal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Primero debo acudir al administrador del conjunto?</h3>

              <p>
                Siempre es recomendable intentar una solución con el
                administrador o el consejo de administración. Si el conflicto
                continúa o las partes no logran ponerse de acuerdo, la
                conciliación ofrece un espacio neutral para encontrar una
                solución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto tiempo puede durar una conciliación?</h3>

              <p>
                El tiempo depende de la disponibilidad de las partes y de la
                complejidad del conflicto. Sin embargo, normalmente es mucho más
                rápida que un proceso judicial y permite alcanzar soluciones en
                menos tiempo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación evita presentar una demanda?</h3>

              <p>
                En muchos casos sí. Cuando las partes logran un acuerdo, se
                evita iniciar un proceso judicial, lo que representa un ahorro
                de tiempo, costos y desgaste emocional para todos los
                involucrados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Qué ocurre si después de conciliar una persona incumple el
                acuerdo?
              </h3>

              <p>
                Si el acta contiene obligaciones claras, expresas y exigibles,
                la parte afectada podrá iniciar las acciones legales
                correspondientes para exigir su cumplimiento conforme a la
                legislación colombiana.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto con un vecino y quieres resolverlo sin llegar a
            un juicio?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación te orientamos para gestionar
            conflictos de convivencia en propiedad horizontal, buscar acuerdos
            entre las partes y formalizar soluciones con respaldo jurídico,
            reduciendo tiempos, costos y el desgaste que implica un proceso
            judicial.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un conciliador
          </a>
        </div>
      </motion.article>
    </section>
  );
}
