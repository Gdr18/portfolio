import svgCopy from "../../assets/icons/file_copy.svg?raw";
import svgDownload from "../../assets/icons/file_save.svg?raw";
import svgLinkedin from "../../assets/icons/linkedin.svg?raw";
import svgLogo from "../../assets/icons/logo.svg?raw";
import { getSvgTech } from "../../assets/icons/techs";

import contactTemplate from "./contact.html?raw";
import { iconLinkTemplate } from "../../use-cases/templates.js";

import { copyEmailListener } from "./contactListeners.js";

const LinksInfo = {
	LINKEDIN: {
		url: "https://www.linkedin.com/in/gádor-garcía-martínez-99a33717b",
		svgRaw: svgLinkedin,
		title: "LinkedIn"
	},
	GITHUB: {
		url: "https://github.com/Gdr18",
		svgRaw: getSvgTech("github"),
		title: "GitHub"
	},
	DOWNLOAD_CV: {
		url: "/cv.pdf",
		svgRaw: svgDownload,
		title: "Descargar CV"	
	}
};

/**
 * Renderiza la sección de contacto.
 * @returns {HTMLElement} Ejemplo: <section id="contact"> ... </section>
 */
export const renderContact = () => {
	const iconLinks = Object.values(LinksInfo).map(iconLinkTemplate).join("");
	const templateFormated = contactTemplate
		.replace("{{ logo }}", svgLogo)
		.replace("{{ socialLinks }}", iconLinks)
		.replace("{{ copyIcon }}", svgCopy);
	
	const contactSection = document.createElement("section");
	contactSection.setAttribute("id", "contact");
	contactSection.innerHTML = templateFormated

	const svgElements = contactSection.querySelectorAll("svg");
	svgElements.forEach((svg, index) => {
		if (index === 0) return;

		if (index !== svgElements.length - 1) {
			svg.classList.add("link-icon");
		} else {
			svg.classList.add("link-icon", "copy-icon");
		}
	});

	const copyIcon = svgElements[svgElements.length - 1];

	copyIcon.addEventListener("click", copyEmailListener);

	return contactSection;
};
