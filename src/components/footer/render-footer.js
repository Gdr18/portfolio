import { getSvgTech } from "../../assets/icons/techs/index.js";
import { buttonTemplate } from "../shared/templates.js";

const buttonInfo = {
	url: "https://github.com/Gdr18/portfolio",
	name: "GitHub Portfolio",
	svgRaw: getSvgTech("github"),
};

/**
 * Renderiza el pie de página.
 * @returns {HTMLElement} footerElement Ejemplo: <footer>...</footer>
 */
export const renderFooter = () => {
	const footerTemplate = `
    <p>Gádor García Martínez - 2025</p>
    ${buttonTemplate(buttonInfo)}
    `;

	const footerElement = document.createElement("footer");
	footerElement.innerHTML = footerTemplate;
	return footerElement;
};
