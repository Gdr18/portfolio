import { sendEmail } from "../../services/emailService.js";
import advise from "./adviseUser.js";
/**
 * Agrega los listeners a la sección de contacto.
 * @param {HTMLElement} section
 */
export const addContactListeners = (section) => {
	const svgEmailCopy = section.querySelector(".email-container svg");
	svgEmailCopy.addEventListener("click", copyEmail);

	const form = section.querySelector("form");
	form.addEventListener("submit", (event) => sendEmailAndReset(event, form));
};

/**
 * Copia el email al portapapeles y muestra un mensaje temporal.
 */
const copyEmail = () => {
	const email = import.meta.env.VITE_EMAIL;
	const messageElement = document.querySelector(".copy-message");
	navigator.clipboard.writeText(email).then(() => {
		advise.displayUserAdvice(messageElement);
	});
};

/**
 * Envía el email y reinicia el formulario.
 * @param {HTMLFormElement} formElement 
 * @param {Event} event 
 */
const sendEmailAndReset = async (event, formElement) => {
	event.preventDefault();

	const formAdvise = formElement.querySelector(".form-message");

	const response = await sendEmail(formElement);
	if (response?.status === 200) {
		advise.showMessage(formAdvise);
	} else {
		console.error("Error al enviar el email");
		advise.showError(formAdvise);
	}

	formElement.reset();
};
