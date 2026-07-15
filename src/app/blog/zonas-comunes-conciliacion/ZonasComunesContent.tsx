"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ZonasComunesContent() {
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
            Propiedad Horizontal • Conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            Uso de zonas comunes en propiedad horizontal: derechos, obligaciones
            y cómo resolver conflictos mediante conciliación
          </h1>

          <p className={styles.heroText}>
            El uso de las zonas comunes en edificios y conjuntos residenciales
            suele ser uno de los principales motivos de conflictos entre
            vecinos, residentes, visitantes y administraciones. Situaciones
            relacionadas con parqueaderos, piscinas, salones comunales,
            ascensores, pasillos o zonas verdes pueden afectar la convivencia
            cuando no existe claridad sobre los derechos y obligaciones de cada
            persona.
          </p>

          <p className={styles.heroText}>
            En Colombia, la conciliación permite solucionar este tipo de
            diferencias de manera rápida, confidencial y con plenos efectos
            jurídicos, evitando en muchos casos procesos administrativos o
            judiciales más largos y costosos.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son las zonas comunes en una propiedad horizontal?
          </h2>

          <p className={styles.paragraph}>
            Las zonas comunes son todos aquellos espacios que pertenecen a la
            copropiedad y cuyo uso corresponde a todos los propietarios,
            residentes o usuarios, conforme al reglamento de propiedad
            horizontal y a la legislación colombiana.
          </p>

          <p className={styles.paragraph}>
            Su utilización debe realizarse respetando las normas de convivencia,
            horarios, capacidad de uso y las decisiones adoptadas por la
            asamblea de copropietarios o la administración cuando corresponda.
          </p>

          <p className={styles.paragraph}>
            Aunque estos espacios son compartidos, ello no significa que puedan
            utilizarse libremente sin restricciones. Cada conjunto residencial
            puede establecer reglas razonables siempre que no desconozcan los
            derechos de los residentes.
          </p>
        </div>

        {/* LEY 675 DE 2001 */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué dice la Ley 675 de 2001 sobre las zonas comunes?
          </h2>

          <p className={styles.paragraph}>
            La Ley 675 de 2001 regula el régimen de propiedad horizontal en
            Colombia y establece que las zonas comunes pertenecen a todos los
            copropietarios. Asimismo, dispone que su administración,
            conservación y utilización deben realizarse conforme al reglamento
            de propiedad horizontal y a las decisiones adoptadas por la asamblea
            de copropietarios.
          </p>

          <p className={styles.paragraph}>
            Cuando surgen diferencias por el uso de estos espacios, la
            conciliación se convierte en una alternativa eficaz para solucionar
            el conflicto sin acudir inmediatamente a un proceso judicial,
            favoreciendo la convivencia dentro de la copropiedad.
          </p>
        </div>

        {/* CUANDO ACUDIR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo acudir a la administración y cuándo solicitar una
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            En muchos casos el primer paso consiste en informar la situación al
            administrador o al consejo de administración para que intenten
            solucionar el problema aplicando el reglamento interno.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, cuando las conversaciones no generan resultados,
            existen incumplimientos reiterados o las partes mantienen posiciones
            opuestas, la conciliación ofrece un espacio imparcial para construir
            acuerdos que permitan resolver el conflicto sin prolongar la
            disputa.
          </p>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos más frecuentes por el uso de zonas comunes
          </h2>

          <p className={styles.paragraph}>
            La mayoría de controversias en propiedad horizontal surgen por el
            uso inadecuado de espacios compartidos o por interpretaciones
            diferentes del reglamento interno.
          </p>

          <ul className={styles.list}>
            <li>Uso indebido o permanente de parqueaderos comunes.</li>

            <li>Reserva irregular de salones comunales.</li>

            <li>
              Incumplimiento de horarios en piscinas, gimnasios o zonas húmedas.
            </li>

            <li>Daños ocasionados en ascensores o áreas comunes.</li>

            <li>Realización de fiestas que afectan la tranquilidad.</li>

            <li>Almacenamiento de objetos en pasillos o escaleras.</li>

            <li>Uso de zonas verdes sin autorización.</li>

            <li>Conflictos por visitantes y vehículos.</li>

            <li>Problemas relacionados con mascotas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Muchos de estos conflictos no requieren una demanda. La
              conciliación suele permitir que vecinos y administración
              encuentren acuerdos prácticos, evitando que el problema escale y
              deteriore la convivencia del conjunto.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué acudir primero a una conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conserva la convivencia</h3>

              <p>
                Favorece el diálogo entre vecinos sin deteriorar las relaciones
                dentro del conjunto residencial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reduce tiempos</h3>

              <p>
                Generalmente permite encontrar soluciones mucho más rápido que
                un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos con efectos legales</h3>

              <p>
                Si las partes llegan a un acuerdo, el acta de conciliación puede
                tener mérito ejecutivo y hacer tránsito a cosa juzgada.
              </p>
            </div>
          </div>
        </div>

        {/* CONFLICTOS COMUNES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué zonas comunes generan más conflictos en Colombia?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Parqueaderos</h3>

              <p>
                Uso de espacios ajenos, invasión de áreas comunes o conflictos
                por asignación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Piscinas y zonas húmedas</h3>

              <p>
                Incumplimiento de horarios, exceso de aforo y daños ocasionados
                por los usuarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Salón comunal</h3>

              <p>
                Problemas relacionados con reservas, eventos privados, aseo y
                entrega del espacio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Zonas verdes</h3>

              <p>
                Uso para actividades no autorizadas, mascotas o afectaciones al
                mobiliario.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ascensores y pasillos</h3>

              <p>
                Transporte de objetos, obstrucciones permanentes y daños
                ocasionados por algunos residentes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Gimnasios</h3>

              <p>
                Incumplimiento del reglamento interno y utilización inadecuada
                de los equipos.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación para exponer el
            conflicto relacionado con el uso de zonas comunes.
          </p>

          <p className={styles.paragraph}>
            Allí se buscan acuerdos que regulen el uso adecuado de los espacios
            compartidos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quiénes pueden participar en una conciliación por zonas comunes?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo del conflicto, pueden intervenir propietarios,
            residentes, arrendatarios, administradores, miembros del consejo de
            administración e incluso representantes de la copropiedad cuando
            resulte necesario.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia cada parte expone su posición y, con el apoyo
            del conciliador, se busca construir un acuerdo que permita
            solucionar el conflicto respetando tanto el reglamento interno como
            la legislación colombiana.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Reglas de uso de zonas comunes.</li>
            <li>Horarios de utilización de espacios.</li>
            <li>Compromisos de convivencia.</li>
            <li>Compensación por daños.</li>
            <li>Acuerdos entre vecinos y administración.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene acudir a un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Buscar una solución temprana suele evitar que pequeños desacuerdos
            se conviertan en conflictos permanentes entre vecinos o en procesos
            judiciales más complejos.
          </p>

          <ul className={styles.list}>
            <li>
              Cuando la administración y el residente no logran ponerse de
              acuerdo.
            </li>

            <li>Si existen reclamaciones por daños en zonas comunes.</li>

            <li>Cuando los problemas de convivencia son repetitivos.</li>

            <li>
              Antes de iniciar una demanda relacionada con propiedad horizontal.
            </li>

            <li>Cuando ambas partes desean llegar a un acuerdo voluntario.</li>
          </ul>
        </div>

        {/* FAQ */}
        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre el uso de zonas comunes en propiedad
            horizontal
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Quién puede usar las zonas comunes?</h3>

              <p>
                Todos los propietarios, residentes y personas autorizadas,
                siempre que respeten el reglamento de propiedad horizontal y las
                normas de convivencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué hacer si un vecino incumple las normas?</h3>

              <p>
                Lo recomendable es intentar una solución dialogada. Si el
                conflicto continúa, la conciliación puede ayudar a alcanzar un
                acuerdo con efectos legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La administración puede limitar el uso de zonas comunes?</h3>

              <p>
                Sí, siempre que las restricciones estén fundamentadas en el
                reglamento, la ley y busquen proteger la convivencia y la
                seguridad de la copropiedad.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Los acuerdos de conciliación son obligatorios?</h3>

              <p>
                Sí. Cuando las partes llegan a un acuerdo y este queda
                consignado en un acta de conciliación, adquiere fuerza jurídica
                y debe cumplirse.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Siempre debo demandar por un conflicto de zonas comunes?</h3>

              <p>
                No. En muchos casos la conciliación permite resolver el problema
                de manera más rápida, económica y preservando la convivencia
                entre los residentes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si una parte incumple el acuerdo?</h3>

              <p>
                Dependiendo del contenido del acta, el acuerdo puede hacerse
                cumplir mediante los mecanismos legales previstos en la
                legislación colombiana.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto por el uso de zonas comunes en tu conjunto
            residencial?
          </h3>

          <p className={styles.ctaText}>
            Si tienes inconvenientes relacionados con parqueaderos, piscinas,
            salones comunales, zonas verdes, mascotas, ruido o cualquier otro
            problema de convivencia en propiedad horizontal, nuestro Centro de
            Conciliación puede ayudarte a encontrar una solución rápida, legal y
            beneficiosa para todas las partes.
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
