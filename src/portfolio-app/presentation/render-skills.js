import { renderElement } from "./render-element";
import htmlHandle from "../use-cases/html-handle";
import htmlSkills from "../partials/skills.html?raw";
import skillsInfo from "../data/skills-info.json";

const createAndLoadLis = () => {
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
			htmlHandle.createElementAndAppend("li", liAtributes, parentFragment);

			const liElement = parentFragment.querySelector("li:last-child");
			htmlHandle.loadIcon(liElement, skill.toLowerCase());

			const imgAtributes = {
				alt: `Badge ${skill}`,
				src: srcImage,
			};
			htmlHandle.createElementAndAppend("img", imgAtributes, liElement);
		}
		skillsParentElement.append(parentFragment);
	}
};

export const renderSkills = skillsParentSelector => {
	renderElement(skillsParentSelector, htmlSkills);
	createAndLoadLis();
};
