import { getSvgTech } from "../../use-cases/get-raw-svg";
import { buttonTemplate } from "../../use-cases/templates.js";

import projectsData from "./projects-info.json";
import projectsTemplate from "./project-template.html?raw";
import svgLink from "../../assets/icons/link.svg?raw";

const ButtonIcon = {
	GITHUB: getSvgTech("github"),
	POSTMAN: getSvgTech("postman"),
	LINK: svgLink,
}
/**
 * Genera proyect en formato HTML.
 * @param {Object} objectValues Ejemplo: {title, image, description,...}
 * @returns {String} Ejemplo: "<article>...</article>"
 */
const projectTemplate = (objectValues) => {
	const { title, description, image, technologies, links } = objectValues;
	
	const iconsTech = technologies.map(getSvgTech).join("");

	const buttons = links.map(link => {
		link.svgRaw = ButtonIcon[link.name.toUpperCase()] || ButtonIcon.LINK;
		return buttonTemplate(link);
	}).join("");

	const articleProject = projectsTemplate
		.replace("{{ image }}", image)
		.replaceAll("{{ title }}", title)
		.replace("{{ description }}", description)
		.replace("{{ iconsTech }}", iconsTech)
		.replace("{{ buttons }}", buttons);

	return articleProject;
};

/**
 * Renderiza la sección de proyectos.
 * @returns {HTMLElement} Ejemplo: <section id="projects"> ... </section>
 */
export const renderProjects = () => {
	const htmlProjets = `
		<div class="project-list">
		${projectsData.map(projectTemplate).join("")}
		</div>
	`;

	const sectionProjects = document.createElement("section");
	sectionProjects.setAttribute("id", "projects");
	sectionProjects.innerHTML = htmlProjets;
	return sectionProjects;
};
