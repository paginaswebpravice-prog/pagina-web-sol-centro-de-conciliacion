"use client";

import { FormEvent } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement)
      .value;
    const apellido = (form.elements.namedItem("apellido") as HTMLInputElement)
      .value;
    const telefono = (form.elements.namedItem("telefono") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement)
      .value;

    const texto = `
📩 *Nuevo mensaje desde la web*

👤 Nombre: ${nombre} ${apellido}
📞 Teléfono: ${telefono}
📧 Email: ${email}

💬 Mensaje:
${mensaje}
    `;

    const mensajeCodificado = encodeURIComponent(texto);

    const numeroWhatsApp = "573232904786";

    // Detectar si es móvil
    const esMovil =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );

    // URLs dependiendo del dispositivo
    const url = esMovil
      ? `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}` // Para móvil (WhatsApp App)
      : `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`; // Para PC (WhatsApp Web)

    window.open(url, "_blank");
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>¿Tienes preguntas o quieres agendar una consulta?</h2>
          <p>
            Escríbenos y con gusto te ayudaremos a planear tu proceso legal con
            nuestros expertos.
          </p>
        </div>

        {/* Formulario */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Estamos para ayudarte</h3>

          <div className={styles.row}>
            <div>
              <label htmlFor="nombre">Nombre*</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Ej: Juan"
              />
            </div>

            <div>
              <label htmlFor="apellido">Apellido*</label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                required
                placeholder="Ej: Castañeda"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <label htmlFor="telefono">Teléfono*</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                placeholder="Ej: 305 2991059"
              />
            </div>

            <div>
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Ej: correo@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mensaje">Mensaje*</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              placeholder="Quiero más información sobre..."
            ></textarea>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" required />
            <span>
              Autorizo el uso de mis datos según la{" "}
              <a
                href="https://sumapazvive.com/pages/terms/terms_and_conditions.php"
                target="_blank"
              >
                política de privacidad
              </a>
            </span>
          </div>

          <button className={styles.ctaButton} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
