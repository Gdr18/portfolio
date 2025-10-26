import htmlHandle from "../use-cases/html-handle.js";
import { renderElement } from "./render-element.js";

const LinksInfo = {
	ABOUT_ME: {
		atributes: { href: "#about-me", title: "Sobre mí" },
		iconName: "logo_dev",
	},
	SKILLS: {
		atributes: { href: "#skills", title: "Habilidades" },
		iconName: "sdk",
	},
	PROJECTS: {
		atributes: { href: "#projects", title: "Proyectos" },
		iconName: "folder_code",
	},
	CONTACT: {
		atributes: { href: "#contact", title: "Contacto" },
		iconName: "3p",
	},
};

const SVGClasses = {
	NAV: ["link-icon"],
	LOGO: ["logo"],
};

/**
 * Renderiza la barra de navegación en el elemento padre dado.
 * @param {String} navParentSelector Ejemplo: "nav"
 */
export const renderNav = (navParentSelector) => {
	const htmlNav = `
                <a id="inc-logo" href="#home" title="Inicio"></a>
                <div class="links-nav-section"></div>`;

	renderElement(navParentSelector, htmlNav);

	const logoIconName = "logo";
	const parentLogoElement = document.querySelector("#inc-logo");

	htmlHandle.loadIcon(parentLogoElement, logoIconName, SVGClasses.LOGO);

	const parentFragment = document.createDocumentFragment();
	for (const obj of Object.values(LinksInfo)) {
		htmlHandle.createElementAndAppend("a", parentFragment, obj.atributes);
		const linkElement = parentFragment.querySelector("a:last-child");
		htmlHandle.loadIcon(linkElement, obj.iconName, SVGClasses.NAV);
	}

	const linksParentElement = document.querySelector(".links-nav-section");
	linksParentElement.append(parentFragment);

};
