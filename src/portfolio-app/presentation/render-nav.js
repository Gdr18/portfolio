import { addIconAndAttributes } from "./load-icons.js";
import { renderElement } from "./render-element.js";

const Links = {
	ABOUT_ME: {
		anchor: "#about-me",
		icon: "logo_dev",
		title: "Sobre mí",
	},
	SKILLS: {
		anchor: "#skills",
		icon: "sdk",
		title: "Habilidades",
	},
	PROJECTS: {
		anchor: "#projects",
		icon: "folder_code",
		title: "Proyectos",
	},
	CONTACT: {
		anchor: "#contact",
		icon: "3p",
		title: "Contacto",
	},
};

const ClassLinks = {
	LINK_NAV_CLASS: ["link-icon"],
	LOGO_CLASS: ["logo"],
};

// TODO: Posible reutilización y mejora
const createLinksNav = async (container) => {
	for (const key of Object.keys(Links)) {
		const link = document.createElement("a");
		link.href = Links[key].anchor;
		link.title = Links[key].title;
		container.append(link);

		const elementLink = container.querySelector("a:last-child");
		const pathIcons = `/icons/${Links[key].icon}.svg`;
		addIconAndAttributes(elementLink, pathIcons, ClassLinks.LINK_NAV_CLASS);
	}
};

export const renderNav = async (section) => {
	const html = `
                <a id="inc-logo" href="#home" title="Inicio"></a>
                <div class="nav-section"></div>`;

	renderElement(section, html);

	const elementLink = document.querySelector("#inc-logo");
	const pathLogo = "/icons/logo.svg";
	addIconAndAttributes(elementLink, pathLogo, ClassLinks.LOGO_CLASS);

	const divElement = document.querySelector(".nav-section");

	createLinksNav(divElement);
};
