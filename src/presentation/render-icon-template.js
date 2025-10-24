/**
 *  Carga un ícono SVG desde una ruta y lo inserta en el elemento dado.
 * @param {HTMLElement} element Ejemplo: <div></div>
 * @param {String} path Ejemplo: "/icons/icon.svg"
 */
export const loadIcon = async (element, path) => {
	const res = await fetch(path);
	const svg = await res.text();
	element.innerHTML = svg;
};
