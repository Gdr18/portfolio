/**
 * Muestra un mensaje de aviso al usuario durante 1 segundo.
 * @param {HTMLElement} adviseElement Ejemplo: document.querySelector("#advise")
 * @param {String} message Ejemplo: "Email enviado!"
 */
export const displayUserAdvice = (adviseElement, message = "") => {
	adviseElement.textContent = message || adviseElement.textContent;
	adviseElement.style.display = "inline";
	setTimeout(() => {
		adviseElement.style.display = "none";
	}, 2000);
};
