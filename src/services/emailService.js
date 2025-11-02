import emailjs from "@emailjs/browser";

import { displayUserAdvice } from "../components/contact/adviseUser.js";

const TextAdvices = {
	EMAIL_SENT: "Enviado!",
	EMAIL_ERROR: "Error!",
};

/**
 * Muestra un mensaje de error al usuario.
 * @param {HTMLElement} adviseElement Ejemplo: document.querySelector(".form-message")
 */
const showError = (adviseElement) => {
	adviseElement.classList.add("error");
	displayUserAdvice(adviseElement, TextAdvices.EMAIL_ERROR);
};

/** Muestra un mensaje de éxito al usuario.
 * @param {HTMLElement} adviseElement Ejemplo: document.querySelector(".form-message")
 */
const showMessage = (adviseElement) => {
    adviseElement.classList.remove("error");
    displayUserAdvice(adviseElement, TextAdvices.EMAIL_SENT);
};

/**
 * Envía un email utilizando EmailJS.
 * @param {HTMLFormElement} formElement Ejemplo: document.querySelector("form")
 * @param {HTMLElement} adviseElement Elemento para mostrar mensajes al usuario.
 */
export const sendEmail = (formElement, adviseElement) => {
	emailjs
		.sendForm(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			formElement,
			{ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
		)
		.then(response => {
			if (response.status === 200) {
                showMessage(adviseElement);
            } else {
                showError(adviseElement);
            }
		})
		.catch(error => {
            showError(adviseElement);
			console.error("Error al enviar el email");
        });
};
