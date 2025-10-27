/**
 * Genera los enlaces de navegación.
 * @param {Array<Object>} listLinkValues Ejemplo: [{linkId, linkTitle, linkSvg}, ...]
 * @returns {String} Ejemplo: '<a href="...">...</a>...'
 */
export const generateIconsLinks = (listLinkValues) => {
    const linksList = listLinkValues.map(link => {
        const {linkId, linkTitle, linkSvg} = link;

        const linkTemplate = `
        <a href="${linkId}" title="${linkTitle}">
            ${linkSvg}
        </a>
        `
        return linkTemplate;
    });
    return linksList.join("");
}
