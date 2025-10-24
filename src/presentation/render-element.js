/**
 * Renderiza una sección HTML en un elemento dado.
 * @param {HTMLElement} section Ejemplo: "#about"
 * @param {String} html
 */
export const renderElement = (section, html) => {
	const element = document.querySelector(section);
	element.innerHTML = html;
};
