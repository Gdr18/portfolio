import { getSvgTech } from "../../use-cases/get-raw-svg.js";
import { buttonTemplate } from "../../use-cases/button-template.js";

const ButtonInfo = {
    URL: "https://github.com/Gdr18/portfolio",
    TEXT: "GitHub Portfolio",
    SVG: getSvgTech("github")
};

/**
 * Renderiza el pie de página.
 * @returns {HTMLElement} footerElement Ejemplo: <footer>...</footer>
 */
export const renderFooter = () => {
    const footerTemplate = `
    <p>Gádor García Martínez - 2025</p>
    ${buttonTemplate(ButtonInfo.SVG, ButtonInfo.URL, ButtonInfo.TEXT)}
    `;

    const footerElement = document.createElement("footer");
    footerElement.innerHTML = footerTemplate;
    return footerElement;
};
