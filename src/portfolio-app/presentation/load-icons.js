/**
 *  Carga un ícono SVG desde una ruta y lo inserta en el elemento dado.
 * @param {HTMLElement} element Ejemplo: <div></div>
 * @param {String} path Ejemplo: "/icons/icon.svg"
 */
const loadIcon = async (element, path) => {
	const res = await fetch(path);
	const svg = await res.text();
	element.innerHTML = svg;
};

const addIconAndAttributes = async (element, path, classList) => {
	await loadIcon(element, path);
	const svg = element.querySelector("svg");
	svg.classList.add(...classList);
};

export { loadIcon, addIconAndAttributes };
