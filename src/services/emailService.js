import emailjs from "@emailjs/browser";

/**
 * Envía un email utilizando EmailJS.
 * @param {HTMLFormElement} formElement Ejemplo: document.querySelector("form")
 * @return {Promise} Promesa que resuelve la respuesta de EmailJS.
 */
export const sendEmail = (formElement) => {
	const response = emailjs
		.sendForm(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			formElement,
			{ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
		)
		.then((res) => res)
		.catch((error) => error);

	return response;
};
