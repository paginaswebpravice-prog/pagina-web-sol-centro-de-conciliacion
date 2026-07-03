"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function AcuerdosCivilesContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación y acuerdos civiles</span>

          <h1 className={styles.title}>
            Acuerdos civiles extrajudiciales en Colombia: guía completa,
            ejemplos, requisitos y validez legal
          </h1>

          <p className={styles.heroText}>
            Los acuerdos civiles extrajudiciales son una alternativa eficaz para
            resolver conflictos sin necesidad de iniciar un proceso judicial.
            Mediante el diálogo y la conciliación, las partes pueden llegar a
            soluciones rápidas, económicas y con plena seguridad jurídica.
          </p>

          <p className={styles.heroText}>
            En Colombia, este mecanismo es ampliamente utilizado para resolver
            disputas relacionadas con deudas, incumplimientos de contratos,
            conflictos entre vecinos, arrendamientos y otras controversias de
            naturaleza civil.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un acuerdo civil extrajudicial y cuándo conviene realizarlo
            en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Es un acuerdo voluntario celebrado entre dos o más personas para
            solucionar un conflicto civil sin acudir inicialmente a un juez.
          </p>

          <p className={styles.paragraph}>
            Cuando el acuerdo se logra mediante conciliación, puede quedar
            plasmado en un acta que genera efectos jurídicos y brinda seguridad
            a las partes involucradas.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite que las partes construyan soluciones
              adaptadas a sus necesidades, evitando los costos y tiempos de un
              proceso judicial tradicional.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación civil paso a paso en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación civil es un procedimiento mediante el cual dos o más
            personas intentan solucionar un conflicto con la ayuda de un
            conciliador imparcial. El objetivo es construir un acuerdo que
            beneficie a ambas partes sin acudir a un proceso judicial
            prolongado.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud</h3>
              <p>
                Una de las partes presenta la solicitud de conciliación
                indicando el conflicto que desea resolver.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>
              <p>
                El centro de conciliación programa la audiencia e informa a las
                partes la fecha, hora y lugar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>
              <p>
                Cada parte expone su posición mientras el conciliador facilita
                el diálogo para encontrar alternativas de solución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Acta</h3>
              <p>
                Si existe acuerdo, este queda consignado en un acta con efectos
                jurídicos y obligaciones claramente definidas.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ejemplos de conflictos civiles que pueden solucionarse mediante
            conciliación
          </h2>

          <p className={styles.paragraph}>
            La conciliación civil puede utilizarse para resolver múltiples
            controversias entre particulares y empresas siempre que la ley
            permita la conciliación sobre el asunto discutido.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Deudas entre particulares</h3>
              <p>
                Acuerdos para pagar préstamos personales, obligaciones
                económicas o dinero prestado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>
              <p>
                Mora en cánones, entrega del inmueble, reparaciones y demás
                diferencias derivadas del contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimiento de contratos</h3>
              <p>
                Conflictos derivados del incumplimiento de obligaciones pactadas
                entre personas naturales o empresas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños y perjuicios</h3>
              <p>
                Indemnizaciones por afectaciones económicas ocasionadas por
                actuaciones de una de las partes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué debe contener un acuerdo civil para evitar futuros conflictos?
          </h2>

          <p className={styles.paragraph}>
            Un acuerdo correctamente elaborado disminuye la posibilidad de
            nuevos desacuerdos y facilita su cumplimiento.
          </p>

          <ul className={styles.list}>
            <li>Identificación completa de las partes.</li>
            <li>Descripción clara del conflicto.</li>
            <li>Obligaciones específicas.</li>
            <li>Valores exactos.</li>
            <li>Fechas de cumplimiento.</li>
            <li>Forma de pago o entrega.</li>
            <li>Consecuencias del incumplimiento.</li>
            <li>Firmas de las partes.</li>
            <li>Datos del conciliador.</li>
            <li>Información del centro de conciliación.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos civiles pueden resolverse mediante conciliación
            extrajudicial?
          </h2>

          <ul className={styles.list}>
            <li>Deudas entre particulares.</li>
            <li>Incumplimientos contractuales.</li>
            <li>Conflictos por arrendamiento.</li>
            <li>Daños y perjuicios.</li>
            <li>Responsabilidad civil.</li>
            <li>Problemas de convivencia vecinal.</li>
            <li>Obligaciones económicas pendientes.</li>
            <li>Conflictos comerciales de menor complejidad.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de un acuerdo civil extrajudicial frente a una demanda
            judicial
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menor tiempo</h3>

              <p>
                Los acuerdos pueden alcanzarse en semanas, mientras que un
                proceso judicial puede tardar meses o años.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Se reducen gastos asociados a litigios, trámites y actuaciones
                judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor flexibilidad</h3>

              <p>
                Las partes pueden construir soluciones personalizadas según sus
                necesidades particulares.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Los acuerdos civiles extrajudiciales tienen validez legal en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            Cuando un acuerdo es alcanzado mediante conciliación ante un centro
            autorizado, el acta resultante puede tener efectos jurídicos
            obligatorios para las partes.
          </p>

          <p className={styles.paragraph}>
            Esto significa que el compromiso adquirido puede exigirse en caso de
            incumplimiento, brindando seguridad jurídica a quienes participan en
            el proceso conciliatorio.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable acudir primero a un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Siempre que exista disposición de diálogo entre las partes, la
            conciliación representa una excelente oportunidad para resolver el
            conflicto sin llegar a instancias judiciales.
          </p>

          <p className={styles.paragraph}>
            Además de ahorrar tiempo y dinero, los acuerdos civiles ayudan a
            preservar relaciones personales, familiares y comerciales que
            podrían deteriorarse durante un litigio prolongado.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si una de las partes incumple el acuerdo civil?
          </h2>

          <p className={styles.paragraph}>
            Cuando el acuerdo ha sido celebrado mediante conciliación y consta
            en un acta, su incumplimiento puede generar actuaciones judiciales
            encaminadas a exigir el cumplimiento de las obligaciones pactadas.
          </p>

          <p className={styles.paragraph}>
            Por esta razón resulta fundamental que el acuerdo contenga
            obligaciones claras, verificables y fácilmente ejecutables, evitando
            cláusulas ambiguas que puedan dar lugar a nuevas controversias.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo bien redactado protege tanto a quien debe cumplir una
              obligación como a quien tiene derecho a exigir su cumplimiento.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que normalmente se requieren para una conciliación civil
          </h2>

          <p className={styles.paragraph}>
            Dependiendo del conflicto, el conciliador podrá solicitar documentos
            que permitan comprender el origen de la controversia y facilitar la
            búsqueda de una solución.
          </p>

          <ul className={styles.list}>
            <li>Documento de identidad.</li>
            <li>Contratos relacionados con el conflicto.</li>
            <li>Facturas.</li>
            <li>Comprobantes de pago.</li>
            <li>Correos electrónicos.</li>
            <li>Mensajes.</li>
            <li>Cotizaciones.</li>
            <li>Recibos.</li>
            <li>Soportes adicionales que demuestren las obligaciones.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al firmar un acuerdo civil extrajudicial
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No fijar fechas</h3>
              <p>
                Los acuerdos deben indicar exactamente cuándo deben cumplirse
                las obligaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Montos ambiguos</h3>
              <p>
                Es recomendable establecer valores exactos para evitar
                interpretaciones posteriores.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No definir consecuencias</h3>
              <p>
                Debe establecerse qué ocurre si alguna de las partes incumple el
                acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Información incompleta</h3>
              <p>
                La identificación incorrecta de las partes puede generar
                dificultades jurídicas posteriores.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es obligatorio demandar primero?</h3>

              <p>
                No. En muchos casos la conciliación puede intentarse antes de
                iniciar cualquier proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo queda por escrito?</h3>

              <p>
                Sí. Los acuerdos conciliatorios normalmente quedan consignados
                en un acta formal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Sirve para recuperar dinero?</h3>

              <p>
                Sí. Muchas obligaciones económicas pueden resolverse mediante
                acuerdos civiles extrajudiciales.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué acudir a un centro de conciliación antes de presentar una
            demanda?
          </h2>

          <p className={styles.paragraph}>
            Intentar una conciliación permite explorar soluciones rápidas,
            flexibles y ajustadas a las necesidades de las partes. Además de
            ahorrar tiempo y costos, puede contribuir a preservar relaciones
            comerciales, familiares o personales que podrían deteriorarse
            durante un litigio.
          </p>

          <p className={styles.paragraph}>
            Cuando se alcanza un acuerdo, este queda consignado en un acta de
            conciliación con efectos jurídicos, brindando mayor seguridad frente
            al cumplimiento de las obligaciones asumidas.
          </p>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto civil?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, acuerdos
            extrajudiciales, obligaciones económicas y resolución de conflictos
            en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
