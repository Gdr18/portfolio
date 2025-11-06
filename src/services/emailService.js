import emailjs from "@emailjs/browser";

/**
 * Envía un email utilizando EmailJS.
 * @param {HTMLFormElement} formElement Ejemplo: document.querySelector("form")
 * @return {Promise} Promesa que resuelve la respuesta de EmailJS.
 */
export const sendEmail = async (formElement) => {
	try {
		const response = await emailjs.sendForm(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			formElement,
			{ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
		);

		return response;
	} catch (error) {
		console.error("Error al enviar el email");
		return error;
	}
};
