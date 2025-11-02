import emailjs from "@emailjs/browser";

import { displayUserAdvice } from "../components/contact/adviseUser.js";

/**
 * Muestra un mensaje de error al usuario.
 * @param {HTMLElement} adviseElement Ejemplo: document.querySelector(".form-message")
 */
const showError = (adviseElement) => {
	const errorMessage = "Error!";
	adviseElement.classList.add("error");
	displayUserAdvice(adviseElement, errorMessage);
};

/** Muestra un mensaje de éxito al usuario.
 * @param {HTMLElement} adviseElement Ejemplo: document.querySelector(".form-message")
 */
const showMessage = (adviseElement) => {
	const successMessage = "Enviado!";
    adviseElement.classList.remove("error");
    displayUserAdvice(adviseElement, successMessage);
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
		.catch(() => {
            showError(adviseElement);
			console.error("Error al enviar el email");
        });
};
