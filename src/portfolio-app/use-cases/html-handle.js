/**
 *  Carga un ícono SVG desde una ruta y lo inserta en el elemento dado.
 * @param {HTMLElement} parentElement Ejemplo: document.querySelector("#mi-elemento")
 * @param {String} iconName Ejemplo: "logo_dev"
 */
const loadIcon = async (parentElement, iconName, svgClassList = []) => {
	const pathIcon = `/icons/${iconName}.svg`;

	const loaderIcon = await fetch(pathIcon);
	const svg = await loaderIcon.text();
	parentElement.innerHTML = svg;

	if (!svgClassList.length) return;
	const svgElement = parentElement.querySelector("svg");
	svgElement.classList.add(...svgClassList);
};

/**
 * Crea un elemento HTML con los atributos dados y lo inserta en el elemento padre.
 * @param {String} tagElement Ejemplo: "a"
 * @param {HTMLElement} parentElement Ejemplo: document.querySelector(".mi-clase")
 * @param {Object<Strings>} atributes Ejemplo: { class: "mi-clase", id: "mi-id" }
 */
const createElementAndAppend = (tagElement, parentElement, atributes = {}) => {
	const element = document.createElement(tagElement);
	if (atributes) {
		Object.entries(atributes).forEach(([key, value]) => {
			element.setAttribute(key, value);
		});
	}
	parentElement.append(element);
};

export default {
	loadIcon,
	createElementAndAppend,
}