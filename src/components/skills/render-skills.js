import htmlSkills from "./skills.html?raw";
import { getAllSvgTechs } from "../../assets/icons/techs";

const svgTechs = getAllSvgTechs();

/**
 * Genera un elemento <li> con la información de una tecnología.
 * @param {String} name Ejemplo: "JavaScript"
 * @param {Number} position Ejemplo: 1
 * @returns {String} Ejemplo: '<li>...</li>'
 */
const liTemplate = (name, position) => {
	return `<li class="logo-tech" style="--position: ${position}">
		${svgTechs[name.toLowerCase()]}
		<span class="advise">${name}</span>
	</li>
	`;
};
/**
 * Genera un template de elementos <li>.
 * @param {Array<String>} listInfo Ejemplo: ["JavaScript", ...]
 * @returns {String} Ejemplo: '<li>...</li><li>...</li>...'
 */
const generateSkillList = (listInfo) => {
	let position = 0;
	const lisList = listInfo.map((nameTech) => {
		return liTemplate(nameTech, ++position);
	});
	return lisList.join("");
};

/**
 * Renderiza la sección de habilidades y tecnologías.
 * @returns {HTMLElement} skillsParentElement Ejemplo: <section id="skills">...</section>
 */
export const renderSkills = () => {
	const skillsInfo = {
		main: ["HTML5", "CSS", "JavaScript", "React", "Python", "Flask", "MongoDB"],
		tools: [
			"GitHub",
			"Git",
			"Vite",
			"VSCode",
			"PyCharm",
			"Postman",
			"Trello",
			"Jira",
			"Figma",
		],
		secondary: ["MySQL", "Redis", "SASS"],
	};

	const htmlFormated = htmlSkills
		.replace("{{ lisMain }}", generateSkillList(skillsInfo.main))
		.replace("{{ lisTools }}", generateSkillList(skillsInfo.tools))
		.replace("{{ lisSecondary }}", generateSkillList(skillsInfo.secondary));

	const sectionElement = document.createElement("section");
	sectionElement.setAttribute("id", "skills");
	sectionElement.innerHTML = htmlFormated;

	return sectionElement;
};
