import { renderHome } from "./home/render-home.js";
import { renderSkills } from "./skills/render-skills.js";
import { renderAboutMe } from "./about-me/render-about-me.js";

/**
 * Renderiza el encabezado de una sección.
 * @param {String} sectionName Ejemplo: "Sobre mí", "Proyectos", etc.
 * @returns {HTMLElement} Ejemplo: <header><h2>sectionName</h2></header>
 */
const renderHeader = (sectionName) => {
	const headerElement = document.createElement("header");
	headerElement.classList.add("heading-transition");
	const h2Template = `<h2>${sectionName}</h2>`;
	headerElement.innerHTML = h2Template;
	return headerElement;
};

const HeaderSection = {
	ABOUT_ME: renderHeader("Sobre mí"),
	SKILLS: renderHeader("Tecnologías"),
	PROJECTS: renderHeader("Proyectos"),
	CONTACT: renderHeader("Contacto"),
};

/**
 * Renderiza la sección principal.
 * @returns {HTMLElement} Ejemplo: <main> ... </main>
 */
export const renderMain = () => {
	const mainElement = document.createElement("main");

	mainElement.append(
		renderHome(),
		HeaderSection.ABOUT_ME,
		renderAboutMe(),
		HeaderSection.SKILLS,
		renderSkills()
		// HeaderSection.PROJECTS,
		// await renderProjects(),
		// HeaderSection.CONTACT,
		// await renderContact()
	);

	return mainElement;
};
