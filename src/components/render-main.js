import { renderHome } from "./home/render-home.js";
import { renderSkills } from "./skills/render-skills.js";
import { renderAboutMe } from "./about-me/render-about-me.js";
import { renderProjects } from "./projects/render-projects.js"
import { renderContact } from "./contact/renderContact.js";

/**
 * Renderiza el encabezado de una sección.
 * @param {String} sectionName Ejemplo: "Sobre mí", "Proyectos", etc.
 * @returns {HTMLElement} Ejemplo: <header><h2>sectionName</h2></header>
 */
const renderHeader = (sectionName) => {
	const headerElement = document.createElement("header");
	headerElement.classList.add("heading-transition");
	const h1Template = `<h1>${sectionName}</h1>`;
	headerElement.innerHTML = h1Template;
	return headerElement;
};

const HeaderSection = {
	aboutMe: renderHeader("Sobre mí"),
	skills: renderHeader("Tecnologías"),
	projects: renderHeader("Proyectos"),
	contact: renderHeader("Contacto"),
};

/**
 * Renderiza la sección principal.
 * @returns {HTMLElement} Ejemplo: <main> ... </main>
 */
export const renderMain = () => {
	const mainElement = document.createElement("main");

	mainElement.append(
		renderHome(),
		HeaderSection.aboutMe,
		renderAboutMe(),
		HeaderSection.skills,
		renderSkills(),
		HeaderSection.projects,
		renderProjects(),
		HeaderSection.contact,
		renderContact()
	);
	return mainElement;
};
