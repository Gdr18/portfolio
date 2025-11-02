import svgCopy from "../../assets/icons/file_copy.svg?raw";
import svgDownload from "../../assets/icons/file_save.svg?raw";
import svgLinkedin from "../../assets/icons/linkedin.svg?raw";
import svgLogo from "../../assets/icons/logo.svg?raw";
import { getSvgTech } from "../../assets/icons/techs/index.js";

import contactTemplate from "./contact.html?raw";
import { iconLinkTemplate } from "../shared/templates.js";

import { addContactListeners } from "./contactListeners.js";

/**
 * Crea la sección de contacto.
 * @returns {HTMLElement} Ejemplo: <section id="contact">...</section>
 */
const createContactElement = () => {
	const linksInfo = {
		linkedin: {
			url: "https://www.linkedin.com/in/gádor-garcía-martínez-99a33717b",
			svgRaw: svgLinkedin,
			title: "LinkedIn",
		},
		github: {
			url: "https://github.com/Gdr18",
			svgRaw: getSvgTech("github"),
			title: "GitHub",
		},
		cv: {
			url: "https://drive.google.com/file/d/1UFr_j2glsetUxpApTqhdq3CTX4o5Gjdj/view?usp=drive_link",
			svgRaw: svgDownload,
			title: "Descargar CV",
		},
	};
	
	const targetBlank = true;
	const iconLinks = Object.values(linksInfo).map(link => iconLinkTemplate(link, targetBlank)).join("");

	const templateFormated = contactTemplate
		.replace("{{ logo }}", svgLogo)
		.replace("{{ socialLinks }}", iconLinks)
		.replace("{{ copyIcon }}", svgCopy);

	const contactSection = document.createElement("section");
	contactSection.setAttribute("id", "contact");
	contactSection.innerHTML = templateFormated;

	return contactSection;
};

/**
 * Agrega clases a los iconos de la sección de contacto.
 * @param {HTMLElement} section
 */
const addSvgClasses = (section) => {
	const svgSocialIcons = section.querySelectorAll(".social-container svg");
	svgSocialIcons.forEach((svg) => svg.classList.add("link-icon"));

	const svgEmailCopy = section.querySelector(".email-container svg");
	svgEmailCopy.classList.add("link-icon", "copy-icon");
};

/**
 * Renderiza la sección de contacto.
 * @returns {HTMLElement} Ejemplo: <section id="contact">...</section>
 */
export const renderContact = () => {
	const contactElement = createContactElement();

	addSvgClasses(contactElement);
	addContactListeners(contactElement);

	return contactElement;
};
