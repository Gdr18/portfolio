/**
 * Renderiza una sección HTML en un elemento dado.
 * @param {String} selector Ejemplo: "#about"
 * @param {String} html
 */
export const renderElement = (selector, html) => {
	const element = document.querySelector(selector);
	element.innerHTML = html;
};
