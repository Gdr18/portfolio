/**
 * Agrega los listeners a la sección de contacto.
 * @param {HTMLElement} section
 */
export const addContactListeners = (section) => {
	const svgEmailCopy = section.querySelector(".email-container svg");
	svgEmailCopy.addEventListener("click", copyEmail);

	const form = section.querySelector("form");
	form.addEventListener("submit", (event) => getDataAndSendEmail(form, event));
};


/**
 * Copia el email al portapapeles y muestra un mensaje temporal.
 */
const copyEmail = () => {
	const email = import.meta.env.VITE_EMAIL;
	const span = document.querySelector(".email-container span");
	navigator.clipboard.writeText(email).then(() => {
		span.style.display = "inline";
		setTimeout(() => {
			span.style.display = "none";
		}, 1000);
	});
};

export const sendEmail = (emailData) => {
	console.log(emailData);
};

const getDataAndSendEmail = (formElement, event) => {
	event.preventDefault();

	let emailData = {};
	const formData = new FormData(formElement);
	formData.forEach((value, key) => {
		emailData[key] = value;
	});

	sendEmail(emailData);

	formElement.reset();
};
