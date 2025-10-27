import { getTechIcon } from "../../use-cases/get-tech-icons.js";
import { buttonTemplate } from "../../use-cases/button-html-template.js";

const ButtonInfo = {
    URL: "https://github.com/Gdr18/portfolio",
    TEXT: "GitHub Portfolio",
    SVG: getTechIcon("github")
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
