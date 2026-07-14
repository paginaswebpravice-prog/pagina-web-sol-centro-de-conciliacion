"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PagoLiquidacionConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/** HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación laboral • Liquidación laboral • Derechos del trabajador
          </span>

          <h1 className={styles.title}>
            Pago de Liquidación Laboral mediante Conciliación en Colombia: Cómo
            Reclamar, Negociar y Llegar a un Acuerdo
          </h1>

          <p className={styles.heroText}>
            Cuando termina un contrato de trabajo, el empleador tiene la
            obligación de pagar la liquidación laboral correspondiente. Sin
            embargo, en muchas ocasiones surgen diferencias por valores no
            reconocidos, prestaciones sociales pendientes, vacaciones,
            indemnizaciones o incluso por la fecha de pago. En estos casos, la
            conciliación laboral se convierte en una alternativa eficaz para
            resolver el conflicto sin acudir inmediatamente a un proceso
            judicial.
          </p>

          <p className={styles.heroText}>
            Mediante una audiencia de conciliación, trabajador y empleador
            pueden revisar los conceptos reclamados, verificar la liquidación
            realizada, negociar fórmulas de pago y construir acuerdos que tengan
            plena validez jurídica. Esto permite ahorrar tiempo, disminuir
            costos y reducir el riesgo de un litigio prolongado.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás qué incluye una liquidación laboral, cuándo
            es posible conciliar, qué documentos conviene presentar, cuáles son
            los derechos de cada parte y cómo lograr un acuerdo que brinde
            seguridad jurídica tanto al trabajador como al empleador.
          </p>
        </div>

        {/** QUE ES UNA LIQUIDACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la liquidación laboral y qué pagos debe recibir un
            trabajador?
          </h2>

          <p className={styles.paragraph}>
            La liquidación laboral es el conjunto de valores económicos que un
            empleador debe reconocer al finalizar la relación laboral.
            Dependiendo del tipo de contrato, del tiempo trabajado y de las
            circunstancias de la terminación, puede incluir salarios pendientes,
            cesantías, intereses sobre cesantías, primas de servicios,
            vacaciones, indemnizaciones y otros conceptos establecidos por la
            legislación laboral colombiana.
          </p>

          <p className={styles.paragraph}>
            Es común que existan diferencias entre lo que considera el
            trabajador que debe recibir y el cálculo efectuado por la empresa.
            Estas discrepancias pueden deberse a errores de liquidación,
            diferencias en la interpretación del contrato, reconocimiento de
            horas extras, recargos, bonificaciones o prestaciones sociales.
          </p>

          <p className={styles.paragraph}>
            Antes de acudir a un proceso judicial, ambas partes pueden utilizar
            la conciliación para revisar la información disponible, aclarar
            diferencias y alcanzar un acuerdo voluntario que permita solucionar
            el conflicto de forma más rápida.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación laboral no busca favorecer únicamente al
              trabajador o al empleador; su finalidad es construir acuerdos
              equilibrados que respeten la ley y eviten procesos judiciales
              innecesarios.
            </p>
          </div>
        </div>

        {/** SITUACIONES QUE PUEDE CONCILIARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos sobre la liquidación laboral pueden resolverse
            mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación laboral permite resolver una gran variedad de
            diferencias relacionadas con la terminación del contrato de trabajo.
            No solamente sirve cuando el empleador no paga la liquidación, sino
            también cuando existen desacuerdos sobre la forma en que fue
            calculada o sobre los conceptos que deben reconocerse.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia las partes pueden revisar documentos, explicar
            sus posiciones y negociar soluciones que se ajusten a la normativa
            laboral colombiana, evitando que el conflicto escale hasta un
            proceso judicial.
          </p>

          <ul className={styles.list}>
            <li>Liquidaciones laborales calculadas incorrectamente.</li>

            <li>Prestaciones sociales pendientes de pago.</li>

            <li>Cesantías e intereses sobre cesantías.</li>

            <li>Primas de servicios no reconocidas.</li>

            <li>Vacaciones pendientes o mal liquidadas.</li>

            <li>Horas extras, recargos nocturnos y dominicales.</li>

            <li>Salarios pendientes.</li>

            <li>Indemnizaciones por despido.</li>

            <li>Acuerdos para pagar la liquidación por cuotas.</li>

            <li>Reconocimiento de bonificaciones o comisiones.</li>

            <li>Diferencias derivadas de la terminación del contrato.</li>

            <li>Reconocimiento de otros derechos laborales.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Cada caso es diferente. Antes de iniciar una demanda laboral, la
              conciliación puede ofrecer una oportunidad para revisar la
              liquidación, corregir errores y construir un acuerdo que beneficie
              a ambas partes.
            </p>
          </div>
        </div>

        {/** BENEFICIOS DE CONCILIAR UNA LIQUIDACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de conciliar una liquidación laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Solución rápida</h3>

              <p>
                Evita procesos judiciales que pueden extenderse durante meses o
                incluso años.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Reduce gastos asociados a litigios, abogados y trámites
                judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                Los acuerdos alcanzados quedan consignados en un acta con
                efectos legales.
              </p>
            </div>
          </div>
        </div>

        {/** POR QUE MUCHAS EMPRESAS Y TRABAJADORES PREFEREN CONCILIAR ANTES DE DEMANDAR? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué muchas empresas y trabajadores prefieren conciliar antes de
            demandar?
          </h2>

          <p className={styles.paragraph}>
            Un proceso laboral puede tardar meses o incluso años dependiendo de
            la complejidad del caso y de la congestión judicial. La conciliación
            ofrece un escenario mucho más flexible donde ambas partes conservan
            el control sobre la solución del conflicto.
          </p>

          <p className={styles.paragraph}>
            Para el trabajador representa la posibilidad de obtener el pago de
            sus derechos en menor tiempo. Para el empleador significa disminuir
            riesgos jurídicos, costos procesales y posibles condenas derivadas
            de un litigio.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menor tiempo</h3>

              <p>
                La solución puede alcanzarse en una audiencia, evitando procesos
                que normalmente tardan mucho más.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor seguridad</h3>

              <p>
                El acuerdo queda consignado en un acta con efectos jurídicos y
                obligaciones claras para ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Protección de la relación laboral</h3>

              <p>
                Incluso después de terminado el contrato, la conciliación
                permite resolver diferencias mediante el diálogo y evita
                conflictos innecesarios.
              </p>
            </div>
          </div>
        </div>

        {/** COMO FUNCIONA LA CONCILIACION? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            El trabajador o el empleador pueden solicitar una audiencia de
            conciliación ante un centro autorizado. Durante la audiencia se
            revisan las diferencias existentes y se promueve el diálogo entre
            las partes.
          </p>

          <p className={styles.paragraph}>
            Si se alcanza un acuerdo, este queda registrado en un acta de
            conciliación que establece las obligaciones de cada parte y los
            plazos para su cumplimiento.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Documentos recomendados</h2>

          <ul className={styles.list}>
            <li>Contrato de trabajo.</li>
            <li>Desprendibles de nómina.</li>
            <li>Carta de terminación laboral.</li>
            <li>Liquidación presentada por la empresa.</li>
            <li>Comprobantes de pago.</li>
            <li>Soportes de prestaciones sociales.</li>
          </ul>
        </div>

        {/** PASO A PASO PARA CONCILIAR EL PAGO DE UNA LIQUIDACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Paso a paso para conciliar el pago de una liquidación laboral
          </h2>

          <p className={styles.paragraph}>
            Aunque cada conflicto tiene particularidades, normalmente una
            conciliación laboral sigue un procedimiento sencillo que permite a
            las partes exponer sus argumentos y construir soluciones dentro del
            marco legal.
          </p>

          <ol className={styles.list}>
            <li>Solicitud de la audiencia de conciliación.</li>

            <li>Notificación de la otra parte.</li>

            <li>Presentación de documentos laborales.</li>

            <li>Revisión de la liquidación y de los soportes.</li>

            <li>Negociación de los valores discutidos.</li>

            <li>Construcción del acuerdo.</li>

            <li>Firma del acta de conciliación.</li>

            <li>Cumplimiento de las obligaciones pactadas.</li>
          </ol>

          <p className={styles.paragraph}>
            Si no es posible alcanzar un acuerdo, las partes conservan la
            posibilidad de acudir posteriormente ante la jurisdicción laboral
            competente.
          </p>
        </div>

        {/** DOCUMENTOS QUE AYUDAN A DEMOSTRAR EL VALOR REAL DE LA LIQUIDACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que ayudan a demostrar el valor real de la liquidación
            laboral
          </h2>

          <p className={styles.paragraph}>
            Entre mayor información exista sobre la relación laboral, más
            sencillo será verificar si la liquidación fue correctamente
            calculada. Contar con los documentos adecuados facilita la
            negociación y brinda mayor seguridad a las partes durante la
            audiencia.
          </p>

          <ul className={styles.list}>
            <li>Contrato de trabajo.</li>

            <li>Otrosíes o modificaciones contractuales.</li>

            <li>Desprendibles de nómina.</li>

            <li>Comprobantes de pago.</li>

            <li>Carta de renuncia o de terminación.</li>

            <li>Liquidación elaborada por la empresa.</li>

            <li>Historial de vacaciones.</li>

            <li>Soportes de horas extras.</li>

            <li>Correos electrónicos relacionados con la terminación.</li>

            <li>
              Cualquier otro documento que permita verificar los derechos
              laborales.
            </li>
          </ul>
        </div>

        {/** QUE HACER SI LA EMPRESA NO PAGA LA LIQUIDACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer si la empresa no paga la liquidación laboral?
          </h2>

          <p className={styles.paragraph}>
            Una de las consultas más frecuentes al finalizar una relación
            laboral es qué hacer cuando la empresa no paga la liquidación o
            retrasa injustificadamente su pago. Aunque cada caso debe analizarse
            de forma individual, existen mecanismos que permiten buscar una
            solución antes de iniciar un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            La conciliación laboral representa una oportunidad para que
            trabajador y empleador revisen las diferencias existentes,
            verifiquen los valores pendientes y lleguen a un acuerdo que permita
            cumplir las obligaciones de manera voluntaria. En muchos casos este
            mecanismo evita demandas largas y costosas para ambas partes.
          </p>

          <p className={styles.paragraph}>
            Si el empleador reconoce la existencia de una obligación pero
            presenta dificultades económicas temporales, durante la audiencia es
            posible negociar fechas de pago, cuotas, garantías de cumplimiento u
            otras alternativas que beneficien a ambas partes dentro del marco de
            la legislación colombiana.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Esperar demasiado tiempo sin buscar una solución puede hacer que
              el conflicto aumente. Cuando existen diferencias sobre la
              liquidación laboral, acudir oportunamente a una audiencia de
              conciliación suele ser una de las alternativas más eficientes para
              intentar resolver el problema.
            </p>
          </div>
        </div>

        {/** ERRORES MAS COMUNES AL CALCULAR UNA LIQUIDACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores más comunes al calcular una liquidación laboral
          </h2>

          <p className={styles.paragraph}>
            Tanto trabajadores como empleadores pueden cometer errores al
            momento de calcular una liquidación laboral. En ocasiones las
            diferencias obedecen a simples equivocaciones matemáticas, mientras
            que en otras surgen por interpretaciones distintas de la normativa
            laboral o del contrato de trabajo.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No incluir todas las prestaciones sociales</h3>

              <p>
                Es frecuente encontrar liquidaciones donde no se reconocen
                correctamente cesantías, intereses, primas o vacaciones
                pendientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Errores en el tiempo laborado</h3>

              <p>
                Un cálculo incorrecto del período trabajado puede modificar
                significativamente el valor final de la liquidación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Horas extras y recargos</h3>

              <p>
                En algunos casos estos conceptos no son incluidos o presentan
                diferencias frente a lo realmente trabajado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Descuentos no autorizados</h3>

              <p>
                Algunos conflictos surgen porque el trabajador considera que la
                empresa efectuó descuentos que no correspondían.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Indemnizaciones discutidas</h3>

              <p>
                Dependiendo de la forma como terminó el contrato, pueden existir
                desacuerdos sobre la existencia o el valor de una indemnización.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Interpretación del contrato</h3>

              <p>
                Bonificaciones, comisiones u otros beneficios pueden generar
                diferencias entre trabajador y empleador al momento de liquidar
                el contrato.
              </p>
            </div>
          </div>

          <p className={styles.paragraph}>
            Una revisión conjunta durante una audiencia de conciliación permite
            aclarar estos aspectos, analizar los soportes disponibles y
            construir soluciones que disminuyan el riesgo de un litigio laboral.
          </p>
        </div>

        {/** PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre el pago de la liquidación laboral
            mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Puedo conciliar si la empresa no me ha pagado la liquidación?
              </h3>

              <p>
                Sí. La conciliación permite que trabajador y empleador negocien
                el pago de la liquidación, acuerden los valores pendientes e
                incluso establezcan fechas o formas de pago sin acudir
                inmediatamente a un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Qué sucede si no estoy de acuerdo con el cálculo de mi
                liquidación?
              </h3>

              <p>
                Es posible solicitar una audiencia para revisar la liquidación,
                identificar diferencias en prestaciones sociales, vacaciones,
                primas, cesantías, indemnizaciones u otros conceptos laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación tiene la misma validez que un proceso judicial?
              </h3>

              <p>
                El acta de conciliación tiene efectos jurídicos importantes y,
                cuando cumple los requisitos legales, presta mérito ejecutivo y
                hace tránsito a cosa juzgada respecto de lo acordado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede acordar el pago de la liquidación por cuotas?</h3>

              <p>
                Sí. Siempre que ambas partes estén de acuerdo, la conciliación
                permite establecer cronogramas de pago, fechas límite y demás
                condiciones para cumplir las obligaciones adquiridas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si el empleador incumple el acuerdo?</h3>

              <p>
                Dependiendo del contenido del acta y del caso concreto, el
                acuerdo podrá hacerse exigible mediante los mecanismos legales
                previstos en la legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio contratar un abogado?</h3>

              <p>
                No siempre es obligatorio, pero recibir orientación jurídica
                puede ayudar a identificar correctamente los derechos laborales,
                revisar la liquidación y negociar acuerdos más seguros.
              </p>
            </div>
          </div>
        </div>

        {/** CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes problemas con el pago de tu liquidación laboral?
          </h3>

          <p className={styles.ctaText}>
            Si eres trabajador y consideras que tu liquidación fue calculada de
            forma incorrecta o aún no ha sido pagada, o si eres empleador y
            deseas llegar a un acuerdo que evite un proceso judicial, la
            conciliación puede ser una alternativa rápida, segura y con respaldo
            legal. En Sol Centro de Conciliación te orientamos durante todo el
            proceso para encontrar una solución adecuada para ambas partes.
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
  );
}
