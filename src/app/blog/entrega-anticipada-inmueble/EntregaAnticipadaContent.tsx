"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function EntregaAnticipadaContent() {
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
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación en contratos de arrendamiento en Colombia
          </span>

          <h1 className={styles.title}>
            Entrega anticipada de inmueble arrendado en Colombia: derechos,
            posibles multas y cómo resolver el conflicto mediante conciliación
          </h1>

          <p className={styles.heroText}>
            La entrega anticipada de un inmueble arrendado es una situación
            frecuente en Colombia. Muchas personas deben finalizar un contrato
            antes del plazo acordado debido a cambios laborales, dificultades
            económicas, traslados de ciudad, estudios, problemas familiares o
            nuevas oportunidades personales. Sin embargo, hacerlo sin conocer
            las condiciones del contrato puede generar diferencias entre el
            propietario y el arrendatario.
          </p>

          <p className={styles.heroText}>
            Aunque cada contrato establece obligaciones particulares, la
            terminación anticipada no siempre significa que exista un conflicto
            inevitable. En numerosos casos es posible alcanzar acuerdos que
            beneficien a ambas partes, permitiendo una entrega organizada del
            inmueble y reduciendo el riesgo de reclamaciones posteriores.
          </p>

          <p className={styles.heroText}>
            La conciliación constituye uno de los mecanismos más utilizados para
            solucionar este tipo de controversias. Mediante el diálogo y la
            intervención de un conciliador, propietario y arrendatario pueden
            acordar aspectos como la fecha de entrega, el estado del inmueble,
            los pagos pendientes, las posibles compensaciones y cualquier otra
            condición relacionada con la terminación del contrato.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás información práctica sobre cómo funciona la
            entrega anticipada de un inmueble arrendado en Colombia, cuándo es
            recomendable acudir a una conciliación, qué aspectos pueden
            negociarse y cuáles son las buenas prácticas para evitar conflictos
            innecesarios.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la entrega anticipada de inmueble?
          </h2>

          <p className={styles.paragraph}>
            Es el acto mediante el cual el arrendatario entrega el inmueble al
            arrendador antes de la fecha de finalización del contrato de
            arrendamiento.
          </p>

          <p className={styles.paragraph}>
            Esta decisión puede ser voluntaria o derivarse de situaciones
            económicas, laborales o personales.
          </p>
        </div>

        {/* CUANDO SE PRESENTA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede presentarse la entrega anticipada de un inmueble
            arrendado?
          </h2>

          <p className={styles.paragraph}>
            La entrega anticipada puede presentarse por múltiples razones y no
            siempre significa que exista un incumplimiento grave del contrato.
            En muchos casos, las circunstancias personales, familiares o
            económicas cambian durante la vigencia del arrendamiento, haciendo
            necesario terminar la relación antes del plazo inicialmente pactado.
          </p>

          <p className={styles.paragraph}>
            También es frecuente que esta situación ocurra cuando el
            arrendatario debe trasladarse a otra ciudad por motivos laborales,
            enfrenta dificultades económicas, necesita un inmueble diferente o
            llega a un acuerdo con el propietario para finalizar el contrato de
            manera anticipada.
          </p>

          <p className={styles.paragraph}>
            Independientemente de la causa, lo más recomendable es comunicar la
            decisión oportunamente y buscar una solución dialogada. Esto reduce
            el riesgo de conflictos posteriores y permite que ambas partes
            conozcan claramente cuáles serán sus derechos y obligaciones.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación constituye una alternativa eficaz para documentar
              la terminación anticipada del contrato y dejar por escrito
              aspectos como la fecha de entrega, el estado del inmueble, los
              pagos pendientes y cualquier otro acuerdo alcanzado entre
              propietario y arrendatario.
            </p>
          </div>
        </div>

        {/* CUANDO SE PRESENTA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo suele presentarse la entrega anticipada de un inmueble?
          </h2>

          <p className={styles.paragraph}>
            Aunque muchas personas firman un contrato de arrendamiento con la
            intención de permanecer durante todo el plazo acordado, en la
            práctica pueden surgir situaciones inesperadas que obliguen a
            entregar el inmueble antes del vencimiento del contrato. Esto ocurre
            tanto en viviendas como en locales comerciales y oficinas.
          </p>

          <p className={styles.paragraph}>
            En algunos casos la decisión proviene del arrendatario, mientras que
            en otros ambas partes consideran conveniente finalizar la relación
            contractual mediante un acuerdo que evite futuras controversias.
          </p>
        </div>

        {/* MOTIVOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Motivos más frecuentes para terminar un contrato de arrendamiento
            antes del plazo
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cambio laboral</h3>

              <p>
                Traslados a otra ciudad o un nuevo empleo pueden hacer imposible
                seguir ocupando el inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Dificultades económicas</h3>

              <p>
                Algunas personas necesitan reducir gastos o cambiar de vivienda
                debido a cambios en su situación financiera.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Problemas con el inmueble</h3>

              <p>
                Daños, incumplimientos o situaciones que afectan el uso del
                inmueble pueden llevar a buscar una terminación anticipada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdo mutuo</h3>

              <p>
                En numerosas ocasiones ambas partes consideran que finalizar el
                contrato resulta la alternativa más conveniente.
              </p>
            </div>
          </div>
        </div>

        {/* COMPROMISOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué aspectos deberían quedar por escrito durante la conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes llegan a un acuerdo es recomendable dejar
            claramente establecidos todos los compromisos para evitar futuras
            diferencias sobre la entrega del inmueble o el cumplimiento del
            contrato.
          </p>

          <ul className={styles.list}>
            <li>Fecha exacta de entrega.</li>
            <li>Estado en que se entrega el inmueble.</li>
            <li>Entrega de llaves.</li>
            <li>Pago de cánones pendientes.</li>
            <li>Servicios públicos.</li>
            <li>Depósitos o garantías.</li>
            <li>Paz y salvo entre las partes.</li>
          </ul>
        </div>

        {/* CAUSAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Causas comunes de entrega anticipada
          </h2>

          <ul className={styles.list}>
            <li>Cambios de ciudad o residencia.</li>
            <li>Dificultades económicas.</li>
            <li>Problemas con el inmueble.</li>
            <li>Incumplimientos contractuales.</li>
            <li>Acuerdos entre las partes.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, la conciliación permite formalizar la entrega
              anticipada evitando conflictos legales o penalidades innecesarias.
            </p>
          </div>
        </div>

        {/* ARRENDATARIO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué debe hacer el arrendatario antes de entregar el inmueble?
          </h2>

          <p className={styles.paragraph}>
            Antes de entregar un inmueble arrendado es recomendable revisar las
            condiciones establecidas en el contrato y preparar adecuadamente el
            proceso de entrega. Actuar con organización ayuda a evitar
            desacuerdos y facilita la terminación de la relación contractual.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Revisar el contrato</h3>

              <p>
                Verificar las cláusulas relacionadas con terminación anticipada,
                preavisos, multas o procedimientos de entrega.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Informar al propietario</h3>

              <p>
                Comunicar la decisión con suficiente anticipación permite buscar
                acuerdos y evitar conflictos innecesarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Organizar los pagos</h3>

              <p>
                Revisar si existen cánones, servicios públicos o cuotas
                pendientes antes de realizar la entrega del inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Documentar la entrega</h3>

              <p>
                Elaborar un acta o dejar evidencia del estado del inmueble
                brinda mayor seguridad para ambas partes.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación en entrega anticipada
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Evita sanciones</h3>
              <p>
                Permite negociar posibles penalidades del contrato de forma
                amistosa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Salida ordenada</h3>
              <p>
                Facilita la entrega del inmueble sin conflictos entre las
                partes.
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
            ¿Cómo se realiza la entrega anticipada?
          </h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación en Colombia
            para acordar las condiciones de terminación anticipada del contrato.
          </p>

          <p className={styles.paragraph}>
            En la audiencia se definen aspectos como entrega del inmueble, pagos
            pendientes o compensaciones.
          </p>
        </div>

        {/* CONDICIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Elementos importantes del acuerdo</h2>

          <ul className={styles.list}>
            <li>Fecha de entrega del inmueble.</li>
            <li>Estado del inmueble al momento de entrega.</li>
            <li>Pagos pendientes o acuerdos económicos.</li>
            <li>Posibles penalidades o su condonación.</li>
          </ul>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al entregar un inmueble antes de terminar el
            contrato
          </h2>

          <p className={styles.paragraph}>
            Muchas controversias entre propietarios y arrendatarios surgen
            porque la entrega del inmueble se realiza sin seguir un
            procedimiento claro. Evitar estos errores puede facilitar
            considerablemente la terminación del contrato.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Abandonar el inmueble</h3>

              <p>
                Dejar el inmueble sin informar al propietario puede generar
                conflictos jurídicos y económicos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No dejar evidencia</h3>

              <p>
                Es recomendable documentar la entrega mediante un acta o
                cualquier otro soporte que permita demostrar las condiciones en
                las que se entregó el inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No revisar el contrato</h3>

              <p>
                Cada contrato puede establecer procedimientos específicos para
                la terminación anticipada y conviene conocerlos previamente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Confiar solo en acuerdos verbales</h3>

              <p>
                Siempre es preferible dejar por escrito los acuerdos alcanzados
                entre las partes para evitar futuras diferencias.
              </p>
            </div>
          </div>
        </div>

        {/* DEBE HACER EL PROPIETARIO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué debe hacer el propietario cuando recibe un inmueble de forma
            anticipada?
          </h2>

          <p className={styles.paragraph}>
            La terminación anticipada del contrato no solo implica obligaciones
            para el arrendatario. El propietario también debe participar
            activamente en el proceso de entrega, verificando el estado del
            inmueble y procurando que la finalización del contrato se realice de
            forma clara y organizada.
          </p>

          <p className={styles.paragraph}>
            Una adecuada comunicación entre ambas partes permite reducir
            conflictos y facilita que la entrega se realice dentro de un
            ambiente de respeto y buena fe, especialmente cuando existen pagos
            pendientes o diferencias sobre el estado del inmueble.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Inspeccionar el inmueble</h3>

              <p>
                Verificar el estado general del inmueble al momento de la
                entrega ayuda a evitar discusiones posteriores.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Revisar obligaciones pendientes</h3>

              <p>
                Es recomendable confirmar si existen cánones, servicios públicos
                o cualquier otra obligación económica pendiente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Firmar un acta</h3>

              <p>
                Dejar constancia escrita de la entrega brinda mayor seguridad
                jurídica a ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mantener el diálogo</h3>

              <p>
                Cuando existen diferencias, la conciliación puede facilitar
                acuerdos sin necesidad de acudir a procesos judiciales.
              </p>
            </div>
          </div>
        </div>

        {/* PASO A PASO DE UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Paso a paso de una conciliación por entrega anticipada del inmueble
          </h2>

          <p className={styles.paragraph}>
            Cuando propietario y arrendatario no logran resolver sus diferencias
            por cuenta propia, la conciliación representa un mecanismo práctico
            para buscar soluciones. Aunque cada caso tiene particularidades,
            normalmente el proceso comprende varias etapas.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud</h3>

              <p>
                Una de las partes presenta la solicitud de conciliación ante un
                centro autorizado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>

              <p>
                Se programa la audiencia y se notifica al propietario y al
                arrendatario.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>

              <p>
                Las partes exponen su posición y explican las razones por las
                cuales desean finalizar el contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Acuerdo</h3>

              <p>
                Si existe voluntad de ambas partes, se construyen soluciones que
                beneficien a todos los involucrados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>5. Firma del acta</h3>

              <p>
                Los compromisos alcanzados quedan consignados en un acta de
                conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* QUE PUEDE INCLUIR UN ACTA DE CONCILIACION POR ENTREGA ANTICIPADA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué puede incluir un acta de conciliación por entrega anticipada?
          </h2>

          <p className={styles.paragraph}>
            El contenido del acta dependerá de las necesidades de cada caso. Sin
            embargo, es habitual que incluya diferentes aspectos relacionados
            con la terminación del contrato y las obligaciones pendientes entre
            las partes.
          </p>

          <ul className={styles.list}>
            <li>Identificación del propietario y del arrendatario.</li>

            <li>Datos del inmueble.</li>

            <li>Fecha acordada para la entrega.</li>

            <li>Estado general del inmueble.</li>

            <li>Entrega de llaves.</li>

            <li>Inventario de bienes si aplica.</li>

            <li>Servicios públicos pendientes.</li>

            <li>Cánones pendientes.</li>

            <li>Acuerdos económicos.</li>

            <li>Manifestación de paz y salvo.</li>

            <li>Firma de las partes.</li>
          </ul>
        </div>

        {/* SITUACIONES EN LAS QUE LA CONCILIACION RESULTA ESPECIALMENTE UTIL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones en las que la conciliación resulta especialmente útil
          </h2>

          <p className={styles.paragraph}>
            Aunque cada contrato de arrendamiento presenta circunstancias
            distintas, existen escenarios en los que acudir a una conciliación
            puede facilitar una solución mucho más rápida que iniciar un proceso
            judicial.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Traslado laboral</h3>

              <p>
                Cuando el arrendatario debe cambiar de ciudad por motivos de
                trabajo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pérdida del empleo</h3>

              <p>
                Si la situación económica cambia y continuar con el contrato
                resulta difícil.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Venta del inmueble</h3>

              <p>
                Cuando el propietario necesita disponer del inmueble por
                diferentes razones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Desacuerdos económicos</h3>

              <p>
                Si existen diferencias sobre multas, pagos o compensaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimientos</h3>

              <p>
                Cuando alguna de las partes considera que existen obligaciones
                pendientes relacionadas con el contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega del inmueble</h3>

              <p>
                Para dejar claramente documentada la forma en que se entrega el
                bien y las condiciones acordadas.
              </p>
            </div>
          </div>
        </div>

        {/* ASPECTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Aspectos que pueden acordarse durante una conciliación
          </h2>

          <p className={styles.paragraph}>
            Cada caso es diferente. Durante la audiencia de conciliación las
            partes pueden negociar distintos aspectos relacionados con la
            terminación del contrato, buscando una solución equilibrada que
            beneficie tanto al arrendador como al arrendatario.
          </p>

          <ul className={styles.list}>
            <li>Fecha definitiva para la entrega del inmueble.</li>

            <li>Pago de cánones de arrendamiento pendientes.</li>

            <li>Estado en el que será entregado el inmueble.</li>

            <li>Entrega de llaves.</li>

            <li>Pago de servicios públicos.</li>

            <li>Reparaciones o daños existentes.</li>

            <li>Posibles compensaciones económicas.</li>

            <li>Condonación o reducción de penalidades.</li>

            <li>Entrega de paz y salvo entre las partes.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la entrega anticipada de inmuebles
            arrendados
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo terminar el contrato antes del plazo acordado?</h3>

              <p>
                Sí. Dependiendo de las condiciones del contrato y de las
                circunstancias particulares, las partes pueden llegar a un
                acuerdo para finalizar el arrendamiento antes de la fecha
                prevista.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Siempre existe una multa?</h3>

              <p>
                No. La existencia de penalidades dependerá del contrato y de los
                acuerdos alcanzados entre propietario y arrendatario.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si ambas partes están de acuerdo?</h3>

              <p>
                Cuando existe consenso, la terminación anticipada puede
                realizarse de manera organizada dejando claras las obligaciones
                de cada uno.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación evita un proceso judicial?</h3>

              <p>
                En muchos casos sí, porque permite construir soluciones mediante
                el diálogo antes de acudir a otras instancias legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué documentos debo llevar?</h3>

              <p>
                Normalmente resulta útil presentar el contrato de arrendamiento,
                comprobantes de pago y cualquier documento relacionado con el
                conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa con los servicios públicos?</h3>

              <p>
                Durante la conciliación las partes pueden acordar la forma en
                que serán asumidos los pagos pendientes y la fecha de corte de
                las obligaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Quién entrega las llaves?</h3>

              <p>
                Lo habitual es que la entrega de llaves se realice en la fecha
                acordada, dejando constancia de ello para evitar futuras
                controversias.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué sucede si existen daños en el inmueble?</h3>

              <p>
                Las partes pueden revisar conjuntamente el estado del inmueble y
                acordar cómo serán atendidas las reparaciones que resulten
                necesarias.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acta de conciliación tiene validez jurídica?</h3>

              <p>
                Sí. Cuando se suscribe conforme a la normativa vigente, el acta
                produce efectos jurídicos para quienes participan en el acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuándo es recomendable solicitar asesoría?</h3>

              <p>
                Es aconsejable cuando existen desacuerdos sobre multas, pagos,
                reparaciones, entrega del inmueble o cualquier otro aspecto
                relacionado con la terminación anticipada del contrato.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas terminar un contrato de arrendamiento sin conflictos?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación ayudamos a propietarios y
            arrendatarios a encontrar soluciones mediante conciliación. Podemos
            orientarte para formalizar la entrega anticipada del inmueble,
            buscar acuerdos sobre pagos, evitar conflictos innecesarios y
            brindar mayor seguridad jurídica durante la terminación del
            contrato.
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
