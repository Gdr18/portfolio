import svgAboutMe from "../../assets/icons/logo_dev.svg?raw";
import svgSkills from "../../assets/icons/sdk.svg?raw";
import svgProjects from "../../assets/icons/folder_code.svg?raw";
import svgContact from "../../assets/icons/3p.svg?raw";
import svgLogo from "../../assets/icons/logo.svg?raw";

import { iconLinkTemplate } from "../shared/templates.js";

const LinksInfo = {
	ABOUT_ME: {
		url: "#about-me",
		title: "Sobre mí",
		svgRaw: svgAboutMe,
	},
	SKILLS: {
		url: "#skills",
		title: "Habilidades",
		svgRaw: svgSkills,
	},
	PROJECTS: {
		url: "#projects",
		title: "Proyectos",
		svgRaw: svgProjects,
	},
	CONTACT: {
		url: "#contact",
		title: "Contacto",
		svgRaw: svgContact,
	},
};

/**
 * Renderiza la barra de navegación.
 */
export const renderNav = () => {
	const navElement = document.createElement("nav");

	const iconsNav = Object.values(LinksInfo).map(iconLinkTemplate).join("");

	const htmlNav = `
                <a href="#home" title="Inicio">
					${svgLogo}
				</a>
                <div class="links-nav-section">
					${iconsNav}
				</div>`;

	navElement.innerHTML = htmlNav;
	navElement
		.querySelectorAll(".links-nav-section svg")
		.forEach((link) => link.classList.add("link-icon"));
	return navElement;
};
