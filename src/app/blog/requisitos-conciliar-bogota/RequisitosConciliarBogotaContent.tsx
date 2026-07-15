"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RequisitosConciliarBogotaContent() {
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
            Requisitos para iniciar una conciliación en Bogotá y Colombia
          </span>

          <h1 className={styles.title}>
            Requisitos para conciliar en Bogotá: documentos, pasos, costos y
            cómo iniciar el proceso en 2026
          </h1>

          <p className={styles.heroText}>
            Si deseas resolver un conflicto sin acudir inmediatamente a un
            proceso judicial, conocer los{" "}
            <strong>requisitos para conciliar en Bogotá</strong>
            es el primer paso. La conciliación permite que dos o más personas
            lleguen a un acuerdo con la ayuda de un conciliador autorizado,
            logrando soluciones rápidas, económicas y con plena validez jurídica
            cuando el asunto es conciliable.
          </p>

          <p className={styles.heroText}>
            En Colombia pueden conciliarse numerosos conflictos civiles,
            comerciales, familiares, laborales y de convivencia. Sin embargo,
            para que el trámite avance sin inconvenientes es importante
            presentar la información adecuada, identificar correctamente a la
            otra parte y aportar los documentos que respalden los hechos
            expuestos.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás{" "}
            <strong>qué documentos se necesitan para conciliar</strong>, quién
            puede presentar la solicitud, cuánto puede tardar el procedimiento,
            cuáles son las etapas del proceso y qué ocurre una vez se firma un
            acta de conciliación.
          </p>
        </div>

        {/* CUALES SON LOS REQUISITOS PARA INICIAR UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuáles son los requisitos para iniciar una conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Aunque los requisitos específicos pueden variar dependiendo del tipo
            de conflicto, existen unos elementos generales que normalmente
            solicitan los centros de conciliación para poder programar la
            audiencia.
          </p>

          <p className={styles.paragraph}>
            Contar con esta información desde el inicio permite que el
            conciliador comprenda el caso, identifique correctamente a las
            partes involucradas y adelante el procedimiento sin retrasos
            innecesarios.
          </p>

          <ul className={styles.list}>
            <li>Documento de identidad del solicitante.</li>

            <li>
              Nombre completo e información de contacto de la persona o empresa
              con la que existe el conflicto.
            </li>

            <li>
              Relato claro de los hechos indicando qué ocurrió, cuándo sucedió y
              qué pretende obtener mediante la conciliación.
            </li>

            <li>
              Soportes relacionados con el caso como contratos, facturas,
              correos, comprobantes de pago, mensajes o cualquier otro documento
              pertinente.
            </li>

            <li>
              Solicitud formal de conciliación presentada ante un centro
              autorizado.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Mientras más organizada se presente la información desde el
              inicio, mayores serán las posibilidades de que la audiencia avance
              de manera ágil y que las partes puedan concentrarse en alcanzar un
              acuerdo.
            </p>
          </div>
        </div>

        {/* QUIEN PUEDE SOLICITAR UNA CONCILIACION EN COLOMBIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién puede solicitar una conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Cualquier persona natural o jurídica que tenga un conflicto
            susceptible de conciliación puede presentar la solicitud. No es
            necesario que exista un proceso judicial previo para acudir a este
            mecanismo.
          </p>

          <p className={styles.paragraph}>
            También es posible actuar mediante apoderado cuando la ley lo
            permita o cuando las circunstancias particulares del caso así lo
            requieran.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Personas naturales</h3>

              <p>
                Ciudadanos que buscan resolver conflictos familiares, civiles,
                laborales, de arrendamiento o de convivencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Empresas</h3>

              <p>
                Sociedades y comerciantes que desean solucionar controversias
                comerciales sin acudir a procesos judiciales prolongados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Representantes</h3>

              <p>
                En determinados casos la solicitud puede presentarse mediante
                representante o apoderado debidamente autorizado.
              </p>
            </div>
          </div>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que normalmente se requieren para una conciliación
          </h2>

          <p className={styles.paragraph}>
            Uno de los aspectos que más dudas genera es qué documentos deben
            presentarse al momento de solicitar una audiencia de conciliación.
            La respuesta depende del tipo de conflicto, pero la regla general es
            aportar toda la información que permita demostrar los hechos
            expuestos y facilite la construcción de un acuerdo.
          </p>

          <p className={styles.paragraph}>
            No siempre es indispensable contar con una gran cantidad de pruebas;
            sin embargo, disponer de documentos claros suele facilitar el
            desarrollo de la audiencia y brinda mayor seguridad a ambas partes
            durante la negociación.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Documento de identidad</h3>

              <p>
                Es indispensable para identificar a quien presenta la solicitud
                y verificar su capacidad para participar en la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Contratos y acuerdos</h3>

              <p>
                Contratos civiles, comerciales, laborales, de arrendamiento o
                cualquier documento que dé origen a la controversia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Soportes de pago</h3>

              <p>
                Facturas, consignaciones, comprobantes bancarios, recibos,
                extractos o cualquier evidencia relacionada con obligaciones
                económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mensajes y comunicaciones</h3>

              <p>
                Correos electrónicos, conversaciones de WhatsApp, cartas o
                cualquier comunicación que permita comprender el origen del
                conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Fotografías o evidencias</h3>

              <p>
                Dependiendo del caso pueden resultar útiles fotografías, videos,
                informes técnicos o cualquier otro elemento probatorio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Otros documentos</h3>

              <p>
                Cada conflicto puede requerir soportes adicionales. Entre más
                completa sea la información, más sencilla será la audiencia de
                conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué casos puede solicitarse una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede utilizarse en numerosos conflictos siempre que
            la ley permita que las partes lleguen a acuerdos voluntarios. En
            Colombia este mecanismo es ampliamente utilizado porque evita
            procesos judiciales largos y favorece soluciones construidas por los
            propios involucrados.
          </p>

          <ul className={styles.list}>
            <li>Conflictos entre arrendadores e inquilinos.</li>

            <li>Incumplimientos de contratos civiles.</li>

            <li>Cobro de obligaciones económicas.</li>

            <li>Conflictos entre socios o empresas.</li>

            <li>Procesos relacionados con alimentos.</li>

            <li>Custodia y régimen de visitas.</li>

            <li>Liquidaciones y conflictos laborales.</li>

            <li>Controversias derivadas de propiedad horizontal.</li>

            <li>Daños y perjuicios susceptibles de conciliación.</li>

            <li>Acuerdos de pago entre particulares.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              No todos los asuntos pueden resolverse mediante conciliación.
              Existen materias que, por disposición legal, deben ser conocidas
              directamente por las autoridades judiciales o administrativas
              competentes.
            </p>
          </div>
        </div>

        {/* PROCEDIMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Paso a paso para iniciar una conciliación en Bogotá
          </h2>

          <p className={styles.paragraph}>
            Aunque el procedimiento puede variar ligeramente entre los
            diferentes centros de conciliación, normalmente el trámite sigue una
            serie de etapas claramente definidas que buscan garantizar el
            derecho de ambas partes a ser escuchadas.
          </p>

          <ul className={styles.list}>
            <li>
              Presentar la solicitud de conciliación indicando los hechos del
              conflicto.
            </li>

            <li>
              Aportar los documentos y soportes que permitan comprender la
              controversia.
            </li>

            <li>
              Identificar plenamente a la persona o empresa que será convocada.
            </li>

            <li>
              Programación de la audiencia por parte del centro de conciliación.
            </li>

            <li>
              Citación formal de la otra parte para asistir a la audiencia.
            </li>

            <li>
              Desarrollo de la audiencia con la intervención del conciliador.
            </li>

            <li>
              Elaboración del acta cuando se alcanza un acuerdo o expedición del
              acta correspondiente si no fue posible conciliar.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Preparar adecuadamente la documentación antes de presentar la
              solicitud suele reducir tiempos, facilita el diálogo y permite que
              las partes se concentren en encontrar soluciones viables para el
              conflicto.
            </p>
          </div>
        </div>

        {/* QUIEN PUEDE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién puede solicitar una conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            La conciliación está disponible para personas naturales y jurídicas
            que tengan un conflicto susceptible de ser resuelto mediante
            acuerdos. No es necesario haber iniciado un proceso judicial para
            acudir a un centro de conciliación, pues precisamente uno de los
            objetivos de este mecanismo es evitar litigios cuando existe
            voluntad de diálogo.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del asunto, la solicitud puede presentarse directamente
            por la persona interesada o mediante un apoderado cuando la
            legislación lo permita. En ambos casos es importante suministrar
            información suficiente para que el conciliador pueda citar
            correctamente a la otra parte.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Personas naturales</h3>

              <p>
                Ciudadanos que necesitan resolver conflictos familiares,
                civiles, laborales, comerciales, de arrendamiento o relacionados
                con obligaciones económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Empresas</h3>

              <p>
                Sociedades, comerciantes y organizaciones que buscan solucionar
                controversias con clientes, proveedores, trabajadores o socios
                sin acudir inmediatamente a un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Representantes</h3>

              <p>
                En determinadas situaciones es posible actuar mediante
                representante o apoderado debidamente facultado para participar
                en la audiencia y llegar a acuerdos.
              </p>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué es importante cumplir correctamente los requisitos?
          </h2>

          <p className={styles.paragraph}>
            Presentar una solicitud completa facilita el trabajo del centro de
            conciliación y evita retrasos ocasionados por la falta de
            documentos, errores en la información o dificultades para ubicar a
            la otra parte.
          </p>

          <p className={styles.paragraph}>
            Además, cuando las partes llegan preparadas a la audiencia con la
            documentación organizada, el conciliador puede comprender con mayor
            rapidez el conflicto y orientar el diálogo hacia soluciones
            concretas y ajustadas a la ley.
          </p>

          <p className={styles.paragraph}>
            Aunque la conciliación se caracteriza por ser un procedimiento
            flexible, la preparación previa suele aumentar significativamente
            las probabilidades de alcanzar acuerdos duraderos que beneficien a
            todos los involucrados.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Una conciliación bien preparada no solamente reduce tiempos de
              trámite, sino que también genera mayor confianza entre las partes
              y facilita la construcción de acuerdos claros, ejecutables y con
              plena seguridad jurídica.
            </p>
          </div>
        </div>

        {/* ERRORES FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al solicitar una conciliación
          </h2>

          <p className={styles.paragraph}>
            Muchas solicitudes presentan demoras porque contienen errores que
            pueden evitarse fácilmente con una adecuada preparación. Conocer
            estas situaciones ayuda a que el procedimiento avance de forma más
            eficiente desde el primer momento.
          </p>

          <ul className={styles.list}>
            <li>No identificar correctamente a la otra parte.</li>

            <li>No explicar claramente el origen del conflicto.</li>

            <li>Presentar información incompleta o desactualizada.</li>

            <li>No aportar documentos relevantes cuando existen.</li>

            <li>
              Solicitar conciliación sobre asuntos que legalmente no son
              conciliables.
            </li>

            <li>No asistir puntualmente a la audiencia programada.</li>

            <li>
              Acudir sin tener claridad sobre la solución que se pretende
              obtener.
            </li>
          </ul>
        </div>

        {/* TIEMPO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuánto tarda una conciliación en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            El tiempo necesario para desarrollar una conciliación depende de la
            complejidad del conflicto, la disponibilidad de las partes y la
            agenda del centro de conciliación. Sin embargo, en la mayoría de los
            casos este mecanismo resulta considerablemente más rápido que un
            proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Una vez radicada la solicitud, el centro de conciliación realiza la
            correspondiente citación a la otra parte y programa la audiencia.
            Cuando ambas personas asisten con disposición para dialogar y
            cuentan con la documentación necesaria, es frecuente que el
            conflicto pueda solucionarse en una sola sesión.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación busca ofrecer soluciones ágiles y prácticas,
              evitando que las partes tengan que afrontar procesos judiciales
              que, en muchos casos, pueden extenderse durante meses o incluso
              años.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre los requisitos para conciliar en Bogotá
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito un abogado para solicitar una conciliación?</h3>

              <p>
                No siempre. Muchas personas presentan la solicitud directamente.
                Sin embargo, cuando el conflicto es complejo o involucra
                importantes consecuencias jurídicas, recibir asesoría
                profesional puede ayudar a proteger mejor sus derechos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Puedo iniciar la conciliación si no tengo todos los documentos?
              </h3>

              <p>
                Sí. Aunque los soportes fortalecen la solicitud, la ausencia de
                alguno de ellos no siempre impide iniciar el trámite. Lo
                recomendable es aportar toda la información disponible.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si la otra parte no asiste?</h3>

              <p>
                El centro de conciliación dejará constancia de la situación
                mediante el documento correspondiente. Dependiendo del caso,
                esto podrá servir para continuar con otras actuaciones
                permitidas por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación tiene la misma validez que una sentencia?
              </h3>

              <p>
                Cuando las partes llegan a un acuerdo y este queda consignado en
                un acta de conciliación, dicho documento produce importantes
                efectos jurídicos y puede hacerse cumplir conforme a la
                legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar de manera virtual?</h3>

              <p>
                Sí. Muchos centros de conciliación cuentan con audiencias
                virtuales, facilitando la participación de personas que se
                encuentran en otras ciudades o incluso fuera del país.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué sucede si no se logra ningún acuerdo?</h3>

              <p>
                Cuando no es posible conciliar, las partes conservan los
                mecanismos legales que correspondan para continuar la defensa de
                sus derechos ante las autoridades competentes.
              </p>
            </div>
          </div>
        </div>

        {/* POR QUE PREPARAR UNA CONCILIACION AUMENTA LAS POSIBILIDADES DE LLEGAR A UN ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué preparar correctamente una conciliación aumenta las
            posibilidades de llegar a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            En la práctica, muchas conciliaciones fracasan no porque las partes
            estén completamente enfrentadas, sino porque llegan a la audiencia
            sin la información suficiente o con expectativas poco claras sobre
            la solución del conflicto. Preparar previamente el caso permite
            aprovechar mejor el espacio de diálogo y facilita que el conciliador
            oriente la conversación hacia alternativas viables.
          </p>

          <p className={styles.paragraph}>
            Revisar los documentos, organizar cronológicamente los hechos e
            identificar cuál sería un acuerdo razonable ayuda a que la audiencia
            sea más productiva. Esto también disminuye malentendidos y permite
            que las decisiones se tomen con mayor seguridad para ambas partes.
          </p>

          <p className={styles.paragraph}>
            La conciliación no busca que exista un ganador y un perdedor. Su
            finalidad consiste en construir soluciones que permitan poner fin al
            conflicto, preservar las relaciones cuando sea posible y evitar
            procesos judiciales más largos, costosos y desgastantes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Una buena preparación antes de la audiencia suele traducirse en
              acuerdos más claros, menos discusiones durante la diligencia y
              mayores probabilidades de solucionar definitivamente el conflicto.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Quieres iniciar una conciliación en Bogotá o tienes dudas sobre los
            requisitos?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre los documentos necesarios, el procedimiento
            de conciliación, la preparación de la audiencia y los requisitos
            aplicables a conflictos civiles, familiares, comerciales y
            laborales. Nuestro equipo te ayudará a identificar la mejor
            alternativa para resolver tu caso de forma ágil y con respaldo
            jurídico.
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
