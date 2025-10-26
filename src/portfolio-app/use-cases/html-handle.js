/**
 *  Carga un ícono SVG desde una ruta y lo inserta en el elemento dado.
 * @param {HTMLElement} parentElement Ejemplo: document.querySelector("#mi-elemento")
 * @param {String} iconName Ejemplo: "logo_dev"
 */
const loadIcon = async (parentElement, iconName, svgClassList = []) => {
	const pathIcon = `/icons/${iconName}.svg`;

	const loaderIcon = await fetch(pathIcon);
	const svg = await loaderIcon.text();

	parentElement.insertAdjacentHTML("beforeend", svg);
	
	if (svgClassList.length === 0) return;

	const svgElement = parentElement.querySelector("svg:last-child");
	svgElement.classList.add(...svgClassList);
};

// TODO: No me convence así planteado. Revisar.
/**
 * Crea un elemento HTML con los atributos dados y lo inserta en el elemento padre.
 * @param {String} tagElement Ejemplo: "a"
 * @param {Object<Strings>} atributes Ejemplo: { class: "mi-clase", id: "mi-id" }
 * @param {HTMLElement} parentElement Ejemplo: document.querySelector(".mi-clase")
 * @return {HTMLElement} El elemento HTML creado.
 */
const createElementAndAppend = (tagElement, atributes = {}, parentElement = null) => {
	const element = document.createElement(tagElement);
	if (atributes) {
		Object.entries(atributes).forEach(([key, value]) => {
			element.setAttribute(key, value);
		});
	}
	if (parentElement) {
		parentElement.append(element);
	}
	return element;
};

export default {
	loadIcon,
	createElementAndAppend,
}