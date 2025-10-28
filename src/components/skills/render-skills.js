import htmlSkills from "./skills.html?raw";
import skillsInfo from "../../data/skills-info.json";
import { getSvgTech } from "../../use-cases/get-raw-svg";

/**
 * Genera un HTML de elementos <li> con la información de las tecnologías.
 * @param {Array<Object>} listInfo Ejemplo: [{ nameTech: "JavaScript", badgeURL: "url" }, ...]
 * @returns {String} Ejemplo: '<li>...</li><li>...</li>...'
 */
const lisTemplate = (listInfo) => {
	let position = 0;
	const lisList = listInfo.map((tech) => {
		const { nameTech, badgeURL } = tech;
		const liTemplate = `
		<li class="logo-tech" style="--position: ${++position}">
			${getSvgTech(nameTech)}
			<img alt="Badge ${nameTech}" src=${badgeURL}>
		</li>
		`;
		return liTemplate;
	});
	return lisList.join("");
};

/**
 * Renderiza la sección de habilidades y tecnologías.
 * @returns {HTMLElement} skillsParentElement Ejemplo: <section id="skills">...</section>
 */
export const renderSkills = () => {
	const {
		main: lisMain,
		tools: lisTools,
		secondary: lisSecondary,
	} = skillsInfo;

	const htmlFormated = htmlSkills
		.replace("{{ lisMain }}", lisTemplate(lisMain))
		.replace("{{ lisTools }}", lisTemplate(lisTools))
		.replace("{{ lisSecondary }}", lisTemplate(lisSecondary));

	const sectionElement = document.createElement("section");
	sectionElement.setAttribute("id", "skills");
	sectionElement.innerHTML = htmlFormated;

	return sectionElement;
};
