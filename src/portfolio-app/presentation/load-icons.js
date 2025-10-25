/**
 *  Carga un ícono SVG desde una ruta y lo inserta en el elemento dado.
 * @param {HTMLElement} parentElement Ejemplo: document.querySelector("#mi-elemento")
 * @param {String} iconName Ejemplo: "logo_dev"
 */
export const loadIcon = async (parentElement, iconName, svgClassList = []) => {
	const pathIcon = `/icons/${iconName}.svg`;

	const loaderIcon = await fetch(pathIcon);
	const svg = await loaderIcon.text();
	parentElement.innerHTML = svg;

	if (!svgClassList.length) return;
	const svgElement = parentElement.querySelector("svg");
	svgElement.classList.add(...svgClassList);
};

export const createElement = (parentElement, tagElement, atributes = {}) => {
	const element = document.createElement(tagElement);
	if (atributes) {
		Object.entries(atributes).forEach(([key, value]) => {
			element.setAttribute(key, value);
		});
	}
	// console.log(parentElement);
	console.log(element);
	// parentElement.append(element);
};

