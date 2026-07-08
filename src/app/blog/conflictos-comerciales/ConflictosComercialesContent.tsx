"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConflictosComercialesContent() {
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
            Conciliación comercial para empresas y comerciantes en Colombia
          </span>

          <h1 className={styles.title}>
            Conflictos comerciales en Colombia: cómo resolverlos mediante
            conciliación sin acudir a un juicio
          </h1>

          <p className={styles.heroText}>
            Los conflictos comerciales hacen parte de la dinámica de cualquier
            empresa. El incumplimiento de contratos, las facturas sin pagar, los
            desacuerdos entre socios, los problemas con proveedores o las
            diferencias con clientes pueden afectar la estabilidad financiera y
            el crecimiento de un negocio si no se gestionan oportunamente.
          </p>

          <p className={styles.heroText}>
            Antes de iniciar un proceso judicial, la conciliación comercial
            ofrece una alternativa práctica para negociar soluciones, reducir
            costos y proteger las relaciones comerciales. En muchos casos, este
            mecanismo permite alcanzar acuerdos con plena validez jurídica en
            menos tiempo que un litigio.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás qué conflictos pueden resolverse mediante
            conciliación, cuáles son sus ventajas, cómo funciona el
            procedimiento y en qué situaciones resulta conveniente acudir a un
            centro de conciliación en Colombia.
          </p>
        </div>

        {/* QUE ES LA CONCILIACION COMERCIAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación comercial y para qué sirve?
          </h2>

          <p className={styles.paragraph}>
            La conciliación comercial es un mecanismo alternativo de solución de
            conflictos mediante el cual empresarios, comerciantes, proveedores,
            clientes o socios intentan resolver una controversia con la
            intervención de un conciliador imparcial. El objetivo es construir
            un acuerdo voluntario que beneficie a ambas partes sin necesidad de
            acudir inmediatamente a un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo resulta especialmente útil cuando existe disposición
            para negociar y las partes buscan proteger la continuidad de sus
            relaciones comerciales. Además de reducir tiempos y costos, la
            conciliación ofrece mayor flexibilidad para diseñar soluciones
            adaptadas a las necesidades de cada negocio.
          </p>

          <p className={styles.paragraph}>
            Cuando se logra un acuerdo, este queda consignado en un acta de
            conciliación que produce efectos jurídicos, brindando seguridad y
            confianza a quienes participan en el procedimiento.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cada vez más empresas en Colombia utilizan la conciliación como
              una estrategia para resolver diferencias comerciales sin afectar
              la continuidad de sus operaciones.
            </p>
          </div>
        </div>

        {/* CONFLICTOS QUE PUEDEN CONCILIARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos comerciales pueden resolverse mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación comercial puede utilizarse para resolver una amplia
            variedad de controversias derivadas de relaciones empresariales,
            contratos mercantiles y obligaciones económicas. Siempre que el
            asunto sea conciliable, las partes tienen la posibilidad de
            construir una solución negociada.
          </p>

          <ul className={styles.list}>
            <li>Incumplimiento de contratos comerciales.</li>
            <li>Retrasos o falta de pago de facturas.</li>
            <li>Conflictos entre socios de una empresa.</li>
            <li>Diferencias con proveedores.</li>
            <li>Incumplimientos en la prestación de servicios.</li>
            <li>Problemas relacionados con la entrega de mercancías.</li>
            <li>Reclamaciones por calidad de productos.</li>
            <li>Reconocimiento y pago de obligaciones económicas.</li>
            <li>Interpretación de cláusulas contractuales.</li>
            <li>
              Controversias derivadas de relaciones comerciales permanentes.
            </li>
          </ul>
        </div>

        {/* VENTAJAS DE LA CONCILIACION COMERCIAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué cada vez más empresas utilizan la conciliación comercial?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Resolución más rápida</h3>

              <p>
                Permite solucionar controversias en un tiempo considerablemente
                menor que un proceso judicial tradicional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Reduce gastos relacionados con demandas, honorarios,
                desplazamientos y actuaciones judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Protección de las relaciones comerciales</h3>

              <p>
                Favorece el diálogo y facilita que clientes, proveedores o
                socios continúen desarrollando sus actividades comerciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos flexibles</h3>

              <p>
                Las partes pueden construir soluciones adaptadas a sus
                necesidades, siempre dentro del marco legal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                Los acuerdos formalizados mediante un acta de conciliación
                generan efectos legales y pueden hacerse cumplir.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor confidencialidad</h3>

              <p>
                Muchas empresas prefieren resolver sus diferencias sin la
                exposición que puede implicar un litigio judicial.
              </p>
            </div>
          </div>
        </div>

        {/* ACUERDOS QUE PUEDEN CONCILIARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué acuerdos pueden lograrse en una conciliación comercial?
          </h2>

          <p className={styles.paragraph}>
            Una de las principales ventajas de la conciliación comercial es la
            flexibilidad para construir soluciones adaptadas a la realidad de
            cada empresa. A diferencia de un proceso judicial, las partes
            conservan el control sobre el resultado y pueden negociar
            alternativas que beneficien a ambos.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del conflicto, es posible acordar nuevas condiciones de
            pago, modificaciones contractuales, cronogramas de cumplimiento,
            entrega de productos, compensaciones económicas, descuentos,
            devolución de dinero o incluso la terminación consensuada de la
            relación comercial.
          </p>

          <p className={styles.paragraph}>
            Cuando el acuerdo queda consignado en un acta de conciliación, este
            adquiere efectos jurídicos, brindando mayor seguridad a las partes y
            reduciendo el riesgo de futuros conflictos.
          </p>
        </div>

        {/* VALIDEZ JURIDICA DE LOS ACUERDOS COMERCIALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Los acuerdos comerciales tienen validez jurídica?
          </h2>

          <p className={styles.paragraph}>
            Sí. Cuando la conciliación se realiza ante un centro autorizado, el
            acuerdo alcanzado queda consignado en un acta de conciliación con
            efectos legales. Esto significa que las obligaciones pactadas pueden
            exigirse en caso de incumplimiento, brindando seguridad jurídica
            tanto a empresas como a comerciantes.
          </p>

          <p className={styles.paragraph}>
            Gracias a esta garantía, la conciliación comercial se ha convertido
            en una alternativa ampliamente utilizada para resolver controversias
            relacionadas con contratos, pagos, prestación de servicios,
            suministro de bienes, obligaciones económicas y otros asuntos
            empresariales.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Resolver un conflicto mediante conciliación no solo reduce tiempos
              y costos, sino que también permite conservar relaciones
              comerciales que podrían verse afectadas por un proceso judicial
              prolongado.
            </p>
          </div>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos en los que la conciliación comercial suele ser la mejor
            alternativa
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Incumplimiento de contratos</h3>

              <p>
                Cuando una empresa no cumple los términos pactados, la
                conciliación permite renegociar obligaciones antes de acudir a
                un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Facturas y pagos pendientes</h3>

              <p>
                Facilita acuerdos de pago, refinanciaciones y reconocimiento de
                deudas entre clientes, proveedores o empresas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos entre socios</h3>

              <p>
                Ayuda a encontrar soluciones sobre administración, utilidades,
                responsabilidades y continuidad del negocio.
              </p>
            </div>
          </div>
        </div>

        {/* CUANDO ES RECOMENDABLE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable acudir a una conciliación comercial?
          </h2>

          <p className={styles.paragraph}>
            La conciliación resulta especialmente útil cuando las partes desean
            resolver el conflicto sin deteriorar completamente la relación
            comercial. También es recomendable cuando existe disposición para
            negociar, pero las diferencias han impedido llegar a un acuerdo
            directo.
          </p>

          <p className={styles.paragraph}>
            Acudir tempranamente a este mecanismo puede evitar demandas, reducir
            costos legales y minimizar el impacto financiero que generan los
            litigios prolongados para empresas y comerciantes.
          </p>
        </div>

        {/* ERRORES QUE SULEN AGRAVAR LOS CONFLICTOS COMERCIALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que suelen agravar los conflictos comerciales
          </h2>

          <ul className={styles.list}>
            <li>Ignorar los requerimientos de la otra parte.</li>
            <li>Retrasar innecesariamente las negociaciones.</li>
            <li>No documentar los acuerdos alcanzados.</li>
            <li>Suspender completamente la comunicación.</li>
            <li>
              Acudir directamente a un proceso judicial sin intentar una
              solución negociada.
            </li>
            <li>
              No contar con orientación jurídica antes de tomar decisiones
              importantes.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En muchos casos, una intervención temprana mediante conciliación
              permite evitar que un desacuerdo comercial termine afectando la
              estabilidad financiera o la reputación de una empresa.
            </p>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación en conflictos comerciales
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puede asistir una empresa a conciliación?</h3>

              <p>
                Sí. Las personas jurídicas pueden participar por medio de su
                representante legal o de un apoderado debidamente autorizado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Sirve para cobrar facturas o deudas?</h3>

              <p>
                Sí. La conciliación es una alternativa ampliamente utilizada
                para negociar el pago de facturas, obligaciones económicas y
                acuerdos de financiación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si no se alcanza un acuerdo?</h3>

              <p>
                Si la conciliación no prospera, las partes conservan el derecho
                de acudir posteriormente a la jurisdicción competente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Los acuerdos son obligatorios?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos y las
                obligaciones allí pactadas pueden exigirse conforme a la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Es posible conciliar entre empresas de diferentes ciudades?
              </h3>

              <p>
                Sí. Dependiendo del centro de conciliación, el procedimiento
                puede desarrollarse incluso mediante audiencias virtuales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto tiempo puede tardar una conciliación?</h3>

              <p>
                El tiempo depende de la complejidad del caso y de la disposición
                de las partes, aunque normalmente es mucho menor que un proceso
                judicial.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto comercial con un cliente, proveedor, socio o
            empresa?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación para resolver disputas comerciales mediante
            conciliación en Colombia. Te acompañamos en conflictos relacionados
            con incumplimientos contractuales, cobro de facturas, obligaciones
            económicas, diferencias entre socios, proveedores y demás
            controversias empresariales, buscando una solución rápida, segura y
            con respaldo jurídico.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un conciliador especializado
          </a>
        </div>
      </motion.article>
    </section>
  );
}
