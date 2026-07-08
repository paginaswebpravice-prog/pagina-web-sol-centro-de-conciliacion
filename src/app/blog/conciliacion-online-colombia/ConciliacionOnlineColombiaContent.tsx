"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionOnlineColombiaContent() {
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
            Guía completa sobre conciliación virtual en Colombia
          </span>

          <h1 className={styles.title}>
            Conciliación online en Colombia: cómo funciona, requisitos, ventajas
            y validez legal
          </h1>

          <p className={styles.heroText}>
            La conciliación online en Colombia permite resolver conflictos
            civiles, familiares, comerciales y laborales mediante audiencias
            virtuales, evitando desplazamientos y reduciendo significativamente
            el tiempo necesario para llegar a un acuerdo entre las partes.
          </p>

          <p className={styles.heroText}>
            Actualmente, este mecanismo de resolución de conflictos ofrece la
            misma validez jurídica que una conciliación presencial cuando es
            realizada por un centro de conciliación autorizado. Gracias a ello,
            miles de personas pueden participar desde cualquier ciudad del país
            o incluso desde el exterior.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás cómo funciona una audiencia virtual, qué
            requisitos debes cumplir, qué conflictos pueden resolverse mediante
            conciliación online y cuáles son sus principales ventajas frente a
            un proceso judicial tradicional.
          </p>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación online en Colombia paso a paso?
          </h2>

          <p className={styles.paragraph}>
            La conciliación online se desarrolla mediante plataformas virtuales
            que permiten reunir a todas las partes en una audiencia dirigida por
            un conciliador autorizado. Durante la sesión, cada participante
            expone su posición, presenta la documentación correspondiente y
            busca construir un acuerdo mediante el diálogo.
          </p>

          <p className={styles.paragraph}>
            El conciliador actúa como un tercero imparcial encargado de
            facilitar la comunicación, aclarar los aspectos jurídicos del
            conflicto y orientar a las partes para encontrar soluciones que
            beneficien a todos los involucrados.
          </p>

          <p className={styles.paragraph}>
            Cuando se alcanza un acuerdo, este queda consignado en un acta de
            conciliación con efectos jurídicos, la cual puede exigirse
            legalmente en caso de incumplimiento.
          </p>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué cada vez más personas prefieren la conciliación online?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ahorro de tiempo</h3>

              <p>
                Evita desplazamientos y facilita la programación de audiencias,
                permitiendo resolver muchos conflictos en menos tiempo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acceso desde cualquier lugar</h3>

              <p>
                Las partes pueden conectarse desde cualquier ciudad de Colombia
                o incluso desde el exterior utilizando únicamente internet y un
                dispositivo con cámara.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>La misma validez jurídica</h3>

              <p>
                Los acuerdos alcanzados durante una audiencia virtual tienen los
                mismos efectos legales que una conciliación realizada de forma
                presencial.
              </p>
            </div>
          </div>
        </div>

        {/* REQUISITOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Requisitos para participar en una audiencia de conciliación virtual
          </h2>

          <p className={styles.paragraph}>
            Para participar en una conciliación online no se requieren
            conocimientos técnicos especializados. Basta con contar con algunos
            elementos básicos que permitan desarrollar correctamente la
            audiencia virtual.
          </p>

          <ul className={styles.list}>
            <li>Documento de identidad vigente.</li>
            <li>Computador, celular o tableta con cámara y micrófono.</li>
            <li>Conexión estable a internet.</li>
            <li>Correo electrónico activo.</li>
            <li>Documentos relacionados con el conflicto.</li>
            <li>
              Disponibilidad para asistir a la audiencia en la fecha programada.
            </li>
          </ul>
        </div>

        {/* DONDE SE USA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse mediante conciliación online?
          </h2>

          <p className={styles.paragraph}>
            La conciliación virtual puede utilizarse para resolver una amplia
            variedad de conflictos siempre que la ley permita que el asunto sea
            conciliable. Esto la convierte en una alternativa práctica tanto
            para personas como para empresas.
          </p>

          <ul className={styles.list}>
            <li>Conflictos civiles.</li>
            <li>Conflictos familiares.</li>
            <li>Controversias laborales.</li>
            <li>Problemas relacionados con arrendamientos.</li>
            <li>Cobro de obligaciones económicas.</li>
            <li>Incumplimiento de contratos.</li>
            <li>Conflictos comerciales.</li>
            <li>Diferencias derivadas de relaciones entre particulares.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La modalidad online resulta especialmente útil cuando las partes
              viven en ciudades diferentes, tienen agendas complicadas o se
              encuentran fuera de Colombia y desean resolver el conflicto sin
              desplazamientos.
            </p>
          </div>
        </div>

        {/* QUIENES PUEDE SOLICITAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quiénes pueden solicitar una conciliación online en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación virtual está disponible para personas naturales,
            empresas y organizaciones que buscan resolver un conflicto de manera
            rápida sin desplazarse hasta un centro de conciliación. Esta
            modalidad resulta especialmente útil cuando las partes viven en
            ciudades diferentes, tienen dificultades para coincidir
            presencialmente o se encuentran fuera del país.
          </p>

          <p className={styles.paragraph}>
            Siempre que el asunto sea conciliable y el procedimiento sea
            dirigido por un centro de conciliación autorizado, la audiencia
            virtual tiene la misma eficacia jurídica que una audiencia
            presencial.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Personas naturales</h3>

              <p>
                Para conflictos civiles, familiares, comerciales y otras
                controversias que puedan resolverse mediante acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Empresas</h3>

              <p>
                Ideal para resolver incumplimientos contractuales, obligaciones
                económicas o conflictos comerciales sin detener la operación del
                negocio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Colombianos en el exterior</h3>

              <p>
                Permite participar desde cualquier país mediante
                videoconferencia, evitando viajes innecesarios.
              </p>
            </div>
          </div>
        </div>

        {/* PASO A PASO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Paso a paso para realizar una conciliación online
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Presentación de la solicitud</h3>

              <p>
                El interesado presenta la solicitud indicando el conflicto y la
                información de la otra parte.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>

              <p>
                El centro de conciliación programa la audiencia y envía el
                enlace virtual junto con las instrucciones de conexión.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia virtual</h3>

              <p>
                Las partes participan mediante videollamada mientras el
                conciliador facilita el diálogo y orienta la negociación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Firma del acuerdo</h3>

              <p>
                Si existe acuerdo, se elabora el acta correspondiente con plena
                validez jurídica.
              </p>
            </div>
          </div>
        </div>

        {/* CASOS EN LOS QUE LA CONCILIACION ONLINE SUELE SER LA MEJOR ALTERNATIVA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos en los que la conciliación online suele ser la mejor
            alternativa
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos requieren que las personas se trasladen
            hasta una oficina. Actualmente la modalidad virtual permite resolver
            una gran cantidad de controversias de forma práctica y segura.
          </p>

          <ul className={styles.list}>
            <li>Incumplimiento de contratos.</li>
            <li>Conflictos entre empresas.</li>
            <li>Cobro de obligaciones económicas.</li>
            <li>Conflictos entre arrendador y arrendatario.</li>
            <li>Problemas familiares conciliables.</li>
            <li>Acuerdos laborales.</li>
            <li>Disputas civiles.</li>
            <li>Conflictos comerciales.</li>
          </ul>
        </div>

        {/* CONCILIACION ONLINE VS CONCILIACION PRESENCIAL: PRINCIPALES DIFERENCIAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación online vs conciliación presencial: principales
            diferencias
          </h2>

          <p className={styles.paragraph}>
            Ambas modalidades producen exactamente los mismos efectos legales
            cuando son desarrolladas por un centro de conciliación autorizado.
            La diferencia principal está en la forma en que se realiza la
            audiencia.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menos desplazamientos</h3>

              <p>
                No es necesario invertir tiempo ni dinero en traslados hasta una
                sede física.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor disponibilidad</h3>

              <p>
                Facilita encontrar fechas en las que todas las partes puedan
                asistir.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ideal para personas en diferentes ciudades</h3>

              <p>
                Las partes pueden conectarse desde lugares distintos sin afectar
                el desarrollo de la audiencia.
              </p>
            </div>
          </div>
        </div>

        {/* LA CONCILIACION ONLINE TIENE LA MISMA VALIDEZ JURIDICA QUE UNA AUDIENCIA PRESENCIAL? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿La conciliación online tiene la misma validez jurídica que una
            audiencia presencial?
          </h2>

          <p className={styles.paragraph}>
            Sí. Una de las dudas más frecuentes es si una audiencia realizada
            por internet tiene el mismo valor que una presencial. La respuesta
            es sí, siempre que el procedimiento sea adelantado por un centro de
            conciliación autorizado y se cumplan los requisitos legales
            establecidos.
          </p>

          <p className={styles.paragraph}>
            El acta de conciliación generada durante una audiencia virtual
            constituye un documento con efectos jurídicos, por lo que los
            compromisos asumidos por las partes pueden exigirse legalmente en
            caso de incumplimiento.
          </p>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué la conciliación online ha tomado tanta importancia en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            La transformación digital de los servicios jurídicos ha permitido
            que la conciliación online se convierta en una alternativa eficiente
            para acceder a mecanismos de resolución de conflictos sin importar
            la ubicación de las partes.
          </p>

          <p className={styles.paragraph}>
            Además de reducir tiempos y costos, esta modalidad facilita la
            participación de personas que viven en municipios alejados, tienen
            limitaciones de movilidad o residen en el exterior, promoviendo un
            acceso más ágil a la justicia alternativa.
          </p>

          <p className={styles.paragraph}>
            Gracias a estas ventajas, la conciliación virtual continúa ganando
            aceptación entre ciudadanos, empresas y profesionales que buscan
            soluciones legales rápidas, prácticas y con plena seguridad
            jurídica.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación online en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación online tiene la misma validez que la
                presencial?
              </h3>

              <p>
                Sí. Cuando es realizada por un centro de conciliación
                autorizado, produce exactamente los mismos efectos jurídicos que
                una audiencia presencial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo participar desde otra ciudad o desde el exterior?</h3>

              <p>
                Sí. Esta modalidad permite conectarse desde cualquier lugar con
                acceso a internet, lo que facilita la participación de personas
                ubicadas en diferentes ciudades o países.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Qué ocurre si durante la audiencia no se logra un acuerdo?
              </h3>

              <p>
                Si las partes no llegan a una solución, podrán acudir a las
                acciones judiciales o administrativas que correspondan según la
                naturaleza del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Necesito instalar algún programa especial?</h3>

              <p>
                Generalmente no. Basta con un computador, tableta o celular con
                cámara, micrófono, conexión estable a internet y acceso a la
                plataforma indicada por el centro de conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas realizar una conciliación online en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Nuestro equipo puede orientarte sobre el procedimiento, verificar si
            tu caso es conciliable y acompañarte durante todo el proceso para
            que puedas participar en una audiencia virtual de forma segura,
            rápida y con plena validez jurídica, sin importar en qué ciudad o
            país te encuentres.
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
