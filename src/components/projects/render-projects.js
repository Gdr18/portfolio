import projectsData from "../../data/projects-info.json";
import svgLink from "../../assets/icons/link.svg?raw";
import projectTemplate from "./project-template.html?raw";

import { getSvgTech } from "../../use-cases/get-raw-svg";
import { buttonTemplate } from "../../use-cases/button-template";

/**
 * Genera los proyectos en formato HTML.
 * @param {Array<Object>} projectsDataArray Ejemplo: [{...}, {...}, {...}]
 * @returns {String} Ejemplo: "<article>...</article> <article>...</article> <article>...</article>"
 */
const generateProjects = (projectsDataArray) => {
	const projectsArray = projectsDataArray.map((project) => {
		const logosTechArray = project.technologies.map((tech) => getSvgTech(tech));

		const buttonsArray = Object.entries(project.links).map(([tech, link]) => {
			const svgIcon =
				tech !== "Link" ? getSvgTech(tech.toLowerCase()) : svgLink;
			return buttonTemplate(svgIcon, link, tech);
		});

		const articleProject = projectTemplate
			.replace("{{ image }}", project.image)
			.replaceAll("{{ title }}", project.title)
			.replace("{{ description }}", project.description)
			.replace("{{ logos }}", logosTechArray.join(""))
			.replace("{{ buttons }}", buttonsArray.join(""));

		return articleProject;
	});
	return projectsArray.join("");
};

/**
 * Renderiza la sección de proyectos.
 * @returns {HTMLElement} Ejemplo: <section id="projects"> ... </section>
 */
export const renderProjects = () => {
	const htmlProjets = `
		<div class="project-list">
		${generateProjects(projectsData)}
		</div>
	`;

	const sectionProjects = document.createElement("section");
	sectionProjects.setAttribute("id", "projects");
	sectionProjects.innerHTML = htmlProjets;
	return sectionProjects;
};
