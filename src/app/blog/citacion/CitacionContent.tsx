"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CitacionContent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.article
          id="citacion"
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Citación a Audiencia de Conciliación Laboral en Colombia: Modelo,
            Formato y Requisitos (2026)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            La citación a audiencia de conciliación laboral en Colombia es un
            documento mediante el cual un centro de conciliación, abogado o
            entidad autorizada convoca a las partes a una audiencia con el fin
            de resolver un conflicto laboral de manera voluntaria y sin acudir a
            un proceso judicial. Este procedimiento es muy utilizado en ciudades
            como Bogotá, Medellín, Cali y otras ciudades de Colombia para
            resolver conflictos entre empleadores y trabajadores.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En el derecho laboral colombiano, la conciliación permite resolver
            conflictos relacionados con liquidaciones laborales, despidos,
            salarios pendientes, prestaciones sociales, contratos de trabajo,
            indemnizaciones laborales y otros conflictos derivados de la
            relación laboral. La citación debe contener información clara sobre
            la fecha, hora, modalidad de la audiencia y los documentos que deben
            aportar las partes.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Qué debe contener una citación a audiencia de conciliación laboral?
            Requisitos y datos obligatorios
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Una citación a audiencia de conciliación laboral en Colombia debe
            contener la identificación de las partes, el asunto del conflicto
            laboral, la fecha y hora de la audiencia, la modalidad (virtual o
            presencial), los documentos que deben aportar las partes y los datos
            de contacto del centro de conciliación. Este documento es
            fundamental para garantizar que la audiencia se realice de manera
            organizada y conforme a la normativa de conciliación en Colombia.
          </motion.p>

          <motion.div
            className={styles.note}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            En Bogotá y en toda Colombia, la conciliación laboral es un
            mecanismo alternativo de solución de conflictos que permite resolver
            problemas laborales sin necesidad de iniciar un proceso judicial
            ante un juez laboral.
          </motion.div>

          {/* CUANDO SE ENVIA CITACION CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo se envía una citación a audiencia de conciliación laboral?
            </h2>

            <p className={styles.paragraph}>
              La citación a audiencia de conciliación laboral se envía una vez
              el trabajador o el empleador presenta una solicitud de
              conciliación ante un centro de conciliación autorizado. Su
              finalidad es informar oficialmente a la otra parte sobre la
              existencia del trámite, la fecha de la audiencia y las condiciones
              en las que se desarrollará el procedimiento.
            </p>

            <p className={styles.paragraph}>
              La citación garantiza que ambas partes tengan la oportunidad de
              participar, presentar sus argumentos y buscar una solución
              negociada antes de acudir a un proceso judicial ante la
              jurisdicción laboral.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Una citación correctamente elaborada brinda transparencia al
                proceso y permite que las partes conozcan con anticipación el
                objeto de la conciliación y la documentación que deben
                presentar.
              </p>
            </div>
          </div>

          {/* CASOS LABORALES EN LOS QUE NORMALMENTE SE EXPIDE UNA CITACION A CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Casos laborales en los que normalmente se expide una citación a
              conciliación
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Despido sin justa causa</h3>

                <p>
                  Para discutir indemnizaciones, pagos pendientes o acuerdos de
                  terminación del contrato.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Liquidación laboral</h3>

                <p>
                  Cuando existen diferencias sobre cesantías, primas,
                  vacaciones, intereses o indemnizaciones.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Salarios adeudados</h3>

                <p>
                  Permite negociar el pago de salarios, horas extras, recargos o
                  comisiones pendientes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Prestaciones sociales</h3>

                <p>
                  Facilita acuerdos relacionados con obligaciones laborales aún
                  no canceladas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conflictos contractuales</h3>

                <p>
                  Diferencias derivadas de contratos laborales o de su
                  ejecución.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdos de pago</h3>

                <p>
                  Cuando las partes desean pactar cronogramas de pago sin acudir
                  a un proceso judicial.
                </p>
              </div>
            </div>
          </div>

          {/* INFORMACION QUE DEBE REVISAR EL TRABAJADOR O EMPLEADOR AL RECIBIR LA CITACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Información que debe revisar el trabajador o empleador al recibir
              la citación
            </h2>

            <p className={styles.paragraph}>
              Antes de asistir a la audiencia es importante revisar
              cuidadosamente toda la información contenida en la citación. Esto
              evita inconvenientes el día de la audiencia y permite preparar
              adecuadamente la documentación.
            </p>

            <ul className={styles.list}>
              <li>Nombre completo de las partes.</li>
              <li>Fecha de expedición de la citación.</li>
              <li>Fecha y hora de la audiencia.</li>
              <li>Dirección o enlace virtual.</li>
              <li>Centro de conciliación responsable.</li>
              <li>Objeto del conflicto laboral.</li>
              <li>Documentos que deben aportarse.</li>
              <li>Información de contacto.</li>
            </ul>
          </div>

          {/* DOCUMENTOS QUE NORMALMENTE SE PRESENTAN DURANTE LA AUDIENCIA DE CONCILIACION LABORAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que normalmente se presentan durante la audiencia de
              conciliación laboral
            </h2>

            <p className={styles.paragraph}>
              Aunque cada conflicto laboral es diferente, existen documentos que
              suelen ser fundamentales para facilitar la negociación entre
              trabajador y empleador.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Contrato de trabajo</h3>

                <p>Permite verificar las condiciones inicialmente pactadas.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Liquidación</h3>

                <p>
                  Sirve para analizar los valores reconocidos y los conceptos
                  pagados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Desprendibles de nómina</h3>

                <p>
                  Ayudan a verificar salarios, descuentos y pagos efectuados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Correos electrónicos</h3>

                <p>
                  Pueden demostrar comunicaciones relevantes entre trabajador y
                  empleador.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Comprobantes de pago</h3>

                <p>
                  Respaldan el cumplimiento parcial o total de las obligaciones.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Otros soportes</h3>

                <p>
                  Cualquier documento relacionado con el conflicto objeto de
                  conciliación.
                </p>
              </div>
            </div>
          </div>

          {/* ¿QUE SUCEDE SI UNA DE LAS PARTES NO ASISTE A LA AUDIENCIA DE CONCILIACION? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si una de las partes no asiste a la audiencia de
              conciliación?
            </h2>

            <p className={styles.paragraph}>
              Cuando una de las partes no comparece a la audiencia, el
              conciliador deja constancia de la inasistencia conforme al
              procedimiento aplicable. Las consecuencias pueden variar
              dependiendo del caso y de las normas que regulen el conflicto
              específico.
            </p>

            <p className={styles.paragraph}>
              Si no se logra realizar la audiencia por falta de comparecencia o
              porque no existe acuerdo, la parte interesada puede evaluar otras
              alternativas previstas por la ley para la protección de sus
              derechos laborales.
            </p>
          </div>

          {/* MODELO DE CITACION A AUDIENCIA DE CONCILIACION LABORAL */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Modelo de Citación a Audiencia de Conciliación Laboral (Formato
            Editable)
          </motion.h3>

          <motion.pre
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            {`CITACIÓN A AUDIENCIA DE CONCILIACIÓN LABORAL No. [●]

Centro de Conciliación: [●]
Ciudad: Bogotá D.C.
Asunto: Conflicto laboral

Señor(a): [Nombre del citado]
Identificación: [●]
Dirección/Correo: [●]

Por medio de la presente se cita a AUDIENCIA DE CONCILIACIÓN LABORAL dentro del trámite solicitado por [Trabajador/Empleador]
relacionado con: [Liquidación laboral, despido, salarios pendientes, prestaciones sociales, etc.]

FECHA: [dd/mm/aaaa]
HORA: [●]
MODALIDAD: [Presencial / Virtual]

Si es VIRTUAL:
Enlace: [●]
Requisitos: conexión estable, documento de identidad.

Documentos sugeridos:
- Contrato de trabajo
- Liquidación laboral
- Desprendibles de nómina
- Correos o comunicaciones
- Otros documentos relacionados

En caso de no poder asistir, comuníquese con el Centro de Conciliación.

Atentamente,

[Nombre]
[Cargo]
[Centro de Conciliación]
[Firma]`}
          </motion.pre>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de atender una citación a conciliación laboral
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Evita procesos judiciales largos</h3>

                <p>
                  Muchas controversias pueden resolverse mediante acuerdos
                  voluntarios.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Ahorro de tiempo</h3>

                <p>
                  La conciliación suele resolverse en mucho menos tiempo que un
                  proceso judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Reducción de costos</h3>

                <p>Disminuye gastos asociados a litigios prolongados.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdos flexibles</h3>

                <p>
                  Las partes pueden construir soluciones adaptadas a sus
                  necesidades.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Seguridad jurídica</h3>

                <p>
                  Los acuerdos conciliatorios producen efectos legales cuando
                  cumplen los requisitos establecidos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mejor comunicación</h3>

                <p>
                  Favorece el diálogo entre trabajador y empleador para resolver
                  el conflicto.
                </p>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            viewport={{ once: true }}
          >
            La conciliación laboral en Colombia es una herramienta jurídica muy
            importante dentro del derecho laboral, ya que permite resolver
            conflictos laborales de forma rápida, económica y sin necesidad de
            acudir a un proceso judicial. En ciudades como Bogotá, la
            conciliación es ampliamente utilizada para resolver conflictos entre
            empleadores y trabajadores relacionados con contratos de trabajo,
            despidos, indemnizaciones, liquidaciones y prestaciones sociales.
          </motion.p>
        </motion.article>
      </div>
    </div>
  );
}
