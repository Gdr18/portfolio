import { getSvgTech } from "../../assets/icons/techs";
import { buttonTemplate } from "../../use-cases/templates.js";

const BUTTON_INFO = {
    url: "https://github.com/Gdr18/portfolio",
    name: "GitHub Portfolio",
    svgRaw: getSvgTech("github")
};

/**
 * Renderiza el pie de página.
 * @returns {HTMLElement} footerElement Ejemplo: <footer>...</footer>
 */
export const renderFooter = () => {
    const footerTemplate = `
    <p>Gádor García Martínez - 2025</p>
    ${buttonTemplate(BUTTON_INFO)}
    `;

    const footerElement = document.createElement("footer");
    footerElement.innerHTML = footerTemplate;
    return footerElement;
};
