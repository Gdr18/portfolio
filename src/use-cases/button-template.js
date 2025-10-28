/**
 * Genera un botón con un icono SVG.
 * @param {String} svgRaw Ejemplo: <svg>...</svg>
 * @param {String} url Ejemplo: http://github.com/...
 * @param {String} text Ejemplo: GitHub Portfolio
 * @returns {String} Ejemplo: <a>...</a>
 */
export const buttonTemplate = (svgRaw, url, text) => {
    const linkTemplate = `<a
	class="button"
	href=${url}
	target="_blank"
	rel="noreferrer"
	>
    ${svgRaw}
	${text}
</a>`;
    return linkTemplate;
};
