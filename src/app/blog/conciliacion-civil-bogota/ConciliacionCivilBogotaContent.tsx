"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionCivilBogotaContent() {
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
            Solución de conflictos civiles sin proceso judicial
          </span>

          <h1 className={styles.title}>
            Conciliación civil en Bogotá: guía completa para resolver conflictos
            de manera rápida y legal
          </h1>

          <p className={styles.heroText}>
            La conciliación civil en Bogotá es uno de los mecanismos más
            utilizados para resolver conflictos entre particulares sin necesidad
            de iniciar un proceso judicial. Gracias a este procedimiento, las
            partes pueden dialogar con la ayuda de un conciliador imparcial y
            construir soluciones que tengan respaldo legal.
          </p>

          <p className={styles.heroText}>
            Este mecanismo resulta especialmente útil cuando existen desacuerdos
            por deudas, incumplimiento de contratos, préstamos de dinero,
            compraventa de bienes, arrendamientos, indemnizaciones, obligaciones
            económicas u otros conflictos patrimoniales que pueden solucionarse
            mediante acuerdos voluntarios.
          </p>

          <p className={styles.heroText}>
            Además de ahorrar tiempo y costos, la conciliación permite que sean
            las propias partes quienes definan la forma en que desean solucionar
            el conflicto, evitando el desgaste que normalmente implica un
            proceso ante un juez.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás cómo funciona la conciliación civil en
            Colombia, cuáles son los asuntos que pueden conciliarse, qué
            ventajas ofrece este mecanismo y qué ocurre cuando las partes logran
            —o no logran— llegar a un acuerdo.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación civil y para qué sirve en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación civil es un mecanismo alternativo de solución de
            conflictos mediante el cual dos o más personas intentan resolver una
            controversia con la intervención de un conciliador imparcial,
            evitando acudir inmediatamente a un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            A diferencia de un juicio, en la conciliación las partes conservan
            el control sobre la solución del conflicto. Esto les permite
            negociar libremente propuestas, plazos, formas de pago o cualquier
            otra condición que sea legalmente posible y beneficie a ambas.
          </p>

          <p className={styles.paragraph}>
            En Colombia este mecanismo es ampliamente utilizado para resolver
            controversias relacionadas con obligaciones económicas, contratos,
            préstamos de dinero, compraventas, arrendamientos, responsabilidad
            civil y otros conflictos patrimoniales entre particulares o
            empresas.
          </p>

          <p className={styles.paragraph}>
            Cuando las partes llegan a un acuerdo, este queda consignado en un
            acta de conciliación que produce efectos jurídicos y brinda mayor
            seguridad frente al cumplimiento de los compromisos adquiridos.
          </p>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse mediante conciliación civil en
            Bogotá?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Deudas entre particulares</h3>
              <p>Acuerdos de pago por obligaciones económicas pendientes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimiento de contratos</h3>
              <p>Solución de conflictos por contratos civiles incumplidos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos patrimoniales</h3>
              <p>Disputas sobre bienes o derechos económicos.</p>
            </div>
          </div>
        </div>

        {/* QUE PUEDE RESOLVERSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos civiles pueden resolverse mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación civil es un mecanismo muy versátil que puede
            utilizarse en numerosos conflictos entre particulares y empresas,
            siempre que la ley permita que las partes lleguen a acuerdos sobre
            sus derechos y obligaciones.
          </p>

          <p className={styles.paragraph}>
            En Bogotá y en el resto de Colombia es frecuente acudir a
            conciliación cuando existen desacuerdos económicos o contractuales
            que pueden resolverse mediante el diálogo antes de iniciar un
            proceso judicial.
          </p>

          <ul className={styles.list}>
            <li>Préstamos de dinero entre particulares.</li>
            <li>Incumplimiento de contratos civiles.</li>
            <li>Compraventa de bienes.</li>
            <li>Arrendamientos y obligaciones económicas.</li>
            <li>Cobro de deudas.</li>
            <li>Incumplimiento de acuerdos de pago.</li>
            <li>Conflictos por responsabilidad civil.</li>
            <li>Reclamaciones por perjuicios patrimoniales.</li>
          </ul>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué elegir la conciliación civil antes de iniciar una demanda?
          </h2>

          <p className={styles.paragraph}>
            Cada vez más personas prefieren acudir primero a la conciliación
            porque representa una alternativa más rápida y flexible que un
            proceso judicial. Además de reducir tiempos y costos, favorece el
            diálogo y permite encontrar soluciones ajustadas a las necesidades
            reales de las partes.
          </p>

          <ul className={styles.list}>
            <li>Evita procesos judiciales largos y costosos.</li>
            <li>Permite acuerdos rápidos entre las partes.</li>
            <li>Reduce gastos legales.</li>
            <li>Tiene validez jurídica en Colombia.</li>
            <li>Promueve soluciones amigables.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En muchos conflictos civiles una sola audiencia puede ser
              suficiente para alcanzar un acuerdo que ponga fin al problema,
              evitando meses o incluso años de litigio.
            </p>
          </div>
        </div>

        {/* PROCESO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de una conciliación civil paso a paso?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso tiene particularidades, la mayoría de
            conciliaciones civiles siguen un procedimiento similar desde la
            presentación de la solicitud hasta la finalización de la audiencia.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Presentación de la solicitud</h3>

              <p>
                La persona interesada radica la solicitud indicando el conflicto
                y los datos de la otra parte.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>

              <p>
                El centro de conciliación programa la audiencia y comunica la
                fecha a las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>

              <p>
                Cada parte expone su posición y el conciliador facilita el
                diálogo para encontrar soluciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Acuerdo</h3>

              <p>
                Si existe consenso, se firma un acta con plena validez jurídica.
              </p>
            </div>
          </div>
        </div>

        {/* DONDE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Dónde solicitar una conciliación civil en Bogotá y Colombia?
          </h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías con funciones conciliatorias.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas habilitadas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá puedes acceder a múltiples entidades autorizadas para
              resolver conflictos civiles de forma legal.
            </p>
          </div>

          <p className={styles.paragraph}>
            Elegir un centro de conciliación autorizado garantiza que el
            procedimiento se desarrolle conforme a la normativa colombiana y que
            el acuerdo alcanzado cuente con los efectos jurídicos previstos por
            la ley.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del centro de conciliación, la audiencia puede
            realizarse de forma presencial o virtual, facilitando la
            participación de personas que se encuentren en diferentes ciudades o
            incluso fuera del país.
          </p>
        </div>

        {/* DOCUMENTACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos se necesitan para una conciliación civil?
          </h2>

          <p className={styles.paragraph}>
            Llevar la documentación adecuada facilita que el conciliador
            comprenda el conflicto y ayuda a que las partes puedan negociar con
            mayor claridad durante la audiencia.
          </p>

          <ul className={styles.list}>
            <li>Documento de identidad.</li>
            <li>Contratos relacionados con el conflicto.</li>
            <li>Facturas o comprobantes de pago.</li>
            <li>Mensajes, correos electrónicos o conversaciones relevantes.</li>
            <li>Recibos, cotizaciones o soportes económicos.</li>
            <li>Cualquier otra prueba que respalde los hechos.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              No todos los casos requieren la misma documentación. Entre más
              completa sea la información presentada, mayores serán las
              posibilidades de lograr un acuerdo claro y bien fundamentado.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué la conciliación civil es una excelente alternativa para
            resolver conflictos?
          </h2>

          <p className={styles.paragraph}>
            La conciliación civil no solo beneficia a quienes tienen un
            conflicto jurídico, sino también al sistema de justicia, ya que
            contribuye a reducir la congestión de los despachos judiciales y
            promueve soluciones construidas directamente por las partes.
          </p>

          <p className={styles.paragraph}>
            Para muchas personas, resolver un conflicto mediante el diálogo
            resulta más conveniente que iniciar un proceso judicial que puede
            extenderse durante un largo período. Esto permite disminuir el
            desgaste económico y emocional que suele acompañar los litigios.
          </p>

          <p className={styles.paragraph}>
            Además, cuando existe disposición para negociar, la conciliación
            favorece la conservación de relaciones personales, familiares,
            comerciales o empresariales, aspecto especialmente importante cuando
            las partes deberán seguir interactuando en el futuro.
          </p>

          <div className={styles.highlightBox}>
            <p>
              En numerosos asuntos civiles, intentar una conciliación antes de
              demandar puede representar la forma más rápida, económica y
              efectiva de solucionar el conflicto.
            </p>
          </div>
        </div>

        {/* NO CUMPLE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si una de las partes no cumple el acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes llegan a un acuerdo durante la audiencia, este
            queda consignado en un acta de conciliación con efectos jurídicos.
            Dicho documento establece las obligaciones, plazos y compromisos
            asumidos por cada una de las partes.
          </p>

          <p className={styles.paragraph}>
            Si posteriormente alguna persona incumple lo pactado, el acta puede
            servir como fundamento para adelantar las acciones legales
            correspondientes, brindando seguridad jurídica al acuerdo alcanzado.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Precisamente por esa seguridad jurídica, muchas personas prefieren
              intentar primero una conciliación antes de iniciar un proceso
              judicial largo y costoso.
            </p>
          </div>
        </div>

        {/* POR QUE INTENTAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué intentar una conciliación civil antes de presentar una
            demanda?
          </h2>

          <p className={styles.paragraph}>
            En numerosos conflictos civiles, la conciliación representa una
            oportunidad para resolver el problema en menor tiempo, con menos
            costos y evitando la incertidumbre propia de un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Además de facilitar acuerdos voluntarios, este mecanismo permite que
            las partes mantengan el control sobre la solución del conflicto,
            construyendo alternativas que muchas veces un juez no podría
            establecer dentro de una sentencia.
          </p>

          <ul className={styles.list}>
            <li>Reduce tiempos de solución.</li>
            <li>Disminuye costos legales.</li>
            <li>Favorece acuerdos flexibles.</li>
            <li>Evita el desgaste emocional de un litigio.</li>
            <li>Conserva relaciones personales y comerciales.</li>
            <li>Brinda seguridad jurídica mediante el acta de conciliación.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar cualquier deuda?</h3>
              <p>Sí, siempre que sea un conflicto entre particulares.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar antes de demandar?</h3>
              <p>En muchos casos sí es requisito previo.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es legal?</h3>
              <p>Sí, tiene plena validez jurídica en Colombia.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto civil sin acudir inmediatamente a
            una demanda?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación para iniciar una conciliación civil en Bogotá. Te
            ayudamos a preparar la solicitud, revisar los documentos necesarios,
            estructurar una estrategia de negociación y aumentar las
            posibilidades de alcanzar un acuerdo con respaldo jurídico.
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
