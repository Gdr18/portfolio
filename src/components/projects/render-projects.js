import { getSomeSvgTech } from "../../assets/icons/techs/index.js";
import { buttonTemplate } from "../shared/templates.js";

import projectsData from "./projects-info.json";
import projectsTemplate from "./project-template.html?raw";
import svgLink from "../../assets/icons/link.svg?raw";

const technologiesUsed = new Set(
	projectsData.flatMap((project) => project.technologies)
);
const svgLinks = ["github", "postman"];
const SvgEnum = getSomeSvgTech([...technologiesUsed, ...svgLinks]);

/**
 * Genera proyect en formato HTML.
 * @param {Object} objectValues Ejemplo: {title, image, description,...}
 * @returns {String} Ejemplo: "<article>...</article>"
 */
const projectTemplate = (objectValues) => {
	const { title, description, image, technologies, links } = objectValues;
	const iconsTech = technologies.map((tech) => SvgEnum[tech]).join("");

	const buttons = links
		.map((link) => {
			link.svgRaw = SvgEnum[link.name.toLowerCase()] || svgLink;
			return buttonTemplate(link);
		})
		.join("");

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
