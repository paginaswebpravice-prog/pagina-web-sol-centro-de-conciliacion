"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RestitucionDineroContent() {
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
            Conciliación civil, recuperación de dinero y acuerdos de pago
          </span>

          <h1 className={styles.title}>
            ¿Cómo recuperar dinero por incumplimiento en Colombia sin iniciar
            una demanda?
          </h1>

          <p className={styles.heroText}>
            Cuando una persona o empresa incumple el pago de una obligación,
            muchas personas creen que la única alternativa es acudir
            inmediatamente a un juez. Sin embargo, en numerosos casos es posible{" "}
            <strong>recuperar dinero mediante conciliación</strong>, un
            mecanismo que permite buscar soluciones rápidas, reducir costos y
            alcanzar acuerdos con efectos jurídicos.
          </p>

          <p className={styles.heroText}>
            La conciliación resulta especialmente útil cuando existen préstamos
            entre particulares, contratos incumplidos, pagos pendientes, ventas
            no entregadas, prestación de servicios inconclusa, deudas
            comerciales o cualquier otra obligación económica susceptible de
            acuerdo entre las partes.
          </p>

          <p className={styles.heroText}>
            En esta guía conocerás{" "}
            <strong>cuándo procede la restitución de dinero</strong>, qué
            documentos fortalecen tu reclamación, cómo se desarrolla una
            audiencia de conciliación y qué ocurre si la persona obligada
            incumple posteriormente el acuerdo firmado.
          </p>
        </div>

        {/* CUANDO PROCEDE LA RESTITUCIÓN DE DINERO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué casos puedes solicitar la restitución de dinero mediante
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            La restitución de dinero procede cuando una persona considera que
            otra tiene la obligación de devolver una suma de dinero y existe la
            posibilidad de resolver el conflicto mediante un acuerdo voluntario.
            Antes de iniciar un proceso judicial, la conciliación permite que
            ambas partes dialoguen con el acompañamiento de un conciliador
            imparcial para buscar una solución que beneficie a todos.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo no solo ayuda a recuperar recursos económicos, sino
            que también contribuye a conservar relaciones personales o
            comerciales cuando existe disposición para negociar.
          </p>

          <ul className={styles.list}>
            <li>Incumplimiento de contratos civiles o comerciales.</li>
            <li>Préstamos de dinero entre familiares o particulares.</li>
            <li>Ventas pagadas que nunca fueron entregadas.</li>
            <li>Servicios contratados que no fueron ejecutados.</li>
            <li>Facturas vencidas.</li>
            <li>Incumplimiento de acuerdos comerciales.</li>
            <li>Pagos efectuados por error.</li>
            <li>Dinero entregado como anticipo.</li>
            <li>Obligaciones derivadas de arrendamientos.</li>
            <li>Deudas reconocidas que aún no han sido canceladas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En muchas ocasiones la conciliación permite obtener un acuerdo de
              pago en una sola audiencia, evitando procesos judiciales que
              pueden extenderse durante meses o incluso años.
            </p>
          </div>
        </div>

        {/* BENEFICIOS DE CONCILIAR ANTES DE DEMANDAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de conciliar antes de demandar
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>

              <p>
                Los acuerdos conciliatorios suelen obtenerse en menos tiempo que
                un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Se reducen gastos asociados a litigios prolongados y procesos
                judiciales complejos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Flexibilidad</h3>

              <p>
                Las partes pueden acordar plazos, cuotas o condiciones de pago
                adaptadas a sus necesidades.
              </p>
            </div>
          </div>
        </div>

        {/* DOCUMENTOS QUE AYUDAN A DEMOSTRAR LA OBLIGACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de intentar recuperar el dinero mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Soluciones más rápidas</h3>

              <p>
                Muchas controversias económicas pueden resolverse en mucho menos
                tiempo que un proceso judicial cuando ambas partes están
                dispuestas a negociar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                La conciliación reduce gastos asociados a procesos judiciales
                largos, notificaciones, actuaciones y otros costos propios del
                litigio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos flexibles</h3>

              <p>
                Es posible pactar pagos por cuotas, descuentos, fechas
                específicas, garantías o cualquier otra fórmula que resulte
                conveniente para ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                Cuando existe un acuerdo, este queda consignado en un acta de
                conciliación que produce efectos jurídicos conforme a la
                legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mejora la comunicación</h3>

              <p>
                El diálogo guiado por un conciliador facilita encontrar
                soluciones prácticas incluso cuando la relación entre las partes
                se encuentra deteriorada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita un proceso judicial inmediato</h3>

              <p>
                En numerosos casos las partes logran solucionar el conflicto sin
                tener que acudir posteriormente ante un juez.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA UNA CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación para recuperar dinero?
          </h2>

          <p className={styles.paragraph}>
            El procedimiento comienza cuando una de las partes presenta una
            solicitud ante un centro de conciliación autorizado, explicando los
            hechos, el valor aproximado de la obligación y las razones por las
            cuales considera que existe un incumplimiento. Posteriormente, el
            centro programa una audiencia e invita a la otra parte para intentar
            construir una solución de manera voluntaria.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia, cada persona tiene la oportunidad de exponer
            su versión de los hechos y presentar los documentos que respalden su
            posición. El conciliador actúa como un tercero imparcial que
            facilita el diálogo, propone alternativas y ayuda a que las partes
            encuentren puntos de acuerdo.
          </p>

          <p className={styles.paragraph}>
            Si ambas partes llegan a un consenso, el acuerdo queda consignado en
            un acta de conciliación que produce efectos jurídicos. Si no es
            posible conciliar, las partes conservan la posibilidad de acudir
            posteriormente a las acciones judiciales que correspondan.
          </p>
        </div>

        {/* PRUEBAS QUE AYUDAN A DEMOSTRAR LA OBLIGACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pruebas fortalecen una solicitud de restitución de dinero?
          </h2>

          <p className={styles.paragraph}>
            Aunque la conciliación privilegia el diálogo entre las partes,
            contar con documentos que demuestren la existencia de la obligación
            facilita la negociación y brinda mayor claridad durante la
            audiencia. No siempre es indispensable disponer de un contrato
            formal, pues existen diferentes medios que pueden servir como
            soporte.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Contratos</h3>

              <p>
                Documentos firmados donde se establezcan obligaciones, valores,
                fechas de pago o condiciones específicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Transferencias bancarias</h3>

              <p>
                Comprobantes de consignaciones, pagos electrónicos o movimientos
                bancarios relacionados con la obligación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mensajes y correos</h3>

              <p>
                Conversaciones por WhatsApp, correos electrónicos o mensajes
                donde la otra parte reconozca la deuda o el incumplimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Facturas y recibos</h3>

              <p>
                Facturas, cuentas de cobro, recibos de pago u otros documentos
                comerciales que acrediten la relación económica.
              </p>
            </div>
          </div>
        </div>

        {/* ERRORES QUE DEBES EVITAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que debes evitar antes de iniciar una conciliación
          </h2>

          <p className={styles.paragraph}>
            Muchas personas cometen errores que dificultan la recuperación del
            dinero o retrasan la posibilidad de alcanzar un acuerdo. Prepararse
            adecuadamente aumenta las probabilidades de éxito durante la
            audiencia.
          </p>

          <ul className={styles.list}>
            <li>No conservar comprobantes de pago o transferencias.</li>

            <li>No documentar los acuerdos realizados entre las partes.</li>

            <li>Esperar demasiado tiempo antes de buscar una solución.</li>

            <li>No calcular correctamente el valor reclamado.</li>

            <li>
              Asistir a la audiencia sin organizar la información relevante.
            </li>

            <li>Negarse completamente al diálogo desde el inicio.</li>

            <li>
              No plantear alternativas de pago que puedan facilitar el acuerdo.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Una conciliación bien preparada permite que las partes concentren
              la discusión en soluciones reales, reduciendo la posibilidad de
              que el conflicto termine en un proceso judicial mucho más largo y
              costoso.
            </p>
          </div>
        </div>

        {/* ASPECTOS QUE PUEDEN INCLUIRSE EN UN ACUERDO DE RESTITución DE DINERO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué aspectos pueden incluirse en un acuerdo de restitución de
            dinero?
          </h2>

          <p className={styles.paragraph}>
            Una de las principales ventajas de la conciliación es que las partes
            tienen libertad para construir soluciones adaptadas a sus
            necesidades. Esto significa que no necesariamente debe pactarse un
            pago inmediato de la totalidad de la deuda; también es posible
            establecer diferentes condiciones que faciliten el cumplimiento de
            la obligación.
          </p>

          <p className={styles.paragraph}>
            El objetivo consiste en lograr un acuerdo que sea realista para
            quien debe pagar y satisfactorio para quien busca recuperar su
            dinero, evitando nuevos conflictos en el futuro.
          </p>

          <ul className={styles.list}>
            <li>Pago total de la obligación.</li>

            <li>Pago mediante cuotas periódicas.</li>

            <li>Fechas específicas para realizar cada pago.</li>

            <li>Entrega de garantías de cumplimiento.</li>

            <li>Reconocimiento del valor adeudado.</li>

            <li>Condonación parcial de intereses cuando exista acuerdo.</li>

            <li>
              Forma de realizar los pagos (transferencia, efectivo u otro
              medio).
            </li>

            <li>Consecuencias en caso de incumplimiento.</li>
          </ul>
        </div>

        {/* ¿QUE SUCEDE SI LAS PARTES NO LLEGAN A UN ACUERDO? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si las partes no llegan a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias terminan con una conciliación exitosa. En
            algunos casos las diferencias entre las partes impiden alcanzar un
            consenso o una de ellas decide no aceptar las propuestas presentadas
            durante la audiencia.
          </p>

          <p className={styles.paragraph}>
            Cuando esto ocurre, la conciliación igualmente resulta útil porque
            deja constancia del intento realizado para solucionar el conflicto
            de manera pacífica. Dependiendo del tipo de asunto, esta actuación
            puede servir como requisito previo para acudir posteriormente ante
            la jurisdicción correspondiente.
          </p>

          <p className={styles.paragraph}>
            Aunque no exista un acuerdo definitivo, muchas personas logran
            comprender mejor la posición de la otra parte y retoman
            posteriormente las negociaciones para evitar un proceso judicial.
          </p>
        </div>

        {/* CASOS FRECUENTES EN LOS QUE SE SOLICITA LA RESTITución DE DINERO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos frecuentes en los que se solicita la restitución de dinero
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamos entre particulares</h3>

              <p>
                Cuando una persona presta dinero y el deudor incumple el pago
                acordado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimiento de contratos</h3>

              <p>
                Contratos civiles o comerciales donde una de las partes incumple
                sus obligaciones económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestación de servicios</h3>

              <p>
                Pagos realizados por servicios que nunca fueron ejecutados o
                fueron prestados de manera incompleta.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Compraventa</h3>

              <p>
                Entrega de dinero por bienes que nunca fueron entregados o
                presentaron incumplimientos importantes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>

              <p>
                Obligaciones económicas derivadas del incumplimiento de
                contratos de arrendamiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Relaciones comerciales</h3>

              <p>
                Facturas pendientes, cuentas por cobrar, acuerdos empresariales
                y demás obligaciones económicas entre comerciantes o empresas.
              </p>
            </div>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la recuperación de dinero mediante
            conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito un abogado para conciliar?</h3>

              <p>
                En muchos casos no es obligatorio. Sin embargo, contar con
                orientación jurídica puede facilitar la preparación de la
                audiencia y la redacción de acuerdos claros.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo reclamar préstamos hechos a familiares o amigos?</h3>

              <p>
                Sí. Siempre que exista una obligación susceptible de
                conciliación y pueda demostrarse mediante algún medio de prueba.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo tiene efectos jurídicos?</h3>

              <p>
                Sí. El acta de conciliación produce efectos legales y puede
                servir como título ejecutivo cuando existe incumplimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué sucede si la otra parte no asiste?</h3>

              <p>
                Dependiendo del caso, el centro de conciliación dejará
                constancia de la inasistencia y la parte interesada podrá
                evaluar las acciones legales correspondientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto tiempo tarda una conciliación?</h3>

              <p>
                El tiempo puede variar según la disponibilidad de las partes y
                la complejidad del conflicto, aunque suele ser considerablemente
                menor que un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo acordar pagos por cuotas?</h3>

              <p>
                Sí. Es una de las soluciones más frecuentes dentro de las
                conciliaciones relacionadas con obligaciones económicas y
                recuperación de dinero.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas recuperar dinero por incumplimiento?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, recuperación de dinero,
            acuerdos de pago y resolución de conflictos económicos en Colombia.
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
