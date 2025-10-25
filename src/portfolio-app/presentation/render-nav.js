import { loadIcon, createElement } from "./load-icons.js";
import { renderElement } from "./render-element.js";

const LinksInfo = {
	ABOUT_ME: {
		anchor: "#about-me",
		iconName: "logo_dev",
		title: "Sobre mí",
	},
	SKILLS: {
		anchor: "#skills",
		iconName: "sdk",
		title: "Habilidades",
	},
	PROJECTS: {
		anchor: "#projects",
		iconName: "folder_code",
		title: "Proyectos",
	},
	CONTACT: {
		anchor: "#contact",
		iconName: "3p",
		title: "Contacto",
	},
};

const SVGClasses = {
	NAV: ["link-icon"],
	LOGO: ["logo"],
};

const LINKS_PARENT_ELEMENT = document.querySelector(".links-nav-section");

const createLinksNav = async (linksParentElement) => {
	for (const obj of Object.values(LinksInfo)) {
		createElement(linksParentElement, "a", { href: obj.anchor, title: obj.title });
		//const svgParentElement = document.querySelector("a:last-child");
		//loadIcon(svgParentElement, obj.iconName, SVGClasses.NAV);
	}
};

/**
 * Renderiza la barra de navegación en el elemento padre dado.
 * @param {String} navParentSelector Ejemplo: "nav"
 */
export const renderNav = async (navParentSelector) => {
	const htmlNav = `
                <a id="inc-logo" href="#home" title="Inicio"></a>
                <div class="links-nav-section"></div>`;

	renderElement(navParentSelector, htmlNav);

	const logoIconName = "logo";
	const parentLogoElement = document.querySelector("#inc-logo");
	loadIcon(parentLogoElement, logoIconName, SVGClasses.LOGO);

	createLinksNav(LINKS_PARENT_ELEMENT);
};
