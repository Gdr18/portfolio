/**
 * Genera los enlaces de navegación.
 * @param {Array<Object>} listLinkValues Ejemplo: [{linkId, linkTitle, linkSvg}, ...]
 * @returns {String} Ejemplo: '<a href="...">...</a>...'
 */
export const svgInLinkTemplate = (listLinkValues) => {
	const linksList = listLinkValues.map((link) => {
		const { url, title, svgRaw } = link;

		const linkTemplate = `
        <a href="${url}" title="${title}">
            ${svgRaw}
        </a>
        `;
		return linkTemplate;
	});
	return linksList.join("");
};
