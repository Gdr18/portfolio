import { renderElement } from "./render-element";
import htmlHandle from "../use-cases/html-handle";
import htmlSkills from "../partials/skills.html?raw";
import skillsInfo from "../data/skills-info.json";

/**
 * Crea y carga los elementos <li> con los íconos SVG y badges de habilidades.
 */
const createAndLoadLis = async () => {
	for (const category of Object.values(skillsInfo)) {
		const skillsParentElement = document.querySelector(category.parentSelector);
		const parentFragment = document.createDocumentFragment();
		let position = 0;
		for (const { name: skill, src: srcImage } of category.skills) {
			position += 1;
			const liAtributes = {
				class: "logo-tech",
				style: `--position: ${position}`,
			};
			htmlHandle.createElementAndAppend("li", parentFragment, liAtributes);

			const liElement = parentFragment.querySelector("li:last-child");
			await htmlHandle.loadIcon(liElement, skill.toLowerCase());

			const imgAtributes = {
				alt: `Badge ${skill}`,
				src: srcImage,
			};
			htmlHandle.createElementAndAppend("img", liElement, imgAtributes);
		}
		skillsParentElement.append(parentFragment);
	}
};

/**
 * Renderiza la sección de habilidades en el elemento padre dado.
 * @param {String} skillsParentSelector 
 */
export const renderSkills = async (skillsParentSelector) => {
	renderElement(skillsParentSelector, htmlSkills);
	createAndLoadLis();
};
