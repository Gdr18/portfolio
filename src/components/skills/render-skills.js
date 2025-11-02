import htmlSkills from "./skills.html?raw";
import skillsInfo from "./skills-info.json";
import { getAllSvgTechs } from "../../assets/icons/techs";

const svgTechs = getAllSvgTechs();

/**
 * Genera un elemento <li> con la información de una tecnología.
 * @param {Object<String, String>} objectTech Ejemplo: { nameTech: "JavaScript", badgeURL: "url" }
 * @param {Number} position Ejemplo: 1
 * @returns {String} Ejemplo: '<li>...</li>'
 */
const liTemplate = (objectTech, position) => {
	const { nameTech, badgeURL } = objectTech;
	return `<li class="logo-tech" style="--position: ${position}">
		${svgTechs[nameTech.toLowerCase()]}
		<img alt="Badge ${nameTech}" src=${badgeURL}>
	</li>
	`;
}
/**
 * Genera un template de elementos <li>.
 * @param {Array<Object>} listInfo Ejemplo: [{ nameTech: "JavaScript", badgeURL: "url" }, ...]
 * @returns {String} Ejemplo: '<li>...</li><li>...</li>...'
 */
const generateSkillList = (listInfo) => {
	let position = 0;
	const lisList = listInfo.map((objectTech) => {
		return liTemplate(objectTech, ++position);
	});
	return lisList.join("");
};

/**
 * Renderiza la sección de habilidades y tecnologías.
 * @returns {HTMLElement} skillsParentElement Ejemplo: <section id="skills">...</section>
 */
export const renderSkills = () => {
	const {
		main: primarySkillList,
		tools: toolsList,
		secondary: secondarySkillList,
	} = skillsInfo;

	const htmlFormated = htmlSkills
		.replace("{{ lisMain }}", generateSkillList(primarySkillList))
		.replace("{{ lisTools }}", generateSkillList(toolsList))
		.replace("{{ lisSecondary }}", generateSkillList(secondarySkillList));

	const sectionElement = document.createElement("section");
	sectionElement.setAttribute("id", "skills");
	sectionElement.innerHTML = htmlFormated;

	return sectionElement;
};
