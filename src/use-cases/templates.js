/**
 * Genera un botón con un icono SVG.
 * @param {Object} objectValues Ejemplo: {url, title, svgRaw}
 * @returns {String} Ejemplo: <a>...</a>
 */
export const buttonTemplate = (objectValues) => {
	const { svgRaw, url, name } = objectValues;

	const buttonTemplate = `
	<a
		class="button"
		href=${url}
		target="_blank"
		rel="noreferrer"
		>
		${svgRaw}
		${name}
	</a>
	`;
	return buttonTemplate;
};

/**
 * Genera enlace HTML que contiene un SVG.
 * @param {Object} objectValues Ejemplo: {url, title, svgRaw}
 * @returns {String} Ejemplo: '<a href="...">...</a>'
 */
export const iconLinkTemplate = (objectValues) => {
	const { url, title, svgRaw } = objectValues;

	const linkTemplate = `
	<a href="${url}" title="${title}">
		${svgRaw}
	</a>
	`;
	return linkTemplate;
};
