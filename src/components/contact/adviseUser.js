/**
 * Muestra un mensaje de aviso al usuario durante 1 segundo.
 * @param {HTMLElement} adviseElement Ejemplo: document.querySelector("#advise")
 * @param {String} message Ejemplo: "Email enviado!"
 */
const displayUserAdvice = (adviseElement, message = "") => {
	adviseElement.textContent = message || adviseElement.textContent;
	adviseElement.classList.add("visible");
	setTimeout(() => {
		adviseElement.classList.remove("visible");
	}, 2000);
};

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

export default {
	displayUserAdvice,
	showMessage,
	showError
}
