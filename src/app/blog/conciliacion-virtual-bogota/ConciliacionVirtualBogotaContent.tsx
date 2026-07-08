"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionVirtualBogotaContent() {
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
            Conciliación virtual y audiencias en línea
          </span>

          <h1 className={styles.title}>
            Conciliación virtual en Bogotá: cómo funciona, requisitos, ventajas
            y validez jurídica
          </h1>

          <p className={styles.heroText}>
            La conciliación virtual en Bogotá permite resolver conflictos
            civiles, familiares, comerciales, laborales y de otras materias
            mediante audiencias realizadas por videoconferencia, evitando
            desplazamientos y reduciendo los tiempos del proceso. Gracias al uso
            de herramientas tecnológicas, las partes pueden participar desde
            cualquier lugar con la misma seguridad jurídica que ofrece una
            audiencia presencial.
          </p>

          <p className={styles.heroText}>
            Este mecanismo es especialmente útil para personas que tienen
            agendas ocupadas, viven fuera de Bogotá o incluso se encuentran en
            el exterior. Siempre que el procedimiento sea adelantado por un
            centro autorizado, el acta de conciliación tendrá plena validez
            jurídica y podrá hacerse cumplir conforme a la legislación
            colombiana.
          </p>

          <p className={styles.heroText}>
            Si estás buscando una alternativa rápida, práctica y confiable para
            resolver un conflicto sin acudir inmediatamente a un proceso
            judicial, la conciliación virtual puede convertirse en la mejor
            opción.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación virtual y por qué cada vez más personas la
            utilizan?
          </h2>

          <p className={styles.paragraph}>
            La conciliación virtual es un mecanismo alternativo de solución de
            conflictos que permite a las partes participar en una audiencia
            mediante plataformas digitales, sin necesidad de asistir físicamente
            a un centro de conciliación. Durante la sesión, un conciliador
            imparcial facilita el diálogo para que las personas puedan construir
            acuerdos voluntarios con plena validez jurídica.
          </p>

          <p className={styles.paragraph}>
            En Bogotá esta modalidad ha ganado gran aceptación porque facilita
            el acceso a la justicia, reduce tiempos de desplazamiento y permite
            atender conflictos desde cualquier lugar del país o incluso desde el
            extranjero.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Aunque la audiencia se realiza de forma virtual, el acta de
              conciliación conserva los mismos efectos legales que una
              conciliación presencial cuando se desarrolla ante un centro
              autorizado.
            </p>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una audiencia de conciliación virtual en Bogotá?
          </h2>

          <ul className={styles.list}>
            <li>Presentación de la solicitud de conciliación.</li>
            <li>Revisión del caso por parte del centro de conciliación.</li>
            <li>Notificación e invitación a la otra parte.</li>
            <li>Programación de la audiencia virtual.</li>
            <li>Envío del enlace para conectarse a la videoconferencia.</li>
            <li>
              Desarrollo de la audiencia con acompañamiento del conciliador.
            </li>
            <li>Firma del acta de conciliación cuando exista acuerdo.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Todo el procedimiento puede desarrollarse sin desplazamientos,
              siempre que las partes cuenten con conexión a internet y los
              medios tecnológicos necesarios.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de realizar una conciliación virtual en lugar de una
            presencial
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ahorro de tiempo</h3>

              <p>
                Evita desplazamientos y facilita la programación de la audiencia
                según la disponibilidad de las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor comodidad</h3>

              <p>
                Puedes participar desde tu casa, oficina o incluso si te
                encuentras en otra ciudad o en el exterior.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>La misma seguridad jurídica</h3>

              <p>
                Los acuerdos alcanzados tienen la misma validez legal que los
                obtenidos mediante una audiencia presencial.
              </p>
            </div>
          </div>
        </div>

        {/* REQUISITOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Requisitos para participar en una conciliación virtual
          </h2>

          <ul className={styles.list}>
            <li>Documento de identidad vigente.</li>
            <li>Conexión estable a internet.</li>
            <li>Computador, celular o tableta con cámara y micrófono.</li>
            <li>Correo electrónico para recibir las comunicaciones.</li>
            <li>Información y documentos relacionados con el conflicto.</li>
            <li>Disponibilidad para participar en la audiencia virtual.</li>
          </ul>

          <p className={styles.paragraph}>
            Contar con estos elementos permite que la audiencia se desarrolle de
            forma fluida y evita retrasos durante el proceso.
          </p>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse mediante conciliación virtual?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos civiles</h3>

              <p>
                Deudas, incumplimientos contractuales, indemnizaciones y
                obligaciones económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Asuntos familiares</h3>

              <p>
                Cuota alimentaria, régimen de visitas, custodia y demás acuerdos
                entre familiares.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos comerciales y laborales</h3>

              <p>
                Diferencias entre empresas, proveedores, empleadores y
                trabajadores.
              </p>
            </div>
          </div>
        </div>

        {/* QUIENES PUEDE PARTICIPAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quiénes pueden participar en una conciliación virtual?
          </h2>

          <p className={styles.paragraph}>
            La conciliación virtual está disponible para personas naturales,
            empresarios, comerciantes, arrendadores, arrendatarios,
            trabajadores, empleadores y cualquier persona que necesite resolver
            un conflicto de manera rápida sin asistir presencialmente a una
            audiencia.
          </p>

          <p className={styles.paragraph}>
            También representa una excelente alternativa para colombianos
            residentes en el exterior que requieren participar en procedimientos
            relacionados con asuntos que se tramitan en Colombia.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Personas naturales</h3>

              <p>
                Para resolver conflictos familiares, civiles, económicos o de
                arrendamiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Empresas</h3>

              <p>
                Para solucionar diferencias contractuales, comerciales y de
                cartera.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Colombianos en el exterior</h3>

              <p>
                Pueden participar sin necesidad de viajar a Colombia cuando el
                caso lo permita.
              </p>
            </div>
          </div>
        </div>

        {/* VALIDEZ LEGAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿La conciliación virtual tiene la misma validez que una presencial?
          </h2>

          <p className={styles.paragraph}>
            Sí. Desde el punto de vista jurídico, una conciliación virtual
            realizada ante un centro autorizado produce los mismos efectos
            legales que una audiencia presencial. Si las partes alcanzan un
            acuerdo, este queda consignado en un acta que puede exigirse
            legalmente en caso de incumplimiento.
          </p>

          <p className={styles.paragraph}>
            La diferencia radica únicamente en el medio utilizado para
            desarrollar la audiencia, ya que las garantías del procedimiento y
            la intervención del conciliador permanecen intactas.
          </p>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué la conciliación virtual se ha convertido en una de las
            mejores alternativas en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Bogotá concentra una gran cantidad de conflictos civiles,
            familiares, comerciales y laborales. En muchos casos, el tiempo que
            implica desplazarse hasta un centro de conciliación o coordinar
            agendas dificulta llegar a una solución rápida. La conciliación
            virtual elimina estas barreras al permitir que las partes participen
            desde cualquier lugar con acceso a internet.
          </p>

          <p className={styles.paragraph}>
            Además de facilitar el acceso a la justicia, esta modalidad
            contribuye a descongestionar los despachos judiciales y promueve
            soluciones construidas por las propias partes. Gracias a ello, cada
            vez más personas y empresas optan por resolver sus diferencias
            mediante audiencias virtuales antes de iniciar un proceso judicial.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación virtual combina tecnología, rapidez y seguridad
              jurídica, permitiendo resolver numerosos conflictos sin sacrificar
              las garantías legales del procedimiento.
            </p>
          </div>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que debes evitar antes de una audiencia virtual de
            conciliación
          </h2>

          <ul className={styles.list}>
            <li>No verificar previamente la conexión a internet.</li>
            <li>
              No revisar los documentos que servirán como soporte del caso.
            </li>
            <li>Conectarse desde lugares con mucho ruido.</li>
            <li>No ingresar puntualmente a la audiencia.</li>
            <li>
              No tener identificados los puntos sobre los que se desea
              conciliar.
            </li>
            <li>
              Interrumpir constantemente a la otra parte durante la audiencia.
            </li>
          </ul>

          <p className={styles.paragraph}>
            Prepararse con anticipación permite aprovechar mejor el espacio de
            diálogo y aumenta las probabilidades de alcanzar un acuerdo
            satisfactorio.
          </p>
        </div>

        {/* ACTA DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre después de firmar el acta de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Una vez finaliza la audiencia y las partes llegan a un acuerdo, el
            conciliador deja constancia de lo pactado mediante el acta de
            conciliación. Desde ese momento, cada compromiso adquirido debe
            cumplirse dentro de los plazos establecidos.
          </p>

          <p className={styles.paragraph}>
            Si alguna de las partes incumple lo acordado, la otra podrá utilizar
            el acta para ejercer las acciones legales correspondientes, ya que
            este documento tiene fuerza jurídica conforme a la legislación
            colombiana.
          </p>
        </div>

        {/* ELECCION DE MODALIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene elegir una conciliación virtual y cuándo una
            presencial?
          </h2>

          <p className={styles.paragraph}>
            Ambas modalidades tienen la misma validez jurídica. La elección
            dependerá principalmente de las necesidades de las partes, la
            disponibilidad para asistir a una audiencia y las características
            particulares del conflicto.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>La conciliación virtual es ideal cuando...</h3>

              <p>
                Las partes viven en ciudades diferentes, tienen poco tiempo para
                desplazarse o se encuentran fuera del país.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                La conciliación presencial puede ser recomendable cuando...
              </h3>

              <p>
                Se requiere revisar documentos físicos, facilitar la interacción
                directa entre las partes o cuando estas prefieren una reunión
                cara a cara.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación virtual en Bogotá
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Debo estar en Bogotá para participar?</h3>

              <p>
                No. Puedes conectarte desde cualquier ciudad de Colombia o
                incluso desde el exterior, siempre que cuentes con internet y el
                centro de conciliación permita la audiencia virtual.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La audiencia virtual es segura?</h3>

              <p>
                Sí. Se desarrolla mediante plataformas autorizadas que
                garantizan la identificación de las partes y la confidencialidad
                del procedimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acta tiene la misma validez jurídica?</h3>

              <p>
                Sí. Cuando la conciliación es realizada por un centro
                autorizado, el acta produce exactamente los mismos efectos
                legales que una conciliación presencial.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas realizar una conciliación virtual en Bogotá o desde
            cualquier lugar de Colombia?
          </h3>

          <p className={styles.ctaText}>
            Nuestro equipo puede orientarte durante todo el proceso de
            conciliación virtual para resolver conflictos civiles, familiares,
            laborales o comerciales de forma ágil, segura y con plena validez
            jurídica.
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
