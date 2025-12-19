/**
 * Genera un botón con un icono SVG.
 * @param {string} url Ejemplo: "https://example.com"
 * @param {string} svgRaw Ejemplo: "<svg>...</svg>"
 * @param {string} name Ejemplo: "GitHub"
 * @returns {String} Ejemplo: <a>...</a>
 */
export const buttonTemplate = ({ url, svgRaw, name }) => {
	const buttonTemplate = `
	<a
		class="button"
		href=${url}
		target="_blank"
		rel="noreferrer"
		>
		${svgRaw}
		<span>${name}</span>
	</a>
	`;
	return buttonTemplate;
};

/**
 * Genera enlace HTML que contiene un SVG.
 * @param {string} url Ejemplo: "https://example.com"
 * @param {string} title Ejemplo: "Ir a Example"
 * @param {string} svgRaw Ejemplo: "<svg>...</svg>"
 * @param {boolean} targetBlank Si es true, el enlace se abrirá en una nueva pestaña.
 * @returns {String} Ejemplo: '<a href="...">...</a>'
 */
export const iconLinkTemplate = ({ url, title, svgRaw }, targetBlank = false) => {
	const linkTemplate = `
	<a href="${url}" title="${title}"${targetBlank ? ' target="_blank" rel="noreferrer"' : ''}>
		${svgRaw}
	</a>
	`;
	return linkTemplate;
};
