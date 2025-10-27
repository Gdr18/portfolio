import svgGitHub from "../../assets/icons/github.svg?raw";

import { linkButtonTemplate } from "../../use-cases/generate-button.js";

const ButtonInfo = {
    URL: "https://github.com/Gdr18/portfolio",
    TEXT: "GitHub Portfolio",
    SVG: svgGitHub,
};

export const renderFooter = () => {
    const footerTemplate = `
    <p>Gádor García Martínez - 2025</p>
    ${linkButtonTemplate(ButtonInfo.SVG, ButtonInfo.URL, ButtonInfo.TEXT)}
    `;

    const footerElement = document.createElement("footer");
    footerElement.innerHTML = footerTemplate;
    return footerElement;
};
